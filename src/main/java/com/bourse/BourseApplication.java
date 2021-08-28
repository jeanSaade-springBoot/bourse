package com.bourse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class BourseApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(BourseApplication.class, args);
	} 
	 @Override
	    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	        return application.sources(BourseApplication.class);
	    }

}
