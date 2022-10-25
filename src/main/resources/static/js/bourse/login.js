
  $(document).ready(function () {
	  $("#clientLogin").jqxButton({  theme:'dark', width: 130, height: 30,template: "primary" });
	  $("#clientLogin").css("display","block");
  });
 
  $("#clientLogin").click(function () {
	  window.location.href='/login';
  });

$("#signIn").click(function () {
			dataParam = {
				"userName": $('#username').val(),
				"password": $('#password').val()
			};
			$.ajax({
				type: "POST",
				contentType: "application/json",
				url: "/api/auth/signin",
				data: JSON.stringify(dataParam),
				dataType: 'json',
				async: true,
				cache: false,
				timeout: 600000,
				success: function(data) {

				var settings = {
						"url": "/bourse/home",
						"method": "POST",
						"timeout": 0,
						"headers": {
							"Authorization": "Bearer " + data.jwt
						},
					};

					$.ajax(settings).done(function(response) {
						window.location.href = '/bourse/home'
						console.log(response);
					});

					setJwt(data.jwt);
					setFirstLastName(data.firstName, data.lastName, data.username);
					/*if (data.firstLogin)
					{
							
					var settings = {
						"url": "/bourse/home",
						"method": "POST",
						"timeout": 0,
						"headers": {
							"Authorization": "Bearer " + data.jwt
						},
					};

					$.ajax(settings).done(function(response) {
						window.location.href = '/retail/welcome'
						console.log(response);
					});
					}
					else {
					
					var settings = {
						"url": "/retail/supplier",
						"method": "POST",
						"timeout": 0,
						"headers": {
							"Authorization": "Bearer " + data.jwt
						},
					};

					$.ajax(settings).done(function(response) {
						window.location.href = '/retail/supplier'
						console.log(response);
					});
					
					}*/
				},
				error: function(e) {
						$("#ErrorMessage").show().html(e.responseJSON.message);
					
					console.log("ERROR : ", e);

				}
			});
});
