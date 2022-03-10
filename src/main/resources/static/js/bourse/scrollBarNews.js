	
			  	$(function (){

					   $.ajax({
				        contentType: "application/json",
				        url: "/admin/getnews",
				        dataType: 'json',
				        async:true,
				        cache: false,
				        timeout: 600000,
				        success: function (data) {
							  var ul = document.getElementById("Newslist");
							 for (i=0; i<data.length;i++)
							  {var li = document.createElement("li");
							  // li.appendChild(document.createTextNode(data[i].template.split("<img")[0]));
							  // $('#Newslist').append('<li>' + data[i].template+ '</li>');
							   if(data[i].isBold=="true")
								   $('#Newslist').append('<li><span class="red">' + data[i].template+ '</span></li>');
							   else
								   $('#Newslist').append('<li>' + data[i].template+ '</li>');
							  /*  if(data[i].isBold=="true")
							  {
							  $("#Newslist li:nth-child("+(i+1)+")").addClass("red");
							  } */
							  
							  }
							 $('#Newslist').append('<li></li>');
								var durationvalue = data.length*10000;
							    createMarquee({duration:durationvalue, padding:20});
			},
				        error: function (e) {
				        	
								  console.log("ERROR : ", e);

				        }
				    });
					   
				});