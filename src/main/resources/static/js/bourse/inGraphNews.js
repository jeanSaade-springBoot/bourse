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
	 						delete filteredgridsource.url;
    	    	        	 filteredgridsource.localdata=data;
	    	    	         filteredDataAdapter = new $.jqx.dataAdapter(filteredgridsource);
	    	    	       
						 $("#grid_filtered").jqxGrid(
						    	      {
						    	       	  theme:'dark',
						    	          width: '100%',
						    	          source: filteredDataAdapter,                
						    	          columnsresize: true,
						    	          pageable: false,
						    	          selectionmode: 'none',
						    	          columnsheight: 30,
						    	          pagesize: 10,
						    	          autoheight: true,
						    	          altrows: true,
						    	          autorowheight: true,
						    	          showgroupsheader: false,
						    	          groupable: true,
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
    	      
	  					},
    	    	        error: function (e) {
    	    	        	
    						  console.log("ERROR : ", e);
    	
    	    	        }
    	    	    });
  
    	      }
function getSelectedFields(checkedItemValues)	  
{ var fields=[];

	for (let i = 0; i < checkedItemValues.length; i++) {
		var value = itemValue[checkedItemValues[i]].description;
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