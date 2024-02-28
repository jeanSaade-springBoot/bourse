package com.bourse.service;

import org.springframework.stereotype.Service;

import com.bourse.authsecurity.repositories.PrivilegeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
@Service
public class DynamicTemplateService {
	@Autowired
	PrivilegeRepository privilegeRepository;
	
	public Long getAuthorityId(Authentication authentication, String authorityName) {
	    for (GrantedAuthority authority : authentication.getAuthorities()) {
	        if (authority.getAuthority().equals(authorityName)) {
	            return privilegeRepository.findPrivilegeByName( authority.getAuthority()).getId();// Return the authority name as ID
	        }
	    }
	    return Long.valueOf(1); // Return null if the authority is not found
	}
	 public String getDynamicTemplateBySerie(String serie)
	   	{
	   		String fragmentName = null;  
			        if ("1".equals(serie)) {
			            fragmentName = "html/templates/yields";
			        } else if ("2".equals(serie)) {
			            fragmentName = "html/templates/commodities";
			        } else if ("3".equals(serie)) {
			            fragmentName = "html/templates/liquidity";
			        } else if ("4".equals(serie)) {
			            fragmentName = "html/templates/volume";
			        } else if ("5".equals(serie)) {
			            fragmentName = "html/templates/fxcds";
			        } else if ("6".equals(serie)) {
			            fragmentName = "html/templates/skews";
			        } else if ("7".equals(serie)) {
			            fragmentName = "html/templates/sti";
			        } 
			return fragmentName;
	   	}
	    
}
