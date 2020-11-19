$(function(){
    $('.searchRegister>span').on('click',function(){
        window.location.href = './../regist.html';
    });
    $('.title-box .nav1 ul li:eq(0)').on('click',function(){
        window.location.href = './../use/use-public-all.html'
    });
    $('.title-box .nav1 ul li:eq(1)').on('click',function(){
        window.location.href = './../use/use-engineer.html';
    });
    //跳转到详情页
    $('.content-box .content ul li').on('click',function(){
        window.location.href = './../use/use-index.html';
    });

    //返回顶部
    document.addEventListener("scroll",function(){
        $('.returnUp').show();
    });
    $('.returnUp').on('click',function(){
        document.documentElement.scrollTop = 0;
    });
});