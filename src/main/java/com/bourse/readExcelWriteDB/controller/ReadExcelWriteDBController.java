package com.bourse.readExcelWriteDB.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.dto.ResponseJSON;
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
	public ResponseEntity<ResponseJSON> readExcel(@ModelAttribute ReadExcelWriteDBDTO readExcelWriteDBDTO) {
		try {
			readExcelWriteDBService.readExcelFile(readExcelWriteDBDTO);
			return ResponseEntity.ok(new ResponseJSON("File processed successfully"));
		} catch (Exception ex) {
			return new ResponseEntity<>(new ResponseJSON(ex.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<ResponseJSON> handleException(Exception ex) {
		return new ResponseEntity<>(new ResponseJSON(ex.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
