let loaded = false,
el;
if (!loaded) {
	var cn=document.getElementById("ipt")
	if(cn)
	{
	document.body.innerText="";
	
//document.documentElement.getElementsByTagName("body")[0].appendChild(cn);
console.log(123,cn)
	document.body.appendChild(cn);
	}
  // document.documentElement.style.filter = "invert(0.99) grayscale(1)"
   
    loaded = true;
}

//console.log(123,loaded,cn);



chrome.runtime.onMessage.addListener(function(cmd, sender, sendResponse)
{
	
				   if(cmd.id=="invert")
				   invert();
			   else if(cmd.id=="filt")
			   filt(cmd.arg)
			   else if(cmd.id=="invertFilt")
			   {
				   filt(cmd.arg)
				   invert();
			   }
			   else if(cmd.id=="voice")
			   {
				   play(document.getElementById(cmd.arg).innerText);
			   }
			   else if(cmd.id=="filtvoice")
			   {
				   filt(cmd.arg)
				   play(document.getElementById(cmd.arg).innerText);
			   }
	
		
		sendResponse('from conent receive');
});
function filt(cmd){
			var ct=document.getElementById(cmd),
		 bd=document.body;
		
		bd.innerText="";
		bd.style="padding: 2em 3em;background-image: none!important;background-color: #fff!important;";
		bd.appendChild(ct);	
		ct.style="font-size:1.5em!important";
}
function invert(){
		document.documentElement.style.filter = "invert(0.99) grayscale(1)";
}


/*语音

function ct(i)
{
 var a=C.G(i),
 j=parseInt(i)+1,
b=C.G(j.toString()),
s="",
arr=Array.apply(0,document.body.childNodes),
ca=arr.slice(arr.indexOf(a),arr.indexOf(b));
ca.forEach(function(e){
if(e.innerText)
s+=e.innerText;
});
play(s)

}
C.AddEvent('nav','click',function(e){
var t=C.Ge(e);
if(t.tagName=="A")
{
var i=C.Attr(t,"href").substring(1),
j=i+1;
ct(i);
}
});
*/
/*ss*/
var //bt=C.G("bt"),
 ssu = new SpeechSynthesisUtterance();

 ssu.lang = 'zh-CN';
 /*
 //ssu.n=0;//记录播放次数
 //ssu.onend=function(){ssu.n++;play(ssu.n)};*/
 window.ss=speechSynthesis;
ss.onvoiceschanged=function(e){console.log("onvoiceschanged",e,e.target)};

function play(text){

if(text)
{
ss.cancel();
ssu.text=text;
ss.speak(ssu);
ss.s=0
}
/*要想循环播放，onend后需要speak一次*/

if(ss.s)
{
bt.title="朗读";
bt.className='bt9 play';
/**/
if(!text)
ss.pause();
ss.s=0;/*自定义状态标识,是否在播放或暂停中*/

}
else
{
bt.title="暂停";
bt.className='bt9 pause';
/*
if(!ss.sed)//是否已调过speak();
{
ss.speak(ssu);

}
ss.sed=1;if(!text)
*/

ss.resume();
ss.s=1;
}
}

