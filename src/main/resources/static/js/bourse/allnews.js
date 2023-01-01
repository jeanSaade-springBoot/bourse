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
	            	  data.push({id: 6, description: 'ALL', assetId: '1', groupCode: ''});
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
	                 if (groupItem.value==6)
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
	               if (groupItem.value==6)
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
	  $("#IsImportant").jqxCheckBox({ width: 200, height: 25});  
      gridsource =
      {
          datatype: "json",
          datafields: [
        	  { name: 'template', type: 'string' },
        	  { name: 'isBold', type: 'string' },  
        	  { name: 'generationDateDate', type: 'date' },  
          ],
          async: true,
          url: '/admin/findnewsformateddate'
      };
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
      var dataAdapter = new $.jqx.dataAdapter(gridsource, {
          downloadComplete: function (data, status, xhr) { },
          loadComplete: function (data) { },
          loadError: function (xhr, status, error) { }
      });
      var filteredDataAdapter = new $.jqx.dataAdapter(filteredgridsource, {
          downloadComplete: function (data, status, xhr) { },
          loadComplete: function (data) { },
          loadError: function (xhr, status, error) { }
      });
      var cellclassname = function (row, column, value, data) {
          var isBold = $('#grid').jqxGrid('getcellvalue', row, "isBold");
          if (isBold=="true") {
              return "red";
          }
      }
      $('#IsImportant').on('change', function (event) {
    	  $('#grid').jqxGrid('showloadelement');
         
    	  var checked = event.args.checked;
    	  if (checked)
    	    gridsource.url='/admin/getnewsbyimportance/'+checked;
    	  else
    	    gridsource.url='/admin/findnewsformateddate';
    	  
          var dataAdapter = new $.jqx.dataAdapter(gridsource);
          $('#grid').jqxGrid({source:dataAdapter,
        	  groups: ['generationDateDate']}
          );
          
      });
      // initialize jqxGrid
 var pagerrenderer = function () {
	 			var theme;
                var element = $("<div style='margin-right: 10px; margin-top: 11px; width: 100%; height: 100%;'></div>");
                var datainfo = $("#grid").jqxGrid('getdatainformation');
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
                    $("#grid").jqxGrid('gotonextpage');
                });
                leftButton.click(function () {
                    $("#grid").jqxGrid('gotoprevpage');
                });
                return element;
            };

    $("#grid").jqxGrid(
      {
          width: '100%',
		  height:670,
          source: dataAdapter,                
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
  		  pagerrenderer: pagerrenderer,
          groupsexpandedbydefault: true,
          columns: [
           { text: 'Date', datafield: 'generationDateDate', hidden: true,  editable:false, cellsformat: 'dd-MMM-yyyy',filtertype: 'date' }, 
           { text: 'All News', datafield: 'template', width: '100%',   cellclassname: cellclassname,
        	   createfilterwidget: function (column, columnElement, widget) {
        	        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Search" });
        	      }
           },
           { text: '', datafield: 'isBold', hidden: true  },
           ],
      groups: ['generationDateDate']
         
      });
      $("#grid").on("pagechanged", function (event) 
		{
		   $("#grid").jqxGrid('expandallgroups');
		});          
      
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
 				  pagerrenderer: pagerrenderer,
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

	