$(document).ready(function(){
	
    	//域名
        var httpHead = 'https://jys.hedu.mobi/';
        //域名
        if(localStorage.ltoken) {
            //用户ltoken
            var lToken = localStorage.ltoken;
            //获得银行卡列表
            function bankList(){
            $.ajax({
				url:httpHead+'Wap/User/zhifushezhi',
				type:'post',
				data:{
					//ltoken:"123456"
					ltoken:localStorage.ltoken
				},
				success:function(data){
					if(data.code == '200'){
						var shuzu = data.body;
						var str = '';
						for(var i = 0;i<shuzu.length;i++){
							var bankNumber = shuzu[i]['bankcard'];
							var bankNumberL = bankNumber.length;
							var bankNumberO = bankNumber.substring(0,4);
							var bankNumberT = bankNumber.substring(bankNumberL-4,bankNumberL);
							var bankNumberTh = bankNumber.substring(4,bankNumberL-4);
							var bankHideStr = '';
							for(var m = 0; m < bankNumberTh.length; m++){
								bankHideStr += '*';
							}
							var bankHide = bankNumberO + bankHideStr + bankNumberT;
							//console.log(bankHide)
							str += '<div class="item-bank" data-id="'+shuzu[i]['id']+'"><a href="javascript:void(0)"><h3>'+shuzu[i]['bank']+'</h3><div class="bank-float"><div class="bank-card">'+shuzu[i]['bankaddr']+'</div><div class="bank-card"><i>'+bankHide+'</i></div></div><span>X</span></a></div>';							
						}						
						$('.list-bank').html(str);						
						//删除银行卡
						$(".item-bank a span").click(function() {					        	
				        	var id = $(this).parent().parent('.item-bank').data('id');
				        	console.log(id)
				        	delCard(id);				            
				       });						
					}					
				},
				error:function(data){
					 layer.msg("data.result",{coin:2});
					
				}
			}); 
//			setTimeout(function(){bankList()},5000);
          }
	       bankList()
		 //获得银行卡列表
			
			//删除卡号
			function delCard(id){
				layer.confirm(
					'解除银行卡绑定？', 
					{
	            		btn : [ '确定', '取消' ]
	        		},
	        		function(index) {
		            layer.close(index);		            		            
		            //此处请求后台程序，下方是成功后的前台处理……
		            $.ajax({
						url:httpHead+'Wap/User/del_bind_bank',
						type:'post',
						data:{
							ltoken:localStorage.ltoken,
							bank_id:id
						},
						success:function(data){
							if(data.code == "200"){
								layer.msg(data.result,{coin:1,shift:5});
								setTimeout(function(){
									location.reload();
								},1000)
							}else{
								layer.msg(data.result,{coin:1,shift:5});
								setTimeout(function(){
									location.reload();
								},1000)
							}
						}
					});		            		            		            
		            var index = layer.load(0,{shade: [0.7, '#393D49']}, {shadeClose: true}); 
		           // location.href = "HotDeviceManagementServlet?action=restart";		           
	        		}
				)
				$('.layui-layer-dialog').css({'left':'50%','margin-left':'-120px'});
			}
			//删除卡号
			
			 //添加银行卡
	         $('.item').on('click',function(){
				var con = $(this).html();
				localStorage.setItem('data',con);
				location.href = 'remove_bind.html';
			})
        
        
        }else{
        	layer.msg('请先登录',{icon:2});        	
        }
});
