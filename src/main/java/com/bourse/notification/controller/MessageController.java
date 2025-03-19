package com.bourse.notification.controller;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

import com.bourse.authsecurity.service.UsersMembershipViewService;
import com.bourse.dto.cryptos.CrCryptoDTO;
import com.bourse.dto.cryptos.OrderBookDataDTO;
import com.bourse.notification.dto.MessageDTO;
import com.bourse.service.cryptos.CryptosService;
import com.bourse.dto.GraphResponseColConfigDTO;

@Controller
public class MessageController {

    @Autowired 
    UsersMembershipViewService usersMembershipViewService;
    
    @Autowired
    CryptosService cryptosService;
    
    @Autowired
    private SimpMessagingTemplate messagingTemplate;
    
    // Java 8 compatible way to initialize immutable maps
    private static final Map<String, String> CURRENCY_API_MAP;
    private static final Map<String, String> CURRENCY_MAP;

    static {
        // Populate CURRENCY_API_MAP
        Map<String, String> apiMap = new HashMap<>();
        apiMap.put("BTC", "/api/btc/latest");
        apiMap.put("ETH", "/api/eth/latest");
        apiMap.put("SOL", "/api/sol/latest");
        apiMap.put("SHIB", "/api/shib/latest");
        apiMap.put("BNB", "/api/bnb/latest");
        apiMap.put("XRP", "/api/xrp/latest");
        CURRENCY_API_MAP = Collections.unmodifiableMap(apiMap); // Make it immutable

        // Populate CURRENCY_MAP
        Map<String, String> currencyMap = new HashMap<>();
        currencyMap.put("BTC", "71-8");
        currencyMap.put("ETH", "72-8");
        currencyMap.put("SOL", "73-8");
        currencyMap.put("SHIB", "74-8");
        currencyMap.put("BNB", "75-8");
        currencyMap.put("XRP", "76-8");
        CURRENCY_MAP = Collections.unmodifiableMap(currencyMap); // Make it immutable
    }

    @MessageMapping("/application")
    @SendTo("/all/messages")
    public MessageDTO send() throws Exception {
        int count = usersMembershipViewService.getPendingApprovalUsers();
        return MessageDTO.builder().value(String.valueOf(count)).build();
    }

    @Scheduled(cron = "0/30 * * * * ?") // Runs every 30 seconds
    public void updateGraph() {
        try {
            MessageDTO message = MessageDTO.builder().value("update").build();
            messagingTemplate.convertAndSend("/all/chart", message);
            System.out.println("Sent message to /all/chart: " + message.getValue());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Scheduled(cron = "0/30 * * * * ?") // Runs every 30 seconds
    public void updateCryptoData() {
        CURRENCY_API_MAP.forEach((currency, apiEndpoint) -> {
            CrCryptoDTO latestData = cryptosService.fetchLatestCryptoData(apiEndpoint);
            if (latestData != null) {
                System.out.println("Sending " + currency + " data: " + latestData);
                messagingTemplate.convertAndSend("/all/chart/" + currency, latestData);
            } else {
                System.err.println("No data for: " + currency);
            }
        });
    }

    @Scheduled(cron = "0/30 * * * * ?") // Runs every 30 seconds
    public void updateCryptoCandleDailyLiveData() {
        CURRENCY_MAP.forEach((currency, apiEndpoint) -> {
            List<GraphResponseColConfigDTO> latestData = cryptosService.getGraphDataResultForDailyLive(apiEndpoint);
            if (latestData != null) {
                System.out.println("Sending " + currency + " data: " + latestData);
                messagingTemplate.convertAndSend("/all/chart/candle/" + currency, latestData);
            } else {
                System.err.println("No data for: " + currency);
            }
        });
    }
    
    @Scheduled(cron = "0/10 * * * * ?") // Runs every 30 seconds
    public void updateOrderBookData() {
    	 
    		OrderBookDataDTO latestData = cryptosService.fetchLatestOrderBookData("/order-book/get-order-book-data");
             if (latestData != null) {
                 System.out.println("Sending  data: " + latestData);
                 messagingTemplate.convertAndSend("/all/chart/order-book" , latestData);
             } else {
                 System.err.println("No data for: btc order book" );
             }
        
    }
}
