package com.bourse.service.longEndImpliedVol;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.bourse.domain.ColumnConfiguration;
import com.bourse.domain.FunctionConfiguration;
import com.bourse.domain.longEndImpliedVol.LongEndImpliedVolData;
import com.bourse.dto.GraphRequestDTO;
import com.bourse.dto.GraphResponseColConfigDTO;
import com.bourse.dto.GraphResponseDTO;
import com.bourse.dto.UpdateDataDTO;
import com.bourse.dto.longEndImpliedVol.LongEndImpliedVolAuditDTO;
import com.bourse.enums.FunctionEnum;
import com.bourse.repositories.TableManagementRepository;
import com.bourse.repositories.longEndImpliedVol.LongEndImpliedVolDataRepository;
import com.bourse.service.AdminService;
import com.bourse.service.FunctionConfigurationService;
import com.bourse.util.LiquidityUtil;

@Service
public class LongEndImpliedVolService {

  public static final long BUNDS_2CM_GROUP_ID = 86L;
  public static final long BUNDS_3CM_GROUP_ID = 87L;
  public static final long BOBLS_2CM_GROUP_ID = 88L;
  public static final long BOBLS_3CM_GROUP_ID = 89L;
  public static final long SHATZ_2CM_GROUP_ID = 90L;
  public static final long SHATZ_3CM_GROUP_ID = 91L;
  public static final long BUXL_GROUP_ID = 92L;
  public static final long OAT_GROUP_ID = 93L;
  public static final long BTP_GROUP_ID = 94L;
  public static final long GILTS_GROUP_ID = 95L;
  public static final long T_NOTES_2CM_GROUP_ID = 96L;
  public static final long T_NOTES_3CM_GROUP_ID = 97L;
  public static final long T_BONDS_2CM_GROUP_ID = 98L;
  public static final long T_BONDS_3CM_GROUP_ID = 99L;

  private static final long ASSET_ID = 13L;

  public static final long MATURITY_NAME_SUBGROUP_ID = 1L;
  public static final long BS_VOL_SUBGROUP_ID = 2L;
  public static final long DELIVERED_TICK_VOL_SUBGROUP_ID = 3L;
  public static final long STRIKE_SUBGROUP_ID = 4L;
  public static final long STRADDLE_PRICE_SUBGROUP_ID = 5L;

  private static final BigDecimal TICK_VOL_DIVISOR = new BigDecimal("15.87451");
  private static final BigDecimal ONE_HUNDRED = new BigDecimal("100");

  private final LongEndImpliedVolDataRepository dataRepository;
  private final JdbcTemplate jdbcTemplate;

  @PersistenceContext
  private EntityManager entityManager;
  @Autowired
  AdminService adminService;
  @Autowired
  TableManagementRepository tableManagementRepository;
  @Autowired
  FunctionConfigurationService functionConfigurationService;
  
  public LongEndImpliedVolService(
    LongEndImpliedVolDataRepository dataRepository,
    JdbcTemplate jdbcTemplate) {
    this.dataRepository = dataRepository;
    this.jdbcTemplate = jdbcTemplate;
  }

  public boolean checkIfCanSave(String referDate, Long groupId) {
    validateSupportedGroup(groupId);
    return !dataRepository.existsByReferDateAndGroupId(referDate, groupId);
  }

  public List < LongEndImpliedVolData > findByReferDateAndGroupId(String referDate, Long groupId) {
    validateSupportedGroup(groupId);
    List < LongEndImpliedVolData > data = dataRepository.findByReferDateAndGroupId(referDate, groupId);
    data.sort(Comparator.comparing(LongEndImpliedVolData::getSubgroupId));
    return data;
  }

  public List < LongEndImpliedVolAuditDTO > findAuditData(Long groupId, String referDate) {
    validateSupportedGroup(groupId);

    StoredProcedureQuery query =
      entityManager.createStoredProcedureQuery(
        "calculating_audit_long_end_implied_vol");

    query.registerStoredProcedureParameter(
      "referDate", String.class, ParameterMode.IN);
    query.setParameter("referDate", referDate);

    query.registerStoredProcedureParameter(
      "groupId", String.class, ParameterMode.IN);
    query.setParameter("groupId", String.valueOf(groupId));

    query.execute();

    @SuppressWarnings("unchecked")
    List < Object[] > resultList = query.getResultList();

    List < LongEndImpliedVolAuditDTO > result = new ArrayList < > ();

    for (Object[] row: resultList) {
      LongEndImpliedVolAuditDTO dto = new LongEndImpliedVolAuditDTO();

      dto.setId(row[0] == null ? null : String.valueOf(row[0]));
      dto.setMaturityName(row[1] == null ? "" : String.valueOf(row[1]));
      dto.setBsVol(row[2] == null ? "" : String.valueOf(row[2]));
      dto.setDeliveredTickVol(row[3] == null ? "" : String.valueOf(row[3]));
      dto.setStrike(row[4] == null ? "" : String.valueOf(row[4]));
      dto.setStraddlePrice(row[5] == null ? "" : String.valueOf(row[5]));
      dto.setReferDate(row[6] == null ? null : String.valueOf(row[6]));

      result.add(dto);
    }

    return result;
  }

  public String findLatestData(String groupId) {
    validateSupportedGroup(Long.valueOf(groupId));
    return dataRepository.findLatest(groupId);
  }

  @Transactional
  public void saveData(List < LongEndImpliedVolData > requestData) {
    if (requestData == null || requestData.isEmpty()) {
      throw new IllegalArgumentException("LONG-END IMPLIED VOLATILITY data cannot be empty.");
    }

    String referDate = requestData.get(0).getReferDate();
    validateRequestDateScope(requestData, referDate);

    Map < Long, List < LongEndImpliedVolData >> dataByGroup = requestData.stream()
      .collect(Collectors.groupingBy(
        LongEndImpliedVolData::getGroupId,
        LinkedHashMap::new,
        Collectors.toList()));

    for (Map.Entry < Long, List < LongEndImpliedVolData >> entry: dataByGroup.entrySet()) {
      Long groupId = entry.getKey();
      List < LongEndImpliedVolData > moduleData = entry.getValue();

      validateSupportedGroup(groupId);
      validateModuleScope(moduleData, groupId, referDate);

      if (dataRepository.existsByReferDateAndGroupId(referDate, groupId)) {
        throw new IllegalStateException(
          "Data already exists for group " + groupId + " and date " + referDate + ".");
      }

      List < LongEndImpliedVolData > normalized =
        normalizeAndCalculate(moduleData, groupId, referDate);

      dataRepository.saveAll(normalized);

      /*
       * The stored procedure reads long_end_implied_vol_data directly.
       * Force pending JPA/Hibernate inserts to the database first.
       */
      entityManager.flush();

      // Rebuild the single audit row through the dedicated procedure.
      doCalculation(referDate, groupId);
    }
  }

  @Transactional
  public void updateData(List < UpdateDataDTO > updates) {
    if (updates == null || updates.isEmpty()) {
      throw new IllegalArgumentException(
        "LONG-END IMPLIED VOLATILITY update data cannot be empty.");
    }

    Long groupId = Long.valueOf(updates.get(0).getGroupId());
    String referDate = updates.get(0).getReferdate();
    validateSupportedGroup(groupId);

    for (UpdateDataDTO update: updates) {
      if (!String.valueOf(groupId).equals(update.getGroupId()) ||
        !referDate.equals(update.getReferdate())) {
        throw new IllegalArgumentException(
          "All updates must belong to the same module and reference date.");
      }

      Long subgroupId = Long.valueOf(update.getSubgroupId());

      if (subgroupId == DELIVERED_TICK_VOL_SUBGROUP_ID) {
        continue;
      }

      LongEndImpliedVolData entity =
        dataRepository.findByReferDateAndGroupIdAndSubgroupId(
          referDate, groupId, subgroupId);

      if (entity == null) {
        entity = LongEndImpliedVolData.builder()
          .referDate(referDate)
          .groupId(groupId)
          .subgroupId(subgroupId)
          .build();
      }

      entity.setValue(update.getValue());
      dataRepository.save(entity);
    }

    recalculateDerivedData(groupId, referDate);

    /*
     * Ensure the edited values and recalculated DELIVERED TICK VOL are visible
     * before the procedure reads the source table.
     */
    entityManager.flush();

    doCalculation(referDate, groupId);
  }

  /**
   * Batch Loader support for LONG-END IMPLIED VOLATILITY only.
   *
   * The selected groupId represents exactly one MODULE (86-99). This method
   * deliberately does not alter the existing uploader behavior for any other
   * asset class.
   *
   * INSERT:
   * - expects the four INPUT subgroups (1,2,4,5) per date;
   * - calculates subgroup 3 (Delivered Tick Vol) with the same manual-input logic;
   * - rebuilds the audit row through the existing calculation procedure.
   *
   * UPDATE:
   * - updates only selected INPUT subgroups;
   * - recalculates Delivered Tick Vol automatically;
   * - rebuilds the audit row.
   */
  @Transactional
  public void uploadModuleData(
    List < LongEndImpliedVolData > inputData,
    boolean updateOperation,
    Set < Long > selectedSubgroupIds) {

    if (inputData == null || inputData.isEmpty()) {
      throw new IllegalArgumentException(
        "LONG-END IMPLIED VOLATILITY batch data cannot be empty.");
    }

    Long groupId = inputData.get(0).getGroupId();
    validateSupportedGroup(groupId);

    if (updateOperation &&
      (selectedSubgroupIds == null || selectedSubgroupIds.isEmpty())) {
      throw new IllegalArgumentException(
        "Select at least one input column to update.");
    }

    Map < String, List < LongEndImpliedVolData >> dataByDate = inputData.stream()
      .collect(Collectors.groupingBy(
        LongEndImpliedVolData::getReferDate,
        LinkedHashMap::new,
        Collectors.toList()));

    for (Map.Entry < String, List < LongEndImpliedVolData >> dateEntry: dataByDate.entrySet()) {
      String referDate = dateEntry.getKey();
      List < LongEndImpliedVolData > dateData = dateEntry.getValue();

      for (LongEndImpliedVolData item: dateData) {
        if (!groupId.equals(item.getGroupId())) {
          throw new IllegalArgumentException(
            "A batch upload can target only one LONG-END IMPLIED VOLATILITY module.");
        }
      }

      boolean exists = dataRepository.existsByReferDateAndGroupId(referDate, groupId);

      if (!updateOperation) {
        if (exists) {
          throw new IllegalStateException(
            "Data already exists for group " + groupId +
            " and date " + referDate +
            ". Please use 'Update Existing Data'.");
        }

        List < LongEndImpliedVolData > normalized =
          normalizeAndCalculate(dateData, groupId, referDate);

        dataRepository.saveAll(normalized);
        entityManager.flush();
        doCalculation(referDate, groupId);
        continue;
      }

      if (!exists) {
        throw new IllegalStateException(
          "No existing data found for group " + groupId +
          " and date " + referDate +
          ". Please use 'Insert New Data'.");
      }

      for (LongEndImpliedVolData incoming: dateData) {
        Long subgroupId = incoming.getSubgroupId();

        if (subgroupId == DELIVERED_TICK_VOL_SUBGROUP_ID) {
          continue;
        }

        if (!selectedSubgroupIds.contains(subgroupId)) {
          continue;
        }

        LongEndImpliedVolData entity =
          dataRepository.findByReferDateAndGroupIdAndSubgroupId(
            referDate, groupId, subgroupId);

        if (entity == null) {
          entity = buildData(referDate, groupId, subgroupId, "");
        }

        entity.setValue(incoming.getValue() == null ? "" : incoming.getValue());
        dataRepository.save(entity);
      }

      /*
       * B&S Vol and/or Strike may have changed. Always recalculate the
       * derived Tick Vol using the final persisted input values.
       */
      entityManager.flush();
      recalculateDerivedData(groupId, referDate);
      entityManager.flush();
      doCalculation(referDate, groupId);
    }
  }

  @Transactional
  public void deleteData(Long groupId, String referDate) {
    validateSupportedGroup(groupId);

    String auditTable = resolveAuditTable(groupId);
    jdbcTemplate.update(
      "DELETE FROM `" + auditTable + "` WHERE refer_date = ?",
      referDate);

    dataRepository.deleteByGroupIdAndReferDate(groupId, referDate);
  }

  public void doCalculation(String referDate, Long groupId) {
    validateSupportedGroup(groupId);

    /*
     * Defensive flush for every caller: the procedure queries the physical
     * source table, so no pending JPA write should remain unflushed.
     */
    entityManager.flush();

    StoredProcedureQuery query =
      entityManager.createStoredProcedureQuery("calculating_long_end_implied_vol");

    query.registerStoredProcedureParameter("referDate", String.class, ParameterMode.IN);
    query.setParameter("referDate", referDate);

    query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
    query.setParameter("groupId", String.valueOf(groupId));

    query.execute();
    entityManager.clear();
  }

  @Transactional
  public void doCalculationLoader(String fromDate, String toDate, Long groupId) {
    validateSupportedGroup(groupId);

    StoredProcedureQuery query =
      entityManager.createStoredProcedureQuery("calculating_long_end_implied_vol_loader");

    query.registerStoredProcedureParameter("fromDate", String.class, ParameterMode.IN);
    query.setParameter("fromDate", fromDate);

    query.registerStoredProcedureParameter("toDate", String.class, ParameterMode.IN);
    query.setParameter("toDate", toDate);

    query.registerStoredProcedureParameter("groupId", String.class, ParameterMode.IN);
    query.setParameter("groupId", String.valueOf(groupId));

    query.execute();
    entityManager.clear();
  }

  private List < LongEndImpliedVolData > normalizeAndCalculate(
    List < LongEndImpliedVolData > requestData,
    Long groupId,
    String referDate) {

    List < LongEndImpliedVolData > result = new ArrayList < > ();

    String maturity = findValue(requestData, MATURITY_NAME_SUBGROUP_ID);
    String bsVol = findValue(requestData, BS_VOL_SUBGROUP_ID);
    String strike = findValue(requestData, STRIKE_SUBGROUP_ID);
    String straddle = findValue(requestData, STRADDLE_PRICE_SUBGROUP_ID);
    String deliveredTickVol = calculateDeliveredTickVol(bsVol, strike);

    result.add(buildData(referDate, groupId, MATURITY_NAME_SUBGROUP_ID, maturity));
    result.add(buildData(referDate, groupId, BS_VOL_SUBGROUP_ID, bsVol));
    result.add(buildData(referDate, groupId, DELIVERED_TICK_VOL_SUBGROUP_ID, deliveredTickVol));
    result.add(buildData(referDate, groupId, STRIKE_SUBGROUP_ID, strike));
    result.add(buildData(referDate, groupId, STRADDLE_PRICE_SUBGROUP_ID, straddle));

    return result;
  }

  private void recalculateDerivedData(Long groupId, String referDate) {
    List < LongEndImpliedVolData > current =
      dataRepository.findByReferDateAndGroupId(referDate, groupId);

    String bsVol = findValue(current, BS_VOL_SUBGROUP_ID);
    String strike = findValue(current, STRIKE_SUBGROUP_ID);
    String deliveredTickVol = calculateDeliveredTickVol(bsVol, strike);

    LongEndImpliedVolData tickEntity =
      dataRepository.findByReferDateAndGroupIdAndSubgroupId(
        referDate, groupId, DELIVERED_TICK_VOL_SUBGROUP_ID);

    if (tickEntity == null) {
      tickEntity = buildData(
        referDate, groupId, DELIVERED_TICK_VOL_SUBGROUP_ID, deliveredTickVol);
    } else {
      tickEntity.setValue(deliveredTickVol);
    }

    dataRepository.save(tickEntity);
  }

  private String calculateDeliveredTickVol(String bsVolValue, String strikeValue) {
    BigDecimal bsVol = parseVolatility(bsVolValue);
    BigDecimal strike = parseDecimal(strikeValue, "STRIKE");

    return strike
      .multiply(bsVol)
      .multiply(ONE_HUNDRED)
      .divide(TICK_VOL_DIVISOR, 10, RoundingMode.HALF_UP)
      .setScale(1, RoundingMode.HALF_UP)
      .toPlainString();
  }

  private BigDecimal parseVolatility(String rawValue) {
    if (rawValue == null || rawValue.trim().isEmpty()) {
      throw new IllegalArgumentException(
        "B&S VOL is required to calculate DELIVERED TICK VOL.");
    }

    String normalized = rawValue.trim().replace(",", "");
    boolean explicitPercent = normalized.endsWith("%");

    if (explicitPercent) {
      normalized = normalized.substring(0, normalized.length() - 1).trim();
    }

    BigDecimal value = parseDecimal(normalized, "B&S VOL");

    if (explicitPercent || value.abs().compareTo(BigDecimal.ONE) > 0) {
      return value.divide(ONE_HUNDRED, 12, RoundingMode.HALF_UP);
    }

    return value;
  }

  private BigDecimal parseDecimal(String rawValue, String fieldName) {
    if (rawValue == null || rawValue.trim().isEmpty()) {
      throw new IllegalArgumentException(fieldName + " is required.");
    }

    try {
      return new BigDecimal(rawValue.trim().replace(",", ""));
    } catch (NumberFormatException ex) {
      throw new IllegalArgumentException(
        fieldName + " must be numeric: " + rawValue, ex);
    }
  }

  private String findValue(List < LongEndImpliedVolData > data, Long subgroupId) {
    Optional < LongEndImpliedVolData > item = data.stream()
      .filter(value -> subgroupId.equals(value.getSubgroupId()))
      .findFirst();

    return item.map(LongEndImpliedVolData::getValue).orElse(null);
  }

  private LongEndImpliedVolData buildData(
    String referDate,
    Long groupId,
    Long subgroupId,
    String value) {

    return LongEndImpliedVolData.builder()
      .referDate(referDate)
      .groupId(groupId)
      .subgroupId(subgroupId)
      .value(value)
      .build();
  }

  private void validateRequestDateScope(
    List < LongEndImpliedVolData > data,
    String referDate) {

    if (referDate == null || referDate.trim().isEmpty()) {
      throw new IllegalArgumentException("Reference date is required.");
    }

    for (LongEndImpliedVolData item: data) {
      if (item == null || !referDate.equals(item.getReferDate())) {
        throw new IllegalArgumentException(
          "All values must belong to the same reference date.");
      }
    }
  }

  private void validateModuleScope(
    List < LongEndImpliedVolData > moduleData,
    Long groupId,
    String referDate) {

    for (LongEndImpliedVolData item: moduleData) {
      if (item == null ||
        !groupId.equals(item.getGroupId()) ||
        !referDate.equals(item.getReferDate())) {

        throw new IllegalArgumentException(
          "Invalid module data for group " +
          groupId +
          " and date " +
          referDate +
          ".");
      }
    }
  }

  private void validateSupportedGroup(Long groupId) {
    if (groupId == null) {
      throw new IllegalArgumentException(
        "Unsupported LONG-END IMPLIED VOLATILITY group: null");
    }

    Integer count = jdbcTemplate.queryForObject(
      "SELECT COUNT(*) FROM table_management WHERE asset_id = ? AND group_id = ?",
      Integer.class,
      ASSET_ID,
      groupId);

    if (count == null || count == 0) {
      throw new IllegalArgumentException(
        "Unsupported LONG-END IMPLIED VOLATILITY group: " + groupId);
    }
  }

  private String resolveAuditTable(Long groupId) {
    List < String > tables = jdbcTemplate.queryForList(
      "SELECT DISTINCT table_name FROM table_management WHERE asset_id = ? AND group_id = ?",
      String.class,
      ASSET_ID,
      groupId);

    if (tables.size() != 1) {
      throw new IllegalStateException(
        "Expected one audit table for LONG-END IMPLIED VOLATILITY group " +
        groupId +
        " but found " +
        tables.size());
    }

    String tableName = tables.get(0);
    if (tableName == null || !tableName.matches("[A-Za-z0-9_]+")) {
      throw new IllegalStateException(
        "Invalid audit table configured for LONG-END IMPLIED VOLATILITY group " +
        groupId);
    }

    return tableName;
  }
  public List < GraphResponseColConfigDTO > getGraphDataByType(GraphRequestDTO graphReqDTO) {

	    boolean hasData = adminService.getData();
	    if (!hasData)
	      return null;

	    List < GraphResponseColConfigDTO > l1 = new ArrayList < > ();

	    if (graphReqDTO.getGroupId1() != null) {
	      l1.add(getGraphDataResult(graphReqDTO, false));
	    }
	    if (graphReqDTO.getIsFunctionGraph() != null ? graphReqDTO.getIsFunctionGraph().equals("true") : false) {
	      l1.add(getGraphDataResult(graphReqDTO, true));
	    }
	    if (graphReqDTO.getGroupId2() != null) {
	      GraphRequestDTO graphRequestDTO = GraphRequestDTO.builder().groupId1(graphReqDTO.getGroupId2())
	        .subGroupId1(graphReqDTO.getSubGroupId2())
	        .period(graphReqDTO.getPeriod())
	        .type(graphReqDTO.getType())
	        .fromdate(graphReqDTO.getFromdate())
	        .todate(graphReqDTO.getTodate())
	        .functionId(graphReqDTO.getFunctionId())
	        .isFunctionGraph(graphReqDTO.getIsFunctionGraph())
	        .removeEmpty1(graphReqDTO.getRemoveEmpty2())
	        .build();
	      l1.add(getGraphDataResult(graphRequestDTO, false));
	    }

	    return l1;

	  }
  private boolean isLongEndImpliedVolGroup(String groupId) {

	    if (groupId == null || groupId.trim().isEmpty()) {
	        return false;
	    }

	    try {

	        long id = Long.parseLong(groupId);

	        return id >= BUNDS_2CM_GROUP_ID
	                && id <= T_BONDS_3CM_GROUP_ID;

	    } catch (NumberFormatException ex) {

	        return false;
	    }
	}
  public GraphResponseColConfigDTO getGraphDataResult(
	        GraphRequestDTO graphReqDTO,
	        Boolean isFunction) {

	    boolean hasData = adminService.getData();

	    if (!hasData) {
	        return null;
	    }

	    StoredProcedureQuery query =
	            this.entityManager.createStoredProcedureQuery(
	                    "dynamic_calculation_graph_main",
	                    GraphResponseDTO.class);

	    ColumnConfiguration config = null;

	    GraphResponseColConfigDTO graphResponseColConfigDTO = null;

	    String groupId = graphReqDTO.getGroupId1();
	    String subGroupId = graphReqDTO.getSubGroupId1();

	    /*
	     * LEIV groups (86-99) use group-specific descriptions because the same
	     * column names such as bs_vol and delivered_tick_vol are repeated across
	     * multiple LEIV modules.
	     *
	     * Example:
	     *   LEIV 86/2 -> bs_vol-86
	     *
	     * External series reused by LEIV Chart 1, such as Option Volume, keep
	     * their original ColumnConfiguration description.
	     *
	     * Examples:
	     *   Volume 17/1 -> bund1
	     *   Volume 17/2 -> bund2
	     *   Volume 17/3 -> bund1_bund2
	     */
	    String columnName = tableManagementRepository
	            .findByGroupIdAndSubgroupId(groupId, subGroupId)
	            .getColumnName();

	    String description;

	    if (isLongEndImpliedVolGroup(groupId)) {
	        description = columnName + "-" + groupId;
	    } else {
	        description = columnName;
	    }

	    System.out.println("isFunction: " + isFunction);
	    System.out.println("groupId: " + groupId);
	    System.out.println("subGroupId: " + subGroupId);
	    System.out.println("description: " + description);
	    System.out.println("period: " + graphReqDTO.getPeriod());
	    System.out.println("type: " + graphReqDTO.getType());
	    System.out.println(
	            "fromdate: " + graphReqDTO.getFromdate()
	                    + " to date: "
	                    + graphReqDTO.getTodate());

	    config =
	            adminService
	                    .getColumnsconfigurationByGroupAndSubgroupDescription(
	                            groupId,
	                            subGroupId,
	                            description);

	    if (config == null) {
	        throw new IllegalStateException(
	                "No column configuration found for groupId="
	                        + groupId
	                        + ", subGroupId="
	                        + subGroupId
	                        + ", description="
	                        + description);
	    }

	    if (isFunction) {

	        FunctionConfiguration fConfig =
	                functionConfigurationService
	                        .findFunctionConfigurationByConfigIdAndFonctionId(
	                                String.valueOf(config.getId()),
	                                graphReqDTO.getFunctionId());

	        if (fConfig == null) {
	            throw new IllegalStateException(
	                    "No function configuration found for configId="
	                            + config.getId()
	                            + ", functionId="
	                            + graphReqDTO.getFunctionId());
	        }

	        config = ColumnConfiguration.builder()
	                .chartColor(
	                        fConfig.getChartColor() == null
	                                ? "#F0AB2E"
	                                : fConfig.getChartColor())
	                .chartShowgrid(fConfig.getChartShowgrid())
	                .chartSize(fConfig.getChartSize())
	                .chartTransparency(
	                        fConfig.getChartTransparency() == null
	                                ? "0.50"
	                                : fConfig.getChartTransparency())
	                .chartType(fConfig.getChartType())
	                .chartshowMarkes(fConfig.getChartshowMarkes())
	                .displayDescription(fConfig.getDisplayDescription())
	                .yAxisFormat(fConfig.getYAxisFormat())
	                .startDate(fConfig.getStartDate())
	                .dataFormat(fConfig.getDataFormat())
	                .build();
	    }

	    query.registerStoredProcedureParameter(
	            "groupId",
	            String.class,
	            ParameterMode.IN);

	    query.setParameter(
	            "groupId",
	            graphReqDTO.getGroupId1());

	    query.registerStoredProcedureParameter(
	            "fromDate",
	            String.class,
	            ParameterMode.IN);

	    query.setParameter(
	            "fromDate",
	            graphReqDTO.getFromdate());

	    query.registerStoredProcedureParameter(
	            "toDate",
	            String.class,
	            ParameterMode.IN);

	    query.setParameter(
	            "toDate",
	            graphReqDTO.getTodate());

	    query.registerStoredProcedureParameter(
	            "subgroupId",
	            String.class,
	            ParameterMode.IN);

	    query.setParameter(
	            "subgroupId",
	            graphReqDTO.getSubGroupId1());

	    query.registerStoredProcedureParameter(
	            "factor",
	            String.class,
	            ParameterMode.IN);

	    query.setParameter(
	            "factor",
	            graphReqDTO.getFactor1());

	    query.registerStoredProcedureParameter(
	            "dayOrweek",
	            String.class,
	            ParameterMode.IN);

	    query.setParameter(
	            "dayOrweek",
	            isFunction
	                    ? "d"
	                    : graphReqDTO.getPeriod());

	    query.registerStoredProcedureParameter(
	            "isFunction",
	            String.class,
	            ParameterMode.IN);

	    query.registerStoredProcedureParameter(
	            "functionCode",
	            String.class,
	            ParameterMode.IN);

	    query.registerStoredProcedureParameter(
	            "type",
	            String.class,
	            ParameterMode.IN);

	    if (isFunction) {

	        query.setParameter(
	                "isFunction",
	                graphReqDTO.getIsFunctionGraph());

	        query.setParameter(
	                "functionCode",
	                FunctionEnum.getFunctionByID(
	                        graphReqDTO.getFunctionId().isEmpty()
	                                ? 0
	                                : Integer.valueOf(
	                                        graphReqDTO.getFunctionId())));

	        query.setParameter(
	                "type",
	                "0");

	    } else {

	        query.setParameter(
	                "isFunction",
	                "false");

	        query.setParameter(
	                "functionCode",
	                "");

	        query.setParameter(
	                "type",
	                graphReqDTO.getType() == null
	                        ? "0"
	                        : graphReqDTO.getType());
	    }

	    query.execute();

	    @SuppressWarnings("unchecked")
	    List<GraphResponseDTO> graphResponseDTOlst1 =
	            (List<GraphResponseDTO>) query.getResultList();

	    List<GraphResponseDTO> graphResponseDTOlstEmpty =
	            LiquidityUtil.removeReplaceEmptyValueWithNull(
	                    graphResponseDTOlst1);

	    graphResponseDTOlst1.clear();
	    graphResponseDTOlst1 = graphResponseDTOlstEmpty;

	    if (graphReqDTO.getRemoveEmpty1() != null
	            && graphReqDTO.getRemoveEmpty1()
	                    .equalsIgnoreCase("true")) {

	        List<GraphResponseDTO> graphResponseDTOlst =
	                LiquidityUtil.removeEmptyY(
	                        graphResponseDTOlst1);

	        graphResponseDTOlst1.clear();
	        graphResponseDTOlst1 = graphResponseDTOlst;
	    }

	    graphResponseColConfigDTO =
	            GraphResponseColConfigDTO.builder()
	                    .graphResponseDTOLst(graphResponseDTOlst1)
	                    .config(config)
	                    .build();

	    entityManager.clear();

	    return graphResponseColConfigDTO;
	}
}