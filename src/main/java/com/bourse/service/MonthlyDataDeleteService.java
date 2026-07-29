package com.bourse.service;

import java.time.LocalDate;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.bourse.service.macro.MacroService;
import com.bourse.service.rates.RatesService;
import com.bourse.service.usJobs.UsJobsService;

@Service
public class MonthlyDataDeleteService {

    private final UsJobsService usJobsService;
    private final RatesService ratesService;
    private final MacroService macroService;

    public MonthlyDataDeleteService(
            UsJobsService usJobsService,
            RatesService ratesService,
            MacroService macroService) {

        this.usJobsService = usJobsService;
        this.ratesService = ratesService;
        this.macroService = macroService;
    }

    @Transactional
    public int deleteMonthlyData(
            Long assetId,
            Long groupId,
            String fromDate,
            String toDate) {

        validateDates(fromDate, toDate);

        if (isUsJobsAsset(assetId)) {

            return usJobsService.deleteDataByDateRange(
                    String.valueOf(groupId),
                    fromDate,
                    toDate
            );

        } else if (isRatesAsset(assetId)) {

            return ratesService.deleteDataByDateRange(
                    String.valueOf(groupId),
                    fromDate,
                    toDate
            );

        } else if (isMacroAsset(assetId)) {

            return macroService.deleteDataByDateRange(
                    String.valueOf(groupId),
                    fromDate,
                    toDate
            );

        }

        throw new IllegalArgumentException(
                "The selected asset does not support monthly data deletion."
        );
    }

    private boolean isUsJobsAsset(Long assetId) {
        return Long.valueOf(12).equals(assetId); // US_JOBS_ASSET_ID
    }

    private boolean isRatesAsset(Long assetId) {
        return Long.valueOf(9).equals(assetId);
    }

    private boolean isMacroAsset(Long assetId) {
        return Long.valueOf(8).equals(assetId);
    }

    private void validateDates(
            String fromDate,
            String toDate) {

        LocalDate from =
                LocalDate.parse(fromDate);

        LocalDate to =
                LocalDate.parse(toDate);

        if (from.isAfter(to)) {
            throw new IllegalArgumentException(
                    "From date cannot be after To date."
            );
        }
    }
}