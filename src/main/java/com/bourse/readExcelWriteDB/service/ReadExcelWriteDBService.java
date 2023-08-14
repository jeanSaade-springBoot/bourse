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
import com.bourse.domain.BoblOptionsVolume;
import com.bourse.domain.BundOptionsVolume;
import com.bourse.domain.BuxlOptionsVolume;
import com.bourse.domain.CorporateYieldsData;
import com.bourse.domain.EcbExcessLiquidity;
import com.bourse.domain.EcbQeLiquidity;
import com.bourse.domain.EnergyData;
import com.bourse.domain.EuriborOptionsVolume;
import com.bourse.domain.EurozoneMonetaryMass;
import com.bourse.domain.FoodStuffData;
import com.bourse.domain.PreciousMetals;
import com.bourse.domain.ShatzOptionsVolume;
import com.bourse.domain.TransportationData;
import com.bourse.readExcelWriteDB.dto.DataDTO;
import com.bourse.readExcelWriteDB.dto.ReadExcelWriteDBDTO;
import com.bourse.readExcelWriteDB.enums.SubGroupEnum;
import com.bourse.readExcelWriteDB.util.ReadExcelWriteDBUtil;
import com.bourse.service.BaseMetalsService;
import com.bourse.service.BoblOptionsVolumeService;
import com.bourse.service.BundOptionsVolumeService;
import com.bourse.service.BuxlOptionsVolumeService;
import com.bourse.service.CorporatesYieldsService;
import com.bourse.service.EcbExcessLiquidityService;
import com.bourse.service.EcbQeLiquidityService;
import com.bourse.service.EnergyService;
import com.bourse.service.EuriborOptionsVolumeService;
import com.bourse.service.EzMonetaryMassLiquidityService;
import com.bourse.service.FoodStuffService;
import com.bourse.service.PerciousMetalsService;
import com.bourse.service.ShatzOptionsVolumeService;
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
				}else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("11"))
				{
					   List<CorporateYieldsData> corporateYields = new ArrayList<>();
					   List<String> subgroups = Arrays.asList("1", "2", "3","4","5");
					   for (String subGroupId: subgroups) {
							   rowData.clear();
							   corporateYields.clear();
							   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",SubGroupEnum.getIndexByGroupAndSubGroupgroupId(11, Integer.valueOf(subGroupId)));
							   for (DataDTO data: rowData) {
								 if(corporatesYieldsService.CheckIfCanSave(data.getDate(),Long.valueOf(subGroupId)))
								 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
								    CorporateYieldsData corporateYieldsData = CorporateYieldsData.builder().referDate(data.getDate())
								   												  .subgroupId(Long.valueOf(subGroupId))
								   												  .value(data.getValue()==null?"":data.getValue())
							   												  .build();
								   
								 corporateYields.add(corporateYieldsData);
					      }
							   corporatesYieldsService.SaveCorporateDatas(corporateYields);
					
					   }
					   corporatesYieldsService.doCaclulation();
				}else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("14"))
				{
					   List<EcbExcessLiquidity> ecbExcessLiquidityList = new ArrayList<>();
					   List<String> subgroups = Arrays.asList("1", "2", "3","4");
					   for (String subGroupId: subgroups) {
							   rowData.clear();
							   ecbExcessLiquidityList.clear();
							   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",SubGroupEnum.getIndexByGroupAndSubGroupgroupId(14, Integer.valueOf(subGroupId)));
							   for (DataDTO data: rowData) {
								 if(ecbExcessLiquidityService.CheckIfCanSave(data.getDate(),Long.valueOf(subGroupId)))
								 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
								    EcbExcessLiquidity ecbExcessLiquidity = EcbExcessLiquidity.builder().referDate(data.getDate())
								   												  .subgroupId(Long.valueOf(subGroupId))
								   												  .value(data.getValue()==null?"":data.getValue())
							   												  .build();
								   
								    ecbExcessLiquidityList.add(ecbExcessLiquidity);
					      }
							   ecbExcessLiquidityService.SaveExcessLiquidityData(ecbExcessLiquidityList);
					
					   }
					   ecbExcessLiquidityService.doCaclulation();
				}else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("15"))
				{
					   List<EcbQeLiquidity> ecbQeLiquidityList = new ArrayList<>();
					   List<String> subgroups = Arrays.asList("1", "2");
					   for (String subGroupId: subgroups) {
							   rowData.clear();
							   ecbQeLiquidityList.clear();
							   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",SubGroupEnum.getIndexByGroupAndSubGroupgroupId(15, Integer.valueOf(subGroupId)));
							   for (DataDTO data: rowData) {
								 if(ecbQeLiquidityService.CheckIfCanSave(data.getDate(),Long.valueOf(subGroupId)))
								 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
								    EcbQeLiquidity ecbQeLiquidity = EcbQeLiquidity.builder().referDate(data.getDate())
								   												  .subgroupId(Long.valueOf(subGroupId))
								   												  .value(data.getValue()==null?"":data.getValue())
							   												  .build();
								   
								    ecbQeLiquidityList.add(ecbQeLiquidity);
					      }
							   ecbQeLiquidityService.SaveQeLiquidityData(ecbQeLiquidityList);
					
					   }
					   ecbQeLiquidityService.doCaclulation();
				}
				else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("16"))
				{
					   List<EurozoneMonetaryMass> eurozoneMonetaryMassList = new ArrayList<>();
					   List<String> subgroups = Arrays.asList("1", "2", "3","4");
					   for (String subGroupId: subgroups) {
							   rowData.clear();
							   eurozoneMonetaryMassList.clear();
							   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",SubGroupEnum.getIndexByGroupAndSubGroupgroupId(16, Integer.valueOf(subGroupId)));
							   for (DataDTO data: rowData) {
								 if(ezMonetaryMassLiquidityService.CheckIfCanSave(data.getDate(),Long.valueOf(subGroupId)))
								 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
								 EurozoneMonetaryMass eurozoneMonetaryMass = EurozoneMonetaryMass.builder().referDate(data.getDate())
								   												  .subgroupId(Long.valueOf(subGroupId))
								   												  .value(data.getValue()==null?"":data.getValue())
							   												  .build();
								   
								 eurozoneMonetaryMassList.add(eurozoneMonetaryMass);
					      }
							   ezMonetaryMassLiquidityService.SaveEurozoneMonetaryMassData(eurozoneMonetaryMassList);
					
					   }
					   ezMonetaryMassLiquidityService.doCaclulation();
				}else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("17"))
				{
					   List<BundOptionsVolume> bundOptionsVolumeList = new ArrayList<>();
					   List<String> subgroups = Arrays.asList("1", "2");
					   for (String subGroupId: subgroups) {
							   rowData.clear();
							   bundOptionsVolumeList.clear();
							   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",SubGroupEnum.getIndexByGroupAndSubGroupgroupId(17, Integer.valueOf(subGroupId)));
							   for (DataDTO data: rowData) {
								 if(bundOptionsVolumeService.CheckIfCanSave(data.getDate(),Long.valueOf(subGroupId)))
								 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
								 BundOptionsVolume bundOptionsVolume = BundOptionsVolume.builder().referDate(data.getDate())
								   												  .subgroupId(Long.valueOf(subGroupId))
								   												  .value(data.getValue()==null?"":data.getValue())
							   												  .build();
								   
								 bundOptionsVolumeList.add(bundOptionsVolume);
					      }
							   bundOptionsVolumeService.SaveData(bundOptionsVolumeList);
					
					   }
					   bundOptionsVolumeService.doCaclulation();
				}else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("18"))
				{
					   List<BoblOptionsVolume> boblBOptionsVolumeList = new ArrayList<>();
					   List<String> subgroups = Arrays.asList("1", "2");
					   for (String subGroupId: subgroups) {
							   rowData.clear();
							   boblBOptionsVolumeList.clear();
							   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",SubGroupEnum.getIndexByGroupAndSubGroupgroupId(18, Integer.valueOf(subGroupId)));
							   for (DataDTO data: rowData) {
								 if(boblOptionsVolumeService.CheckIfCanSave(data.getDate(),Long.valueOf(subGroupId)))
								 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
								 BoblOptionsVolume boblOptionsVolume = BoblOptionsVolume.builder().referDate(data.getDate())
								   												  .subgroupId(Long.valueOf(subGroupId))
								   												  .value(data.getValue()==null?"":data.getValue())
							   												  .build();
								   
								 boblBOptionsVolumeList.add(boblOptionsVolume);
					      }
							   boblOptionsVolumeService.SaveData(boblBOptionsVolumeList);
					
					   }
					   boblOptionsVolumeService.doCaclulation();
				}else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("19"))
				{
					   List<BuxlOptionsVolume> buxlOptionsVolumeList = new ArrayList<>();
					   List<String> subgroups = Arrays.asList("1", "2");
					   for (String subGroupId: subgroups) {
							   rowData.clear();
							   buxlOptionsVolumeList.clear();
							   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",SubGroupEnum.getIndexByGroupAndSubGroupgroupId(19, Integer.valueOf(subGroupId)));
							   for (DataDTO data: rowData) {
								 if(buxlOptionsVolumeService.CheckIfCanSave(data.getDate(),Long.valueOf(subGroupId)))
								 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
								    BuxlOptionsVolume buxlOptionsVolume = BuxlOptionsVolume.builder().referDate(data.getDate())
								   												  .subgroupId(Long.valueOf(subGroupId))
								   												  .value(data.getValue()==null?"":data.getValue())
							   												  .build();
								   
								 buxlOptionsVolumeList.add(buxlOptionsVolume);
					      }
							   buxlOptionsVolumeService.SaveData(buxlOptionsVolumeList);
					
					   }
					   buxlOptionsVolumeService.doCaclulation();
				}else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("20"))
				{
					   List<ShatzOptionsVolume> shatzOptionsVolumeList = new ArrayList<>();
					   List<String> subgroups = Arrays.asList("1", "2");
					   for (String subGroupId: subgroups) {
							   rowData.clear();
							   shatzOptionsVolumeList.clear();
							   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",SubGroupEnum.getIndexByGroupAndSubGroupgroupId(20, Integer.valueOf(subGroupId)));
							   for (DataDTO data: rowData) {
								 if(shatzOptionsVolumeService.CheckIfCanSave(data.getDate(),Long.valueOf(subGroupId)))
								 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
								    ShatzOptionsVolume shatzOptionsVolume = ShatzOptionsVolume.builder().referDate(data.getDate())
								   												  .subgroupId(Long.valueOf(subGroupId))
								   												  .value(data.getValue()==null?"":data.getValue())
							   												  .build();
								   
								    shatzOptionsVolumeList.add(shatzOptionsVolume);
					      }
							   shatzOptionsVolumeService.SaveData(shatzOptionsVolumeList);
					
					   }
					   shatzOptionsVolumeService.doCaclulation();
				}else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("21"))
				{
					   List<EuriborOptionsVolume> euriborOptionsVolumeList = new ArrayList<>();
					   List<String> subgroups = Arrays.asList("1", "2", "3" , "4" ,"5");
					   for (String subGroupId: subgroups) {
							   rowData.clear();
							   euriborOptionsVolumeList.clear();
							   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",SubGroupEnum.getIndexByGroupAndSubGroupgroupId(21, Integer.valueOf(subGroupId)));
							   for (DataDTO data: rowData) {
								 if(euriborOptionsVolumeService.CheckIfCanSave(data.getDate(),Long.valueOf(subGroupId)))
								 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
								 EuriborOptionsVolume euriborOptionsVolume = EuriborOptionsVolume.builder().referDate(data.getDate())
								   												  .subgroupId(Long.valueOf(subGroupId))
								   												  .value(data.getValue()==null?"":data.getValue())
							   												  .build();
								   
								    euriborOptionsVolumeList.add(euriborOptionsVolume);
					      }
							   euriborOptionsVolumeService.SaveData(euriborOptionsVolumeList);
					
					   }
					   euriborOptionsVolumeService.doCaclulation();
				}
	}

}
