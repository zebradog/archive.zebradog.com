function get_cookie(Name) {
  var search = Name + "="
  var returnvalue = "";
  if (document.cookie.length > 0) {
    offset = document.cookie.indexOf(search)
    if (offset != -1) { 
      offset += search.length
      end = document.cookie.indexOf(";", offset);
      if (end == -1)
         end = document.cookie.length;
      returnvalue=unescape(document.cookie.substring(offset, end))
      }
   }
  return returnvalue;
}

function getUserID(){
	var d = new Date();
	var t = d.getTime();
	if ((rmuid = get_cookie('rmuid'))=="") {
		rmuid = "rmvis" + t;
		document.cookie="rmuid=" + rmuid;
//		alert ( "the new rmuid is: " + rmuid );
	}
	else {
//		alert ( "the current rmuid is: " + rmuid );
	}
	return rmuid;
}

// Request Info
var http_request = false;

function makeRequest(url) {

    http_request = false;

    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/xml');
        }
    } else if (window.ActiveXObject) { // IE
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }

    if (!http_request) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }
    http_request.onreadystatechange = alertContents;
    http_request.open('GET', url, true);
    http_request.send(null);

}

function alertContents() {

    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
//                alert(http_request.responseText);
        } else {
            alert('There was a problem with the request.');
        }
    }

}
