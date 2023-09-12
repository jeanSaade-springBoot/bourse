  var totalPageFilter = 0;
  var currentPageFilter = 0;
  
function inGraphNews(selectedGraphs){
	
  var filteredgridsource =
      {
          datatype: "json",
          datafields: [
        	  { name: 'template', type: 'string' },
        	  { name: 'isBold', type: 'string' },  
        	  { name: 'generationDateDate', type: 'date' },  
          ],
          localdata: ''
      };
 var cellclassname = function (row, column, value, data) {
          var isBold = $('#grid_filtered').jqxGrid('getcellvalue', row, "isBold");
          if (isBold=="true") {
              return "red-row";
          }
      }  
 
      json = {"selectedGraphs":selectedGraphs,
      'pageNo':currentPageFilter,
      'pageSize':'50'
      }
      $.ajax({
    	    	        type: "POST",
    	    	        contentType: "application/json",
    	    	        url: "/bourse/findselectedgraphnews",
    	    	        data: JSON.stringify(json),
    	    	        dataType: 'json',
    	    	        async: true,
    	    	        cache: false,
    	    	        timeout: 600000,
    	    	        success: function (data) {
							
							totalPageFilter =data.totalPages-1;

	 						delete filteredgridsource.url;
    	    	        	 filteredgridsource.localdata=data.content;
	    	    	         filteredDataAdapter = new $.jqx.dataAdapter(filteredgridsource);
	    	    	         
	    var pagerrender = function () {
	 			var theme;
                var element = $("<div style='margin-right: 10px; margin-top: 11px; width: 100%; height: 100%;'></div>");
                var datainfo = $("#grid_filtered").jqxGrid('getdatainformation');
                var paginginfo = datainfo.paginginformation;
  				var label = $("<div style='font-size: 11px; margin: 2px 3px; margin-top:-2px; font-weight: bold; float: right;'></div>");
                //label.text("1-" + paginginfo.pagesize + ' of ' + datainfo.rowscount);
				label.text("Show More");
                var leftButton = $("<div style='padding: 0px;margin: 0px 1px; float: right;'><div ><i class='fa-regular fa-square-caret-left'></i></div></div>");
                leftButton.find('div').addClass('btn-style');
               // leftButton.jqxButton({ theme: theme });
                var rightButton = $("<div style='padding: 0px; margin: 0px 5px; float: right;'><div ><i class='fa-regular fa-square-caret-right'></i></div></div>");
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
					 	 json = {"selectedGraphs":selectedGraphs,
					      'pageNo':currentPageFilter,
					      'pageSize':'50'
					      }
					      $.ajax({
    	    	        type: "POST",
    	    	        contentType: "application/json",
    	    	        url: "/bourse/findselectedgraphnews",
    	    	        data: JSON.stringify(json),
    	    	        dataType: 'json',
    	    	        async: true,
    	    	        cache: false,
    	    	        timeout: 600000,
    	    	        success: function (data) {
							
							totalPageFilter =data.totalPages-1;

	 						delete filteredgridsource.url;
    	    	        	 filteredgridsource.localdata=data.content;
	    	    	         filteredDataAdapter = new $.jqx.dataAdapter(filteredgridsource);
				    	     filteredDataAdapter = new $.jqx.dataAdapter(filteredgridsource);
				          $("#grid_filtered").jqxGrid({source:filteredDataAdapter,
				        	  groups:['generationDateDate']
				        	  });
					},
    	    	        error: function (e) {
    	    	        	
    						  console.log("ERROR : ", e);
    	
    	    	        }
    	    	    });
                    $("#grid_filtered").jqxGrid('gotonextpage');
                     let div = document.getElementById("grid_filtered");
					 div.scrollIntoView(true);
                });
                leftButton.click(function () {
					
					 currentPageFilter = leftClicked(currentPageFilter,totalPageFilter);				
					
					 json = {"selectedGraphs":selectedGraphs,
					      'pageNo':currentPageFilter,
					      'pageSize':'50'
					      }
					      $.ajax({
    	    	        type: "POST",
    	    	        contentType: "application/json",
    	    	        url: "/bourse/findselectedgraphnews",
    	    	        data: JSON.stringify(json),
    	    	        dataType: 'json',
    	    	        async: true,
    	    	        cache: false,
    	    	        timeout: 600000,
    	    	        success: function (data) {
							
							totalPageFilter =data.totalPages-1;

	 						delete filteredgridsource.url;
    	    	        	 filteredgridsource.localdata=data.content;
	    	    	         filteredDataAdapter = new $.jqx.dataAdapter(filteredgridsource);
				    	     filteredDataAdapter = new $.jqx.dataAdapter(filteredgridsource);
				          $("#grid_filtered").jqxGrid({source:filteredDataAdapter,
				        	  groups:['generationDateDate']
				        	  });
					},
    	    	        error: function (e) {
    	    	        	
    						  console.log("ERROR : ", e);
    	
    	    	        }
    	    	    });
					
                    $("#grid_filtered").jqxGrid('gotoprevpage');
                     let div = document.getElementById("grid_filtered");
					 div.scrollIntoView(true);
                });
                return element;
            };
						 $("#grid_filtered").jqxGrid(
						    	      {
						    	       	  theme:'dark',
						    	          width: '100%',
						    	          source: filteredDataAdapter,                
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
						    	           { text: 'News', datafield: 'template', width: '100%',   cellclassname: cellclassname,
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
	  					},
    	    	        error: function (e) {
    	    	        	
    						  console.log("ERROR : ", e);
    	
    	    	        }
    	    	    });
  
    	      }
function getSelectedFields(checkedItemValues,item)	  
{ var fields=[];

	for (let i = 0; i < checkedItemValues.length; i++) {
		var value = item[checkedItemValues[i]].description;
		fields.push(value);	
		if (value.includes('/'))
		{   var country = value.split('-')[0];
			var factor = value.split('-')[1];
		    fields.push(country+'-'+factor.split('/')[0]);	
 			fields.push(country+'-'+factor.split('/')[1]);	
		}
		if (value.split('-').length==3)
		{   var firstCountry = value.split('-')[0];
			var secondCountry = value.split('-')[1];
		    fields.push(CountryFullName(firstCountry)+'-'+ value.split('-')[2]);	
 			fields.push(CountryFullName(secondCountry)+'-'+ value.split('-')[2]);	
		}
	}
	return fields;
}    
function CountryFullName(country)
{
  var FullName='';	
	switch(country) {
	  
	 case 'USA': 
	   FullName='USA'
	        break;
	 case 'GER': 
	   FullName='GERMANY'
	        break;
	 case 'FRA': 
		   FullName='FRANCE'
		    break;
	 case 'UK': 
		   FullName='UK'
		    break;
	 case 'ITA': 
		   FullName='ITALY'
		    break;
	 case 'SPN': 
		   FullName='SPAIN'
		    break;
	}
return FullName;
}	

function allItemsSelected(Items)
{
  var selectedItems=[];	
	switch(Items) {
	 case 'all30yr': 
	   selectedItems= ['#jqxCheckBoxUSA-30', '#jqxCheckBoxGermany-30', '#jqxCheckBoxFrance-30', '#jqxCheckBoxUk-30', '#jqxCheckBoxItaly-30', '#jqxCheckBoxSpain-30']
	        break;
	 case 'all10yr': 
	   selectedItems= ['#jqxCheckBoxUSA-10', '#jqxCheckBoxGermany-10', '#jqxCheckBoxFrance-10', '#jqxCheckBoxUk-10', '#jqxCheckBoxItaly-10', '#jqxCheckBoxSpain-10']
	        break;
	 case 'all5yr': 
		   selectedItems= ['#jqxCheckBoxUSA-5', '#jqxCheckBoxGermany-5', '#jqxCheckBoxFrance-5', '#jqxCheckBoxUk-5', '#jqxCheckBoxItaly-5', '#jqxCheckBoxSpain-5']
	    break;
	 case 'all2yr': 
		   selectedItems= ['#jqxCheckBoxUSA-2', '#jqxCheckBoxGermany-2', '#jqxCheckBoxFrance-2', '#jqxCheckBoxUk-2', '#jqxCheckBoxItaly-2', '#jqxCheckBoxSpain-2']
	    break;
 case 'all10over30': 
	   selectedItems= ['#jqxCheckBoxUSA-10over30', '#jqxCheckBoxGermany-10over30', '#jqxCheckBoxFrance-10over30', '#jqxCheckBoxUk-10over30','#jqxCheckBoxItaly-10over30', '#jqxCheckBoxSpain-10over30']
	        break;
	 case 'all5over30': 
	    selectedItems= ['#jqxCheckBoxUSA-5over30', '#jqxCheckBoxGermany-5over30', '#jqxCheckBoxFrance-5over30', '#jqxCheckBoxUk-5over30','#jqxCheckBoxItaly-5over30', '#jqxCheckBoxSpain-5over30']
	        break;
	 case 'all5over10': 
		 selectedItems= ['#jqxCheckBoxUSA-5over10', '#jqxCheckBoxGermany-5over10', '#jqxCheckBoxFrance-5over10', '#jqxCheckBoxUk-5over10','#jqxCheckBoxItaly-5over10', '#jqxCheckBoxSpain-5over10']
	    break;
	 case 'all2over10': 
		  selectedItems= ['#jqxCheckBoxUSA-2over10', '#jqxCheckBoxGermany-2over10', '#jqxCheckBoxFrance-2over10', '#jqxCheckBoxUk-2over10','#jqxCheckBoxItaly-2over10', '#jqxCheckBoxSpain-2over10']
	   break;
	case 'all2over5': 
		  selectedItems= ['#jqxCheckBoxUSA-2over5', '#jqxCheckBoxGermany-2over5', '#jqxCheckBoxFrance-2over5', '#jqxCheckBoxUk-2over5','#jqxCheckBoxItaly-2over5', '#jqxCheckBoxSpain-2over5']
	   break;
	}
return selectedItems;
} 

function rightClicked(currentPage, totalPage){
	
   if (currentPage < totalPage) 
      currentPage++;
      else if(currentPage == totalPage)
	   currentPage = 0;
						   
	return currentPage; 
}

function leftClicked(currentPage, totalPage){
	
    if (currentPage == 0 ) 
        currentPage = totalPage;
      else if(currentPage > 0)
	   currentPage--;
						   
	return currentPage; 
}
