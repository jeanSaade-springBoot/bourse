package com.bourse.authsecurity.controllers;

import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping(value="libvol")
public class RedirectController {

	@RequestMapping(value="/default")
	public ModelAndView defaultPage(ModelMap model) {
		return new ModelAndView("html/default");
	}
	
	@RequestMapping(value="/login")
	public ModelAndView loginPage(ModelMap model) {
		return new ModelAndView("html/login");
	}
}
