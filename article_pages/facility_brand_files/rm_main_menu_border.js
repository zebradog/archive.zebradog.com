oCMenu=new makeCM("oCMenu") 

oCMenu.frames = 1

//Menu properties   
oCMenu.pxBetween=10
oCMenu.fromLeft=10 
oCMenu.fromTop=107  
oCMenu.rows=1 
oCMenu.menuPlacement="left"
                                                             
oCMenu.offlineRoot="./" 
oCMenu.onlineRoot="./" 
oCMenu.resizeCheck=1 
oCMenu.wait=800
oCMenu.fillImg="images/cm_fill.gif"
oCMenu.zIndex=0

//Background bar properties
oCMenu.useBar=1
oCMenu.barWidth="100%"
oCMenu.barHeight="menu" 
oCMenu.barClass="clBar"
oCMenu.barX=0 
oCMenu.barY="menu" 
oCMenu.barBorderX=0
oCMenu.barBorderY=0
oCMenu.barBorderClass=""

//Level properties 
oCMenu.level[0]=new cm_makeLevel() 
oCMenu.level[0].width=110
oCMenu.level[0].height=20 
oCMenu.level[0].regClass="clLevel0"
oCMenu.level[0].overClass="clLevel0over"
oCMenu.level[0].borderX=1
oCMenu.level[0].borderY=0
oCMenu.level[0].borderClass="clLevel0border"
oCMenu.level[0].offsetX=0
oCMenu.level[0].offsetY=0
oCMenu.level[0].rows=0
oCMenu.level[0].arrow=0
oCMenu.level[0].arrowWidth=0
oCMenu.level[0].arrowHeight=0
oCMenu.level[0].align="bottom"


//EXAMPLE SUB LEVEL[1] PROPERTIES - You have to specify the properties you want different from LEVEL[0] - If you want all items to look the same just remove this
oCMenu.level[1]=new cm_makeLevel() //Add this for each new level (adding one to the number)
oCMenu.level[1].width=oCMenu.level[0].width+30
oCMenu.level[1].height=18
oCMenu.level[1].regClass="clLevel1"
oCMenu.level[1].overClass="clLevel1over"
oCMenu.level[1].borderX=1
oCMenu.level[1].borderY=0
oCMenu.level[1].align="right" 
oCMenu.level[1].offsetX=-(oCMenu.level[0].width-2)/2+40
oCMenu.level[1].offsetY=0
oCMenu.level[1].borderClass="clLevel1border"
oCMenu.level[1].arrow="/images/menu_arrow.gif"
oCMenu.level[1].arrowWidth=10
oCMenu.level[1].arrowHeight=13
oCMenu.level[1].clippx=10

//EXAMPLE SUB LEVEL[2] PROPERTIES - You have to spesify the properties you want different from LEVEL[1] OR LEVEL[0] - If you want all items to look the same just remove this
oCMenu.level[2]=new cm_makeLevel() //Add this for each new level (adding one to the number)
oCMenu.level[2].width=150
oCMenu.level[2].height=17
oCMenu.level[2].offsetX=0
oCMenu.level[2].offsetY=0
oCMenu.level[2].regClass="clLevel2"
oCMenu.level[2].overClass="clLevel2over"
oCMenu.level[2].borderClass="clLevel2border"
oCMenu.level[2].clippx=10


/******************************************
Menu item creation:
myCoolMenu.makeMenu(name, parent_name, text, link, target, width, height, regImage, overImage, regClass, overClass , align, rows, nolink, onclick, onmouseover, onmouseout) 
*************************************/
oCMenu.makeMenu('top99','','Home','index.php','',54)

oCMenu.makeMenu('top0','','Current Issue','issuecontents.php')
	oCMenu.makeMenu('sub10','top0','Features','issuecontents.php#features','',160)
	oCMenu.makeMenu('sub11','top0','Facility Profiles','issuecontents.php#facilityprofiles','',160)
	oCMenu.makeMenu('sub12','top0','Guest Columns','issuecontents.php#columns','',160)
	oCMenu.makeMenu('sub13','top0','Product Showcases','issuecontents.php#productshowcases','',160)
	
oCMenu.makeMenu('top2','','Buyers Guide','buyersguide.php','')
  oCMenu.makeMenu('sub20','top2','Search the Guide','buyersguide.php','',200)
  oCMenu.makeMenu('sub21','top2','Product Categories','buyersguide.php','',200)
    oCMenu.makeMenu('sub211','sub21','Aquatic Facility Components','buyersguide.php?c1=AQUA&lv=1','',320)
    oCMenu.makeMenu('sub212','sub21','Building & Facility Components','buyersguide.php?c1=BLDG&lv=1','',320)
    oCMenu.makeMenu('sub213','sub21','Business Management','buyersguide.php?c1=BUSM&lv=1','',320)
    oCMenu.makeMenu('sub214','sub21','Fitness & Exercise Equipment','buyersguide.php?c1=FITN&lv=1','',320)
    oCMenu.makeMenu('sub215','sub21','Food Service and Concession Equipment','buyersguide.php?c1=FOOD&lv=1','',320)
    oCMenu.makeMenu('sub216','sub21','Grounds & Field Maintenance','buyersguide.php?c1=GRND&lv=1','',320)
    oCMenu.makeMenu('sub217','sub21','Outdoor Sports Components','buyersguide.php?c1=OUTD&lv=1','',320)
    oCMenu.makeMenu('sub218','sub21','Site Furnishings, Structures & Park Equipment','buyersguide.php?c1=SITE&lv=1','',320)
    oCMenu.makeMenu('sub219','sub21','Sports Equipment','buyersguide.php?c1=SPEQ&lv=1','',320)
    oCMenu.makeMenu('sub220','sub21','Sports Surfaces','buyersguide.php?c1=SPSU&lv=1','',320)
    oCMenu.makeMenu('sub221','sub21','Trainer\'s Supplies','buyersguide.php?c1=TRAN&lv=1','',320)
  oCMenu.makeMenu('sub22','top2','Search by Product Category','buyersguide_ps.php','',200)  
  oCMenu.makeMenu('sub23','top2','Search by Company','buyersguide_cs.php','',200)  

oCMenu.makeMenu('top3','','Archives','archives.php','',80)
  oCMenu.makeMenu('sub30','top3','Search by Keyword','issue-content-search.php','',150)
  oCMenu.makeMenu('sub31','top3','2002','archives.php?arcyr=2002','',150)
  oCMenu.makeMenu('sub310','sub31','2002 Summary','archives.php?arcyr=2002')
	oCMenu.makeMenu('sub311','sub31','January/February','issuecontents.php?si=200201')
	oCMenu.makeMenu('sub313','sub31','March','issuecontents.php?si=200203')
	oCMenu.makeMenu('sub314','sub31','April','issuecontents.php?si=200204')
	oCMenu.makeMenu('sub315','sub31','May/June','issuecontents.php?si=200205')
	oCMenu.makeMenu('sub317','sub31','July/August','issuecontents.php?si=200207')
	oCMenu.makeMenu('sub319','sub31','September','issuecontents.php?si=200209')
	oCMenu.makeMenu('sub31a','sub31','October','issuecontents.php?si=200210')
	oCMenu.makeMenu('sub31b','sub31','November','issuecontents.php?si=200211')
  oCMenu.makeMenu('sub32','top3','2003','archives.php?arcyr=2003','',150)
  oCMenu.makeMenu('sub320','sub32','2003 Summary','archives.php?arcyr=2003')
	oCMenu.makeMenu('sub321','sub32','January/February','issuecontents.php?si=200301')
	oCMenu.makeMenu('sub322','sub32','March','issuecontents.php?si=200303')
	oCMenu.makeMenu('sub324','sub32','April','issuecontents.php?si=200304')
	oCMenu.makeMenu('sub325','sub32','May/June','issuecontents.php?si=200305')
	oCMenu.makeMenu('sub327','sub32','July/August','issuecontents.php?si=200307')
	oCMenu.makeMenu('sub329','sub32','September','issuecontents.php?si=200309')
	oCMenu.makeMenu('sub32a','sub32','October','issuecontents.php?si=200310')
	oCMenu.makeMenu('sub32b','sub32','November','issuecontents.php?si=200311')
  oCMenu.makeMenu('sub33','top3','2004','archives.php?arcyr=2004','',150)
  oCMenu.makeMenu('sub330','sub33','2004 Summary','archives.php?arcyr=2004')
	oCMenu.makeMenu('sub331','sub33','January','issuecontents.php?si=200401')
	oCMenu.makeMenu('sub332','sub33','February','issuecontents.php?si=200402')
	oCMenu.makeMenu('sub333','sub33','March','issuecontents.php?si=200403')
	oCMenu.makeMenu('sub334','sub33','April','issuecontents.php?si=200404')
	oCMenu.makeMenu('sub335','sub33','May/June','issuecontents.php?si=200405')
	oCMenu.makeMenu('sub337','sub33','July/August','issuecontents.php?si=200407')
	oCMenu.makeMenu('sub339','sub33','September','issuecontents.php?si=200409')
	oCMenu.makeMenu('sub33a','sub33','October','issuecontents.php?si=200410')
	oCMenu.makeMenu('sub33b','sub33','November','issuecontents.php?si=200411')
  oCMenu.makeMenu('sub34','top3','2005','archives.php?arcyr=2005','',150)
  oCMenu.makeMenu('sub340','sub34','2005 Summary','archives.php?arcyr=2005')
	oCMenu.makeMenu('sub341','sub34','January','issuecontents.php?si=200501')
	oCMenu.makeMenu('sub342','sub34','February','issuecontents.php?si=200502')
	oCMenu.makeMenu('sub343','sub34','March','issuecontents.php?si=200503')
	oCMenu.makeMenu('sub344','sub34','April','issuecontents.php?si=200504')
	oCMenu.makeMenu('sub345','sub34','May/June','issuecontents.php?si=200505')
	oCMenu.makeMenu('sub347','sub34','July/August','issuecontents.php?si=200507')
	oCMenu.makeMenu('sub349','sub34','September','issuecontents.php?si=200509')
	oCMenu.makeMenu('sub34a','sub34','October','issuecontents.php?si=200510')
	oCMenu.makeMenu('sub34b','sub34','November','issuecontents.php?si=200511')
  oCMenu.makeMenu('sub35','top3','2006','archives.php?arcyr=2006','',150)
  oCMenu.makeMenu('sub350','sub35','2006 Summary','archives.php?arcyr=2006')
	oCMenu.makeMenu('sub351','sub35','January','issuecontents.php?si=200601')
	oCMenu.makeMenu('sub352','sub35','February','issuecontents.php?si=200602')
	oCMenu.makeMenu('sub353','sub35','March','issuecontents.php?si=200603')
//	oCMenu.makeMenu('sub354','sub35','April','issuecontents.php?si=200604')
//	oCMenu.makeMenu('sub355','sub35','May/June','issuecontents.php?si=200605')
//	oCMenu.makeMenu('sub357','sub35','July/August','issuecontents.php?si=200607')
//	oCMenu.makeMenu('sub359','sub35','September','issuecontents.php?si=200609')
//	oCMenu.makeMenu('sub35a','sub35','October','issuecontents.php?si=200610')
//	oCMenu.makeMenu('sub35b','sub35','November','issuecontents.php?si=200611')
	
oCMenu.makeMenu('top4','','Subscriptions','subscriptions.php')

oCMenu.makeMenu('top5','','Advertising Info','recreation-management-media-file-2006.php','',120)
	oCMenu.makeMenu('sub51','top5','2006 Media File','recreation-management-media-file-2006.php','',170)
//	oCMenu.makeMenu('sub52','top5','2005 Media File','recreation-management-media-file-2005.php','',170)
	oCMenu.makeMenu('sub53','top5','Request Advertising Info','advertising.php','',170)

oCMenu.makeMenu('top6','','Contact Us','contactus.php','',90)
	//oCMenu.makeMenu('sub60','top6','Subscriptions','subscriptions.php')
	//oCMenu.makeMenu('sub61','top6','About Us','aboutRM.php')
	//oCMenu.makeMenu('sub62','top6','Contact Us','contactus.php')

//Leave this line - it constructs the menu
if(!(bw.ie5&&bw.mac)) oCMenu.construct()
