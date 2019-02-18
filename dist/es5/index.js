

$(function () {
    //swiper基本款  轮播图
    var s1 = new Swiper('.swiper-container', {
        autoplay: { //自动轮播
            delay: 2000, //间隔时间
            disableOnInteraction: false
        },
        loop: true, //无缝
        pagination: { //焦点跟随
            el: '.swiper-pagination',
            clickable: true, //点击焦点跳到指定图片
            renderBullet: function renderBullet(index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>'; //生成焦点数字
            }
        }
    });
    add("./api/log.php");
    $('#swiper-container').on({
        mousemove: function mousemove() {
            s1.autoplay.stop();
        },
        mouseout: function mouseout() {
            s1.autoplay.start();
        }
    });
    //广告
    setTimeout(function () {
        $('.herad_gao').css('display', 'none');
    }, 5000);

    $.ajax({
        type: "post",
        url: "./api/log.php",
        data: {
            fn: 'list',
            tableName: 'list',
            page: 1,
            pty: 8
        },
        success: function success(str) {
            var arr = JSON.parse(str);
            var html = arr.list.map(function (itme) {
                return '<li data-id="' + itme.id + '">\n                            <a href="javascript:;" class="buy_a">' + itme.name + '</a>\n                            <span>\uFFE5' + itme.price + '</span>\n                            <a href="javascript:;" class="buy_img">\n                                <img src="./' + itme.imgurl + '" alt="">\n                            </a>\n                            <div class="cars">\n                                <a href="javascript:;">\u52A0\u5165\u8D2D\u7269\u8F66</a>\n                            </div>\n                        </li>';
            }).join('');
            $('#buy').html(html);
            $('.buy_a').on('click', function () {
                var id = $(this).parent().data('id');
                window.open('./html/goods.html?id=' + id);
            });
            $('.buy_img img').on('click', function () {
                var id = $(this).parent().parent().data('id');
                window.open('./html/goods.html?id=' + id);
            });
            $('#buy li').hover(function () {
                // over
                $(this).find('.cars').css('top', '225px');
            }, function () {
                // out
                $(this).find('.cars').css('top', '260px');
            });
            $('.cars').click(function () {
                var id = $(this).parent().data('id');
                $.ajax({
                    type: "post",
                    url: "./api/log.php",
                    data: {
                        fn: 'add',
                        id: id,
                        a: 1,
                        num: 1
                    },
                    success: function success(str) {
                        add("./api/log.php");
                    }
                });
            });
        }
    });
    $.ajax({
        type: "post",
        url: "./api/log.php",
        data: {
            fn: 'list',
            tableName: 'list',
            page: 8,
            pty: 5
        },
        success: function success(str) {
            var arr = JSON.parse(str);
            // console.log(arr);
            var html = arr.list.map(function (itme) {
                return '<li data-id="' + itme.id + '">\n                            <div class="nImg">\n                                <a href="javascript:;">\n                                    <img src="./' + itme.imgurl + '" alt="">\n                                </a>\n                            </div>\n                            <div class="nShou">\n                                <a href="javascript:;">\n                                ' + itme.name + '\n                                </a>\n                            </div>\n                            <div class="nPrive">\uFFE5' + itme.price + '</div>\n                            <p class="nBuy">\n                                <a href="javascript:;">\u62A2\u8D2D</a>\n                            </p>\n                        </li>';
            }).join('');
            $('#nowlist').html(html);
            $('.nImg').on('click', function () {
                var id = $(this).parent().data('id');
                window.open('./html/goods.html?id=' + id);
            });
            $('.nShou').on('click', function () {
                var id = $(this).parent().data('id');
                window.open('./html/goods.html?id=' + id);
            });
            $('.nBuy a').click(function () {
                var id = $(this).parent().parent().data('id');
                $.ajax({
                    type: "post",
                    url: "./api/log.php",
                    data: {
                        fn: 'add',
                        id: id,
                        a: 1,
                        num: 1
                    },
                    success: function success(str) {
                        add("./api/log.php");
                    }
                });;
            });
        }
    });
    $.ajax({
        type: "post",
        url: "./api/log.php",
        data: {
            fn: 'list',
            tableName: 'list',
            page: 13,
            pty: 8
        },
        success: function success(str) {
            var arr = JSON.parse(str);
            var html = arr.list.map(function (itme) {
                return '<li data-id="' + itme.id + '">\n                            <div class="f_img">\n                                <a href="javascript:;">\n                                    <img src="./' + itme.imgurl + '" alt="">\n                                </a>\n                                <div class="f_add">\n                                    <a href="javascript:;">\u52A0\u5165\u8D2D\u7269\u8F66</a>\n                                </div>\n                            </div>\n\n                            <p class="f_shuo">\n                                <a href="javascript:;">' + itme.name + '</a>\n                            </p>\n                            <p class="f_price">\uFFE5' + itme.price + '</p>\n                        </li>';
            }).join('');
            $('.shui').html(html);
            $('.f_img img').on('click', function () {
                var id = $(this).parent().parent().parent().data('id');
                window.open('./html/goods.html?id=' + id);
            });
            $('.f_shuo').on('click', function () {
                var id = $(this).parent().data('id');
                window.open('./html/goods.html?id=' + id);
            });

            $('.f_add').click(function () {
                var id = $(this).parent().parent().data('id');
                $.ajax({
                    type: "post",
                    url: "./api/log.php",
                    data: {
                        fn: 'add',
                        id: id,
                        a: 1,
                        num: 1
                    },
                    success: function success(str) {
                        add("./api/log.php");
                    }
                });
            });
        }
    });

    function show(arr) {
        var html = arr.map(function (itme) {
            return '<li data-id="' + itme.id + '">\n                            <div class="j_img">\n                                <a href="javascript:;">\n                                    <img src="./' + itme.imgurl + '" alt="">\n                                </a>\n                                <div class="j_add">\n                                    <a href="javascript:;">\u52A0\u5165\u8D2D\u7269\u8F66</a>\n                                </div>\n                            </div>\n                            <div class="j_shuo">\n                                <a href="javascript:;">' + itme.name + '</a>\n                            </div>\n                            <p>\uFFE5' + itme.price + '</p>\n                        </li>';
        }).join('');
        $('#tui').html(html);
        $('.j_img img').on('click', function () {
            var id = $(this).parent().parent().parent().data('id');
            window.open('./html/goods.html?id=' + id);
        });
        $('.j_shuo').on('click', function () {
            var id = $(this).parent().data('id');
            window.open('./html/goods.html?id=' + id);
        });
        $('.j_add').click(function () {
            var id = $(this).parent().parent().data('id');
            $.ajax({
                type: "post",
                url: "./api/log.php",
                data: {
                    fn: 'add',
                    id: id,
                    a: 1,
                    num: 1
                },
                success: function success(str) {
                    add("./api/log.php");
                }
            });
        });
    }
    $.ajax({
        type: "post",
        url: "./api/log.php",
        data: {
            fn: 'list',
            tableName: 'list',
            page: 1,
            pty: 10
        },
        success: function success(str) {
            var arr = JSON.parse(str);
            show(arr.list);
        }
    });
    //遮罩
    $('.nav_side .cusrwo').hover(function () {
        // over
        $('.nav_side .cusrwo').css('opacity', '0.1');
        $(this).css('opacity', '0');
    }, function () {
        // out
        $('.nav_side .cusrwo').css('opacity', '0');
    });
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
    carts("./api/log.php", './html/goods.html', './');
    cat("./api/log.php", './html/goods.html', './');
    cook("./api/log.php");

    //倒计时
    var endtime = '2019-12-30  00:00'; //设置倒计时间
    var endTime = new Date(endtime); //转换成时间格式

    var timer = setInterval(function () {

        var newtime = new Date(); //获取当前的时间
        //计算时间差
        var cha = parseInt((endTime - newtime) / 1000); //秒
        if (cha <= 0) {
            clearInterval(timer);
        }
        var tiness = setTime(cha);
        // console.log(tiness);
        // {secs: "25", mins: "29", hours: "21", days: "316"}
        //时
        var h1 = tiness.hours.substr(0, 1);
        var h2 = tiness.hours.substring(1);
        $('#nowHour1').html(h1);
        $('#nowHour2').html(h2);
        //分
        var m1 = tiness.mins.substr(0, 1);
        var m2 = tiness.mins.substring(1);
        $('#nowMin1').html(m1);
        $('#nowMin2').html(m2);
        //秒
        var s1 = tiness.secs.substr(0, 1);
        var s2 = tiness.secs.substring(1);
        $('#nowSencond1').html(s1);
        $('#nowSencond2').html(s2);
    }, 1000);
});