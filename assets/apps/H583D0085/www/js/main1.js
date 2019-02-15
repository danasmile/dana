/**
 * Created by UICUT.com on 2016/12/31.
 * Contact QQ: 215611388
 */


 (function($){
    "use strict";
    (function (){
    	// 全局事件

		// 通用：弹框关闭
		$(document).on('click', '.alert .btn-close,.alert .js_btn-cancle', function(event) {
			event.preventDefault();
			$(this).parents(".alert").fadeOut('300', function() {
				$(this).removeClass('show');
			});
		});


		// page13 开关
		$("body").on('click', '.switch', function(event) {
			event.preventDefault();
			$(this).toggleClass('on');
		});


		function timeClock(cls){
			var _this=$(cls);
			if(_this.hasClass('disabled')){
				return false;
			}else{
				_this.addClass('disabled');
				var i=59;
				var int=setInterval(clock,1000);
				function clock(){
					_this .text("重新发送("+i+")");
					i--;
					if(i<0){
						_this .removeClass('disabled');
						i=59;
						_this .text("获取验证码");
						clearInterval(int);
					}
				}
				return false;
			}
		}
		$("body").on('click', '.btn-yzm', function(event) {
			event.preventDefault();
			timeClock(".btn-yzm");
		});





    })()
})(jQuery);
//$('.hd ul li').on('click', function(){
//	alert('haah')
//	$('.hd ul li').removeClass('active');
//	$(this).addClass('active')
//	var index = $(this).index();
//	var transformL = multiplication(33.33,index);
//	$('#tabBox1-bd').css('transform','translateX(-'+transformL+'%)');
//	var tabBoxHeight = $("#tabBox1-bd .con").eq(index).height();
//	$('#tabBox1-bd').css('maxHeight',tabBoxHeight)
//});
////js运算乘法bug函数
//      function multiplication(arg1,arg2){
//          var m=0,s1=arg1.toString(),s2=arg2.toString();
//          try{m += s1.split(".")[1].length}catch(e){}
//          try { m += s2.split(".")[1].length}catch(e){}
//          return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
//      }
//      //js运算乘法bug

//
TouchSlide({slideCell:"#js_banner",titCell:".hd ul",mainCell:".bd ul",effect:"leftLoop",autoPlay:true,autoPage:true,switchLoad:"_src"});
//TouchSlide( { slideCell:"#tabBox1",
//	endFun:function(i){
//		var bd = document.getElementById("tabBox1-bd");
//		bd.parentNode.style.height = bd.children[i].children[0].offsetHeight+1+"px";
//		if(i>0)bd.parentNode.style.transition="200ms";
//	}
//} );
//TouchSlide( { slideCell:"#tabBox11",
//	endFun:function(i){
//		var bd = document.getElementById("tabBox111-bd");
//		bd.parentNode.style.height = 'auto';
//		if(i>0)bd.parentNode.style.transition="200ms";
//	}
//} );
//TouchSlide( { slideCell:"#tabBox12",
//	endFun:function(i){
//		var bd = document.getElementById("tabBox12-bd");
//		bd.parentNode.style.height = 'auto';
//		if(i>0)bd.parentNode.style.transition="200ms";
//	}
//} );