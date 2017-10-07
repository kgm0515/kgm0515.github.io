//加载完毕事件
window.onload=function(){
	//顶部通栏滚动效果
	headerScroll();
	
	//倒计时效果
	cutDownTime(3);

	//轮播图效果
	banner();
}

//顶部通栏方法
/*
		获取导航栏的高度
		在onscroll事件中修改颜色
			0-1透明度
			获取滚动距离
			滚动距离/导航栏	0-1的浮点数
			通过js修改透明度

 */
function headerScroll(){
	//1,获取一些参数
	/*
			导航栏的高度
			顶部的通栏
	 */
	//距离顶部的高度
	// console.log(document.querySelector(".jd_nav").offsetTop);
	//元素自身高度
	// console.log(document.querySelector(".jd_nav").offsetHeight);
	//获取导航栏
	var navDom=document.querySelector(".jd_nav");
	//获取导航栏底部到浏览器顶部距离
	var maxDistance=navDom.offsetTop+navDom.offsetHeight;
	//获取顶部通栏
	var headerDom=document.querySelector('.jd_header');

	//2,注册onscroll事件
	window.onscroll=function(){
		// console.log(123);
		//获取滚动距离
		var scrollDistance=window.scrollY;
		// 方法2 var scrollDistance=window.document.body.scrollTop;
		// console.log('scrollY:'+scrollDistance);

		//计算百分数
		var percent=scrollDistance/maxDistance;
		// console.log(percent);
		
		//如果超过1,把persont还原为1;
		if(percent>1){
			percent=1;
		} 

		//计算顶部通栏的透明度
		headerDom.style.backgroundColor='rgba(201,21,35,'+percent+')';
	}

}
//倒计时方法
/*
		定义一个初始倒计时的总时间
		获取想要修改的标签

		开启定时器
			判断是否到期
			递减时间
			修改对应标签显示
 */
function cutDownTime(time){
	//定义总时间
	// var totalHour=3;
	//转化为秒
	var totalSec=time*3600;
	//多加一秒,让用户看到的是整数
	totalSec++;
	//获取想要修改的所有li标签
	var liArr=document.querySelectorAll(".main_content:nth-child(1) .content_top li");
	// console.log(liArr);
	
	//开启定时器
	var timeId=setInterval(function(){
		//判断是否到期
		if(totalSec<=0){
			//清除定时器
			clearInterval(timeId);
			// console.log("结束了,你买不到了");
			return;
		}

		//递减
		totalSec--;
		//当前的时间对应多少小时/分/秒
		var hour=Math.floor(totalSec/3600);
		var minute=Math.floor(totalSec%3600/60);
		var sec=Math.floor(totalSec%60);

		//修改dom元素显示
		//小时
		liArr[0].innerHTML=Math.floor(hour/10);
		liArr[1].innerHTML=hour%10;
		//分
		liArr[3].innerHTML=Math.floor(minute/10);
		liArr[4].innerHTML=minute%10;
		//秒
		liArr[6].innerHTML=Math.floor(sec/10);
		liArr[7].innerHTML=sec%10;

	},1000);
	

}
//轮播图方法
/*
		步骤1:不考了过渡效果,直接切换
			  定时器index++
			  修改轮播图ul的位置
			  考虑到索引从1开始
			  css默认ul往左边移了一个屏幕宽度
		步骤2:下方的索引li标签修改外观
			由于我们使用.current表示当前索引值
		步骤3:切换有动画效果
			  使用css3中的transition
			  .style.transition='all 3';
			  在获取的时候添加即可
		步骤4:
			  当切换到最后一张时,瞬间切换到第一张
			  关闭过渡,瞬间切换到第一张
		步骤5:对代码进行重构,过渡结果知识点
			  由于我们在修改ul的位置时会使用过渡,
			  当注册了过渡结束时间后都会调用该事件
			  判断index是否过界,以及修改索引的代码全部迁移到过渡借宿事件中
				
			  定时器逻辑
			  		index++;

			  		修改ul的位置->开始过渡

			  过渡结束逻辑
			  		判断index是否有效
			  			进行修正
			  		修改索引li标签的显示
		步骤6:
			  使用touch事件实现收支波动ul滑动效果
			  touchstart
			  	记录开始值
			  	关闭定时器
			  	关闭过渡效果
			  touchmove
			  	计算移动值
			  	修改ul位置(在原始值的基础之上进行修改,没有过多效果)
			  touchend
				记录移动距离(?)
				开启定时器

 */
function banner(){
	//获取变量
	//屏幕宽度
	var width=document.body.offsetWidth;
	// console.log(width);
	
	//获取轮播图的ul
	var moveUl=document.querySelector(".banner_images");
	//添加过渡效果,后面已经设置过渡效果,所以这里可以不用设置
	// moveUl.style.transition='all 0.3s';
	
	//获取索引li标签
	var indexLiArr=document.querySelectorAll(".banner_index li");

	//定义index.记录当前位置
	//默认我们的ul意见往左边移动了一倍的高度
	var index=1;

	//开启定时器
	var timeId=setInterval(function(){
		//累加
		index++;

		//将过渡开启,只要进来就开启定时器
		moveUl.style.transition='all 0.3s';

		//修改ul的位置
		moveUl.style.transform='translateX('+index*width*(-1)+'px)';
	},1000);

	//过渡结束事件,用来修正index的值并修改索引
	moveUl.addEventListener('webkitTransitionEnd',function(){
		// console.log('过渡结束');
		//如果index太大了
		if(index>8){
			index=1;
			//关闭过渡
			moveUl.style.transition="";

			//瞬间修改ul的位置
			moveUl.style.transform='translateX('+index*width*(-1)+'px)';
		}else if(index<1){
			//跳到倒数第二张
			index=8;
			//关闭过渡
			moveUl.style.transition="";

			//瞬间修改ul的位置
			moveUl.style.transform='translateX('+index*width*(-1)+'px)';
		}

		//修改li标签的class
		for (var i = 0; i < indexLiArr.length; i++) {
			indexLiArr[i].className='';
		}
		
		//为当前li添加样式
		//li标签的索引总0开始
		//index是从1开始
		indexLiArr[index-1].className='current';
	});

	//注册三个touch事件
	
	//定义变量记录开始的X
	var startX=0;
	//记录移动差值
	var moveX=0;
	//记录坐标distanceX
	var distanceX=0;

	//触摸开始
	moveUl.addEventListener('touchstart',function(event){
		//关闭定时器
		clearInterval(timeId);
		
		//关闭过渡效果
		moveUl.style.transition='';

		//记录开始值
		startX=event.touches[0].clientX;
	});

	//触摸中
	moveUl.addEventListener('touchmove',function(event){
		//计算移动中的坐标
		moveX=event.touches[0].clientX-startX;
		//移动ul
		//默认的移动值是index*-1*width
		moveUl.style.transform='translateX('+(moveX+index*-1*width)+'px)'
	});
	//触摸结束
	/*
			收支松开的时候判断移动距离判断是否吸附
				由于不需要考虑正负,只需要考虑距离Math.abs()
				吸附回的值是index*-1*width;
			如果移动的距离较大
				需要判断正负
					index++;
					index--;
					index*-1*width
	 */
	moveUl.addEventListener('touchend',function(event){
		//定义最大的偏移值
		var maxDistance=width/2;

		//判断是否超过
		if(Math.abs(moveX)>maxDistance){
			//判断是往左还是往右
			if(moveX>0){
				index--;
			}else{
				index++;
			}
			//为了好看,开启过渡效果
			moveUl.style.transition='all 0.3s';

			//吸附一整页
			moveUl.style.transform='translateX('+(index*-1*width)+'px)'

		}else{
			//如果进入这里,说明没有超过我们定义的最大值,被吸附回去
			
			//为了好看,开启过渡效果
			moveUl.style.transition='all 0.3s';

			//吸附回去
			moveUl.style.transform='translateX('+(index*-1*width)+'px)'
		}


		//记录结束值
		
		//开启定时器
		timeId=setInterval(function(){
			//累加
			index++;

			//将过渡开启,只要进来就开启定时器
			moveUl.style.transition='all 0.3s';

			//修改ul的位置
			moveUl.style.transform='translateX('+index*width*(-1)+'px)';
		},1000);
	});
}














































