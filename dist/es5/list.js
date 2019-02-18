

$(function () {
    window.onscroll = function () {

        var scrollTop = window.scrollY; // 滚动的距离

        if (scrollTop >= 200) {
            $('.lou7').css('display', 'block');
        } else {
            $('.lou7').css('display', 'none');
        }
    };
    $('.lou7').on('click', function () {
        var scrollTop = window.scrollY;
        if (scrollTop >= 0) {
            window.scrollTo(0, 0);
        }
    });
    $('.left').on('click', '.lei', function () {
        $('.lei').find('ul').hide();
        $(this).find('ul').show();
        $('.lei').find('b').attr('class', '');
        $(this).find('b').attr('class', 'bbcurr');
    });

    var num = 1;
    var n = 20;
    var chang = 0;

    add("../api/log.php");

    function show(arr) {
        var html = arr.map(function (itme) {
            return '<li data-id="' + itme.id + '">\n                        <div class="da">\n                            <div class="da_tu">\n                                <img src="../' + itme.imgurl + '" alt="">\n                            </div>\n                            <div class="da_price">\n                                \uFFE5' + itme.price + '\n                            </div>\n                            <div class="da_shuo">\n                                <a href="javascript:;">' + itme.name + '</a>\n                            </div>\n                            <div class="pjia">\n                                <a href="javascript:;">\u5DF2\u6709' + itme.pinlun + '\u4EBA\u8BC4\u4EF7</a>\n                            </div>\n                            <div class="da_gwc">\n                                <div class="num">\n                                    <span><a href="javascript:;" class="da_jian">-</a></span>\n                                    <span><input type="text" value="1" class="da_sum"></span>\n                                    <span><a href="javascript:;"class="da_jia">+</a></span>\n                                </div>\n                                <div class="btn">\n                                    <a>\u52A0\u5165\u8D2D\u7269\u8F66</a>\n                                </div>\n                            </div>\n                        </div>\n                    </li>';
        }).join('');
        $('.all').html(html);
        //跳转详情页
        $('.da_tu').on('click', function () {
            var id = $(this).parent().parent().data('id');
            location.href = './goods.html?id=' + id;
        });
        $('.da_shuo').on('click', function () {
            var id = $(this).parent().parent().data('id');
            location.href = './goods.html?id=' + id;
        });
        $('.da_jia').click(function () {
            var val = $(this).parent().parent().find('.da_sum').val();
            val++;
            $(this).parent().parent().find('.da_sum').val(val);
        });
        $('.da_jian').click(function () {
            var val = $(this).parent().parent().find('.da_sum').val();
            if (val > 1) {
                val--;
            } else {
                val = 1;
            }
            $(this).parent().parent().find('.da_sum').val(val);
        });
        $('.da_sum').blur(function () {
            var val = $(this).val();
            $(this).val(val);
        });
        $('.btn').click(function () {
            var val = $(this).parent().find('.da_sum').val();
            var id = $(this).parent().parent().parent().data('id');
            $.ajax({
                type: "post",
                url: "../api/log.php",
                data: {
                    fn: 'add',
                    id: id,
                    num: val,
                    a: 'jj'
                },
                success: function success(str) {
                    add("../api/log.php");
                }
            });
        });
    }
    $.ajax({
        type: "post",
        url: "../api/log.php",
        data: {
            fn: 'list',
            tableName: 'list',
            page: num,
            pty: n
        },
        success: function success(str) {
            var arr = JSON.parse(str);
            show(arr.list);
            chang = Math.ceil(arr.pages);
            $('#shang').html(arr.long);
            $('.ye').append('/' + chang);
            yue(chang);
        }
    });

    function yue(ch) {
        var html2 = '';
        for (var i = 0; i < ch; i++) {
            html2 += '<a href="javascript:;">' + (i + 1) + '</a>';
        }
        $('.prev').after(html2);
        $('.prev').next('a').attr('class', 'active3');
    }

    function dian(num, fn) {
        $.ajax({
            type: "post",
            url: "../api/log.php",
            data: {
                fn: fn,
                tableName: 'list',
                page: num,
                pty: n
            },
            success: function success(str) {
                var arr = JSON.parse(str);
                show(arr.list);
            }
        });
    }

    function liu(num, fn) {
        $('.prev').click(function () {
            num--;
            if (num <= 1) {
                num = 1;
            }
            dian(num, fn);
            sd(num);
        });
        $('.prevs').click(function () {
            num--;
            if (num <= 1) {
                num = 1;
            }
            dian(num, 'list');
            sd(num);
        });
        $('.next').click(function () {
            num++;
            if (num >= chang) {
                num = chang;
            }
            dian(num, fn);
            sd(num);
        });
        $('.nexts').click(function () {
            num++;
            if (num >= chang) {
                num = chang;
            }
            dian(num, fn);
            sd(num);
        });
        $('.pages').on('click', 'a', function () {
            num = $(this).html();
            dian(num, fn);
            sd(num);
        });
        $('.pages').find('a').attr('class', '');
        $('.prev').next('a').attr('class', 'active3');
    }
    liu(num, 'list');

    function sd(num) {
        if (num == 1) {
            $('.prevs').attr('class', 'prevs');
            $('.prev').css('display', 'none');
        } else {
            $('.prevs').attr('class', 'prevs prss');
            $('.prev').css('display', 'inline-block');
        }
        $('.n').html(num);
        $('.pages').find('a').attr('class', '');
        $('.pages').find('a').eq(num - 1).attr('class', 'active3');
    }
    sd(num);

    //菜单
    window.onscroll = function () {

        var scrollTop = window.scrollY; // 滚动的距离
        //滚动的距离大于等于头部的高度
        if (scrollTop >= 340) {
            $('.list_xs').attr('class', 'list_xs ac');
        } else {
            $('.list_xs').attr('class', 'list_xs');
        }
        if (scrollTop >= 200) {
            $('.lou7').css('display', 'block');
        } else {
            $('.lou7').css('display', 'none');
        }
    };
    $('.lou7').on('click', function () {
        var scrollTop = window.scrollY;
        if (scrollTop >= 0) {
            window.scrollTo(0, 0);
        }
    });
    $('.sort li').eq(0).on('click', function () {
        pai('list');
        $(this).attr('class', 'active');
    });
    var ik1 = true;
    $('.sort li').eq(1).on('click', function () {
        if (ik1) {
            pai('paixun', 'j');
        } else {
            pai('paixun', 's');
        }
        ik1 = !ik1;
        $(this).attr('class', 'active');
    });
    var ik2 = true;
    $('.sort li').eq(2).on('click', function () {
        if (!ik2) {
            pai('jian', 'j');
        } else {
            pai('jian', 's');
        }
        ik2 = !ik2;
        $(this).attr('class', 'active');
    });
    $('.sort li').eq(3).on('click', function () {
        pai('list');
        $(this).attr('class', 'active');
    });

    function pai(fum, aso) {
        $.ajax({
            type: "post",
            url: "../api/log.php",
            data: {
                fn: fum,
                tableName: 'list',
                a: aso,
                page: num,
                pty: n
            },
            success: function success(str) {
                var arr = JSON.parse(str);
                show(arr.list);
                liu(num, fum);
            }
        });
        $('.sort li').attr('class', '');
    }
    tuij();
    carts("../api/log.php", './goods.html', '../');
    cat("../api/log.php", './goods.html', '../');
    cook("../api/log.php");
});