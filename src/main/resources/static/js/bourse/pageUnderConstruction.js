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
	
      gridsource =
      {
          datatype: "json",
          datafields: [
        	  { name: 'template', type: 'string' },
        	  { name: 'isBold', type: 'string' },  
          ],
          async: true,
          url: '/admin/getnews'
      };
     
      var dataAdapter = new $.jqx.dataAdapter(gridsource, {
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
          selectionmode: 'none',
          columnsheight: 30,
          pagesize: 10,
          autoheight: true,
          columns: [
           { text: 'All News', datafield: 'template', width: '100%',   cellclassname: cellclassname,
        	   createfilterwidget: function (column, columnElement, widget) {
        	        widget.jqxInput({ width: '99%', height: 27, placeHolder: "Search" });
        	      }
           },
           { text: '', datafield: 'isBold', hidden: true  },
           ]
         
      });
     
  });
