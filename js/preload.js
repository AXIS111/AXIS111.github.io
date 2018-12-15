/*loading.js*/

// 加载HTML图
var _LoadingHtml = '<div id="loadingDiv" style="position:fixed;left: 0;top: 0;right: 0;bottom: 0;z-index: 99999;"><div style="position: fixed;top: 50%;left: 50%;transform: translate(-50%,-50%);"><img src="images/loading.gif" style="vertical-align: middle;width: 1920px; height:1080px;"></div></div>';
 
// 呈现loading效果
document.write(_LoadingHtml);
 
// 监听加载状态改变
document.onreadystatechange = completeLoading;
 
// 加载状态为complete时移除loading效果
function completeLoading() {
　　if (document.readyState == "loading") {
　　　　var loadingMask = document.getElementById('loadingDiv');
　　　　loadingMask.parentNode.removeChild(loadingMask);
　　}
}
