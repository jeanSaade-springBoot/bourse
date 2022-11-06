package com.bourse.authsecurity.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class RolePrivilegeDTO {
	 private Long roleId;
	 private List<Long> privilegeId;
}
