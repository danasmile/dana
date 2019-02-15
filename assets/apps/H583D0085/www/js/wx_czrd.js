$(document).ready(function(){
    	//域名
        var httpHead = 'https://jys.hedu.mobi/';
        //域名
        if(localStorage.ltoken) {
            //用户ltoken
            var lToken = localStorage.ltoken;
          
         //layer.msg(localStorage.ltoken,{coin:1});
         	//微信个人信息
         	$.ajax({
         		type:"post",
         		url:httpHead+'Wap/User/zhifushezhi_aliw',
         		data:{ltoken:lToken},
         		success:function(data){
         			//console.log(data);
         			if(data['code'] == 200){
					//$('.wrap').show()
         				if(data['body']['weixin_img'] == null){
         					$('.wrap').show();
         				}else{
         					$('#identity-after').show();
         					$('#identity-after .name').html(data['body']['weixin_name']);
         					$('#identity-after .num').html(data['body']['weixin']);
         					$('#identity-after .erweima').attr('src',httpHead+'Upload/zhifu/'+data['body']['weixin_img']);
         					$('#re-bind').on('click', function(){
         						$('.wrap').show();
         						$('#identity-after').hide();         						
         					})
         				}
         			}
         		},
         		error:function(data){
         			console.log(data);
         		}
         	});
         	//微信个人信息
            $('.submitBtn').on('click', function(){            	
            	//判断姓名是否为空
				if($("#wei_name").val() == ""){
					layer.tips('请填写微信账号持有人姓名','#wei_name',{tips:3});
					return false;
				}
				if($("#wei_nameid").val() == ""){
					layer.tips('请输入您要绑定的微信账号','#wei_nameid',{tips:3});
					return false;
				}
				if($("#fund_pwd_wei").val() == ""){
					layer.tips('请输入您的资金密码','#fund_pwd_wei',{tips:3});
					return false;
				}
				if(!$('.upload-img1').attr('data-type')){
					layer.tips('请上传二维码','.upload-img1',{tips:3});
					return false;
				}
				
				var up_img=new FormData();
				up_img.append('file',$(".upload-img").get(0).files[0]);
				up_img.append('ltoken',localStorage.ltoken);
				up_img.append('wei_name',$("#wei_name").val());
				up_img.append('wei_nameid',$("#wei_nameid").val());
				up_img.append('fund_pwd_wei',$("#fund_pwd_wei").val());
				
				$.ajax({
					url:httpHead+'Wap/User/weixin',
					type:'post',
					cache:false,
					contentType: false,
					processData: false,
					data:up_img,
					success:function(data){
						if(data.code == "200"){
							layer.msg('绑定成功',{icon:1,shift:5});
							setTimeout(function(){location.reload();},3000);
						}else{
							layer.msg(data['result'],{icon:2,shift:5});
						}
					},
					error:function(data){
						console.log(data);
					}
				});				
			}); 
	        //上传图片
	        $(".upload-img").change(function () {
	           //将图片的路径动态存入数组
	            var obj=$(this).get(0).files[0];
	            var wuc=window.URL.createObjectURL(obj);
	            $(this).siblings("img").attr('src',wuc);
	            $(this).attr('data-type',true);
	        });
        }else{
        	layer.msg('请先登录',{icon:2});
        }
       
});
