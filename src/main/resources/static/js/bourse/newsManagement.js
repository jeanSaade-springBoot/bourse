 var selectedRow=this;
  var groupItem;
  var subgroupsource;
  var familyItem;
  var groupsource;
  var gridsource;
  $(window).on('load', function(){
	  $('#overlay').fadeOut();
  });
  function addText(event) {
	    var targ = event.target || event.srcElement;
	    document.getElementById("TemplateText").value += targ.textContent || targ.innerText;
	}
  $(document).ready(function () {
	   $('#container-wrapper').show();
	    
	  $("#viewall").jqxButton({  theme:'dark', width: 110, height: 35,template: "primary" });
	  $("#viewall").css("display","block");
	  $("#viewall").click(function () {
			popupWindow('/bourse/allnews', 'Liberty Options - View All News', window, 1300, 600);
		  });
	  $("#saveNews").jqxButton({ theme: 'dark',height:30,width:74  });
      $("#cancel").jqxButton({ theme: 'dark',height:30,width:74 });
	  $("#jqxNotification").jqxNotification({  height: 30, width: "100%",appendContainer: "#notifcationContainer",  opacity: 0.9,
           animationOpenDelay: 800, autoClose:true , autoCloseDelay: 1000,  template: 'info'
      });
	  $("#jqxNotificationSave").jqxNotification({  height: 30, width: "100%",appendContainer: "#notifcationContainerSave",  opacity: 0.9,
          animationOpenDelay: 800, autoClose:true , autoCloseDelay: 1000,  template: 'info'
      }); 
	  $("#popupWindow").jqxWindow({
          width: '50%',    height: '38%',  resizable: false,  theme: 'dark' , isModal: true, autoOpen: false, cancelButton: $("#cancel"), modalOpacity: 0.01           
      });
	  
	  $("#IsBold").jqxCheckBox({ theme: 'dark' ,rtl: true, width: 90, height: 25});  
	  
	  $("#addNews").jqxButton({  theme:'dark', width: 120, height: 30 });
	  $("#triggerRobotButton").jqxButton({  theme:'dark', width: 120, height: 30 });
	  $("#publishNewsButton").jqxButton({  theme:'dark', width: 120, height: 30 });
      gridsource =
      {
          datatype: "json",
          datafields: [
        	  { name: 'template', type: 'string' },
        	  { name: 'isBold', type: 'string' },  
        	  { name: 'id', type: 'string' },  
			  { name: 'isFunctionNews', type: 'string' },  
        	  { name: 'robots', type: 'string' },  
        	  { name: 'columnDescription', type: 'string' },  
        	  { name: 'generationDateDate', type: 'date' },  
        	  { name: 'isPublished', type: 'string' },  
        	  
          ],
          async: true,
          url: '/admin/getunpublishednews'
      };
     
      var dataAdapter = new $.jqx.dataAdapter(gridsource, {
          downloadComplete: function (data, status, xhr) { },
          loadComplete: function (data) { },
          loadError: function (xhr, status, error) { }
      });
      var cellclassname = function (row, column, value, data) {
          var isBold = $('#grid').jqxGrid('getcellvalue', row, "isBold");
          if (isBold=="true") {
              return "redColor";
          }
      }
      // initialize jqxGrid
      $("#grid").jqxGrid(
      {
          width: '100%',
          source: dataAdapter,                
          columnsresize: true,
          theme:'dark',
          pageable: true,
          showfilterrow: true,
          filterable: true,
          columnsheight: 30,
          pagesize: 10,
          autoheight: true,
          editable: true,
          selectionmode: 'none',
          editmode: 'selectedrow',
          columns: [
        	 { text: 'Robot' ,editable:false, datafield: 'robots', width: '8%'},
        	 { text: 'Date', datafield: 'generationDateDate', width: '10%', editable:false, cellsformat: 'dd-MMM-yyyy',filtertype: 'date' }, 
        	 { text: 'News', datafield: 'template', width: '67%',   cellclassname: cellclassname,
        	   createfilterwidget: function (column, columnElement, widget) {
        	        widget.jqxInput({ width: '99%', height: 27, placeHolder: "Search" });
        	      }
           },
           { text: '',editable:false, datafield: 'Edit',width:'5%', filterable: false,cellsrenderer: function (row) {
   	    	
    		   var CheckifPublished=  $('#grid').jqxGrid('getcellvalue', row, "isPublished");
          	 if (CheckifPublished==0)
          	 {
          		 return "<input class=\"edit \" type=\"button\" onclick='Edit(" + row + ", event)' id=\"edit"+row+"\" value=\"Edit\" /><div class=\"row\" id=\"actionButtons"+row+"\" style=\"display:none\"><input  onclick='Update(" + row + ", event)' class=\"update\" type=\"button\" id=\"update\" value=\"Save\" /></div>";
                 
          	 }
          	 else
          		 return '';
          		 }
          },  
    	    { text: '',editable:false, datafield: 'Delete',width:'5%', filterable: false, cellsrenderer: function (row) {
    	    	 var CheckifPublished=  $('#grid').jqxGrid('getcellvalue', row, "isPublished");
                 if (CheckifPublished==0)
              	 {
    	    	return "<input id=\"CancelUpdate\"  onclick='Cancel(" + row + ", event)' type=\"button\"  class=\"cancel\" value=\"Delete\" />";
              	 }
    	    	 else
              		 return '';
              		 
             }
    	    },
           { text: '',editable:false, datafield: 'Recall',width:'5%', filterable: false,cellsrenderer: function (row) {
        	 var CheckifPublished=  $('#grid').jqxGrid('getcellvalue', row, "isPublished");
        	 if (CheckifPublished==0)
        	 {
        		return "<input id=\"publish\"  onclick='Publish(" + row + ", event)' type=\"button\"  class=\"publish\" value=\"Publish\" />";
              }
        	 else 
  	    	  return "<input id=\"recall\"  onclick='Recall(" + row + ", event)' type=\"button\"  class=\"recall\" value=\"Recall\" />";
      	    }
            },  
      	   
           { text: '', datafield: 'isBold', hidden: true  },
           { text: '', datafield: 'columnDescription', hidden: true  },
           { text: '', datafield: 'isPublished', hidden: true  }, 
           { text: '', datafield: 'id', hidden: true  },
		   { text: '', datafield: 'isFunctionNews', hidden: true  },
           ]
         
      });
     
  });
	 function Edit(row, event) {
	     isedit=true;
	     selectedRow.editrow = row;
	   
		    	$("#grid").jqxGrid('beginrowedit', row);
		    	$("#edit"+row).css("display","none");
				$("#actionButtons"+row).css("display","contents"); 
		    	if (event) {
		    		if (event.preventDefault) {
		    			event.preventDefault();
		    		}
		    	} 
			
    }
	
  function Update(row, event) {
	 
	   isupdate=true;
	   var updatedData = $("#grid").jqxGrid('getrowdata', row);
	   selectedRow.editrow = -1;
	    $("#grid").jqxGrid('endrowedit', row);
	    var updatedData = $("#grid").jqxGrid('getrowdata', row);
	    var row = {
	    		   "id":updatedData.id,
				   "template":updatedData.template,
				   "columnDescription":updatedData.columnDescription,
				   "robots":updatedData.robots,
				   "isBold":updatedData.isBold,
				   "generationDateDate":$.jqx.dataFormat.formatdate(updatedData.generationDateDate,  'yyyy-MM-dd hh:mm:ss'),
				   "isPublished":updatedData.isPublished,
				   "isFunctionNews":updatedData.isFunctionNews,
	    };
		
  	       	  $.ajax({
  	    	        type: "POST",
  	    	        contentType: "application/json",
  	    	        url: "/admin/updatenewsbyid",
  	    	        data: JSON.stringify(row),
  	    	        dataType: 'json',
  	    	        async:true,
  	    	        cache: false,
  	    	        timeout: 600000,
  	    	        success: function (data) {
  	    	        	
  	    	           $("#notificationContent").html('Data has been updated');
  	                   $("#jqxNotification").jqxNotification("open");
  	                
  	    	        
  	   },
  	    	        error: function (e) {
  	    	        	
  						  console.log("ERROR : ", e);
  	
  	    	        }
  	    	    }); 
  	       	  
	    if (event) {
	    	if (event.preventDefault) {
	    		event.preventDefault();
	    	}
	    }
	    return false;
    }
  function Cancel(row, event) {
	  isedit=false;
	  isupdate=false;
	   selectedRow.editrow = row;
    	$("#grid").jqxGrid('endrowedit', row, true);
    	
    	 var selectedrowindex = row;
         var rowscount = $("#grid").jqxGrid('getdatainformation').rowscount;
         
         var newsId = $('#grid').jqxGrid('getcellvalue', row, "id");
		 var isFunctionNews = $('#grid').jqxGrid('getcellvalue', row, "isFunctionNews");
         $.ajax({
             type : "DELETE",
             url : "/admin/deletenewsbyid/" + newsId+"/"+isFunctionNews,
             success: function (result) {       
            	 if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
 	                var id = $("#grid").jqxGrid('getrowid', selectedrowindex);
 	                var commit = $("#grid").jqxGrid('deleterow', id);
 	               $("#notificationContent").html('Data has been deleted');
	                   $("#jqxNotification").jqxNotification("open");
 	            } 
             },
             error: function (e) {
                 console.log(e);
             }
         });
   
 }
  function Recall(row, event) { 
	    var updatedData = $("#grid").jqxGrid('getrowdata', row);
	    updatedData.isPublished='0'
	    var row = {
	    		 "id":updatedData.id,
				   "template":updatedData.template,
				   "columnDescription":updatedData.columnDescription,
				   "robots":updatedData.robots,
				   "isBold":updatedData.isBold,
				   "generationDateDate":$.jqx.dataFormat.formatdate(updatedData.generationDateDate,  'yyyy-MM-dd hh:mm:ss'),
				   "isPublished":'0',
	 			   "isFunctionNews":updatedData.isFunctionNews,
	    };
		
	   
 	       	  $.ajax({
 	    	        type: "POST",
 	    	        contentType: "application/json",
 	    	        url: "/admin/updatenewsbyid",
 	    	        data: JSON.stringify(row),
 	    	        dataType: 'json',
 	    	        async:true,
 	    	        cache: false,
 	    	        timeout: 600000,
 	    	        success: function (data) {
 	    	        	
 	    	           $("#notificationContent").html('Data has been recalled');
 	                   $("#jqxNotification").jqxNotification("open");
 	                  publishNews();
 	                  $('#grid').jqxGrid('updaterow', updatedData.uid, updatedData);
		 	           
 	   },
 	    	        error: function (e) {
 	    	        	
 						  console.log("ERROR : ", e);
 	
 	    	        }
 	    	    }); 
 	       	   
	 }
	 
 function Publish(row, event) { 
	    var updatedData = $("#grid").jqxGrid('getrowdata', row);
	    updatedData.isPublished='1'
	    var row = {
	    		  "id":updatedData.id,
				   "template":updatedData.template,
				   "columnDescription":updatedData.columnDescription,
				   "robots":updatedData.robots,
				   "isBold":updatedData.isBold,
				   "generationDateDate":$.jqx.dataFormat.formatdate(updatedData.generationDateDate,  'yyyy-MM-dd hh:mm:ss'),
				   "isPublished":'1',
		           "isFunctionNews":updatedData.isFunctionNews,
	    };
		
				  $.ajax({
 	    	        type: "POST",
 	    	        contentType: "application/json",
 	    	        url: "/admin/updatenewsbyid",
 	    	        data: JSON.stringify(row),
 	    	        dataType: 'json',
 	    	        async:true,
 	    	        cache: false,
 	    	        timeout: 600000,
 	    	        success: function (data) {
 	    	        	
 	    	           $("#notificationContent").html('Data has been published');
 	                   $("#jqxNotification").jqxNotification("open");
 	             	 publishNews();
 	                  $('#grid').jqxGrid('updaterow', updatedData.uid, updatedData);
		 	           
 	   },
 	    	        error: function (e) {
 	    	        	
 						  console.log("ERROR : ", e);
 	
 	    	        }
 	    	    }); 
 	       	    
	 }
 
 function publishNews()
 {
	   $.ajax({
	        contentType: "application/json",
	        url: "/admin/getnews",
	        dataType: 'json',
	        async:true,
	        cache: false,
	        timeout: 600000,
	        success: function (data) {
	        	$("#Newslist").empty();

	        	  var ul = document.getElementById("Newslist");
					 for (i=0; i<data.length;i++)
					  {var li = document.createElement("li");
					  // li.appendChild(document.createTextNode(data[i].template.split("<img")[0]));
					  // $('#Newslist').append('<li>' + data[i].template+ '</li>');
					   if(data[i].isBold=="true")
						   $('#Newslist').append('<li><span class="red">' + data[i].template+ '</span></li>');
					   else
						   $('#Newslist').append('<li>' + data[i].template+ '</li>');
					  /*  if(data[i].isBold=="true")
					  {
					  $("#Newslist li:nth-child("+(i+1)+")").addClass("red");
					  } */
					  
					  }
					 $('#Newslist').append('<li></li>');
						var durationvalue = data.length*10000;
					    createMarquee({duration:durationvalue, padding:20});
},
	        error: function (e) {
	        	
					  console.log("ERROR : ", e);

	        }
	    });
 }
 $("#addNews").click(function () {
	  var offset = $("#grid").offset();
	  $("#popupWindow").jqxWindow({ position: { x: parseInt(offset.left)+175 , y: parseInt(offset.top)-49 } });
	  $("#popupWindow").jqxWindow('open');
 });
 $("#saveNews").click(function () {
	 
	 var a = new Date();
	 var NewRow={
		 "template":$('#news').val(),
		 "columnDescription":null,
	     "robots":'Admin',
		 "isBold":$('#IsBold').jqxCheckBox('checked'),
		 "generationDateDate":a.getFullYear()+"-"+("0" + (a.getMonth() + 1)).slice(-2)+"-"+("0" + a.getDate()).slice(-2)+" "+("0" + a.getHours()).slice(-2)+":"+("0" + a.getMinutes()).slice(-2)+":"+("0" + a.getSeconds()).slice(-2),
		 "isPublished":'0'
	  };
	
	 if ($('#news').val()== '')
	 {
		 $("#notificationContentSave").html('News field is requiered');
		 $("#jqxNotificationSave").jqxNotification({  height: 30, width: "100%",appendContainer: "#notifcationContainerSave",  opacity: 0.9,
	          animationOpenDelay: 800,  autoClose:true , autoCloseDelay: 1000,  template: 'error'
	      });
		 $("#jqxNotificationSave").jqxNotification("open");
	 }
	 else
		{
	 $.ajax({
	        type: "POST",
	        contentType: "application/json",
	        url: "/admin/savenews",
	        data: JSON.stringify(NewRow),
	        dataType: 'json',
	        async:true,
	        cache: false,
	        timeout: 600000,
	        success: function (data) {
	        	
	        	 $('#news').val('');
	        	 $("#notificationContentSave").html('Data Inserted');
	        	 $("#jqxNotificationSave").jqxNotification({  height: 30, width: "100%",appendContainer: "#notifcationContainerSave",  opacity: 0.9,
	                 animationOpenDelay: 800, autoClose:true , autoCloseDelay: 1000,  template: 'info'
	             });
	        	 $("#jqxNotificationSave").jqxNotification("open");
	        	 var newdate =new Date(data.generationDateDate);
	        	 data.generationDateDate=newdate;
	        	 $("#grid").jqxGrid('addrow', null, data, 'first');

},
	        error: function (e) {
	        	
				  console.log("ERROR : ", e);

	        }
	    }); 
		}
});
 $("#publishNewsButton").click(function () {
	  
	 var rows = $('#grid').jqxGrid('getrows');
	  var publishedRows=[];
	  for (i=0; i<rows.length;i++)
		  {
		  publishedRows.push({
			 "id":rows[i].id,
			 "template":rows[i].template,
			 "columnDescription":rows[i].columnDescription,
		     "robots":rows[i].robots,
			 "isBold":rows[i].isBold,
			 "generationDateDate":rows[i].generationDateDate,
			 "isPublished":rows[i].isPublished
		  })
		  }
 
 	  $.ajax({
	        type: "POST",
	        contentType: "application/json",
	        url: "/robot/publishNews",
	        data: JSON.stringify(publishedRows),
	        dataType: 'text',
	        async:true,
	        cache: false,
	        timeout: 600000,
	        success: function (data) {
	        	
	       	 gridsource.url='/admin/getunpublishednews';
			 dataAdapter = new $.jqx.dataAdapter(gridsource);
			 $('#grid').jqxGrid({source:dataAdapter});
		
			   $("#notificationContent").html('News are pubished');
               $("#jqxNotification").jqxNotification("open");
},
	        error: function (e) {
	        	
				  console.log("ERROR : ", e);

	        }
	    }); 
	  
	});
  
  $("#triggerRobotButton").click(function () {
	  var triggerRobotWithFunction=true;
      var triggerRobotWithoutFunction=true;
	  $('#overlay').fadeIn();
	  $.ajax({
	        contentType: "application/json",
	        url: "/robot/callrobotswithoutfunctionasync",
	        dataType: 'text',
			async:true,
	        cache: false,
	        timeout: 600000,
	        success: function (data) {
	          triggerRobotWithFunction = false;
			},
	        error: function (e) {
	        	
					  console.log("ERROR : ", e);

	        }
	    });
       $.ajax({
	        contentType: "application/json",
	        url: "/robot/callrobotswithfunctionasync",
	        dataType: 'text',
	        cache: false,
			async:true,
	        timeout: 600000,
	        success: function (data) {
	          triggerRobotWithoutFunction = false;
			},
	        error: function (e) {
	        	
					  console.log("ERROR : ", e);

	        }
	    });
 // while ((triggerRobotWithFunction)||(triggerRobotWithoutFunction)) {};
debugger;
    if((!triggerRobotWithFunction)||(!triggerRobotWithoutFunction))
	{
			  $('#overlay').fadeOut();
	       	 gridsource.url='/admin/getunpublishednews';
			 dataAdapter = new $.jqx.dataAdapter(gridsource);
			 $('#grid').jqxGrid({source:dataAdapter});
			 
			 $("#notificationContent").html('Done');
             $("#jqxNotification").jqxNotification("open");
	}
	  
	});
	
  $("#grid").click(function(e) {
	  e.stopPropagation(); //stops click event from reaching document
	});
