//propeller.js
function propel(){
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
}

propel();

function chk(x,y,z){
	var a = event.target.value;
	xx="<img src='./images/wrongx.jpg' alt='wrong' />";
	cc="<img src='./images/correctx.jpg' alt='correct' />";
	//alert(x);
	z1=a.replace(/^\s+|\s+$/gm,'');
	
	if(z1.toUpperCase()==z.toUpperCase()){
	document.getElementById(y).innerHTML=cc;
	}else{
	document.getElementById(y).innerHTML=xx;
	}
}

aa=[
'helmet',
'body armour',
'armour',
'shield',
'dagger',
'ax',
'axe',
'pickaxe',
'pick axe',
'knives with sharp hooks',
'knives',
'sharp hooks',
'hook',
'knife with sharp hooks',
'knife',
];

function chk_(x,y,z_arr){
	var a = event.target.value;
	vv="<img src='./images/wrongx.jpg' alt='wrong' />";
	for(i=0;i<z_arr.length;i++){
		if(a.toUpperCase()==z_arr[i].toUpperCase()){
			vv="<img src='./images/correctx.jpg' alt='correct' />";
		}
	}
	document.getElementById(y).innerHTML=vv;
}