//nav.js
var nav = '<div class="mCon2" onclick="openNav()">                                            <div class="menu_dash"></div>                                            <div class="menu_dash"></div>                                            <div class="menu_dash"></div>                                  </div>                                <!-- Pop_Out Menu Codes -->                                <div id="myNav" class="overlay">                                  <div class="closebtn close3" onclick="closeNav()">&times;</div>                                                <img class="coI" src="images/1x1.png" style="width:200px; border-radius:25px; margin:auto;"  />                                  <div class="overlay-content">                                                                      <a href="./index.html">                                    <div class="menu1"><div class="bull"></div>Cover Page</div>                                    </a>                                                                        <a href="content.html">                                    <div class="menu1" onclick="">                                    <div class="bull"></div>Table of Content                                    </div>                                    </a>                                                                      <!--  <a href="diagram.html">                                    <div class="menu1" onclick=""><div class="bull"></div>Diagrams</div>                                    </a>                                                                   <a href="./about.html">                                    <div class="menu1" onclick=""><div class="bull"></div>About the Book</div>                                    </a>    -->                                                                         <a href="./copyright.html">                                    <div class="menu1" onclick="showViewTab(\'more\')"><div class="bull"></div>About The Author</div>                                    </a>      \
<a href="https://www.facebook.com/biblecharacters.info/">                                    <div class="menu1" >                                    <div class="bull"></div>Facebook Page                                    </div>                                    </a><div class="menu1" onclick="instal()">                                    <div class="bull"></div>Install this APP                                    </div>\
<div class="menu1" onclick="instr()">                                    <div class="bull"></div>Instruction                                    </div>		                                                                        </div></div>                                <div class="overlay2" onclick="closeNav()">                                </div><!-- -->';
 bar = '';

seti = '<div id="seti" class="co" style="z-index:95;">     	<div class="content ce"><div class="pa">Reading Setting</div>               <div class="imDesc"> Text Size:</div>    <div onclick="sizIN()" class="sBox sOrange">+</div>    <div onclick="sizDE()" class="sBox sOrange">-</div>                     <div class="imDesc"> Themes:</div><div><!-- (title,text,groundD,groundOdd,titleText) -->    <div onclick="theme2(\'#A85400\',\'#000\',\'#ffffa5\',\'#ffc774\',\'#fff\',1)" class="sBox sOrange">    <div class="sBoxUp" style="background-color:#A85400; color:#FFF;"></div>    <div class="sBoxDown" style="background-color:#FC0; color:#000;">1</div>    </div>        <div onclick="theme2(\'#F00\',\'#000\',\'#FFF\',\'#fde\',\'#fff\',2)" class="sBox sOrange">    <div class="sBoxUp" style="background-color:#F00; color:#FFF;"></div>    <div class="sBoxDown" style="background-color:#FFF; color:#000;">2</div>    </div>        <div onclick="theme2(\'#060\',\'#000\',\'#dFd\',\'#afa\',\'#fff\',3)" class="sBox sOrange">    <div class="sBoxUp" style="background-color:#060; color:#FFF;"></div>    <div class="sBoxDown" style="background-color:#3F6; color:#000;">3</div>    </div>        <div onclick="theme2(\'#C09\',\'#000\',\'#fbb8fb\',\'#fb99fb\',\'#fff\',4)" class="sBox sOrange">    <div class="sBoxUp" style="background-color:#C09; color:#FFF;"></div>    <div class="sBoxDown" style="background-color:#F9F; color:#000;">4</div>    </div>        <div onclick="theme2(\'#006\',\'#000\',\'#99F\',\'#AAF\',\'#FFF\',5)"  class="sBox sOrange">    <div class="sBoxUp" style="background-color:#006; color:#FFF;"></div>    <div class="sBoxDown" style="background-color:#09F; color:#000;">5</div>    </div>        <div onclick="theme2(\'#412\',\'#DDD\',\'#000\',\'#111\',\'#FFF\',6)"  class="sBox sOrange">    <div class="sBoxUp" style="background-color:#000; color:#FFF;"></div>    <div class="sBoxDown" style="background-color:#111; color:#aaa;">6</div>    </div>    </div>       <div class="pa">Hand writing:</div><select id="font" onchange="fontType()">  <option value="myFont2">Comic</option>  <option value="myFont3">Sylfaen</option>  <option value="myFont4">Swis</option>  <option value="myFont5">Freehand</option>  <option selected="selected" value="myFirstFont">Futura</option></select> <br />  <button onclick="hideSeti()" class="btnRed"> back </button>  <button onclick="hideSeti()" class="btnRed"> ok </button>           </div>    </div>';

document.getElementById('navig8').innerHTML=bar+nav+seti;
var ver='';
if(typeof localStorage.biO !== 'undefined'){
    ver = localStorage.biO;
}

var Activation_ = '\
<div id="manual_pay2" style="display:none;">\
<div class="pay" style="margin-top:10px;" onclick="manual_box(\'manual_pay\',\'manual_pay2\')">\
&laquo; Back \
</div>\
  <div class="headaChap" style="font-size:18px;">    \
      <h5>Activation Page</h5>\
      </div>\
          <div style="font-size:22px;color:red;padding-top:0px;">Verification Number is:</div>\
      <div id="vN" class="heada" style="font-size:33px;color:red;">TT</div>\
      <div class="imDesc">Enter the Activation Number below:</div>\
      <input type="text" onblur="upperC()" onkeyup="activ8()" id="act" name="act" style="border:solid 3px #de2204; min-width:300px; max-width:95%; font-size:33px; text-align:center" /><br />\
      \
      <div class="pay" style="margin-top:10px;" onclick="activ8()">\
      Activate \
      </div>\
       - <div class="pay" style="margin-top:10px;" onclick="srch2()">\
      Open Gateway \
      </div>\
  \
      <div class="content ce" style="margin-top:9px; background-color:#fdb8a8">\
            <div id="activate">\
            To send verification number on WhatsApp, click any of the phone number below\
          </div><strong>Contact:</strong><br /><a href="https://wa.me/+2348055441551?text=My%20Bible%20Character%20verification%20Number%20is%20'+ver+'"><img src="./images/wh.png" /><br />+234(0)8055441551</a><br /><a href="https://wa.me/+2348170767404?text=My%20Bible%20Character%20verification%20Number%20is%20'+ver+'">+234(0)8170767404</a><br /><br />\
            \
              \
  </div>\
  </div>\
  ';
  /*
var verify_content = '<div id="manual_pay2">\
<div class="headaChap">    \
    To Get this chapter, you must activate this app<br />    Version: 1.0.2	\
    </div>\
        Verification Number:\
    <div id="vN" class="heada" style="font-size:33px;">TT</div>\
    <div class="imDesc">Enter the Activation Number below:</div>\
    <input type="text" onblur="upperC()" id="act" name="act" style="border:solid 3px #de2204; min-width:300px; max-width:95%; font-size:33px; text-align:center" /><br />\
    <button onclick="activ8()">Activate</button>\
\
		<div class="content ce" style="margin-top:9px; background-color:#fdb8a8">\
        	<div id="activate">\
        	To activate, click any of the phone number below\
        </div><strong>Contact:</strong><br /><a href="https://wa.me/+2348055441551?text=My%20Bible%20Character%20verification%20Number%20is%20'+ver+'"><img src="./images/wh.png" /><br />+234(0)8055441551</a><br /><a href="https://wa.me/+2348170767404?text=My%20Bible%20Character%20verification%20Number%20is%20'+ver+'">+234(0)8170767404</a><br />or<br />\
        	<button onclick="showPayStack_box()" class="stack_button"> Pay with paystack payment gateway \
            </button>\
            \
</div>\
</div>\
<div id="pay_stack_pay" style="display:none;margin-top:9px; background-color:#fdb8a8">\
            \
			<button onclick="back_to_manual_pay()" class="stack_button"> Back </button>\
<form id="paymentForm" class="payForm"><div class="ce">\
            fill the form below to buy <br />(please, make sure your data is on)</div>\
<table>  <div class="form-group">\
	<tr>\
    	<td>    <label for="email">Email Address:</label>	</td>\
    	<td>    <input type="email" id="email-address" class="inp" required />	</td>\
    </tr>  </div>  <div class="form-group">\
    <tr>\
    	<td>    <label for="email">Phone No:</label>	</td>\
        <td>    <input type="tel" id="phone No" class="inp" required />	</td>\
    </tr>  \
</div>  <div class="form-group">\
    <tr>\
    	<td>    <label for="amount">Amount:</label>	</td>\
        <td>    <b style="color:#060;">1000 Naira Only</b>    <!--    <input type="tel" id="amount" required />    -->	\
        </td>\
    </tr>  \
</div>  <div class="form-group">\
    <tr>\
    	<td>    <label for="first-name">First Name:</label>	</td>\
        <td>    <input type="text" class="inp" id="first-name" />	</td>\
    </tr>  \
</div>  \
<div class="form-group">\
    <tr>\
    	<td>    <label for="last-name">Last Name:</label>	</td>\
        <td>    <input type="text" class="inp" id="last-name" />	</td>\
    </tr>  \
</div>\
    <tr>	\
    	<td>	</td>\
    	<td>  \
<div class="form-submit">\
	<button type="submit" onclick="payWithPaystack()" class="stack_button"> Pay </button>  \
</div>	\
</td>\
</tr>\
</table>\
</form>\
\
\
<div id="paystackEmbedContainer"></div></div>\
<div style="display:none;">\
        <button onclick="rem()">Test Mode Id</button>        <div id="tk"></div></div>';
        */
var verify_content = '\
\
<div id="manual_pay">\
<div style="margin: 3px;">\
<img src="images/bible2.jpg" class="img" >\
</div>\
\
<div class="pay" onclick="showPayStack_box()">\
Pay Now\
</div>\
<br>\
or\
<br>\
<div class="pay" onclick="manual_box(\'manual_pay2\',\'manual_pay\')">\
Activate manually\
</div>\
<div style="font-size: 20px;">\
<a href="https://wa.me/+2348055441551?text=I%20want%20to%20make%20an%20enquiry on%20My%20Bible%20Character"><strong><i>For enquiry:</i></strong><br>\
 click here to contact us on<br>\
<img src="./images/wh.png" /><br />+234(0)8055441551</a><br /><a href="https://wa.me/+2348170767404?text=I%20want%20to%20make%20an%20enquiry on%20My%20Bible%20Character">+234(0)8170767404</a><br />\
</div>\
</div>\
\
\
\
<div id="pay_stack_pay" style="display:none;margin-top:9px; background-color:#fdb8a8">\
            \
			<button onclick="back_to_manual_pay()" class="stack_button"> Back </button>\
<form id="paymentForm" class="payForm"><div class="ce">\
            fill the form below to buy <br />(please, make sure your data is on)</div>\
<table>  <div class="form-group">\
	<tr>\
    	<td>    <label for="email">Email Address:</label>	</td>\
    	<td>    <input type="email" id="email-address" class="inp" required />	</td>\
    </tr>  </div>  <div class="form-group">\
    <tr>\
    	<td>    <label for="email">Phone No:</label>	</td>\
        <td>    <input type="tel" id="phone No" class="inp" required />	</td>\
    </tr>  \
</div>  <div class="form-group">\
    <tr>\
    	<td>    <label for="amount">Amount:</label>	</td>\
        <td>    <b style="color:#060;">1000 Naira Only</b>    <!--    <input type="tel" id="amount" required />    -->	\
        </td>\
    </tr>  \
</div>  <div class="form-group">\
    <tr>\
    	<td>    <label for="first-name">First Name:</label>	</td>\
        <td>    <input type="text" class="inp" id="first-name" />	</td>\
    </tr>  \
</div>  \
<div class="form-group">\
    <tr>\
    	<td>    <label for="last-name">Last Name:</label>	</td>\
        <td>    <input type="text" class="inp" id="last-name" />	</td>\
    </tr>  \
</div>\
    <tr>	\
    	<td>	</td>\
    	<td>  \
<div class="form-submit">\
	<button type="submit" onclick="payWithPaystack()" class="stack_button"> Pay </button>  \
</div>	\
</td>\
</tr>\
</table>\
</form>\
\
\
<div id="paystackEmbedContainer"></div></div>\
<div style="display:none;">\
        <button onclick="rem()">Test Mode Id</button>        <div id="tk"></div></div>';
document.getElementById("verify").innerHTML=verify_content+Activation_;
/*some code are removed from here
check the original if other code are needed
*/

function showSeti(){
        $("#seti").slideDown(1000);
		closeNav();
}
function hideSeti(){
        $("#seti").slideUp(1000);
}

function showActivation_(){
    $('#verify').hide();
    //$('#manual_pay');
}

function manual_box(x,y){
    $("#"+y).slideUp(1000);
    $("#"+x).slideDown(1000);	
}