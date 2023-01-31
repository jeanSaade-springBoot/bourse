  var groupItem;
  var subgroupsource;
  var familyItem;
  var groupsource;
  var gridsource;
  $(window).on('load', function(){
	  $('#overlay').fadeOut();
	  $('#nav-column-master').show();
  });
  function addText(event) {
	    var targ = event.target || event.srcElement;
	    document.getElementById("TemplateText").value += targ.textContent || targ.innerText;
	}
  $(document).ready(function () {
	  
		  $.ajax({
	        contentType: "application/json",
	        url: "/admin/getassetnewsorder",
	        dataType: 'json',
	        async:true,
	        cache: false,
	        timeout: 600000,
	        success: function (data) {
				
				for (let i = 0; i < data.length; i++) {
					if(i==0)
	        	  	 {   
						  var card=" <div id='IsImportant"+i+"' class='t-style' style='color: white; margin-top:0.5rem; line-height: 25px;position: absolute;    z-index: 100;    right: 0;'> Show only important news</div>"
						        +"<div class='card'>"
								+"	<div class='card-header' id='headingOne'>"
								+"	  <h5 class='mb-0'>"
								+"		<button class='btn btn-link' data-toggle='collapse' data-target='#collapse"+i+"' aria-expanded='true'"
								+" aria-controls='collapse"+i+"'>"
								+   data[i].assetName
								+"		</button>"
								+"	  </h5>"
								+"	</div>"
								+"	<div id='collapse"+i+"' class='collapse show' aria-labelledby='headingOne' data-parent='#assetGrid'>"
								+"	  <div class=''>"
								+"		  <div id='grid"+i+"'></div>"
								+"	  </div>"
								+"	</div>"
								+" </div>" ;
						   $("#assetGrid").append(card);
					   } 
					   else 
			    	   {   
						  var card=" <div id='IsImportant"+i+"' class='t-style' style='color: white; margin-top:0.5rem; line-height: 25px; position: absolute;    z-index: 100;    right: 0;'> Show only important news</div>"
						        +"<div class='card'>"
								+"	<div class='card-header' id='headingOne' style='border-radius:0'>"
								+"	  <h5 class='mb-0'>"
								+"		<button class='btn btn-link' data-toggle='collapse' data-target='#collapse"+i+"' aria-expanded='false'"
								+" aria-controls='collapse"+i+"'>"
								+   data[i].assetName
								+"		</button>"
								+"	  </h5>"
								+"	</div>"
								+"	<div id='collapse"+i+"' class='collapse show' aria-labelledby='headingOne' data-parent='#assetGrid'>"
								+"	  <div class=''>"
								+"		  <div id='grid"+i+"'></div>"
								+"	  </div>"
								+"	</div>"
								+" </div>" ;
						   $("#assetGrid").append(card);
					   } 
				
			    }
				 
				  gridsource0 =
			      {
			          datatype: "json",
			          datafields: [
			        	  { name: 'template', type: 'string' },
			        	  { name: 'isBold', type: 'string' },  
			        	  { name: 'generationDateDate', type: 'date' },  
			          ],
			          async: true,
			          url: '/admin/findnewsformateddate/'+data[0].assetId
			      };	
			       gridsource1 =
			      {
			          datatype: "json",
			          datafields: [
			        	  { name: 'template', type: 'string' },
			        	  { name: 'isBold', type: 'string' },  
			        	  { name: 'generationDateDate', type: 'date' },  
			          ],
			          async: true,
			          url: '/admin/findnewsformateddate/'+data[1].assetId
			      };	      
			      
			  var dataAdapter0 = new $.jqx.dataAdapter(gridsource0, {
		          downloadComplete: function (data, status, xhr) { },
		          loadComplete: function (data) { },
		          loadError: function (xhr, status, error) { }
		      });   
		        var dataAdapter1 = new $.jqx.dataAdapter(gridsource1, {
		          downloadComplete: function (data, status, xhr) { },
		          loadComplete: function (data) { },
		          loadError: function (xhr, status, error) { }
		      });  
					
	             $("#IsImportant0").jqxCheckBox({ width: 200, height: 25});  	
	             $("#IsImportant1").jqxCheckBox({ width: 200, height: 25});  	
				 
				var pagerrenderer0 = function () {
	 			var theme;
                var element = $("<div style='margin-right: 10px; margin-top: 11px; width: 100%; height: 100%;'></div>");
                var datainfo = $("#grid0").jqxGrid('getdatainformation');
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
                    $("#grid0").jqxGrid('gotonextpage');
                });
                leftButton.click(function () {
                    $("#grid0").jqxGrid('gotoprevpage');
                });
                return element;
            };
	var pagerrenderer1 = function () {
	 			var theme;
                var element = $("<div style='margin-right: 10px; margin-top: 11px; width: 100%; height: 100%;'></div>");
                var datainfo = $("#grid1").jqxGrid('getdatainformation');
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
                    $("#grid1").jqxGrid('gotonextpage');
                });
                leftButton.click(function () {
                    $("#grid1").jqxGrid('gotoprevpage');
                });
                return element;
            };
            
             var cellclassname0 = function (row, column, value, data) {
	          var isBold = $("#grid0").jqxGrid('getcellvalue', row, "isBold");
	          if (isBold=="true") {
	              return "red";
	          }
	          }
		      var cellclassname1 = function (row, column, value, data) {
	          var isBold = $("#grid1").jqxGrid('getcellvalue', row, "isBold");
	          if (isBold=="true") {
	              return "red";
	          }
      		  }
			    $("#grid0").jqxGrid(
			      {
			          width: '100%',
					  height:670,
			          source: dataAdapter0,                
			          columnsresize: false,
			          pageable: true,
			          selectionmode: 'none',
			          pagesize: 200,
				      //pagesizeoptions: ['15', '50', '100'],
			          autoheight: true,
					  columnsheight: 30,
					  autorowheight: true,
			          altrows: true,
			          showgroupsheader: false,
			          groupable: true,
			  		  pagerrenderer: pagerrenderer0,
			          groupsexpandedbydefault: true,
			          columns: [
			           { text: 'Date', datafield: 'generationDateDate', hidden: true,  editable:false, cellsformat: 'dd-MMM-yyyy',filtertype: 'date' }, 
			           { text: 'All News', datafield: 'template', width: '100%',   cellclassname: cellclassname0,
			        	   createfilterwidget: function (column, columnElement, widget) {
			        	        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Search" });
			        	      }
			           },
			           { text: '', datafield: 'isBold', hidden: true  },
			           ],
			      groups: ['generationDateDate']
			         
			      });
			      $("#grid1").jqxGrid(
			      {
			          width: '100%',
					  height:670,
			          source: dataAdapter1,                
			          columnsresize: false,
			          pageable: true,
			          selectionmode: 'none',
			          pagesize: 200,
				      //pagesizeoptions: ['15', '50', '100'],
			          autoheight: true,
					  columnsheight: 30,
					  autorowheight: true,
			          altrows: true,
			          showgroupsheader: false,
			          groupable: true,
			  		  pagerrenderer: pagerrenderer1,
			          groupsexpandedbydefault: true,
			          columns: [
			           { text: 'Date', datafield: 'generationDateDate', hidden: true,  editable:false, cellsformat: 'dd-MMM-yyyy',filtertype: 'date' }, 
			           { text: 'All News', datafield: 'template', width: '100%',   cellclassname: cellclassname1,
			        	   createfilterwidget: function (column, columnElement, widget) {
			        	        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Search" });
			        	      }
			           },
			           { text: '', datafield: 'isBold', hidden: true  },
			           ],
			      groups: ['generationDateDate']
			         
			      });
			    
				 $("#grid0").on("pagechanged", function (event) 
				 {
				   $("#grid0").jqxGrid('expandallgroups');
				 });   
				 $("#grid1").on("pagechanged", function (event) 
				 {
				   $("#grid1").jqxGrid('expandallgroups');
				 });  
				     
				     
			      $("#IsImportant0").on('change', function (event) {
				    	  $("#grid0").jqxGrid('showloadelement');
				         
				    	  var checked = event.args.checked;
				    	  if (checked)
				    	    gridsource0.url='/admin/getnewsbyimportance/'+checked+'/'+data[0].assetId;
				    	  else
				    	    gridsource0.url='/admin/findnewsformateddate/'+data[0].assetId;
				    	  
				          var dataAdapter0 = new $.jqx.dataAdapter(gridsource0);
				          $("#grid0").jqxGrid({source:dataAdapter0,
				        	  groups: ['generationDateDate']
				        	  }
				          );
				          
				      });  
				    $("#IsImportant1").on('change', function (event) {
				    	  $("#grid1").jqxGrid('showloadelement');
				         
				    	  var checked = event.args.checked;
				    	  if (checked)
				    	    gridsource1.url='/admin/getnewsbyimportance/'+checked+'/'+data[1].assetId;
				    	  else
				    	    gridsource1.url='/admin/findnewsformateddate/'+data[1].assetId;
				    	  
				          var dataAdapter1 = new $.jqx.dataAdapter(gridsource1);
				          $("#grid1").jqxGrid({source:dataAdapter1,
				        	  groups: ['generationDateDate']
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
		 	$("#FamilyDropDown").jqxDropDownList({ source: dataAdapter , displayMember: "description", valueMember: "id", theme: 'dark' , width: '100%', height: 30});
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
			$("#subGroupDropDown").jqxDropDownList({ source: dataAdapter,disabled: true, displayMember: "description", valueMember: "idSubGroup", theme: 'dark' , width: '100%', height: 30});
			$("#subGroupDropDown").on('select', function (event) {
				
	            if (event.args) {
	               subGroupDropDown = event.args.item;
	               if (groupItem.value==0)
	            	{
	            	   filteredgridsource.url='/admin/findallnewsbygroupidandsubgroupid/'+subGroupDropDown.label;
		               var filteredDataAdapter = new $.jqx.dataAdapter(filteredgridsource);
		               $('#grid_filtered').jqxGrid({source:filteredDataAdapter,  groups: ['generationDateDate']});
	            	} 
	               else
	               { 
		           filteredgridsource.url='/admin/findnewsbygroupidandsubgroupid/'+groupItem.value+'/'+subGroupDropDown.value;
	               var filteredDataAdapter = new $.jqx.dataAdapter(filteredgridsource);
	               $('#grid_filtered').jqxGrid({source:filteredDataAdapter,  groups: ['generationDateDate']});
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
                    $("#grid_filtered").jqxGrid('gotonextpage');
                });
                leftButton.click(function () {
                    $("#grid_filtered").jqxGrid('gotoprevpage');
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
    	          pagesize: 100,
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
    	           { text: 'All News', datafield: 'template', width: '100%',   cellclassname: cellclassname,
    	        	   createfilterwidget: function (column, columnElement, widget) {
    	        	        widget.jqxInput({ width: '99%', height: 27, placeHolder: "Search" });
    	        	      }
    	           },
    	           { text: '', datafield: 'isBold', hidden: true  },
    	           ],
    	      groups: ['generationDateDate']
    	         
    	      });
    	$("#grid_filtered").on("pagechanged", function (event) 
		{
		   $("#grid_filtered").jqxGrid('expandallgroups');
		});          
      
           
  });

  
	