//招商加盟js
$(function() {
    //合作须知部分js
    function investment_list1() {
        //当加完成时显示页面连个brand不同时显示
        //控制opacity来显示隐藏通过paddingTop来使效果有位移感
        $(".art_brand1").delay(300).animate({
            paddingTop: '84px',
            opacity: 1,
        }, 800);
        $(".art_brand2").delay(1000).animate({
            paddingTop: '84px',
            opacity: 1,
        }, 800);
    };
    investment_list1();
    //合作优势js
    function investment_list3() {
        //使图片有位移和显示感做动画
        $(".col_r").delay(300).animate({
            paddingTop: '0',
            opacity: 1,
        }, 800);
    };
    investment_list3();
    //合作优势js
    function investment_list4() {
        //使图片有位移和显示感做动画
        $(".hzzc ").delay(300).animate({
            paddingTop: '0',
            opacity: 1,
        }, 800);
    };
    investment_list4();
});