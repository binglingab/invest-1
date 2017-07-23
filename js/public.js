$(document).ready(function(){
$(".eight7 dl dt").each(function(){
		$(this).hover(function(){
			$(this).closest("dl").find("dd").show().stop().animate({left:"80px"},500);
		},function(){
			$(this).closest("dl").find("dd").hide().stop().animate({left:"0px"},500);
		});	
	});
	$(".eight_08 dt").hover(function(){
		$(".eight_08 dd").show().stop().animate({left:"-158px"},500);	
	},function(){
		$(".eight_08 dd").hide().stop().animate({left:"0px"},500);	
	});
	
	$(".eightbox dl:last").css({"margin-right":"0"});


// 右边浮动
$(".fl-r1").hover(function(){
    $(".fl-g1").removeClass('undis').addClass('dis');

}, function(){
   $(".fl-g1").removeClass('dis').addClass('undis');
})

$(".fl-r3").hover(function(){
    $(".fl-g2").removeClass('undis').addClass('dis');

},function(){
   $(".fl-g2").removeClass('dis').addClass('undis');
})

 $(".fl-r4").click(function(){
          $(document).scrollTop(0);
        });





// 风险控制

$('.danger-ul').find('li').click(function(){
      $('.danger-ul').find('li>a').removeClass('d-on');
      $(this).find('a').addClass('d-on');
      $('.danger').find('.danger-text').removeClass('dis').addClass('undis');
       $('.danger').find('.danger-text').eq($(this).index()).removeClass('undis').addClass('dis');


})



})


// 行情图

$(document).ready(function() {

   $('.left2-nav').find('li').click(function(){
   
   $('.left2-bot').find('.bot2-left').removeClass('dis').addClass('undis');
   $('.left2-bot').find('.bot2-left').eq($(this).index()).removeClass('undis').addClass('dis');


});


$(".k1").find('li').click(function(){
   $(".k1").find('li').removeClass('bon').addClass('uon');
   $(this).removeClass('uon').addClass('bon');
   $(".k1").find('.kind1').removeClass('dis').addClass('undis');
   $(".k1").find('.kind1').eq($(this).index()).removeClass('undis').addClass('dis');
});


$(".k2").find('li').click(function(){
   $(".k2").find('li').removeClass('bon').addClass('uon');
   $(this).removeClass('uon').addClass('bon');
   $(".k2").find('.kind1').removeClass('dis').addClass('undis');
   $(".k2").find('.kind1').eq($(this).index()).removeClass('undis').addClass('dis');
});


$(".k3").find('li').click(function(){
   $(".k3").find('li').removeClass('bon').addClass('uon');
   $(this).removeClass('uon').addClass('bon');
   $(".k3").find('.kind1').removeClass('dis').addClass('undis');
   $(".k3").find('.kind1').eq($(this).index()).removeClass('undis').addClass('dis');
});




});


// 首页分析师
$(document).ready(function() {

$('.page3-nav').find('li').click(function(){
$('.page3-nav').find('li').removeClass('on');
$(this).addClass('on');
$('.page3-left').find('.page3-text').removeClass('dis').addClass('undis');
$('.page3-left').find('.page3-text').eq($(this).index()).removeClass('undis').addClass('dis');



})






// 分析师

$(".star-left").find('li').click(function(){

$('.star-left').find('li>a').removeClass('s-on');
$(this).find('a').addClass('s-on');
$('.about-main').find('.js-main').removeClass('dis').addClass('undis');
$('.about-main').find('.js-main').eq($(this).index()).removeClass('undis').addClass('dis');



})






});