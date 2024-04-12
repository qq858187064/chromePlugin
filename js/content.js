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
	
		
		sendResponse('from conent receive');
});
function filt(cmd){
			var ct=document.getElementById(cmd),
		 bd=document.body;
		
		bd.innerText="";
		bd.style="padding: 2em 3em;background-image: none;";
		bd.appendChild(ct);	
		ct.style="font-size:1.1em!important";
}
function invert(){
		document.documentElement.style.filter = "invert(0.99) grayscale(1)";
}

