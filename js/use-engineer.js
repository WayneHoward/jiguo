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
    //返回顶部
    $('.returnUp').on('click',function(){
        document.documentElement.scrollTop = 0;
    });
});