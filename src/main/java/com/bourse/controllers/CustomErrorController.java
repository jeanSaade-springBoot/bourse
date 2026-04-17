package com.bourse.controllers;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.bourse.service.DynamicTemplateService;

@Controller
public class CustomErrorController implements ErrorController {

    private static final String PATH = "/error";

    @Autowired
    private final DynamicTemplateService dynamicTemplateService;

    public CustomErrorController(DynamicTemplateService dynamicTemplateService) {
        this.dynamicTemplateService = dynamicTemplateService;
    }

    @RequestMapping(PATH)
    public ModelAndView error(HttpServletRequest request) {
        ModelAndView modelAndView = new ModelAndView("html/errorpage");

        Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
        Object uri = request.getAttribute(RequestDispatcher.ERROR_REQUEST_URI);
        Object message = request.getAttribute(RequestDispatcher.ERROR_MESSAGE);
        Object exception = request.getAttribute(RequestDispatcher.ERROR_EXCEPTION);
        Object servletName = request.getAttribute(RequestDispatcher.ERROR_SERVLET_NAME);

        System.out.println("========================================");
        System.out.println("Error occurred: " + status);
        System.out.println("Request URI: " + uri);
        System.out.println("Message: " + message);
        System.out.println("Servlet: " + servletName);
        System.out.println("Exception: " + exception);
        System.out.println("Method: " + request.getMethod());
        System.out.println("QueryString: " + request.getQueryString());
        System.out.println("========================================");

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        boolean loggedIn =
                authentication != null &&
                authentication.isAuthenticated() &&
                !(authentication instanceof AnonymousAuthenticationToken);

        modelAndView.addObject("mainmenu", "html/templates/mainMenu");

        if (loggedIn) {
            modelAndView.addObject(
                "menuId",
                dynamicTemplateService.getAuthorityId(authentication, "HOME_SCREEN")
            );
        } else {
            modelAndView.addObject("menuId", null);
        }

        modelAndView.addObject("errorStatus", status);
        modelAndView.addObject("errorPath", uri);
        modelAndView.addObject("errorMessage", message);

        return modelAndView;
    }
}