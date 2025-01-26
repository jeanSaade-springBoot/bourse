package com.bourse.controllers;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
    public ModelAndView error(HttpServletRequest request) {
        ModelAndView modelAndView = new ModelAndView();
        
        // Retrieve the error status code
        Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
        System.out.println("Error occurred: " + status);
        
        // Attempt to get the Authentication object from SecurityContext
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        
        // If authentication is null, handle accordingly (e.g., redirect or default action)
        if (authentication == null || !authentication.isAuthenticated()) {
            // Handle case where user is not authenticated
            modelAndView.addObject("mainmenu", "html/templates/mainMenu");
            modelAndView.addObject("menuId", "defaultMenuId"); // Or some default value if the user is not authenticated
            modelAndView.setViewName("html/errorpage"); // Set the error page for unauthenticated users
        } else {
            // Proceed if the user is authenticated
            modelAndView.addObject("mainmenu", "html/templates/mainMenu");
            modelAndView.addObject("menuId", dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN"));
            modelAndView.setViewName("html/errorpage"); // Set the error page for authenticated users
        }

        return modelAndView;
    }
}
