/*
* @Author: apple
* @Date:   2017-09-17 18:16:20
* @Last Modified by:   apple
* @Last Modified time: 2017-09-25 21:41:03
*/
$(function(){
	$('#fullpage').fullpage({
		sectionsColor:['#b5b5e2','#aebfc3','#a8ead3','#66c0d0','#59c7c8'],
		navigation:true,
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
		menu:"#menu",
		continuousVertical:true,
		afterLoad: function(anchorLink, index) {
			if (index == 2) {
				$('.introduce').addClass('animated bounceInLeft');
				$('.person').addClass('animated bounceIn');
			}

			if (index == 3) {
				$('.skillTree .ht').addClass('animated bounceInUp');
				$('.skillTree .css').addClass('animated bounceInUp');
				$('.skillTree .js').addClass('animated bounceInUp');
				$('.skillTree .node').addClass('animated bounceInUp');
				$('.skillTree .jq').addClass('animated bounceInUp');
				$('.skillTree .vue').addClass('animated bounceInUp');			
			}
			if (index == 4) {
				$('.workMan').addClass('animated pulse');
			}
			if (index == 5) {
				$('.contactImg').addClass('animated flipInX');
				$('.contactBar a').addClass('animated fadeInUp');
			}
		},
		onLeave: function(index, nextIndex, direction) {
			if (index == 2) {
				$('.introduce').removeClass('animated bounceInLeft');
				$('.person').removeClass('animated bounceIn');
			}

			if (index == 3) {
				$('.skillTree .ht').removeClass('animated bounceInUp');
				$('.skillTree .css').removeClass('animated bounceInUp');
				$('.skillTree .js').removeClass('animated bounceInUp');
				$('.skillTree .node').removeClass('animated bounceInUp');
				$('.skillTree .jq').removeClass('animated bounceInUp');
				$('.skillTree .vue').removeClass('animated bounceInUp');	
			}

			if (index == 4) {
				$('.workMan').removeClass('animated pulse');
			}
			if (index == 5) {
				$('.contactImg').removeClass('animated flipInX');
				$('.contactBar a').removeClass('animated fadeInUp');
			}
		}
	});	
});