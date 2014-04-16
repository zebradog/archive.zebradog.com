var rm_issue
var rm_article_type
var rm_article_number

function article_info(issue, arttype, artnumber)
{
rm_issue = issue;
rm_article_type = arttype;
rm_article_number = artnumber;
return true;
}

function picture_1up(position, width, border, image_number, image_credit, image_caption, image_format)
{

var picwidth
var picborder
var pic_string 
var caption_position
var credit_position
var picture_class
var credit_class
var pic_format  // default: jpg

//alert( "Starting" );

credit_position = "right"
caption_position = "left";

if (position == "center") { caption_position = "left"; }
if (position == "right") { caption_position = "right"; }

picture_class = "inpicsr";
if (position == "left") { picture_class = "inpicsl"; }
if (position == "center") { picture_class = "inpicsc"; }

credit_class = "imagecredit_rt"
if (position == "left") { credit_class = "imagecredit_lt"; }

if (width != 0) { picwidth = 'width="' + width + '"'; }	
else { 	picwidth = ""; }	

if (border == true) { 	picborder = ""; }
else { 	picborder = "nb"; }	

pic_format = "jpg";
if (arguments.length == 7) { pic_format = image_format; }

pic_string = '<table border="0" cellspacing="0" cellpadding="0" align="'  + position + '"><tr><td align="'  + position + '"><img src="images/' + rm_issue + '/' + rm_issue +  '_' + rm_article_type + '_' + rm_article_number + '_' + image_number + '.' + pic_format + '" border="1" align="' + position + '" class="' + picture_class + picborder + '"></td></tr><tr><td align="' + credit_position + '" class="' + credit_class + '">' + image_credit + '</td></tr><tr><td ' + picwidth + ' align="' + caption_position + '" class="imagecaption">' + image_caption + '</td></tr></table>';

//alert( "Pic_string:" + pic_string);

document.write(pic_string); 

return true;

}

function picture_2up(position, width, border, image_number1, image_number2, image_credit, image_caption)
{

var picwidth
var picborder
var pic_string 
var caption_position
var credit_position
var picture_class
var credit_class

//alert( "Starting" );

credit_position = "right"

caption_position = "left";
if (position == "center") { caption_position = "left"; }
if (position == "right") { caption_position = "right"; }

picture_class = "inpicsr";
if (position == "left") { picture_class = "inpicsl"; }
if (position == "center") { picture_class = "inpicsc"; }

credit_class = "imagecredit_rt"
if (position == "left") { credit_class = "imagecredit_lt"; }

if (width != 0) { picwidth = 'width="' + width + '"'; }	
else { 	picwidth = ""; }	

if (border == true) { 	picborder = ""; }
else { 	picborder = "nb"; }	

pic_string = '<table border="0" cellspacing="0" cellpadding="0" align="'  + position + '"><tr><td align="'  + position + '"><img src="images/' + rm_issue + '/' + rm_issue +  '_' + rm_article_type + '_' + rm_article_number + '_' + image_number1 + '.jpg" border="1" align="' + position + '" class="' + picture_class + picborder + '"></td></tr><tr><td align="'  + position + '"><img src="images/' + rm_issue + '/' + rm_issue +  '_' + rm_article_type + '_' + rm_article_number + '_' + image_number2 + '.jpg" border="1" align="' + position + '" class="' + picture_class + picborder + '"></td></tr><tr><td align="' + credit_position + '" class="' + credit_class + '">' + image_credit + '</td></tr><tr><td ' + picwidth + ' align="' + caption_position + '" class="imagecaption">' + image_caption + '</td></tr></table>';

//alert( "Pic_string:" + pic_string);

document.write(pic_string); 

return true;

}

//
// picture_2updualcap('center', 300, false, '05', '07', "cr1", "cap1", "cr2", "cap2");
//
function picture_2updualcap(position, width, border, image_number1, image_number2, image_credit1, image_caption1, image_credit2, image_caption2)
{

var picwidth
var picborder
var pic_string 
var caption_position
var credit_position
var picture_class
var credit_class

credit_position = "right"

caption_position = "left";
if (position == "center") { caption_position = "left"; }
if (position == "right") { caption_position = "right"; }

picture_class = "inpicsr";
if (position == "left") { picture_class = "inpicsl"; }
if (position == "center") { picture_class = "inpicsc"; }

credit_class = "imagecredit_rt"
if (position == "left") { credit_class = "imagecredit_lt"; }

if (width != 0) { picwidth = 'width="' + width + '"'; }	
else { 	picwidth = ""; }	

if (border == true) { 	picborder = ""; }
else { 	picborder = "nb"; }	

pic_string = '<table border="0" cellspacing="0" cellpadding="0" align="'  + position + '"><tr><td align="'  + position + '"><img src="images/' + rm_issue + '/' + rm_issue +  '_' + rm_article_type + '_' + rm_article_number + '_' + image_number1 + '.jpg" border="1" align="' + position + '" class="' + picture_class + picborder + '"></td></tr><tr><td align="' + credit_position + '" class="' + credit_class + '">' + image_credit1 + '</td></tr><tr><td ' + picwidth + ' align="' + caption_position + '" class="imagecaption">' + image_caption1 + '</td></tr><tr><td align="'  + position + '"><img src="images/' + rm_issue + '/' + rm_issue +  '_' + rm_article_type + '_' + rm_article_number + '_' + image_number2 + '.jpg" border="1" align="' + position + '" class="' + picture_class + picborder + '"></td></tr><tr><td align="' + credit_position + '" class="' + credit_class + '">' + image_credit2 + '</td></tr><tr><td ' + picwidth + ' align="' + caption_position + '" class="imagecaption">' + image_caption2 + '</td></tr></table>';

document.write(pic_string); 

return true;

}

//
// picture_2across('center', 300, false, '05', '07', "cr1", "cr2", "cap");
//
function picture_2across(position, width, border, image_number1, image_number2, image_credit1, image_credit2, image_caption)
{

var picwidth
var picborder
var pic_string 
var pic_string2 
var caption_position
var credit_position
var picture_class
var credit_class

//alert( "Starting" );

credit_position = "right"

caption_position = "left";
if (position == "center") { caption_position = "left"; }
if (position == "right") { caption_position = "right"; }

picture_class = "inpicsr";
if (position == "left") { picture_class = "inpicsl"; }
if (position == "center") { picture_class = "inpicsc"; }

credit_class = "imagecredit_rt"
if (position == "left") { credit_class = "imagecredit_lt"; }

if (width != 0) { picwidth = 'width="' + width + '"'; }	
else { 	picwidth = ""; }	

if (border == true) { 	picborder = ""; }
else { 	picborder = "nb"; }	

pic_string = '<table border="0" cellspacing="0" cellpadding="0" align="'  + position + '"><tr><td align="'  + position + '"><img src="images/' + rm_issue + '/' + rm_issue +  '_' + rm_article_type + '_' + rm_article_number + '_' + image_number1 + '.jpg" border="1" align="' + position + '" class="' + picture_class + picborder + '"></td><td><img src="../images/rgbempty.gif" width="5" height="1" border="0" alt=""></td><td align="'  + position + '"><img src="images/' + rm_issue + '/' + rm_issue +  '_' + rm_article_type + '_' + rm_article_number + '_' + image_number2 + '.jpg" border="1" align="' + position + '" class="' + picture_class + picborder + '"></td></tr><tr><td align="' + credit_position + '" class="' + credit_class + '">' + image_credit1 + '</td><td><img src="../images/rgbempty.gif" width="5" height="1" border="0" alt=""></td><td align="' + credit_position + '" class="' + credit_class + '">' + image_credit2 + '</td></tr><tr><td colspan="3"' + picwidth + ' align="' + caption_position + '" class="imagecaption">' + image_caption + '</td></tr></table>';

//alert( "Pic_string:" + pic_string);

document.write(pic_string); 

return true;

}


//
// picture_2across_inline('center', 300, false, '05', '07', "cr1", "cr2", "cap1", "cap2");
// ====== temp version =======
function picture_2across_inline(position, width, border, image_number1, image_number2, image_credit1, image_credit2, image_caption, image_caption2)
{

var picwidth
var picborder
var pic_string 
var pic_string2 
var caption_position
var credit_position
var picture_class
var credit_class

//alert( "Starting" );

credit_position = "right"

caption_position = "left";
if (position == "center") { caption_position = "left"; }
if (position == "right") { caption_position = "right"; }

picture_class = "inpicsr";
if (position == "left") { picture_class = "inpicsl"; }
if (position == "center") { picture_class = "inpicsc"; }

credit_class = "imagecredit_rt"
if (position == "left") { credit_class = "imagecredit_lt"; }

if (width != 0) { picwidth = 'width="' + width + '"'; }	
else { 	picwidth = ""; }	

if (border == true) { 	picborder = ""; }
else { 	picborder = "nb"; }	

pic_string = '<table border="0" cellspacing="0" cellpadding="0" align="'  + position + '"><tr><td align="'  + position + '"><img src="images/' + rm_issue + '/' + rm_issue +  '_' + rm_article_type + '_' + rm_article_number + '_' + image_number1 + '.jpg" border="1" align="' + position + '" class="' + picture_class + picborder + '"></td><td><img src="../images/rgbempty.gif" width="5" height="1" border="0" alt=""></td><td align="'  + position + '"><img src="images/' + rm_issue + '/' + rm_issue +  '_' + rm_article_type + '_' + rm_article_number + '_' + image_number2 + '.jpg" border="1" align="' + position + '" class="' + picture_class + picborder + '"></td></tr><tr><td align="' + credit_position + '" class="' + credit_class + '">' + image_credit1 + '</td><td><img src="../images/rgbempty.gif" width="5" height="1" border="0" alt=""></td><td align="' + credit_position + '" class="' + credit_class + '">' + image_credit2 + '</td></tr><tr><td ' + picwidth + ' align="' + caption_position + '" class="imagecaption">' + image_caption + '</td><td></td><td ' + picwidth + ' align="' + caption_position + '" class="imagecaption">' + image_caption2 + '</td></tr></table>';

//alert( "Pic_string:" + pic_string);

document.write(pic_string); 

return true;

}


//
// picture_2across_inline('center', 300, false, '05', '07', "cr1", "cr2", "cap1", "cap2");
//
function xxx_picture_2across_inline(position, width, border, image_number1, image_number2, image_credit1, image_credit2, image_caption1, image_caption2)
{

var picwidth
var picborder
var pic_string 
var pic_string2 
var caption_position
var credit_position
var picture_class
var credit_class

//alert( "Starting" );

credit_position = "right"

caption_position = "left";
if (position == "center") { caption_position = "left"; }
if (position == "right") { caption_position = "right"; }

picture_class = "inpicsr";
if (position == "left") { picture_class = "inpicsl"; }
if (position == "center") { picture_class = "inpicsc"; }

credit_class = "inlineimagecredit"
if (position == "left") { credit_class = "inlineimagecredit"; }

if (width != 0) { picwidth = 'width="' + width + '"'; }	
else { 	picwidth = ""; }	

if (border == true) { 	picborder = ""; }
else { 	picborder = "nb"; }	

pic_string = '<div align="center"><table border="0" cellspacing="0" cellpadding="0" style="display: inline; vertical-align: top;"><tr><td align="center" valign="top"><img src="images/' + rm_issue + '/' + rm_issue +  '_' + rm_article_type + '_' + rm_article_number + '_' + image_number1 + '.jpg" border="1" class="' + picture_class + picborder + '"></td></tr><tr><td class="' + credit_class + '">' + image_credit1 + '</td></tr><tr><td ' + picwidth + '" class="inlineimagecaption">' + image_caption1 + '</td></tr></table><table border="0" cellspacing="0" cellpadding="0" style="display: inline; vertical-align: top;"><tr><td align="center"  valign="top"><img src="images/' + rm_issue + '/' + rm_issue +  '_' + rm_article_type + '_' + rm_article_number + '_' + image_number2 + '.jpg" border="1" class="' + picture_class + picborder + '"></td></tr><tr><td class="' + credit_class + '">' + image_credit2 + '</td></tr><tr><td ' + picwidth + '" class="inlineimagecaption">' + image_caption2 + '</td></tr></table></div>';

//alert( "Pic_string:" + pic_string);

document.write(pic_string); 

return true;

}

//
// picture_3up('center', 300, false, '05', '07', 07', "cr", "cap");
//
function picture_3up(position, width, border, image_number1, image_number2, image_number3, image_credit, image_caption)
{

var picwidth
var picborder
var pic_string 
var caption_position
var credit_position
var picture_class
var credit_class

//alert( "Starting" );

credit_position = "right"

caption_position = "left";
if (position == "center") { caption_position = "left"; }
if (position == "right") { caption_position = "right"; }

picture_class = "inpicsr";
if (position == "left") { picture_class = "inpicsl"; }
if (position == "center") { picture_class = "inpicsc"; }

credit_class = "imagecredit_rt"
if (position == "left") { credit_class = "imagecredit_lt"; }

if (width != 0) { picwidth = 'width="' + width + '"'; }	
else { 	picwidth = ""; }	

if (border == true) { 	picborder = ""; }
else { 	picborder = "nb"; }	

pic_string = '<table border="0" cellspacing="0" cellpadding="0" align="'  + position + '"><tr><td align="'  + position + '"><img src="images/' + rm_issue + '/' + rm_issue +  '_' + rm_article_type + '_' + rm_article_number + '_' + image_number1 + '.jpg" border="1" align="' + position + '" class="' + picture_class + picborder + '"></td></tr><tr><td align="'  + position + '"><img src="images/' + rm_issue + '/' + rm_issue +  '_' + rm_article_type + '_' + rm_article_number + '_' + image_number2 + '.jpg" border="1" align="' + position + '" class="' + picture_class + picborder + '"></td></tr><tr><td align="'  + position + '"><img src="images/' + rm_issue + '/' + rm_issue +  '_' + rm_article_type + '_' + rm_article_number + '_' + image_number3 + '.jpg" border="1" align="' + position + '" class="' + picture_class + picborder + '"></td></tr><tr><td align="' + credit_position + '" class="' + credit_class + '">' + image_credit + '</td></tr><tr><td ' + picwidth + ' align="' + caption_position + '" class="imagecaption">' + image_caption + '</td></tr></table>';

//alert( "Pic_string:" + pic_string);

document.write(pic_string); 

return true;

}


function replaceAll( str, from, to ) {
    var idx = str.indexOf( from );


    while ( idx > -1 ) {
        str = str.replace( from, to ); 
        idx = str.indexOf( from );
    }

    return str;
}

