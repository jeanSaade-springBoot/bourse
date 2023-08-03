package com.bourse.config;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Configuration
@Component
public class MyConfig {
    @Value("${liveFlow.apiLiveFlowUrl}")
    private String apiLiveFlowUrl;

    public String getApiLiveFlowUrl() {
        return apiLiveFlowUrl;
    }
}
