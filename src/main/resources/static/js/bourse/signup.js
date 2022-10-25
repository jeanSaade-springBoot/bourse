    var source = [
                    "Mr",
                    "Ms",
                    "Mrs"
		        ];


  $(document).ready(function () {
	  $("#clientLogin").jqxButton({  theme:'dark', width: 130, height: 30,template: "primary" });
	  $("#clientLogin").css("display","block");

      $("#titleDropDown").jqxDropDownList({ source: source, placeHolder: "Select Title", width: '100%', height: 42 , theme:'dark',dropDownHeight:100});

  });
 
  $("#clientLogin").click(function () {
	  window.location.href='/login';
  });

 $("#sameAsEmail").click(function () {
	 $("#username").val($("#email").val());
  });

$("#register").click(function () {
			dataParam = {
				"userName": $('#username').val(),
				"password": $('#password').val(),
				"passwordHint": $('#passwordHint').val(),
				"title": $('#titleDropDown').val(),
				"firstName": $('#firstname').val(),
				"surName": $('#surname').val(),
				"phone": $('#phone').val(),
				"mobile": $('#mobile').val(),
				"company": $('#company').val(),
				"address1": $('#address').val(),
				"address2": $('#address2').val(),
				"postCode": $('#postCode').val(),
				"country": $('#country').val(),
				"email": $('#email').val(),
				"status":"PENDING_APPROVAL"
			};
			
			console.log(dataParam);
			
			checkTitle = validateField('#titleDropDown',"#ErrorTitle","Title is required");
			checkFirstname = validateField('#firstname',"#ErrorFirstName","First Name is required");
			checkSurname = validateField('#surname',"#ErrorSurname","Surname is required");
			checkPhone = validateField('#phone',"#ErrorPhone","Phone is required");
			checkMobile = validateField('#mobile',"#ErrorMobile","Mobile is required");
			checkCompany = validateField('#company',"#ErrorCompany","Company is required");
			checkAddress = validateField('#address',"#ErrorAddress","Address is required");
			checkPostCode = validateField('#postCode',"#ErrorPostCode","Post Code is required");
			checkCountry = validateField('#country',"#ErrorCountry","Country is required");
			checkEmail = validateField('#email',"#ErrorEmail","Email is required");
			checkUsername = validateField('#username',"#ErrorUsername","Username is required");
			checkPassword = validateField('#password',"#ErrorPassword","Password is required");
			checkPasswordHint = validateField('#passwordHint',"#ErrorPasswordHint","Password hint is required");
			checkMatchEmails = checkIfEmailsMatch();
			checkMatchPasswords= checkIfPasswordMatch();
			isValidEmail=CheckIfEmailIsValid();
			if(checkTitle && checkFirstname && checkSurname && checkPhone && checkMobile &&
			   checkCompany && checkAddress && checkPostCode && checkCountry && checkEmail &&
               checkUsername && checkPassword && checkPasswordHint && checkMatchEmails && checkMatchPasswords && isValidEmail)
			$.ajax({
				type: "POST",
				contentType: "application/json",
				url: "/api/auth/register",
				data: JSON.stringify(dataParam),
				dataType: 'json',
				async: true,
				cache: false,
				timeout: 600000,
				success: function() {
				   window.location.href = '/confirmation';
				},
				error: function(e) {
					if (e.status = 500) {
						$("#ErrorUsername").show().html(e.responseJSON.message);
					}
				
					console.log("ERROR : ", e);

				}
			});
});


function validateField(id,errorId,message){
	
			if( $(id).val() == ""){
		        $(errorId).show().html(message);
				return false;
		    }else{
		    	$(errorId).html("").hide();
				return true;
		    }
}
function checkIfEmailsMatch(){
	
			if($("#email").val() != $("#matchEmail").val()){
		        $("#globalErrorMail").show().html("Email does not match!");
				return false;
		    }else{
		    	$("#globalErrorMail").html("").hide();
				return true;
		    }
		
}
function checkIfPasswordMatch(){
	
			if($("#password").val() != $("#matchPassword").val()){
		        $("#globalError").show().html("Password does not match!");
			    return false;
		    }else{
		    	$("#globalError").html("").hide();
 				 return true;
		    }
		}
function CheckIfEmailIsValid()
{
	if(!isEmail($('#email').val())){
		        $("#ErrorEmail").show().html("Invalid Email Format");
			    return false;
		    }else{
		    	$("#ErrorEmail").html("").hide();
 				 return true;
		    }
}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}