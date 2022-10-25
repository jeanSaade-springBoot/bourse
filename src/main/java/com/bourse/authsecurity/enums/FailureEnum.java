package com.bourse.authsecurity.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum FailureEnum {
	SAVE_REQUESTED_USER_FAILED(1),
	MEMBERSHIP_VALIDATION_FAILED(2),
	UNAUTHORIZED_ERROR(3),
	MEMBERSHIP_NOT_SET_FAILED(4),
	DISABLED_USER_ACCOUNT(5),
	DECLINED_USER_ACCOUNT(6);
    private final int code;

}