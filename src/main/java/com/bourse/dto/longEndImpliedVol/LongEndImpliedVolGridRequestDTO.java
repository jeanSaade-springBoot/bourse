package com.bourse.dto.longEndImpliedVol;

import java.util.ArrayList;
import java.util.List;

public class LongEndImpliedVolGridRequestDTO {

    private List<SelectedSearchDTO> selectedSearchDTOlst = new ArrayList<>();
    private String fromDate;
    private String toDate;

    public List<SelectedSearchDTO> getSelectedSearchDTOlst() {
        return selectedSearchDTOlst;
    }

    public void setSelectedSearchDTOlst(List<SelectedSearchDTO> selectedSearchDTOlst) {
        this.selectedSearchDTOlst = selectedSearchDTOlst;
    }

    public String getFromDate() {
        return fromDate;
    }

    public void setFromDate(String fromDate) {
        this.fromDate = fromDate;
    }

    public String getToDate() {
        return toDate;
    }

    public void setToDate(String toDate) {
        this.toDate = toDate;
    }

    public static class SelectedSearchDTO {

        private Long groupId;
        private List<String> selectedValues = new ArrayList<>();

        public Long getGroupId() {
            return groupId;
        }

        public void setGroupId(Long groupId) {
            this.groupId = groupId;
        }

        public List<String> getSelectedValues() {
            return selectedValues;
        }

        public void setSelectedValues(List<String> selectedValues) {
            this.selectedValues = selectedValues;
        }
    }
}
