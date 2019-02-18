

$(function () {
    /*post
       	账户名验证
            api/log.php
                fn : select   
                tableName : users  
                a : yhm
                name : 表单输入的
            	返回
                {
    	code : 返回的信息代码 0 = 可以注册，1 = 已存在用户名
    	message : 返回的信息具体返回信息
    }
       */
    var istrue1 = false;
    var istrue2 = false;
    var istrue3 = false;
    var istrue4 = false;
    var istrue5 = true;
    $("#username").on({
        click: function click() {
            $('#inf1').html('请输入4-20位首字母开头的用户名').css('color', '');
            $(this).parent().css('borderColor', '#6e9b0c');
            $('#username').next().css('display', 'none');
        },
        blur: function blur() {
            var val = $(this).val();
            // console.log(val);
            if (val.trim()) {
                if (checkReg.name(val)) {
                    $.ajax({
                        type: "post",
                        url: "../api/log.php",
                        data: {
                            fn: 'select',
                            tableName: 'users',
                            a: 'yhm',
                            username: val
                        },
                        success: function success(str) {
                            var arr = JSON.parse(str);
                            if (arr.code == 0) {
                                $('#username').next().css('display', 'inline-block');
                                $('#username').parent().css('borderColor', '');
                                $('#inf1').html('');
                                istrue1 = true;
                            } else {
                                $('#inf1').html(arr.message).css('color', 'red');
                            }
                        }
                    });
                } else {
                    $('#inf1').html('请输入正确的用户名').css('color', 'red');
                    $(this).parent().css('borderColor', 'red');
                }
            } else {
                $('#inf1').html('');
                $(this).parent().css('borderColor', '');
            }
        }
    });
    /*post
       	注册
            api/log.php
                fn : select   
                tableName : users  
                a : reg
                username : 用户名
                password : 密码
            	返回
                {
    	code : 返回的信息代码 1 = 可以注册，1 = 已存在用户名
    	message : 返回的信息具体返回信息
    }
       */
    //验证码

    //随机验证码
    $('.regCode').html(getYzm());
    $('.regCode').click(function () {
        // console.log(getYzm());
        $('.regCode').html(getYzm());
        $('#tex').val('');
        $('#tex').next().css('display', 'none');
    });
    //点击换一换 可以换验证码
    $('.regLogin a').click(function () {
        $('.regCode').html(getYzm());
        $('#tex').val('');
        $('#tex').next().css('display', 'none');
    });
    $('#tex').on({
        click: function click() {
            $('#inf4').html('请输入验证码').css('color', '');
            $(this).parent().css('borderColor', '#6e9b0c');
        },
        blur: function blur() {
            var val1 = $('.regCode').html();
            var val2 = $(this).val();
            // console.log(val2);
            if (val2.trim()) {
                if (val2.toLowerCase() == val1.toLowerCase()) {
                    $(this).next().css('display', 'inline-block');
                    $('#inf4').html('');
                    $(this).parent().css('borderColor', '');
                    istrue2 = true;
                } else {
                    $(this).next().css('display', 'none');
                    $('.regCode').html(getYzm());
                    $('#inf4').html('验证码不正确').css('color', 'red');
                    $(this).parent().css('borderColor', 'red');
                    $(this).val('').focus();
                }
            } else {
                $('#inf4').html('');
                $(this).parent().css('borderColor', '');
            }
        }

    });

    //密码
    $('#psw1').on({
        click: function click() {
            $('#inf2').html('请输入6-18位首字母开头的密码').css('color', '');
            $(this).parent().css('borderColor', '#6e9b0c');
            $(this).next().css('display', 'none');
        },
        blur: function blur() {
            var val = $(this).val();
            // console.log(val2);
            if (val.trim()) {
                if (checkReg.psweasy(val)) {
                    $(this).next().css('display', 'inline-block');
                    $('#inf2').html('');
                    $(this).parent().css('borderColor', '');
                    istrue3 = true;
                } else {
                    $('#inf2').html('密码只能为6-20位字母数字下划线组合').css('color', 'red');
                    $(this).parent().css('borderColor', 'red');
                }
            } else {
                $('#inf2').html('');
                $(this).parent().css('borderColor', '');
            }
        }

    });
    //确定密码
    $('#psw2').on({
        click: function click() {
            $('#inf3').html('请再次输入密码').css('color', '');
            $(this).parent().css('borderColor', '#6e9b0c');
            $(this).next().css('display', 'none');
        },
        blur: function blur() {
            var val = $(this).val();
            var val2 = $(psw1).val();
            // console.log(val2);
            if (val.trim() && val2.trim()) {
                if (checkReg.pwwagain(val, val2)) {
                    $(this).next().css('display', 'inline-block');
                    $('#inf3').html('');
                    $(this).parent().css('borderColor', '');
                    istrue4 = true;
                } else {
                    $('#inf3').html('两次输入不一致，请重新输入').css('color', 'red');
                    $(this).parent().css('borderColor', 'red');
                }
            } else {
                $('#inf3').html('');
                $(this).parent().css('borderColor', '');
            }
        }

    });
    //协议
    $('#checks').click(function () {
        istrue5 = !istrue5;
        if (!istrue5) {
            $('#inf5').html('请阅读并同意注册协议').css('color', 'red');
        } else {
            $('#inf5').html('');
        }
    });

    //注册
    $('.regBtn a').click(function () {
        if (!istrue1) {
            $('#inf1').html('请输入用户名').css('color', 'red');
            $('#username').parent().css('borderColor', 'red');
        }
        if (!istrue2) {
            $('#inf2').html('请输入登录密码').css('color', 'red');
            $('#psw1').parent().css('borderColor', 'red');
        }
        if (!istrue3) {
            $('#inf3').html('请再次输入密码').css('color', 'red');
            $('#psw2').parent().css('borderColor', 'red');
        }
        if (!istrue4) {
            $('#inf4').html('请输入验证码').css('color', 'red');
            $('#tex').parent().css('borderColor', 'red');
        }
        if (!istrue5) {
            $('#inf5').html('请阅读并同意注册协议').css('color', 'red');
        }
        if (istrue1 && istrue2 && istrue3 && istrue4 && istrue5) {
            var val1 = $('#username').val();
            var val2 = $('#psw1').val();
            $.ajax({
                type: "post",
                url: "../api/log.php",
                data: {
                    fn: 'select',
                    tableName: 'users',
                    a: 'reg',
                    username: val1,
                    password: val2
                },
                success: function success(str) {
                    var arr = JSON.parse(str);
                    console.log(arr);
                    if (arr.code == 1) {
                        location.href = 'login.html';
                    }
                }
            });
        }
    });
});