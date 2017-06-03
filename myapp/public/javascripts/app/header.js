//如果有链接的点击事件
function on_click_msg(msg_id, msg_link) {
    var $this=$(this);
    RequestService("/online/message/updateReadStatusById", "post", {
        id: msg_id
    }, function(data) {
        if(data.success == true) {
            window.open(msg_link,"_blank");
        }
    }, false);
};
$(function () {
    /**
     * Created by admin on 2016/9/14.
     */
    //==========================================================================================
    var headersIndex={
    	nav:'<div class="header_left"><a href="/index.html"><img src="../../../images/logo.png" alt=""></a></div>'+
			'<div class="header_right">'+
			'<a href="javascript:;" class="studentCenterBox">学习中心</a>'+
			'<div class="shoppingBox">'+
			'<a href="javascript:;" data-id="" class="shoppingCar">购物车</a>'+
			'<span class="shopping"><em>10</em></span>'+
			'</div>'+
			'<span class="lineBetween">|</span>'+
			'<div class="loginGroup">'+ 
			'<div class="login" style="display: none;">'+
			'<div class="dropdown" id="myDropdown">'+
			'<div class="userPic">'+
			'<span class="messageCount"><em></em></span>'+
			'</div>'+
			'<span class="caret"></span>'+
			'<ul class="dropdownmenu" aria-labelledby="dLabel">'+
			'<div class="pointer"></div>'+
			'<li><a data-id="mynews"><i class="dotRed">•</i>我的消息</a></li>'+
			'<li><a data-id="mydata">我的资料</a></li>'+
			'<li><a data-id="idea">意见反馈</a></li>'+
			'<li><a data-exit="exit">安全退出</a></li>'+
			'</ul>'+
			'</div>'+
			'</div>'+
			'<div class="logout" style="display:none;">'+
			'<a class="btn-login btn-link" data-toggle="modal" data-target="#login" data-backdrop="static">登录</a>'+
			'<a class="btn-register btn-link" href="/web/html/login.html?ways=register">注册</a>'+
			'</div>'+
			'</div>'+
			'</div>',
		pinpai:'<div class="pinpai">'+
	        '<p>'+
	        '<span class="pinpaiLeft">传智播客旗下高端在线教育品牌 <span class="shus">|</span><a href="http://www.itheima.com" target="_blank">线下学院</a></span>'+
	        '<span class="pinpaiRight">全国咨询热线：010-82826576</span>'+
	        '</p>'+
	        '</div>',
		navPath:'<div class="pathLeft clearfix header_left">'+
				'<div class="allClass"><a>全部学科</a></div>'+
				'<div class="path">'+
				'<a href="/index.html">首页</a>'+
				'<a href="/web/vocationalCourses/vocationalCourses.html">就业班</a>'+
//				'<div class="dropdown">'+
//				'<a href="##">微专业<span class="caret"></span></a>'+
//				'<ul class="dropdownmenu" aria-labelledby="dLabel">'+
//				'<li><a href="" class="hotClass">微信小程序开发工程师<span></span></a></li>'+
//				'<li><a href="">Web前端工程师</a></li>'+
//				'<li><a href="">Python Web工程师</a></li>'+
//				'<li><a href="">Go语言工程师</a></li>'+
//				'</ul>'+
//				'</div>'+
				'<a href="/web/microClassroom/microClassroom.html">精品微课</a>'+
				'<a href="/web/freeofcharge/freeofcharge.html">免费微课</a>'+
				'<a href="/web/html/ansAndQus.html">问答精灵</a>'+
				'<a href="/web/html/forum.html">博学社</a>'+
				'<a href="">学习空间</a>'+
				'</div>'+
				'</div>'+
				'<div class="searhInpt" id="searchInp">'+
				'<input  type="text" placeholder="搜索课程" id="searchTxt"/>'+
				'<button class="seachBtn"></button>'+
				'</div>',
        login:'<div class="modal" id="login" data-backdrop="static">'+
	        '<div class="modal-dialog login-module" role="document">'+
	        '<div class="cymylogin">'+
	        '<div class="cymylogin-top clearfix">'+
	        '<div class="cymyloginclose" data-dismiss="modal" aria-label="Close" data-backdrop="static"></div>'+
	        '<div class="cymyloginlogo">欢迎登录&nbsp;&nbsp;博学谷云课堂</div>'+
	        '<div class="cymyloginhint cymlogin">'+
	        '</div></div>'+
	        '<div class="cymylogin-bottom form-login">'+
	        '<input type="text" class="cyinput1 form-control" maxlength="30" placeholder="请输入手机号或邮箱" autocomplete="off"/>'+
	        '<div class="cymyloginclose1"></div>'+
	        '<input type="password" class="cyinput2 form-control" maxlength="18" placeholder="请输入6-18位密码" autocomplete="off"/>'+
	        '<div class="cymyloginclose2"></div>'+
	        '<button class="cymyloginbutton">登<em></em>录</button>'+
	        '<div class="cymyloginpassword">'+
	        '<a class="atOnceRegister" href="/web/html/login.html?ways=register">立即注册</a>'+
	        '<a class="atOnceResetPassword" href="/web/html/resetPassword.html">忘记密码?</a>'+
	        '</div>'+
       /* ' <div class="other-login-box">'+
        ' <span>其它方式登录</span>'+
        '<div class="other-login-ways clearfix">'+
        '<div class="qq-login"></div>'+
        ' <div class="weixin-login"></div>'+
        '</div>'+
        '</div>'+*/
        '</div></div></div></div>',
        oldStudent:'<div class="oldModal" id="old">'+
        '<div class="oldBody">'+
        '<img src="../../..//images/duihuan/oldModal.png"/>'+
        '<span class="oldX">X</span>'+
        '<a class="oldBtn">立即前往</a>'+
        '</div>'+
        '</div>'+
        '<div id="oldModalBack"></div>'
    };
   //网站公告
    var webNotice='<div class="webSiteNotice" style="display:none;">'+
            '<div class="innerBox clearfix">'+
            '<i class="iconfont icon-xiaoxilaba xiaoxilaba"></i><span class="noticeInfo"></span><i class="iconfont icon-guanbi noticeClose"></i>'+
            '</div></div>';
    var slideNavIndex={
        /* 咨询中心*/
        consult_center:'<div class="consult_center">咨询中心</div>',
        <!--在线咨询和电话咨询-->
        online_consult:'<div class="online_consult">'+
        '<a href="http://crm2.qq.com/page/portalpage/wpa.php?uin=800146955&aty=2&a=2&curl=&ty=1" target="_blank">'+
        '<em></em>' +
        '<div class="online_consult_hover clearfix"><span>在线咨询</span><em></em></div>'+
        '</a></div>',
        phone_consult:'<div class="phone_consult">'+
        '<em></em>' +
        '<div class="phone_consult_hover clearfix"><span class="phone_number">010-82826576</span><em></em></div>'+
        ' </div>',
        weixin:'<div class="sideWeixinBox">'+
            '<div class="sideWeixin">'+
            '<em></em>'+
            '</div>'+
        '</div>',
        weixinErma:'<div class="sideWeixinErma">'+
        '<img src="../../images/header/sideWeixin.png" />'+
        '<p>关注微信</p>'+
        '<div class="sideSanjiao">'+
        '<img src="../../images/header/float_sanjiao.png" />'+
        '</div>'+
        '</div>',
        weibo:'<a class="sideWeiboBox" href="http://weibo.com/u/5999622644?refer_flag=1001030102_&amp;is_hot=1" target="_blank">' +
        '<div class="sideWeibo">'+
        '<em></em>'+
        '</div>'+
        '</a>',
        weiboErma:'<div class="sideWeiboErma">'+
        '<img src="../../images/header/sideWeibopng.png" />'+
        '<p>关注微博</p>'+
        '<div class="sideSanjiao1">'+
        '<img src="../../images/header/float_sanjiao.png" />'+
        '</div>'+
        '</div>',
        feedback:'<div class="feedback">'+
        '<a href="javascript:;">'+
        '<em></em>' +
        '<div class="feedback_hover clearfix"><span>意见反馈</span><em></em></div>'+
        '</a></div>',
        <!--返回顶部-->
        h_top:'<div class="h_top" onclick="pageScroll();">' +
        '<span class="wrap">'+
        '<em></em>'+
        '</span></div>'
    }
    
    var header=$('<header class="clearfix"><div class="header_body"></div><div class="header_path clearfix"></div></header>');
    $(header).find(".header_body").before(template.compile(headersIndex.pinpai));
    $(header).find(".header_body").append(template.compile(headersIndex.nav));//首页头部
    $(header).find('.header_path').append(template.compile(headersIndex.navPath));//新版导航栏
    $("body").children(":first").before(header);
    $(header).append(template.compile(headersIndex.login));
    $(header).append(template.compile(headersIndex.oldStudent));
    $(header).before(template.compile(webNotice));
  /*  $(header).append(template.compile(slideNavIndex.consult_center));*/
    $(header).find('.header_path').append("<div class='rightSide'><div class='zxCenter'></div></div>");
    $(".rightSide .zxCenter").append(template.compile(slideNavIndex.online_consult));
    $(".rightSide .zxCenter").append(template.compile(slideNavIndex.phone_consult));
    $(".rightSide .zxCenter").append(template.compile(slideNavIndex.weixin));
    $(".rightSide .zxCenter").append(template.compile(slideNavIndex.weibo));
    $(".rightSide .zxCenter").append(template.compile(slideNavIndex.weixinErma));
    $(".rightSide .zxCenter").append(template.compile(slideNavIndex.weiboErma));
    $(".rightSide .zxCenter").append(template.compile(slideNavIndex.feedback));
    $(".rightSide").append(template.compile(slideNavIndex.h_top));

    //右侧悬浮栏的位置
    $(document).scroll(function(){
        var clientHeight=$(this).scrollTop()+156;
        if(clientHeight<=500){
            $(".rightSide").css({'top':'372px'});
        }else if(clientHeight>500){
            $(".rightSide").css({'top':clientHeight+'px'})
        }
    });
   //意见反馈
    $(".feedback").click(function(){
        RequestService("/online/user/isAlive","GET",null,function(data){
            if(!data.success){
                window.localStorage.myFeedback=1;
                window.localStorage.personcenter="idea";
                $('#login').modal('show');
            }else{
                window.localStorage.personcenter="idea";
                window.location.href="/web/html/personcenter.html";
            }
        })
    });
    $(".path a").each(function(){
    	if($(this).text() == "学习空间"){
    		$(this).attr("href","http://studyzone-test.boxuegu.com/"+$(this).attr("href"));
    	}else{
    		if($(this).text()=="免费微课"||$(this).text()=="精品微课"){
    			$(this).click(function(){
      			sessionStorage.removeItem('directionId');
    			sessionStorage.removeItem('subjectId');
    			sessionStorage.removeItem('tagId');
    			})
    		}
    		$(this).attr("href","http://onlineweb-2.boxuegu.com/"+$(this).attr("href"));
    	}
    });
    $(".oldBtn").click(function(){
    	window.localStorage.personcenter = "mydata";
    	window.location.href = "/web/html/personcenter.html";
    });
    $(".oldX").click(function(){
    	$("#oldModalBack").hide();
    	$("#old").hide();
    });
	
    if(window.location.pathname.indexOf("index") != "-1" || window.location.pathname=="/"){
        //$("body").children(":first").after(header);
    	$(".friendSee .friendSee-Body .closeSee").click(function(){
    		$(".friendSee").remove();
    	})
    }else{
        //$("body").children(":first").before(header);
        $('#searchInp').hide()
    }
//==========================================================================================
    //侧边栏微信，微博
    $(".sideWeixinBox").hover(function(){
        $(".sideWeixinErma").css("display","block");
        $(".sideWeixinBox").css("backgroundColor","#eef3f8");
    },function(){
        $(".sideWeixinErma").css("display","none");
        $(".sideWeixinBox").css("backgroundColor","#fff");
    });
    $(".sideWeiboBox").hover(function(){
        $(".sideWeiboErma").css("display","block");
        $(".sideWeiboBox").css("backgroundColor","#eef3f8");
    },function(){
        $(".sideWeiboErma").css("display","none");
        $(".sideWeiboBox").css("backgroundColor","#fff");
    });
    //网站公告
    RequestService("/online/message/findNewestNotice","GET",null,function(data){
        if(data.resultObject!=null && data.resultObject!=""){
            if(data.resultObject==null){
                $(".webSiteNotice").css("display","none");
            }else{
                $(".webSiteNotice .noticeInfo").html(data.resultObject.notice_content);
                if(data.resultObject.infoType==1){
                    $(".noticeClose").css("display","none");
                }else{
                    $(".webSiteNotice a").attr("target","_blank");
                }
                if(window.localStorage.dontsee ==data.resultObject.id){
                    $(".webSiteNotice").css("display","none");
                }else{
                    $(".webSiteNotice").css("display","block");
                    $(".webSiteNotice .noticeClose").click(function(){
                        window.localStorage.dontsee = data.resultObject.id;
                        $(".webSiteNotice").css("display","none");
                    });
                }
            }
        }
    });
    //学习中心
    $(".studentCenterBox").click(function(){
        RequestService("/online/user/isAlive","GET",null,function(data){
            if(!data.success){
                localStorage.myStudyCenter="1";
                $('#login').modal('show');
            }else{
                window.location.href="/web/html/myStudyCenter.html";
            }
        })
    });
    //购物车
    $(".shoppingBox .shoppingCar").click(function(){
        RequestService("/online/user/isAlive", "GET", null, function (data) {
            if(data.success==false){
                $("#login").modal("show");
            }else{
                window.location.href="/web/html/shoppingCart.html";
            }
        })
    });
    //消息提醒
    $(".messageBox .message").click(function(){
        RequestService("/online/user/isAlive", "GET", null, function (data) {
            if(data.success==false){
                $("#login").modal("show");
            }else{
                window.localStorage.personcenter = $(this).attr("data-id");
                window.location.href="/web/html/personcenter.html";
            }
        })
    });
//浏览器判断升级提示
	var browserUpgrade = '<div class="browserBody" style="display:none;">' +
	'<div class="bcgop"></div>' +
	'<div class="browserBody-text">' +
	'<p>您目前使用的浏览器可能无法实现最佳浏览效果，建议使用Chrome(谷歌)、Firefox(火狐)、Edge、IE9及IE9以上版本浏览器。</p>' +
	'<a href="/web/html/Download.html">立即升级</a>' +
	'<img src="../../../images/BWcolse.png"/>' +
	'</div>' +
	'</div>';
//浏览器判断

function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器
    var isChrome = userAgent.indexOf("Chrome") > -1; //判断是否谷歌浏览器
    var isQQ = userAgent.indexOf("QQBrowser") > -1 && userAgent.indexOf("Chrome") == -1; //QQ浏览器非极速模式
    if (isIE) {
        var IE5 = IE55 = IE6 = IE7 = IE8 = false;
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        IE55 = fIEVersion == 5.5;
        IE6 = fIEVersion == 6.0;
        IE7 = fIEVersion == 7.0;
        IE8 = fIEVersion == 8.0;
        IE9 = fIEVersion == 9.0;
        if (IE55) {
            return "IE55";
        }
        if (IE6) {
            return "IE6";
        }
        if (IE7) {
            return "IE7";
        }
        if (IE8) {
            return "IE8";
        }
        if (IE9) {
            return "IE9";
        }
    }else if(isQQ){
    	return "QQ";
    }
    
}//myBrowser() end


//==========================================================================================
$("body").append(template.compile(browserUpgrade));


//以下是调用上面的函数
if (myBrowser() == "IE55") {
    window.location.href = "/web/html/Download.html";
}else if (myBrowser() == "IE6") {
    window.location.href = "/web/html/Download.html";
}else if (myBrowser() == "IE7") {
    window.location.href = "/web/html/Download.html";
}else if (myBrowser() == "IE8") {
    window.location.href = "/web/html/Download.html";
}else if(myBrowser() == "IE9"){
    window.location.href = "/web/html/Download.html";
}else if(myBrowser() == "QQ"){
    window.location.href = "/web/html/Download.html";
}
/*$(".browserBody .browserBody-text img").on("click",function(){
	$(".browserBody").css("display","none");
});*/
    $(".cyinput1").on("input", function () {
        var val = $(this).val();
        if (val == "") {
            $(".cymyloginclose1").css("display", "none");
        } else {
            $(".cymyloginclose1").css("display", "block");
        }
        return false;
    });
    $(".cyinput2").on("input", function () {
        var logPass = $(this).val();
        if (logPass == "") {
            $(".cymyloginclose2").css("display", "none");
        } else {
            $(".cymyloginclose2").css("display", "block");
        }
        return false;
    });
    /*云课堂和博问答切换*/
//  $(".path a").on('click', function () {
//      $(this).addClass('select').siblings().removeClass('select');
//  })
    /*点击头像和用户名跳转到个人中心*/
//  $(".userPic,#dLabel").on('click', function () {
//      var id = "personcenter";
//      window.localStorage.personcenter = "myanswer";
//      location.href = "/web/html/personcenter.html";
//  });
    /*个人中心点击立即登录后，当前用户退出登录*/
    $(".pLogin").on("click", function () {
        $(".loginGroup .logout").css("display", "block");
        $(".loginGroup .login").css("display", "none");
    });

    var flag = false;
    function errorMessage(info) {
        flag = false;
        var errorReg = /[a-zA-z]+/g;
        if (errorReg.test(info)) {
            layer.alert("系统繁忙，请稍候再试!", {icon: 2});
            return flag = true;
        }
    }

    /*登录注册字体颜色和箭头方向的改变*/
    $("#myDropdown").hover(function () {
        $("#myDropdown").addClass("open");
//      $("#dLabel span:first-child").toggleClass("select");
//      $("#dLabel span:last-child").toggleClass("select1");
    }, function () {
        $("#myDropdown").removeClass("open");
//      $("#dLabel span:first-child").toggleClass("select");
//      $("#dLabel span:last-child").toggleClass("select1");
    });
    initLogin();
    /*按回车键进行登录*/
    $(".cymylogin .cyinput2,.cymylogin .cyinput1").bind("keyup", function (evt) {
        if (evt.keyCode == "13") {
            $(".cymylogin .cymyloginbutton").trigger("click");
        }
    });
    function initLogin() {
        //清空登录
        var cymyLogin = document.getElementsByClassName("cymlogin")[0];
        $("#login").on('shown.bs.modal', function () {
            $(".cymylogin-bottom input").css("border","");
            cymyLogin.style.display = "none";
        });
        RequestService("/online/user/isAlive", "GET", null, function (data) {///online/user/isAlive
            if (data.success === true) {
                var path;
                localStorage.username = data.loginName;
                //头像预览
                if (data.resultObject.smallHeadPhoto != "../../../images/defaultHeadImg.jpg") {
                    path = data.resultObject.smallHeadPhoto;
                } else {
                    path = bath + data.resultObject.smallHeadPhoto
                }
                $(".userPic").css({
                    background: "url(" + path + ") no-repeat",
                    backgroundSize: "100% 100%"
                });
                $('#login').css("display", "none");
                $(".loginGroup .logout").css("display", "none");
                $(".loginGroup .login").css("display", "block");
                $(".dropdown .name").text(data.resultObject.name).attr("title", data.resultObject.name);
                //首页未读消息总数
                RequestService("/online/message/findMessageCount","GET",null,function(data){
                    if(data.success==true && data.resultObject.count!=0){
                        $(".messageCount").css("display","block");
                        $('.dropdownmenu li').find('.dotRed').css('display','inherit');
                        if(data.resultObject.count<=99){
                            $(".messageCount em").text(data.resultObject.count);
                        }else{
                            $(".messageCount em").text(99);
                        }
                    }
                });
                //首页购物车数量
                RequestService("/shoppingCart/findCourseNum","GET",null,function(data){
                    if(data.success==true && data.resultObject!=0){
                        $(".shopping").css("display","block");
                        if(data.resultObject<=99){
                            $(".shopping em").text(data.resultObject);
                        }else{
                            $(".shopping em").text(99);
                        }
                    }
                });
            } else {
            	showLoginLable();
            }
        });
        
		function showLoginLable(){
            $('#login').css("display", "none");
            $(".loginGroup .logout").css("display", "block");
            $(".loginGroup .login").css("display", "none");        	
        }
		
        $(".form-login .cymyloginclose1").on("click", function () {
            $(".cymyloginclose1").css("display","none");
            $(".cyinput1").css({"border":"1px solid #2cb82c"});
            $(".cyinput1").val("");
        });
        
        $(".form-login .cymyloginclose2").on("click",function(){
            $(".cymyloginclose2").css("display","none");
            $(".cyinput2").css({"border":"1px solid #2cb82c"});
            $(".cyinput2").val("");
        });
        var isCliclLogin = false;
        $(".form-login .cyinput1").focus(function () {
            if (cymyLogin.innerText == "请输入手机号或邮箱" || cymyLogin.innerText == "手机号格式不正确!" || cymyLogin.innerText == "邮箱格式不正确!" || cymyLogin.innerText=="用户名或密码错误") {
                cymyLogin.style.display="none";
            }
            $(".cyinput1").css("border","1px solid #2cb82c");
        });

        $(".form-login .cyinput1").blur(function () {
            var cymyLogin = document.getElementsByClassName("cymlogin")[0];
            var regPhone = /^1[3-578]\d{9}$/;
            var regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w{2,})*\.\w{2,}([-.]\w{2,})*$/;
            if ($(".form-login .cyinput1").val().trim().length === 0) {
                $(".cyinput1").css("border", "1px solid #ff4012");
                cymyLogin.innerText = "请输入手机号或邮箱";
                cymyLogin.style.top = "154px";
                cymyLogin.style.display = "block";
            } else if ($(".form-login .cyinput1").val().trim().indexOf("@") == "-1" && !(regPhone.test($(".form-login .cyinput1").val().trim()))) {
                $(".cyinput1").css("border", "1px solid #ff4012");
                cymyLogin.innerText = "手机号格式不正确!";
                cymyLogin.style.top = "154px";
                cymyLogin.style.display = "block";
            } else if ($(".form-login .cyinput1").val().trim().indexOf("@") != "-1" && !(regEmail.test($(".form-login .cyinput1").val().trim()))) {
                $(".cyinput1").css("border", "1px solid #ff4012");
                cymyLogin.innerText = "邮箱格式不正确!";
                cymyLogin.style.top = "154px";
                cymyLogin.style.display = "block";
            }else{
                $(".cyinput1").css("border", "");
                cymyLogin.style.display = "none";
            }
        });
        $(".form-login .cyinput2").focus(function () {
            if (cymyLogin.innerText == "请输入6-18位密码") {
                cymyLogin.style.display="none";
            }
            $(".cyinput2").css("border", "1px solid #2cb82c");
        });
        $(".form-login .cyinput2").blur(function () {
            var cymyLogin = document.getElementsByClassName("cymlogin")[0];
            var cyinput2Length=$(".form-login .cyinput2").val().trim().length;
            if(cyinput2Length==0){
                $(".cyinput2").css("border", "1px solid #ff4012");
                $(".cymlogin").css("top", "221px");
                cymyLogin.innerText = "请输入6-18位密码";
                cymyLogin.style.display = "block";
            }else if (cyinput2Length<6&&cyinput2Length>18) {
                $(".cyinput2").css("border", "1px solid #ff4012");
                $(".cymlogin").css("top", "221px");
                cymyLogin.innerText = "请输入6-18位密码";
                cymyLogin.style.display = "block";
            }else{
                $(".cyinput2").css("border"," ");
            }
        });
        $(".form-login .cyinput2").focus().blur();
        $(".form-login .cymyloginbutton").click(function (evt) { //登录验证
            var regPhone = /^1[3-578]\d{9}$/;
            var regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w{2,})*\.\w{2,}([-.]\w{2,})*$/;
            var passwordReg = /^(?!\s+)[\w\W]{6,18}$/;//密码格式验证
            $(".cyinput1").css("border", "");
            $(".cyinput2").css("border", "");
            var data = {
                username: $(".form-login .cyinput1").val().trim(),
                password: $(".form-login .cyinput2").val()
            };
            if (data.username.length === 0) {
                $(".cyinput1").css("border", "1px solid #ff4012");
                cymyLogin.innerText = "请输入手机号或邮箱";
                cymyLogin.style.top = "154px";
                cymyLogin.style.display = "block";
                return;
            } else if (data.username.indexOf("@") == "-1" && !(regPhone.test(data.username))) {
                $(".cyinput1").css("border", "1px solid #ff4012");
                cymyLogin.innerText = "手机号格式不正确!";
                cymyLogin.style.top = "154px";
                cymyLogin.style.display = "block";
                return;
            } else if (data.username.indexOf("@") != "-1" && !(regEmail.test(data.username))) {
                $(".cyinput1").css("border", "1px solid #ff4012");
                cymyLogin.innerText = "邮箱格式不正确!";
                cymyLogin.style.top = "154px";
                cymyLogin.style.display = "block";
                return;
            } else if (data.password.length === 0) {
                $(".cyinput2").css("border", "1px solid #ff4012");
                $(".cyinput2").val("");
                $(".cymlogin").css("top", "221px");
                cymyLogin.innerText = "请输入6-18位密码";
                cymyLogin.style.display = "block";
                return;
            }
            isCliclLogin = true;
            login(data);
        });

        function login(data, autoLogin) {
            RequestService("/online/user/login", "POST", data, function (result) { //登陆/index.html   /online/user/login
                if (result.success === true || result.success == undefined) {
                
                	
                    window.localStorage.userName=data.username;
                    window.location.reload();
                    var myStudent=window.localStorage.myStudyCenter;
                    var myFeedback=window.localStorage.myFeedback;
                    if(myStudent==1){
                        window.location.href="/web/html/myStudyCenter.html";
                        window.localStorage.myStudyCenter=null;
                    }
                    if(myFeedback==1){
                        window.location.href="/web/html/personcenter.html";
                        window.localStorage.myFeedback=null;
                    }
                } else { //登陆错误提示
                    $(".loginGroup .logout").css("display", "block");
                    errorMessage(result.errorMessage);
                    if (!flag) {
                        if (result.errorMessage == "用户名密码错误！") {
                            cymyLogin.innerText = "用户名或密码不正确!";
                            $(".cymlogin").css("top", " 154px");
                            cymyLogin.style.display = "block";
                        } else {
                            cymyLogin.innerText = result.errorMessage;
                            $(".cymlogin").css("top", " 154px");
                            cymyLogin.style.display = "block";
                        }
                    }

                }
            });
        }
        $(".dropdownmenu li a").click(function (evt) {
            $(".top-item").removeClass("selected");
            var btn = $(evt.target);
            var id = "personcenter";
            window.localStorage.personcenter = $(evt.target).attr("data-id");
            if (window.location.pathname == "/web/html/personcenter.html") {
                if ($(this).attr("data-exit")) {
                    RequestService("/online/user/logout", "GET", {}, function () {
                        location.href = "/index.html";
                        $(".loginGroup .logout").css("display", "block");
                        $(".loginGroup .login").css("display", "none");
                    });
                } else {
                    $(".left-nav ." + window.localStorage.personcenter).click();
                }
            } else {
                if ($(this).attr("data-exit")) {
                    RequestService("/online/user/logout", "GET", {}, function () {
                        location.href = "/index.html";
                        $(".loginGroup .logout").css("display", "block");
                        $(".loginGroup .login").css("display", "none");
                    });
                } else {
                    location.href = "/web/html/personcenter.html";
                    RequestService("/online/user/isAlive", "GET", null, function (data) {///online/user/isAlive
                        if (data.success) {
                            if (data.resultObject.smallHeadPhoto != "../../../images/defaultHeadImg.jpg") {
                                path = data.resultObject.smallHeadPhoto;
                            } else {
                                path = bath + data.resultObject.smallHeadPhoto
                            }
                            //头像预览
                            $(".userPic").css({
                                background: "url(" + path + ") no-repeat",
                                backgroundSize: "100% 100%"
                            });
                            $('#login').modal('hide');
                            $("html").css({"overflow-x": "hidden", "overflow-y": "auto"});
                            $(".loginGroup .logout").hide();
                            $(".loginGroup .login").show();
                            $(".dropdown .name").text(data.resultObject.name).attr("title", data.resultObject.name);
                            localStorage.username = data.resultObject.loginName;
                            localStorage.userid = data.resultObject.id;
                            if ($(btn.parent().hasClass('selected'))) {

                            } else {
                                hideHtml();
                            }
                        } else {
                            location.href = "/index.html";
                            localStorage.username = null;
                            localStorage.password = null;
                            $(".login").css("display", "none");
                            $(".logout").css("display", "block");
//                          }
                        }
                    });
                }
            }

        });
        
    }
    //导航栏搜索框获取焦点
    $('#searchInp').find('input').focus(function(){
    	_this=$(this)
    	$('.searhInpt').addClass('focus')
    }).blur(function(){
    	if(_this.val()==''){
    		$('.searhInpt').removeClass('focus')
    	}
    })
    var schFun=function(){
    	if($('#searchTxt').val()==''){
    		return
    	}else{
    		var keyWords=$('#searchTxt').val();
    		sessionStorage.setItem("keyword",keyWords);
    		window.location.href=bath+"/web/searchPage/search.html";    		
    		
    	}
    };
    //点击搜索
    $('#searchInp').find('button').click(function(){    	
    	schFun();
    });
    //回车搜索
    $('#searchTxt').bind('keyup',function(evt){
    	if(evt.keyCode == "13"){
    		schFun();
    	}
    });
//侧栏菜单
	var sidler='<div class="courseNav">'+
                '<ul class="subjectLists">'+
				'        {{each items}}' +
                '{{if $index<10}}'+
                '        <li>'+
                '            <div class="courseList-nav"><span>{{$value.subjectName}}</span><i class="iconfont icon-left"></i>'+
                '            </div>'+
                '            {{#gradient($value.subjectName)}}'+
                '                {{if $value.careerCourse.courseName!="" && $value.careerCourse.courseName!=null}}'+
                '              <div class="course-classification">'+
                '                  <h2>就业班</h2>'+
                '                    <div class="course-classification-items">'+
                '                        <img src="{{$value.careerCourse.imgUrl}}" alt=""/>'+
                '                         <div class="carName">{{$value.careerCourse.courseName}}</div>'+
                '                        <div class="shadow">' +
                '                          <div class="aWrap clearfix">' +
                '                             {{if $value.careerCourse.onlineCourse==0 || $value.careerCourse.onlineCourse==2}}' +
        		'                            <a href="/web/html/payCourseDetailPage.html?id={{$value.careerCourse.courseid}}&courseType=1&free=0" class="onlineStudy" target="_blank">在线学习</a>' +
                '                           {{/if}}'+
                '                             {{if $value.careerCourse.onlineCourse==1 || $value.careerCourse.onlineCourse==2}}' +
                '                            <a href="{{$value.careerCourse.offlineCourseUrl}}" class="unlineStudy" target="_blank">线下学习</a>' +
                '                           {{/if}}'+
                '                        </div></div>'+
                '                    </div>'+
                '                </div>'+
                '                {{/if}}'+
                '          <!--      {{if $value.mircoCourseList.length!=0}}'+
                '                <div class="course-classification">'+
                '                    <h2>微专业</h2>'+
                '                    <div class="course-classification-items">'+
                '                        <img src="" alt=""/>'+
                '                    </div>'+
                '                </div>'+
                '                {{/if}}-->'+
                '                {{if $value.mircoCourseList.length!=0}}' +
                '                <div class="micro-class">'+
                '                    <div class="micro-class-nav clearfix">'+
                '                        <h2>精品微课</h2>'+
                '                        <a href="javascript:;" class="moreCourse">更多</a>'+
                '                    </div>'+
                '                    <div class="micro-class-category-box">'+
                '                        <ul class="mirco-class-category clearfix">'+
                '                            {{#mircoTags($value.subjectId,$value.subjectDirectionId,$value.tags)}}'+
                '                        </ul>'+
                '                        <div class="mirco-class-category-items clearfix">'+
                '                            {{each $value.mircoCourseList as $mirco i}}' +
                '                               {{if i<2}}'+
                '                            {{#indexHref($mirco.descriptionShow,$mirco.isFree,$mirco.courseid,$mirco.teachType)}}'+
                '                                <div class="scaleImg"><img src="{{$mirco.imgUrl}}" alt=""/><div class="wordShadow"></div></div>'+
                '                                <span class="mircoCourseName">{{mircoDot($mirco.courseName)}}</span>'+
                '                            </a>' +
                '                               {{/if}}'+
                '                            {{/each}}'+
                '                        </div>'+
                '                    </div>'+
                '                </div>'+
                '                {{/if}}'+
                '            </div>'+
                '        </li>'+
                '        {{/if}}{{/each}}'+
                '	</ul>'+
                '</div>';


    //首页的推荐课程{
    template.helper('indexHref',function(description_show,free,id,courseType){
        courseType=(courseType=="直播")?0:1;//0：直播 1：点播
        freeSt=(free==true)?1:0;//1:免费 0：收费
        //description_show 0:不显示课程介绍页 1：显示课程介绍页
        if(description_show==0){
            //不显示课程介绍页
            //freest:1为免费 0为付费   courseType1为点播，0为直播
            if(freeSt==1){
                return '<a href="/web/html/freeCourseDetailPage.html?id='+id+'&courseType='+courseType+'&free='+freeSt+'" target="_blank">';
            }else{
                if(freeSt==0 && courseType==0){
                    return '<a href="/web/html/CourseDetail.html?id='+id+'&courseType='+courseType+'&free='+freeSt+'" target="_blank">';
                }else{
                    return '<a href="/web/html/payCourseDetailPage.html?id='+id+'&courseType='+courseType+'&free='+freeSt+'" target="_blank">';
                }
            }
        }else{
            //显示课程介绍页
            return '<a href="/web/html/courseIntroductionPage.html?id='+id+'&courseType='+courseType+'&free='+freeSt+'" target="_blank">';
        }
    });
    //首页学科导航列表 渐变背景色
    template.helper('gradient',function(subjectName){
        subjectName=subjectName.toUpperCase();
        if(subjectName!="" && subjectName!=null){
            if(subjectName.indexOf("ANDROID")!=-1 || subjectName.indexOf("网络营销")!=-1 || subjectName.indexOf("IOS")!=-1){
                return '<div class="subjectLists-childrenBox greenGradients">'
            }else if(subjectName.indexOf("UI")!=-1){
                return '<div class="subjectLists-childrenBox yellowGradients">'
            }else if(subjectName.indexOf("JAVA")!=-1){
                return '<div class="subjectLists-childrenBox purpleGradients">'
            }else{
                return '<div class="subjectLists-childrenBox blueGradients">'
            }
        }
    });
    template.helper('mircoTags',function(subjectId,directionId,tags){
        var sortArray=[],array=[];
        function tagsObject(courseId,sortId,tagName){
            this.courseId=courseId;
            this.sortId=sortId;
            this.tagName=tagName;
        }
        if(tags!="" && tags!=null){
            tags=tags.split("|");
            for(var j=0;j<tags.length;j++){
                sortArray.push(tags[j].split(","));
            }
            for(var k=0;k<sortArray.length;k++){
                array.push(new tagsObject(sortArray[k][0],parseInt(sortArray[k][1]),sortArray[k][2]));
            }
            array.sort(function(a,c){
                return c.sortId- a.sortId;
            });
            var str='';
            for(var i=0;i<array.length;i++){
                str+='<li data-subjectId="'+subjectId+'" data-directionId="'+directionId+'" data-tagsId="'+array[i]["courseId"]+'">' +
                    '<a href="/web/microClassroom/microClassroom.html" target="_blank">' +
                    ''+array[i]["tagName"]+'</a></li>';
            }
            return str;
        }
    });
    template.helper('mircoDot',function(courseName){
        var str='';
       if((courseName!=null || courseName!="") && courseName.length>=17){
           str=courseName.substring(0,17)+'...';
           return str;
       }else{
           return courseName;
       }
    });
   
    function subjectNav(){
	    RequestService("/index/getIndexSubjectAndCourse","GET",{},function(data){
	    	$(header).find('.header_path').append(template.compile(sidler)({items:data}));

            $(".mirco-class-category li").click(function(){
                $(this).find("a").addClass("select").parent().siblings().find("a").removeClass("select");
                sessionStorage.setItem('subjectId',$(this).attr('data-subjectId'));
                sessionStorage.setItem('directionId',$(this).attr('data-directionId'));
                sessionStorage.setItem('tagId',$(this).attr('data-tagsId'));
            });

            $(".moreCourse").click(function(){
                sessionStorage.removeItem('subjectId');
                sessionStorage.removeItem('directionId');
                sessionStorage.removeItem('tagId');
                window.open('/web/microClassroom/microClassroom.html');
            });
            $(".subjectLists>li").mouseenter(function(){
                $(this).addClass("hoverSelect").find(".subjectLists-childrenBox").show();
                $(this).find(".mircoCourseName").each(function(){
                    var height=$(this).height()/2;
                    $(this).css({marginTop:-1*height+"px"})
                })
            });
            $(".subjectLists>li").mouseleave(function(){
                $(this).removeClass("hoverSelect").find(".subjectLists-childrenBox").hide();
            });

	    	var _thisHref=window.location.href;
		    if(_thisHref.indexOf('index.html')!=-1||window.location.pathname=="/"){
		    	$('.courseNav').show()
		    }else{
		    	  var delytime=null;
		    	  var navlevel2 = function(level1,dytime) {        
			      $(level1).mouseenter(function(){
			          var $this = $(this);
			        delytime=setTimeout(function(){
			            $this.parents('.header_path').find('.courseNav').slideDown();
			        },dytime);	        
			      });
			      $(level1).parents('.header_path').mouseleave(function(){
			         clearTimeout(delytime);
			         $(this).find('.courseNav').slideUp();
			      });	      
			    };
			    $('.courseNav .subjectLists').css('background-color','rgba(0, 0, 0, 0.8)')
			    navlevel2($('.allClass'),300)
		    }
	    })
	}
    subjectNav();
});
