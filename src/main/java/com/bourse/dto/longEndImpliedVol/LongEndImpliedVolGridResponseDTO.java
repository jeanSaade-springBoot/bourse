package com.bourse.dto.longEndImpliedVol;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class LongEndImpliedVolGridResponseDTO {

    private List<Map<String, Object>> rows = new ArrayList<>();
    private List<Map<String, Object>> columns = new ArrayList<>();

    public List<Map<String, Object>> getRows() {
        return rows;
    }

    public void setRows(List<Map<String, Object>> rows) {
        this.rows = rows;
    }

    public List<Map<String, Object>> getColumns() {
        return columns;
    }

    public void setColumns(List<Map<String, Object>> columns) {
        this.columns = columns;
    }

    public void addDateColumn() {
        Map<String, Object> column = new LinkedHashMap<>();
        column.put("text", "Date");
        column.put("datafield", "refer_date");
        column.put("width", "110");
        column.put("cellsalign", "center");
        column.put("align", "center");
        column.put("cellsformat", "dd-MMM-yyyy");
        column.put("fieldType", "date");
        columns.add(column);
    }

    /*
     * Mirrors the existing Long Ends buildColumns() formatting behavior:
     * - width = 110
     * - DATE -> dd-MMM-yyyy
     * - percentage format -> P<n>
     * - numeric format -> F<n>
     */
    public void addColumn(
            String text,
            String datafield,
            String dataFormat,
            String fieldType) {

        Map<String, Object> column = new LinkedHashMap<>();

        column.put("text", text);
        column.put("datafield", datafield);
        column.put("width", "110");
        column.put("cellsalign", "center");
        column.put("align", "center");

        if (fieldType != null && "DATE".equalsIgnoreCase(fieldType)) {
            column.put("cellsformat", "dd-MMM-yyyy");
            column.put("fieldType", "date");
        } else if (dataFormat != null && !dataFormat.trim().isEmpty()) {
            if (dataFormat.contains("%")) {
                column.put("cellsformat", "P" + decimalPlaces(dataFormat));
            } else {
                column.put("cellsformat", "F" + decimalPlaces(dataFormat));
            }
            column.put("fieldType", "number");
        } else if (fieldType != null && (
                "NUMBER".equalsIgnoreCase(fieldType)
                || "NUMERIC".equalsIgnoreCase(fieldType)
                || "DECIMAL".equalsIgnoreCase(fieldType)
                || "DOUBLE".equalsIgnoreCase(fieldType)
                || "FLOAT".equalsIgnoreCase(fieldType)
                || "INTEGER".equalsIgnoreCase(fieldType)
                || "INT".equalsIgnoreCase(fieldType))) {
            column.put("fieldType", "number");
        } else {
            column.put("fieldType", "string");
        }

        columns.add(column);
    }

    private int decimalPlaces(String dataFormat) {

        String normalized = dataFormat == null
                ? ""
                : dataFormat.replace("%", "").trim();

        int dotIndex = normalized.indexOf('.');

        if (dotIndex < 0 || dotIndex == normalized.length() - 1) {
            return 0;
        }

        return normalized.substring(dotIndex + 1).length();
    }
}
