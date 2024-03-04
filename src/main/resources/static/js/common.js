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