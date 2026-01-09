package com.bourse.util;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

public final class DateFormatUtil {

    private static final DateTimeFormatter ISO = DateTimeFormatter.ISO_LOCAL_DATE; // yyyy-MM-dd
    private static final DateTimeFormatter DMY = DateTimeFormatter.ofPattern("dd-MM-yyyy");

    private DateFormatUtil() {}

    public static String normalizeToIso(String dateStr) {
        if (dateStr == null || dateStr.trim().isEmpty()) return dateStr;

        String s = dateStr.trim();
        try {
            return LocalDate.parse(s, ISO).format(ISO); // already yyyy-MM-dd
        } catch (DateTimeParseException e) {
            return LocalDate.parse(s, DMY).format(ISO); // dd-MM-yyyy -> yyyy-MM-dd
        }
    }
}
