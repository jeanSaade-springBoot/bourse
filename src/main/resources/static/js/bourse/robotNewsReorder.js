$(window).on('load', function(){
	  $('#overlay').fadeOut();
	  $('#nav-column-master').show();
  });
  function addText(event,id) {
	    var targ = event.target || event.srcElement;
	    document.getElementById(id).value += targ.textContent || targ.innerText;
	}
  $(document).ready(function () {
	   $('#container-wrapper').show();
	   
	   $("#jqxNotificationRobots").jqxNotification({ width: "90%",appendContainer: "#notifcationContainerRobot",  opacity: 0.9,
           autoOpen: false, animationOpenDelay: 800, autoClose:true , autoCloseDelay: 3000,  template: "success"
       }); 
	   
	  $("#viewall").jqxButton({  theme:'dark', width: 110, height: 35,template: "primary" });
	  $("#viewall").css("display","block");
	  $("#viewall").click(function () {
			popupWindow('/bourse/allnews', 'Liberty Options - View All News', window, 1300, 600);
		  });
	  
	  $("#save").jqxButton({  theme:'dark', width: 110, height: 35,template: "success"});
	  $("#save").click(function () {
	  // var data = getListOrder();
	   var data = {"listid":getListOrder()[0],
			       "newsOrderList":getListOrder()[1]};
		 
       	  $.ajax({
  	        type: "POST",
  	        contentType: "application/json",
  	        url: "/admin/updatenewsorder",
  	        data: JSON.stringify(data),
  	        dataType: 'json',
  	        async:true,
  	        cache: false,
  	        timeout: 600000,
  	        success: function (data) {
  	            source.url='/admin/getnewsorder';
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

var source =
 {
     dataType: "json",
     dataFields: fields,
     url:'/admin/getnewsorder'
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
	            data.push(item);
	            listOfId.push(ids);
	          
	       }
	       return [listOfId,data];
	  } 
