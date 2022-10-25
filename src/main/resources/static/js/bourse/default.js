
  $(document).ready(function () {
	  $("#clientLogin").jqxButton({  theme:'dark', width: 130, height: 30,template: "primary" });
	  $("#clientLogin").css("display","block");
  });
 
  $("#clientLogin").click(function () {
	  window.location.href='/login';
  });

