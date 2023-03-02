var groupItem;


$(document).ready(function () {
	
	  $('#container-wrapper').show();
	  $('#content').show();
 	  $("#viewall").jqxButton({  theme:'dark', width: 110, height: 35,template: "primary" });
	  $("#viewall").css("display","block");
	  $("#viewall").click(function () {
			popupWindow('/bourse/allnews', 'Libvol - View All News', window, 1300, 600);
		  });
	  new InputFile({
			// options
		});
		
	  $("#submit").jqxButton({  theme:'dark', width: 110, height: 35,template: "primary" });
	  
var familysource =
	      {
	          datatype: "json",
	          datafields: [
	              { name: 'id' },
	              { name: 'description' }
	          ],
	          url: '/admin/getassetclass',
	          async: true
	      };
		  var dataAdapter = new $.jqx.dataAdapter(familysource);
		 	$("#FamilyDropDown").jqxDropDownList({ source: dataAdapter , displayMember: "description", valueMember: "id", theme: 'dark' , width: '100%', height: 30});
		 	$("#FamilyDropDown").on('bindingComplete', function (event) {
				 
				 $("#FamilyDropDown").jqxDropDownList('removeAt', 0 ); 
				 
			  });
		 	$("#FamilyDropDown").on('select', function (event) {
	            if (event.args) {
	               familyItem = event.args.item;
	              // groupsource.url='/admin/getgroupsbyfamily/'+familyItem.value;
	             
	              $.get('/admin/getgroupsbyfamily/'+familyItem.value,  // url
	            	      function (data, textStatus, jqXHR) {  // success callback
	            	      
	            	 if(familyItem.value==1)
	            	  data.push({id: 0, description: 'ALL', assetId: '1', groupCode: ''});
	            	  
	            	  groupsource.localdata=data;
		               var dataAdapter = new $.jqx.dataAdapter(groupsource);
		               $("#groupDropDown").jqxDropDownList({source:dataAdapter, disabled: false }); 
	            	    });
	       		
	            }
	        });
		   groupsource =
		      {
		          datatype: "json",
		          datafields: [
		              { name: 'id' },
		              { name: 'description' }
		          ],
		          url: '',
		          async: true
		      };
			   var dataAdapter = new $.jqx.dataAdapter(groupsource);
			 
			$("#groupDropDown").jqxDropDownList({ source: dataAdapter,disabled: true,  displayMember: "description", valueMember: "id",theme: 'dark' , width: '100%', height: 30});
			$("#groupDropDown").on('select', function (event) {
	              if (event.args) {
	                 groupItem = event.args.item;
	                 $("#excelFormat").empty();
	                 $("#excelFormat").append('<img src="'+getImagePath(groupItem.value)+'" />');
	                 
	              }
	              	
	          });
	          
	        $("#groupDropDown").on('bindingComplete', function (event) {
				 
				  if (event.args) {
	                  groupItem = event.args.item;
				      if($("#FamilyDropDown").val()=='1')
				      {
						  $("#groupDropDown").jqxDropDownList('removeAt', 5 ); 
						  $("#groupDropDown").jqxDropDownList('removeAt', 4 ); 
						  $("#groupDropDown").jqxDropDownList('removeAt', 3 ); 
						  $("#groupDropDown").jqxDropDownList('removeAt', 2 ); 
						  $("#groupDropDown").jqxDropDownList('removeAt', 1 ); 
					  } 
				 }
			  });
			
	       $("#submit").click(function() {
			  $("#result").empty();
			  const file = $("input[type='file']")[0].files[0];
			  const formData = new FormData();
			  formData.append("file", file);
			  const dateIndex = $("#date").val();
  			  formData.append("dateCellIndex", dateIndex);
  			  const valueIndex = $("#value").val();
  			  formData.append("dataValueIndex", valueIndex);
  			  const subGroupId = $("#subGroupDropDown").val();
  			  formData.append("subgroupId", subGroupId);
  			  const groupId = $("#groupDropDown").val();
  			  formData.append("groupId", groupId);
  			  
			  $.ajax({
			    url: "/db/read",
			    type: "POST",
			    data: formData,
			    processData: false,
			    contentType: false,
			    success: function(response) {
				    $("input[type='file']").val('');
					$("span.inf__hint").html('or drag and drop files here');
					
					$("#result").css("color","black");
					$("#result").css("background","#00e7b8");
					$("#result").css("margin-top","1rem");
					$("#result").append("File uploaded successfully!");
					
			    },
			    error: function(error) {
			     	$("#result").css("color","black");
					$("#result").css("background","red");
					$("#result").css("margin-top","1rem");
					$("#result").append(error.responseJSON.message);
			    }
			  });
			});
	        
   });
   
   $(window).on('load', function(){
	  $('#overlay').fadeOut();
	  $('#nav-column-master').show();
  });
  
  function getImagePath(groupId)
  {console.log(groupId)
	 var imagePath='';	
	switch(groupId) {
	  
	 case 1: 
	   imagePath='/css/images/format/'
	        break;
	 case 6: 
	   imagePath='/css/images/format/precious_format.png'
	        break;
	 case 7: 
	   imagePath='/css/images/format/base_format.png'
		    break;
	}
return imagePath;
  }