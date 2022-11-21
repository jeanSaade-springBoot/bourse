     
		var stompClient = null;
    	const privateStompClient = null;
		const $bell = document.getElementById('notification');
		const $bell1 = document.getElementById('notification1');
		const $bell2 = document.getElementById('notification2');
		const socket = new SockJS('/ws');
		stompClient = Stomp.over(socket);
		stompClient.debug=null;
		stompClient.connect({}, function(frame) {
			
			  if (typeof hasPendingApprovalGrid != 'undefined' )
	         {
				if(hasPendingApprovalGrid)
		    	sendNotification();
		     }
		    stompClient.subscribe('/all/messages', function(result) {
			if(JSON.parse(result.body).value!='0')
		    	{ $bell.setAttribute('data-count', JSON.parse(result.body).value);
		    	  $bell.classList.add('show-count');
		    	  $bell.classList.add('notify');
				if($bell1!=null)
				 { $bell1.setAttribute('data-count', JSON.parse(result.body).value);
		    	  $bell1.classList.add('show-count');
		    	  $bell1.classList.add('notify');
				}
				if($bell2!=null)
				 { $bell2.setAttribute('data-count', JSON.parse(result.body).value);
		    	  $bell2.classList.add('show-count');
		    	  $bell2.classList.add('notify');
				}
				}
		    });
		});
		
		 function sendNotification(){
		           stompClient.send("/app/application", {},
		           JSON.stringify({'text':''}));
		 }