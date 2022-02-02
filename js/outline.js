//file name: outline.js
//purpose: for course outline

var outline = [

'1',['','INTRODUCTION TO BUSINESS','2',
'2.1','Meaning of business','2',
'2.2','Important characteristics of business','2',
'2.3','Meaning of business studies','2',
'2.4','Objectives of business studies','2',
'2.5','Importance of business studies','2',
'2.6','Component  of business studies','2',
'2.7','Career opportunities in business studies','2',
'2.8','Self -Assessment Questions for Unit 1','2',],

'2',['','THE OFFICE','3',
'3.1','Meaning of an office','3',
'3.2','Learning Outcomes for Unit','3',
'3.3','The Yoruba Culture','3',
'3.4','The Igbo Culture','3',
'3.5','The Bini Culture','3',
'3.6','The Itsekiri Culture','3',
'3.7','The Ijaw Culture','3',
'3.8','Summary of Unit 2','3',
'3.9','Self -Assessment Questions for Unit 2','3',
'3.10','Suggested Reading for Unit 2','3']

/*
',
'


	content2='<td></td><td>'+outline[3][0]+'</td><td>'+outline[3][0]+'</td>';*/

]
var content2='';content='';content3='';
function filIT(){
	//alert('i wok');
	content='';
	var conO = '<table>'; conC = '</table>';
	for(ii=0;ii<outline.length;ii=ii+2){
	content = '<tr onclick="chapterT('+(outline[(ii+1)][2]-1)+')"><th><div class="cirCh">'+outline[ii]+'</div></th><th><div class="hh7x">'+outline[(ii+1)][0]+'</div></th><th>'+outline[(ii+1)][1]+'</th></tr>';
	filContent2((ii+1));
	content3=content3+content+content2;
	}
	document.getElementById('cours').innerHTML='<table class="tabco">'+content3+'</table>';
	document.getElementById('bdy').innerHTML='<table class="tabco">'+content3+'</table>';
	
	filview3();
}
//filContent2(3);

function filContent2(x){
	content2='';
	var i = 3;
	while(i < outline[x].length){
	content2=content2+'<tr onclick="chapter('+(outline[x][(i+2)]-1)+',\''+outline[x][(i+1)]+'\')"><td></td><td><span class="hh7x">'+outline[x][i]+'</span></td><td>'+outline[x][(i+1)]+'</td></tr>';
	i++;
	i++;
	i++;
	}	
}
//content 3
function filview3(){
	//alert('i wok');
	content4='';
	var conO = '<table>'; conC = '</table>';
	for(ii=0;ii<outline.length;ii=ii+2){
	content4 = content4 + '<tr onclick="chapterT('+(outline[(ii+1)][2]-1)+')"><th><div class="cirCh">'+outline[ii]+'</div></th><th><div class="hh7x">'+outline[(ii+1)][0]+'</div></th><th>'+outline[(ii+1)][1]+'</th></tr>';
	}
	document.getElementById('tip').innerHTML='<table>'+content4+'</table>';
	
	//end it like this  </tr></table>
}
filIT();
