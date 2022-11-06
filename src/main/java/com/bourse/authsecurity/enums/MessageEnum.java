package com.bourse.authsecurity.enums;

public enum MessageEnum {
    USERNAME_EXISTS("This username is already taken, Please try another one. ", "UserService"),
	MEMBERSHIP_EXPIRED("Your subscription has expired, Please contact the administrator to renew you license.","UserService"),
	MEMBERSHIP_NOT_SET("Your account is currently pending approval by the site administrator.","UserService"),
	DISABLED_USER("Your account has been disabled please contact your system administrator.","UserService"),
	DECLINED_USER("Your account has been declined please contact your system administrator.","UserService"),
	ROLENAME_EXISTS("This rolename is already exists, Please try another one. ","RoleService");
    public final String message;
    public final String service;
    
    MessageEnum(String message,String service) {
        this.message = message;
        this.service = service;
    }
    
}