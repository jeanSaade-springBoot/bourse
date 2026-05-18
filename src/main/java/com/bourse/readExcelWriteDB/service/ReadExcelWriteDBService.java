package com.bourse.readExcelWriteDB.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.authsecurity.enums.FailureEnum;
import com.bourse.authsecurity.enums.MessageEnum;
import com.bourse.authsecurity.exception.BadRequestException;
import com.bourse.domain.BaseMetals;
import com.bourse.domain.BoblOptionsVolume;
import com.bourse.domain.BundOptionsVolume;
import com.bourse.domain.BuxlOptionsVolume;
import com.bourse.domain.CdsData;
import com.bourse.domain.CorporateYieldsData;
import com.bourse.domain.EcbExcessLiquidity;
import com.bourse.domain.EcbQeLiquidity;
import com.bourse.domain.EnergyData;
import com.bourse.domain.EuriborOptionsVolume;
import com.bourse.domain.EurozoneMonetaryMass;
import com.bourse.domain.FoodStuffData;
import com.bourse.domain.FxUsdData;
import com.bourse.domain.PreciousMetals;
import com.bourse.domain.ShatzOptionsVolume;
import com.bourse.domain.SubGroup;
import com.bourse.domain.TransportationData;
import com.bourse.domain.cryptos.CryptosData;
import com.bourse.domain.longEnds.LongEndData;
import com.bourse.domain.macro.MacroData;
import com.bourse.domain.rates.RatesData;
import com.bourse.domain.skews.LongSkewsData;
import com.bourse.domain.skews.ShortSkewsData;
import com.bourse.domain.sti.StiAsiaData;
import com.bourse.domain.sti.StiEmergingData;
import com.bourse.domain.sti.StiEuropeData;
import com.bourse.domain.sti.StiWallStreetData;
import com.bourse.domain.usJobs.UsJobsData;
import com.bourse.readExcelWriteDB.dto.DataDTO;
import com.bourse.readExcelWriteDB.dto.ReadExcelWriteDBDTO;
import com.bourse.readExcelWriteDB.enums.SubGroupEnum;
import com.bourse.readExcelWriteDB.util.ReadExcelWriteDBUtil;
import com.bourse.readExcelWriteDB.util.TriConsumer;
import com.bourse.repositories.SubGroupRepository;
import com.bourse.service.BaseMetalsService;
import com.bourse.service.BoblOptionsVolumeService;
import com.bourse.service.BundOptionsVolumeService;
import com.bourse.service.BuxlOptionsVolumeService;
import com.bourse.service.CdsDataService;
import com.bourse.service.CorporatesYieldsService;
import com.bourse.service.EcbExcessLiquidityService;
import com.bourse.service.EcbQeLiquidityService;
import com.bourse.service.EnergyService;
import com.bourse.service.EuriborOptionsVolumeService;
import com.bourse.service.EzMonetaryMassLiquidityService;
import com.bourse.service.FoodStuffService;
import com.bourse.service.FxDataService;
import com.bourse.service.PerciousMetalsService;
import com.bourse.service.ShatzOptionsVolumeService;
import com.bourse.service.TransportationService;
import com.bourse.service.cryptos.CryptosService;
import com.bourse.service.longEnds.LongEndsService;
import com.bourse.service.macro.MacroService;
import com.bourse.service.rates.RatesService;
import com.bourse.service.skews.SkewsService;
import com.bourse.service.sti.StiService;
import com.bourse.service.usJobs.UsJobsService;
import java.util.function.BiFunction;
import java.util.function.BiPredicate;
import java.util.function.Consumer;

import com.bourse.readExcelWriteDB.util.TriPredicate;
import com.bourse.readExcelWriteDB.util.TriFunction;
import com.bourse.readExcelWriteDB.util.QuadConsumer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
public class ReadExcelWriteDBService {

	@Autowired
	PerciousMetalsService perciousMetalsService;
	@Autowired
	BaseMetalsService baseMetalsService;
	@Autowired
	FoodStuffService foodStuffService;
	@Autowired
	EnergyService energyService;
	@Autowired
	TransportationService transportationService;
	@Autowired
	CorporatesYieldsService corporatesYieldsService;
	@Autowired
	EcbExcessLiquidityService ecbExcessLiquidityService;
	@Autowired
	EcbQeLiquidityService ecbQeLiquidityService;
	@Autowired
	EzMonetaryMassLiquidityService ezMonetaryMassLiquidityService;
	@Autowired
	BundOptionsVolumeService bundOptionsVolumeService;
	@Autowired
	BoblOptionsVolumeService boblOptionsVolumeService;
	@Autowired
	BuxlOptionsVolumeService buxlOptionsVolumeService;
	@Autowired
	ShatzOptionsVolumeService shatzOptionsVolumeService;
	@Autowired
	EuriborOptionsVolumeService euriborOptionsVolumeService;
	@Autowired
	SubGroupRepository subGroupRepository;
	@Autowired
	CdsDataService cdsDataService;
	@Autowired
	FxDataService fxDataService;
	@Autowired
	SkewsService skewsService;
	@Autowired
	StiService stiService;
	@Autowired
	MacroService macroService;
	@Autowired
	RatesService ratesService;
	@Autowired
	LongEndsService longEndsService;
	@Autowired
	CryptosService cryptosService;
	@Autowired
	UsJobsService usJobsService;
	@PersistenceContext
	private EntityManager entityManager;

	private static final Logger logger = LoggerFactory.getLogger(ReadExcelWriteDBService.class);

	private <T> List<T> processSubgroups(ReadExcelWriteDBDTO dto, List<String> subgroups, int groupId,
			boolean useSubgroupEnum, BiPredicate<String, Long> existsCheck, BiFunction<DataDTO, Long, T> entityBuilder,
			Consumer<List<T>> saveFunction, TriConsumer<DataDTO, Long, String> updateFunction) {

		List<T> allData = new ArrayList<>();

		for (String subGroupId : subgroups) {

			Long subgroupIdLong = Long.valueOf(subGroupId);

			List<T> batchList = new ArrayList<>();

			String excelColumn = useSubgroupEnum
					? SubGroupEnum.getIndexByGroupAndSubGroupgroupId(groupId, Integer.valueOf(subGroupId))
					: subGroupId;

			List<DataDTO> rowData = ReadExcelWriteDBUtil.readExcelFile(dto.getFile(), "0", excelColumn);

			for (DataDTO data : rowData) {

				if (existsCheck.test(data.getDate(), subgroupIdLong)) {

					updateFunction.accept(data, subgroupIdLong, data.getValue());

					T updatedEntity = entityBuilder.apply(data, subgroupIdLong);

					allData.add(updatedEntity);

					continue;
				}

				T entity = entityBuilder.apply(data, subgroupIdLong);

				batchList.add(entity);
				allData.add(entity);
			}

			if (!batchList.isEmpty()) {
				saveFunction.accept(batchList);
			}
		}

		return allData;
	}

	private <T> List<T> processSubgroupsWithStringDate(

			ReadExcelWriteDBDTO dto, List<String> subgroups, int[] subgroupOrder, BiPredicate<String, Long> existsCheck,
			BiFunction<DataDTO, Long, T> entityBuilder, Consumer<List<T>> saveFunction,
			TriConsumer<DataDTO, Long, String> updateFunction

	) {

		List<T> allData = new ArrayList<>();

		int i = 0;

		for (String subGroupId : subgroups) {

			Long subgroupIdLong = Long.valueOf(subgroupOrder[i]);

			List<T> batchList = new ArrayList<>();

			List<DataDTO> rowData = ReadExcelWriteDBUtil.readExcelFileWithString(dto.getFile(), "0", subGroupId);

			for (DataDTO data : rowData) {

				if (existsCheck.test(data.getDate(), subgroupIdLong)) {

					updateFunction.accept(data, subgroupIdLong, data.getValue());

					T updatedEntity = entityBuilder.apply(data, subgroupIdLong);

					allData.add(updatedEntity);

					continue;
				}

				T entity = entityBuilder.apply(data, subgroupIdLong);

				batchList.add(entity);
				allData.add(entity);
			}

			if (!batchList.isEmpty()) {
				saveFunction.accept(batchList);
			}

			i++;
		}

		return allData;
	}

	private <T> List<T> processGroupedStringDateSubgroups(

			ReadExcelWriteDBDTO dto,

			List<String> subgroups,

			int[] subgroupOrder,

			Long groupId,

			TriPredicate<String, Long, Long> existsCheck,

			TriFunction<DataDTO, Long, Long, T> entityBuilder,

			Consumer<List<T>> saveFunction,

			QuadConsumer<String, Long, Long, String> updateFunction

	) {

		List<T> allData = new ArrayList<>();

		List<T> batchList = new ArrayList<>();

		int i = 0;

		for (String subGroupId : subgroups) {

			Long subgroupId = Long.valueOf(subgroupOrder[i]);

			List<DataDTO> rowData = ReadExcelWriteDBUtil.readExcelFileWithString(dto.getFile(), "0", subGroupId);

			for (DataDTO data : rowData) {

				boolean exists = existsCheck.test(data.getDate(), groupId, subgroupId);

				if (exists) {

					updateFunction.accept(data.getDate(), groupId, subgroupId, data.getValue());

					T updatedEntity = entityBuilder.apply(data, groupId, subgroupId);

					allData.add(updatedEntity);

				} else {

					T entity = entityBuilder.apply(data, groupId, subgroupId);

					batchList.add(entity);

					allData.add(entity);
				}
			}

			i++;
		}

		if (!batchList.isEmpty()) {

			saveFunction.accept(batchList);
		}

		return allData;
	}

	@Transactional
	public void readExcelFile(ReadExcelWriteDBDTO readExcelWriteDBDTO) {
		List<DataDTO> rowData = new ArrayList<>();

		Set<String> macroGroupIds = new HashSet<>();
		macroGroupIds.add("37");
		macroGroupIds.add("38");
		macroGroupIds.add("39");
		macroGroupIds.add("40");
		macroGroupIds.add("41");
		macroGroupIds.add("42");
		macroGroupIds.add("43");
		macroGroupIds.add("44");
		macroGroupIds.add("45");
		macroGroupIds.add("46");
		macroGroupIds.add("47");

		Set<String> longEndsGroupIds = new HashSet<>();
		longEndsGroupIds.add("52");
		longEndsGroupIds.add("53");
		longEndsGroupIds.add("54");
		longEndsGroupIds.add("55");
		longEndsGroupIds.add("56");
		longEndsGroupIds.add("57");
		longEndsGroupIds.add("58");
		longEndsGroupIds.add("59");
		longEndsGroupIds.add("60");

		Set<String> cryptosGroupIds = new HashSet<>();
		cryptosGroupIds.add("71");
		cryptosGroupIds.add("72");
		cryptosGroupIds.add("73");
		cryptosGroupIds.add("74");
		cryptosGroupIds.add("75");
		cryptosGroupIds.add("76");

		Set<String> usJobsSimilarGroupIds = new HashSet<>();
		usJobsSimilarGroupIds.add("77");
		usJobsSimilarGroupIds.add("78");

		System.out.println("------------------ batch load: " + readExcelWriteDBDTO.getGroupId());
		if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("6")) {

			List<String> subgroups = Arrays.asList("1", "2", "3", "6", "7", "8", "9", "10", "11");

			// Load one column only to determine min/max dates
			List<DataDTO> previewData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(), "0", "1");

			final Set<String> existingKeys;

			if (!previewData.isEmpty()) {

				String startDate = previewData.get(0).getDate();

				String endDate = previewData.get(previewData.size() - 1).getDate();

				existingKeys = perciousMetalsService.getExistingKeys(startDate, endDate);

			} else {

				existingKeys = new HashSet<>();
			}

			List<PreciousMetals> prcList = processSubgroups(

					readExcelWriteDBDTO,

					subgroups,

					6,

					true,

					// Optimized in-memory existence check
					(date, subgroupId) -> existingKeys.contains(date + "_" + subgroupId),

					(data, subgroupId) -> PreciousMetals.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> perciousMetalsService.SavePreciousData(batch),

					(data, subgroupId, value) -> perciousMetalsService.updateValue(data.getDate(), subgroupId, value));

			if (!prcList.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(prcList, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				perciousMetalsService.doCalculationLoader(minMaxDates[0], minMaxDates[1]);
				
				perciousMetalsService.runProcedureCalculation(readExcelWriteDBDTO.getGroupId(),"1", minMaxDates[0], minMaxDates[1]);
				perciousMetalsService.runProcedureCalculation(readExcelWriteDBDTO.getGroupId(),"2", minMaxDates[0], minMaxDates[1]);
				
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("7")) {

			List<BaseMetals> baseList = processSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2", "3", "4"), // subgroups

					7, // groupId
					true, (date, subgroupId) -> baseMetalsService.CheckIfCanSave(date, subgroupId),

					(data, subgroupId) -> BaseMetals.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> baseMetalsService.SaveBaseData(batch),

					(data, subgroupId, value) -> baseMetalsService.updateValue(data.getDate(), subgroupId, value));

			if (!baseList.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(baseList, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				baseMetalsService.doCalculationLoader(minMaxDates[0], minMaxDates[1]);

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("8")) {

			List<FoodStuffData> foodStuff = processSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2", "3"),

					8, true, (date, subgroupId) -> foodStuffService.CheckIfCanSave(date, subgroupId),

					(data, subgroupId) -> FoodStuffData.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> foodStuffService.SaveFoodStuffData(batch),

					(data, subgroupId, value) -> foodStuffService.updateValue(data.getDate(), subgroupId, value)

			);

			if (!foodStuff.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(foodStuff, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				foodStuffService.doCalculationLoader(minMaxDates[0], minMaxDates[1]);

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("9")) {

			List<EnergyData> energy = processSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2", "3", "4", "5"),

					9, true, (date, subgroupId) -> energyService.CheckIfCanSave(date, subgroupId),

					(data, subgroupId) -> EnergyData.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> energyService.SaveEnergyData(batch),

					(data, subgroupId, value) -> energyService.updateValue(data.getDate(), subgroupId, value));

			if (!energy.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(energy, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				energyService.doCalculationLoader(minMaxDates[0], minMaxDates[1]);

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("10")) {

			List<TransportationData> transportation = processSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2"),

					10, true, (date, subgroupId) -> transportationService.CheckIfCanSave(date, subgroupId),

					(data, subgroupId) -> TransportationData.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> transportationService.SaveTransportationData(batch),

					(data, subgroupId, value) -> transportationService.updateValue(data.getDate(), subgroupId, value));

			if (!transportation.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(transportation, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				transportationService.doCalculationLoader(minMaxDates[0], minMaxDates[1]);

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("11")) {

			List<CorporateYieldsData> corporateYields = processSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2", "3", "4", "5"),

					11, true, (date, subgroupId) -> corporatesYieldsService.CheckIfCanSave(date, subgroupId),

					(data, subgroupId) -> CorporateYieldsData.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> corporatesYieldsService.SaveCorporateDatas(batch), (data, subgroupId,
							value) -> corporatesYieldsService.updateValue(data.getDate(), subgroupId, value));

			if (!corporateYields.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(corporateYields, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				corporatesYieldsService.doCalculationLoader(minMaxDates[0], minMaxDates[1]);

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("14")) {

			List<EcbExcessLiquidity> ecbExcessLiquidityList = processSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2", "3", "4"),

					14, true, (date, subgroupId) -> ecbExcessLiquidityService.CheckIfCanSave(date, subgroupId),

					(data, subgroupId) -> EcbExcessLiquidity.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> ecbExcessLiquidityService.SaveExcessLiquidityData(batch),

					(data, subgroupId, value) -> ecbExcessLiquidityService.updateValue(data.getDate(), subgroupId,
							value));

			if (!ecbExcessLiquidityList.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(ecbExcessLiquidityList,
						"referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				ecbExcessLiquidityService.doCalculationLoader(minMaxDates[0], minMaxDates[1]);

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("15")) {

			List<EcbQeLiquidity> ecbQeLiquidityList = processSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2"),

					15, true, (date, subgroupId) -> ecbQeLiquidityService.CheckIfCanSave(date, subgroupId),

					(data, subgroupId) -> EcbQeLiquidity.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> ecbQeLiquidityService.SaveQeLiquidityData(batch),
					(data, subgroupId, value) -> ecbQeLiquidityService.updateValue(data.getDate(), subgroupId, value));

			if (!ecbQeLiquidityList.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(ecbQeLiquidityList, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				ecbQeLiquidityService.doCalculationLoader(minMaxDates[0], minMaxDates[1]);

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("16")) {

			List<EurozoneMonetaryMass> eurozoneMonetaryMassList = processSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2", "3", "4"),

					16, true, (date, subgroupId) -> ezMonetaryMassLiquidityService.CheckIfCanSave(date, subgroupId),

					(data, subgroupId) -> EurozoneMonetaryMass.builder().referDate(data.getDate())
							.subgroupId(subgroupId).value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> ezMonetaryMassLiquidityService.SaveEurozoneMonetaryMassData(batch),

					(data, subgroupId, value) -> ezMonetaryMassLiquidityService.updateValue(data.getDate(), subgroupId,
							value));

			if (!eurozoneMonetaryMassList.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(eurozoneMonetaryMassList,
						"referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				ezMonetaryMassLiquidityService.doCalculationLoader(minMaxDates[0], minMaxDates[1]);

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("17")) {

			List<BundOptionsVolume> bundOptionsVolumeList = processSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2"),

					17, true, (date, subgroupId) -> bundOptionsVolumeService.CheckIfCanSave(date, subgroupId),

					(data, subgroupId) -> BundOptionsVolume.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> bundOptionsVolumeService.SaveData(batch), (data, subgroupId,
							value) -> bundOptionsVolumeService.updateValue(data.getDate(), subgroupId, value));

			if (!bundOptionsVolumeList.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(bundOptionsVolumeList, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				bundOptionsVolumeService.doCalculationLoader(minMaxDates[0], minMaxDates[1]);

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("18")) {

			List<BoblOptionsVolume> boblBOptionsVolumeList = processSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2"),

					18, true, (date, subgroupId) -> boblOptionsVolumeService.CheckIfCanSave(date, subgroupId),

					(data, subgroupId) -> BoblOptionsVolume.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> boblOptionsVolumeService.SaveData(batch),

					(data, subgroupId, value) -> boblOptionsVolumeService.updateValue(data.getDate(), subgroupId,
							value));

			if (!boblBOptionsVolumeList.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(boblBOptionsVolumeList,
						"referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				boblOptionsVolumeService.doCalculationLoader(minMaxDates[0], minMaxDates[1]);

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("19")) {

			List<BuxlOptionsVolume> buxlOptionsVolumeList = processSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2"),

					19, true, (date, subgroupId) -> buxlOptionsVolumeService.CheckIfCanSave(date, subgroupId),

					(data, subgroupId) -> BuxlOptionsVolume.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> buxlOptionsVolumeService.SaveData(batch), (data, subgroupId,
							value) -> buxlOptionsVolumeService.updateValue(data.getDate(), subgroupId, value));

			if (!buxlOptionsVolumeList.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(buxlOptionsVolumeList, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				buxlOptionsVolumeService.doCalculationLoader(minMaxDates[0], minMaxDates[1]);

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("20")) {

			List<ShatzOptionsVolume> shatzOptionsVolumeList = processSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2"),

					20, true, (date, subgroupId) -> shatzOptionsVolumeService.CheckIfCanSave(date, subgroupId),

					(data, subgroupId) -> ShatzOptionsVolume.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> shatzOptionsVolumeService.SaveData(batch), (data, subgroupId,
							value) -> shatzOptionsVolumeService.updateValue(data.getDate(), subgroupId, value));

			if (!shatzOptionsVolumeList.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(shatzOptionsVolumeList,
						"referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				shatzOptionsVolumeService.doCalculationLoader(minMaxDates[0], minMaxDates[1]);

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("21")) {

			List<EuriborOptionsVolume> euriborOptionsVolumeList = processSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2", "3", "4", "5"),

					21, true, (date, subgroupId) -> euriborOptionsVolumeService.CheckIfCanSave(date, subgroupId),

					(data, subgroupId) -> EuriborOptionsVolume.builder().referDate(data.getDate())
							.subgroupId(subgroupId).value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> euriborOptionsVolumeService.SaveData(batch), (data, subgroupId,
							value) -> euriborOptionsVolumeService.updateValue(data.getDate(), subgroupId, value));

			if (!euriborOptionsVolumeList.isEmpty()) {

				entityManager.flush();

				logger.info("Euribor Options Volume data imported successfully.");

				euriborOptionsVolumeService.doCalculation();

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("22")) {

			List<SubGroup> subGroups = subGroupRepository.findByGroupId(readExcelWriteDBDTO.getGroupId());

			List<String> subGroupIds = new ArrayList<>();

			for (SubGroup subGroup : subGroups) {

				subGroupIds.add(subGroup.getIdSubGroup());
			}

			List<CdsData> cdsDataList = processSubgroups(

					readExcelWriteDBDTO,

					subGroupIds,

					22,

					false,

					(date, subgroupId) -> cdsDataService.CheckIfCanSave(date, subgroupId),

					(data, subgroupId) -> CdsData.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> cdsDataService.SaveData(batch),
					(data, subgroupId, value) -> cdsDataService.updateValue(data.getDate(), subgroupId, value));

			if (!cdsDataList.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(cdsDataList, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				cdsDataService.doCalculationLoader(minMaxDates[0], minMaxDates[1]);

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("23")) {

			List<SubGroup> subGroups = subGroupRepository.findByGroupId(readExcelWriteDBDTO.getGroupId());

			List<String> subGroupIds = new ArrayList<>();

			for (SubGroup subGroup : subGroups) {

				subGroupIds.add(subGroup.getIdSubGroup());
			}

			List<FxUsdData> fxUsdDataList = processSubgroups(

					readExcelWriteDBDTO,

					subGroupIds,

					23, false, (date, subgroupId) -> fxDataService.CheckIfCanSave(date, subgroupId),

					(data, subgroupId) -> FxUsdData.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> fxDataService.SaveData(batch),
					(data, subgroupId, value) -> fxDataService.updateValue(data.getDate(), subgroupId, value));

			if (!fxUsdDataList.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(fxUsdDataList, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				fxDataService.doCalculationLoader(minMaxDates[0], minMaxDates[1]);

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("25")) {

			try {

				Object[][] excelData = ReadExcelWriteDBUtil.readExcel(readExcelWriteDBDTO.getFile());

				List<LongSkewsData> allData = new ArrayList<>();
				List<LongSkewsData> batchList = new ArrayList<>();

				for (int rowIndex = 0; rowIndex < excelData.length; rowIndex++) {

					if (rowIndex < 2) {
						continue;
					}

					Object[] row = excelData[rowIndex];

					Object[][] result = ReadExcelWriteDBUtil.splitArray(row, 5);

					for (int i = 0; i < result.length; i++) {

						Object[] splitrow = result[i];

						Long groupId = Long.valueOf(ReadExcelWriteDBUtil.getLongSkewsGroupId(i)[0]);

						Long factorId = Long.valueOf(ReadExcelWriteDBUtil.getLongSkewsGroupId(i)[1]);

						for (int j = 1; j < splitrow.length; j++) {

							String referDate = splitrow[0].toString();

							Long subgroupId = Long.valueOf(j);

							String value = splitrow[j] == null ? "" : splitrow[j].toString();

							boolean exists = skewsService.CheckIfCanSaveLongSkews(referDate, subgroupId);

							LongSkewsData longSkewsData = LongSkewsData.builder().referDate(referDate).groupId(groupId)
									.subgroupId(subgroupId).factorId(factorId).value(value).build();

							if (exists) {

								skewsService.updateLongSkewsValue(referDate, groupId, subgroupId, factorId, value);

							} else {

								batchList.add(longSkewsData);
							}

							allData.add(longSkewsData);
						}
					}
				}

				if (!batchList.isEmpty()) {

					skewsService.saveLongSkews(batchList);
				}

				entityManager.flush();

				if (!allData.isEmpty()) {

					String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(allData, "referDate");

					logger.info("Minimum Date: {}", minMaxDates[0]);
					logger.info("Maximum Date: {}", minMaxDates[1]);

					skewsService.doCalculationLongSkewsLoader(minMaxDates[0], minMaxDates[1]);

				} else {

					logger.info("List is empty.");
				}

			} catch (IOException e) {

				logger.error("Error processing long skews file", e);

				throw new RuntimeException(e);
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("30")) {

			try {

				Object[][] excelData = ReadExcelWriteDBUtil.readExcel(readExcelWriteDBDTO.getFile());

				List<ShortSkewsData> allData = new ArrayList<>();
				List<ShortSkewsData> batchList = new ArrayList<>();

				for (int rowIndex = 2; rowIndex < excelData.length; rowIndex++) {

					Object[] row = excelData[rowIndex];

					Object[][] result = ReadExcelWriteDBUtil.splitArray(row, 5);

					for (int i = 0; i < result.length; i++) {

						Object[] splitrow = result[i];

						Long groupId = Long.valueOf(ReadExcelWriteDBUtil.getShortSkewsGroupId(i)[0]);

						Long factorId = Long.valueOf(ReadExcelWriteDBUtil.getShortSkewsGroupId(i)[1]);

						for (int j = 1; j < splitrow.length; j++) {

							String referDate = splitrow[0].toString();

							Long subgroupId = Long.valueOf(j);

							String value = splitrow[j] == null ? "" : splitrow[j].toString();

							boolean exists = skewsService.CheckIfCanSaveShortSkews(referDate, groupId, subgroupId,
									factorId);

							ShortSkewsData shortSkewsData = ShortSkewsData.builder().referDate(referDate)
									.groupId(groupId).subgroupId(subgroupId).factorId(factorId).value(value).build();

							if (exists) {

								skewsService.updateShortSkewsValue(referDate, groupId, subgroupId, factorId, value);

							} else {

								batchList.add(shortSkewsData);
							}

							allData.add(shortSkewsData);
						}
					}
				}

				if (!batchList.isEmpty()) {

					skewsService.saveShortSkews(batchList);
				}

				entityManager.flush();

				if (!allData.isEmpty()) {

					String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(allData, "referDate");

					logger.info("Minimum Date: {}", minMaxDates[0]);
					logger.info("Maximum Date: {}", minMaxDates[1]);

					skewsService.doCalculationShortSkewsLoader(minMaxDates[0], minMaxDates[1]);

				} else {

					logger.info("List is empty.");
				}

			} catch (IOException e) {

				logger.error("Error processing short skews file", e);

				throw new RuntimeException(e);
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("32")) {

			List<StiAsiaData> dataList = processSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2", "3", "4", "5", "6", "7"),

					32, false, (date, subgroupId) -> {

						if (!stiService.CheckIfHasData(date)) {

							throw new BadRequestException(date + " " + MessageEnum.MISSING_FX_DATA.message,
									FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.MISSING_FX_DATA.service);
						}

						return stiService.CheckIfCanSaveStiAsia(date, subgroupId);
					},

					(data, subgroupId) -> StiAsiaData.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> stiService.saveStiAsia(batch),

					(data, subgroupId, value) -> stiService.updateAsiaValue(data.getDate(), subgroupId, value));

			if (!dataList.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(dataList, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				stiService.doCaculationStiAsiaLoader(minMaxDates[0], minMaxDates[1]);

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("33")) {

			List<StiWallStreetData> dataList = processSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2", "3", "4", "5", "6", "7"),

					33, false, (date, subgroupId) -> stiService.CheckIfCanSaveStiWallStreet(date, subgroupId),

					(data, subgroupId) -> StiWallStreetData.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> stiService.saveStiWallStreet(batch),
					(data, subgroupId, value) -> stiService.updateWallStreetValue(data.getDate(), subgroupId, value));

			if (!dataList.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(dataList, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				stiService.doCaculationStiWallStreetLoader(minMaxDates[0], minMaxDates[1]);

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("34")) {

			List<StiEuropeData> dataList = processSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2", "3", "4", "5", "6", "7"),

					34, false, (date, subgroupId) -> {

						if (!stiService.CheckIfHasData(date)) {

							throw new BadRequestException(date + " " + MessageEnum.MISSING_FX_DATA.message,
									FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.MISSING_FX_DATA.service);
						}

						return stiService.CheckIfCanSaveStiEurope(date, subgroupId);
					},

					(data, subgroupId) -> StiEuropeData.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> stiService.saveStiEurope(batch),
					(data, subgroupId, value) -> stiService.updateEuropeValue(data.getDate(), subgroupId, value));

			if (!dataList.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(dataList, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				stiService.doCaculationStiEuropeLoader(minMaxDates[0], minMaxDates[1]);

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("35")) {

			List<StiEmergingData> dataList = processSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2", "3", "4", "5", "6", "7"),

					35, false, (date, subgroupId) -> {

						if (!stiService.CheckIfHasData(date)) {

							throw new BadRequestException(date + " " + MessageEnum.MISSING_FX_DATA.message,
									FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.MISSING_FX_DATA.service);
						}

						return stiService.CheckIfCanSaveStiEmerging(date, subgroupId);
					},

					(data, subgroupId) -> StiEmergingData.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> stiService.saveStiEmerging(batch),
					(data, subgroupId, value) -> stiService.updateEmergingValue(data.getDate(), subgroupId, value));

			if (!dataList.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(dataList, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				stiService.doCaculationStiEmergingLoader(minMaxDates[0], minMaxDates[1]);

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("51")) {

			List<RatesData> ratesDatas = processSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2", "3", "4", "5", "6"),

					51,

					false,

					(date, subgroupId) -> ratesService.CheckIfCanSaveRts(date,
							Long.valueOf(readExcelWriteDBDTO.getGroupId()), subgroupId),

					(data, subgroupId) -> RatesData.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.groupId(Long.valueOf(readExcelWriteDBDTO.getGroupId()))
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> ratesService.SaveRatesData(batch),
					(data, subgroupId, value) -> ratesService.updateValue(data.getDate(),
							Long.valueOf(readExcelWriteDBDTO.getGroupId()), subgroupId, value));

			if (!ratesDatas.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(ratesDatas, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				ratesService.doCaculationLoader(minMaxDates[0], minMaxDates[1],
						Long.valueOf(readExcelWriteDBDTO.getGroupId()));

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("50")) {

			List<RatesData> ratesDatas = processSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1"),

					50,

					false,

					(date, subgroupId) -> ratesService.CheckIfCanSaveRts(date,
							Long.valueOf(readExcelWriteDBDTO.getGroupId()), subgroupId),

					(data, subgroupId) -> RatesData.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.groupId(Long.valueOf(readExcelWriteDBDTO.getGroupId()))
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> ratesService.SaveRatesData(batch),
					(data, subgroupId, value) -> ratesService.updateValue(data.getDate(),
							Long.valueOf(readExcelWriteDBDTO.getGroupId()), subgroupId, value));

			if (!ratesDatas.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(ratesDatas, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				ratesService.doCaculationLoader(minMaxDates[0], minMaxDates[1],
						Long.valueOf(readExcelWriteDBDTO.getGroupId()));

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("49")) {

			List<RatesData> ratesDatas = processSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2"),

					49,

					false,

					(date, subgroupId) -> ratesService.CheckIfCanSaveRts(date,
							Long.valueOf(readExcelWriteDBDTO.getGroupId()), subgroupId),

					(data, subgroupId) -> RatesData.builder().referDate(data.getDate()).subgroupId(subgroupId)
							.groupId(Long.valueOf(readExcelWriteDBDTO.getGroupId()))
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> ratesService.SaveRatesData(batch),
					(data, subgroupId, value) -> ratesService.updateValue(data.getDate(),
							Long.valueOf(readExcelWriteDBDTO.getGroupId()), subgroupId, value));

			if (!ratesDatas.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(ratesDatas, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				ratesService.doCaculationLoader(minMaxDates[0], minMaxDates[1],
						Long.valueOf(readExcelWriteDBDTO.getGroupId()));

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("48")) {

			try {

				Object[][] excelData = ReadExcelWriteDBUtil.readExcel(readExcelWriteDBDTO.getFile());
				List<RatesData> allData = new ArrayList<>();
				List<RatesData> batchList = new ArrayList<>();
				Long groupId = Long.valueOf(readExcelWriteDBDTO.getGroupId());

				int[] subgroupOrder = { 2, 1, 3 };

				for (int rowIndex = 0; rowIndex < excelData.length; rowIndex++) {
					if (rowIndex < 2) {
						continue;
					}

					Object[] row = excelData[rowIndex];
					if (row[0] == null || row[0].toString().trim().isEmpty()) {
						continue;
					}
					
					Object[][] result = ReadExcelWriteDBUtil.splitArrayRates(readExcelWriteDBDTO.getGroupId(), row, 2);

					for (int i = 0; i < result.length; i++) {
						Object[] splitrow = result[i];
						for (int j = 1; j < splitrow.length; j++) {
							String referDate = splitrow[0].toString();
							Long subgroupId = Long.valueOf(subgroupOrder[i]);
							Long factorId = Long.valueOf(ReadExcelWriteDBUtil.getRateFactorId(j));
							String value = splitrow[j] == null ? "" : splitrow[j].toString();
							boolean exists = ratesService.CheckIfCanSave(referDate, groupId, subgroupId, factorId);
							RatesData ratesData = RatesData.builder().referDate(referDate).groupId(groupId)
									.subgroupId(subgroupId).factorId(factorId).value(value).build();
							if (exists) {
								ratesService.updateValue(referDate, groupId, subgroupId, factorId, value);
								allData.add(ratesData);
							} else {
								batchList.add(ratesData);
								allData.add(ratesData);
							}
						}
					}
				}

				if (!batchList.isEmpty()) {
					ratesService.SaveRatesData(batchList);
				}

				entityManager.flush();

				if (!allData.isEmpty()) {
					String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(allData, "referDate");

					logger.info("Minimum Date: {}", minMaxDates[0]);
					logger.info("Maximum Date: {}", minMaxDates[1]);

					ratesService.doCaculationLoader(minMaxDates[0], minMaxDates[1], groupId);
				} else {
					logger.info("List is empty.");
				}

			} catch (IOException e) {
				logger.error("Error processing rates file", e);
				throw new RuntimeException(e);
			}
		} else if (macroGroupIds.contains(readExcelWriteDBDTO.getGroupId().trim())) {

			try {

				Object[][] excelData = ReadExcelWriteDBUtil.readExcel(readExcelWriteDBDTO.getFile());

				List<MacroData> macroDataList = new ArrayList<>();

				Long groupId = Long.valueOf(readExcelWriteDBDTO.getGroupId());

				for (int rowIndex = 0; rowIndex < excelData.length; rowIndex++) {

					if (rowIndex < 2) {
						continue;
					}

					Object[] row = excelData[rowIndex];

					if (row[0] == null || row[0].toString().trim().isEmpty()) {

						continue;
					}

					Object[][] result = ReadExcelWriteDBUtil.splitArrayMacro(row, 3);

					for (int i = 0; i < result.length; i++) {

						Object[] splitrow = result[i];

						for (int j = 1; j < splitrow.length; j++) {

							String referDate = splitrow[0].toString();

							Long subgroupId = Long.valueOf(i + 1);

							Long factorId = Long.valueOf(ReadExcelWriteDBUtil.getMacroFactorId(j));

							String value = splitrow[j] == null ? "" : splitrow[j].toString();

							boolean exists = macroService.CheckIfCanSave(referDate, groupId, subgroupId, factorId);

							if (exists) {

								macroService.updateValue(referDate, groupId, subgroupId, factorId, value);

							} else {

								MacroData macroData = MacroData.builder().referDate(referDate).groupId(groupId)
										.subgroupId(subgroupId).factorId(factorId).value(value).build();

								macroDataList.add(macroData);
							}
						}
					}
				}

				if (!macroDataList.isEmpty()) {

					macroService.saveMacro(macroDataList);
				}

				entityManager.flush();

				if (!macroDataList.isEmpty()) {

					String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(macroDataList, "referDate");

					logger.info("Minimum Date: {}", minMaxDates[0]);
					logger.info("Maximum Date: {}", minMaxDates[1]);

					macroService.doCalculationMacroLoader(minMaxDates[0], minMaxDates[1],
							readExcelWriteDBDTO.getGroupId());

				} else {

					logger.info("List is empty.");
				}

			} catch (IOException e) {

				logger.error("Error processing macro file", e);

				throw new RuntimeException(e);
			}
		} else if (longEndsGroupIds.contains(readExcelWriteDBDTO.getGroupId().trim())) {

			Long groupId = Long.valueOf(readExcelWriteDBDTO.getGroupId());

			List<LongEndData> longEndDataLst = processGroupedStringDateSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"),

					new int[] { 1, 2, 3, 4, 5, 6, 14, 15, 7, 8, 9, 10, 11, 12, 13 },

					groupId,

					(date, grpId, subgroupId) -> longEndsService.CheckIfCanSaveLongEnds(date, grpId, subgroupId),

					(data, grpId, subgroupId) -> LongEndData.builder().referDate(data.getDate()).groupId(grpId)
							.subgroupId(subgroupId).value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> longEndsService.saveLongEndsData(batch),

					(date, grpId, subgroupId, value) -> longEndsService.updateValue(date, grpId, subgroupId, value));

			if (!longEndDataLst.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(longEndDataLst, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				longEndsService.doCalculationLoader(minMaxDates[0], minMaxDates[1], readExcelWriteDBDTO.getGroupId());

				longEndsService.runTrendFollowingMavgTask(groupId, minMaxDates[0], minMaxDates[1]);

				longEndsService.runVolatilityWeightedTrendFollowingMavgTask(groupId, minMaxDates[0], minMaxDates[1]);

				longEndsService.runFunctionCalculationProcedure(groupId, minMaxDates[0], minMaxDates[1]);

			} else {

				logger.info("List is empty.");
			}
		} else if (cryptosGroupIds.contains(readExcelWriteDBDTO.getGroupId().trim())) {

			Long groupId = Long.valueOf(readExcelWriteDBDTO.getGroupId());

			List<CryptosData> cryptosDataLst = processGroupedStringDateSubgroups(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2", "3", "4", "5", "6", "7", "8"),

					new int[] { 7, 3, 4, 8, 5, 6, 1, 2 },

					groupId,

					(date, grpId, subgroupId) -> cryptosService.CheckIfCanSaveCryptos(date, grpId, subgroupId),

					(data, grpId, subgroupId) -> CryptosData.builder().referDate(data.getDate()).groupId(grpId)
							.subgroupId(subgroupId).value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> cryptosService.saveCryptos(batch),

					(date, grpId, subgroupId, value) -> cryptosService.updateValue(date, grpId, subgroupId, value));

			if (!cryptosDataLst.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(cryptosDataLst, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				cryptosService.doCalculationLoader(minMaxDates[0], minMaxDates[1], readExcelWriteDBDTO.getGroupId());

			} else {

				logger.info("List is empty.");
			}
		} else if (usJobsSimilarGroupIds.contains(readExcelWriteDBDTO.getGroupId().trim())) {

			List<UsJobsData> usJobsDataLst = processSubgroupsWithStringDate(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2", "3"),

					new int[] { 1, 2, 3 },

					(date, subgroupId) -> usJobsService.CheckIfCanSaveUsJobs(date,
							Long.valueOf(readExcelWriteDBDTO.getGroupId()), subgroupId),

					(data, subgroupId) -> UsJobsData.builder().referDate(ReadExcelWriteDBUtil.parseDate(data.getDate()))
							.subgroupId(subgroupId).groupId(Long.valueOf(readExcelWriteDBDTO.getGroupId()))
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> usJobsService.saveUsJobs(batch),

					(data, subgroupId, value) -> usJobsService.updateValue(data.getDate(),
							Long.valueOf(readExcelWriteDBDTO.getGroupId()), subgroupId, value));

			if (!usJobsDataLst.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(usJobsDataLst, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				usJobsService.doCalculationLoader(minMaxDates[0], minMaxDates[1], readExcelWriteDBDTO.getGroupId());

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("79")) {

			List<UsJobsData> usJobsDataLst = processSubgroupsWithStringDate(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2", "3", "4"),

					new int[] { 1, 2, 3, 4 },

					(date, subgroupId) -> usJobsService.CheckIfCanSaveUsJobs(date,
							Long.valueOf(readExcelWriteDBDTO.getGroupId()), subgroupId),

					(data, subgroupId) -> UsJobsData.builder().referDate(ReadExcelWriteDBUtil.parseDate(data.getDate()))
							.subgroupId(subgroupId).groupId(Long.valueOf(readExcelWriteDBDTO.getGroupId()))
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> usJobsService.saveUsJobs(batch),

					(data, subgroupId, value) -> usJobsService.updateValue(data.getDate(),
							Long.valueOf(readExcelWriteDBDTO.getGroupId()), subgroupId, value));

			if (!usJobsDataLst.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(usJobsDataLst, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				usJobsService.doCalculationLoader(minMaxDates[0], minMaxDates[1], readExcelWriteDBDTO.getGroupId());

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("80")) {

			List<UsJobsData> usJobsDataLst = processSubgroupsWithStringDate(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2"),

					new int[] { 1, 2 },

					(date, subgroupId) -> usJobsService.CheckIfCanSaveUsJobs(date,
							Long.valueOf(readExcelWriteDBDTO.getGroupId()), subgroupId),

					(data, subgroupId) -> UsJobsData.builder().referDate(ReadExcelWriteDBUtil.parseDate(data.getDate()))
							.subgroupId(subgroupId).groupId(Long.valueOf(readExcelWriteDBDTO.getGroupId()))
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> usJobsService.saveUsJobs(batch),

					(data, subgroupId, value) -> usJobsService.updateValue(data.getDate(),
							Long.valueOf(readExcelWriteDBDTO.getGroupId()), subgroupId, value));

			if (!usJobsDataLst.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(usJobsDataLst, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				usJobsService.doCalculationLoader(minMaxDates[0], minMaxDates[1], readExcelWriteDBDTO.getGroupId());

			} else {

				logger.info("List is empty.");
			}
		} else if (readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("81")) {

			List<UsJobsData> usJobsDataLst = processSubgroupsWithStringDate(

					readExcelWriteDBDTO,

					Arrays.asList("1", "2"),

					new int[] { 1, 3 },

					(date, subgroupId) -> usJobsService.CheckIfCanSaveUsJobs(date,
							Long.valueOf(readExcelWriteDBDTO.getGroupId()), subgroupId),

					(data, subgroupId) -> UsJobsData.builder().referDate(ReadExcelWriteDBUtil.parseDate(data.getDate()))
							.subgroupId(subgroupId).groupId(Long.valueOf(readExcelWriteDBDTO.getGroupId()))
							.value(data.getValue() == null ? "" : data.getValue()).build(),

					batch -> usJobsService.saveUsJobs(batch),

					(data, subgroupId, value) -> usJobsService.updateValue(data.getDate(),
							Long.valueOf(readExcelWriteDBDTO.getGroupId()), subgroupId, value));

			if (!usJobsDataLst.isEmpty()) {

				entityManager.flush();

				String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(usJobsDataLst, "referDate");

				logger.info("Minimum Date: {}", minMaxDates[0]);
				logger.info("Maximum Date: {}", minMaxDates[1]);

				usJobsService.doCalculationLoader(minMaxDates[0], minMaxDates[1], readExcelWriteDBDTO.getGroupId());

			} else {

				logger.info("List is empty.");
			}
		}
	}

}