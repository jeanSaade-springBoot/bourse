	function navigationGraph(condition){
		fromNavigation=true;
		const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
			  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
			];
				if(condition=="yearBackward")
				{ 
					expectedmonthdate = new Date(monthDate.getMonth()+"-"+monthDate.getDay()+"-"+(monthDate.getFullYear()-1));
					if (startDateF1!=null)
					 {if (expectedmonthdate<=startDateF1)
						{
							$("#button-yearBackward").prop('disabled', true);
							$('#startdatetext').empty();
							$('#startdatetext').append("No data available before "+monthNames[startDateF1.getMonth()]+" "+startDateF1.getFullYear())
							$('#alertStartDate-modal').modal('show');
						return;
						}
					 }
					else
						if (startDateF2!=null)
						{ 
							if (expectedmonthdate<=startDateF2)
						   {
								$("#button-yearBackward").prop('disabled', true);
								$('#startdatetext').empty();
								$('#startdatetext').append("No data available before "+monthNames[startDateF2.getMonth()]+" "+startDateF2.getFullYear())
								$('#alertStartDate-modal').modal('show');
							return;
							}
						}
				monthDate.setFullYear(monthDate.getFullYear() - 1);
				if(mode=="merge") 
				  drawGraph();
					else
						splitGraph();
				}else
					if(condition=="monthBackward")
				  {   
					
					    expectedmonthdate = new Date(monthDate.getMonth()+"-"+monthDate.getDay()+"-"+monthDate.getFullYear());
					    if (startDateF1!=null)
					     {
					    	if (expectedmonthdate<=startDateF1)
					        {
							$("#button-monthBackward").prop('disabled', true);
							$("#button-yearBackward").prop('disabled', true);
							$('#startdatetext').empty();
							$('#startdatetext').append("No data available before "+monthNames[startDateF1.getMonth()]+" "+startDateF1.getFullYear())
							$('#alertStartDate-modal').modal('show');
							return;
							}
					     }
					    else
							if (startDateF2!=null)
							{ 
								if (expectedmonthdate<=startDateF2)
							   {
									$("#button-monthBackward").prop('disabled', true);
									$("#button-yearBackward").prop('disabled', true);
									$('#startdatetext').empty();
									$('#startdatetext').append("No data available before "+monthNames[startDateF2.getMonth()]+" "+startDateF2.getFullYear())
									$('#alertStartDate-modal').modal('show');
								return;
								}
							}
				    monthDate.setMonth(monthDate.getMonth() - 1);
				    if(mode=="merge") 
						  drawGraph();
							else
								splitGraph();
					}
					else
						if(condition=="monthForward")
					  {   
						$("#button-monthBackward").prop('disabled', false);
					    monthDate.setMonth(monthDate.getMonth() + 1);
					    if(mode=="merge") 
							  drawGraph();
								else
									splitGraph();
						}
						else
							if(condition=="yearForward")
						  {   
							$("#button-yearBackward").prop('disabled', false);
							monthDate.setFullYear(monthDate.getFullYear() + 1);
							if(mode=="merge") 
								  drawGraph();
									else
										splitGraph();
							}

					if   (checkDateMonth(monthDate,date))
					   {
						  $("#button-monthForward").prop('disabled', false);
						}
						else
						{
							$("#button-monthForward").prop('disabled', true);
						}
					
					if   (checkDateYear(monthDate,date))
					   {
						  $("#button-yearForward").prop('disabled', false);
						}
						else
						{
							$("#button-yearForward").prop('disabled', true);
						} 
			}
			
			
			
			  function formatDate(date) {
				    var d = new Date(date),
				        month = '' + (d.getMonth() + 1),
				        day = '' + d.getDate(),
				        year = d.getFullYear();
			
				    if (month.length < 2) 
				        month = '0' + month;
				    if (day.length < 2) 
				        day = '0' + day;
			
				    return [year, month, day].join('-');
				}
			  function checkDateMonth(monthDate,date)
			  {    var d = new Date(monthDate);
				   d.setMonth(monthDate.getMonth() + 1);
				   
				   if(d<date)
					   return true;
				   else
					   return false;
			  }
			function checkDateYear(monthDate,date)
			  {    var d = new Date(monthDate);
				   d.setFullYear(monthDate.getFullYear() + 1);
				   
				   if(d<date)
					   return true;
				   else
					   return false;
			  }
			  
	