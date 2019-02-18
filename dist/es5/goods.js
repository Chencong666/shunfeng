
$(function () {

    window.onscroll = function () {
        var scrollTop = window.scrollY;
        if (scrollTop >= 200) {
            $('.lou7').css('display', 'block');
        } else {
            $('.lou7').css('display', 'none');
        }
        if (scrollTop >= 650) {
            $('.q_t').attr('class', 'q_t ac');
        } else {
            $('.q_t').attr('class', 'q_t');
        }
    };
    $('.lou7').on('click', function () {
        var scrollTop = window.scrollY;
        if (scrollTop >= 0) {
            window.scrollTo(0, 0);
        }
    });
    //数据
    var data = decodeURI(location.search); //解码的方法
    var str = data.slice(1);
    var good = setStr(str);
    var id = good.id;

    function goods(arr) {
        var html = arr.map(function (item) {
            var img = '<img src="../' + item.imgurl + '" alt="">';
            return {
                img: img
            };
        });
        $('.pic').html(html[0].img);
        $('.bigpic').html(html[0].img);
        $('.xiaotu li').eq(0).html(html[0].img);
        $('.tx').html(arr[0].name);
        $('.prices').html(arr[0].price);
        //放大镜
        $(function () {
            (function () {
                var ulobj = $(".imglist ul");
                var picimg = $(".imgpart .pic img");
                var objimg = $(".imgpart .bigpic img");
                ulobj.on("mouseenter", "li", function () {
                    var imgsrc = $(this).children("img").attr("src");
                    $(this).addClass("active").siblings().removeClass("active");
                    picimg.attr("src", imgsrc);
                    objimg.attr("src", imgsrc);
                });
                var pic = $(".imgpart .pic");
                var magnify = $(".imgpart .pic .magnify");
                var bigpic = $(".imgpart .bigpic");
                var objimg = $(".imgpart .bigpic img");
                pic.mousemove(function (e) {
                    magnify.show();
                    bigpic.show();
                    var pagex = e.pageX;
                    var pagey = e.pageY;
                    var pictop = pic.offset().top;
                    var picleft = pic.offset().left;
                    var magnifyw = magnify.width();
                    var magnifyh = magnify.height();
                    var magnifytop = pagey - pictop - magnifyh / 2;
                    var magnifyleft = pagex - picleft - magnifyw / 2;
                    var picw = pic.width() - magnifyw;
                    var pich = pic.height() - magnifyh;
                    magnifytop = magnifytop < 0 ? 0 : magnifytop;
                    magnifyleft = magnifyleft < 0 ? 0 : magnifyleft;
                    magnifytop = magnifytop > pich ? pich : magnifytop;
                    magnifyleft = magnifyleft > picw ? picw : magnifyleft;
                    magnify.css({
                        top: magnifytop,
                        left: magnifyleft
                    });
                    var minl = bigpic.width() - objimg.width();
                    var mint = bigpic.height() - objimg.height();
                    var objimgl = -magnifyleft * 2;
                    var objimgt = -magnifytop * 2;
                    objimgl = objimgl < minl ? minl : objimgl;
                    objimgt = objimgt < mint ? mint : objimgt;
                    objimg.css({
                        top: objimgt,
                        left: objimgl
                    });
                });
                pic.mouseleave(function () {
                    magnify.hide();
                    bigpic.hide();
                });
            })();
        });
    }
    $.ajax({
        type: "post",
        url: "../api/log.php",
        data: {
            fn: 'select',
            tableName: 'list',
            a: 'cid',
            id: id
        },
        success: function success(str) {
            var arr = JSON.parse(str);
            if (arr.code == 1) {
                goods(arr.list);
            }
        }
    });
    $('#add').click(function () {
        var val = $('#tex').val();
        val++;
        $('#tex').val(val);
    });
    $('#jian').click(function () {
        var val = $('#tex').val();
        if (val > 1) {
            val--;
        } else {
            val = 1;
        }
        $('#tex').val(val);
    });
    $('#tex').blur(function () {
        var val = $('#tex').val();
        $('#tex').val(val);
    });
    $('.c_btn').click(function () {
        var val = $('#tex').val();
        $.ajax({
            type: "post",
            url: "../api/log.php",
            data: {
                fn: 'add',
                id: id,
                num: val,
                a: 'jj'
            },
            success: function success(st) {
                $('.m_che').css('display', 'block');
                add("../api/log.php");
            }
        });
    });
    $('.dsss').click(function () {
        var val = $('#tex').val();
        $.ajax({
            type: "post",
            url: "../api/log.php",
            data: {
                fn: 'add',
                id: id,
                num: val,
                a: 'jj'
            },
            success: function success(st) {
                add("../api/log.php");
            }
        });
    });
    add("../api/log.php");
    $('.x').click(function () {
        $('.m_che').css('display', 'none');
    });
    $('.xKa li').eq(0).on('click', function () {
        $('.q_pones').html('<img src="../img/liu1.png" alt="">');
        $('.xKa li').attr('class', '');
        $(this).attr('class', 'curr');
    });
    $('.xKa li').eq(1).on('click', function () {
        $('.q_pones').html('<img src="../img/liu2.png" alt="">');
        $('.xKa li').attr('class', '');
        $(this).attr('class', 'curr');
    });
    $('.xKa li').eq(2).on('click', function () {
        $('.q_pones').html('<img src="../img/liu3.png" alt="">');
        $('.xKa li').attr('class', '');
        $(this).attr('class', 'curr');
    });
    tuij();
    carts("../api/log.php", './goods.html', '../');
    cat("../api/log.php", './goods.html', '../');
    cook("../api/log.php");
    //轮播图
    var iW = $('.move_x li').eq(0).outerWidth();
    $('.move_x li').css('left', iW);
    $('.move_x li').eq(0).css('left', 0);
    //开定时器：每次轮播一个图
    var now = 0; //当前可视区的li下标
    var timer = null;
    timer = setInterval(next, 2000); //每隔两秒切下一张

    function next() {
        //旧图挪走：左侧
        $('.move_x li').eq(now).animate({ 'left': -iW }, 800, 'linear');
        //新图
        now = ++now > $('.move_x li').size() - 1 ? 0 : now;
        $('.move_x li').eq(now).css('left', iW);
        $('.move_x li').eq(now).animate({ 'left': 0 }, 800, 'linear');
        light();
    }
    //焦点跟随
    function light() {
        $('.move_s span').removeClass('currs');
        $('.move_s span').eq(now).addClass('currs').siblings().removeClass('currs');
    }
    //鼠标经过停止
    $('.q_move').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(next, 2000);
    });

    $('.move_s').on('click', 'span', function () {
        var index = $(this).html() - 1;
        console.log(index);
        if (index > now) {
            //从右侧进入可视区
            //旧图：放到左边
            $('.move_x li').eq(now).animate({ 'left': -iW }, 800, 'linear');
            //新图：快速放在右侧，再挪进来
            $('.move_x li').eq(index).css('left', iW);
            $('.move_x li').eq(index).animate({ 'left': 0 }, 800, 'linear');
            now = index;
        }

        if (index < now) {
            //从左侧进入可视区
            //旧图：放到右边
            $('.move_x li').eq(now).animate({ 'left': iW }, 800, 'linear');
            //新图：快速放在左侧，再挪进来
            $('.move_x li').eq(index).css('left', -iW);
            $('.move_x li').eq(index).animate({ 'left': 0 }, 800, 'linear');
            now = index;
        }
        light();
    });
});