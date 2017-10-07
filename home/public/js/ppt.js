// JavaScript Document

(function($){
	//抢购区域幻灯片代码,index代表类名，num代表图片个数，wid代表宽度
	$.fn.pptShop=function(index,num,wid){
		var cur=0;
		var obj=$(index);
		obj.find('div').eq(1).find('span').each(function(i){
			//鼠标点击切换图片
			$(this).click(function(){
				$(this).siblings('span').removeClass('on');
				$(this).addClass('on');
				cur=i;
				$(this).parent().prev().animate({
					left:-cur*wid+'px',
				},700);
			});
		});
		var Timer=setInterval(function(){
			//设置播放索引每次加1；并且自动播放
			todo=(cur+1)%num;
			obj.find('div').eq(1).find('span').eq(todo).click();
		},3000);
		
		obj.hover(function(){
			//鼠标悬停在上面时停止播放；
			clearInterval(Timer);								  
		},function(){
			//鼠标离开时自动播放；
			Timer=setInterval(function(){
				todo=(cur+1)%num;
				obj.find('div').eq(1).find('span').eq(todo).click();
			},3000);
		});
	};	
	
	//左侧固定导航条,index代表类名,wid代表宽度
	$.fn.leftBar=function(index,wid){
		var obj=$(index);
		obj.hover(function(){
			$(this).find('a').stop().css('display','block').animate({
				'width':wid+'px'
			},300);		
			$(this).find('i').hide();
			if(objTop<=docTop&&objTop>=(docTop-objHeight)){
				$(this).find('a').html(txt);
			}	
		},function(){
			$(this).find('a').stop().animate({
			 'width':'30px'
			 },200,function(){
				val=obj.find('a').attr('name');
				txt=obj.find('a').attr('name2');
				//元素到页面顶部距离
				objTop=$('#'+val).offset().top;
				//元素高度
				objHeight=$('#'+val).parents('.whiteWine,.redWine,.foreignWine,.healthWine,.foodWine').height();
				//窗口到浏览器顶点距离
				docTop=$(document).scrollTop();
				//当页面滚动本元素区域时，显示动画效果；
				if(objTop<=docTop&&objTop>=(docTop-objHeight)){
					$(this).html(val);
					$(this).parent().find('i').hide();
				}else{
					$(this).css('display','none');
					$(this).parent().find('i').show();
				}
			});			
		});
		obj.click(function(){
			val=obj.find('a').attr('name');
			objTop=$('#'+val).offset().top;
			$('body,html').animate({scrollTop:objTop},400);
			return false;
		});
		
		//滚动监听事件
		$(window).scroll(function(){
			val=obj.find('a').attr('name');
			txt=obj.find('a').attr('name2');
			//元素到页面顶部距离
			objTop=$('#'+val).offset().top;
			//元素高度
			objHeight=$('#'+val).parents('.whiteWine,.redWine,.foreignWine,.healthWine,.foodWine').height();
			//窗口到浏览器顶点距离
			docTop=$(document).scrollTop();
			//当页面滚动本元素区域时，显示动画效果；
			if(objTop<=docTop&&objTop>=(docTop-objHeight)){
				obj.find('a').css('display','block').html(val);
				obj.find('i').hide();
			}else{
				obj.find('a').css('display','none').html(txt);
				obj.find('i').show();
			}
			//当页面顶部距离小于600px时，隐藏左侧栏目；
			if(docTop>1300){
				$('.leftnav').show();
			}else{
				$('.leftnav').hide();
			}
		});
	};

		
		
		

	
	  
})(jQuery);






	/*$.fn.leftBar=function(index,wid){
		var obj=$(index);
		obj.hover(function(){
			$(this).find('a').stop().css('display','block').animate({
				'width':wid+'px'
			},300);		
			$(this).find('i').hide();
		},function(){
			$(this).find('a').stop().animate({
			 'width':'30px'
			 },200,function(){
				val=obj.find('a').attr('name');
				txt=obj.find('a').attr('name2');
				//元素到页面顶部距离
				objTop=$('#'+val).offset().top;
				//元素高度
				objHeight=$('#'+val).parents('.whiteWine,.redWine,.foreignWine,.healthWine,.foodWine').height();
				//窗口到浏览器顶点距离
				docTop=$(document).scrollTop();
				//当页面滚动本元素区域时，显示动画效果；
				if(objTop<=docTop&&objTop>=(docTop-objHeight)){
					obj.find('a').css('display','block');
					obj.find('a').html(val);
					obj.find('i').hide();
				}else{
					$(this).css('display','none');
					obj.find('i').show();
				}
			});			
		});
		obj.click(function(){
			val=obj.find('a').attr('name');
			objTop=$('#'+val).offset().top;
			$('body,html').animate({scrollTop:objTop},400);
			return false;
		});
		
		//滚动监听事件
		$(window).scroll(function(){
			val=obj.find('a').attr('name');
			txt=obj.find('a').attr('name2');
			//元素到页面顶部距离
			objTop=$('#'+val).offset().top;
			//元素高度
			objHeight=$('#'+val).parents('.whiteWine,.redWine,.foreignWine,.healthWine,.foodWine').height();
			//窗口到浏览器顶点距离
			docTop=$(document).scrollTop();
			//当页面滚动本元素区域时，显示动画效果；
			if(objTop<=docTop&&objTop>=(docTop-objHeight)){
				obj.find('a').css('display','block');
				obj.find('a').html(val);
				obj.find('i').hide();
			}else{
				obj.find('a').css('display','none');
				obj.find('a').html(txt);
				obj.find('i').show();
			}
			//当页面顶部距离小于600px时，隐藏左侧栏目；
			if(docTop>1300){
				$('.leftnav').show();
			}else{
				$('.leftnav').hide();
			}
		});
	};*/


























