$(function(){var r=!1,o=!1,t=!1,n=!1,c=!0;$("#username").on({click:function(){$("#inf1").html("请输入4-20位首字母开头的用户名").css("color",""),$(this).parent().css("borderColor","#6e9b0c"),$("#username").next().css("display","none")},blur:function(){var s=$(this).val();s.trim()?checkReg.name(s)?$.ajax({type:"post",url:"../api/log.php",data:{fn:"select",tableName:"users",a:"yhm",username:s},success:function(s){var e=JSON.parse(s);0==e.code?($("#username").next().css("display","inline-block"),$("#username").parent().css("borderColor",""),$("#inf1").html(""),r=!0):$("#inf1").html(e.message).css("color","red")}}):($("#inf1").html("请输入正确的用户名").css("color","red"),$(this).parent().css("borderColor","red")):($("#inf1").html(""),$(this).parent().css("borderColor",""))}}),$(".regCode").html(getYzm()),$(".regCode").click(function(){$(".regCode").html(getYzm()),$("#tex").val(""),$("#tex").next().css("display","none")}),$(".regLogin a").click(function(){$(".regCode").html(getYzm()),$("#tex").val(""),$("#tex").next().css("display","none")}),$("#tex").on({click:function(){$("#inf4").html("请输入验证码").css("color",""),$(this).parent().css("borderColor","#6e9b0c")},blur:function(){var s=$(".regCode").html(),e=$(this).val();e.trim()?e.toLowerCase()==s.toLowerCase()?($(this).next().css("display","inline-block"),$("#inf4").html(""),$(this).parent().css("borderColor",""),o=!0):($(this).next().css("display","none"),$(".regCode").html(getYzm()),$("#inf4").html("验证码不正确").css("color","red"),$(this).parent().css("borderColor","red"),$(this).val("").focus()):($("#inf4").html(""),$(this).parent().css("borderColor",""))}}),$("#psw1").on({click:function(){$("#inf2").html("请输入6-18位首字母开头的密码").css("color",""),$(this).parent().css("borderColor","#6e9b0c"),$(this).next().css("display","none")},blur:function(){var s=$(this).val();s.trim()?checkReg.psweasy(s)?($(this).next().css("display","inline-block"),$("#inf2").html(""),$(this).parent().css("borderColor",""),t=!0):($("#inf2").html("密码只能为6-20位字母数字下划线组合").css("color","red"),$(this).parent().css("borderColor","red")):($("#inf2").html(""),$(this).parent().css("borderColor",""))}}),$("#psw2").on({click:function(){$("#inf3").html("请再次输入密码").css("color",""),$(this).parent().css("borderColor","#6e9b0c"),$(this).next().css("display","none")},blur:function(){var s=$(this).val(),e=$(psw1).val();s.trim()&&e.trim()?checkReg.pwwagain(s,e)?($(this).next().css("display","inline-block"),$("#inf3").html(""),$(this).parent().css("borderColor",""),n=!0):($("#inf3").html("两次输入不一致，请重新输入").css("color","red"),$(this).parent().css("borderColor","red")):($("#inf3").html(""),$(this).parent().css("borderColor",""))}}),$("#checks").click(function(){(c=!c)?$("#inf5").html(""):$("#inf5").html("请阅读并同意注册协议").css("color","red")}),$(".regBtn a").click(function(){if(r||($("#inf1").html("请输入用户名").css("color","red"),$("#username").parent().css("borderColor","red")),o||($("#inf2").html("请输入登录密码").css("color","red"),$("#psw1").parent().css("borderColor","red")),t||($("#inf3").html("请再次输入密码").css("color","red"),$("#psw2").parent().css("borderColor","red")),n||($("#inf4").html("请输入验证码").css("color","red"),$("#tex").parent().css("borderColor","red")),c||$("#inf5").html("请阅读并同意注册协议").css("color","red"),r&&o&&t&&n&&c){var s=$("#username").val(),e=$("#psw1").val();$.ajax({type:"post",url:"../api/log.php",data:{fn:"select",tableName:"users",a:"reg",username:s,password:e},success:function(s){var e=JSON.parse(s);console.log(e),1==e.code&&(location.href="login.html")}})}})});