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
					     var nav="<a class='navigation nav-item nav-link' id='nav-tab-"+i+"'  data-toggle='tab'   href='#nav-"+i+"' role='tab' aria-controls='nav-tab' aria-selected='false'  data-filter="+data[i].assetName+">"+ data[i].assetName+"</a>";
						    $("#nav-tab").append(nav);
						 var content="<div class='tab-pane fade show' id='nav-"+i+"' role='tabpanel' aria-labelledby='nav-all-tab'>"+
						             "<div id='IsImportant"+i+"' class='t-style' style='color: white; margin-top:0.2rem; line-height: 25px;position: absolute;    z-index: 100;    right: 0;'> Show only important news</div>"+
						             "<div id='grid"+i+"'></div></div>";
						     $("#nav-tabContent").append(content);
					
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
				  gridsource0 =
			      {
			          datatype: "json",
			          datafields: [
			        	  { name: 'template', type: 'string' },
			        	  { name: 'isBold', type: 'string' },  
			        	  { name: 'generationDateDate', type: 'date' },  
			          ],
			          async: true,
			          url: '/admin/findnewsformateddate/'+data[0].assetId+'/0/50'
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
			          url: '/admin/findnewsformateddate/'+data[1].assetId+'/0/50'
			      };
			      gridsource2 =
			      {
			          datatype: "json",
			          datafields: [
			        	  { name: 'template', type: 'string' },
			        	  { name: 'isBold', type: 'string' },  
			        	  { name: 'generationDateDate', type: 'date' },  
			          ],
			          async: true,
			          url: '/admin/findnewsformateddate/'+data[2].assetId+'/0/50'
			      };
			      	      	      
			  var dataAdapterall = new $.jqx.dataAdapter(gridsourceall, {
		          downloadComplete: function (data, status, xhr) { },
		          loadComplete: function (data) { },
		          loadError: function (xhr, status, error) { }
		      });       
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
		        var dataAdapter2 = new $.jqx.dataAdapter(gridsource2, {
		          downloadComplete: function (data, status, xhr) { },
		          loadComplete: function (data) { },
		          loadError: function (xhr, status, error) { }
		      });  
				 $("#IsImportantall").jqxCheckBox({ width: 200, height: 25});  		
	             $("#IsImportant0").jqxCheckBox({ width: 200, height: 25});  	
	             $("#IsImportant1").jqxCheckBox({ width: 200, height: 25});  	
				 $("#IsImportant2").jqxCheckBox({ width: 200, height: 25});  	
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
                      currentPage0 = rightClicked(currentPage0,totalPage0);
                            if ($("#IsImportant0").val())
				    	    gridsource0.url='/admin/getnewsbyimportance/'+$("#IsImportant0").val()+'/'+data[0].assetId+'/'+currentPage0+'/50';
				    	  else
				    	    gridsource0.url='/admin/findnewsformateddate/'+currentPage0+'/50';
				    	    
				          var dataAdapter0 = new $.jqx.dataAdapter(gridsource0);
				          $("#grid0").jqxGrid({source:dataAdapter0,
				        	  groups:['generationDateDate']
				        	  });
                    $("#grid0").jqxGrid('gotonextpage');
                     let div = document.getElementById("grid0");
					 div.scrollIntoView(true);
                });
                leftButton.click(function () {
					  currentPage0 = leftClicked(currentPage0,totalPage0);
                            if ($("#IsImportant0").val())
				    	    gridsource0.url='/admin/getnewsbyimportance/'+$("#IsImportant0").val()+'/'+data[0].assetId+'/'+currentPage0+'/50';
				    	  else
				    	    gridsource0.url='/admin/findnewsformateddate/'+currentPage0+'/50';
				    	    
				          var dataAdapter0 = new $.jqx.dataAdapter(gridsource0);
				          $("#grid0").jqxGrid({source:dataAdapter0,
				        	  groups:['generationDateDate']
				        	  });
					
                    $("#grid0").jqxGrid('gotoprevpage');
                     let div = document.getElementById("grid0");
					 div.scrollIntoView(true);
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
                          currentPage1 = rightClicked(currentPage1,totalPage1);
                            if ($("#IsImportant1").val())
				    	    gridsource1.url='/admin/getnewsbyimportance/'+$("#IsImportant1").val()+'/'+data[1].assetId+'/'+currentPage1+'/50';
				    	  else
				    	    gridsource1.url='/admin/findnewsformateddate/'+currentPage1+'/50';
				    	    
				          var dataAdapter1 = new $.jqx.dataAdapter(gridsource1);
				          $("#grid1").jqxGrid({source:dataAdapter1,
				        	  groups:['generationDateDate']
				        	  });
				        	  
                    $("#grid1").jqxGrid('gotonextpage');
                     let div = document.getElementById("grid1");
					 div.scrollIntoView(true);
                });
                leftButton.click(function () {
					
					  currentPage1 = leftClicked(currentPage1,totalPage1);
                            if ($("#IsImportant1").val())
				    	    gridsource1.url='/admin/getnewsbyimportance/'+$("#IsImportant1").val()+'/'+data[1].assetId+'/'+currentPage1+'/50';
				    	  else
				    	    gridsource1.url='/admin/findnewsformateddate/'+currentPage1+'/50';
				    	    
				          var dataAdapter1 = new $.jqx.dataAdapter(gridsource1);
				          $("#grid1").jqxGrid({source:dataAdapter1,
				        	  groups:['generationDateDate']
				        	  });
				        	  
					
                    $("#grid1").jqxGrid('gotoprevpage');
                    let div = document.getElementById("grid1");
					div.scrollIntoView(true);
                });
                return element;
            };
            var pagerrenderer2 = function () {
	 			var theme;
                var element = $("<div style='margin-right: 10px; margin-top: 11px; width: 100%; height: 100%;'></div>");
                var datainfo = $("#grid2").jqxGrid('getdatainformation');
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
                          currentPage2 = rightClicked(currentPage2,totalPage2);
                            if ($("#IsImportant2").val())
				    	    gridsource2.url='/admin/getnewsbyimportance/'+$("#IsImportant2").val()+'/'+data[2].assetId+'/'+currentPage2+'/50';
				    	  else
				    	    gridsource2.url='/admin/findnewsformateddate/'+currentPage2+'/50';
				    	    
				          var dataAdapter2 = new $.jqx.dataAdapter(gridsource2);
				          $("#grid2").jqxGrid({source:dataAdapter2,
				        	  groups:['generationDateDate']
				        	  });
				        	  
                    $("#grid2").jqxGrid('gotonextpage');
                     let div = document.getElementById("grid2");
					 div.scrollIntoView(true);
                });
                leftButton.click(function () {
					
					  currentPage2 = leftClicked(currentPage2,totalPage2);
                            if ($("#IsImportant2").val())
				    	    gridsource2.url='/admin/getnewsbyimportance/'+$("#IsImportant2").val()+'/'+data[2].assetId+'/'+currentPage2+'/50';
				    	  else
				    	    gridsource2.url='/admin/findnewsformateddate/'+currentPage2+'/50';
				    	    
				          var dataAdapter2 = new $.jqx.dataAdapter(gridsource2);
				          $("#grid2").jqxGrid({source:dataAdapter2,
				        	  groups:['generationDateDate']
				        	  });
				        	  
					
                    $("#grid2").jqxGrid('gotoprevpage');
                    let div = document.getElementById("grid2");
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
      		   var cellclassname2 = function (row, column, value, data) {
	          var isBold = $("#grid2").jqxGrid('getcellvalue', row, "isBold");
	          if (isBold=="true") {
	              return "red";
	          }
      		  }
      	var groupsrenderer = function (text, group, expanded) {
			    
				 if (text.includes("AssetId"))
				  {
					  if(group.split("_")[1] ==1)
					   return "<div role='gridcell' style='z-index: 1283; width: 650px;' class='jqx-grid-group-cell jqx-grid-cell-wrap' title=''><div class='jqx-grid-groups-row' style='position: absolute;'><span>	&nbsp; </span><span class='jqx-grid-groups-row-details' style='font-size: .75rem;'>"+'YIELDS & RATES'+"</span></div></div>";
					   else if(group.split("_")[1] == 2) 
						    return "<div role='gridcell' style='z-index: 1283; width: 650px;' class='jqx-grid-group-cell jqx-grid-cell-wrap' title=''><div class='jqx-grid-groups-row' style='position: absolute;'><span>	&nbsp; </span><span class='jqx-grid-groups-row-details' style='font-size: .75rem;'>"+'COMMODITIES'+"</span></div></div>";
						  else if(group.split("_")[1] == 3) 
							  return "<div role='gridcell' style='z-index: 1283; width: 650px;' class='jqx-grid-group-cell jqx-grid-cell-wrap' title=''><div class='jqx-grid-groups-row' style='position: absolute;'><span>	&nbsp; </span><span class='jqx-grid-groups-row-details' style='font-size: .75rem;'>"+'LIQUIDITY'+"</span></div></div>";
							 else if(group.split("_")[1] == 4) 
										  return "<div role='gridcell' style='z-index: 1283; width: 650px;' class='jqx-grid-group-cell jqx-grid-cell-wrap' title=''><div class='jqx-grid-groups-row' style='position: absolute;'><span>	&nbsp; </span><span class='jqx-grid-groups-row-details' style='font-size: .75rem;'>"+'VOLUME'+"</span></div></div>";
						
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
			           { text: 'News', datafield: 'template', width: '100%',   cellclassname: cellclassnameall,
			        	   createfilterwidget: function (column, columnElement, widget) {
			        	        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Search" });
			        	      }
			           },
			           { text: '', datafield: 'isBold', hidden: true  },
			           ],
			      groups: ['generationDateDate','order_id']
			         
			      });
			    $("#grid0").jqxGrid(
			      {
			          width: '100%',
					  height:670,
			          source: dataAdapter0,                
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
			  		  pagerrenderer: pagerrenderer0,
			          groupsexpandedbydefault: true,
			          columns: [
			           { text: 'Date', datafield: 'generationDateDate', hidden: true,  editable:false, cellsformat: 'dd-MMM-yyyy',filtertype: 'date' }, 
			           { text: 'News', datafield: 'template', width: '100%',   cellclassname: cellclassname0,
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
			          pagesize: 50,
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
			           { text: 'News', datafield: 'template', width: '100%',   cellclassname: cellclassname1,
			        	   createfilterwidget: function (column, columnElement, widget) {
			        	        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Search" });
			        	      }
			           },
			           { text: '', datafield: 'isBold', hidden: true  },
			           ],
			      groups: ['generationDateDate']
			         
			      });
			       $("#grid2").jqxGrid(
			      {
			          width: '100%',
					  height:670,
			          source: dataAdapter2,                
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
			  		  pagerrenderer: pagerrenderer2,
			          groupsexpandedbydefault: true,
			          columns: [
			           { text: 'Date', datafield: 'generationDateDate', hidden: true,  editable:false, cellsformat: 'dd-MMM-yyyy',filtertype: 'date' }, 
			           { text: 'News', datafield: 'template', width: '100%',   cellclassname: cellclassname2,
			        	   createfilterwidget: function (column, columnElement, widget) {
			        	        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Search" });
			        	      }
			           },
			           { text: '', datafield: 'isBold', hidden: true  },
			           ],
			      groups: ['generationDateDate']
			         
			      });
			    $("#gridall").on("pagechanged", function (event) 
				 {
				   $("#gridall").jqxGrid('expandallgroups');
				 }); 
				 $("#grid0").on("pagechanged", function (event) 
				 {
				   $("#grid0").jqxGrid('expandallgroups');
				 });   
				 $("#grid1").on("pagechanged", function (event) 
				 {
				   $("#grid1").jqxGrid('expandallgroups');
				 });  
				  $("#grid2").on("pagechanged", function (event) 
				 {
				   $("#grid2").jqxGrid('expandallgroups');
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
				     
			      $("#IsImportant0").on('change', function (event) {
				    	  $("#grid0").jqxGrid('showloadelement');
				          currentPage0=0;
				    	   var checked = event.args.checked;
					   
	   	                  fetchNumberOfTotalPages('/admin/gettotalpages/0/50/1/' + checked).then(function(totalPages) {
							totalPage0 =totalPages;
						
						  })
						  .catch(function(error) {
						    // Handle errors
						    console.error('Error:', error);
						  });
										   
				    	  if (checked)
				    	    gridsource0.url='/admin/getnewsbyimportance/'+checked+'/'+data[0].assetId+'/'+currentPage0+'/50';
				    	  else
				    	    gridsource0.url='/admin/findnewsformateddate/'+data[0].assetId+'/'+currentPage0+'/50';
				    	  
				          var dataAdapter0 = new $.jqx.dataAdapter(gridsource0);
				          $("#grid0").jqxGrid({source:dataAdapter0,
				        	  groups: ['generationDateDate']
				        	  }
				          );
				          
				      });  
				    $("#IsImportant1").on('change', function (event) {
				    	  $("#grid1").jqxGrid('showloadelement');
				         
				    	  var checked = event.args.checked;
				    	  fetchNumberOfTotalPages('/admin/gettotalpages/0/50/2/' + checked).then(function(totalPages) {
							totalPage1 =totalPages;
						
						  })
						  .catch(function(error) {
						    // Handle errors
						    console.error('Error:', error);
						  });
										
				    	  if (checked)
				    	    gridsource1.url='/admin/getnewsbyimportance/'+checked+'/'+data[1].assetId+'/'+currentPage0+'/50';
				    	  else
				    	    gridsource1.url='/admin/findnewsformateddate/'+data[1].assetId+'/'+currentPage0+'/50';
				    	  
				          var dataAdapter1 = new $.jqx.dataAdapter(gridsource1);
				          $("#grid1").jqxGrid({source:dataAdapter1,
				        	  groups: ['generationDateDate']
				        	  }
				          );
				          
				      });  
				       $("#IsImportant2").on('change', function (event) {
				    	  $("#grid2").jqxGrid('showloadelement');
				         
				    	  var checked = event.args.checked;
				    	  fetchNumberOfTotalPages('/admin/gettotalpages/0/50/3/' + checked).then(function(totalPages) {
							totalPage2 =totalPages;
						
						  })
						  .catch(function(error) {
						    // Handle errors
						    console.error('Error:', error);
						  });
										
				    	  if (checked)
				    	    gridsource2.url='/admin/getnewsbyimportance/'+checked+'/'+data[2].assetId+'/'+currentPage0+'/50';
				    	  else
				    	    gridsource2.url='/admin/findnewsformateddate/'+data[2].assetId+'/'+currentPage0+'/50';
				    	  
				          var dataAdapter2 = new $.jqx.dataAdapter(gridsource2);
				          $("#grid2").jqxGrid({source:dataAdapter2,
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
			 
			$("#groupDropDown").jqxDropDownList({ source: dataAdapter,disabled: true,  displayMember: "description", valueMember: "id",theme: 'dark' , width: '100%', height: 30, dropDownHeight: 250});
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
	               { 
					   
					   fetchNumberOfTotalPages('/admin/gettotalpagesbygroupidandsubgroupid/'+groupItem.value+'/'+subGroupDropDown.value+'/0/50').then(function(totalPages) {
							totalPageFilter =totalPages;
						
						  })
						  .catch(function(error) {
						    // Handle errors
						    console.error('Error:', error);
						  });
					   
		           filteredgridsource.url='/admin/findnewsbygroupidandsubgroupid/'+groupItem.value+'/'+subGroupDropDown.value+'/0/50';
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
					
					  currentPageFilter = rightClicked(currentPageFilter,totalPageFilter);				
					  if (groupItem.value==0)
	            	 	 filteredgridsource.url='/admin/findallnewsbygroupidandsubgroupid/'+subGroupDropDown.label+'/'+currentPageFilter+'/50';
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
      
           
  });

  function fetchTotalPagesNumber() {
	    fetchNumberOfTotalPages('/admin/gettotalpages/0/50/0/false').then(function(totalPages) {
							totalPageAll =totalPages;
						  })
						  .catch(function(error) {
						   console.error('Error:', error);
						  });
		fetchNumberOfTotalPages('/admin/gettotalpages/0/50/1/false').then(function(totalPages) {
							totalPage0 =totalPages;
						  })
						  .catch(function(error) {
						   console.error('Error:', error);
						  });
		fetchNumberOfTotalPages('/admin/gettotalpages/0/50/2/false').then(function(totalPages) {
							totalPage1 =totalPages;
						  })
						  .catch(function(error) {
						   console.error('Error:', error);
						  });	
		fetchNumberOfTotalPages('/admin/gettotalpages/0/50/3/false').then(function(totalPages) {
							totalPage2 =totalPages;
						  })
						  .catch(function(error) {
						   console.error('Error:', error);
						  });								
	}
	
	
	