
  $(document).ready(function () {
	  $('#content-data').show();
	  $("#firstLastName").append(getFirstLastName())
	  $("#viewall").jqxButton({  theme:'dark', width: 110, height: 35,template: "primary" });
	  $("#viewall").css("display","block");

	  initiateHistoricalFlow();
	 
  });

