var d = new Date();var h=d.getHours();var m=d.getMinutes();var s=d.getSeconds();
h=ckTm(h);m=ckTm(m);s=ckTm(s);t=""+h+m+s;
var rmsurl = "rm_pagelogger.php?rmuid=" + getUserID(t) + "&rmtod=" + escape(t) + "&rmpgid=" + escape(rmpgid);
makeRequest(rmsurl);
function ckTm(i){if (i<10)   {i="0" + i} return i}

