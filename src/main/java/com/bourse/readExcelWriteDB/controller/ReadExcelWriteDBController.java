package com.bourse.readExcelWriteDB.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.bourse.readExcelWriteDB.dto.ReadExcelWriteDBDTO;
import com.bourse.readExcelWriteDB.service.ReadExcelWriteDBService;

@RestController
@RequestMapping(value = "db")
public class ReadExcelWriteDBController {
	
	@Autowired
	private final ReadExcelWriteDBService readExcelWriteDBService;
	
	public ReadExcelWriteDBController(ReadExcelWriteDBService readExcelWriteDBService)
	{
	this.readExcelWriteDBService   = readExcelWriteDBService;
	}
	@PostMapping("/read")
	    public void readExcel(@ModelAttribute ReadExcelWriteDBDTO readExcelWriteDBDTO) throws Exception {
		readExcelWriteDBService.readExcelFile(readExcelWriteDBDTO);
	}
	
}
