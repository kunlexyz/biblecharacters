/*
function mODE(elem){
elem.css({"margin-left": siz+"px"});

}
mODE('#logoTem');
*/

// font setting - handwritting setting

//......

var old='';oldx='';
function openNav() {
  document.getElementById("myNav").style.width = "75%";
  document.getElementsByClassName('overlay2')[0].style.display='block';
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementsByClassName('overlay2')[0].style.display='none';
}

//****a function for loading security
function loadGate(){
	var gate = '<div class="contentChap ce" id="verify" style="position:fixed;"><div class="headaChap">To Get this chapter, you must activate this app<br />Version: 1.0.2</div>Verification Number:<div id="vN" class="heada" style="font-size:33px;">XXXXX</div><div class="imDesc">Enter the Activation Number below:</div><input type="text" onblur="upperC()" id="act" name="act" style="border:solid 3px #090; min-width:300px; max-width:95%; font-size:33px; text-align:center" /><br /><button onclick="activ8()">Activate</button><div class="content ce" style="margin-top:9px; background-color:#C8FDA8"><div id="activate">To Get your activation number</div><strong>Contact:</strong><br /><a href="https://wa.me/+2348033527655"><img src="../images/wh.png" /></a><br />+234(0)8033527655<br />+234(0)8170767404</div><button onclick="rem()">removeIt</button><div id="tk"></div></div>';
	DIVcontent = document.getElementById('navig8').innerHTML;
	document.getElementById('navig8').innerHTML = gate + DIVcontent;
	
}
/*************YEK**********/
var leta = 'ZYXWVFEDCB';
letta = 'JKLMNOPQRS';
text = '';
textLetta = '';
serva = 'https://youreventplug.com';
//serva = 'http://localhost';
if(location.host=='' || location.host=='localhost'){
	serva = 'http://localhost';
}
//generator
function gener(){
	text = '';
			for (i = 0; i < 5; i++) {
			text += leta[Math.floor(Math.random()*9)];
			}
  	localStorage.biO = text;
	localStorage.actN = 0;
	
	textLetta = '';
	
			for (ii = 0; ii < 2; ii++) {
			textLetta += Math.floor(Math.random()*9);
			}
			for (i = 0; i < 3; i++) {
			textLetta += letta[Math.floor(Math.random()*9)];
			}
  	localStorage.actidKey = textLetta;
}
//acti ....the id number corespondant
//idKey() is just for key generation that is not useful in this development
function idKey(){
		text2 = '';
		for(ii = 3; ii < 5; ii++) {
			for (i = 0; i < leta.length; i++) {
				if(localStorage.biO[ii]==leta[i]){text2+=i;break;}
			}}
		for(iii = 2; iii >= 0; iii--) {
			for (i = 0; i < leta.length; i++) {
				if(localStorage.biO[iii]==leta[i]){text2+=i;break;}
			}}
	//debugger** document.getElementsByClassName('chap')[2].innerHTML=text2;
	text3='';
			for (iii = 0; iii < 5; iii++) {
				if(iii==4){
				text3+=Math.max(text2[0],text2[4])-Math.min(text2[0],text2[4]);}
				else{
				text3+=Math.max(text2[iii],text2[iii+1])-Math.min(text2[iii],text2[iii+1]);
				
			}}
	//debugger** document.getElementsByClassName('chap')[3].innerHTML=text3;
	
	text4='';
	/*
		for(ii = 0; ii < 5; ii++) {
			for (i = 0; i < 9; i++) {
				if(text3[ii]==leta[i]){text4+=i;break;}
			}}
	*/
			for (i = 0; i < 5; i++) {
			text4 += leta[text3[i]];
			}
	//debugger*** document.getElementsByClassName('chap')[4].innerHTML=text4;
	//remove this localStorage.actN before converstion 
	localStorage.actidKey = text4;
}

function verify(){
	//if(localStorage.actidKey)
	if(typeof localStorage.biO !== 'undefined'){
		document.getElementById('vN').innerHTML = localStorage.biO;
		headcon = 'To Get This Chapter, You Must Activate This App<br />';
		document.getElementsByClassName('headaChap')[0].innerHTML = headcon + '<div><span id="AppId_unpaid"></span></div>';
		//check if app has been activate
		text2 = '';
		var veriKey = localStorage.actN;
		veriCon = localStorage.biO;
		actMe = localStorage.biO;
		veriCon.toUpperCase();
		for(ii = 0; ii < 5; ii++) {
			for (i = 0; i < leta.length; i++) {
				if(veriCon[ii]==leta[i]){text2+=i;break;}
			}}
	if(text2.length < 5){
	document.getElementById('tk').innerHTML = veriCon+' This app is not activatedxx';
		}else{
			text3='';
					for (iii = 0; iii < 5; iii++) {
						if(iii==4){
						text3+=Math.max(text2[0],text2[4])-Math.min(text2[0],text2[4]);}
						else{
						text3+=Math.max(text2[iii],text2[iii+1])-Math.min(text2[iii],text2[iii+1]);
						
					}}
			
			text4='';
					for (i = 0; i < 5; i++) {
					text4 += leta[text3[i]];
					}
			if(text4 == veriKey){					
					/*
	textLetta = '';
	
			for (ii = 0; ii < 2; ii++) {
			textLetta += Math.floor(Math.random()*9);
			}
			for (i = 0; i < 3; i++) {
			textLetta += letta[Math.floor(Math.random()*9)];
			}
  	localStorage.actidKey = textLetta;
	*/
	localStorage.actN = veriKey;
				
					document.getElementById('tk').innerHTML = 'This app is activated !!!<br /> Reg No :'+ localStorage.actidKey;
					document.getElementById('verify').style.display = 'none';	
					document.getElementById('coHide').style.display = 'block';	
					
//Propeller code start here

	addr = document.location.href;
	//addr = addr.toString;
	addr = addr.split('#');
	console.log(addr);
	//alert(addr[1]);
	//n = addr[1];
	if(addr.length == 1){
		page_ = 1;
	}else{
		page_ = addr[1];
	}
	/*
	document.getElementsByClassName('pg')[0].style.display='none';
	document.getElementsByClassName('pg')[n].style.display='block';
	*/
	prev_();
//Propeller code end here
	
			}text4='';}
		//******
		}else{//alert('cant see');
		
		gener();
		document.getElementById('vN').innerHTML = localStorage.biO;
		headcon = document.getElementsByClassName('headaChap')[0].innerHTML;
		document.getElementsByClassName('headaChap')[0].innerHTML = headcon + '<div> Your App ID:<span id="AppId_unpaid">'+localStorage.actidKey+'</span></div>';
	}
	if(localStorage.actN){}else{//run remove actN key since it is no longer needed
		}
	//if(localStorage.actidKey){}else{idKey();}
	document.getElementById('tk').innerHTML = localStorage.biO+'=>'+localStorage.actN+'=>'+localStorage.actidKey;
		
}
// activation key should not be store anywhere
verify();

function activ8(){
		text2 = '';
		var veriKey = document.getElementById('act').value;
		veriCon = localStorage.biO;
		actMe = localStorage.biO;
		veriCon.toUpperCase();
		for(ii = 0; ii < 5; ii++) {
			for (i = 0; i < leta.length; i++) {
				if(veriCon[ii]==leta[i]){text2+=i;break;}
			}}
	var yo = veriKey.toUpperCase();
	yb = actMe[3]+actMe[1]+'ox';
	yb = yb.toUpperCase();
	
	if(yo == yb){
		document.getElementById('tk').innerHTML = "Temporary activation key designed for oxbrand staffs";
		document.getElementById('verify').style.display='none';
		
		document.getElementById('coHide').style.display='block';
					
//Propeller code start here

	addr = document.location.href;
	//addr = addr.toString;
	addr = addr.split('#');
	console.log(addr);
	//alert(addr[1]);
	//n = addr[1];
	if(addr.length == 1){
		page_ = 1;
	}else{
		page_ = addr[1];
	}
	/*
	document.getElementsByClassName('pg')[0].style.display='none';
	document.getElementsByClassName('pg')[n].style.display='block';
	*/
	prev_();
//Propeller code end here
		
		/*
		$('.bar').html('trial version');

		if(chapter_title == 'yes'){
	document.getElementById('bdy').innerHTML = chx[chapter_-1];
	$('.pg:eq('+page_+')').slideDown(1000);
	//skro(chapter_title[2]);
	
		}else{
	document.getElementById('bdy').innerHTML = chx[chapter_title[0]-1];
	$('.pg:eq('+page_+')').slideDown(1000);
	//skro(chapter_title[2]);
			
		}		
	setTimeout(function(){
		//Place_chap_page(ch,upDatePage);

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
		return;
		*/
	}
	if(text2.length < 5){
	document.getElementById('tk').innerHTML = veriCon+' is an Invalid Activation Key';
		}else{
			text3='';
					for (iii = 0; iii < 5; iii++) {
						if(iii==4){
						text3+=Math.max(text2[0],text2[4])-Math.min(text2[0],text2[4]);}
						else{
						text3+=Math.max(text2[iii],text2[iii+1])-Math.min(text2[iii],text2[iii+1]);
						
					}}
			
			text4='';
					for (i = 0; i < 5; i++) {
					text4 += leta[text3[i]];
					}
			if(text4 == veriKey){					
					
	textLetta = '';
	
			for (ii = 0; ii < 2; ii++) {
			textLetta += Math.floor(Math.random()*9);
			}
			for (i = 0; i < 3; i++) {
			textLetta += letta[Math.floor(Math.random()*9)];
			}
	localStorage.actN = veriKey;
	localStorage.sutats = 1514;

				document.getElementById('verify').style.display='none';
				document.getElementById('coHide').style.display='block';
				/*
				document.getElementById('vNx').innerHTML = veriCon;
				document.getElementById('vN2').innerHTML = localStorage.actN;
				document.getElementById('AppId').innerHTML = localStorage.actidKey;
				*/
				
					document.getElementById('tk').innerHTML = 'successfully activated !!!<br />Thanks for your patronage<br /> Reg No :'+ localStorage.actidKey + '<br /> Click the button below to go back to "table of content" <br /> <a href="content.html"><button>Content</button></a>';	
				}else{
					document.getElementById('tk').innerHTML = veriCon+' is an Invalid Activation Key'+text4;
			};
	}
}

function upperC(){
		var veriCon = document.getElementById('act').value;
		document.getElementById('act').value = veriCon.toUpperCase();
}
	
var cc = localStorage.getItem("verN");
//alert(cc);
function rem(){
	localStorage.biO = 0;
	localStorage.actN = 0;
	localStorage.actidKey = 0;
}
/*** marker **/

var g=document.getElementsByClassName('qBox_bio');
gg=document.getElementsByClassName("resp");
xw='<span class="T_A_required">Teacher\'s attention required</span>';
function myFunction(){
for (var i = 0, len = g.length; i < len; i++)
{
//if(answer[i][0].length < 1){gg[i].innerHTML=xw}else{ gg[i].innerHTML=answer[i][0];}
    (function(index){
        g[i].onkeyup = function(){
              //alert(index+1)  ;
			  if(answer[index][0].length < 1){gg[index].innerHTML=xw}else{
				  
              var y=g[index].value.toLowerCase();
              xx=answer[index];
              mk = "";
              anso = "f";
              //alert(xx.length);
			  			 
			  
			  for (var ii = 0, len = xx.length; ii < len; ii++)
			  {x2 = xx[ii].toLowerCase();
			  if(y==x2){anso = "t";
			  /*
			  return anso;
			  break;
			  */
			  }
			  }
			  
if(anso=="t"){z= "<img src='../images/correctx.jpg' alt='correct' />";}
else{z= "<img src='../images/wrongx.jpg' alt='wrong' />"}//{z= x2}
//document.getElementById("demo").innerHTML=z;
gg[index].innerHTML=z;
        }}    
    })(i);

}
}
//setTimeout(myFunction, 3000);
//***for w100 response
/*
var gw100=document.getElementsByClassName('w100');
ggw100=document.getElementsByClassName("w100resp");
for (var i = 0, len = g.length; i < len; i++)
{
//if(answer[i][0].length < 1){gg[i].innerHTML=xw}else{ gg[i].innerHTML=answer[i][0];}
    (function(index){
        gw100[i].onkeyup = function(){
			ggw100[i].innerHTML=xw;
			}
	})(i);
}
*/
var gw100=document.getElementsByClassName('w100');
var ggw100=document.getElementsByClassName("w100resp");
xw='<span class="T_A_required">Teacher\'s attention required</span>';
function myFunction2(){
	ggw100=document.getElementsByClassName("w100resp");
	for (var i = 0, len = ggw100.length; i < len; i++)
	{
	ggw100[i].innerHTML=xw;
	}
}
//setTimeout(myFunction2, 3000);
//...themes
var them = 0;
function theme2(title,text,groundD,groundOdd,titleText){
	$('body').css({"background-color":groundD,"color":text});
	$('tr').css({"background-color":groundD,"color":text});
	$('tr:nth-child(odd)').css({"background-color":groundOdd,"color":text});
	$('.pa').css({"background-color":groundD,"color":text});
	$('.pa:nth-child(odd)').css({"background-color":groundOdd,"color":text});
	$('a').css({"color":text});
	$('.fig').css({"background-color":title,"color":titleText});
	$('.titBox').css({"background-color":title,"color":titleText});
	$('.headaChap').css({"background-color":title,"color":titleText});
	$('.co').css({"background-color":groundD,"color":text});
	$('.imDesc').css({"background-color":title,"color":titleText});
	$('.content').css({"background-color":title,"color":titleText});
}

function Th(){
	
	if(typeof localStorage.them === 'undefined'){them = 0;}else{
		them = localStorage.them;
	}
	
	if(typeof localStorage.H === 'undefined'){}else{
	H = localStorage.H;
	hs = localStorage.hs;
	
	$('h3').css({"font-size":H+"px"});
	$('h4').css({"font-size":H+"px"});
	$('.pa').css({"font-size":hs+"px"});
	}
	
	if(typeof localStorage.font === 'undefined'){}else{
	ft = localStorage.font;
	$('body').css({"font-family":ft});
	$('h3').css({"font-family":ft});
	$('h4').css({"font-family":ft});
	$('.pa').css({"font-family":ft});
	}
	
	if(them == 1 || them == '1'){
			theme2('#A85400','#000','#ffffa5','#ffc774','#fff');
	}else if(them == 2 || them == '2'){
			theme2('#F00','#000','#FFF','#fde','#fff');
	}else if(them == 3 || them == '3'){
			theme2('#060','#000','#dFd','#afa','#fff');
	}else if(them == 4 || them == '4'){
			theme2('#C09','#000','#fbb8fb','#fb99fb','#fff');
	}else if(them == 5 || them == '5'){
			theme2('#006','#000','#99F','#AAF','#FFF');
	}else if(them == 6 || them == '6'){
			theme2('#412','#DDD','#000','#111','#FFF',6);
	}
}
//Th();
var H = 18;
hs = 15;
ft = 'myFirstFont';

function sizIN(){
	H = H +3;
	hs = hs + 3;
	$('.pa').css({"font-size":hs+"px"});
	$('.pg').css({"font-size":hs+"px"});
	
}
function sizDE(){
	H = H - 3;
	hs = hs - 3;
	$('.pa').css({"font-size":hs+"px"});
	$('.pg').css({"font-size":hs+"px"});
}
function fontType(ourFont){
	var ourFont= document.getElementById('font').value;
	$('.pg').css({"font-family":ourFont});
	$('.pa').css({"font-family":ourFont});
	ft = ourFont;
}

//Code to mark the new options
function opMark(x,y)
{
	if(y == 1){
		document.getElementById(x).innerHTML = '<img src="./images/correctx.jpg" alt="correct">';
	}else{
		document.getElementById(x).innerHTML = '<img src="./images/wrongx.jpg" alt="wrong">';
		}
}

//***my code for paystack
function showPayStack_box(){
	//document.getElementById('paymentForm').style.display = 'block';
	//document.getElementById('btn001').style.display = 'none';
	
	$('#pay_stack_pay').show();
	$('#manual_pay').hide();
}

function back_to_manual_pay(){
	$('#pay_stack_pay').hide();
	$('#manual_pay').show();	
}
//*****StackPay

const paymentForm = document.getElementById('paymentForm');

paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {

  e.preventDefault();

  var handler = PaystackPop.setup({

	//key: 'pk_live_51bc67be9024b3760af035491cd10340b9870d05', // New key Bunmi royale

	key: 'pk_live_8d5d8dba83540762c86d8c19db60547da71cb442',//FCMB - OXbrand Planet Previous key

	//key: 'pk_live_2ef52de9808da6451acc489eb37769a1c7171de5',
	
	//key: 'pk_test_76bb4dc899b8499152b3a334aa5748f424217937', //kunle's p-key

    email: document.getElementById("email-address").value,

    amount: 1000 * 100, //.....1000 is th price

    firstname: document.getElementById("first-name").value,

    lastname: document.getElementById("last-name").value,

    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you

    // label: "Optional string that replaces customer email"

    onClose: function(){

      alert('Window closed.');

    },

    callback: function(response){

      var message = 'Payment complete! Reference: ' + response.reference +
	  '\n if you cannot access the content, please close the app and reopen';

      alert(message);
	  
	  // The Opening
	  
			text3='';
					for (iii = 0; iii < 5; iii++) {
						if(iii==4){
						text3+=Math.max(text2[0],text2[4])-Math.min(text2[0],text2[4]);}
						else{
						text3+=Math.max(text2[iii],text2[iii+1])-Math.min(text2[iii],text2[iii+1]);
						
					}}
			
			text4='';
					for (i = 0; i < 5; i++) {
					text4 += leta[text3[i]];
					}
/*	textLetta = '';
	
			for (ii = 0; ii < 2; ii++) {
			textLetta += Math.floor(Math.random()*9);
			}
			for (i = 0; i < 3; i++) {
			textLetta += letta[Math.floor(Math.random()*9)];
			}
  	localStorage.actidKey = textLetta;
*/
	localStorage.actN = text4;
				
					document.getElementById('tk').innerHTML = 'successfully activated !!!<br />Thanks for your patronage<br /> Reg No :'+ localStorage.actidKey + '<br /> Click the button below to go back to "table of content" <br /> <a href="content.html"><button>Content</button></a>';
				document.getElementById('verify').style.display='none';
				document.getElementById('coHide').style.display='block';
				/*
				document.getElementById('vNx').innerHTML = veriCon;
				document.getElementById('vN2').innerHTML = localStorage.actN;
				document.getElementById('AppId').innerHTML = localStorage.actidKey;
				*/
    }

  });

  handler.openIframe();

}
/*
var old='';oldx='';
function openNav() {
  document.getElementById("myNav").style.width = "75%";
  document.getElementsByClassName('overlay2')[0].style.display='block';
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementsByClassName('overlay2')[0].style.display='none';
}

function showViewTab(nw){
        $("#cova").slideUp(3000);
	document.getElementById(old2).style.display='none';
	document.getElementById(nw).style.display='block';
	old2=nw;
	closeNav();
}
//...themes
function theme2(title,text,groundD,groundOdd,titleText){
	$('.headaChap').css({"background-color":title,"color":titleText});
	$('body').css({"background-color":groundD,"color":text});
	$('a').css({"color":text});
	$('.co').css({"background-color":groundD,"color":text});
	$('tr:nth-child(odd)').css({"background-color":groundOdd,"color":text});
	$('.heada1G').css({"background-color":title,"color":titleText});
	$('.cirCh').css({"background-color":title,"color":titleText});
	$('.pa:nth-child(odd)').css({"background-color":groundOdd,"color":text});
	$('.pa').css({"background-color":groundD,"color":textD});
}
*/
// online reg

function srch(){
	var user_id = localStorage.actidKey;
	veri_id = localStorage.biO;
	ac = localStorage.actN;
	
	if(typeof localStorage.BioEmail == 'undefined')
	{email = localStorage.BioEmail;}else{ email = 'none';}
	
	if(typeof localStorage.BioPhone == 'undefined')
	{phone = localStorage.BioPhone;}else{ phone = 'none';}
	
	if(typeof localStorage.sutats == 'undefined')
    {
        localStorage.sutats = 1566;
	    localStorage.LT = 0;
    }
	sut = localStorage.sutats;
	
	if(typeof localStorage.regis == 'undefined' || localStorage.reg == 'empty')
    {
        
    }
    
    // register the app once
    //send_to_reg();
    
}
srch();
function srch2(){
	
	//alert(x);
	//$("#result").load("card2.php?quick_search=qq&member="+qs);
	var p1 = localStorage.actidKey;
	p2 = localStorage.biO;
	p3 = localStorage.actN;
	p4 = localStorage.sutats;
	p5 = localStorage.LT;

	if(p5.length > 15){
		p5 = p5.slice(4,24);
	}
	p5 = p5.replace(/ /g,'-');
	//alert("i dey");
	//return p1;
	//Expecting /xxxxappxxxx/mytatus/user_app_id/veri_no/key/state
	console.log(serva+"/xxxbiblexxx/mytatus/"+p1+"/"+p2+"/"+p3+"/"+p4+"/"+p5);
	$.get(serva+"/xxxbiblexxx/mytatus/"+p1+"/"+p2+"/"+p3+"/"+p4+"/"+p5, function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
	var data2 = data.split("+");
	//document.getElementById('tt').innerHTML = "Switch :- "+data2[0]+"Lock Time :- "+data2[0];
	console.log(data2[0]);
	
	if(status == 'success'){}
	dat = Number(data2[0]);
	if(dat == 1514){
		
		localStorage.sutats = 1514;
					
		document.getElementById('tk').innerHTML ='App is opened by the Admin <br /> Reg No :'+ localStorage.actidKey + '<br /> Click the button below to go back to "table of content" <br /> <a href="content.html"><button>Content</button></a>';
		document.getElementById('verify').style.display='none';
        document.getElementById('coHide').style.display='block';
        
	}
	if(dat == 1566){
		
		localStorage.sutats = 1566;
		//localStorage.actN = 0;
					
		document.getElementById('tk').innerHTML ='Deactivated by the admin <br /> Reg No :'+ localStorage.actidKey + '<br /> Contact Admin for more info. <br /> <a href="content.html"><button>Content</button></a>';
		document.getElementById('verify').style.display='block';
        document.getElementById('coHide').style.display='none';
        

	}
	dat_2=Number(data2[1]);
	if(dat_2 > 0){
		ty = data2[1];//*1000;//*60;
		console.log('ty+'+ty);
		localStorage.LT = ty;
		//upd(ty);
	}else{

	}
  });

  sr = setTimeout(srch2,60000);  
	
}
srch2();
function submit_name(){ 
    name = document.getElementById('name').value;
    phone = document.getElementById('phone').value;
    //localStorage.phone
    if(phone.length <10){
        document.getElementById('help').innerHTML = 'Incorrect Number! Pls enter a valid phone number';
        return;
    }else if(name.length <2){
        document.getElementById('help').innerHTML = 'Name cannot be empty or lessthan 3 letters';
        return;
    }else{
        localStorage.phone = phone;
        localStorage.name = name;
        localStorage.regis = 'l_Reg';
        //unPopName();
        send_to_reg();
    }
}
function send_to_reg(){
    
    if (localStorage.regis == 'undefined'){
        popName();
        return;
    }
    
	var p1 = localStorage.actidKey;
	p2 = localStorage.biO;
	p3 = localStorage.phone;
	p4 = localStorage.name;
	
    $.get(serva+"/xxxbiblexxx/regis/"+p1+"/"+p2+"/"+p3+"/"+p4, function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
    
	console.log(data);
	if(status == 'success'){
        localStorage.regis = 'G_reg';
    }
        
    console.log(status);
	
    });

    if(localStorage.regis == 'l_Reg'){
    setTimeout(send_to_reg,30000);
    }
}


function srch3(){
	
	//alert(x);
	//$("#result").load("card2.php?quick_search=qq&member="+qs);
	
	p2 = localStorage.biO;
	p3 = document.getElementById('act').value;
	if(p3 < 7){
		document.getElementById('mmsg').innerHTML="invalid card";
		return;
	}
	
	//#Expecting hostname.com/xxxxappxxxx/recharge/voucher/ver_number
	console.log(serva+"/xxxbiblexxx/recharge/"+p3+"/"+p2);
	$.get(serva+"/xxxbiblexxx/recharge/"+p3+"/"+p2, function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
	//var data2 = data.split("+");
	//document.getElementById('tt').innerHTML = "Switch :- "+data2[0]+"Lock Time :- "+data2[0];
	
	if(data == 1514){
		
		localStorage.sutats = 1514;
					
		document.getElementById('tk').innerHTML ='Activated Successfully <br /> Reg No :'+ localStorage.actidKey + '<br /> Click the button below to go back to "table of content" <br /> <a href="content.html"><button>Content</button></a>';
		document.getElementById('verify').style.display='none';
        document.getElementById('coHide').style.display='block';
		document.getElementById('mmsg').innerHTML ='Activated Successfully';
        
	}else{
		document.getElementById('mmsg').innerHTML=data;		
	}
	
	
  });

}

function activ82(){
	
	if(document.getElementById('act').value.length >= 7){
		srch3();
	}
}