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