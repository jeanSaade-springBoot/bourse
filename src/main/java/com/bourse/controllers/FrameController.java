package com.bourse.controllers;

import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping(value = "frame")
public class FrameController {
	
	
	@RequestMapping( value =  "/framestest")
    public ModelAndView framestest(ModelMap model)
    {
		return new ModelAndView("html/MainBourse");
    }
	
	@RequestMapping( value =  "/frame1")
    public ModelAndView frame1(ModelMap model)
    {
		return new ModelAndView("html/frame_1");
    }
	@RequestMapping( value =  "/frame2")
    public ModelAndView frame2(ModelMap model)
    {
		return new ModelAndView("html/frame_2");
    }
	@RequestMapping( value =  "/frame3")
    public ModelAndView frame3(ModelMap model)
    {
		return new ModelAndView("html/frame_3");
    }
	@RequestMapping( value =  "/frame4")
    public ModelAndView frame4(ModelMap model)
    {
		return new ModelAndView("html/frame_4");
    }


}
