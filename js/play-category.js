$(function(){
    $('.searchRegister>span').on('click',function(){
        window.location.href = './../regist.html';
    });
    $('.title-box .nav ul li:eq(0)').on('click',function(){
        window.location.href = './../play/play-new.html'
    });
    $('.title-box .nav ul li:eq(1)').on('click',function(){
        window.location.href = './../play/play-hot.html';
    });
    $('.title-box .nav ul li:eq(2)').on('click',function(){
        window.location.href = './../play/play-category.html';
    });
    //返回顶部
    $('.returnUp').on('click',function(){
        document.documentElement.scrollTop = 0;
    });
});
