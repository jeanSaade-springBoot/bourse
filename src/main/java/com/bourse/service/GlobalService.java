package com.bourse.service;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;


@Service
public class GlobalService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private volatile long configMillis = 0;

    @PostConstruct
    public void loadConfig() {
        refreshConfig();
    }

    @Scheduled(fixedDelay = 60000) 
    public void refreshConfig() {
        try {
            Long value = jdbcTemplate.queryForObject(
                "SELECT value FROM app_settings WHERE `key` = 'config'", Long.class);
            if (value != null) {
                configMillis = value;
            }
        } catch (Exception e) {
            // Optional: Log a warning but don’t crash the app
            System.err.println("Could not load config from DB: " + e.getMessage());
        }
    }
    public void updateConfigValue(long newValue) {
        try {
            jdbcTemplate.update("UPDATE app_settings SET value = ? WHERE `key` = 'config'", newValue);
            configMillis = newValue; // Update the in-memory value
        } catch (Exception e) {
            // Optional: Log a warning but don’t crash the app
            System.err.println("Could not update config in DB: " + e.getMessage());
        }
    }
    public long getConfigMillis() {
        return configMillis;
    }
}