/**
 * verify.js  校验字符串
 * @date: 2015-5-15
 */

define(function (require, exports, module) {
    'use strict';
    
    var reg_number = /\D/,
    	reg_email = /^[^@]+@[^@\.]+\.[^@\.]+$/,
    	reg_empty = /^\s+|\s+$/,
        reg_tel = /^1[3-9]{1}[0-9]{9}$/;


    return {
            userName: function (str) {
                var self = this,
                    result = {
                        success: true,
                        tips: '您输入的手机号码或密码不正确'
                    };

                if (self.isEmpty(str)) {
                    result.success = false;
                    result.tips = '请输入手机号码';
                }

                if (result.success && !self.isTel(str)) {
                    result.success = false;
                    result.tips = '您输入的手机号码不是11位';
                }

                return result;
            },

            password: function (str) {
                var self = this,
                    result = {
                        success: true,
                        tips: '您输入的手机号码或密码不正确'
                    };

                if (self.isEmpty(str)) {
                    result.success = false;
                    result.tips = '请输入密码';
                }

                if (result.success && !self.checkRange(str, 6, 20)) {
                    result.success = false;
                    result.tips = '您的密码格式错误，安全密码由6~20位字母/数字组成';
                }

                return result;
            },

    		/**
    		 * 电话号码
    		 * @param  {[type]}  str [description]
    		 * @return {Boolean}     [description]
    		 */
            isTel: function (str) {
                var self = this,
                    result = false;

                if (!self.isEmpty(str) && self.isNumber(str) && reg_tel.test(str)) {
                    result = true;
                }

                return result;
            },

            /**
             * 数字格式
             * @param  {[type]}  str [description]
             * @return {Boolean}     [description]
             */
            isNumber: function (str) {
                var self = this;
                if (self.isEmpty(str)) {
                    return false;
                }

                return !(reg_number.test(str));
            },

            /**
             * 邮箱格式
             * @param  {[type]}  str [description]
             * @return {Boolean}     [description]
             */
            isEmail: function (str) {
                var self = this;
                if (self.isEmpty(str)) {
                    return false;
                }

                return reg_email.test(str);
			},

			/**
			 * 空字符串
			 * @param  {[type]}  str [description]
			 * @return {Boolean}     [description]
			 */
            isEmpty: function (str) {
                str = str.replace(reg_empty, '');

                return str === '';
            },

            /**
             * 字符串长度范围
             * @param  {[type]} str   [description]
             * @param  {[type]} begin [description]
             * @param  {[type]} end   [description]
             * @return {[type]}       [description]
             */
            checkRange: function (str, begin, end) {
                var result = false,
                    len = str.length;

                len >= begin && (result = true);

                if (result && typeof(end) === 'number') {
                    len > end && (result = false);
                }

                return result;
            }
        };
});
