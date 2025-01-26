  var groupItem;
  var subgroupsource;
  var familyItem;
  var groupsource;
  var gridsource;
  var totalPageAll = 0;
  var totalPage0 = 0;
  var totalPage1 = 0;
  var totalPage2 = 0;
  var totalPageFilter = 0;
  var currentPageAll = 0;
  var currentPage0 = 0;
  var currentPage1 = 0;
  var currentPage2 = 0;
  var currentPageFilter = 0;
  
  const gridSources = [];
  const dataAdapter = [];
  const pagerrenderer = [];
  const currentPage = [];
  const totalPage = [];
  const cellclassname=[];
  $(window).on('load', function(){
	  $('#overlay').fadeOut();
	  $('#nav-column-master').show();
  });
  function addText(event) {
	    var targ = event.target || event.srcElement;
	    document.getElementById("TemplateText").value += targ.textContent || targ.innerText;
	}
  $(document).ready(function () {
	  
	  		fetchTotalPagesNumber();
	  
		  $.ajax({
	        contentType: "application/json",
	        url: "/admin/getassetnewsorder",
	        dataType: 'json',
	        async:true,
	        cache: false,
	        timeout: 600000,
	        success: function (data) {
				
					for (let i = 0; i < data.length; i++) {
					if(data[i].assetId!=9)
					{
						fetchNumberOfTotalPages('/admin/gettotalpages/0/50/' + data[i].assetId + '/false').then(function(totalPages) {
							totalPage[i] =totalPages;
						  })
						  .catch(function(error) {
						   console.error('Error:', error);
						  });
						currentPage[i]=0;
					    var nav = "<a class='navigation nav-item nav-link' id='nav-tab-" + i + "' data-toggle='tab' href='#nav-" + i + "' role='tab' aria-controls='nav-tab' aria-selected='false' data-filter='" + data[i].assetName + "'>" + data[i].assetName + "</a>";
					    $("#nav-tab").append(nav);
					
					    var content = "<div class='tab-pane fade show' id='nav-" + i + "' role='tabpanel' aria-labelledby='nav-all-tab'>" +
					        "<div id='IsImportant" + i + "' class='t-style' style='color: white; margin-top:0.2rem; line-height: 25px;position: absolute;    z-index: 100;    right: 0;'> Show only important news</div>" +
					        "<div id='grid" + i + "'></div></div>";
					    $("#nav-tabContent").append(content);
					
					    gridSources[i] = {
					        datatype: "json",
					        datafields: [
					            { name: 'template', type: 'string' },
					            { name: 'isBold', type: 'string' },
					            { name: 'generationDateDate', type: 'date' },
					        ],
					        async: true,
					        url: '/admin/findnewsformateddate/' + data[i].assetId + '/0/50'
					    };
					    dataAdapter[i] = new $.jqx.dataAdapter(gridSources[i], {
					          downloadComplete: function (data, status, xhr) { },
					          loadComplete: function (data) { },
					          loadError: function (xhr, status, error) { }
					      });   
					    pagerrenderer[i] = function () {
				 			var theme;
			                var element = $("<div style='margin-right: 10px; margin-top: 11px; width: 100%; height: 100%;'></div>");
			                var datainfo = $('#grid' + i).jqxGrid('getdatainformation');
			                var paginginfo = datainfo.paginginformation;
			  				var label = $("<div style='font-size: 11px; margin: 2px 3px; margin-top:-5px; font-weight: bold; float: right;'></div>");
			                //label.text("1-" + paginginfo.pagesize + ' of ' + datainfo.rowscount);
							label.text("Show More");
			                var leftButton = $("<div style='padding: 0px; float: right;'><div ><i class='fa-regular fa-square-caret-left'></i></div></div>");
			                leftButton.find('div').addClass('btn-style');
			               // leftButton.jqxButton({ theme: theme });
			                var rightButton = $("<div style='padding: 0px; margin: 0px 3px; float: right;'><div ><i class='fa-regular fa-square-caret-right'></i></div></div>");
			                rightButton.find('div').addClass('btn-style');
			               // rightButton.jqxButton({ theme: theme });
			
			                rightButton.appendTo(element);
			                leftButton.appendTo(element);
			                label.appendTo(element);
			
			                self.label = label;
			                // update buttons states.
			                var handleStates = function (event, button, className, add) {
			                    button.on(event, function () {
			                        if (add == true) {
			                            button.find('div').addClass(className);
			                        }
			                        else button.find('div').removeClass(className);
			                    });
			                }
			                if (theme != '') {
			                    handleStates('mousedown', rightButton, 'jqx-icon-arrow-right-selected-' + theme, true);
			                    handleStates('mouseup', rightButton, 'jqx-icon-arrow-right-selected-' + theme, false);
			                    handleStates('mousedown', leftButton, 'jqx-icon-arrow-left-selected-' + theme, true);
			                    handleStates('mouseup', leftButton, 'jqx-icon-arrow-left-selected-' + theme, false);
			                    handleStates('mouseenter', rightButton, 'jqx-icon-arrow-right-hover-' + theme, true);
			                    handleStates('mouseleave', rightButton, 'jqx-icon-arrow-right-hover-' + theme, false);
			                    handleStates('mouseenter', leftButton, 'jqx-icon-arrow-left-hover-' + theme, true);
			                    handleStates('mouseleave', leftButton, 'jqx-icon-arrow-left-hover-' + theme, false);
			                }
			                rightButton.click(function () {
			                      currentPage[i] = rightClicked(currentPage[i] ,totalPage[i]);
			                            if ($("#IsImportant"+i).val())
							    	    gridSources[i].url='/admin/getnewsbyimportance/'+$("#IsImportant"+i).val()+'/'+data[i].assetId+'/'+currentPage[i] +'/50';
							    	  else
							    	    gridSources[i].url='/admin/findnewsformateddate/'+data[i].assetId+'/'+currentPage[i] +'/50';
							    	    
							           dataAdapter[i] = new $.jqx.dataAdapter(gridSources[i]);
							          $('#grid' + i).jqxGrid({source:dataAdapter[i],
							        	  groups:['generationDateDate']
							        	  });
			                    $('#grid' + i).jqxGrid('gotonextpage');
					                     let div = document.getElementById('grid' + i);
										 div.scrollIntoView(true);
					                });
					                leftButton.click(function () {
										  currentPage[i]  = leftClicked(currentPage[i] ,totalPage[i]);
					                            if ($("#IsImportant"+i).val())
									    	    gridSources[i].url='/admin/getnewsbyimportance/'+$("#IsImportant"+i).val()+'/'+data[i].assetId+'/'+currentPage[i] +'/50';
									    	  else
									    	    gridSources[i].url='/admin/findnewsformateddate/'+data[i].assetId+'/'+currentPage[i] +'/50';
									    	    
									          dataAdapter[i] = new $.jqx.dataAdapter(gridSources[i]);
									          $('#grid' + i).jqxGrid({source:dataAdapter[i],
									        	  groups:['generationDateDate']
									        	  });
										
					                    $('#grid' + i).jqxGrid('gotoprevpage');
					                     let div = document.getElementById('grid' + i);
										 div.scrollIntoView(true);
					                });
					                return element;
					            };   
					              cellclassname[i] = function (row, column, value, data) {
							          var isBold = $("#grid"+ i).jqxGrid('getcellvalue', row, "isBold");
							          if (isBold=="true") {
							              return "red";
							          }
							          };
					       $('#grid' + i ).jqxGrid(
						      {
						          width: '100%',
								  height:670,
						          source: dataAdapter[i],                
						          columnsresize: false,
						          pageable: true,
						          selectionmode: 'none',
						          pagesize: 50,
							      //pagesizeoptions: ['15', '50', '100'],
						          autoheight: true,
								  columnsheight: 30,
								  autorowheight: true,
						          altrows: true,
						          showgroupsheader: false,
						          groupable: true,
						  		  pagerrenderer: pagerrenderer[i] ,
						          groupsexpandedbydefault: true,
						          columns: [
						           { text: 'Date', datafield: 'generationDateDate', hidden: true,  editable:false, cellsformat: 'dd-MMM-yyyy',filtertype: 'date' }, 
						           { text: 'News', datafield: 'template', width: '96%',   cellclassname:  cellclassname[i],
						        	   createfilterwidget: function (column, columnElement, widget) {
						        	        widget.jqxInput({ width: '96%', height: 27, placeHolder: "Search" });
						        	      }
						           },
						           { text: '', datafield: 'isBold', hidden: true  },
						               { text: '',editable:false, datafield: 'copy',width:'2.5%', filterable: false ,cellsrenderer: function (row) {
   	    	  return "<div class=\"copy-text\"><button onclick='Copy(\""+'#grid' + i +"\"," + row + ")'><i class=\"fa fa-clone\" aria-hidden=\"true\"></i></button></div>";
				}
				}
						           ],
						      groups: ['generationDateDate']
						         
						      });
						      
						       $('#grid' + i).on("pagechanged", function (event) 
								 {
								   $('#grid' + i).jqxGrid('expandallgroups');
								 });   
								 
				  			     $("#IsImportant"+ i).on('change', function (event) {
							    	  $("#grid"+ i).jqxGrid('showloadelement');
							          currentPage[i]=0;
							    	   var checked = $("#IsImportant"+ i).val();
								   
				   	                  fetchNumberOfTotalPages('/admin/gettotalpages/0/50/'+data[i].assetId+'/' + checked).then(function(totalPages) {
										totalPage[i] =totalPages;
										
														   
							    	  if (checked)
							    	    gridSources[i].url='/admin/getnewsbyimportance/'+checked+'/'+data[i].assetId+'/'+currentPage[i]+'/50';
							    	  else
							    	    gridSources[i].url='/admin/findnewsformateddate/'+data[i].assetId+'/'+currentPage[i]+'/50';
							    	  
							          dataAdapter[i] = new $.jqx.dataAdapter(gridSources[i]);
							          $("#grid"+i).jqxGrid({source:dataAdapter[i],
							        	  groups: ['generationDateDate']
							        	  }
							          );
									
									  })
									  .catch(function(error) {
									    // Handle errors
									    console.error('Error:', error);
									  });
									
							          
							      });  
							      
							       $("#IsImportant"+i).jqxCheckBox({ width: 200, height: 25});  
							       }
					}
				  gridsourceall =
			      {
			          datatype: "json",
			          datafields: [
			        	  { name: 'template', type: 'string' },
			        	  { name: 'isBold', type: 'string' },  
			        	  { name: 'order_id', type: 'string' },  
			        	  { name: 'generationDateDate', type: 'date' },  
			          ],
			          async: true,
			          url: '/admin/findnewsformateddate/0/50',
			           pager: function (pagenum, pagesize, oldpagenum) {
                    console.log (pagenum, pagesize, oldpagenum);
                    }
			      };	
				 	      
			  var dataAdapterall = new $.jqx.dataAdapter(gridsourceall, {
		          downloadComplete: function (data, status, xhr) { },
		          loadComplete: function (data) { },
		          loadError: function (xhr, status, error) { }
		      });       
		
				 $("#IsImportantall").jqxCheckBox({ width: 200, height: 25});  		
	           
		var pagerrendererall = function () {
			
	 			var theme;
                var element = $("<div style='margin-right: 10px; margin-top: 11px; width: 100%; height: 100%;'></div>");
                var datainfo = $("#gridall").jqxGrid('getdatainformation');
                var paginginfo = datainfo.paginginformation;
  				var label = $("<div style='font-size: 11px; margin: 2px 3px; margin-top:-5px; font-weight: bold; float: right;'></div>");
                //label.text("1-" + paginginfo.pagesize + ' of ' + datainfo.rowscount);
				label.text("Show More");
                var leftButton = $("<div style='padding: 0px; float: right;'><div ><i class='fa-regular fa-square-caret-left'></i></div></div>");
                leftButton.find('div').addClass('btn-style');
               // leftButton.jqxButton({ theme: theme });
                var rightButton = $("<div style='padding: 0px; margin: 0px 3px; float: right;'><div ><i class='fa-regular fa-square-caret-right'></i></div></div>");
                rightButton.find('div').addClass('btn-style');
               // rightButton.jqxButton({ theme: theme });

                rightButton.appendTo(element);
                leftButton.appendTo(element);
                label.appendTo(element);

                self.label = label;
                // update buttons states.
                var handleStates = function (event, button, className, add) {
                    button.on(event, function () {
                        if (add == true) {
                            button.find('div').addClass(className);
                        }
                        else button.find('div').removeClass(className);
                    });
                }
                if (theme != '') {
                    handleStates('mousedown', rightButton, 'jqx-icon-arrow-right-selected-' + theme, true);
                    handleStates('mouseup', rightButton, 'jqx-icon-arrow-right-selected-' + theme, false);
                    handleStates('mousedown', leftButton, 'jqx-icon-arrow-left-selected-' + theme, true);
                    handleStates('mouseup', leftButton, 'jqx-icon-arrow-left-selected-' + theme, false);
                    handleStates('mouseenter', rightButton, 'jqx-icon-arrow-right-hover-' + theme, true);
                    handleStates('mouseleave', rightButton, 'jqx-icon-arrow-right-hover-' + theme, false);
                    handleStates('mouseenter', leftButton, 'jqx-icon-arrow-left-hover-' + theme, true);
                    handleStates('mouseleave', leftButton, 'jqx-icon-arrow-left-hover-' + theme, false);
                }
                rightButton.click(function (event) {
                  
					       currentPageAll = rightClicked(currentPageAll,totalPageAll);
                            if ($("#IsImportantall").val())
				    	    gridsourceall.url='/admin/getnewsbyimportance/'+$("#IsImportantall").val()+'/0/'+currentPageAll+'/50';
				    	  else
				    	    gridsourceall.url='/admin/findnewsformateddate/'+currentPageAll+'/50';
				    	 
				          var dataAdapterall = new $.jqx.dataAdapter(gridsourceall);
				          $("#gridall").jqxGrid({source:dataAdapterall,
				        	  groups:['generationDateDate','order_id']
				        	  });
					  
                    $("#gridall").jqxGrid('gotonextpage');
                    
                     let div = document.getElementById("gridall");
					 div.scrollIntoView(true);
                });
                leftButton.click(function () {
					 
						   currentPageAll = leftClicked(currentPageAll,totalPageAll);
                            if ($("#IsImportantall").val())
				    	    gridsourceall.url='/admin/getnewsbyimportance/'+$("#IsImportantall").val()+'/0/'+currentPageAll+'/50';
				    	  else
				    	    gridsourceall.url='/admin/findnewsformateddate/'+currentPageAll+'/50';
				    	    
				          var dataAdapterall = new $.jqx.dataAdapter(gridsourceall);
				          $("#gridall").jqxGrid({source:dataAdapterall,
				        	  groups:['generationDateDate','order_id']
				        	  });
					  
					  
                    $("#gridall").jqxGrid('gotoprevpage');
                     let div = document.getElementById("gridall");
					 div.scrollIntoView(true);
                });
                return element;
            };
    
            var cellclassnameall = function (row, column, value, data) {
	          var isBold = $("#gridall").jqxGrid('getcellvalue', row, "isBold");
	          if (isBold=="true") {
	              return "red";
	          }
	          }
         
      	var groupsrenderer = function (text, group, expanded) {
			    
				 if (text.includes("AssetId"))
				  {
					 if (group.split("_")[1] == 1)
						 return "<div role='gridcell' style='z-index: 1283; width: 650px;' class='jqx-grid-group-cell jqx-grid-cell-wrap' title=''><div class='jqx-grid-groups-row' style='position: absolute;'><span>	&nbsp; </span><span class='jqx-grid-groups-row-details' style='font-size: .75rem;'>" + 'YIELDS' + "</span></div></div>";
					 else if (group.split("_")[1] == 2)
						 return "<div role='gridcell' style='z-index: 1283; width: 650px;' class='jqx-grid-group-cell jqx-grid-cell-wrap' title=''><div class='jqx-grid-groups-row' style='position: absolute;'><span>	&nbsp; </span><span class='jqx-grid-groups-row-details' style='font-size: .75rem;'>" + 'COMMOS' + "</span></div></div>";
					 else if (group.split("_")[1] == 3)
						 return "<div role='gridcell' style='z-index: 1283; width: 650px;' class='jqx-grid-group-cell jqx-grid-cell-wrap' title=''><div class='jqx-grid-groups-row' style='position: absolute;'><span>	&nbsp; </span><span class='jqx-grid-groups-row-details' style='font-size: .75rem;'>" + 'LIQUIDITY' + "</span></div></div>";
					 else if (group.split("_")[1] == 4)
						 return "<div role='gridcell' style='z-index: 1283; width: 650px;' class='jqx-grid-group-cell jqx-grid-cell-wrap' title=''><div class='jqx-grid-groups-row' style='position: absolute;'><span>	&nbsp; </span><span class='jqx-grid-groups-row-details' style='font-size: .75rem;'>" + 'VOLUME' + "</span></div></div>";
					 else if (group.split("_")[1] == 5)
						 return "<div role='gridcell' style='z-index: 1283; width: 650px;' class='jqx-grid-group-cell jqx-grid-cell-wrap' title=''><div class='jqx-grid-groups-row' style='position: absolute;'><span>	&nbsp; </span><span class='jqx-grid-groups-row-details' style='font-size: .75rem;'>" + 'FX & CDS' + "</span></div></div>";
					 else if (group.split("_")[1] == 6)
						 return "<div role='gridcell' style='z-index: 1283; width: 650px;' class='jqx-grid-group-cell jqx-grid-cell-wrap' title=''><div class='jqx-grid-groups-row' style='position: absolute;'><span>	&nbsp; </span><span class='jqx-grid-groups-row-details' style='font-size: .75rem;'>" + 'SKEWS' + "</span></div></div>";
					 else if (group.split("_")[1] == 7)
						 return "<div role='gridcell' style='z-index: 1283; width: 650px;' class='jqx-grid-group-cell jqx-grid-cell-wrap' title=''><div class='jqx-grid-groups-row' style='position: absolute;'><span>	&nbsp; </span><span class='jqx-grid-groups-row-details' style='font-size: .75rem;'>" + 'STOCKS' + "</span></div></div>";
 					else if (group.split("_")[1] == 9)
						 return "<div role='gridcell' style='z-index: 1283; width: 650px;' class='jqx-grid-group-cell jqx-grid-cell-wrap' title=''><div class='jqx-grid-groups-row' style='position: absolute;'><span>	&nbsp; </span><span class='jqx-grid-groups-row-details' style='font-size: .75rem;'>" + 'RATES' + "</span></div></div>";
					else if (group.split("_")[1] == 10)
						 return "<div role='gridcell' style='z-index: 1283; width: 650px;' class='jqx-grid-group-cell jqx-grid-cell-wrap' title=''><div class='jqx-grid-groups-row' style='position: absolute;'><span>	&nbsp; </span><span class='jqx-grid-groups-row-details' style='font-size: .75rem;'>" + 'LONG-END FUTURES' + "</span></div></div>";
					else if (group.split("_")[1] == 11)
						 return "<div role='gridcell' style='z-index: 1283; width: 650px;' class='jqx-grid-group-cell jqx-grid-cell-wrap' title=''><div class='jqx-grid-groups-row' style='position: absolute;'><span>	&nbsp; </span><span class='jqx-grid-groups-row-details' style='font-size: .75rem;'>" + 'CRYPTOS' + "</span></div></div>";
				  } 
				  else if (text.includes("Date"))
				    return "<div role='gridcell' style='z-index: 1283; width: 650px;' class='jqx-grid-group-cell jqx-grid-cell-wrap' title=''><div class='jqx-grid-groups-row' style='position: absolute;'><span>	&nbsp; </span><span class='jqx-grid-groups-row-details'>"+$.datepicker.formatDate('dd-M-yy', group)+"</span></div></div>";
				}
		            
      		    $("#gridall").jqxGrid(
			      {
			          width: '100%',
					  height:670,
			          source: dataAdapterall,                
			          columnsresize: false,
			          pageable: true,
			          selectionmode: 'none',
			          pagesize: 50,
				      //pagesizeoptions: ['15', '50', '100'],
			          autoheight: true,
					  columnsheight: 30,
					  autorowheight: true,
			          altrows: true,
			          showgroupsheader: false,
			          groupable: true,
			  		  pagerrenderer: pagerrendererall,
			          groupsexpandedbydefault: true,
         			  groupsrenderer: groupsrenderer,
			          columns: [
			           { text: 'Date', datafield: 'generationDateDate', hidden: true,  editable:false, cellsformat: 'dd-MMM-yyyy',filtertype: 'date' }, 
			           { text: 'AssetId', datafield: 'order_id',  editable:false, hidden: true}, 
			           { text: 'News', datafield: 'template', width: '96%',   cellclassname: cellclassnameall,
			        	   createfilterwidget: function (column, columnElement, widget) {
			        	        widget.jqxInput({ width: '96%', height: 27, placeHolder: "Search" });
			        	      }
			           },
			           { text: '', datafield: 'isBold', hidden: true  },
			           { text: '',editable:false, datafield: 'copy',width:'2.5%', filterable: false ,cellsrenderer: function (row) {
   	    	  return "<div class=\"copy-text\"><button onclick='Copy(\"#gridall\"," + row + ")'><i class=\"fa fa-clone\" aria-hidden=\"true\"></i></button></div>";
				}
				}
			           ],
			      groups: ['generationDateDate','order_id']
			         
			      });
			  
			    $("#gridall").on("pagechanged", function (event) 
				 {
				   $("#gridall").jqxGrid('expandallgroups');
				 }); 
		
			   $("#IsImportantall").on('change', function (event) {
				    	currentPageAll=0;
				        $("#gridall").jqxGrid('showloadelement');
				         var checked = event.args.checked;
					   
	   	                  fetchNumberOfTotalPages('/admin/gettotalpages/0/50/0/' + checked).then(function(totalPages) {
							totalPageAll =totalPages;
						
						  })
						  .catch(function(error) {
						    // Handle errors
						    console.error('Error:', error);
						  });
										    
				    	  
						  if (checked)
								gridsourceall.url='/admin/getnewsbyimportance/'+checked+'/0/'+currentPageAll+'/50';
							  else
								gridsourceall.url='/admin/findnewsformateddate/'+currentPageAll+'/50';
								
				          var dataAdapterall = new $.jqx.dataAdapter(gridsourceall);
				          $("#gridall").jqxGrid({source:dataAdapterall,
				        	  groups:['generationDateDate','order_id']
				        	  }
				          );
				          
				      });   
		
				
				},
	        error: function (e) {
	        	
					  console.log("ERROR : ", e);

	        }
	    });
	    
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
		 	$("#FamilyDropDown").jqxDropDownList({ source: dataAdapter , displayMember: "description", valueMember: "id", theme: 'dark' , width: '100%', height: 30, dropDownHeight: 400});
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
			 
			$("#groupDropDown").jqxDropDownList({ source: dataAdapter,disabled: true,  displayMember: "description", valueMember: "id",theme: 'dark' , width: '100%', height: 30, dropDownHeight: 400});
			$("#groupDropDown").on('select', function (event) {
	              if (event.args) {
					  
					    var sovValues = [0];
				
				        // Remove 'ALL' item if it exists before re-binding the dropdown
				        var items = $("#subGroupDropDown").jqxDropDownList('getItems');
				        $.each(items, function (index, item) {
				            if (item.label === 'ALL') {
				                $("#subGroupDropDown").jqxDropDownList('removeItem', item);
				                return false;  // Stop loop after removing 'ALL'
				            }
				        });

	                 groupItem = event.args.item;
		                 if (groupItem.value==0)
		                	{
		                	 subgroupsource.url='/admin/getsubgroupsbygroup/1';
		                     var dataAdapter = new $.jqx.dataAdapter(subgroupsource);
		                     $("#subGroupDropDown").jqxDropDownList({source:dataAdapter, disabled: false }); 
		                      
		                	}
		                 else
		                 {
		                	 subgroupsource.url='/admin/getsubgroupsbygroup/'+groupItem.value;
		                     var dataAdapter = new $.jqx.dataAdapter(subgroupsource);
		                     $("#subGroupDropDown").jqxDropDownList({source:dataAdapter, disabled: false }); 
							 $("#subGroupDropDown").on('bindingComplete', function (event) {
								 					
							    var items = $("#subGroupDropDown").jqxDropDownList('getItems');
							    
							    var allExists = false;
							
							    $.each(items, function(index, item) {
							        if (item.label === 'ALL') {
							            allExists = true;
							            return false;
							        }
							    });
							
							    if (!allExists) {
							          if (sovValues.indexOf(groupItem.value) === -1) 
							          	$("#subGroupDropDown").jqxDropDownList('addItem', { label: 'ALL', value: 0 });
							    }
							  });
		                 }
	              }
	          });
	            $("#subGroupDropDown").on('bindingComplete', function (event) {
				 const groupWithFactor = ["25", "26", "27","28", "29", "30", "31"];
				  if (event.args) {
				    
	                  if(groupWithFactor.includes($("#groupDropDown").val()))
				      { 
						  $("#subGroupDropDown").jqxDropDownList('removeAt', 4 ); 
						  $("#subGroupDropDown").jqxDropDownList('removeAt', 3 ); 
						  $("#subGroupDropDown").jqxDropDownList('removeAt', 2 ); 
						  $("#subGroupDropDown").jqxDropDownList('removeAt', 1 ); 
						  $("#subGroupDropDown").jqxDropDownList('removeAt', 0 ); 
					  } 
				 }
			  });
			 subgroupsource =
		      {
		          datatype: "json",
		          datafields: [
		              { name: 'idSubGroup' },
		              { name: 'description' }
		          ],
		          url: '',
		          async: true
		      };
			   var dataAdapter = new $.jqx.dataAdapter(subgroupsource);
			$("#subGroupDropDown").jqxDropDownList({ source: dataAdapter,disabled: true, displayMember: "description", valueMember: "idSubGroup", theme: 'dark' , width: '100%', height: 30,dropDownHeight: 450});
			$("#subGroupDropDown").on('select', function (event) {
				currentPageFilter=0;
	            if (event.args) {
	               subGroupDropDown = event.args.item;
	               if (groupItem.value==0)
	            	{
						fetchNumberOfTotalPages('/admin/gettotalpagesforallnewsbygroupidandsubgroupid/'+subGroupDropDown.label+'/0/50').then(function(totalPages) {
							totalPageFilter =totalPages;
						  })
						  .catch(function(error) {
						    // Handle errors
						    console.error('Error:', error);
						  });
						
	            	   filteredgridsource.url='/admin/findallnewsbygroupidandsubgroupid/'+subGroupDropDown.label+'/0/50';
		               var filteredDataAdapter = new $.jqx.dataAdapter(filteredgridsource);
		               $('#grid_filtered').jqxGrid({source:filteredDataAdapter,  groups: ['generationDateDate']});
	            	} 
	            	
	               else
	               {   var totalUrl='';
	                   var gridUrl='';
					   if(subGroupDropDown.value!=0)
					   {
						   totalUrl='/admin/gettotalpagesbygroupidandsubgroupid/'+groupItem.value+'/'+subGroupDropDown.value+'/0/50';
						   gridUrl='/admin/findnewsbygroupidandsubgroupid/'+groupItem.value+'/'+subGroupDropDown.value+'/0/50';
						}
						else
						{
						 totalUrl='/admin/gettotalpagesbygroupidandsubgroupid/'+groupItem.value+'/'+subGroupDropDown.value+'/0/50';
						 gridUrl='/admin/findnewsbygroupidandsubgroupid/'+groupItem.value+'/0/50';
						}   
					fetchNumberOfTotalPages(totalUrl).then(function(totalPages) {
							totalPageFilter =totalPages;
						
						  })
						  .catch(function(error) {
						    // Handle errors
						    console.error('Error:', error);
						  });
					   
		           filteredgridsource.url=gridUrl;
	               var filteredDataAdapter = new $.jqx.dataAdapter(filteredgridsource);
	               $('#grid_filtered').jqxGrid({source:filteredDataAdapter,  groups: ['generationDateDate']});
	   
	          /*    fetchDataAndTotalPages(gridUrl).then(function(result) {
						    if (result) {
						        // Get the total pages and set the totalPageFilter
						        totalPageFilter = result.totalPages;
						
						        // Create the data adapter for the grid using the fetched data
						        var filteredgridsource = {
						            localdata: result.data,
						        };
						
						        var filteredDataAdapter = new $.jqx.dataAdapter(filteredgridsource);
						        $('#grid_filtered').jqxGrid({
						            source: filteredDataAdapter,
						            groups: ['generationDateDate']
						        });
						    }
						});*/
	               }
	            }
	        });
 
      filteredgridsource =
      {
          datatype: "json",
          datafields: [
        	  { name: 'template', type: 'string' },
        	  { name: 'isBold', type: 'string' },  
        	  { name: 'generationDateDate', type: 'date' },  
          ],
          async: true,
          url: ''
      };
     
      var filteredDataAdapter = new $.jqx.dataAdapter(filteredgridsource, {
          downloadComplete: function (data, status, xhr) { },
          loadComplete: function (data) { },
          loadError: function (xhr, status, error) { }
      });
      var cellclassname = function (row, column, value, data) {
          var isBold = $("#grid_filtered").jqxGrid('getcellvalue', row, "isBold");
          if (isBold=="true") {
              return "red";
          }
      }
     
      // initialize jqxGrid
  var pagerrender = function () {
	 			var theme;
                var element = $("<div style='margin-right: 10px; margin-top: 11px; width: 100%; height: 100%;'></div>");
                var datainfo = $("#grid_filtered").jqxGrid('getdatainformation');
                var paginginfo = datainfo.paginginformation;
  				var label = $("<div style='font-size: 11px; margin: 2px 3px; margin-top:-5px; font-weight: bold; float: right;'></div>");
                //label.text("1-" + paginginfo.pagesize + ' of ' + datainfo.rowscount);
				label.text("Show More");
                var leftButton = $("<div style='padding: 0px; float: right;'><div ><i class='fa-regular fa-square-caret-left'></i></div></div>");
                leftButton.find('div').addClass('btn-style');
               // leftButton.jqxButton({ theme: theme });
                var rightButton = $("<div style='padding: 0px; margin: 0px 3px; float: right;'><div ><i class='fa-regular fa-square-caret-right'></i></div></div>");
                rightButton.find('div').addClass('btn-style');
               // rightButton.jqxButton({ theme: theme });

                rightButton.appendTo(element);
                leftButton.appendTo(element);
                label.appendTo(element);

                self.label = label;
                // update buttons states.
                var handleStates = function (event, button, className, add) {
                    button.on(event, function () {
                        if (add == true) {
                            button.find('div').addClass(className);
                        }
                        else button.find('div').removeClass(className);
                    });
                }
                if (theme != '') {
                    handleStates('mousedown', rightButton, 'jqx-icon-arrow-right-selected-' + theme, true);
                    handleStates('mouseup', rightButton, 'jqx-icon-arrow-right-selected-' + theme, false);
                    handleStates('mousedown', leftButton, 'jqx-icon-arrow-left-selected-' + theme, true);
                    handleStates('mouseup', leftButton, 'jqx-icon-arrow-left-selected-' + theme, false);
                    handleStates('mouseenter', rightButton, 'jqx-icon-arrow-right-hover-' + theme, true);
                    handleStates('mouseleave', rightButton, 'jqx-icon-arrow-right-hover-' + theme, false);
                    handleStates('mouseenter', leftButton, 'jqx-icon-arrow-left-hover-' + theme, true);
                    handleStates('mouseleave', leftButton, 'jqx-icon-arrow-left-hover-' + theme, false);
                }
                rightButton.click(function () {
					
					  currentPageFilter = rightClicked(currentPageFilter,totalPageFilter);				
					  if (groupItem.value==0)
	            	 	 filteredgridsource.url='/admin/findallnewsbygroupidandsubgroupid/'+subGroupDropDown.label+'/'+currentPageFilter+'/50';
				    	else if(subGroupDropDown.value==0)
				    	 filteredgridsource.url='/admin/findnewsbygroupidandsubgroupid/'+groupItem.value+'/'+currentPageFilter+'/50';
				    	   else 
				    	 filteredgridsource.url='/admin/findnewsbygroupidandsubgroupid/'+groupItem.value+'/'+subGroupDropDown.value+'/'+currentPageFilter+'/50';
				    	    
				     var filteredDataAdapter = new $.jqx.dataAdapter(filteredgridsource);
				          $("#grid_filtered").jqxGrid({source:filteredDataAdapter,
				        	  groups:['generationDateDate']
				        	  });
					
                    $("#grid_filtered").jqxGrid('gotonextpage');
                     let div = document.getElementById("grid_filtered");
					 div.scrollIntoView(true);
                });
                leftButton.click(function () {
					
					  currentPageFilter = leftClicked(currentPageFilter,totalPageFilter);				
					  if (groupItem.value==0)
	            	 	 filteredgridsource.url='/admin/findallnewsbygroupidandsubgroupid/'+subGroupDropDown.label+'/'+currentPageFilter+'/50';
				    	else if(subGroupDropDown.value==0)
				    	 filteredgridsource.url='/admin/findnewsbygroupidandsubgroupid/'+groupItem.value+'/'+currentPageFilter+'/50';
				    	else 
				    	 filteredgridsource.url='/admin/findnewsbygroupidandsubgroupid/'+groupItem.value+'/'+subGroupDropDown.value+'/'+currentPageFilter+'/50';
				    	    
				     var filteredDataAdapter = new $.jqx.dataAdapter(filteredgridsource);
				          $("#grid_filtered").jqxGrid({source:filteredDataAdapter,
				        	  groups:['generationDateDate']
				        	  });
					
                    $("#grid_filtered").jqxGrid('gotoprevpage');
                     let div = document.getElementById("grid_filtered");
					 div.scrollIntoView(true);
                });
                return element;
            };
      $("#grid_filtered").jqxGrid(
    	      {
    	          width: '100%',
    	          source: filteredDataAdapter,     
 				  height:602,           
    	          columnsresize: true,
    	          pageable: true,
    	          selectionmode: 'none',
    	          columnsheight: 30,
    	          pagesize: 50,
	   			 // pagesizeoptions: ['15', '50', '100'],
          		  autoheight: true,
    	          altrows: true,
    	          autorowheight: true,
    	          showgroupsheader: false,
    	          groupable: true,
 				  pagerrenderer: pagerrender,
    	          groupsexpandedbydefault: true,
    	          columns: [
    	           { text: 'Date', datafield: 'generationDateDate', hidden: true,  editable:false, cellsformat: 'dd-MMM-yyyy',filtertype: 'date' }, 
    	           { text: 'News', datafield: 'template', width: '96%',   cellclassname: cellclassname,
    	        	   createfilterwidget: function (column, columnElement, widget) {
    	        	        widget.jqxInput({ width: '96%', height: 27, placeHolder: "Search" });
    	        	      }
    	           },
    	           { text: '', datafield: 'isBold', hidden: true  },
    	               { text: '',editable:false, datafield: 'copy',width:'2.5%', filterable: false ,cellsrenderer: function (row) {
   	    	  return "<div class=\"copy-text\"><button onclick='Copy(\"#grid_filtered\"," + row + ")'><i class=\"fa fa-clone\" aria-hidden=\"true\"></i></button></div>";
				}
				}
    	           ],
    	      groups: ['generationDateDate']
    	         
    	      });
    	$("#grid_filtered").on("pagechanged", function (event) 
		{
		   $("#grid_filtered").jqxGrid('expandallgroups');
		});          
      
           
  });

  function fetchTotalPagesNumber() {
	    fetchNumberOfTotalPages('/admin/gettotalpages/0/50/0/false').then(function(totalPages) {
							totalPageAll =totalPages;
						  })
						  .catch(function(error) {
						   console.error('Error:', error);
						  });
	}
	
	async function fetchDataAndTotalPages(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function(responseData) {
         
            return {
                totalPages: responseData.totalPages,
                data: responseData.content
            };
        })
        .catch(function(error) {
            console.error('Error:', error);
            return null;
        });
}

	  function Copy(gridId,row) {
	     var copyData = $(gridId).jqxGrid('getrowdata', row).template;
			 copyToClipboard(copyData);
    }
     function copyToClipboard(text) {
    var textarea = $("<textarea>");
    textarea.val(text);
    $("body").append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    //alert("Text copied to clipboard!");
}