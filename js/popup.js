window.addEventListener("DOMContentLoaded",getIpt);


function g(id){
	return document.getElementById(id);
}
function getIpt(){
var ipt=g("ipt"),
invert=g("invert"),
filt=g("filt");

filt.onclick=invert.onclick=function(e){

 var e = e || window.event,
               t = e.target || e.toElement,
			   cmd;
			   
			   if(t.id=="invert")
				   cmd=1;
			   else if(t.id=="filt")
				   cmd=ipt.value;
			   
			   send(cmd)


//send();
}



}
function hd(e){
	
}
function send(cmd){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        chrome.tabs.sendMessage(tabs[0].id, cmd, function(response)
{
	  if (chrome.runtime.lastError) {
    // 发送消息出现错误，进行错误处理
    console.error(chrome.runtime.lastError);
    return;
  }
    console.log('来自content的回复：'+response);
});
    });
	
	
	
}






