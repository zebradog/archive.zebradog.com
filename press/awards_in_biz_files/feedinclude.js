

broadSite = "http://touchtmj4.feedroom.com";
narrowSite = "http://wtmj4.feedroom.com";

var _aol = (navigator.userAgent.indexOf("AOL")> -1)? 1 : 0;
var _fork = '';

var optWidth = 780; 
var optHeight = 570; 

var forkWidth = 485; 
var forkHeight = 370; 
		
function setAffiliateSite(broad, narrow){
	broadSite = broad;
	narrowSite = narrow;
}
function LaunchFeedroom(){
	LaunchFRStory('', broadSite, 'X');
}
function LaunchFeedroomBroad(){
	LaunchFRStory('',broadSite);
}
function LaunchFeedroomNarrow(){
	LaunchFRStory('', narrowSite);
}
function LaunchFeedroomNarrowStory(storyID){
	LaunchFRStory(storyID, narrowSite);
}
function LaunchFeedroomBroadStory(storyID){
	LaunchFRStory(storyID,broadSite);
}
function LaunchFeedroomForkWithStory(bbLink, nbLink){
	LaunchFRStory(bbLink, broadSite, 'X');
}
function LaunchFeedroomForkWithSingleStory(storyID){
	LaunchFRStory(storyID, broadSite, 'X');
}
function LaunchFeedroomForkWithSingleStoryEx(storyID){
	LaunchFRStory(storyID, broadSite, 'X', 'ex');
}

function PrepUrl(siteUrl, fork) {
	if ( siteUrl ) {
		_fork = (fork == 'X' || fork == 'B' || fork == 'N') ? "&band=" + fork : "&same_win=1";	
	} else {
		siteUrl = broadSite;
		_fork = (fork == 'X' || fork == 'B' || fork == 'N') ? "&band=" + fork : "&band=X";
	}
	return siteUrl;
}
function LaunchFR(url, ex) {
	url = (url.indexOf('http://') == -1) ? ("http://" + url + _fork) : (url + _fork);

	if (_fork.indexOf('band') > 0) {
		winl = (_aol) ? 0 : (screen.width - forkWidth) / 2;
		wint = (_aol) ? 0 : (screen.height - forkHeight) / 2 - 40; 
		fr = window.open(url, "fork", "top="+wint+",left="+winl+",width="+forkWidth+",height="+forkHeight+",resizable=yes");
	} else {
		winl = (_aol) ? 0 : (screen.width - optWidth) / 2;
		wint = (_aol) ? 0 : (screen.height - optHeight) / 2 - 40;
		fr = window.open(url, "FeedRoom", "top="+wint+",left="+winl+",width="+optWidth+",height="+optHeight);
	}
	
	_fork = '';
	if((!_aol)&&(!fr.opener)) fr.opener=self; 
	if (ex == 'ex') history.back();
}

function LaunchFRStory(storyID, siteUrl, fork, ex){
	url = PrepUrl(siteUrl, fork) + "/index.jsp?&fr_story=" + storyID;
	setTimeout("LaunchFR('" + url + "','" + ex + "')",250);
} 
function LaunchFRChl(channelID, siteUrl, fork, ex){
	url = PrepUrl(siteUrl, fork) + "/index.jsp?fr_chl=" + channelID;
	setTimeout("LaunchFR('" + url + "','" + ex + "')",250);
}
function LaunchFRStoryChl(storyID, channelID, siteUrl, fork, ex){
	url = PrepUrl(siteUrl, fork) + "/index.jsp?fr_story=" + storyID + "&fr_chl=" + channelID;
	setTimeout("LaunchFR('" + url + "','" + ex + "')",250);
}
function LaunchFRChlPos(channelID, storyPos, siteUrl, fork, ex){
	url = PrepUrl(siteUrl, fork) + "/index.jsp?fr_chl=" + channelID + "&fr_pos=" + storyPos;
	setTimeout("LaunchFR('" + url + "','" + ex + "')",250);
}
function LaunchFRStorySide(storyID, storySide, siteUrl, fork, ex){
	url = PrepUrl(siteUrl, fork) + "/index.jsp?fr_story=" + storyID + "&fr_side=" + storySide;
	setTimeout("LaunchFR('" + url + "','" + ex + "')",250);
}
function LaunchFRChlPosSide(channelID, storyPos, storySide, siteUrl, fork, ex){
	url = PrepUrl(siteUrl, fork) + "/index.jsp?fr_chl=" + channelID + "&fr_pos=" + storyPos + "&fr_side=" + storySide;
	setTimeout("LaunchFR('" + url + "','" + ex + "')",250);
}


