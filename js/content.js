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

console.log(123,loaded,cn);



chrome.runtime.onMessage.addListener(function(cmd, sender, sendResponse)
{
	if(cmd==1)
		document.documentElement.style.filter = "invert(0.99) grayscale(1)";
	else
	{
		var ct=document.getElementById(cmd),
		 bd=document.body;
		
		bd.innerText="";
		bd.style="padding: 2em 3em;background-image: none;";
		bd.appendChild(ct);	
		ct.style="font-size: 22px!important";
	}
	

		
		//console.log(ct.innerText);
		sendResponse('from conent receive');
});

