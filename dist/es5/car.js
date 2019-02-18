

$(function () {
    function lius() {
        $.ajax({
            type: "post",
            url: "../api/log.php",
            data: {
                fn: 'car'
            },
            success: function success(str) {
                var arr = JSON.parse(str);
                if (arr.code == 1) {
                    $('.da').css('display', 'block');
                    $('.wu').css('display', 'none');
                    carXuan(arr.list);
                } else {
                    $('.da').css('display', 'none');
                    $('.wu').css('display', 'block');
                }
            }
        });
    }
    lius();

    function carXuan(arr) {
        var html = arr.map(function (itme) {
            return "<ul class=\"order_lists pad qc\" data-id=\"" + itme.id + "\">\n                        <li class=\"list_chk ch\">\n                            <input type=\"checkbox\" class=\"son_check\">\n                        </li>   \n                        <li class=\"list_con\">\n                            <div class=\"list_img\"><a href=\"javascript:;\"><img src=\"../" + itme.imgurl + "\" alt=\"\"></a></div>\n                            <div class=\"list_text\"><a href=\"javascript:;\">" + itme.name + "</a></div>\n                        </li>\n                        <li class=\"list_price pf\">\n                            <p class=\"price\">\uFFE5" + itme.price + "</p>\n                        </li>\n                        <li class=\"list_price pf\"></li>\n                        <li class=\"list_amount\">\n                            <div class=\"amount_box\">\n                                <a href=\"javascript:;\" class=\"reduce reSty\">-</a>\n                                <input type=\"text\" value=\"" + itme.num + "\" class=\"sum\">\n                                <a href=\"javascript:;\" class=\"plus\">+</a>\n                            </div>\n                        </li>\n                        <li class=\"list_price pf\">0.05kg</li>\n                        <li class=\"list_sum\">\n                            <p class=\"sum_price\">\uFFE5" + itme.zong + "</p>\n                        </li>\n                        <li class=\"list_ku pf\">\u73B0\u8D27</li>\n                        <li class=\"list_op pf\">\n                            <p class=\"del\"><a href=\"javascript:;\" class=\"delBtn\">\u79FB\u9664\u5546\u54C1</a></p>\n                        </li>\n                    </ul>";
        }).join('');
        $('.order_content').html(html);
        //图片跳转
        $('.list_img').on('click', function () {
            var id = $(this).parent().parent().data('id');
            location.href = './goods.html?id=' + id;
        });
        //文字跳转
        $('.list_text').on('click', function () {
            var id = $(this).parent().parent().data('id');
            location.href = './goods.html?id=' + id;
        });
        var vals = $('.sum').val() - 0;
        if (vals > 1) {
            $('.reduce').attr('class', 'reduce');
        } else {
            $('.reduce').attr('class', 'reduce reSty');
        }
        //加
        $('.order_content').on('click', '.plus', function () {
            var val = $(this).prev().val();
            var id = $(this).parent().parent().parent().data('id');
            val++;
            if (val > 1) {
                $(this).prev().prev().attr('class', 'reduce');
            } else {
                $(this).prev().prev().attr('class', 'reduce reSty');
            }
            $.ajax({
                type: "post",
                url: "../api/log.php",
                data: {
                    fn: 'add',
                    id: id,
                    num: val,
                    a: 'zi'
                },
                success: function success(st) {
                    add("../api/log.php");
                }
            });
            $(this).prev().val(val);
            goodTotal($(this));
        });
        //减
        $('.order_content').on('click', '.reduce', function () {
            var val = $(this).next().val();
            var id = $(this).parent().parent().parent().data('id');
            if (val > 1) {
                val--;
                $(this).attr('class', 'reduce');
            } else {
                $(this).attr('class', 'reduce reSty');
                val = 1;
            }
            $.ajax({
                type: "post",
                url: "../api/log.php",
                data: {
                    fn: 'add',
                    id: id,
                    num: val,
                    a: 'zi'
                },
                success: function success(st) {
                    add("../api/log.php");
                }
            });
            $(this).next().val(val);
            goodTotal($(this));
        });
        //表单
        $('.sum').blur(function () {
            var val = $(this).val();
            var id = $(this).parent().parent().parent().data('id');
            if (val.trim()) {
                $.ajax({
                    type: "post",
                    url: "../api/log.php",
                    data: {
                        fn: 'add',
                        id: id,
                        a: 'zi',
                        num: val
                    },
                    success: function success(st) {
                        add("../api/log.php");
                    }
                });
                $(this).val(val);
                goodTotal($(this));
            }
        });

        function goodTotal(now) {
            //找单价
            var price = now.parent().parent().parent().find('.price').html().substring(1) * 1;
            //找数量
            var num = now.parent().find('input').val() * 1;
            // console.log(price, num);
            //小计=单价*数量
            var total = (price * num).toFixed(2);
            now.parent().parent().parent().find('.sum_price').html('￥' + total); //设置值
            NumPrice();
        }
        //删除
        $('.order_content').on('click', '.del', function () {
            $('.model_bg').css('display', 'block');
            $('.my_model').css('display', 'block');
            var delaa = $(this).parent().parent();
            var idaa = $(this).parent().parent().data('id');
            $('.dialog-sure').click(function () {

                $('.model_bg').css('display', 'none');
                $('.my_model').css('display', 'none');
                $.ajax({
                    type: "post",
                    url: "../api/log.php",
                    data: {
                        fn: 'del',
                        id: idaa
                    },
                    success: function success(str) {
                        delaa.remove();
                        lius();
                        NumPrice();
                    }
                });
            });
            $('.dialog-close').click(function () {
                $('.model_bg').css('display', 'none');
                $('.my_model').css('display', 'none');
            });
            $('.closeModel').click(function () {
                $('.model_bg').css('display', 'none');
                $('.my_model').css('display', 'none');
            });
        });

        NumPrice();
        //总数量和总价
        var arr = []; //存被选中的行的下标数
        function NumPrice() {
            arr = [];
            for (var i = 0; i < $('.ch input').size(); i++) {
                if ($('.ch input').eq(i).prop('checked')) {
                    arr.push(i);
                }
            }

            if (arr.length == $('.ch input').size()) {
                //所有商品被选中了，控制权限勾上
                $('.whole_check').prop('checked', 'checked');
                $('.shopChoice').prop('checked', 'checked');
                qikong('.cs');
            } else {
                $('.whole_check').removeAttr('checked');
                $('.shopChoice').removeAttr('checked');
            }

            var priceAll = 0; //总价
            var numAll = 0; //总数量

            for (var i = 0; i < arr.length; i++) {
                numAll += $('.sum').eq(arr[i]).val() * 1;
                priceAll += $('.sum_price').eq(arr[i]).text().substring(1) * 1;
            }
            $('.piece_num').html(numAll);
            $('.totalMoney').html('商品总计：<strong class="total_text">￥' + priceAll.toFixed(2) + '</strong>');
        }
        //全选、不选
        $('.whole_check').on('click', function () {
            if ($(this).prop('checked')) {
                //给所有的复选框都勾上
                $('.shopChoice').prop('checked', 'checked');
                $('.ch input').prop('checked', 'checked');
            } else {
                $('.shopChoice ').removeAttr('checked');
                $('.ch input').removeAttr('checked');
            }
            NumPrice();
        });
        $('.shopChoice').on('click', function () {
            if ($(this).prop('checked')) {
                //给所有的复选框都勾上
                $('.whole_check').prop('checked', 'checked');
                $('.ch input').prop('checked', 'checked');
            } else {
                $('.whole_check ').removeAttr('checked');
                $('.ch input').removeAttr('checked');
            }
            NumPrice();
        });
        //选中单行
        $('.order_content').on('click', '.ch input', function () {
            // console.log($(this).prop('checked'));
            NumPrice();
        });
        $('.cs').click(function () {
            $('.model_bg').css('display', 'block');
            $('.my_model').css('display', 'block');
            $('.dialog-sure').click(function () {
                $('.model_bg').css('display', 'none');
                $('.my_model').css('display', 'none');
                for (var i = arr.length - 1; i >= 0; i--) {
                    //从尾部开始删除
                    // console.log(arr[i] + 1);
                    var id = $('.order_content ul').eq(arr[i]).data('id');
                    // console.log(id);
                    $.ajax({
                        type: "post",
                        url: "../api/log.php",
                        data: {
                            fn: 'del',
                            id: id
                        },
                        success: function success(str) {
                            $('.order_content ul').eq(arr[i]).remove();
                            lius();
                            NumPrice();
                        }
                    });
                }
            });

            $('.dialog-close').click(function () {
                $('.model_bg').css('display', 'none');
                $('.my_model').css('display', 'none');
            });
            $('.closeModel').click(function () {
                $('.model_bg').css('display', 'none');
                $('.my_model').css('display', 'none');
            });
        });
        qikong('.cu');

        function qikong(dom) {
            $(dom).click(function () {
                $('.model_bg').css('display', 'block');
                $('.my_model').css('display', 'block');
                $('.dialog-sure').click(function () {
                    $('.model_bg').css('display', 'none');
                    $('.my_model').css('display', 'none');
                    $.ajax({
                        type: "post",
                        url: "../api/log.php",
                        data: {
                            fn: 'dels'
                        },
                        success: function success(str) {
                            lius();
                            NumPrice();
                        }
                    });
                });
                $('.dialog-close').click(function () {
                    $('.model_bg').css('display', 'none');
                    $('.my_model').css('display', 'none');
                });
                $('.closeModel').click(function () {
                    $('.model_bg').css('display', 'none');
                    $('.my_model').css('display', 'none');
                });
            });
        }
    }
    $('.goshop').click(function () {
        location.href = '../index.html';
    });
    cook("../api/log.php");
});