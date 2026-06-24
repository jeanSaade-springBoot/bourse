package com.bourse.readExcelWriteDB.dto;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReadExcelWriteDBDTO {

    private MultipartFile file;
    private String dateCellIndex;
    private String dataValueIndex;
    private String subgroupId;
    private String groupId;

    // New fields
    private String operation;
    private String selectedSubgroupIds;

    public boolean isUpdateOperation() {
        return "UPDATE".equalsIgnoreCase(operation);
    }

    public boolean isInsertOperation() {
        return operation == null ||
               operation.trim().isEmpty() ||
               "INSERT".equalsIgnoreCase(operation);
    }

    public Set<Long> getSelectedSubgroupIdSet() {

        if (selectedSubgroupIds == null || selectedSubgroupIds.trim().isEmpty()) {
            return new HashSet<>();
        }

        return Arrays.stream(selectedSubgroupIds.split(","))
                .map(String::trim)
                .filter(s -> !s.isEmpty())
                .map(Long::valueOf)
                .collect(Collectors.toSet());
    }
}