package com.bourse.readExcelWriteDB.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.domain.BaseMetals;
import com.bourse.domain.PreciousMetals;
import com.bourse.readExcelWriteDB.dto.DataDTO;
import com.bourse.readExcelWriteDB.dto.ReadExcelWriteDBDTO;
import com.bourse.readExcelWriteDB.enums.SubGroupEnum;
import com.bourse.readExcelWriteDB.util.ReadExcelWriteDBUtil;
import com.bourse.service.BaseMetalsService;
import com.bourse.service.PerciousMetalsService;

@Service
public class ReadExcelWriteDBService {
	
    @Autowired 
    PerciousMetalsService perciousMetalsService;
    @Autowired 
    BaseMetalsService baseMetalsService;
    
	public void readExcelFile(ReadExcelWriteDBDTO readExcelWriteDBDTO) {
		List<DataDTO> rowData = new ArrayList<>();
		List<PreciousMetals> prcList = new ArrayList<>();
		List<BaseMetals> baseList = new ArrayList<>();
		if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("6"))
		{ 
		   List<String> subgroups = Arrays.asList("1", "2", "3");
		   for (String subGroupId: subgroups) {
				   rowData.clear();
				   prcList.clear();
				   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",SubGroupEnum.getIndexByGroupAndSubGroupgroupId(6, Integer.valueOf(subGroupId)));
				   for (DataDTO data: rowData) {
					   PreciousMetals perciousMetals = PreciousMetals.builder().referDate(data.getDate())
							   												  .subgroupId(Long.valueOf(subGroupId))
							   												  .value(data.getValue())
							   												  .build();
					   
					   prcList.add(perciousMetals);
		      }

				perciousMetalsService.SavePreciousData(prcList);
		   }

			perciousMetalsService.doCaclulation();
		}else
			if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("7"))
			{
				   List<String> subgroups = Arrays.asList("1", "2", "3","4");
				   for (String subGroupId: subgroups) {
						   rowData.clear();
						   baseList.clear();
						   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",SubGroupEnum.getIndexByGroupAndSubGroupgroupId(7, Integer.valueOf(subGroupId)));
						   for (DataDTO data: rowData) {
							  BaseMetals baseMetals = BaseMetals.builder().referDate(data.getDate())
						   												  .subgroupId(Long.valueOf(subGroupId))
						   												  .value(data.getValue())
						   												  .build();
							   
							   baseList.add(baseMetals);
				      }
					  baseMetalsService.SaveBaseData(baseList);
				   }
				   baseMetalsService.doCaclulation();
			}

	}

}
