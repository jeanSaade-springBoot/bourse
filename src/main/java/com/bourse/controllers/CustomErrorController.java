package com.bourse.controllers;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.bourse.service.DynamicTemplateService;

@Controller
public class CustomErrorController implements ErrorController {

	@Autowired
	private final DynamicTemplateService dynamicTemplateService;

	public CustomErrorController(DynamicTemplateService dynamicTemplateService) {
		this.dynamicTemplateService = dynamicTemplateService;
	}

	private static final String PATH = "/error";

	@RequestMapping(value = PATH)
	public ModelAndView error(HttpServletRequest request, Authentication authentication) {
		ModelAndView modelAndView = new ModelAndView();
		Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
		System.out.println("Error occurred: " + status);

		modelAndView.addObject("mainmenu", "html/templates/mainMenu");
		modelAndView.addObject("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
		modelAndView.setViewName("html/errorpage"); // Set the view name for the custom error page

		return modelAndView;
	}
}
