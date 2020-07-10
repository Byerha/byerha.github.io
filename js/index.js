//js引入头部导航和底部部分
$(document).ready(function() {
    $('.header').load("heard.html", function() {
        $(function() {
            $('.menu .menu_handler').click(function() {
                $(this).toggleClass("active");
                $('nav').stop().slideToggle("fast");
            });
        });
    });
    $('footer').load("footer.html");
});
$(function() {
    //全屏插件调用
    $('#main').fullpage({
        //sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        navigation: true, //是否有导航圆点
        //全屏插件函数，加载滑动到要显示页面时需要操作样式动作的函数 第一个值为上个滑动页面的一些对象信息
        //第二值为加载当前屏的一些对象信息，实现效果主要利用索引号
        afterLoad: function(origin, destination) {
            //判断现在加载在第几屏
            //加载到第一屏
            if (destination.index == 0) {
                //使页面刚刚加载时出现放大效果
                $('.section1').css({
                    transition: "transform 1s",
                    transform: 'scale(1)',
                });
            }
            //加载到第二屏
            if (destination.index == 1) {
                $('.section2').css({
                    transition: "transform 1s",
                    transform: 'scale(1)',
                });
                //使文字区域出现动画效果 'easeOutQuart'为动画效果js的一些参数效果
                $('.section2').find('.p1').animate({
                    left: '10' + '%'
                }, 1000, 'easeOutQuart');
                //使文字区域出现动画效果 'easeOutQuart'为动画效果js的一些参数效果
                //delay为等待多少毫秒再加载动画
                $('.section2').find('.ptitle').delay(300).animate({
                    top: 0,
                    opacity: 1,
                }, 1000, 'easeOutQuint');
                $('.section2').find('.text').delay(400).animate({
                    top: 0,
                    opacity: 1,
                }, 1000, 'easeOutQuint');
                $('.section2').find('.entext').delay(500).animate({
                    top: 0,
                    opacity: 1,
                }, 1000, 'easeOutQuint');
            }
            //加载到第三屏
            if (destination.index == 2) {
                $('.section3').css({
                    transition: "transform 1s",
                    transform: 'scale(1)',
                });
            }
            //加载到第四屏
            if (destination.index == 3) {
                $('.section4').css({
                    transition: "transform 1s",
                    transform: 'scale(1)',
                });
                $('.section4').find('.col-l').animate({
                    marginLeft: '0' + '%'
                }, 1000, 'easeOutQuart');
                $('.section4').find('.col-r').animate({
                    marginLeft: '0' + '%'
                }, 1000, 'easeOutQuart');
                $('.section4').find('h4').delay(500).animate({
                    top: 0,
                    opacity: 1,
                }, 1500, 'easeOutQuart');
                $('.section4').find('.infotext').delay(800).animate({
                    top: 0,
                    opacity: 1,
                }, 1800, 'easeOutQuart');
            }
            //加载到第五屏
            if (destination.index == 4) {
                $('.section5').css({
                    transition: "transform 1s",
                    transform: 'scale(1)',
                });
                $('.section5').find('.itemright').animate({
                    right: '15' + '%'
                }, 1000, 'easeOutQuart');
                //当加载内容区进入显示区后回调函数来显示文字慢慢显示效果
                $('.section5').find('.itemleft').delay(200).animate({
                    left: '15' + '%'
                }, 1000, 'easeOutQuart', function() {
                    //动画完毕回调函数 由于此页主体内容分条显示不能使用jQuery隐式绑定
                    //需先转换为原生js在转回jQuery对象绑定利用延迟delay控制逐条显示效果
                    var len = $('.section5').find('li').length - 1;
                    for (let i = 0; i < len; i++) {
                        $($('.section5').find('li')[i]).delay(i * 100).animate({
                            top: 0,
                            opacity: 1,
                        }, 1000, 'easeOutQuart');
                    }
                });
            }
            //加载到第六屏
            if (destination.index == 5) {
                $('.section6').css({
                    transition: "transform 1s",
                    transform: 'scale(1)',
                });
            }
            //加载到第七屏
            if (destination.index == 6) {
                //footer部分淡入效果stop防止上一次动画未做完成继续下次动画操作
                $('footer').stop().fadeIn(1000);
                $('.section7').css({
                    transition: "transform 1s",
                    transform: 'scale(1)',
                });
            }
        },
        //全屏滚动插件里面的函数，当离开此页面时需要做的操作 值一为离开时的一些对象参数主要利用索引
        //值二为下一屏的某些对象参数主要利用离开时把效果还原回去在滑动到此页面时调用上面进入此页面
        //的效果操作
        onLeave: function(origin, destination) {
            //离开第一屏
            if (origin.index == 0) {
                $('.section1').css({
                    transition: 'transform .1s .5s',
                    transform: 'scale(0.85)',
                });
            }
            //离开第二屏
            if (origin.index == 1) {
                $('.section2').css({
                    transition: 'transform .1s .5s',
                    transform: 'scale(0.85)',
                });
                $('.section2').find('.p1').animate({
                    left: '-47' + '%'
                }, 300, 'linear');
                $('.section2').find('.ptitle').animate({
                    top: 20 + 'px',
                    opacity: 0,
                }, 300, 'easeInQuad');
                $('.section2').find('.text').animate({
                    top: 20 + 'px',
                    opacity: 0,
                }, 300, 'easeInQuad');
                $('.section2').find('.entext').animate({
                    top: 20 + 'px',
                    opacity: 0,
                }, 300, 'easeInQuad');
            }
            //离开第三屏
            if (origin.index == 2) {
                $('.section3').css({
                    transition: 'transform .1s .5s',
                    transform: 'scale(0.85)',
                });
            }
            //离开第四屏
            if (origin.index == 3) {
                $('.section4').css({
                    transition: 'transform .1s .5s',
                    transform: 'scale(0.85)',
                });
                $('.section4').find('h4').animate({
                    top: '20' + 'px',
                    opacity: 0,
                }, 300, 'easeInQuad');
                $('.section4').find('.infotext').animate({
                    top: '20' + 'px',
                    opacity: 0,
                }, 300, 'easeInQuad');
                $('.section4').find('.col-l').delay(500).animate({
                    marginLeft: '200' + '%'
                }, 300, 'linear');
                $('.section4').find('.col-r').delay(500).animate({
                    marginLeft: '-400' + '%'
                }, 300, 'linear');
            }
            //离开第五屏
            if (origin.index == 4) {
                $('.section5').css({
                    transition: 'transform .1s .5s',
                    transform: 'scale(0.85)',
                });
                $('.section5').find('.itemright').delay(500).animate({
                    right: '-100' + '%'
                }, 1000, 'easeOutQuart');
                $('.section5').find('.itemleft').delay(500).animate({
                    left: '-100' + '%'
                }, 1000, 'easeOutQuart');
                $('.section5').find('li').delay(500).animate({
                    top: '10' + 'px',
                    opacity: 0,
                }, 1000, 'easeOutQuart');
            }
            //离开第六屏
            if (origin.index == 5) {
                $('.section6').css({
                    transition: 'transform .1s .5s',
                    transform: 'scale(0.85)',
                });
            }
            //离开第七屏
            if (origin.index == 6) {
                $('.section7').css({
                    transition: 'transform .1s .5s',
                    transform: 'scale(0.85)',
                });
                //footer淡出效果
                $('footer').stop().fadeOut(1000);
            }
        }
    });
    //section1的轮播图代码
    var timer = null; //定时器变量
    //一个li的宽度
    var moveWidth = $(".section1 ul li")[0].offsetWidth + 5;
    //轮播思想利用ul宽度改变margin-left为负值做到隐藏图片目的然后在动画效果时
    //把隐藏的那个li通过jQuery复制添加到尾部然后在移动回原来的margin实现变换效果
    //左轮播代码
    var flag = true; //节流阀
    function moveLeft() {
        //节流阀防止上一次动画为做完毕执行下一次动画
        if (flag) {
            flag = false;
            $(".section1 ul").animate({
                marginLeft: '-' + moveWidth + 'px',
            }, 150, 'easeInOutQuart', function() {
                $(".section1 ul").children().first().appendTo($(".section1 ul"));
                $(".section1 ul").css('marginLeft', '0px');
                flag = true;
            });
        }
    };
    //左按钮点击事件
    $('.section1 .left_line').click(function() {
        if (flag) {
            $(".section1 ul").children().last().prependTo($(".section1 ul"));
            $(".section1 ul").css('marginLeft', '-' + moveWidth + 'px');
            $(".section1 ul").animate({
                marginLeft: '0px',
            }, 150, 'easeInOutQuart', function() {
                flag = true;
            });
        }
    });
    //右按钮点击
    $('.section1 .right_line').click(moveLeft);
    //移入按钮停止定时器
    $('.section1 .an').mouseenter(function() {
        clearInterval(timer);
    });
    //移出按钮开启定时器
    $('.section1 .an').mouseleave(function() {
        //先清除定时器为了防止多个定时器同时开始
        clearInterval(timer);
        timer = window.setInterval(moveLeft, 5000);
    });
    //默认定时开启 定时器 第一个参数值调用函数，第二值执行间隔
    timer = window.setInterval(moveLeft, 5000);
    //禁止所有图片拖拽和文字选择
    $("img").on("contextmenu", function() { return false; });
    $("img").on("dragstart", function() { return false; });
    document.oncontextmenu = new Function("event.returnValue=false");
    document.onselectstart = new Function("event.returnValue=false");
});