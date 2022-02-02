function retun_location(){
	var str = document.location;
	str = str.toString();
	var ul = str.substr(-7,1);
	
	//chech if digit is two in the document location (ch)
	if(ul == 'h'){
		ul = str.substr(-6,1);
		ul = Number(ul);
	}else{
		ul = str.substr(-7,2);
		ul = Number(ul);
	}
	return ul;
}
	pp = '<span class="">&laquo; </span>Previous Chapter';
	
	$('.prev').css({"background-color":"green"});
	$('.prev').html(pp);
	
//function run_first(){}
var ulx = retun_location();
if(ulx == 1){
	$('.prev').css({"display":"none"});
}
	
var page_= 0;
//document.getElementsByClassName("pg")[page_].style.display ="block";
function prev_(){
	if(page_==0 && chapter_ > 1){		
		
		chapter_--;
		 chapterT(chapter_);
		 return;
	
	}else if(page_<1 && chapter_ < 2){
		
		$('#bdy').hide();
		$('#cc').show(1000);
		return;
	}else if(page_==0){		
		
		chapter_--;
		 chapterT(chapter_);
		 return;
	
	}
	win=window.innerWidth;
	
	$(".pg:eq("+(page_-1)+")").css({"display":"block"});
	
	var pagin = $(".pg:eq("+(page_)+")");
	pagin.css({left:(0+'px'),"display":"block"});
	pagin.animate({left:((win+3)+'px')},1300,
	function(){
	$(".pg:eq("+page_+")").css({"display":"none"});
	page_--;
	// document.getElementById('sol').innerHTML=page_;
	 
	
	nn = 'Next Page<span class=""> &raquo; </span>';
	
	$('.next').css({"background-color":"red","display":"block"});
	$('.next').html(nn);
	 
	 if(chapter_ == 1 && page_ == 0){
		$('.prev').css({"background-color":"green"});
		$('.prev').html('<span>&laquo; </span> Content');
	 }else if(page_<1){
		//$('.prev').css({"display":"none"});	
	pp = '<span class="">&laquo; </span>Previous Chapter';
	
	$('.prev').css({"background-color":"green"});
	$('.prev').html(pp);
	 

	 }
	 upDatePage = count_page(page_amount,chapter_)+page_;
		Place_chap_page(chapter_,upDatePage);
			});
}		
// do not forget to remove the callback / promise function & put delay or setTime 1200
function next_(){
	if(page_==(document.getElementsByClassName("pg").length - 1)){
		page_ = 0;
		chapter_++;
		 chapterT(chapter_);
		 return;
	}
	
	win=window.innerWidth;
	//$(".pg:eq("+(page_+1)+")").css({"display":"block"});
	var pagin = $(".pg:eq("+(page_+1)+")");
	pagin.css({"display":"block","left":((win+3)+'px')});
	pagin.animate({left:((0)+'px')},800,
	function(){
	$(".pg:eq("+(page_)+")").css({"display":"none"});
	
	pp = '<span class="">&laquo; </span>Previous Page';
	
	$('.prev').css({"display":"block"});
	$('.prev').css({"background-color":"red"});
	$('.prev').html(pp);
	page_++;
	 upDatePage = count_page(page_amount,chapter_)+page_;
		Place_chap_page(chapter_,upDatePage);
	
	if(chapter_ == 12 && page_>=(document.getElementsByClassName("pg").length - 1))
	{
		$('.next').css({'display':'none'});
	}else if(page_>=(document.getElementsByClassName("pg").length - 1)){
		
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

	nn = 'Next Chapter<span class=""> &raquo; </span>';
	
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
	nn = 'Next Page<span class=""> &raquo; </span>';
	
	$('.next').css({"background-color":"red"});
	$('.next').html(nn);
	}
	 //document.getElementById('sol').innerHTML=page_;
//alert("working"+page_);
			});
}

$('.prev').click(function(){prev_()});

$('.next').click(function(){next_()});