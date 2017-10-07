
$(function(){
	//顶部下拉框------------------------------------------------
	$('.top-n1').mouseenter(function(){
		$('.top-n1 .top-down').css('display','block');
		$('.top-jiuxian .top-tri').css('transform','rotate(180deg)');
	}).mouseleave(function(){
		$('.top-n1 .top-down').css('display','none');
		$('.top-n1 .top-tri').css('transform','rotate(360deg)');
	});
	$('.top-n8').mouseenter(function(){
		$('.top-n8 .top-down').css('display','block');
		$('.top-n8 .top-tri').css('transform','rotate(180deg)');
	}).mouseleave(function(){
		$('.top-n8 .top-down').css('display','none');
		$('.top-n8 .main-tri').css('transform','rotate(360deg)');
	});
	$('.top-n5').mouseenter(function(){
		$('.top-n5 img').css('display','block');
	}).mouseleave(function(){
		$('.top-n5 img').css('display','none');
	});
	$('.top-n7').mouseenter(function(){
		$('.top-n7 .top-down').css('display','block');
	}).mouseleave(function(){
		$('.top-n7 .top-down').css('display','none');
	});
	
	/*幻灯片，显示侧边栏*/
	$('.ppt-item').mouseenter(function(){
		$(this).find('.ppt-column').css('display','block');
	}).mouseleave(function(){
		$(this).find('.ppt-column').css('display','none');
	});   
		   
		   
	//中间主体内----------------------------------------------------	
	/*第一部分：抢购，爆款，囤货，口粮，*/
	/*左侧切换*/
	$('.indexTabBoxTop li').mouseover(function(i){
		var index=$(this).index();
		$(this).siblings('li').removeClass('on');
		$(this).addClass('on');
		$('.indexTabBoxBottom>div').removeClass('on');
		$('.indexTabBoxBottom>div').eq(index).addClass('on');
	});
	/*右侧上面切换*/
	$('.indexTabRightTop li').mouseover(function(i){
		var index=$(this).index();
		$(this).siblings('li').removeClass('on');
		$(this).addClass('on');
		$('.indexTabRightBottom>div').removeClass('on');
		$('.indexTabRightBottom>div').eq(index).addClass('on');
	});	   
	
	/*右侧下面幻灯片*/
	$().pptShop('.indexTab-ppTop',3,268);
	$().pptShop('.indexTab-ppBut',3,268);
	
	//优惠推荐-----------------------------------------------------
	var indexRaceNum=0;
	$('.indexRaceBox .rightNavBox>span').click(function(){
		$(this).addClass('on').siblings('span').not($(this)).removeClass('on');
		indexRaceNum=$(this).index();
		$('.indexRaceBox .bottomBox .raceBoxs').stop().animate({
			'left':	-1200*indexRaceNum+'px'										
		},700);
	});
	$('.indexRaceBox .bottomBox .raceLeft').click(function(){
		if(indexRaceNum>0){
			$('.indexRaceBox .rightNavBox>span').eq(indexRaceNum-1).click();
		}	
	});
	$('.indexRaceBox .bottomBox .raceRight').click(function(){
		if(indexRaceNum<2){
			$('.indexRaceBox .rightNavBox>span').eq(indexRaceNum+1).click();
		}																										
	});
	
	//1F----------------------------------------白酒管
	/*左侧下面幻灯片*/
	$().pptShop('.whiteWine .spiritWrap-ppt',4,210);
	/*右侧下面小图片切换*/
	$('.whiteWine .topTenSitch-right').find('a').mouseover(function(){
		var cur=$(this).index('.whiteWine .topTenSitch-right a');
		$(this).siblings().removeClass('on').end().addClass('on');
		$('.whiteWine .topTenShowBox ul').siblings().removeClass('on').eq(cur).addClass('on');
	});
	
	//2F----------------------------------------红酒管
	/*左侧下面幻灯片*/
	$().pptShop('.redWine .spiritWrap-ppt',3,210);
	/*右侧下面小图片切换*/
	$('.redWine .topTenSitch-right').find('a').mouseover(function(){
		var cur=$(this).index('.redWine .topTenSitch-right a');
		$(this).siblings().removeClass('on').end().addClass('on');
		$('.redWine .topTenShowBox ul').siblings().removeClass('on').eq(cur).addClass('on');
	});
	
	//3F----------------------------------------洋酒馆
	/*左侧下面幻灯片*/
	$().pptShop('.foreignWine .spiritWrap-ppt',3,210);
	
	//4F----------------------------------------洋酒馆
	/*左侧下面幻灯片*/
	$().pptShop('.healthWine .spiritWrap-ppt',5,210);
	
	//5F----------------------------------------洋酒馆
	/*左侧下面幻灯片*/
	$().pptShop('.foodWine .spiritWrap-ppt',3,210);
	
	//logo墙-------------------------------------
	/*墙面切换动画*/
	$('.logoContent .titleBox span').mouseover(function(){
		var cur=$(this).index('.logoContent .titleBox span');
		$('.logoContent .titleHover').stop().animate({
			left:105*cur+'px'										   
		},250);	
		$('.logoContent .logoPic').siblings().removeClass('on').eq(cur).addClass('on');
	});
	/*单张图片鼠标移上去的动画效果*/
	$('.logoContent .logoPic li').hover(function(){
		$(this).find('img').stop().animate({
			left:-100+'px'										   
		},500);	
	},function(){
		$(this).find('img').stop().animate({
			left:0										   
		},500);	
	});


	//脚部内容-------------------------------------
	/*移动到微信上面显示扫码图片*/
	weiXin=0
	$('.footQues .weixin').mouseenter(function(){
		weiXin++;																						
		if(weiXin%2==1){
			$('.footQues li:last-child img').css('display','block')	
		}else if(weiXin%2==0){
			$('.footQues li:last-child img').css('display','none')															 		}
	});
	
	//右侧固定栏目----------------------------------------------------------回到顶部
	sw=$(window).width();	
	$('.returnTop').css('height',sw);
	
	//右侧固定栏目:回到顶部
	/*我------ --*/
	$('.rightsbc1').hover(function(){
		$('.rightsbc1 .rightWrap').css('background','#c00');										
		$('.rightsbc1 .rightWrap span').css('color','#fff');
		$('.rightsbc1 .rightWrap i').css('background-position','-20px -163px');
		$('.rightsbc1 .sidebarUser').css('display','block');							   
	},function(){
		$('.rightsbc1 .rightWrap').css('background','#fff');										
		$('.rightsbc1 .rightWrap span').css('color','#333');
		$('.rightsbc1 .rightWrap i').css('background-position','0 -163px');
		$('.rightsbc1 .sidebarUser').css('display','none');
	});
	/*收藏---------*/
	$('.rightsbc2').hover(function(){
		$('.rightsbc2 .rightWrap').css('background','#c00');										
		$('.rightsbc2 .rightWrap span').css('color','#fff');
		$('.rightsbc2 .rightWrap i').css('background-position','-60px -163px');
		$('.rightsbc2 .sidebarUser').css('display','block');							   
	},function(){
		$('.rightsbc2 .rightWrap').css('background','#fff');										
		$('.rightsbc2 .rightWrap span').css('color','#333');
		$('.rightsbc2 .rightWrap i').css('background-position','-40px -163px');
		$('.rightsbc2 .sidebarUser').css('display','none');
	});
	/*购物车---------*/
	$('.rightsbc3 .sidebarUser').css('height',sw);
	$('.rightsbc3').hover(function(){
		$('.rightsbc3 .rightWrap').css('background','#c00');										
		$('.rightsbc3 .rightWrap span').css('color','#fff');
		$('.rightsbc3 .rightWrap i').css('background-position','-100px -163px');							
	},function(){
		var disp=$('.rightsbc3 .sidebarUser').css('display');
		if(disp=="none"){
			$('.rightsbc3 .rightWrap').css('background','#fff');										
			$('.rightsbc3 .rightWrap span').css('color','#333');
			$('.rightsbc3 .rightWrap i').css('background-position','-80px -163px');
		}else if(disp=="block"){
			$('.rightsbc3 .rightWrap').css('background','#c00');										
			$('.rightsbc3 .rightWrap span').css('color','#fff');
			$('.rightsbc3 .rightWrap i').css('background-position','-100px -163px');
		}
	});
	$('.rightsbc3 .rightWrap').click(function(){
		var disp=$('.rightsbc3 .sidebarUser').css('display');
		if(disp=="none"){
			$('.rightsbc3 .sidebarUser').css('display','block');
		}else if(disp=="block"){
			$('.rightsbc3 .sidebarUser').css('display','none');
		}
	});
	$('.rightsbc3 .sidebarbrand i').click(function(){
		$('.rightsbc3 .sidebarUser').css('display','none');
	});
	/*在线客服---------*/
	$('.rightsbc4').hover(function(){
		$('.rightsbc4 .rightWrap').css('background','#c00');										
		$('.rightsbc4 .rightWrap span').css('color','#fff');
		$('.rightsbc4 .rightWrap i').css('background-position','-65px -331px');							
	},function(){
		$('.rightsbc4 .rightWrap').css('background','#fff');										
		$('.rightsbc4 .rightWrap span').css('color','#333');
		$('.rightsbc4 .rightWrap i').css('background-position','-45px -331px');
	});
	/*用户反馈---------*/
	$('.rightsbc5').hover(function(){
		$('.rightsbc5 .rightWrap').css('background','#c00');
		$('.rightsbc5 .rightWrap i').css('background-position','0 -202px');	
		$('.rightsbc5 .sidebarUser').css('display','block');
	},function(){
		$('.rightsbc5 .rightWrap').css('background','#fff');
		$('.rightsbc5 .rightWrap i').css('background-position','0 -185px');	
		$('.rightsbc5 .sidebarUser').css('display','none');
	});
	/*扫描图片---------*/
	$('.rightsbc6').hover(function(){
		$('.rightsbc6 .rightWrap').css('background','#c00');
		$('.rightsbc6 .rightWrap i').css('background-position','-20px -202px');	
		$('.rightsbc6 .sidebarUser').css('display','block');
	},function(){
		$('.rightsbc6 .rightWrap').css('background','#fff');
		$('.rightsbc6 .rightWrap i').css('background-position','-20px -183px');	
		$('.rightsbc6 .sidebarUser').css('display','none');
	});
	/*回到顶部----------*/
	$('.rightsbc7').hover(function(){
		$('.rightsbc7 .rightWrap').css('background','#c00');
		$('.rightsbc7 .rightWrap i').css('background-position','-40px -202px');	
	},function(){
		$('.rightsbc7 .rightWrap').css('background','#fff');
		$('.rightsbc7 .rightWrap i').css('background-position','-40px -183px');	
	});
	$('.rightsbc7').click(function(){
		//回到顶部
		$('body,html').animate({scrollTop:0},400);
		return false;
	});

	//左侧导航条---------------------------------------------
	$('.leftnav .floorBack').hover(function(){
		$(this).find('i').css('background-position','-95px -190px')									
	},function(){
		$(this).find('i').css('background-position','-74px -190px')												
	});
	$('.leftnav .floorBack').click(function(){
		$('.rightsbc7').click();								
	});

	
	/*1F----------*/
	$().leftBar('.leftnav .floor1',80);
	/*2F----------*/
	$().leftBar('.leftnav .floor2',80);
	/*3F----------*/
	$().leftBar('.leftnav .floor3',80);
	/*4F----------*/
	$().leftBar('.leftnav .floor4',120);
	/*5F----------*/
	$().leftBar('.leftnav .floor5',80);
	
	
})