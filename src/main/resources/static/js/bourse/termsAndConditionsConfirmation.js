


	$("#approved").change(function() {
	    if(this.checked) 
	         $('#continue').removeAttr('disabled');
	    else
			$('#continue').attr('disabled', 'disabled');
	});
	$('#continue').click(function () {
		const dataParam ={userName:username};
				$.ajax({
				type: "POST",
				contentType: "application/json",
				url: "/api/auth/termsandconditionsaccepted",
				data: JSON.stringify(dataParam),
				dataType: 'json',
				async: true,
				cache: false,
				timeout: 600000,
				success: function(data) {
					window.location.href = '/';
				},
				error: function(e) {
					$("#ErrorMessage").show().html(e.responseJSON.message);
					console.log("ERROR : ", e);

				}
			});
		
		 });