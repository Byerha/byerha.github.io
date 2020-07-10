//在文档加载完毕后执行函数
$(document).ready(function() {

    //js加载头部和footer
    $('.header').load("heard.html");
    //当尾部加载完毕执行回调回调函数奖获取到整个页面元素
    $('footer').load("footer.html", function() {
        $(function() {
            //替换heard logo
            $("header .hd img").prop("src", "images/logo2.png");
            //导航字体颜色变化
            $("header .menu").css({
                color: "#fff",
            });
            $(".menu_handler .burger").css({
                background: "#fff",
            });
            var flag = true;
            //二级导航点击导航显示与隐藏
            $('.menu .menu_handler').click(function() {
                if (flag) {
                    $("header .hd img").prop("src", "images/logo.png");
                    $("header .menu").css({
                        color: "#000",
                    });
                    $(".menu_handler .burger").css({
                        background: "#363636",
                    });
                    $(this).addClass("active");
                    $('nav').stop().slideDown("fast");
                    flag = false;
                } else {
                    $("header .hd img").prop("src", "images/logo2.png");
                    $("header .menu").css({
                        color: "#fff",
                    });
                    $(".menu_handler .burger").css({
                        background: "#fff",
                    });
                    $(this).removeClass("active");
                    $('nav').stop().slideUp("fast");
                    flag = true;
                }
            });
            //footer显示
            $("footer").css({
                display: 'block',
                position: 'static',
                height: '160px',
                width: 'auto',
            });
            $("footer .link").remove();
            //当页面卷入banner高度时二级导航li和header部分一起固定定位
            var scrHeight = $(".bg_hd").outerHeight() - 90; //90位计算效果调试得到的值
            $(window).scroll(function() {
                if ($(document).scrollTop() >= scrHeight) {
                    $(".header").addClass("head");
                    $("header .menu").css({
                        top: "3%",
                    });
                    $("header .hd h1").css({
                        top: "3%",
                    });
                    $(".nav").addClass("fixed");
                } else {
                    $(".header").removeClass("head");
                    $(".nav").removeClass("fixed");
                    $("header .menu").css({
                        top: "6%",
                    });
                    $("header .hd h1").css({
                        top: "6%",
                    });
                }
            });
        })
    });
});