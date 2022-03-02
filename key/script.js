//the name of this file is script.js
//purpose: to generate random Number(yek)

//document.getElementById('who').innerHTML=Math.random();
var leta = 'ZYXWVFEDCB';
letta = 'JKLMNOPQRS';
text = '';
function gener(){
	text = '';
			for (i = 0; i < 5; i++) {
			text += leta[Math.floor(Math.random()*9)];
			}
	var gene = Math.floor(Math.random()*9);
	//gene = 'h'+' '+gene;
	//res = gene.slice(4,9);//alert('i wuk');
	document.getElementById('who').innerHTML=text;
	//document.getElementsByClassName('chap')[0].innerHTML=res;
	//res2 = leta[Number(res[0])]+leta[Number(res[1])]+leta[Number(res[2])]+leta[Number(res[3])]+leta[Number(res[4])];
}gener();

function acti(){
		text2 = '';
		for(ii = 0; ii < 5; ii++) {
			for (i = 0; i < 9; i++) {
				if(text[ii]==leta[i]){text2+=i;break;}
			}}
	document.getElementsByClassName('chap')[2].innerHTML=text2;
	text3='';
			for (iii = 0; iii < 5; iii++) {
				if(iii==4){
				text3+=Math.max(text2[0],text2[4])-Math.min(text2[0],text2[4]);}
				else{
				text3+=Math.max(text2[iii],text2[iii+1])-Math.min(text2[iii],text2[iii+1]);
				
			}}
	document.getElementsByClassName('chap')[3].innerHTML=text3;
	
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
	document.getElementsByClassName('chap')[4].innerHTML=text4;
	document.getElementById('keyS').innerHTML=text4;
}
function acti2(){
		var text2 = '';
		key01 = document.getElementById('key001').value;
		key01 = key01.toUpperCase();
		for(ii = 0; ii < 5; ii++) {
			for (i = 0; i < (9+2); i++) {
				if(key01[ii]==leta[i]){text2+=i;break;}
				if(i == 10){
					document.getElementById('keyS').innerHTML='Invalid Key';
	document.getElementById('keyS').style.display='block';
					return;}
			}}
	//document.getElementsByClassName('chap')[2].innerHTML=text2;
	text3='';
			for (iii = 0; iii < 5; iii++) {
				if(iii==4){
				text3+=Math.max(text2[0],text2[4])-Math.min(text2[0],text2[4]);}
				else{
				text3+=Math.max(text2[iii],text2[iii+1])-Math.min(text2[iii],text2[iii+1]);
				
			}}
	//document.getElementsByClassName('chap')[3].innerHTML=text3;
	
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
	document.getElementById('keyS').style.display='block';
	document.getElementById('keyS').innerHTML=text4;
	//document.getElementsByClassName('chap')[4].innerHTML=text4;
}

function enta(){
	var x = document.getElementById('who').innerHTML;
	
	y = x[2];
	z = x[3];
	ag = document.getElementById('key002').value
	if(ag.toUpperCase() == (y+z+'ox').toUpperCase()){
		document.getElementById('gate').style.display = 'none';
		document.getElementById('showkey').style.display = 'block';
	}
	//console.log((y+y+z+z));console.log(ag);
}

//the Programmers Key
/*
function verifyKey(){
	//if(localStorage.actidKey)
	if(localStorage.KeyOpen && localStorage.KeyOpen.length > 3 )
	{
		document.getElementById('pro_gate').style.display = 'none';
		return;
	}
	var textKey='';
	if(localStorage.Key && localStorage.Key.length > 2){
		
	}else{
		for (i = 0; i < 3; i++) {
			textKey += leta[Math.floor(Math.random()*9)];
		}
  		localStorage.Key = textKey;	}
	document.getElementById('pro_who').innerHTML=localStorage.Key;
}verifyKey();
*/
function pro_act()
	{
		var pro = document.getElementById('Pro_Key').value;
		proK = localStorage.Key;
		if(pro == proK[1]+proK[0]+proK[0]+proK[2]+proK[2])
		{
			document.getElementById('pro_gate').style.display = 'none';
			localStorage.KeyOpen = proK[1]+proK[0]+proK[0]+proK[2]+proK[2];
		}
	}