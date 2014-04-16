/*  
CREATE THE LINK IN THIS FORMAT:
a href="javascript:launchpopup('http://www.onwisconsin.com/','winpopup',true,800,360);"
PARAMETERS TO CHANGE: the URL, whether or not to show scrollbars and menu, width, and height
 */

function launchpopup(url, name, rs, w, h) {
  var resize = "";
  if (rs) {
    resize = "resizable,";
  }
  popupWin = window.open(url, name, 'scrollbars,menubar,' + resize + 'width=' + w + ',height=' + h);
}


function launchpopup02(url, name, rs, w, h) {
  var resize = "";
  if (rs) {
    resize = "resizable,";
  }
  popupWin = window.open(url, name, 'scrollbars,' + resize + 'width=' + w + ',height=' + h);
}

function launchpopup03(url, name, rs, w, h) {
  var resize = "";
  if (rs) {
    resize = "resizable,";
  }
  popupWin = window.open(url, name, '' + resize + 'width=' + w + ',height=' + h);
}



function poppoll(url, name, rs, w, h) {
  var resize = "";
  if (rs) {
    resize = "resizable,";
  }
  popupWin = window.open(url, name, 'menubar,' + resize + 'width=' + w + ',height=' + h);
}

function launchvideo(url, name, rs, w, h) {
  var resize = "";
  if (rs) {
    resize = "resizable,";
  }
  popupWin = window.open(url, name, 'scrollbars,menubar,' + resize + 'width=' + w + ',height=' + h);
}

/* SCRIPT RESERVED FOR KRT POPOUT GRAPHICS */

function MM_openBrWindow(theURL,winName,features) { //v1.2
newWin = window.open(theURL,winName,features);
newWin.focus()
}