package com.bourse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableAsync
@EnableScheduling
public class BourseApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(BourseApplication.class, args);
	} 
	 @Override
	    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	        return application.sources(BourseApplication.class);
	    }

	@Bean
	public RestTemplate restTemplate() {
	    return new RestTemplate();
	}
	/* @Bean
	  public ThreadPoolTaskExecutor taskExecutor() {
	    ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
	    executor.setCorePoolSize(100);
	    executor.setMaxPoolSize(100);
	    executor.setQueueCapacity(500);
	    executor.setThreadNamePrefix("BourseProc-");
	    executor.initialize();
	    return executor;
	  }*/
}
