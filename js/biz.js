
/*
below_btn ='<div class="below"><div class="prev btnC fl btnRed"><span class="">&laquo; </span>Previous Page</div><span id="sol"></span><span class="sign btnRed" style="padding: 3px 10px;" onclick="openNav()">&equiv; </span><div class="next btnC fr btnRed">Next Page<span class=""> &raquo; </span></div></div>';
biz_content ='';
//loop thr chx[]
for(i=0; i<chx.length;i++){
	biz_content = biz_content+'<div class="pg">'+
	chx[i]+below_btn+'</div>';
}

document.getElementById('book').innerHTML = biz_content;

*/	
		//$('.prev').css({"display":"none"});
// function that identify page
function retun_location(){
	
	addr = document.location.href;
	//addr = addr.toString;
	addr = addr.split('#');
	
	if(addr.length == 1){
		ul = 0;
	}else{
		ul = Number(addr[1]);
	}	
	return ul;
}
	
var page_= document.getElementsByClassName("pg").length;
//document.getElementsByClassName("pg")[page_-1].style.display ="block";
function prev_(){
	/*
	if(page_ ==1){
		pp = '<span>&laquo; </span><br>Content';
		$('.prev').css({"background-color":"green"});
		$('.prev').html(pp);
	}
	*/
	
	if(page_==0){
		//$(".pg:eq("+(page_-1)+")").css({"display":"block"});
		//page_--;
		document.location = 'content.html';
	
		console.log(page_);
	
		return;
	}
	
	if(page_ ==-1){
		return;
	}
	
	console.log('prev_ = '+page_);
	
	var pagin = $(".pg:eq("+(page_)+")");
	pagin_pr = $(".pg:eq("+(page_-1)+")");
	
	win=window.innerWidth;
	half=0;
	wid = '100%';
	if(win >600){
		half = Math.ceil((win-480)/2);
		wid = '500px';
	}
	pagin.css({left:(half+'px'),"display":"block","width":wid});
	pagin_pr.css({left:(half+'px'),"display":"block","width":wid});
	
	pagin.animate({left:((win+3)+'px')},1300,
	function(){
	$(".pg:eq("+page_+")").css({"display":"none"});
	page_--;
	// document.getElementById('sol').innerHTML=page_;
	
	if(page_>29){

		nn = '<span class=""> &raquo; </span><br> Puzzle';
		
		$('.next').css({"background-color":"green"});
		$('.next').html(nn);
	
	}else{
		nn = '<span class=""> &raquo; </span><br/>Next Page';
		
		$('.next').css({"background-color":"red","display":"block"});
		$('.next').html(nn);
	}
	
	 if(page_<1){
		//$('.prev').css({"display":"none"});	
	pp = '<span class="">&laquo; </span>Previous Chapter';
	
	$('.prev').css({"background-color":"green"});
	$('.prev').html('<span class="">&laquo; </span>Table of Content');
	 
	 ulx = retun_location();
	 if(ulx == 1){
		$('.prev').css({"display":"none"});
	 }
	 }
			});
}		
// do not forget to remove the callback / promise function & put delay or setTime 1200
function next_(){
	console.log(document.getElementsByClassName("pg").length);
	if(page_==30){
		document.location = 'puzzle.html';
		return;
	}
	
	win=window.innerWidth;
	half=0;
	wid = '100%';
	if(win >600){
		half = Math.ceil((win-480)/2);
		wid = '500px';
	}
	//$(".pg:eq("+(page_+1)+")").css({"display":"block"});
	var pagin = $(".pg:eq("+(page_+1)+")");
	pagin.css({"display":"block","left":((win+3)+'px'),
	"width":wid});
	pagin.animate({left:((half)+'px')},800,
	function(){
	$(".pg:eq("+(page_)+")").css({"display":"none"});
	
	pp = '<span class="">&laquo; </span>Previous Page';
	
	$('.prev').css({"display":"block"});
	$('.prev').css({"background-color":"red"});
	$('.prev').html(pp);
	page_++;
	
	if(page_==30){

		nn = '<span class=""> &raquo; </span><br> Puzzle';
		
		$('.next').css({"background-color":"green"});
		$('.next').html(nn);
	
	}
	else if(page_==(document.getElementsByClassName("pg").length-1)){
				 //change document.location
var str = document.location;
str = str.toString();
var ul = str.substr(-7,1);

//chech if digit is two in the document location (ch)
if(ul == 'h'){
	var ul = str.substr(-6,1);
	ul = Number(ul);
}else{
	var ul = str.substr(-7,2);
	ul = Number(ul);
}
if(ul > 28){
	$('.next').css({"display":"none"});
}

if(ul > 1){
	document.location = 'ch'+(ul+1)+'.html';
	// it suppose to know the name of prev chapter
	/*
	chap = '  <a href="ch'+(ul-1)+'.html">  <div class="btnRed btnC">« chapter '+(ul-1)+'</div>  </a>  <div class="menu_btn sign"  onclick="openNav()"> ≡ </div>';
	*/
}
	}else{;
	nn = '<span class=""> &raquo; </span><br/>Next Page';
	
	$('.next').css({"background-color":"red"});
	$('.next').html(nn);
	}
	 //document.getElementById('sol').innerHTML=page_;
//alert("working"+page_);
			});
}

$('.prev').click(function(){prev_()});

$('.next').click(function(){next_()});