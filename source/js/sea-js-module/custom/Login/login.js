
define(function (require){
    'use strict';

    // console.log('hello');
    require('jquery');

    var	$mark = $('.u-mark'),
    	$login =$('.m-login'),
    	sign_in = $('#login'),
    	sign_up = $('#register'),
    	login_wrapper = $('.login-wrapper'),
    	register_wrapper = $('.register-wrapper');

    $mark.on('click', function(){
    	$login.hide();
    	$(this).hide();
    })

    sign_in.on('click', function(){
    	login_wrapper.show();
    	register_wrapper.hide();
    	$(this).toggleClass('j-active');
    	sign_up.toggleClass('j-active');
    })

    sign_up.on('click', function(){
    	login_wrapper.hide();
    	register_wrapper.show();
    	$(this).toggleClass('j-active');
    	sign_in.toggleClass('j-active');
    })
    //
    var $mark = $('.u-mark'),
        $login = $('.m-login'); 


    var $login_btn = $('#yihao-top-nav-login');
    
    $login_btn.on('click', function(){
        $login.show();
        $mark.show();
    })

});