


define(function (require) {
	'use strict';

	require('jquery');
	require('login');

	// var cW = window.document.documentElement.clientWdith,
	// 	cH = window.document.documentElement.clientHeight;
	var	$mark = $('.u-mark'),
    	$login =$('.m-login'); 


	var $login_btn = $('#yihao-top-nav-login');
	
	$login_btn.on('click', function(){
		$login.show();
		$mark.show();
	})


	var $mask = $('.des-mask'),
		$item = $('.item-li'),
		$price = $('.price');

	//事件绑定（稍后放进bind）
	$item.mouseover(function(){
		$(this).find('.des-mask').css("display","block");
		$(this).find('.price').css("display","block");
	});
	$item.mouseout(function(){
		$(this).find('.des-mask').css("display","none");
		$(this).find('.price').css("display","none");
	});

});