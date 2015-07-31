/**
 * Auto: Ivan
 * QQ: 403704409
 * date: 2014.11.10
 * 提示信息弹层
 * 修改连续点击弹出时闪退的bug
 */

define(function (require){
    'use strict';
	
	//依赖
	var $ = require('zepto');
	var obj = null;

	function Tips(className) {

		if( obj ){
			return obj;
		}
		
		obj = this;
		//如果页面没有才创建
		if( !$('#j-tips').length ){			
			var oSection = document.createElement('section');
			oSection.style.display = 'none';
			oSection.className = 'u-tips';
			oSection.id = 'j-tips';
			oSection.innerHTML = '<p class="info">请输入趣买价</p>';
			document.body.appendChild( oSection );
		}

		this.callbackTimer = null
		this.tips = $('#j-tips');
		this.bFinished = true;
	};

	Tips.prototype = {

		init: function(str, callback) {
			var self = this;
			self._show(str, callback);
		},
		_show: function(str, callback) {
			var self = this,
				$el = self.tips,
				oTip = $el[0];
			$el.find('.info').eq(0).html(str);			

			$el.css('visibilty', 'hidden').css('display', 'block');
			$el.css('margin-top', - $el.height()/2 );
			$el.css('visibilty', 'initial');

			oTip.className = 'u-tips';
			var timer = setTimeout(function () {
				oTip.className = 'a-tipsFadeIn u-tips';
			}, 100);
			timer = null;			

			clearTimeout(self.callbackTimer);
			self.callbackTimer = setTimeout(function (){				
				typeof callback==='function' && callback();
			}, 1500);

		},
		constructor: Tips
	};

	return Tips;
})


/**
 * Author: Meepo
 * Date: 2015.2.2
  
*
/*举报功能*/

define(function (require){

    // 'use strict';
    var $ = require('zepto');

    var oReport = {
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

        _createMask: function() {
        	var oSection = document.createElement('section');
			oSection.style.display = 'none';
			oSection.className = 'u-mask';
			oSection.id = 'j-mask';
			document.body.appendChild( oSection );
        }
    };

    
    return oReport;

});


<section class="u-mark " style="display: block;"></section>