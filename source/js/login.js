
define(function (require){
    'use strict';

    // console.log('hello');
    require('jquery');

    var	$mark = $('.u-mark'),
    	$login =$('.m-login'),
    	#login = $('#login'),
    	#register = $('#register');


    $mark.on('click', function(){
    	$login.hide();
    	$(this).hide();
    })

    #login.on('click', function(){
    	console.log('fdf');
    	#login.show();
    	#register.hide();
    })



	var oLogin = {
		init: function() {
		    this._bind();   
		},

		_bind: function() {
		    var self = this;
		    $('.reportIcon').on('click', function() {
		        self._showReportLayer();
		    });

		    $('.report-btn').on('click', function() {
		        self._hideReportLayer();
		        var redirect = location.href;
		        location.href = '/Report/index.html?redirect='+redirect;
		    });
		    
		    $('.cancel-btn').on('click', function() {
		        self._hideReportLayer();
		    });

		    $('.u-mark').on('click', function (){
		        self._hideReportLayer();
		    });
		},

		_showReportLayer: function() {
		    $('.m-reportLayer').show();
		    // $('.m-reportLayer').toggleClass('show');
		    $('.u-mark').show();
		},

		_hideReportLayer: function (){
		    // $('.m-reportLayer').toggleClass('show');
		    $('.m-reportLayer').hide();
		    $('.u-mark').hide();
		},
	};

    return oReport;
});