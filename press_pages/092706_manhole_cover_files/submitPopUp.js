<!-- Original:  Cyanide_7 (leo7278@hotmail.com) -->
<!-- Web Site:  http://www7.ewebcity.com/cyanide7 -->

<!-- This script and many more are available free online at -->
<!-- The JavaScript Source!! http://javascript.internet.com -->

<!-- Begin
// test variables
//var myHeight = 200;
//var isResizable = true;

function createTarget(form) {
_target = form.target;
_colon = _target.indexOf(":");
if(_colon != -1) {
form.target = _target.substring(0,_colon);
form.args = _target.substring(_colon+1);
} else if(typeof(form.args)=="undefined") {
form.args = "";
}
if(form.args.indexOf("{")!=-1) {
_args = form.args.split("{");
form.args = _args[0];
for(var i = 1; i < _args.length;i++) {
_args[i] = _args[i].split("}");
form.args += eval(_args[i][0]) + _args[i][1];
   }
}
form.args = form.args.replace(/ /g,"");
_win = window.open('',form.target,form.args);
if(typeof(focus)=="function")
_win.focus();
return true;
}
//  End -->

