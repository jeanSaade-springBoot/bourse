package com.bourse.readExcelWriteDB.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bourse.authsecurity.enums.FailureEnum;
import com.bourse.authsecurity.enums.MessageEnum;
import com.bourse.authsecurity.exception.BadRequestException;
import com.bourse.domain.BaseMetals;
import com.bourse.domain.BoblOptionsVolume;
import com.bourse.domain.BundOptionsVolume;
import com.bourse.domain.BuxlOptionsVolume;
import com.bourse.domain.CdsData;
import com.bourse.domain.CorporateYieldsData;
import com.bourse.domain.EcbExcessLiquidity;
import com.bourse.domain.EcbQeLiquidity;
import com.bourse.domain.EnergyData;
import com.bourse.domain.EuriborOptionsVolume;
import com.bourse.domain.EurozoneMonetaryMass;
import com.bourse.domain.FoodStuffData;
import com.bourse.domain.FxUsdData;
import com.bourse.domain.PreciousMetals;
import com.bourse.domain.ShatzOptionsVolume;
import com.bourse.domain.SubGroup;
import com.bourse.domain.TransportationData;
import com.bourse.domain.cryptos.CryptosData;
import com.bourse.domain.longEnds.LongEndData;
import com.bourse.domain.macro.MacroData;
import com.bourse.domain.rates.RatesData;
import com.bourse.domain.skews.LongSkewsData;
import com.bourse.domain.skews.ShortSkewsData;
import com.bourse.domain.sti.StiAsiaData;
import com.bourse.domain.sti.StiCryptosData;
import com.bourse.domain.sti.StiEmergingData;
import com.bourse.domain.sti.StiEuropeData;
import com.bourse.domain.sti.StiWallStreetData;
import com.bourse.readExcelWriteDB.dto.DataDTO;
import com.bourse.readExcelWriteDB.dto.ReadExcelWriteDBDTO;
import com.bourse.readExcelWriteDB.enums.SubGroupEnum;
import com.bourse.readExcelWriteDB.util.ReadExcelWriteDBUtil;
import com.bourse.repositories.CdsDataRepository;
import com.bourse.repositories.SubGroupRepository;
import com.bourse.service.BaseMetalsService;
import com.bourse.service.BoblOptionsVolumeService;
import com.bourse.service.BundOptionsVolumeService;
import com.bourse.service.BuxlOptionsVolumeService;
import com.bourse.service.CdsDataService;
import com.bourse.service.CorporatesYieldsService;
import com.bourse.service.EcbExcessLiquidityService;
import com.bourse.service.EcbQeLiquidityService;
import com.bourse.service.EnergyService;
import com.bourse.service.EuriborOptionsVolumeService;
import com.bourse.service.EzMonetaryMassLiquidityService;
import com.bourse.service.FoodStuffService;
import com.bourse.service.FxDataService;
import com.bourse.service.PerciousMetalsService;
import com.bourse.service.ShatzOptionsVolumeService;
import com.bourse.service.TransportationService;
import com.bourse.service.cryptos.CryptosService;
import com.bourse.service.longEnds.LongEndsService;
import com.bourse.service.macro.MacroService;
import com.bourse.service.rates.RatesService;
import com.bourse.service.skews.SkewsService;
import com.bourse.service.sti.StiService;

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
    @Autowired
    SubGroupRepository subGroupRepository;
    @Autowired
    CdsDataService cdsDataService;
    @Autowired
    FxDataService fxDataService;
    @Autowired
    SkewsService skewsService;
    @Autowired
    StiService stiService;    
    @Autowired
    MacroService macroService;  
    @Autowired
    RatesService ratesService;
    @Autowired
    LongEndsService longEndsService;
    @Autowired
    CryptosService cryptosService;
    
	public void readExcelFile(ReadExcelWriteDBDTO readExcelWriteDBDTO) {
		List<DataDTO> rowData = new ArrayList<>();

	    Set<String> macroGroupIds = new HashSet<>();
	    macroGroupIds.add("37");
	    macroGroupIds.add("38");
	    macroGroupIds.add("39");
	    macroGroupIds.add("40");
	    macroGroupIds.add("41");
	    macroGroupIds.add("42");
	    macroGroupIds.add("43");
	    macroGroupIds.add("44");
	    macroGroupIds.add("45");
	    macroGroupIds.add("46");
	    macroGroupIds.add("47");
	    
	    Set<String> LongEndsGroupIds = new HashSet<>(); 
	    LongEndsGroupIds.add("52");
	    
	    Set<String> cryptosGroupIds = new HashSet<>();
	    cryptosGroupIds.add("71");
	    cryptosGroupIds.add("72");
	    cryptosGroupIds.add("73");
	    cryptosGroupIds.add("74");
	    cryptosGroupIds.add("75");
	    cryptosGroupIds.add("76");
	    
	    
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

			 if (!prcList.isEmpty()) {
		            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(prcList, "referDate");

		            System.out.println("Minimum Date: " + minMaxDates[0]);
		            System.out.println("Maximum Date: " + minMaxDates[1]);

		            perciousMetalsService.doCalculationLoader(minMaxDates[0],minMaxDates[1]);
		        } else {
		            System.out.println("List is empty.");
		        }
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
				   if (!baseList.isEmpty()) {
			            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(baseList, "referDate");

			            System.out.println("Minimum Date: " + minMaxDates[0]);
			            System.out.println("Maximum Date: " + minMaxDates[1]);

			            baseMetalsService.doCalculationLoader(minMaxDates[0],minMaxDates[1]);
			        } else {
			            System.out.println("List is empty.");
			        } 
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
					   if (!foodStuff.isEmpty()) {
				            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(foodStuff, "referDate");

				            System.out.println("Minimum Date: " + minMaxDates[0]);
				            System.out.println("Maximum Date: " + minMaxDates[1]);

				            foodStuffService.doCalculationLoader(minMaxDates[0],minMaxDates[1]);
				        } else {
				            System.out.println("List is empty.");
				        }
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
						   if (!energy.isEmpty()) {
					            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(energy, "referDate");

					            System.out.println("Minimum Date: " + minMaxDates[0]);
					            System.out.println("Maximum Date: " + minMaxDates[1]);

					            energyService.doCalculationLoader(minMaxDates[0],minMaxDates[1]);
					        } else {
					            System.out.println("List is empty.");
					        }  
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
					   if (!transportation.isEmpty()) {
				            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(transportation, "referDate");

				            System.out.println("Minimum Date: " + minMaxDates[0]);
				            System.out.println("Maximum Date: " + minMaxDates[1]);

				            transportationService.doCalculationLoader(minMaxDates[0],minMaxDates[1]);
				        } else {
				            System.out.println("List is empty.");
				        } 
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
					   if (!corporateYields.isEmpty()) {
				            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(corporateYields, "referDate");

				            System.out.println("Minimum Date: " + minMaxDates[0]);
				            System.out.println("Maximum Date: " + minMaxDates[1]);

				            corporatesYieldsService.doCalculationLoader(minMaxDates[0],minMaxDates[1]);
				        } else {
				            System.out.println("List is empty.");
				        } 
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
					   if (!ecbExcessLiquidityList.isEmpty()) {
				            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(ecbExcessLiquidityList, "referDate");

				            System.out.println("Minimum Date: " + minMaxDates[0]);
				            System.out.println("Maximum Date: " + minMaxDates[1]);

				            ecbExcessLiquidityService.doCalculationLoader(minMaxDates[0],minMaxDates[1]);
				        } else {
				            System.out.println("List is empty.");
				        }
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
					   if (!ecbQeLiquidityList.isEmpty()) {
				            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(ecbQeLiquidityList, "referDate");

				            System.out.println("Minimum Date: " + minMaxDates[0]);
				            System.out.println("Maximum Date: " + minMaxDates[1]);

				            ecbQeLiquidityService.doCalculationLoader(minMaxDates[0],minMaxDates[1]);
				        } else {
				            System.out.println("List is empty.");
				        }
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
					   if (!eurozoneMonetaryMassList.isEmpty()) {
				            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(eurozoneMonetaryMassList, "referDate");

				            System.out.println("Minimum Date: " + minMaxDates[0]);
				            System.out.println("Maximum Date: " + minMaxDates[1]);

				            ezMonetaryMassLiquidityService.doCalculationLoader(minMaxDates[0],minMaxDates[1]);
				        } else {
				            System.out.println("List is empty.");
				        }
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
					   if (!bundOptionsVolumeList.isEmpty()) {
				            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(bundOptionsVolumeList, "referDate");

				            System.out.println("Minimum Date: " + minMaxDates[0]);
				            System.out.println("Maximum Date: " + minMaxDates[1]);

				            bundOptionsVolumeService.doCalculationLoader(minMaxDates[0],minMaxDates[1]);
				        } else {
				            System.out.println("List is empty.");
				        }
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
					   if (!boblBOptionsVolumeList.isEmpty()) {
				            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(boblBOptionsVolumeList, "referDate");

				            System.out.println("Minimum Date: " + minMaxDates[0]);
				            System.out.println("Maximum Date: " + minMaxDates[1]);

				            boblOptionsVolumeService.doCalculationLoader(minMaxDates[0],minMaxDates[1]);
				        } else {
				            System.out.println("List is empty.");
				        }
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
					   if (!buxlOptionsVolumeList.isEmpty()) {
				            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(buxlOptionsVolumeList, "referDate");

				            System.out.println("Minimum Date: " + minMaxDates[0]);
				            System.out.println("Maximum Date: " + minMaxDates[1]);

				            buxlOptionsVolumeService.doCalculationLoader(minMaxDates[0],minMaxDates[1]);
				        } else {
				            System.out.println("List is empty.");
				        }
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
					   if (!shatzOptionsVolumeList.isEmpty()) {
				            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(shatzOptionsVolumeList, "referDate");

				            System.out.println("Minimum Date: " + minMaxDates[0]);
				            System.out.println("Maximum Date: " + minMaxDates[1]);
				            shatzOptionsVolumeService.doCalculationLoader(minMaxDates[0],minMaxDates[1]);
				        } else {
				            System.out.println("List is empty.");
				        }
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
					   euriborOptionsVolumeService.doCalculation();
				}
				else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("22"))
				{
					   List<CdsData> cdsDataList = new ArrayList<>();
					   List<SubGroup> subGroups = subGroupRepository.findByGroupId(readExcelWriteDBDTO.getGroupId());
					   List<String> subGroupIds = new ArrayList<>();

				        for (SubGroup subGroup : subGroups) {
				            subGroupIds.add(subGroup.getIdSubGroup());
				        }
					   for (String subGroupId: subGroupIds) {
								   rowData.clear();
								   cdsDataList.clear();
								   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",subGroupId);
								   for (DataDTO data: rowData) {
									 if(cdsDataService.CheckIfCanSave(data.getDate(),Long.valueOf(subGroupId)))
									 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
									 CdsData cdsData = CdsData.builder().referDate(data.getDate())
									   												  .subgroupId(Long.valueOf(subGroupId))
									   												  .value(data.getValue()==null?"":data.getValue())
								   												  .build();
									   
									 cdsDataList.add(cdsData);
						      }
								   cdsDataService.SaveData(cdsDataList);
					
					   }
					   if (!cdsDataList.isEmpty()) {
				            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(cdsDataList, "referDate");

				            System.out.println("Minimum Date: " + minMaxDates[0]);
				            System.out.println("Maximum Date: " + minMaxDates[1]);

				            cdsDataService.doCalculationLoader(minMaxDates[0],minMaxDates[1]);
				        } else {
				            System.out.println("List is empty.");
				        }
				}
				else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("23"))
				{
					   List<FxUsdData> fxUsdDataList = new ArrayList<>();
					   List<SubGroup> subGroups = subGroupRepository.findByGroupId(readExcelWriteDBDTO.getGroupId());
					   List<String> subGroupIds = new ArrayList<>();

				        for (SubGroup subGroup : subGroups) {
				            subGroupIds.add(subGroup.getIdSubGroup());
				        }
					   for (String subGroupId: subGroupIds) {
								   rowData.clear();
								   fxUsdDataList.clear();
								   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",subGroupId);
								   for (DataDTO data: rowData) {
									 if(fxDataService.CheckIfCanSave(data.getDate(),Long.valueOf(subGroupId)))
									 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
									 FxUsdData fxUsdData = FxUsdData.builder().referDate(data.getDate())
									   												  .subgroupId(Long.valueOf(subGroupId))
									   												  .value(data.getValue()==null?"":data.getValue())
								   												  .build();
									   
									 fxUsdDataList.add(fxUsdData);
						      }
								   fxDataService.SaveData(fxUsdDataList);
					
					   }
					   if (!fxUsdDataList.isEmpty()) {
				            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(fxUsdDataList, "referDate");

				            System.out.println("Minimum Date: " + minMaxDates[0]);
				            System.out.println("Maximum Date: " + minMaxDates[1]);

				            fxDataService.doCalculationLoader(minMaxDates[0],minMaxDates[1]);
				        } else {
				            System.out.println("List is empty.");
				        } 
				}
				else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("25"))
				{
					try {
						Object[][] excelData = ReadExcelWriteDBUtil.readExcel(readExcelWriteDBDTO.getFile());
						List<LongSkewsData> longSkewsDataList = new ArrayList<>();
						
						for (int rowIndex = 0; rowIndex < excelData.length; rowIndex++) {
							if (rowIndex >= 2) {
								Object[] row = excelData[rowIndex];
								Object[][] result = ReadExcelWriteDBUtil.splitArray(row, 5);
								for (int i = 0; i < result.length; i++) {

									Object[] splitrow = result[i];

									for (int j = 0; j < splitrow.length; j++) {
										 if(j!=0)
										 {
											 if(skewsService.CheckIfCanSaveLongSkews(splitrow[0].toString(),Long.valueOf("1")))
											 	throw new BadRequestException(splitrow[0].toString()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
										         LongSkewsData longSkewsData = LongSkewsData.builder().referDate(splitrow[0].toString())
												 											  .groupId(Long.valueOf(ReadExcelWriteDBUtil.getLongSkewsGroupId(i)[0]))
											   												  .subgroupId(Long.valueOf(j))
											   												  .factorId(Long.valueOf(ReadExcelWriteDBUtil.getLongSkewsGroupId(i)[1]))
											   												  .value(splitrow[j].toString()==null?"":splitrow[j].toString())
										   												  .build();
											   
										         longSkewsDataList.add(longSkewsData);
										 }
									}
									
								}
							}
						}
						skewsService.saveLongSkews(longSkewsDataList);
						
						if (!longSkewsDataList.isEmpty()) {
					            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(longSkewsDataList, "referDate");

					            System.out.println("Minimum Date: " + minMaxDates[0]);
					            System.out.println("Maximum Date: " + minMaxDates[1]);
					            
					            skewsService.doCalculationLongSkewsLoader(minMaxDates[0],minMaxDates[1]);
					        } else {
					            System.out.println("List is empty.");
					        }
						
					} catch (IOException e) {
						e.printStackTrace();
					}
					
				}
	else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("30"))
	{
		try {
			Object[][] excelData = ReadExcelWriteDBUtil.readExcel(readExcelWriteDBDTO.getFile());
			List<ShortSkewsData> shortSkewsDataList = new ArrayList<>();
			
			for (int rowIndex = 0; rowIndex < excelData.length; rowIndex++) {
				if (rowIndex >= 2) {
					Object[] row = excelData[rowIndex];
					Object[][] result = ReadExcelWriteDBUtil.splitArray(row, 5);
					for (int i = 0; i < result.length; i++) {

						Object[] splitrow = result[i];

						for (int j = 0; j < splitrow.length; j++) {
							 if(j!=0)
							 {
								 if(skewsService.CheckIfCanSaveShortSkews(splitrow[0].toString(),Long.valueOf("2")))
								 	throw new BadRequestException(splitrow[0].toString()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
								 	ShortSkewsData shortSkewsData = ShortSkewsData.builder().referDate(splitrow[0].toString())
									 											  .groupId(Long.valueOf(ReadExcelWriteDBUtil.getShortSkewsGroupId(i)[0]))
								   												  .subgroupId(Long.valueOf(j))
								   												  .factorId(Long.valueOf(ReadExcelWriteDBUtil.getShortSkewsGroupId(i)[1]))
								   												  .value(splitrow[j].toString()==null?"":splitrow[j].toString())
							   												  .build();
								   
							         shortSkewsDataList.add(shortSkewsData);
							 }
						}
						
					}
				}
			}
			skewsService.saveShortSkews(shortSkewsDataList);

			   if (!shortSkewsDataList.isEmpty()) {
		            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(shortSkewsDataList, "referDate");

		            System.out.println("Minimum Date: " + minMaxDates[0]);
		            System.out.println("Maximum Date: " + minMaxDates[1]);

		            skewsService.doCalculationShortSkewsLoader(minMaxDates[0],minMaxDates[1]);
		        } else {
		            System.out.println("List is empty.");
		        }
			   
		} catch (IOException e) {
			e.printStackTrace();
		}

	}else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("32"))
	{
		   List<StiAsiaData> dataList = new ArrayList<>();
		   List<String> subGroupIds = Arrays.asList("1", "2", "3" , "4" ,"5" ,"6" ,"7");

		   for (String subGroupId: subGroupIds) {
					   rowData.clear();
					   dataList.clear();
					   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",subGroupId);
					   for (DataDTO data: rowData) {
						 if(!stiService.CheckIfHasData(data.getDate()))
							 throw new BadRequestException(data.getDate()+" "+MessageEnum.MISSING_FX_DATA.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.MISSING_FX_DATA.service);	   
						 if(stiService.CheckIfCanSaveStiAsia(data.getDate(),Long.valueOf(subGroupId)))
						 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
						 	StiAsiaData stiData = StiAsiaData.builder().referDate(data.getDate())
						   												  .subgroupId(Long.valueOf(subGroupId))
						   												  .value(data.getValue()==null?"":data.getValue())
					   												  .build();
						   
						 	dataList.add(stiData);
			      }
					 stiService.saveStiAsia(dataList);
		
		   }
		   if (!dataList.isEmpty()) {
	            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(dataList, "referDate");

	            System.out.println("Minimum Date: " + minMaxDates[0]);
	            System.out.println("Maximum Date: " + minMaxDates[1]);

	   		 	stiService.doCaculationStiAsiaLoader(minMaxDates[0],minMaxDates[1]);
	        } else {
	            System.out.println("List is empty.");
	        }

	}
	else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("33"))
	{
		   List<StiWallStreetData> dataList = new ArrayList<>();
		   List<String> subGroupIds = Arrays.asList("1", "2", "3" , "4" ,"5" ,"6" ,"7");

		   for (String subGroupId: subGroupIds) {
					   rowData.clear();
					   dataList.clear();
					   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",subGroupId);
					   for (DataDTO data: rowData) {
						if(stiService.CheckIfCanSaveStiWallStreet(data.getDate(),Long.valueOf(subGroupId)))
						 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
						StiWallStreetData stiData = StiWallStreetData.builder().referDate(data.getDate())
						   												  .subgroupId(Long.valueOf(subGroupId))
						   												  .value(data.getValue()==null?"":data.getValue())
					   												  .build();
						   
						 	dataList.add(stiData);
			      }
					 stiService.saveStiWallStreet(dataList);
		
		   }
		   if (!dataList.isEmpty()) {
	            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(dataList, "referDate");

	            System.out.println("Minimum Date: " + minMaxDates[0]);
	            System.out.println("Maximum Date: " + minMaxDates[1]);

	   		 	stiService.doCaculationStiWallStreetLoader(minMaxDates[0],minMaxDates[1]);
	        } else {
	            System.out.println("List is empty.");
	        }

	}else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("34"))
	{
		   List<StiEuropeData> dataList = new ArrayList<>();
		   List<String> subGroupIds = Arrays.asList("1", "2", "3" , "4" ,"5" ,"6" ,"7");

		   for (String subGroupId: subGroupIds) {
					   rowData.clear();
					   dataList.clear();
					   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",subGroupId);
					   for (DataDTO data: rowData) {
						    if(!stiService.CheckIfHasData(data.getDate()))
								 throw new BadRequestException(data.getDate()+" "+MessageEnum.MISSING_FX_DATA.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.MISSING_FX_DATA.service);	   
							if(stiService.CheckIfCanSaveStiEurope(data.getDate(),Long.valueOf(subGroupId)))
						 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
							StiEuropeData stiData = StiEuropeData.builder().referDate(data.getDate())
						   												  .subgroupId(Long.valueOf(subGroupId))
						   												  .value(data.getValue()==null?"":data.getValue())
					   												  .build();
						   
						 	dataList.add(stiData);
			      }
					 stiService.saveStiEurope(dataList);
		
		   }
		   if (!dataList.isEmpty()) {
	            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(dataList, "referDate");

	            System.out.println("Minimum Date: " + minMaxDates[0]);
	            System.out.println("Maximum Date: " + minMaxDates[1]);

	   		 	stiService.doCaculationStiEuropeLoader(minMaxDates[0],minMaxDates[1]);
	        } else {
	            System.out.println("List is empty.");
	        }

	}else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("35"))
	{
		   List<StiEmergingData> dataList = new ArrayList<>();
		   List<String> subGroupIds = Arrays.asList("1", "2", "3" , "4" ,"5" ,"6" ,"7");

		   for (String subGroupId: subGroupIds) {
					   rowData.clear();
					   dataList.clear();
					   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",subGroupId);
					   for (DataDTO data: rowData) {
						    if(!stiService.CheckIfHasData(data.getDate()))
								 throw new BadRequestException(data.getDate()+" "+MessageEnum.MISSING_FX_DATA.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.MISSING_FX_DATA.service);	   
							if(stiService.CheckIfCanSaveStiEmerging(data.getDate(),Long.valueOf(subGroupId)))
						 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
							StiEmergingData stiData = StiEmergingData.builder().referDate(data.getDate())
						   												  .subgroupId(Long.valueOf(subGroupId))
						   												  .value(data.getValue()==null?"":data.getValue())
					   												  .build();
						   
						 	dataList.add(stiData);
			      }
					 stiService.saveStiEmerging(dataList);
		   }
		   if (!dataList.isEmpty()) {
	            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(dataList, "referDate");

	            System.out.println("Minimum Date: " + minMaxDates[0]);
	            System.out.println("Maximum Date: " + minMaxDates[1]);

	   		 	stiService.doCaculationStiEmergingLoader(minMaxDates[0],minMaxDates[1]);
	        } else {
	            System.out.println("List is empty.");
	        }
		}
	else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("36"))
	{
		   List<StiCryptosData> dataList = new ArrayList<>();
		   List<String> subGroupIds = Arrays.asList("1", "2", "3" , "4" ,"5");

		   for (String subGroupId: subGroupIds) {
					   rowData.clear();
					   dataList.clear();
					   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",subGroupId);
					   for (DataDTO data: rowData) {
						    if(!stiService.CheckIfHasData(data.getDate()))
								 throw new BadRequestException(data.getDate()+" "+MessageEnum.MISSING_FX_DATA.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.MISSING_FX_DATA.service);	   
							if(stiService.CheckIfCanSaveStiCryptos(data.getDate(),Long.valueOf(subGroupId)))
						 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
							StiCryptosData stiData = StiCryptosData.builder().referDate(data.getDate())
						   												  .subgroupId(Long.valueOf(subGroupId))
						   												  .value(data.getValue()==null?"":data.getValue())
					   												  .build();
						   
						 	dataList.add(stiData);
			      }
					 stiService.saveStiCryptos(dataList);
		   }
		   if (!dataList.isEmpty()) {
	            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(dataList, "referDate");

	            System.out.println("Minimum Date: " + minMaxDates[0]);
	            System.out.println("Maximum Date: " + minMaxDates[1]);

	   		 	stiService.doCaculationStiCryptosLoader(minMaxDates[0],minMaxDates[1]);
	        } else {
	            System.out.println("List is empty.");
	        }
		}
	else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("51"))
	{
		   List<RatesData> ratesDatas = new ArrayList<>();
		   List<String> subgroups = Arrays.asList("1","2","3","4","5","6");
		   for (String subGroupId: subgroups) {
				   rowData.clear();
				   ratesDatas.clear();
				   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",subGroupId);
				   for (DataDTO data: rowData) {
					 if(ratesService.CheckIfCanSaveRts(data.getDate(),Long.valueOf(readExcelWriteDBDTO.getGroupId()),Long.valueOf(subGroupId)))
					 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
					 	RatesData ratesData = RatesData.builder().referDate(data.getDate())
					   												  .subgroupId(Long.valueOf(subGroupId))
					   												  .groupId(Long.valueOf(readExcelWriteDBDTO.getGroupId()))
					   												  .value(data.getValue()==null?"":data.getValue())
				   												  .build();
					   
					 	ratesDatas.add(ratesData);
		      }
				   ratesService.SaveRatesData(ratesDatas);
		
		   }
		   if (!ratesDatas.isEmpty()) {
	            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(ratesDatas, "referDate");

	            System.out.println("Minimum Date: " + minMaxDates[0]);
	            System.out.println("Maximum Date: " + minMaxDates[1]);

	            ratesService.doCaculationLoader(minMaxDates[0],minMaxDates[1],Long.valueOf(readExcelWriteDBDTO.getGroupId()));
	        } else {
	            System.out.println("List is empty.");
	        } 
	}
	else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("50"))
	{
		   List<RatesData> ratesDatas = new ArrayList<>();
		   List<String> subgroups = Arrays.asList("1");
		   for (String subGroupId: subgroups) {
				   rowData.clear();
				   ratesDatas.clear();
				   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",subGroupId);
				   for (DataDTO data: rowData) {
					 if(ratesService.CheckIfCanSaveRts(data.getDate(),Long.valueOf(readExcelWriteDBDTO.getGroupId()),Long.valueOf(subGroupId)))
					 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
					 	RatesData ratesData = RatesData.builder().referDate(data.getDate())
					   												  .subgroupId(Long.valueOf(subGroupId))
					   												  .groupId(Long.valueOf(readExcelWriteDBDTO.getGroupId()))
					   												  .value(data.getValue()==null?"":data.getValue())
				   												  .build();
					   
					 	ratesDatas.add(ratesData);
		      }
				   ratesService.SaveRatesData(ratesDatas);
		
		   }
		   if (!ratesDatas.isEmpty()) {
	            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(ratesDatas, "referDate");

	            System.out.println("Minimum Date: " + minMaxDates[0]);
	            System.out.println("Maximum Date: " + minMaxDates[1]);

	            ratesService.doCaculationLoader(minMaxDates[0],minMaxDates[1],Long.valueOf(readExcelWriteDBDTO.getGroupId()));
	        } else {
	            System.out.println("List is empty.");
	        } 
	}
	else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("49"))
	{

		   List<RatesData> ratesDatas = new ArrayList<>();
		   List<String> subgroups = Arrays.asList("1","2");
		   for (String subGroupId: subgroups) {
				   rowData.clear();
				   ratesDatas.clear();
				   rowData = ReadExcelWriteDBUtil.readExcelFile(readExcelWriteDBDTO.getFile(),"0",subGroupId);
				   for (DataDTO data: rowData) {
					 if(ratesService.CheckIfCanSaveRts(data.getDate(),Long.valueOf(readExcelWriteDBDTO.getGroupId()),Long.valueOf(subGroupId)))
					 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
					 	RatesData ratesData = RatesData.builder().referDate(data.getDate())
					   												  .subgroupId(Long.valueOf(subGroupId))
					   												  .groupId(Long.valueOf(readExcelWriteDBDTO.getGroupId()))
					   												  .value(data.getValue()==null?"":data.getValue())
				   												  .build();
					   
					 	ratesDatas.add(ratesData);
		      }
				   ratesService.SaveRatesData(ratesDatas);
		
		   }
		   if (!ratesDatas.isEmpty()) {
	            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(ratesDatas, "referDate");

	            System.out.println("Minimum Date: " + minMaxDates[0]);
	            System.out.println("Maximum Date: " + minMaxDates[1]);

	            ratesService.doCaculationLoader(minMaxDates[0],minMaxDates[1],Long.valueOf(readExcelWriteDBDTO.getGroupId()));
	        } else {
	            System.out.println("List is empty.");
	        } 

	
	}else if(readExcelWriteDBDTO.getGroupId().equalsIgnoreCase("48"))
	{
		

		try {
			Object[][] excelData = ReadExcelWriteDBUtil.readExcel(readExcelWriteDBDTO.getFile());
			List<RatesData> ratesDataList = new ArrayList<>();
			
			for (int rowIndex = 0; rowIndex < excelData.length; rowIndex++) {
				if (rowIndex >= 2) {
					
					Object[] row = excelData[rowIndex];
					 if (row[0]=="") {
					        // Skip the current iteration and continue with the next one
					        continue;
					    }
					Object[][] result = ReadExcelWriteDBUtil.splitArrayRates(readExcelWriteDBDTO.getGroupId(),row, 2);
					
					int[] subgroupOrder = {2, 1, 3};
					for (int i = 0; i < result.length; i++) {

						Object[] splitrow = result[i];
										
						for (int j = 0; j < splitrow.length; j++) {
							 if(j!=0)
							 {   String referDate = splitrow[0].toString();
								 Long grouId = Long.valueOf(readExcelWriteDBDTO.getGroupId());
					             Long subgrouId = Long.valueOf(subgroupOrder[i]);
								 Long factorId = Long.valueOf(ReadExcelWriteDBUtil.getRateFactorId(j));
								 String value = splitrow[j].toString()==null?"":splitrow[j].toString();
								
								 if(ratesService.CheckIfCanSave(referDate,grouId,subgrouId,factorId))
								 	throw new BadRequestException(splitrow[0].toString()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
								 RatesData ratesData = RatesData.builder().referDate(referDate)
									 											  .groupId(grouId)
								   												  .subgroupId(subgrouId)
								   												  .factorId(factorId)
								   												  .value(value)
							   												  .build();
								   
								 	ratesDataList.add(ratesData);
							 }
						
					}
				}
			}
			}
			ratesService.SaveRatesData(ratesDataList);
			
			   if (!ratesDataList.isEmpty()) {
		            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(ratesDataList, "referDate");

		            System.out.println("Minimum Date: " + minMaxDates[0]);
		            System.out.println("Maximum Date: " + minMaxDates[1]);

		            ratesService.doCaculationLoader(minMaxDates[0],minMaxDates[1],Long.valueOf(readExcelWriteDBDTO.getGroupId()));
		        } else {
		            System.out.println("List is empty.");
		        }
		} catch (IOException e) {
			e.printStackTrace();
		}

	
	}
	else if(macroGroupIds.contains(readExcelWriteDBDTO.getGroupId().trim()))
	{
		try {
			Object[][] excelData = ReadExcelWriteDBUtil.readExcel(readExcelWriteDBDTO.getFile());
			List<MacroData> macroDataList = new ArrayList<>();
			
			for (int rowIndex = 0; rowIndex < excelData.length; rowIndex++) {
				if (rowIndex >= 2) {
					
					Object[] row = excelData[rowIndex];
					 if (row[0]=="") {
					        // Skip the current iteration and continue with the next one
					        continue;
					    }
					Object[][] result = ReadExcelWriteDBUtil.splitArrayMacro(row, 3);
					
					
					for (int i = 0; i < result.length; i++) {

						Object[] splitrow = result[i];
										
						for (int j = 0; j < splitrow.length; j++) {
							 if(j!=0)
							 {   String referDate = splitrow[0].toString();
								 Long grouId = Long.valueOf(readExcelWriteDBDTO.getGroupId());
								 Long subgrouId = Long.valueOf(i+1);
								 Long factorId = Long.valueOf(ReadExcelWriteDBUtil.getMacroFactorId(j));
								 String value = splitrow[j].toString()==null?"":splitrow[j].toString();
								
								 if(macroService.CheckIfCanSave(referDate,grouId,subgrouId,factorId))
								 	throw new BadRequestException(splitrow[0].toString()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
								 	MacroData macroData = MacroData.builder().referDate(referDate)
									 											  .groupId(grouId)
								   												  .subgroupId(subgrouId)
								   												  .factorId(factorId)
								   												  .value(value)
							   												  .build();
								   
								 	macroDataList.add(macroData);
							 }
						
					}
				}
			}
			}
			macroService.saveMacro(macroDataList);
			
			   if (!macroDataList.isEmpty()) {
		            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(macroDataList, "referDate");

		            System.out.println("Minimum Date: " + minMaxDates[0]);
		            System.out.println("Maximum Date: " + minMaxDates[1]);

		            macroService.doCalculationMacroLoader(minMaxDates[0],minMaxDates[1],readExcelWriteDBDTO.getGroupId());
		        } else {
		            System.out.println("List is empty.");
		        }
		} catch (IOException e) {
			e.printStackTrace();
		}

		}else if(LongEndsGroupIds.contains(readExcelWriteDBDTO.getGroupId().trim()))
		{
			   List<LongEndData> longEndDataLst = new ArrayList<>();
			   List<String> subgroups = Arrays.asList("1", "2", "3" , "4" ,"5","6", "7", "8" , "9" ,"10","11", "12", "13","14" ,"15" );
			   int[] subgroupOrder = {1,2,3,4,5,6,14,15,7,8,9,10,11,12,13};
			   int i = 0; 
			   for (String subGroupId: subgroups) {
						   rowData.clear();
						   longEndDataLst.clear();
						   rowData = ReadExcelWriteDBUtil.readExcelFileWithString(readExcelWriteDBDTO.getFile(),"0",subGroupId);
						   for (DataDTO data: rowData) {
							 if(longEndsService.CheckIfCanSaveLongEnds(data.getDate(),Long.valueOf(readExcelWriteDBDTO.getGroupId()),Long.valueOf(subgroupOrder[i])))
							 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
							 LongEndData longEndData = LongEndData.builder().referDate(data.getDate())
							   												  .subgroupId(Long.valueOf(subgroupOrder[i]))
							   												  .groupId(Long.valueOf(readExcelWriteDBDTO.getGroupId()))
							   												  .value(data.getValue()==null?"":data.getValue())
						   												  .build();
							   
							 longEndDataLst.add(longEndData);
				      }
						  longEndsService.saveLongEndsData(longEndDataLst);
					 i++;  
			
			   }
			   if (!longEndDataLst.isEmpty()) {
		            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(longEndDataLst, "referDate");

		            System.out.println("Minimum Date: " + minMaxDates[0]);
		            System.out.println("Maximum Date: " + minMaxDates[1]);

		             longEndsService.doCalculationLoader(minMaxDates[0],minMaxDates[1],readExcelWriteDBDTO.getGroupId());
		        } else {
		            System.out.println("List is empty.");
		        } 
		}else if(cryptosGroupIds.contains(readExcelWriteDBDTO.getGroupId().trim()))
		{
			   List<CryptosData> cryptosDataLst = new ArrayList<>();
			   List<String> subgroups = Arrays.asList("1", "2","3","4","5","6","7","8");
			   int[] subgroupOrder = {1,3,4,2,5,6,7,8};
			   int i = 0; 
			   for (String subGroupId: subgroups) {
						   rowData.clear();
						   cryptosDataLst.clear();
						   rowData = ReadExcelWriteDBUtil.readExcelFileWithString(readExcelWriteDBDTO.getFile(),"0",subGroupId);
						   for (DataDTO data: rowData) {
							 if(cryptosService.CheckIfCanSaveCryptos(data.getDate(),Long.valueOf(readExcelWriteDBDTO.getGroupId()),Long.valueOf(subgroupOrder[i])))
							 	throw new BadRequestException(data.getDate()+" "+MessageEnum.DATE_EXISTS.message, FailureEnum.EXCEL_DATA_INSERT_FAILED, MessageEnum.DATE_EXISTS.service);	   
							 CryptosData cryptosData = CryptosData.builder().referDate(data.getDate())
							   												  .subgroupId(Long.valueOf(subgroupOrder[i]))
							   												  .groupId(Long.valueOf(readExcelWriteDBDTO.getGroupId()))
							   												  .value(data.getValue()==null?"":data.getValue())
						   												  .build();
							   
							 cryptosDataLst.add(cryptosData);
				      }
						   cryptosService.saveCryptos(cryptosDataLst);
					 i++;  
			
			   }
			   if (!cryptosDataLst.isEmpty()) {
		            String[] minMaxDates = ReadExcelWriteDBUtil.findMinMaxDatesAsString(cryptosDataLst, "referDate");

		            System.out.println("Minimum Date: " + minMaxDates[0]);
		            System.out.println("Maximum Date: " + minMaxDates[1]);

		            cryptosService.doCalculationLoader(minMaxDates[0],minMaxDates[1],readExcelWriteDBDTO.getGroupId());
		        } else {
		            System.out.println("List is empty.");
		        } 
		}
		
}
	
}
