package com.bourse.readExcelWriteDB.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.authsecurity.enums.FailureEnum;
import com.bourse.authsecurity.enums.MessageEnum;
import com.bourse.authsecurity.exception.BadRequestException;
import com.bourse.domain.BaseMetals;
import com.bourse.domain.EnergyData;
import com.bourse.domain.FoodStuffData;
import com.bourse.domain.PreciousMetals;
import com.bourse.domain.TransportationData;
import com.bourse.readExcelWriteDB.dto.DataDTO;
import com.bourse.readExcelWriteDB.dto.ReadExcelWriteDBDTO;
import com.bourse.readExcelWriteDB.enums.SubGroupEnum;
import com.bourse.readExcelWriteDB.util.ReadExcelWriteDBUtil;
import com.bourse.service.BaseMetalsService;
import com.bourse.service.EnergyService;
import com.bourse.service.FoodStuffService;
import com.bourse.service.PerciousMetalsService;
import com.bourse.service.TransportationService;

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
    
	public void readExcelFile(ReadExcelWriteDBDTO readExcelWriteDBDTO) {
		List<DataDTO> rowData = new ArrayList<>();
		
		System.out.println("------------------ batch load: "+readExcelWriteDBDTO.getGroupId());
		if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("6"))
		{ 
		   List<PreciousMetals> prcList = new ArrayList<>();
		   List<String> subgroups = Arrays.asList("1", "2", "3");
		   for (String subGroupId: subgroups) {
				   rowData.clear();
				   prcList.clear();
				   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",SubGroupEnum.getIndexByGroupAndSubGroupgroupId(6, Integer.valueOf(subGroupId)));
				   for (DataDTO data: rowData) {
					   if(perciousMetalsService.CheckIfCanSave(data.getDate(),Long.valueOf(subGroupId)))
							throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);
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

				   List<BaseMetals> baseList = new ArrayList<>();
				   List<String> subgroups = Arrays.asList("1", "2", "3","4");
				   for (String subGroupId: subgroups) {
						   rowData.clear();
						   baseList.clear();
						   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",SubGroupEnum.getIndexByGroupAndSubGroupgroupId(7, Integer.valueOf(subGroupId)));
						   for (DataDTO data: rowData) {
							   if(baseMetalsService.CheckIfCanSave(data.getDate(),Long.valueOf(subGroupId)))
									throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);
							  BaseMetals baseMetals = BaseMetals.builder().referDate(data.getDate())
						   												  .subgroupId(Long.valueOf(subGroupId))
						   												  .value(data.getValue())
						   												  .build();
							   
							   baseList.add(baseMetals);
				      }
					  baseMetalsService.SaveBaseData(baseList);
				   }
				   baseMetalsService.doCaclulation();
			}else
				if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("8"))
				{

					List<FoodStuffData> foodStuff = new ArrayList<>();   
					List<String> subgroups = Arrays.asList("1", "2", "3");
					   for (String subGroupId: subgroups) {
							   rowData.clear();
							   foodStuff.clear();
							   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",SubGroupEnum.getIndexByGroupAndSubGroupgroupId(8, Integer.valueOf(subGroupId)));
							   for (DataDTO data: rowData) {
								   if(foodStuffService.CheckIfCanSave(data.getDate(),Long.valueOf(subGroupId)))
											throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
								   FoodStuffData foodStuffData = FoodStuffData.builder().referDate(data.getDate())
							   												  .subgroupId(Long.valueOf(subGroupId))
							   												  .value(data.getValue())
							   												  .build();
								   
								  foodStuff.add(foodStuffData);
					      }
							   foodStuffService.SaveFoodStuffData(foodStuff);
					   }
					   foodStuffService.doCaclulation();
				}
				else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("9"))
					{
						   List<EnergyData> energy = new ArrayList<>();
						   List<String> subgroups = Arrays.asList("1", "2", "3","4","5");
						   for (String subGroupId: subgroups) {
								   rowData.clear();
								   energy.clear();
								   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",SubGroupEnum.getIndexByGroupAndSubGroupgroupId(9, Integer.valueOf(subGroupId)));
								   for (DataDTO data: rowData) {
									 if(energyService.CheckIfCanSave(data.getDate(),Long.valueOf(subGroupId)))
									 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
									   EnergyData energyData = EnergyData.builder().referDate(data.getDate())
								   												  .subgroupId(Long.valueOf(subGroupId))
								   												  .value(data.getValue()==null?"":data.getValue())
								   												  .build();
									   
									   energy.add(energyData);
						      }
								   energyService.SaveEnergyData(energy);
						   }
						   energyService.doCaclulation();
					}
				else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("10"))
				{
					   List<TransportationData> transportation = new ArrayList<>();
					   List<String> subgroups = Arrays.asList("1", "2");
					   for (String subGroupId: subgroups) {
							   rowData.clear();
							   transportation.clear();
							   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",SubGroupEnum.getIndexByGroupAndSubGroupgroupId(10, Integer.valueOf(subGroupId)));
							   for (DataDTO data: rowData) {
								 if(transportationService.CheckIfCanSave(data.getDate(),Long.valueOf(subGroupId)))
								 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
								 TransportationData transportationData = TransportationData.builder().referDate(data.getDate())
							   												  .subgroupId(Long.valueOf(subGroupId))
							   												  .value(data.getValue()==null?"":data.getValue())
							   												  .build();
								   
								   transportation.add(transportationData);
					      }
							   transportationService.SaveTransportationData(transportation);
					   }
					   transportationService.doCaclulation();
				}

	}

}
