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
				 
				//  $("#FamilyDropDown").jqxDropDownList('removeAt', 2 ); 
				 
			  });
		 	$("#FamilyDropDown").on('select', function (event) {
	            if (event.args) {
	               familyItem = event.args.item;
	              // groupsource.url='/admin/getgroupsbyfamily/'+familyItem.value;
	             
	              $.get('/admin/getgroupsbyfamily/'+familyItem.value,  // url
	            	      function (data, textStatus, jqXHR) {  // success callback
	            	     
	            	      (familyItem.value===6)?
	            	      data=[{assetId: "6",description: "Long Skews",id: 25},
	            	            {assetId: "6",description: "Short Skews",id: 30}]:data;
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
						  $("#groupDropDown").jqxDropDownList('removeAt', 6 ); 
						  $("#groupDropDown").jqxDropDownList('removeAt', 4 ); 
						  $("#groupDropDown").jqxDropDownList('removeAt', 3 ); 
						  $("#groupDropDown").jqxDropDownList('removeAt', 2 ); 
						  $("#groupDropDown").jqxDropDownList('removeAt', 1 ); 
						  $("#groupDropDown").jqxDropDownList('removeAt', 0 ); 
					  } else if($("#FamilyDropDown").val()=='3')
				      { 
						  $("#groupDropDown").jqxDropDownList('removeAt', 0 ); 
					  }else if($("#FamilyDropDown").val()=='5')
				      { 
						  $("#groupDropDown").jqxDropDownList('removeAt', 2 ); 
					  }else if($("#FamilyDropDown").val()=='10')
				      { 
						    $("#groupDropDown").jqxDropDownList('removeAt', 17 );
						    $("#groupDropDown").jqxDropDownList('removeAt', 16 );
						    $("#groupDropDown").jqxDropDownList('removeAt', 15 );
						    $("#groupDropDown").jqxDropDownList('removeAt', 14 ); 
						    $("#groupDropDown").jqxDropDownList('removeAt', 13 ); 
						    $("#groupDropDown").jqxDropDownList('removeAt', 12 ); 
						    $("#groupDropDown").jqxDropDownList('removeAt', 11 ); 
						    $("#groupDropDown").jqxDropDownList('removeAt', 10 ); 
						    $("#groupDropDown").jqxDropDownList('removeAt', 9); 
				            $("#groupDropDown").jqxDropDownList('removeAt', 8); 
				            $("#groupDropDown").jqxDropDownList('removeAt', 7); 
				            $("#groupDropDown").jqxDropDownList('removeAt', 6); 
				            $("#groupDropDown").jqxDropDownList('removeAt', 5); 
				            $("#groupDropDown").jqxDropDownList('removeAt', 4); 
				            $("#groupDropDown").jqxDropDownList('removeAt', 3); 
				            $("#groupDropDown").jqxDropDownList('removeAt', 2); 
				            $("#groupDropDown").jqxDropDownList('removeAt', 1);
				
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
  			  
  			  if (typeof file != 'undefined')
					  $.ajax({
					    url: "/db/read",
					    type: "POST",
					    data: formData,
					    processData: false,
					    contentType: false,
					    async :false,
					    success: function(response) {
						    $("input[type='file']").val('');
							$("span.inf__hint").html(' or drag and drop files here');
							
							$("#result").css("color","black");
							$("#result").css("background","#00e7b8");
							$("#result").css("margin-top","1rem");
							$("#result").append("File uploaded successfully!");
							setTimeout(function() {
								    $("#result").empty();
								}, 3000);
					    },
					    error: function(error) {
						     $("input[type='file']").val('');
							 $("span.inf__hint").html('or drag and drop files here');
							  
					     	$("#result").css("color","black");
							$("#result").css("background","red");
							$("#result").css("margin-top","1rem");
							$("#result").append(error.responseJSON.message);
							setTimeout(function() {
								    $("#result").empty();
								}, 3000);
					    }
					  });
					  else {
						  $("#result").css("color","black");
							$("#result").css("background","red");
							$("#result").css("margin-top","1rem");
							$("#result").append("Please upload a file");
							
					  }
			});
	        
   });
   
   $(window).on('load', function(){
	  $('#overlay').fadeOut();
	  $('#nav-column-master').show();
  });
  
  function getImagePath(groupId)
  {
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
	  case 8:
		  imagePath='/css/images/format/foodstuff_format.png'
		    break;
	  case 9:
		  imagePath='/css/images/format/energy_format.jpg'
		    break;
	  case 10:
		   imagePath='/css/images/format/transportation_format.png'
		    break;
	 case 11:
		   imagePath='/css/images/format/corporates_format.png'
		    break;
	 case 14:
		   imagePath='/css/images/format/ecb_excess_format.png'
		    break;    
     case 15:
		   imagePath='/css/images/format/ecb_qe_format.png'
		    break;
    case 16:
   		 imagePath='/css/images/format/ezmm_format.png'
		    break;
    case 17:
	case 18:
	case 19:
	case 20:
   		 imagePath='/css/images/format/options_volume_format.png'
		    break;
	case 21:
   		 imagePath='/css/images/format/euribor_volume_format.png'
		    break;
    case 22:
   		 imagePath='/css/images/format/cds_format.png'
		    break;
	case 23:
   		 imagePath='/css/images/format/fx_format.png'
		    break;
    case 25:
   		 imagePath='/css/images/format/longSkews_format.jpg'
		    break;
	case 30:
   		 imagePath='/css/images/format/shortSkews_format.jpg'
		    break;
	case 32:
   		 imagePath='/css/images/format/asia_format.png'
		    break;
	case 33:
   		 imagePath='/css/images/format/wallstreet_format.png'
		    break;
	case 34:
   		 imagePath='/css/images/format/europe_format.png'
   		  break;
   	case 35:
   		 imagePath='/css/images/format/emerging_format.png'
		    break;
	case 36:
   		 imagePath='/css/images/format/cryptos_format.png'	 
		    break;
	case 37:
	case 38:
	case 39:
	case 40:
	case 41:
	case 42:
	case 43:
	case 44:
    case 45:
	case 46:
	case 47:
   		 imagePath='/css/images/format/macro_format.png'
		    break;	 
   case 48:
	   imagePath='/css/images/format/rts_centralBanks_format.png' 
	     break;	  
	case 49:
	   imagePath='/css/images/format/rts_inflationSwapRates_format.png' 
	     break;  
	case 50:
	   imagePath='/css/images/format/rts_mortgageRates_format.png' 
	     break;   
	case 51:
	   imagePath='/css/images/format/rts_fixings_format.png' 
	     break; 
	case 52:
	   imagePath='/css/images/format/longEnds_format.jpg' 
	     break;     
	}
return imagePath;
  }