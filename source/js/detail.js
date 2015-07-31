


define(function (require) {
	'use strict';

	require('jquery');
	require('login');

	// var	$mark = $('.u-mark'),
 	//    	$login = $('.m-login'); 


	// var $login_btn = $('#yihao-top-nav-login');
	
	// $login_btn.on('click', function(){
	// 	$login.show();
	// 	$mark.show();
	// })
	var grid_tag = $('.grid-nav-li');
	grid_tag.on('click', function(){
		var flag = $(this).hasClass('active');
		if(!flag){
			grid_tag.toggleClass('active');
		}
	})



});