//店面展示js
$(function() {
    //书亦美图
    function store_list1() {
        //书亦美图部分图片当移入鼠标会出现放大标准和蒙层
        //利用绑定li的hover() 方法当鼠标指针悬停在被选元素上时要运行的两个函数
        //来控制蒙层显示与隐藏以及放大标准的动画效果只是当鼠标移除后有放大效果
        $(".container .symt li").hover(function() {
            $(this).find("span").removeClass("actives");
            $(this).find(".mc").animate({
                opacity: 1,
            }, 300);
            $(this).find("span").animate({
                opacity: 1,
            }, 300);
        }, function() {
            $(this).find("span").addClass("actives");
            $(this).find(".mc").animate({
                opacity: 0,
            }, 300);
            $(this).find("span").animate({
                opacity: 0,
            }, 300);
        });
    }
    store_list1();
    //书亦人气轮播效果函数
    function store_list2() {
        //获取移动宽度      li由于宽度一样随便选一个  
        var moveWidth = $(".container .rq ul li").first().outerWidth(true);
        //-241px 移动距离243 
        //轮播下一张
        function next() {
            $(".container .rq ul").animate({
                marginLeft: -moveWidth + 'px',
            }, 150, function() {
                //看实际效果有对称 所以移除第一个之后复制第一个li然后加入到最后面然后移动回去时就和第一个对称了
                $(".container .rq ul").children().first().remove();
                $(".container .rq ul").children().eq(0).clone(true).appendTo($(".container .rq ul"));
                $(".container .rq ul").css('marginLeft', '0px');
            })
        }
        //上一张切换
        function pver() {
            var lenth = $(".container .rq ul").children().length;
            $(".container .rq ul").children("li").eq(lenth - 2).clone(true).prependTo($(".container .rq ul"));
            $(".container .rq ul").children("li").last().remove();
            $(".container .rq ul").css('marginLeft', -moveWidth + 'px');
            $(".container .rq ul").animate({
                marginLeft: '0px',
            }, 150);
        }
        //绑定左右按钮点击事件调用切换函数
        $(".container .cont .btn_l").click(pver);
        $(".container .cont .btn_r").click(next);
        //绑定移入移出事件取消和开启定时器
        $(".container .cont .btn").hover(function() {
            window.clearInterval(timer);
        }, function() {
            window.clearInterval(timer);
            timer = window.setInterval(next, 5000);
        });
        //默认开启定时器给定时器名字方便停止定时器
        var timer = window.setInterval(next, 5000);
    }
    store_list2();
});