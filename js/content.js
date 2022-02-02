//content.js
var chx = [];
chapter_title = 'yes';// for calling chapterT() or Chapter(...) after activation or temp activation

function skro(ele){
	//alert(ele);
    elem=document.getElementById(ele).offsetTop;
	//test if animate-scroll work on class selection
    $('.pg:eq('+page_+')').animate({scrollTop:(elem-50)+"px"});      
}

function chapter(ch,el,ppage_){//alert(ch);
	chapter_ = ch;
	chapter_title = [ch,el,ppage_];
	page_ = (ppage_-1)-count_page(page_amount,(ch));
	if(page_ < 1){page_ = 0;}
	upDatePage = count_page(page_amount,ch)+page_;
	//document.getElementById('cc').style.display='none';
	if(ch > 1){		
		k=localStorage.actidKey;
		n=localStorage.actN;
		if( k.length > 4 && n.length > 4){
			//..
			
	document.getElementById('bdy').style.display='block';
	document.getElementById('bdy').innerHTML = chx[ch-1];
	//document.getElementsByClassName("pg")[ppage_].style.display ="block";
	$('#cc').hide(1000);
	$('.pg:eq('+page_+')').slideDown(1000);
	//
	setTimeout(function(){skro(el)}, 1500);
	//Th();
	setTimeout(function(){
		Place_chap_page(ch,upDatePage);

		$('.prev').click(function(){prev_()});
		
		$('.next').click(function(){next_()});
	}, 500);
	
		if(chapter_ == 1 && page_ == 0){
			$('.prev').css({"background-color":"green"});
			$('.prev').html('<span class="">&laquo; </span> Content');
		}else if(page_ == 0){
			$('.prev').css({"background-color":"green"});
			$('.prev').html('<span class="">&laquo; </span> Previous Chapter');			
		}
	
	//Th();
	
			//..
		}
		else{
		document.getElementById('verify').style.display='block';
		$('#cc').hide(1000);
		$('.bar').html('Activation Page');
		old2 = 'verify';
		//Th();
		}
	}else{
	document.getElementById('bdy').style.display='block';
	document.getElementById('bdy').innerHTML = chx[(ch-1)];
	//document.getElementsByClassName("pg")[ppage_].style.display ="block";
	$('#cc').hide(1000);
	$('.pg:eq('+page_+')').slideDown(1000);
	//
	setTimeout(function(){skro(el)}, 1500);
	//Th();
	setTimeout(function(){
		Place_chap_page(ch,upDatePage);

		$('.prev').click(function(){prev_()});
		
		$('.next').click(function(){next_()});
	}, 500);
	
		if(chapter_ == 1 && page_ == 0){
			$('.prev').css({"background-color":"green"});
			$('.prev').html('<span class="">&laquo; </span> Content');
		}else if(page_ == 0){
			$('.prev').css({"background-color":"green"});
			$('.prev').html('<span class="">&laquo; </span> Previous Chapter');			
		}
	
	}
}

var bel = '<div class="below"><div class="prev btnC fl btnRed"><span class="">&laquo; </span>Previous Page</div><span id="sol"></span><span class="sign btnRed" style="padding: 3px 10px;" onclick="openNav()">&equiv; </span><div class="next btnC fr btnRed">Next Page<span class=""> &raquo; </span></div></div>';
chapter_ = 0;
PG = 0;
function Place_chap_page(CP,PG){
	CPx = CP;
	switch (CPx) {
    case 0:
        text = "Table of content";
        break;
    case 1:
        text = "Chapter One";
        break;
    case 2:
        text = "Chapter Two";
        break;
    case 3:
        text = "Chapter Three";
        break;
    case 4:
        text = "Chapter Four";
        break;
    case 5:
        text = "Chapter Five";
        break;
    case 6:
        text = "Chapter Six";
        break;
    case 7:
        text = "Chapter Seven";
        break;
    case 8:
        text = "Chapter Eight";
        break;
    case 9:
        text = "Chapter Nine";
        break;
    case 10:
        text = "Chapter Ten";
        break;
    case 11:
        text = "Chapter Eleven";
        break;
    case 12:
        text = "Chapter Twelve";
        break;
    case 13:
        text = "Chapter Thirteen";
        break;
    case 14:
        text = "Chapter Fourteen";
        break;
    case 15:
        text = "Chapter Fifteen";
        break;
    case 16:
        text = "Chapter Sixteen";
        break;
    case 17:
        text = "Chapter Seventeen";
        break;
    case 18:
        text = "Chapter Eighteen";
        break;
    case 19:
        text = "Chapter Nineteen";
        break;
    case 20:
        text = "Chapter Twenty";
        break;
    case 21:
        text = "Chapter Twenty One";
        break;
    case 22:
        text = "Chapter Twenty Two";
        break;
    case 23:
        text = "Chapter Twenty Three";
        break;
    case 24:
        text = "Chapter Twenty Four";
        break;
    case 25:
        text = "Chapter Twenty Five";
        break;
    case 26:
        text = "Chapter Twenty Six";
        break;
    case 27:
        text = "Chapter Twenty Seven";
        break;
    case 28:
        text = "Chapter Twenty Eight";
        break;
    case 29:
        text = "Chapter Twenty Nine";
        break;
    default:
        text = "Table of content";
}
var bar_c = text+' | pg: '+(PG+1);
$('.bar').html(bar_c);
//Chapter One | pg: 1alert(PG);
}
function chapterT(ch){
	chapter_= ch;
	//document.getElementById('cc').style.display='none';
	if(ch > 0){	
		k=localStorage.actidKey;
		n=localStorage.actN;
		if( k.length > 4 && n.length > 4){
			//..
			
	document.getElementById('bdy').style.display='block';
	document.getElementById('bdy').innerHTML = chx[ch-1];
	//document.getElementsByClassName("pg")[ppage_].style.display ="block";
	$('#cc').hide(1000);
	$('.pg:eq('+page_+')').slideDown(1000);
	//
	setTimeout(function(){skro(el)}, 1500);
	//Th();
	setTimeout(function(){
	 upDatePage = count_page(page_amount,chapter_);
		Place_chap_page(ch,upDatePage);

		$('.prev').click(function(){prev_()});
		
		$('.next').click(function(){next_()});
	}, 500);
	
		if(chapter_ == 1 && page_ == 0){
			$('.prev').css({"background-color":"green"});
			$('.prev').html('<span class="">&laquo; </span> Content');
		}else if(page_ == 0){
			$('.prev').css({"background-color":"green"});
			$('.prev').html('<span class="">&laquo; </span> Previous Chapter');			
		}
	
	//..Th();
	
			
		}
		else{
		$('#cc').hide(1000);
		$('#bdy').hide(1000);
		$('.bar').html('Activation Page');
		document.getElementById('verify').style.display='block';
		old2 = 'verify';
		Th();
		}
	}else{
	document.getElementById('bdy').style.display='block';
	document.getElementById('bdy').innerHTML = chx[(ch-1)];
	//$('#bdy').show(1000);
	//document.getElementsByClassName("pg")[0].style.display ="block";
	$('.pg:eq(0)').slideDown(1000);
	$('#cc').hide(1000);
	//alert('pass here');
	//Th();
	//setTimeout(myFunction, 500);
	setTimeout(function(){
		up_p = count_page(page_amount,(ch))
		Place_chap_page(chapter_,up_p);

$('.prev').click(function(){prev_()});

$('.next').click(function(){next_()});
	}, 500);
		if(chapter_ == 1 && page_ == 0){
			$('.prev').css({"background-color":"green"});
			$('.prev').html('<span class="">&laquo; </span> Content');
		}else if(page_ == 0){
			$('.prev').css({"background-color":"green"});
			$('.prev').html('<span class="">&laquo; </span> Previous Chapter');			
		}
	}	
}

var page_amount =[
0,12,7,4,6,7,7,9,6,6,7,//<-10
7,3
];

function count_page(arr,no){
	var al = 0;
	for(a=0; a<no; a++)
	{
		al = al + arr[a];
	}
	return al;
}