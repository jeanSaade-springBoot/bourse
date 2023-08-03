package com.bourse.util;

import java.security.cert.X509Certificate;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import org.springframework.http.ResponseEntity;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class LiveFlowOptionUtils {
  public static String getTemplate(String url) 
  {
		String mainServiceUrl =null;
	  	ResponseEntity<String> response =null;
	      // Create a TrustManager that trusts all certificates
	      TrustManager[] trustAllCerts = new TrustManager[]{new X509TrustManager() {
	          public X509Certificate[] getAcceptedIssuers() {
	              return null;
	          }
	
	          public void checkClientTrusted(X509Certificate[] certs, String authType) {
	          }
	
	          public void checkServerTrusted(X509Certificate[] certs, String authType) {
	          }
	      }};
	
	      try {
	          // Create an SSLContext and configure it to use the TrustManager that trusts all certificates
	          SSLContext sslContext = SSLContext.getInstance("TLS");
	          sslContext.init(null, trustAllCerts, new java.security.SecureRandom());
	
	          // Create a HostnameVerifier that verifies all hostnames
	          HostnameVerifier hostnameVerifier = (hostname, session) -> true;
	
	          // Configure the SSLContext and HostnameVerifier for the RestTemplate
	          HttpsURLConnection.setDefaultSSLSocketFactory(sslContext.getSocketFactory());
	          HttpsURLConnection.setDefaultHostnameVerifier(hostnameVerifier);
	
	          // Create a custom RestTemplate using SimpleClientHttpRequestFactory
	          SimpleClientHttpRequestFactory requestFactory = new SimpleClientHttpRequestFactory();
	          RestTemplate restTemplate = new RestTemplate(requestFactory);
	
	          
	           mainServiceUrl = url;
		         response = restTemplate.getForEntity(mainServiceUrl, String.class);
	
	      } catch (Exception e) {
	          e.printStackTrace();
	      }
	
	      if (response.getStatusCode().is2xxSuccessful()) {
	          return response.getBody();
	      } else {
	          // Handle error cases
	          return null;
	      }
  }


}
