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
		 //手机验证码倒计时函数
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
                        _this .text("点击获取");
                        clearInterval(int);
                    }
                }
                return false;
            }
        }
        //手机验证码倒计时函数
		
		$("body").on('click', '.btn-yzm', function(event) {
			event.preventDefault();
			timeClock(".btn-yzm");
		});





    })()
})(jQuery);



TouchSlide({slideCell:"#js_banner",titCell:".hd ul",mainCell:".bd ul",effect:"leftLoop",autoPlay:true,autoPage:true,switchLoad:"_src"});
TouchSlide( { slideCell:"#tabBox1",
	endFun:function(i){
		var bd = document.getElementById("tabBox1-bd");
		bd.parentNode.style.height = 'auto';
		if(i>0)bd.parentNode.style.transition="200ms";
	}
} );
TouchSlide( { slideCell:"#tabBox11",
	endFun:function(i){
		var bd = document.getElementById("tabBox111-bd");
		bd.parentNode.style.height = 'auto';
		if(i>0)bd.parentNode.style.transition="200ms";
	}
} );
TouchSlide( { slideCell:"#tabBox12",
	endFun:function(i){
		var bd = document.getElementById("tabBox12-bd");
		bd.parentNode.style.height = 'auto';
		if(i>0)bd.parentNode.style.transition="200ms";
	}
} );