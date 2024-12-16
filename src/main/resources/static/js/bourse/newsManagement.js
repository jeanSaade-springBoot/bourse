  var selectedRow=this;
  var groupItem;
  var subgroupsource;
  var familyItem;
  var groupsource;
  var gridsource;
  var dbOrderJson;
  var activeAssetId;
  var source;
  var pageSize=50;
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
			popupWindow('/bourse/allnews', 'Libvol - View All News', window, 1300, 600);
		  });
	  
	   $.ajax({
	        contentType: "application/json",
	        url: "/admin/getassetnewsorder",
	        dataType: 'json',
	        async:true,
	        cache: false,
	        timeout: 600000,
	        success: function (data) {
				dbOrderJson=data;
	        	for (let i = 0; i < data.length; i++) {
					if(data[i].assetId!=9)
					{
						if(i==0)
		        	  	  $("#nav-tab").append("<a class='navigation nav-item nav-link active' id='"+data[i].assetCode+"' data-assetid='"+data[i].assetId+"' data-toggle='tab'  href='#' role='tab' aria-controls='nav-any2' aria-selected='false'  onClick='showSelectedAsset("+data[i].assetId+");'>"+data[i].assetName+"</a>");
				    	else 
				    	  $("#nav-tab").append("<a class='navigation nav-item nav-link' id='"+data[i].assetCode+"' data-assetid='"+data[i].assetId+"' data-toggle='tab'  href='#' role='tab' aria-controls='nav-any2' aria-selected='false' onClick='showSelectedAsset("+data[i].assetId+");'>"+data[i].assetName+"</a>");
				    }	
			    }
			    activeAssetId=$('div#nav-tab a.active')[0].dataset.assetid;
			  
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
        	  { name: 'assetId', type: 'string' }, 
          ],
         // async: true,
          url: '/admin/getunpublishednews/'+activeAssetId+'/0/'+pageSize,
          beforeprocessing: function (data) {
                    gridsource.totalrecords = data.totalElements;
                }
      };
   
      var dataAdapter = new $.jqx.dataAdapter(gridsource);
      var cellclassname = function (row, column, value, data) {
          var isBold = $('#grid').jqxGrid('getcellvalue', row, "isBold");
          if (isBold=="true") {
              return "redColor";
          }
      }
    
     $("#grid").jqxGrid(
      {
          width: '100%',
          source: dataAdapter,                
          columnsresize: false,
          theme:'dark',
          pageable: true,
          showfilterrow: true,
          filterable: true,
          columnsheight: 30,
          pagesize: 50,
		  pagesizeoptions: ['10', '50', '100'],
          autoheight: true,
          editable: true,
          //selectionmode: 'checkbox',
           selectionmode: 'none',
          editmode: 'selectedrow',
          virtualmode: true,
          rendergridrows: function () {
                    return dataAdapter.records;
                },
          columns: [
        	 { text: 'Robot' ,editable:false, datafield: 'robots', width: '8%'},
        	 { text: 'Date', datafield: 'generationDateDate', width: '10%', editable:false, cellsformat: 'dd-MMM-yyyy',filtertype: 'date' }, 
        	 { text: 'News', datafield: 'template', width: '64.5%',   cellclassname: cellclassname,
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
      	   
           { text: '',editable:false, datafield: 'copy',width:'2.5%', filterable: false ,cellsrenderer: function (row) {
   	    	  return "<div class=\"copy-text\"><button onclick='Copy(" + row + ", event)'><i class=\"fa fa-clone\" aria-hidden=\"true\"></i></button></div>";
				}
				}
		    ,
           { text: '', datafield: 'isBold', hidden: true  },
           { text: '', datafield: 'columnDescription', hidden: true  },
           { text: '', datafield: 'isPublished', hidden: true  }, 
           { text: '', datafield: 'id', hidden: true  },
		   { text: '', datafield: 'isFunctionNews', hidden: true  },
		   { text: '', datafield: 'assetId', hidden: true  },
           ]
         
      }); 
			},
	        error: function (e) {
	        	
					  console.log("ERROR : ", e);

	        }
	    });
	    
	     $("#grid").on("pagechanged", function (event) {
                $("#eventslog").css('display', 'block');
                if ($("#events").find('.logged').length >= 5) {
                    $("#events").jqxPanel('clearcontent');
                }
                var args = event.args;
                var eventData = "pagechanged <div>Page:" + args.pagenum + ", Page Size: " + args.pagesize + "</div>";
              
                  pageSize= args.pagesize;
              	  gridsource.url='/admin/getunpublishednews/'+activeAssetId+'/'+args.pagenum+'/'+args.pagesize;
		          var dataAdapter = new $.jqx.dataAdapter(gridsource);
		          $("#grid").jqxGrid({source:dataAdapter, 
		           rendergridrows: function () {
                    return dataAdapter.records;
                },});
		          
                // get page information.
                var paginginformation = $("#grid").jqxGrid('getpaginginformation');
                $('#paginginfo').html("<div style='margin-top: 5px;'>Page:" + paginginformation.pagenum + ", Page Size: " + paginginformation.pagesize + ", Pages Count: " + paginginformation.pagescount + "</div>");
            });
        $("#grid").on("pagesizechanged", function (event) {
               
                var args = event.args;
                var eventData = "pagesizechanged <div>Page:" + args.pagenum + ", Page Size: " + args.pagesize + ", Old Page Size: " + args.oldpagesize + "</div>";
                  pageSize= args.pagesize;
              	  gridsource.url='/admin/getunpublishednews/'+activeAssetId+'/'+args.pagenum+'/'+args.pagesize;
		          var dataAdapter = new $.jqx.dataAdapter(gridsource);
		          $("#grid").jqxGrid({source:dataAdapter,  rendergridrows: function () {
                    return dataAdapter.records;
                },});
		          
                // get page information.          
                var paginginformation = $("#grid").jqxGrid('getpaginginformation');
                $('#paginginfo').html("<div style='margin-top: 5px;'>Page:" + paginginformation.pagenum + ", Page Size: " + paginginformation.pagesize + ", Pages Count: " + paginginformation.pagescount + "</div>");
            }); 
        $('#grid').on('filter',  function (event) {
			
			 var filterGroups = $('#grid').jqxGrid('getfilterinformation');
		     
		     var templateValue="";
		     var dateValue="";
		     var robotsValue="";
		     
		     for (var i = 0; i < filterGroups.length; i++) {
		         var filterGroup = filterGroups[i];
		         var filters = filterGroup.filter.getfilters();
		         for (var j = 0; j < filters.length; j++) {
		          
		             if(filterGroup.filtercolumn=="template")
		               templateValue=filters[j].value;
		               
	                  if(filterGroup.filtercolumn=="generationDateDate")
		                dateValue=filters[j].value;
		               
	                  if(filterGroup.filtercolumn=="robots")
		                robotsValue=filters[j].value;
		         }
		     }
		      gridsource.url='/admin/getfilterednews?assetId='+activeAssetId+'&robots='+robotsValue+'&generationDate='+dateValue+'&template='+templateValue+'&pageNo=0&pageSize='+pageSize;
					          var dataAdapter = new $.jqx.dataAdapter(gridsource);
					          $("#grid").jqxGrid({source:dataAdapter, 
					           rendergridrows: function () {
				                return dataAdapter.records;
				                },
				             });
		     
		  
 });
	  $(".sortable").sortable({
        update: function(event, ui) {
            const tab = document.getElementById("nav-tab").children;
            var updatedOrder=[];
			for (let i = 0; i < tab.length; i++) {
			  var object = dbOrderJson.filter(a => a.assetCode == tab[i].id);
			  updatedOrder.push({
				 id:object[0].id,
			     assetCode:object[0].assetCode,
			     assetId:object[0].assetId,
				 assetName:object[0].assetName,
				 orderId:i+1,
			  });
			}
				
  	       	  $.ajax({
  	    	        type: "POST",
  	    	        contentType: "application/json",
  	    	        url: "/admin/updateassetnewsorder",
  	    	        data: JSON.stringify(updatedOrder),
  	    	        dataType: 'json',
  	    	        async:true,
  	    	        cache: false,
  	    	        timeout: 600000,
  	    	        success: function (data) {
  	    	        	console.log(data)
  	    	     },
  	    	        error: function (e) {
  	    	        	
  						  console.log("ERROR : ", e);
  	
  	    	        }
  	    	    }); 
        }
      });
	  $("#newsTabs").jqxButtonGroup({ theme:'dark', mode: 'radio' });
	  $('#newsTabs').jqxButtonGroup('setSelection', 0);
	 
	  $("#saveNews").jqxButton({ theme: 'dark',height:30,width:74  });
      $("#cancel").jqxButton({ theme: 'dark',height:30,width:74 });
	  $("#jqxNotification").jqxNotification({  height: 30, width: "100%",appendContainer: "#notifcationContainer",  opacity: 0.9,
           animationOpenDelay: 800, autoClose:true , autoCloseDelay: 1000,  template: 'info'
      });
	  $("#jqxNotificationSave").jqxNotification({  height: 30, width: "100%",appendContainer: "#notifcationContainerSave",  opacity: 0.9,
          animationOpenDelay: 800, autoClose:true , autoCloseDelay: 1000,  template: 'info'
      }); 
      $("#jqxNotificationRobots").jqxNotification({ width: "90%",appendContainer: "#notifcationContainerRobot",  opacity: 0.9,
           autoOpen: false, animationOpenDelay: 800, autoClose:true , autoCloseDelay: 3000,  template: "success"
       }); 
	   
	  $("#popupWindow").jqxWindow({
          width: '50%',    height: '38%',  resizable: false,  theme: 'dark' , isModal: true, autoOpen: false, cancelButton: $("#cancel"), modalOpacity: 0.01           
      });
	  
	  $("#IsBold").jqxCheckBox({ theme: 'dark' ,rtl: true, width: 90, height: 25});  
	  
	  $("#addNews").jqxButton({  theme:'dark', width: 120, height: 30 });
	  $("#triggerRobotButton").jqxButton({  theme:'dark', width: 120, height: 30 });
	  $("#publishNewsButton").jqxButton({  theme:'dark', width: 120, height: 30 });
     
      $('#newsTabs').on('buttonclick', function () { 
	   value= $('#newsTabs').jqxButtonGroup('getSelection');
		  if (value==0)
		  {
			    $("#newsGrid").css("display","block");
				$("#newsOrder").css("display","none");
		  }
		  else if (value==1)
			{
		        source.url='/admin/getnewsorder/'+activeAssetId;
  	        	var dataAdapter = new $.jqx.dataAdapter(source);
  	        	$('#kanban1').jqxKanban({source: dataAdapter});
			   
				$("#newsGrid").css("display","none");
				$("#newsOrder").css("display","block");
				
				$('#nav-column-master').show();
			}
			
		});
		
		  
	  $("#save").jqxButton({  theme:'dark', width: 110, height: 35,template: "success"});
	  $("#save").click(function () {
	  // var data = getListOrder();
	   var data = {"listid":getListOrder()[0],
			       "newsOrderList":getListOrder()[1],
			        "assetId":activeAssetId
			        };

       	  $.ajax({
  	        type: "POST",
  	        contentType: "application/json",
  	        url: "/admin/updatenewsorder/",
  	        data: JSON.stringify(data),
  	        dataType: 'json',
  	        async:false,
  	        cache: false,
  	        timeout: 600000,
  	        success: function (data) {
  	            source.url='/admin/getnewsorder/'+activeAssetId;
  	        	var dataAdapter = new $.jqx.dataAdapter(source);
  	        	$('#kanban1').jqxKanban({source: dataAdapter});
  	          $("#jqxNotificationRobots").jqxNotification("open");
 },
  	        error: function (e) {
  	        	
					  console.log("ERROR : ", e);

  	        }
  	    });
		 
		   
		  });
		var fields = [
          { name: "id", map: "id", type: "string" },
          { name: "status", map: "state", type: "string" },
          { name: "text", map: "robotCode", type: "string" }
			];
			 source =
			 {
			     dataType: "json",
			     dataFields: fields,
			     url:''
			 };
			
			var dataAdapter = new $.jqx.dataAdapter(source);
			
			$('#kanban1').jqxKanban({
			    width: '100%',
			    height: '500px',
			    theme:'dark',
			    source: dataAdapter,
			    columns: [
			        { text: "News reorder", dataField: "new"}                
			    ],
			    // render column headers.
			    columnRenderer: function (element, collapsedElement, column) {
			        var columnItems = $("#kanban1").jqxKanban('getColumnItems', column.dataField).length;
			        // update header's status.
			        element.find(".jqx-kanban-column-header-status").html(" (" + columnItems + "/" + column.maxItems + ")");
			        // update collapsed header's status.
			        collapsedElement.find(".jqx-kanban-column-header-status").html(" (" + columnItems + "/" + column.maxItems + ")");
			    }
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
				   "generationDateDate":formatDateToYMDHMS(updatedData.generationDateDate),
				   "isPublished":updatedData.isPublished,
				   "isFunctionNews":updatedData.isFunctionNews,
				   "isVisible":"1",
				   "assetId":updatedData.assetId
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
					 
 	                	 gridsource.url='/admin/getunpublishednews/'+activeAssetId+'/0/'+pageSize;
					          var dataAdapter = new $.jqx.dataAdapter(gridsource);
					          $("#grid").jqxGrid({source:dataAdapter, 
					           rendergridrows: function () {
				                return dataAdapter.records;
				                },
				             });
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
				   "generationDateDate":formatDateToYMDHMS(updatedData.generationDateDate),
				   "isPublished":'0',
	 			   "isFunctionNews":updatedData.isFunctionNews,
 				   "isVisible":"1",
 				   "assetId":updatedData.assetId
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
 	                
 	                	 gridsource.url='/admin/getunpublishednews/'+activeAssetId+'/0/'+pageSize;
					          var dataAdapter = new $.jqx.dataAdapter(gridsource);
					          $("#grid").jqxGrid({source:dataAdapter, 
					           rendergridrows: function () {
				                return dataAdapter.records;
				                },
				             });
		 	           
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
				   "generationDateDate":formatDateToYMDHMS(updatedData.generationDateDate),
				   "isPublished":'1',
		           "isFunctionNews":updatedData.isFunctionNews,
 				   "isVisible":"1",
 				   "assetId":updatedData.assetId
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
 	                  
 	                	 gridsource.url='/admin/getunpublishednews/'+activeAssetId+'/0/'+pageSize;
					          var dataAdapter = new $.jqx.dataAdapter(gridsource);
					          $("#grid").jqxGrid({source:dataAdapter, 
					           rendergridrows: function () {
				                return dataAdapter.records;
				                },
				             });
		 	           
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
	        url: "/admin/getnews/",
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
		 //"generationDateDate":a.getFullYear()+"-"+("0" + (a.getMonth() + 1)).slice(-2)+"-"+("0" + a.getDate()).slice(-2)+" "+("0" + a.getHours()).slice(-2)+":"+("0" + a.getMinutes()).slice(-2)+":"+("0" + a.getSeconds()).slice(-2),
		 "generationDateDate":a.getFullYear()+"-"+("0" + (a.getMonth() + 1)).slice(-2)+"-"+("0" + a.getDate()).slice(-2)+" 00:00:00",
		 "isVisible":'1',
		 "isFunctionNews":'0',
		 "isPublished":'0',
		 "assetId":activeAssetId
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
	        contentType: "application/json",
	        url: "/robot/publishNews/"+activeAssetId,
	        dataType: 'text',
	        async:true,
	        cache: false,
	        timeout: 600000,
	        success: function (data) {
	        
          	  gridsource.url='/admin/getunpublishednews/'+activeAssetId+'/0/'+pageSize;
	          var dataAdapter = new $.jqx.dataAdapter(gridsource);
	          $("#grid").jqxGrid({source:dataAdapter, 
	           rendergridrows: function () {
                return dataAdapter.records;
                },
                });
		
			   $("#notificationContent").html('News are pubished');
               $("#jqxNotification").jqxNotification("open");
},
	        error: function (e) {
	        	
				  console.log("ERROR : ", e);

	        }
	    }); 
	  
	});
 
  $("#triggerRobotButton").click(function () {
	  

   $.ajax({
	        contentType: "application/json",
	        url: "/process/isrobottriggered/"+activeAssetId,
	        dataType: 'text',
			async:true,
	        cache: false,
	        timeout: 600000,
	        success: function (data) {
	      
					if(data=='false')
					    $.ajax({
					        contentType: "application/json",
					        url: "/process/mustbetriggered/"+activeAssetId,
					        dataType: 'text',
							async:true,
					        cache: false,
					        timeout: 600000,
					        success: function (data) {
						  
						 	 			if(data=="true")
				                          {
										  $('#overlay').fadeIn();
										   triggerRobot();
										   }
											else{
												showGeneratedNews();
											    }
									},
					        error: function (e) {
					        	
									  console.log("ERROR : ", e);
				
					        }
					    });
					else{ 
				
				     $('#alert-modal-robot').modal('show'); 
			
					   }

			},
	        error: function (e) {
	        	
					  console.log("ERROR : ", e);

	        }
	    });

	});
	function ReCallTriggerRobot() {
      $("#triggerRobotButton").trigger("click");
   }
  $("#grid").click(function(e) {
	  e.stopPropagation(); //stops click event from reaching document
	});
	
	function triggerRobot()
	{
		  $.ajax({
	        contentType: "application/json",
	        url: "/robot/callrobotsasync/"+activeAssetId,
	        dataType: 'text',
			async:true,
	        cache: false,
	        timeout: 600000,
	        success: function (data) {
	         $('#overlay').fadeOut();
	         
	       	 gridsource.url='/admin/getunpublishednews/'+activeAssetId+'/0/'+pageSize;
	          var dataAdapter = new $.jqx.dataAdapter(gridsource);
	          $("#grid").jqxGrid({source:dataAdapter, 
	           rendergridrows: function () {
                return dataAdapter.records;
                },
             });
			 
			 $("#notificationContent").html('Done');
             $("#jqxNotification").jqxNotification("open");
			},
	        error: function (e) {
	        	
					  console.log("ERROR : ", e);

	        }
	    });
	}
	
	function showGeneratedNews()
	{
		  $.ajax({
	        contentType: "application/json",
	        url: "/news/showvisiblenews/"+activeAssetId,
	        dataType: 'text',
			async:true,
	        cache: false,
	        timeout: 600000,
	        success: function (data) {
	         $('#overlay').fadeOut();
	         
	       	  gridsource.url='/admin/getunpublishednews/'+activeAssetId+'/0/'+pageSize;
		          var dataAdapter = new $.jqx.dataAdapter(gridsource);
		          $("#grid").jqxGrid({source:dataAdapter, 
		           rendergridrows: function () {
                    return dataAdapter.records;
	                },
	                });
			 
			 $("#notificationContent").html('Done');
             $("#jqxNotification").jqxNotification("open");
			},
	        error: function (e) {
	        	
					  console.log("ERROR : ", e);

	        }
	    });
	}
	
	function showSelectedAsset(assetId){
		activeAssetId=assetId;
		value= $('#newsTabs').jqxButtonGroup('getSelection');
		 if (value==0)
			{   
				  gridsource.url='/admin/getunpublishednews/'+activeAssetId+'/0/'+pageSize;
		          var dataAdapter = new $.jqx.dataAdapter(gridsource);
		          $("#grid").jqxGrid({source:dataAdapter, 
		           rendergridrows: function () {
                    return dataAdapter.records;
	                },
	                });
			}
			else if (value==1)
			{
				source.url='/admin/getnewsorder/'+activeAssetId;
  	        	var dataAdapter = new $.jqx.dataAdapter(source);
  	        	$('#kanban1').jqxKanban({source: dataAdapter});
			   
			}
	}
	 function getListOrder() {
	    data = [];
	    listOfId = [];
	 
	       var list = document.getElementById("kanban1-column-container-0").childNodes;
	       var listLength = list.length;
	       var i=0;
	       var counter=1;
	          
	       for(var i=0; i<listLength; i++){
	    	    ids = {};
	            item = {};
	            ids = list.item(i).id.split("_")[1];
	             // item ["id"] = list.item(i).id.split("_")[1];
	            item ["robotCode"] = list.item(i).outerText;
	            item ["orderId"] = counter++ ;
	            item ["state"] = 'new' ;
	            item ["assetId"] = activeAssetId ;
	            data.push(item);
	            listOfId.push(ids);
	          
	       }
	       return [listOfId,data];
	  } 
	   function Copy(row, event) {
	     selectedRow.editrow = row;
	     var copyData = $("#grid").jqxGrid('getrowdata', row).template;
			 copyToClipboard(copyData);
    }
    function formatDateToYMDHMS(dateString) {
    // Create a new Date object from the input date string
    const date = new Date(dateString);

    // Function to add leading zeros for single-digit numbers
    const padZero = (num) => num.toString().padStart(2, '0');

    // Extract the components and format the date as yyyy-MM-dd hh:mm:ss
    const formattedDate = `${date.getFullYear()}-${padZero(date.getMonth() + 1)}-${padZero(date.getDate())} ` +
                          `${padZero(date.getHours())}:${padZero(date.getMinutes())}:${padZero(date.getSeconds())}`;

    return formattedDate;
}
