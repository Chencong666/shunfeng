

/* 
    getRandomNum:随机整数

        min：最小值
        max：最大值
*/
function getRandomNum(min, max) {
	return parseInt(Math.random() * (max - min + 1) + min);
}
//随机验证码
function getYzm() {
	var str = '';
	var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	// console.log(arr);

	for (var i = 0; i < 4; i++) {

		var num = getRandomNum(0, arr.length - 1);

		str += arr[num];
	}
	return str;
}

/*
    checkReg:函数可以进行表单验证

*/
var checkReg = {
	//去掉前后空格
	"trim": function trim(str) {
		var reg = /^\s+|\s+$/;
		return str.replace(reg, '');
	},
	//用户名  账号 字母开头 4-20位
	"name": function name(str) {
		var reg = /^[a-zA-Z][\w\-]{3,19}$/;
		return reg.test(str);
	},
	//昵称
	"chinese": function chinese(str) {
		var reg = /^[\u2E80-\u9FFF]+$/;
		return reg.test(str);
	},
	//电子邮件
	"email": function email(str) {
		var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		return reg.test(str);
	},
	//身份证
	"idcard": function idcard(str) {
		var reg = /^(\d{14}|\d{17})[\dXx]$/;
		return reg.test(str);
	},
	//手机号码
	"tel": function tel(str) {
		var reg = /^1[3-9]\d{9}$/;
		return reg.test(str);
	},
	//生日
	"birthday": function birthday(str) {
		var reg = /^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$/;
		return reg.test(str);
	},
	//密码  6-18位首字母开头
	"psweasy": function psweasy(str) {
		var reg = /^[a-zA-Z]\w{5,17}$/;
		return reg.test(str);
	},
	//判断密码的   全等 恒等
	"pwwagain": function pwwagain(str1, str2) {
		return str1 === str2;
	}
	/*
 	  封装cookie函数:
 	  存: Cookie.set()
 	  取:	Cookie.get()
 	  删: Cookie.remove()
  */
};var Cookie = {
	"set": function set(name, value, prop) {
		//存数据到cookie里面:必写的
		var str = name + '=' + value;
		//prop存json数据，json存后面一些可选参数
		//expires:设置失效时间
		if (prop.expires) {
			//把时间转成字符串
			str += ';expires=' + prop.expires.toUTCString();
		}
		//设置path路径
		if (prop.path) {
			str += ';path=' + prop.path;
		}
		//domain设置可访问cookie的域名
		if (prop.domain) {
			//把时间转成字符串
			str += ';domain=' + prop.domain;
		}
		//写到cookie
		document.cookie = str;
	},
	"get": function get(key) {
		var cookies = document.cookie; //name=tiantian; age=18; usn=yuanyuan; pws=456123
		var arr = cookies.split('; '); //['name=tiantian','age=18','usn=yuanyuan','pws=456123']
		for (var i = 0; i < arr.length; i++) {
			var arr2 = arr[i].split('='); //['name','tiantian']
			if (key == arr2[0]) {
				return arr2[1];
			}
		}
	},
	"remove": function remove(key) {
		//删的原理:设置过期时间
		var now = new Date();
		now.setDate(now.getDate() - 1);
		Cookie.set('key', '', {
			expires: now,
			path: '/'
		});
	}
	//补零操作
};function setDb(num) {
	//小于10的，补零
	if (num < 10) {
		return '0' + num;
	} else {
		return '' + num;
	}
}
/*
 	秒转成时间：xx天xx时xx分xx秒   ：  -
 	setTime(num)
 		* 参数： 秒
 		* 返回值： {}数据返回(灵活一点)
 		
 */

function setTime(num) {
	//num是秒数    98876秒  有多少天： xx天xx时xx分xx秒
	var sec = setDb(num % 60); //06 秒
	var min = setDb(Math.floor(num / 60) % 60); //Math.floor(num / 60) % 60     分
	var hour = setDb(Math.floor(num / 60 / 60) % 24); //时
	var day = setDb(Math.floor(num / 60 / 60 / 24)); //天数
	// var mon = setDb()

	return {
		secs: sec,
		mins: min,
		hours: hour,
		days: day
	};
}
/*

    将字符串转成对象输出  setStr
        str   字符串

        比如给你字符串：'name=laoxie&age=18'
        输出：
        {
            name ： 'laoxie',
            age : 18
        }
*/

function setStr(str) {

	var obj = {};

	var arr = str.split('&');

	for (var i in arr) {
		var newarr = arr[i].split('=');
		obj[newarr[0]] = newarr[1];
	}
	return obj;
}

function add(url) {
	$.ajax({
		type: "post",
		url: url,
		data: {
			fn: 'car'
		},
		success: function success(str) {
			var arr = JSON.parse(str);
			var jss = 0;
			var ges = 0;
			var jgs = 0;
			if (arr.code == 1) {
				arr.list.map(function (item) {
					jss += item.num * 1;
					ges = item.num * item.price;
					jgs += ges;
				});
			} else {
				jss = 0;
				ges = 0;
				jgs = 0;
			}
			jgs = jgs.toFixed(2);
			$('#heji').html('购物车共计' + jss + '件商品，合计' + jgs + '元');
			$('#carNum').html(jss);
			$('#numss').html(jss);
		}
	});
}

function tuij() {
	$.ajax({
		type: "post",
		url: "../api/log.php",
		data: {
			fn: 'list',
			tableName: 'list',
			page: 1,
			pty: 5
		},
		success: function success(str) {
			var arr = JSON.parse(str);
			var html = arr.list.map(function (item) {
				return '<li data-id="' + item.id + '">\n\t\t\t\t\t\t<img src="../' + item.imgurl + '" alt="">\n\t\t\t\t\t\t<span>\uFFE5<strong class="ge">' + item.price + '</strong></span>\n\t\t\t\t\t\t<p class="g_shuo">' + item.name + '</p>\n\t\t\t\t\t</li>';
			});
			$('.accs').html(html);
			$('.accs img').click(function () {
				var id = $(this).parent().data('id');
				location.href = './goods.html?id=' + id;
			});
			$('.g_shuo').click(function () {
				var id = $(this).parent().data('id');
				location.href = './goods.html?id=' + id;
			});
		}
	});
}

function carts(url, di, img) {
	$('.C_car').hover(function () {
		// over
		$('.car_list').css('display', 'block');
		$.ajax({
			type: "post",
			url: url,
			data: {
				fn: 'car'
			},
			success: function success(str) {
				var arr = JSON.parse(str);
				if (arr.code == 1) {
					$('.car_goods').css('display', 'none');
					$('.car_form2').css('display', 'block');
					var js = 0;
					var ge = 0;
					var jg = 0;
					arr.list.map(function (item) {
						js += item.num * 1;
						ge = item.num * item.price;
						jg += ge;
					});
					var html = arr.list.map(function (item) {
						return ' <li data-id="' + item.id + '">\n\t\t\t\t\t\t\t\t\t<div class="E_img ">\n\t\t\t\t\t\t\t\t\t\t<img src="' + img + item.imgurl + '" alt="">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="c">\n\t\t\t\t\t\t\t\t\t\t<a href="javascript:;" class="ctex">' + item.name + '</a>\n\t\t\t\t\t\t\t\t\t\t<b>3kg</b>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="r">\n\t\t\t\t\t\t\t\t\t\t<span class="re">\xA5' + item.price + '</span>\n\t\t\t\t\t\t\t\t\t\t<span class="rNum">x' + item.num + '</span>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<a href="javascript:;" class="cDel">\u5220\u9664</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>';
					});
					var html2 = '<p>\u5171\u6709 <span class="jianshu">' + js + '</span> \u4EF6\u5546\u54C1</p>\n\t\t\t\t\t\t\t\t<p>\u603B\u91CD <span class="kg">3.00 </span>kg\uFF08\u542B\u5305\u88C5\uFF09</p>';
					var html3 = '<p>\u5171\u8BA1\uFF1A<span class="caZ">\xA5' + jg + '</span></p>\n\t\t\t\t\t\t\t\t<a href="' + img + 'html/car.html">\u53BB\u8D2D\u7269\u8F66\u7ED3\u7B97</a>\n\t\t\t\t\t\t\t\t';
					$('.E_add').html(html);
					$('.title2').html(html2);
					$('.title3').html(html3);
					$('.cDel').click(function () {
						var idA = $(this).parent().parent().data('id');
						$.ajax({
							type: "post",
							url: url,
							data: {
								fn: 'del',
								id: idA
							},
							success: function success(str) {
								$('.E_add').html(html);
							}
						});
						add(url);
					});
					$('.E_img').click(function () {
						var id = $(this).parent().data('id');
						location.href = di + '?id=' + id;
					});
					$('.c a').click(function () {
						var id = $(this).parent().parent().data('id');
						location.href = di + '?id=' + id;
					});
				} else {
					$('.car_goods').css('display', 'block');
					$('.car_form2').css('display', 'none');
				}
			}
		});
	}, function () {
		// out
		$('.car_list').css('display', 'none');
		add(url);
	});
}
function cat(url, di, img) {
	$('.wa').hover(function () {
		// over
		$('.cards').css('display', 'block');
		$.ajax({
			type: "post",
			url: url,
			data: {
				fn: 'car'
			},
			success: function success(str) {
				var arr = JSON.parse(str);
				if (arr.code == 1) {
					$('.car_go').css('display', 'none');
					$('.cssk2').css('display', 'block');
					var js = 0;
					var ge = 0;
					var jg = 0;
					arr.list.map(function (item) {
						js += item.num * 1;
						ge = item.num * item.price;
						jg += ge;
					});
					jg = jg.toFixed(2);
					var html = arr.list.map(function (item) {
						return ' <li data-id="' + item.id + '">\n\t\t\t\t\t\t\t\t\t<div class="cc_img">\n\t\t\t\t\t\t\t\t\t\t<img src="' + img + item.imgurl + '" alt="">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="c1">\n\t\t\t\t\t\t\t\t\t\t<a href="javascript:;" class="ctex1">' + item.name + '</a>\n\t\t\t\t\t\t\t\t\t\t<b>3kg</b>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="r1">\n\t\t\t\t\t\t\t\t\t\t<span class="re1">\xA5' + item.price + '</span>\n\t\t\t\t\t\t\t\t\t\t<span class="rNum1">x' + item.num + '</span>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<a href="javascript:;" class="cDel1">\u5220\u9664</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>';
					});
					var html2 = '<p>\u5171\u6709 <span class="jianshu">' + js + '</span> \u4EF6\u5546\u54C1</p>\n\t\t\t\t\t\t\t\t<p>\u603B\u91CD <span class="kg">3.00 </span>kg\uFF08\u542B\u5305\u88C5\uFF09</p>';
					var html3 = '<p>\u5171\u8BA1\uFF1A<span class="caZ">\xA5' + jg + '</span></p>\n\t\t\t\t\t\t\t\t<a href="' + img + 'html/car.html">\u53BB\u8D2D\u7269\u8F66\u7ED3\u7B97</a>\n\t\t\t\t\t\t\t\t';
					$('.cc_add').html(html);
					$('.ti2').html(html2);
					$('.ti3').html(html3);
					$('.cDel1').click(function () {
						var idA = $(this).parent().parent().data('id');
						$.ajax({
							type: "post",
							url: url,
							data: {
								fn: 'del',
								id: idA
							},
							success: function success(str) {
								$('.cc_add').html(html);
								add(url);
							}
						});
					});
					$('.cc_img').click(function () {
						var id = $(this).parent().data('id');
						location.href = di + '?id=' + id;
					});
					$('.c1 a').click(function () {
						var id = $(this).parent().parent().data('id');
						location.href = di + '?id=' + id;
					});
				} else {
					$('.car_go').css('display', 'block');
					$('.cssk2').css('display', 'none');
				}
			}
		});
	}, function () {
		// out
		$('.cards').css('display', 'none');
		add(url);
	});
}

function cook(url) {
	var name = Cookie.get('name');
	if (name) {
		$('.login').html(name + '，欢迎您！<a href="javascript:;" class="quit">[退出]</a>');
		$('.quit').click(function () {
			$.ajax({
				type: "post",
				url: url,
				data: {
					fn: 'select',
					a: 'quit'
				},
				success: function success(str) {
					$('.login').html('\u563F\uFF0C\u6B22\u8FCE\u6765\u987A\u4E30\u4F18\u9009\uFF01\n\t\t\t\t\t<a href="./html/login.html">\u8BF7\u767B\u5F55</a>\n\t\t\t\t\t|\n\t\t\t\t\t<a href="./html/reg.html">\u514D\u8D39\u6CE8\u518C</a>\n\t\t\t\t\t<div class="reg">\n\t\t\t\t\t\t<div class="jt"></div>\n\t\t\t\t\t\t<span>\u65B0\u4F1A\u5458\u6CE8\u518C\u9001100\u5143\u4F18\u60E0\u5238\u5927\u793C\u5305</span>\n\t\t\t\t\t</div>');
				}
			});
		});
	} else {
		$('.login').html('\u563F\uFF0C\u6B22\u8FCE\u6765\u987A\u4E30\u4F18\u9009\uFF01\n\t\t\t\t\t<a href="./html/login.html">\u8BF7\u767B\u5F55</a>\n\t\t\t\t\t|\n\t\t\t\t\t<a href="./html/reg.html">\u514D\u8D39\u6CE8\u518C</a>\n\t\t\t\t\t<div class="reg">\n\t\t\t\t\t\t<div class="jt"></div>\n\t\t\t\t\t\t<span>\u65B0\u4F1A\u5458\u6CE8\u518C\u9001100\u5143\u4F18\u60E0\u5238\u5927\u793C\u5305</span>\n\t\t\t\t\t</div>');
	}
}