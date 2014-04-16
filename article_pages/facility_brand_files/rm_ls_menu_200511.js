//Menu object creation
oCMenu2=new makeCM("oCMenu2") //Making the menu object. Argument: menuname

//Menu properties   
oCMenu2.pxBetween=0
oCMenu2.fromLeft=4 
oCMenu2.fromTop=200
oCMenu2.rows=0 
oCMenu2.menuPlacement=0

oCMenu2.offlineRoot="" 
oCMenu2.onlineRoot="" 
oCMenu2.resizeCheck=1 
oCMenu2.wait=2000 
oCMenu2.fillImg="images/cm_fill.gif"
oCMenu2.zIndex=100

//Background bar properties
oCMenu2.useBar=1
oCMenu2.barWidth="menu"
oCMenu2.barHeight="menu" 
oCMenu2.barClass="cl2Bar"
oCMenu2.barX="menu"
oCMenu2.barY="menu"
oCMenu2.barBorderX=0
oCMenu2.barBorderY=0
oCMenu2.barBorderClass=""

//Level properties - ALL properties have to be spesified in level 0
oCMenu2.level[0]=new cm_makeLevel() //Add this for each new level
oCMenu2.level[0].width=120
oCMenu2.level[0].height=18
oCMenu2.level[0].regClass="cl2Level0"
oCMenu2.level[0].overClass="cl2Level0over"
oCMenu2.level[0].borderX=1 
oCMenu2.level[0].borderY=1
oCMenu2.level[0].borderClass="cl2Level1border"
oCMenu2.level[0].offsetX=120
oCMenu2.level[0].offsetY=20
oCMenu2.level[0].rows=0
oCMenu2.level[0].align="top" 


//EXAMPLE SUB LEVEL[1] PROPERTIES - You have to spesify the properties you want different from LEVEL[0] - If you want all items to look the same just remove this
oCMenu2.level[1]=new cm_makeLevel() //Add this for each new level (adding one to the number)
oCMenu2.level[1].width=oCMenu2.level[0].width*1.5
oCMenu2.level[1].height=18
oCMenu2.level[1].regClass="cl2Level1"
oCMenu2.level[1].overClass="cl2Level1over"
oCMenu2.level[1].style=""
oCMenu2.level[1].offsetX=-1
oCMenu2.level[1].offsetY=0
oCMenu2.level[1].borderClass="cl2Level1border"
oCMenu2.level[1].borderX=1 
oCMenu2.level[1].borderY=1
oCMenu2.level[1].rows=0
oCMenu2.level[1].align="left" 

/******************************************
Menu item creation:
myCoolMenu.makeMenu(name, parent_name, text, link, target, width, height, regImage, overImage, regClass, overClass , align, rows, nolink, onclick, onmouseover, onmouseout) 
*************************************/
oCMenu2.makeMenu('top00','','<div align="center"><font face="Verdana,Geneva,Arial,Helvetica,sans-serif" size="+1">2005</font><br>NOVEMBER</div>','issuecontents.php?si=200511','',0,37,'','','cl2Header','cl2Header')
oCMenu2.makeMenu('top0','','FEATURES','issuecontents.php?si=200511#features')
	oCMenu2.makeMenu('sub00','top0','HOW-TO GUIDE:<br> Handy Solutions to Common Problems','200511fe01.php','',180,48)
	oCMenu2.makeMenu('sub01','top0','Destination: Landscape','200511fe02.php','',180)
	oCMenu2.makeMenu('sub02','top0','Fit Facilities','200511fe03.php','',180)
//	oCMenu2.makeMenu('sub03','top0','One Stone at a Time','200511fe04.php','',200)
//	oCMenu2.makeMenu('sub04','top0','<strong>Special Supplement:</strong><br>A Complete Guide to <br>Sports Surfaces and Flooring','200511fe00.php','',200,48)
		
oCMenu2.makeMenu('top1','','FACILITY PROFILES','issuecontents.php?si=200511#facilityprofiles')
	oCMenu2.makeMenu('sub10','top1','Par for the Course','200511fp01.php','',240)
	oCMenu2.makeMenu('sub11','top1','The Streets of Laredo Turn High-Tech','200511fp02.php','',240)
//	oCMenu2.makeMenu('sub12','top1','When Play is no Obstacle','200511fp03.php','',200)
//	oCMenu2.makeMenu('sub13','top1','Aquatic Envy','200511fp04.php')

oCMenu2.makeMenu('top2','','GUEST COLUMNS','issuecontents.php?si=200511#columns')
	oCMenu2.makeMenu('sub20','top2','Is Group X Set for a New Explosion?','200511gc01.php','',200,32)
	oCMenu2.makeMenu('sub21','top2','Securing Supervision','200511gc02.php','',200)
	oCMenu2.makeMenu('sub22','top2','The Facility Brand Experience','200511gc03.php','',200)
//	oCMenu2.makeMenu('sub23','top2','Understanding the Issues','200511gc04.php','',200)
	
oCMenu2.makeMenu('top3','','PRODUCT SHOWCASES','issuecontents.php?si=200511#productshowcases','',0,32)
	oCMenu2.makeMenu('sub30','top3','Playground Safety Surfaces','prodshowcase.php?si=200511&gp=1','',200)
	oCMenu2.makeMenu('sub31','top3','Sports Equipment','prodshowcase.php?si=200511&gp=2','',200)
//	oCMenu2.makeMenu('sub32','top3','Crowd Control, Security &amp; Safety','prodshowcase.php?si=200511&gp=3','',240)
//	oCMenu2.makeMenu('sub33','top3','Literature','prodshowcase.php?si=200511&gp=4','',240)
	oCMenu2.makeMenu('sub34','top3','New Product Ideas','prodshowcase.php?si=200511&gp=99','',200)
//	oCMenu2.makeMenu('sub35','top3','Q&amp;A Problem Solver','prodshowcase.php?si=200511&gp=102','',240)
//	oCMenu2.makeMenu('sub36','top3','Web Showcase','prodshowcase.php?si=200511&gp=101','',240)
//	oCMenu2.makeMenu('sub37','top3','NRPA Showcase','prodshowcase.php?si=200511&gp=110','',240)
//	oCMenu2.makeMenu('sub38','top3','Trade Show in Print','prodshowcase.php?si=200511&gp=111','',240)

//Leave this line - it constructs the menu
//oCMenu2.construct()

