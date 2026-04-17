package com.bourse.authsecurity.security.jwt;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import com.bourse.authsecurity.enums.FailureEnum;
import com.bourse.authsecurity.exception.BadRequestException;
@Component
public class AuthEntryPointJwt implements AuthenticationEntryPoint {

    private static final Logger logger = LoggerFactory.getLogger(AuthEntryPointJwt.class);

    @Override
    public void commence(HttpServletRequest request,
                         HttpServletResponse response,
                         AuthenticationException authException)
            throws IOException, ServletException {

        logger.error("Unauthorized error: {}", authException.getMessage(), authException);

        String ajaxHeader = request.getHeader("X-Requested-With");
        boolean isAjax = "XMLHttpRequest".equals(ajaxHeader);

        if (isAjax) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");

            String message = "Unauthorized";
            if ("Bad credentials".equalsIgnoreCase(authException.getMessage())) {
                message = "Bad credentials";
            }

            response.getWriter().write("{\"message\":\"" + message + "\"}");
            response.getWriter().flush();
        } else {
            response.sendRedirect("/login");
        }
    }
}
/*
 * @Component public class AuthEntryPointJwt implements AuthenticationEntryPoint
 * { private static final Logger logger =
 * LoggerFactory.getLogger(AuthEntryPointJwt.class);
 * 
 * @Override public void commence(HttpServletRequest request,
 * HttpServletResponse response, AuthenticationException authException) throws
 * IOException, ServletException { logger.error("Unauthorized error: {}",
 * authException.getMessage());
 * //response.sendError(HttpServletResponse.SC_UNAUTHORIZED,
 * "Error: Unauthorized"); if
 * (authException.getMessage().equalsIgnoreCase("Bad credentials")) throw new
 * BadRequestException(authException.getMessage(),
 * FailureEnum.UNAUTHORIZED_ERROR, "AuthEntryPointJwt"); else
 * response.sendRedirect("/login");
 * 
 * 
 * } }
 */