package com.bourse.authsecurity.controllers;

import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class RedirectController {

	@RequestMapping(value="/default")
	public ModelAndView defaultPage(ModelMap model) {
		return new ModelAndView("html/default");
	}
	
	@RequestMapping(value="/login")
	public ModelAndView loginPage(ModelMap model) {
		return new ModelAndView("html/login");
	}
	
	@RequestMapping(value="/register")
	public ModelAndView registerPage(ModelMap model) {
		return new ModelAndView("html/signup");
	}
	
	@RequestMapping(value="/confirmation")
	public ModelAndView confirmation(ModelMap model) {
		return new ModelAndView("html/confirmation");
	}
	
	@RequestMapping(value="/invalidSession")
	public ModelAndView invalidSession(ModelMap model) {
		return new ModelAndView("html/invalidSession");
	}
	
}