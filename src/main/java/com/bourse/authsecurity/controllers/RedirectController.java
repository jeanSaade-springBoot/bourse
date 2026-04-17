package com.bourse.authsecurity.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.bourse.authsecurity.dto.CustomuserdetailsDTO;
import com.bourse.service.DynamicTemplateService;

@RestController
public class RedirectController {
	@Autowired
	private final DynamicTemplateService dynamicTemplateService;
	
	public RedirectController(
			DynamicTemplateService dynamicTemplateService)
	{
		this.dynamicTemplateService   = dynamicTemplateService;
	}
	/*
	 * @RequestMapping(value="/") public ModelAndView defaultPage(ModelMap model) {
	 * return new ModelAndView("html/default"); }
	 */
	private boolean isLoggedIn(Authentication authentication) {
	    return authentication != null
	        && authentication.isAuthenticated()
	        && !(authentication instanceof AnonymousAuthenticationToken);
	}
	@RequestMapping(value="/")
	public ModelAndView defaultPage(ModelMap model, Authentication authentication) {

	    model.addAttribute("mainmenu", "html/templates/mainMenu");

	    if (isLoggedIn(authentication)) {

	        CustomuserdetailsDTO user = (CustomuserdetailsDTO) authentication.getPrincipal();

	        // 🔴 Check TAC
	        if (!Boolean.TRUE.equals(user.getTacAccepted())) {
	            return new ModelAndView("redirect:/termsandconditionsconfirmation");
	        }

	        // ✅ Normal flow
	        model.addAttribute("menuId",
	            dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));

	    } else {
	        model.addAttribute("menuId", null);
	    }

	    return new ModelAndView("html/index");
	}
	@RequestMapping("/login")
	public ModelAndView loginPage(ModelMap model, Authentication authentication) {
	    if (isLoggedIn(authentication)) {
	        return new ModelAndView("redirect:/");
	    }
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    return new ModelAndView("html/login");
	}

	@RequestMapping("/register")
	public ModelAndView registerPage(ModelMap model, Authentication authentication) {
	    if (isLoggedIn(authentication)) {
	        return new ModelAndView("redirect:/");
	    }
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    return new ModelAndView("html/signup");
	}

	@RequestMapping("/forgotpassword")
	public ModelAndView forgotPasswordPage(ModelMap model, Authentication authentication) {
	    if (isLoggedIn(authentication)) {
	        return new ModelAndView("redirect:/");
	    }
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    return new ModelAndView("html/forgotPassword");
	}

	@RequestMapping("/confirmation")
	public ModelAndView confirmation(ModelMap model) {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    return new ModelAndView("html/confirmation");
	}

	@RequestMapping("/invalidSession")
	public ModelAndView invalidSession(ModelMap model, Authentication authentication) {
		   if (isLoggedIn(authentication)) {
		        return new ModelAndView("redirect:/");
		    }
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    return new ModelAndView("html/invalidSession");
	}

	@RequestMapping("/termsandconditionsconfirmation")
	public ModelAndView termsAndConditionsConfirmation(ModelMap model) {
	    model.addAttribute("mainmenu", "html/templates/mainMenu");
	    return new ModelAndView("html/termsAndConditionsConfirmation");
	}
}
