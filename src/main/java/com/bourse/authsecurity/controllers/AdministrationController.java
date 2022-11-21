package com.bourse.authsecurity.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bourse.authsecurity.domain.MembershipDuration;
import com.bourse.authsecurity.domain.Role;
import com.bourse.authsecurity.domain.User;
import com.bourse.authsecurity.domain.UsersMembershipView;
import com.bourse.authsecurity.domain.UsersRolesView;
import com.bourse.authsecurity.dto.CreateRoleDTO;
import com.bourse.authsecurity.dto.PrivilegesRoleDTO;
import com.bourse.authsecurity.dto.RolePrivilegeDTO;
import com.bourse.authsecurity.dto.UserRoleDTO;
import com.bourse.authsecurity.dto.UserStatusMembershipDTO;
import com.bourse.authsecurity.service.MembershipDurationService;
import com.bourse.authsecurity.service.PrivilegeService;
import com.bourse.authsecurity.service.RoleService;
import com.bourse.authsecurity.service.UserRoleService;
import com.bourse.authsecurity.service.RolePrivilegeService;
import com.bourse.authsecurity.service.UserService;
import com.bourse.authsecurity.service.UsersMembershipViewService;
import com.bourse.authsecurity.service.UsersRolesViewService;

@RestController
public class AdministrationController {

	@Autowired 
	private final UserService userService;
	@Autowired
	private final UsersMembershipViewService usersMembershipViewService;
	@Autowired 
	private final MembershipDurationService membershipDurationService;
	@Autowired 
	private final PrivilegeService privilegeService;
	@Autowired
	private final RoleService roleService;
	@Autowired
	private final RolePrivilegeService rolePrivilegeService;
	@Autowired
	private final UsersRolesViewService usersRolesViewService;
	@Autowired
	private final UserRoleService userRoleService;
	public AdministrationController (UserService userService,
						   UsersMembershipViewService usersMembershipViewService,
						   MembershipDurationService membershipDurationService,
						   PrivilegeService privilegeService,
						   RoleService roleService,
						   RolePrivilegeService rolePrivilegeService,
						   UsersRolesViewService usersRolesViewService,
						   UserRoleService userRoleService)
	{
		this.userService = userService;
		this.usersMembershipViewService = usersMembershipViewService;
		this.membershipDurationService = membershipDurationService;
		this.privilegeService = privilegeService;
		this.roleService = roleService;
		this.rolePrivilegeService = rolePrivilegeService;
		this.usersRolesViewService=usersRolesViewService;
		this.userRoleService=userRoleService;
	}
	
	@GetMapping(value = "getuserbystatus/{status}")
	public ResponseEntity<List<UsersMembershipView>>  getUserByStatus(@PathVariable("status") String status) {
		return new ResponseEntity<>( usersMembershipViewService.getUsersMembershipByStatus(status), HttpStatus.OK);
	}
	@PostMapping(value = "updateuserstatusandmembership")
	public ResponseEntity<UsersMembershipView> updateUserStatusAndMember(@RequestBody UserStatusMembershipDTO userStatusMembershipDTO) {
		return new ResponseEntity<>(userService.updateUserStatusAndMember(userStatusMembershipDTO), HttpStatus.OK);
	}
	@GetMapping(value = "getmembershipduration")
	public ResponseEntity<List<MembershipDuration>> getMembershipDuration() {
		return new ResponseEntity<>( membershipDurationService.findAll(), HttpStatus.OK);
	}
	@GetMapping(value = "getprivilegebyrole/{roleId}")
	public ResponseEntity<List<PrivilegesRoleDTO>> getMembershipDuration(@PathVariable("roleId") Long roleId) {
		return new ResponseEntity<>( privilegeService.findPrivilegeByRoleId(roleId), HttpStatus.OK);
	}
	@GetMapping(value = "getroles")
	public ResponseEntity<List<Role>> getRoles() {
		return new ResponseEntity<>( roleService.getRoles(), HttpStatus.OK);
	}
	@PostMapping(value = "updateroleprivilege")
	public ResponseEntity<Role> updateRolePrivilege(@RequestBody RolePrivilegeDTO rolePrivilegeDTO) {
		return new ResponseEntity<>(rolePrivilegeService.updateRolePrivilege(rolePrivilegeDTO), HttpStatus.OK);
	}
	@PostMapping(value = "createrole")
	public ResponseEntity<Role> updateRolePrivilege(@RequestBody CreateRoleDTO createRoleDTO) {
		return new ResponseEntity<>(roleService.createRole(createRoleDTO), HttpStatus.OK);
	}
	@GetMapping(value = "getusersroles")
	public ResponseEntity<List<UsersRolesView>> getUsersRoles() {
		return new ResponseEntity<>( usersRolesViewService.getUsersRoles(), HttpStatus.OK);
	}
	@PostMapping(value = "updateuserrole")
	public ResponseEntity<User> updateUserRole(@RequestBody UserRoleDTO userRoleDTO) {
		return new ResponseEntity<>(userRoleService.updateUserRole(userRoleDTO), HttpStatus.OK);
	}
}
