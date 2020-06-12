$(function(){
	/*声明累加器*/
	var dNum=0;
	var tNum=0;
	var timer;
	/*复制ul里面的第一个li，到最后，来做障眼法。*/
	$('.promo ul').append($('.promo ul li').eq(0).clone(true));
	/*点击右按钮，让点跳到下一个，让图片向左走一张*/
	function autoPlay(){
		dNum++;
		if(dNum>4){dNum=0;}
		$('.promo ol li').eq(dNum).addClass('current').siblings().removeClass('current');
		tNum++;
		if(tNum>5){
			tNum=1;
			$('.promo ul').css('left','0px');
		}
		var move=tNum*-464;
		$('.promo ul').stop().animate({'left':''+move+'px'}, 500);
	}
	$('.promo .right').click(function(event) {
		autoPlay();
	});

	/*点击左按钮，让点跳到上一个，让图片向右走一张*/
	$('.promo .left').click(function(event) {
		dNum--;
		if(dNum<0){dNum=4;}
		$('.promo ol li').eq(dNum).addClass('current').siblings().removeClass('current');
		tNum--;
		if(tNum<0){
			tNum=4;
			$('.promo ul').css('left','-2600px');
		}
		var move=tNum*-464;
		$('.promo ul').stop().animate({'left':''+move+'px'}, 500);
	});


	/*添加定时器*/
	timer=setInterval(autoPlay,2000);

	$('.promo').hover(function(){
		clearInterval(timer);
		$('.promo i').show();
	},function(){
		timer=setInterval(autoPlay,2000);
		$('.promo i').hide();
	})

})