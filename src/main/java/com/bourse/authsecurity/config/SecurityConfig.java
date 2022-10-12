package com.bourse.authsecurity.config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.access.hierarchicalroles.RoleHierarchy;
import org.springframework.security.access.hierarchicalroles.RoleHierarchyImpl;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.access.expression.DefaultWebSecurityExpressionHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.bourse.authsecurity.security.jwt.AuthEntryPointJwt;
import com.bourse.authsecurity.security.jwt.AuthTokenFilter;
import com.bourse.authsecurity.service.CustomUserDetailsService;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@EnableJpaAuditing(auditorAwareRef = "aware")
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private AuthEntryPointJwt unauthorizedHandler;
    
    @Bean
    public AuthTokenFilter authenticationJwtTokenFilter() {
      return new AuthTokenFilter();
    }
    
    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	
    	/* http.cors().and().csrf().disable()
    	 .formLogin().disable()
    	 .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
    	 .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
    	 .authorizeRequests().antMatchers("/api/auth/**").permitAll()
    	 .antMatchers("/store/login").permitAll()
    	 .antMatchers("/store/**").hasAuthority("ADMIN")
    	 .antMatchers(
                 "/js/**",
                 "/css/**",
                 "/img/**").permitAll()
	     .anyRequest().authenticated();
	    
    	 */
    	 http.csrf().disable()
    	 .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
    	 .authorizeRequests()
    	 .antMatchers("/api/auth/**",
	    			 "/libvol/login",
	    			 "/libvol/register",
	    			 "/libvol/default",
	    			 "/js/**",
	                 "/css/**",
	                 "/img/**").permitAll()
    	// .antMatchers("/bourse/home").hasAuthority("USER")
    	 //.antMatchers("/bourse/**").hasAuthority("ADMIN")
    	// .anyRequest().hasAuthority("READ_PRIVILEGE")
    	 .and()
    	 .formLogin()
         .loginPage("/libvol/login")               
         .permitAll()
    	 .and().logout()
         .logoutRequestMatcher(new AntPathRequestMatcher("/logout")).logoutSuccessUrl("/libvol/login");
	    // .anyRequest().authenticated();
    	 http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    	

    }

    @Bean
    public RoleHierarchy roleHierarchy() {
        RoleHierarchyImpl roleHierarchy = new RoleHierarchyImpl();
        String hierarchy = "ROLE_ADMIN > ROLE_STAFF \\n ROLE_STAFF > ROLE_USER";
        roleHierarchy.setHierarchy(hierarchy);
        return roleHierarchy;
    }
    @Bean
    public DefaultWebSecurityExpressionHandler webSecurityExpressionHandler() {
        DefaultWebSecurityExpressionHandler expressionHandler = new DefaultWebSecurityExpressionHandler();
        expressionHandler.setRoleHierarchy(roleHierarchy());
        return expressionHandler;
    }
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder());
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
    @Bean
	public AuditorAware<String>aware() {
    	
    	return () -> Optional.ofNullable(SecurityContextHolder.getContext())
    		      .map(SecurityContext::getAuthentication)
    		      .filter(Authentication::isAuthenticated)
    		      .map(Authentication::getName);
    		  
	}
}