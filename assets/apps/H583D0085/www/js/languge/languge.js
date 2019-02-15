languge();

var lanTime;
function languge(){
	//加载中文
	if(localStorage.lan == 0 || localStorage.lan == undefined){
		loadJS('../js/languge/zh.js');
		$('.cur-language').text('简体中文');
	}
	//加载英文
	if(localStorage.lan == 1){
		loadJS('../js/languge/en.js');
		$('.cur-language').text('English');
	}
	clearTimeout(lanTime);
	lanTime = setTimeout(function(){
		languge();
	},3000)
}

//动态加载js
function loadJS(url, onload) {
    var domscript = document.createElement('script');
    domscript.src = url;
    domscript.charset = 'utf-8';
    if (onload) {
        domscript.onloadDone = false;
        domscript.onload = onload;
        domscript.onreadystatechange = function () {
            if ("loaded" === domscript.readyState && domscript.onloadDone) {
                domscript.onloadDone = true;
                domscript.onload();
                domscript.removeNode(true);
            }
        };
 
  }
  document.getElementsByTagName('head')[0].appendChild(domscript);
}