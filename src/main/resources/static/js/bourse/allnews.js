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
    $("#grid").jqxGrid(
      {
          width: '100%',
		  height:670,
          source: dataAdapter,                
         columnsresize: false,
         pageable: true,
         selectionmode: 'none',
         pagesize: 15,
	     pagesizeoptions: ['15', '50', '100'],
           autoheight: true,
		  columnsheight: 30,
		  autorowheight: true,
          altrows: true,
          showgroupsheader: false,
          groupable: true,
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
    	          pagesize: 15,
	   			  pagesizeoptions: ['15', '50', '100'],
           autoheight: true,
    	          altrows: true,
    	          autorowheight: true,
    	          showgroupsheader: false,
    	          groupable: true,
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

	