
$(function () {
    //验证码
    var isok = false;
    $('.codeBtn').html(getYzm());
    $('.codeBtn').click(function () {
        $('.codeBtn').html(getYzm());
    });
    $('.loginCode').blur(function () {
        var val = $(this).val();
        var val2 = $(this).next().html();
        if (val.trim()) {
            if (val.toLowerCase() == val2.toLowerCase()) {
                isok = true;
            }
        }
    });
    $('.loginBtn').click(function () {
        var val1 = $('.loginName').val();
        var val2 = $('.loginPsw').val();
        if (val1.trim() && val2.trim()) {
            if (isok) {
                $.ajax({
                    type: "post",
                    url: "../api/log.php",
                    data: {
                        fn: 'select',
                        tableName: 'users',
                        a: 'login',
                        username: val1,
                        password: val2
                    },
                    success: function success(str) {
                        var now = new Date(); //日   now.getDate()
                        now.setDate(now.getDate() + 7);
                        //存：两个数据存进cookie里面1
                        Cookie.set('name', val1, {
                            expires: now,
                            path: '/'
                        });
                        var arr = JSON.parse(str);
                        location.href = '../inde.html';
                        alert(arr.message);
                        $('.loginName').val('');
                        $('.loginPsw').val('');
                        $('.loginCode').val('');
                        $('.codeBtn').html(getYzm());
                    }
                });
            } else {
                alert('请输入验证码');
            }
        }
    });
    $('.ul_header li').eq(0).click(function () {
        console.log(123);
        $('.ul_header li').removeClass("active");
        $(this).addClass('active');
        $('#ul_mian1').css('display', 'block');
        $('#ul_mian2').css('display', 'none');
        $('.codeBtn').html(getYzm());
    });
    $('.ul_header li').eq(1).click(function () {
        $('.ul_header li').removeClass("active");
        $(this).addClass('active');
        $('#ul_mian2').css('display', 'block');
        $('#ul_mian1').css('display', 'none');
        $('.codeBtn').html(getYzm());
    });
});