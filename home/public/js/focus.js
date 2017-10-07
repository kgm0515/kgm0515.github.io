

$(function(){
	
	(function(){
		var cur=0;
		$('.focus-dot li').each(function(i){
			$(this).mouseover(function(){
				cur=i;
				$('.focus p').eq(i).fadeIn('slow').siblings('p').hide();
				$(this).siblings('li').removeClass('focus-dot-active').end().addClass('focus-dot-active');
				//侧边栏开始
				$('.focus-list .focus-item').eq(i).fadeIn('slow').siblings('ul').hide();
				//侧边栏结束
				
				return false;
			});
		});
		
		var pg=function(flag){
			//flag:true表示前翻；false表示后翻；
			if(flag){
				if(cur==0){
					todo=1;
				}else{
					todo=(cur-1)%7;
				}
			}else{
				todo=(cur+1)%7;
			}
			$('.focus-dot li').eq(todo).mouseover();
		};
		//自动翻滚
		var timer=setInterval(function(){
			todo=(cur+1)%7;
			$('.focus-dot li').eq(todo).mouseover();
		},3000);
		//鼠标悬停是停止播放动画
		$('.focus p').hover(function(){
			clearInterval(timer);
		},
		//设置动画自动播放
		function(){
			timer=setInterval(function(){
				todo=(cur+1)%7;
				$('.focus-dot li').eq(todo).mouseover()
			},3000);
		});
	})();
	
	
	
});