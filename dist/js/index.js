$(function(){var a=new Swiper(".swiper-container",{autoplay:{delay:2e3,disableOnInteraction:!1},loop:!0,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(a,n){return'<span class="'+n+'">'+(a+1)+"</span>"}}});add("./api/log.php"),$("#swiper-container").on({mousemove:function(){a.autoplay.stop()},mouseout:function(){a.autoplay.start()}}),setTimeout(function(){$(".herad_gao").css("display","none")},5e3),$.ajax({type:"post",url:"./api/log.php",data:{fn:"list",tableName:"list",page:1,pty:8},success:function(a){var n=JSON.parse(a).list.map(function(a){return'<li data-id="'+a.id+'">\n                            <a href="javascript:;" class="buy_a">'+a.name+"</a>\n                            <span>￥"+a.price+'</span>\n                            <a href="javascript:;" class="buy_img">\n                                <img src="./'+a.imgurl+'" alt="">\n                            </a>\n                            <div class="cars">\n                                <a href="javascript:;">加入购物车</a>\n                            </div>\n                        </li>'}).join("");$("#buy").html(n),$(".buy_a").on("click",function(){var a=$(this).parent().data("id");window.open("./html/goods.html?id="+a)}),$(".buy_img img").on("click",function(){var a=$(this).parent().parent().data("id");window.open("./html/goods.html?id="+a)}),$("#buy li").hover(function(){$(this).find(".cars").css("top","225px")},function(){$(this).find(".cars").css("top","260px")}),$(".cars").click(function(){var a=$(this).parent().data("id");$.ajax({type:"post",url:"./api/log.php",data:{fn:"add",id:a,a:1,num:1},success:function(a){add("./api/log.php")}})})}}),$.ajax({type:"post",url:"./api/log.php",data:{fn:"list",tableName:"list",page:8,pty:5},success:function(a){var n=JSON.parse(a).list.map(function(a){return'<li data-id="'+a.id+'">\n                            <div class="nImg">\n                                <a href="javascript:;">\n                                    <img src="./'+a.imgurl+'" alt="">\n                                </a>\n                            </div>\n                            <div class="nShou">\n                                <a href="javascript:;">\n                                '+a.name+'\n                                </a>\n                            </div>\n                            <div class="nPrive">￥'+a.price+'</div>\n                            <p class="nBuy">\n                                <a href="javascript:;">抢购</a>\n                            </p>\n                        </li>'}).join("");$("#nowlist").html(n),$(".nImg").on("click",function(){var a=$(this).parent().data("id");window.open("./html/goods.html?id="+a)}),$(".nShou").on("click",function(){var a=$(this).parent().data("id");window.open("./html/goods.html?id="+a)}),$(".nBuy a").click(function(){var a=$(this).parent().parent().data("id");$.ajax({type:"post",url:"./api/log.php",data:{fn:"add",id:a,a:1,num:1},success:function(a){add("./api/log.php")}})})}}),$.ajax({type:"post",url:"./api/log.php",data:{fn:"list",tableName:"list",page:13,pty:8},success:function(a){var n=JSON.parse(a).list.map(function(a){return'<li data-id="'+a.id+'">\n                            <div class="f_img">\n                                <a href="javascript:;">\n                                    <img src="./'+a.imgurl+'" alt="">\n                                </a>\n                                <div class="f_add">\n                                    <a href="javascript:;">加入购物车</a>\n                                </div>\n                            </div>\n\n                            <p class="f_shuo">\n                                <a href="javascript:;">'+a.name+'</a>\n                            </p>\n                            <p class="f_price">￥'+a.price+"</p>\n                        </li>"}).join("");$(".shui").html(n),$(".f_img img").on("click",function(){var a=$(this).parent().parent().parent().data("id");window.open("./html/goods.html?id="+a)}),$(".f_shuo").on("click",function(){var a=$(this).parent().data("id");window.open("./html/goods.html?id="+a)}),$(".f_add").click(function(){var a=$(this).parent().parent().data("id");$.ajax({type:"post",url:"./api/log.php",data:{fn:"add",id:a,a:1,num:1},success:function(a){add("./api/log.php")}})})}}),$.ajax({type:"post",url:"./api/log.php",data:{fn:"list",tableName:"list",page:1,pty:10},success:function(a){var n,i,t=JSON.parse(a);n=t.list,i=n.map(function(a){return'<li data-id="'+a.id+'">\n                            <div class="j_img">\n                                <a href="javascript:;">\n                                    <img src="./'+a.imgurl+'" alt="">\n                                </a>\n                                <div class="j_add">\n                                    <a href="javascript:;">加入购物车</a>\n                                </div>\n                            </div>\n                            <div class="j_shuo">\n                                <a href="javascript:;">'+a.name+"</a>\n                            </div>\n                            <p>￥"+a.price+"</p>\n                        </li>"}).join(""),$("#tui").html(i),$(".j_img img").on("click",function(){var a=$(this).parent().parent().parent().data("id");window.open("./html/goods.html?id="+a)}),$(".j_shuo").on("click",function(){var a=$(this).parent().data("id");window.open("./html/goods.html?id="+a)}),$(".j_add").click(function(){var a=$(this).parent().parent().data("id");$.ajax({type:"post",url:"./api/log.php",data:{fn:"add",id:a,a:1,num:1},success:function(a){add("./api/log.php")}})})}}),$(".nav_side .cusrwo").hover(function(){$(".nav_side .cusrwo").css("opacity","0.1"),$(this).css("opacity","0")},function(){$(".nav_side .cusrwo").css("opacity","0")}),window.onscroll=function(){200<=window.scrollY?$(".lou7").css("display","block"):$(".lou7").css("display","none")},$(".lou7").on("click",function(){0<=window.scrollY&&window.scrollTo(0,0)}),carts("./api/log.php","./html/goods.html","./"),cat("./api/log.php","./html/goods.html","./"),cook("./api/log.php");var r=new Date("2019-12-30  00:00"),d=setInterval(function(){var a=new Date,n=parseInt((r-a)/1e3);n<=0&&clearInterval(d);var i=setTime(n),t=i.hours.substr(0,1),s=i.hours.substring(1);$("#nowHour1").html(t),$("#nowHour2").html(s);var o=i.mins.substr(0,1),p=i.mins.substring(1);$("#nowMin1").html(o),$("#nowMin2").html(p);var c=i.secs.substr(0,1),l=i.secs.substring(1);$("#nowSencond1").html(c),$("#nowSencond2").html(l)},1e3)});