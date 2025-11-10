package com.bourse.config;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.bourse.service.GlobalService;
@Configuration
@EnableScheduling
public class GlobalConfig implements WebMvcConfigurer {

    @Autowired
    private GlobalService globalService;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new HandlerInterceptor() {
            @Override
            public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
                    throws Exception {
                long Config = globalService.getConfigMillis();
                if (Config > 0) {
                    Thread.sleep(Config);
                }
                return true;
            }
        }).addPathPatterns("/**");
    }
}