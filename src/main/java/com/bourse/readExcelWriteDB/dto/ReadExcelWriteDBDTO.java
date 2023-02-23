package com.bourse.readExcelWriteDB.dto;

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
	 MultipartFile file;
	 String dateCellIndex;
	 String dataValueIndex;
	 String subgroupId;
	 String groupId;
}
