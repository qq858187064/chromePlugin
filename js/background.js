// 1.创建contextMenus
var contextMenu = {
    id: "onlyyou",
    title: "从这开始读",
    // contexts:page,video....
    contexts: ["selection"]
}
chrome.contextMenus.create(contextMenu);
// 2.为contextMenus添加点击事件的监听
chrome.contextMenus.onClicked.addListener(function(clickData){
    // clickData.menuItemId:被点击的菜单选项卡的id
    // clickData.selectionText:选中的内容
	alert(456)
	play(clickData.selectionText);
	console.log(clickData.selectionText)
	
	console.log(clickData)
    if(clickData.menuItemId == "onlyyou" && clickData.selectionText){
        // 执行任务
				
    }
});

