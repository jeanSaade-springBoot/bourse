 function popupWindow(url, windowName, win, w, h) {
	    const y = win.top.outerHeight / 2 + win.top.screenY - ( h / 2);
	    const x = win.top.outerWidth / 2 + win.top.screenX - ( w / 2);
	    return win.open(url, windowName, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
	}
  $("#viewall").click(function () {
	  popupWindow('/bourse/allnews', 'Libvol - View All News', window, 1300, 700);
  });
$("#termsConditions").click(function () {
	  popupWindow('/bourse/termsandconditions', 'Libvol - Terms & Conditions', window, 1100, 550);
  });
  
  function initializeNewsBanner(){
	$("#viewall").jqxButton({ theme: 'dark', width: 110, height: 35, template: "primary" });
	$("#viewall").css("display", "block");
	$("#viewall").click(function() {
		popupWindow('/bourse/allnews', 'Libvol - View All News', window, 1300, 600);
	});
  }
    $("#video-button").click(function () {
	  popupWindow('https://player.vimeo.com/video/176594196?autoplay=1', 'Libvol - Demo Video', window, 1300, 700);
  });
  function toggleFullscreen() {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                document.documentElement.requestFullscreen();
            }
        }
  function copyToClipboard(text) {
    var textarea = $("<textarea>");
    textarea.val(text);
    $("body").append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    //alert("Text copied to clipboard!");
}
function getCountryImagePath(groupId)
  {
	  var imagePath = [];
	  switch (groupId) {

		  case '37':
			  imagePath = ["/img/flag/eu.png", 'EUROZONE'];
			  break;
		  case '38':
			  imagePath = ["/img/flag/germany.png", 'GERMANY'];
			  break;
		  case '39':
			  imagePath = ["/img/flag/france.png", 'FRANCE'];
			  break;
		  case '40':
			  imagePath = ["/img/flag/italy.png", 'ITALY'];
			  break;
		  case '41':
			  imagePath = ["/img/flag/spain.png", 'SPAIN'];
			  break;
		  case '42':
			  imagePath = ["/img/flag/united-kingdom.png", 'UK'];
			  break;
		  case '43':
			  imagePath = ["/img/flag/united-states.png", 'ISM'];
			  break;
		  case '44':
			  imagePath = ["/img/flag/united-states.png", 'US'];
			  break;
		  case '45':
			  imagePath = ["/img/flag/china.png", 'CHINA'];
			  break;
		  case '46':
			  imagePath = ["/img/flag/japan.png", 'JAPAN'];
			  break;
		  case '47':
			  imagePath = ["/img/flag/india.png", 'INDIA'];
			  break;
	  }
	  return imagePath;
  }