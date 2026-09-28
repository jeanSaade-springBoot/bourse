package com.bourse.service.longEndImpliedVol;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.bourse.dto.longEndImpliedVol.LongEndImpliedVolGridRequestDTO;
import com.bourse.dto.longEndImpliedVol.LongEndImpliedVolGridRequestDTO.SelectedSearchDTO;
import com.bourse.dto.longEndImpliedVol.LongEndImpliedVolGridResponseDTO;

@Service
public class LongEndImpliedVolGridService {

    private static final long ASSET_ID = 13L;

    private final JdbcTemplate jdbcTemplate;

    public LongEndImpliedVolGridService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public LongEndImpliedVolGridResponseDTO getGridData(LongEndImpliedVolGridRequestDTO request) {

        LongEndImpliedVolGridResponseDTO response = new LongEndImpliedVolGridResponseDTO();

        if (request == null
                || request.getSelectedSearchDTOlst() == null
                || request.getSelectedSearchDTOlst().isEmpty()) {
            response.addDateColumn();
            return response;
        }

        validateDate(request.getFromDate(), "fromDate");
        validateDate(request.getToDate(), "toDate");

        /*
         * Resolve every table/column from table_management.
         * No table or column name supplied by the browser is trusted directly.
         */
        Map<Long, GroupMeta> groups = new LinkedHashMap<>();
        List<SelectedColumn> selectedColumns = new ArrayList<>();

        for (SelectedSearchDTO selectedGroup : request.getSelectedSearchDTOlst()) {

            if (selectedGroup == null || selectedGroup.getGroupId() == null) {
                continue;
            }

            Long groupId = selectedGroup.getGroupId();
            GroupMeta meta = loadGroupMeta(groupId);
            groups.put(groupId, meta);

            if (selectedGroup.getSelectedValues() == null) {
                continue;
            }

            for (String selectedValue : selectedGroup.getSelectedValues()) {

                if (!StringUtils.hasText(selectedValue)) {
                    continue;
                }

                String expectedSuffix = "-" + groupId;
                if (!selectedValue.endsWith(expectedSuffix)) {
                    throw new IllegalArgumentException(
                            "Selected field does not belong to group " + groupId + ": " + selectedValue);
                }

                String dbColumn = selectedValue.substring(
                        0, selectedValue.length() - expectedSuffix.length());

                if (!meta.allowedColumns.contains(dbColumn)) {
                    throw new IllegalArgumentException(
                            "Column " + dbColumn + " is not configured for Long-End Implied Vol group " + groupId);
                }

                ColumnMeta columnMeta = loadColumnMeta(groupId, dbColumn);

                selectedColumns.add(
                        new SelectedColumn(
                                groupId,
                                meta.tableName,
                                dbColumn,
                                selectedValue,
                                columnMeta.displayName,
                                columnMeta.dataFormat,
                                columnMeta.fieldType));
            }
        }

        response.addDateColumn();

        if (selectedColumns.isEmpty() || groups.isEmpty()) {
            return response;
        }

        /*
         * Build a calendar of all dates present in any selected module, then LEFT JOIN
         * each module table. This keeps a date visible even when one module is missing.
         */
        StringBuilder sql = new StringBuilder();
        List<Object> params = new ArrayList<>();

        sql.append("SELECT DATE_FORMAT(STR_TO_DATE(d.refer_date, '%d-%m-%Y'), '%d-%b-%Y') AS refer_date");

        int columnIndex = 0;
        for (SelectedColumn column : selectedColumns) {
            String alias = "c" + columnIndex++;
            sql.append(", ").append(alias)
               .append(".`").append(column.dbColumn).append("` AS `")
               .append(column.responseField).append("`");
        }

        sql.append(" FROM (");

        int tableIdx = 0;
        for (GroupMeta meta : groups.values()) {
            if (tableIdx++ > 0) {
                sql.append(" UNION ");
            }
            sql.append("SELECT refer_date FROM `")
               .append(meta.tableName)
               .append("` WHERE STR_TO_DATE(refer_date, '%d-%m-%Y') BETWEEN ? AND ?");
            params.add(request.getFromDate());
            params.add(request.getToDate());
        }

        sql.append(") d ");

        /*
         * Audit refer_date is stored as VARCHAR(255) in dd-MM-yyyy format.
         * Date filtering/sorting therefore uses STR_TO_DATE, while joins use direct
         * string equality because all Long-End Implied Vol audit tables store the
         * same normalized dd-MM-yyyy value.
         *
         * We create one join alias per selected field. This is slightly more verbose
         * than one alias per group, but keeps the generated SQL deterministic and
         * avoids alias collisions while the screen grows to additional modules.
         */
        columnIndex = 0;
        for (SelectedColumn column : selectedColumns) {
            String alias = "c" + columnIndex++;
            sql.append(" LEFT JOIN `").append(column.tableName).append("` ").append(alias)
               .append(" ON ").append(alias)
               .append(".refer_date = d.refer_date ");
        }

        sql.append(" GROUP BY d.refer_date ");

        // Every selected value comes from a single-row-per-date audit table.
        columnIndex = 0;
        for (SelectedColumn column : selectedColumns) {
            String alias = "c" + columnIndex++;
            sql.append(", ").append(alias).append(".`").append(column.dbColumn).append("`");
        }

        sql.append(" ORDER BY STR_TO_DATE(d.refer_date, '%d-%m-%Y') DESC");

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql.toString(), params.toArray());
        response.setRows(rows);

        for (SelectedColumn column : selectedColumns) {
            response.addColumn(
                    column.displayName,
                    column.responseField,
                    column.dataFormat,
                    column.fieldType);
        }

        return response;
    }

    private GroupMeta loadGroupMeta(Long groupId) {

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                "SELECT table_name, column_name "
              + "FROM table_management "
              + "WHERE asset_id = ? AND group_id = ? "
              + "ORDER BY subgroup_id",
                ASSET_ID, groupId);

        if (rows.isEmpty()) {
            throw new IllegalArgumentException(
                    "No table_management configuration found for Long-End Implied Vol group " + groupId);
        }

        String tableName = String.valueOf(rows.get(0).get("table_name"));
        validateIdentifier(tableName, "table");

        Set<String> allowedColumns = new LinkedHashSet<>();

        for (Map<String, Object> row : rows) {
            String configuredTable = String.valueOf(row.get("table_name"));
            if (!tableName.equals(configuredTable)) {
                throw new IllegalStateException(
                        "Group " + groupId + " is configured with more than one audit table.");
            }

            String columnName = String.valueOf(row.get("column_name"));
            validateIdentifier(columnName, "column");
            allowedColumns.add(columnName);
        }

        return new GroupMeta(groupId, tableName, allowedColumns);
    }

    private ColumnMeta loadColumnMeta(Long groupId, String dbColumn) {

        /*
         * Same source of truth as the existing Long Ends input grid:
         * column_configuration controls the display label, data format and field type.
         *
         * table_management is used to match the physical audit-table column
         * to the configured group/subgroup.
         */
        List<Map<String, Object>> values = jdbcTemplate.queryForList(
                "SELECT "
              + "cc.display_description, "
              + "cc.description, "
              + "cc.data_format, "
              + "cc.field_type "
              + "FROM column_configuration cc "
              + "JOIN table_management tm "
              + "  ON tm.group_id = cc.group_id "
              + " AND tm.subgroup_id = cc.subgroup_id "
              + "WHERE cc.group_id = ? "
              + "  AND tm.column_name = ? "
              + "LIMIT 1",
                groupId,
                dbColumn);

        if (values.isEmpty()) {
            return new ColumnMeta(dbColumn, null, null);
        }

        Map<String, Object> row = values.get(0);

        String displayDescription = row.get("display_description") == null
                ? null
                : String.valueOf(row.get("display_description"));

        String description = row.get("description") == null
                ? null
                : String.valueOf(row.get("description"));

        String dataFormat = row.get("data_format") == null
                ? null
                : String.valueOf(row.get("data_format"));

        String fieldType = row.get("field_type") == null
                ? null
                : String.valueOf(row.get("field_type"));

        String displayName;

        if (StringUtils.hasText(displayDescription)) {
            displayName = displayDescription;
        } else if (StringUtils.hasText(description)) {
            displayName = description;
        } else {
            displayName = dbColumn;
        }

        return new ColumnMeta(displayName, dataFormat, fieldType);
    }

    private void validateIdentifier(String value, String label) {
        if (!StringUtils.hasText(value) || !value.matches("[A-Za-z0-9_]+")) {
            throw new IllegalArgumentException("Invalid " + label + " identifier: " + value);
        }
    }

    private void validateDate(String value, String label) {
        if (!StringUtils.hasText(value) || !value.matches("\\d{4}-\\d{2}-\\d{2}")) {
            throw new IllegalArgumentException(label + " must use yyyy-MM-dd format.");
        }
    }

    private static final class GroupMeta {
        private final Long groupId;
        private final String tableName;
        private final Set<String> allowedColumns;

        private GroupMeta(Long groupId, String tableName, Set<String> allowedColumns) {
            this.groupId = groupId;
            this.tableName = tableName;
            this.allowedColumns = allowedColumns;
        }
    }

    private static final class ColumnMeta {

        private final String displayName;
        private final String dataFormat;
        private final String fieldType;

        private ColumnMeta(
                String displayName,
                String dataFormat,
                String fieldType) {
            this.displayName = displayName;
            this.dataFormat = dataFormat;
            this.fieldType = fieldType;
        }
    }

    private static final class SelectedColumn {
        private final Long groupId;
        private final String tableName;
        private final String dbColumn;
        private final String responseField;
        private final String displayName;
        private final String dataFormat;
        private final String fieldType;

        private SelectedColumn(
                Long groupId,
                String tableName,
                String dbColumn,
                String responseField,
                String displayName,
                String dataFormat,
                String fieldType) {
            this.groupId = groupId;
            this.tableName = tableName;
            this.dbColumn = dbColumn;
            this.responseField = responseField;
            this.displayName = displayName;
            this.dataFormat = dataFormat;
            this.fieldType = fieldType;
        }
    }

}
