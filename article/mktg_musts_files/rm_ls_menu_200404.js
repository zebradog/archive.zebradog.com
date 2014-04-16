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
oCMenu2.makeMenu('top00','','<div align="center"><font face="Verdana,Geneva,Arial,Helvetica,sans-serif" size="+1">2004</font><br>APRIL</div>','issuecontents.php?si=200404','',0,37,'','','cl2Header','cl2Header')
oCMenu2.makeMenu('top0','','FEATURES','issuecontents.php?si=200404#features')
	oCMenu2.makeMenu('sub01','top0','Hitting the Wall','features.php?fid=200404FE01')
	oCMenu2.makeMenu('sub02','top0','Safe and Swim','features.php?fid=200404FE02')
	oCMenu2.makeMenu('sub03','top0','Concession Obsession','features.php?fid=200404FE03')
//	oCMenu2.makeMenu('sub04','top0','Grass-Roots Communication','features.php?fid=200404FE04','',230)
		
oCMenu2.makeMenu('top1','','FACILITY PROFILES','issuecontents.php?si=200404#facilityprofiles')
	oCMenu2.makeMenu('sub10','top1','Shared Interest','facility_profiles.php?fid=200404FP01','',150)
//	oCMenu2.makeMenu('sub11','top1','','facility_profiles.php?fid=200404FP02')

oCMenu2.makeMenu('top2','','GUEST COLUMNS','issuecontents.php?si=200404#columns')
	oCMenu2.makeMenu('sub20','top2','Retrofitting Our Aging Parks Systems: <br>Lessons from Denver\'s Game Plan','columns.php?fid=200404GC01','',240,34)
	oCMenu2.makeMenu('sub21','top2','Maximizing Your Skate Park','columns.php?fid=200404GC02','',240)
	oCMenu2.makeMenu('sub22','top2','Marketing Musts: Building Your Facility\'s <br>Brand from Logos to Mascots','columns.php?fid=200404GC03','',240,34)
//	oCMenu2.makeMenu('sub23','top2','','columns.php?fid=200404GC04','',230,34)
	
oCMenu2.makeMenu('top3','','PRODUCT SHOWCASES','issuecontents.php?si=200404#productshowcases','',0,32)
	oCMenu2.makeMenu('sub30','top3','Sports Equipment','prodshowcase.php?si=200404&gp=1','',240)
	oCMenu2.makeMenu('sub31','top3','Inline Hockey Equipment &amp; Surfaces','prodshowcase.php?si=200404&gp=2','',240)
	oCMenu2.makeMenu('sub32','top3','Signs, Flags &amp; Banners','prodshowcase.php?si=200404&gp=3','',240)
	oCMenu2.makeMenu('sub34','top3','New Products','prodshowcase.php?si=200404&gp=99','',240)
	oCMenu2.makeMenu('sub35','top3','On the Web','prodshowcase.php?si=200404&gp=101','',240)
	
//Leave this line - it constructs the menu
//oCMenu2.construct()

