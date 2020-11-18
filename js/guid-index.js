$(function(){
    $('.searchRegister>span').on('click',function(){
        window.location.href = './../regist.html';
    });
    $('.like').click(function(){
        $('.likes').hide();
        $('.liked').show()
    })
    $('.share').click(function(){
        $('.shares').hide();
        $('.shared').show();
        $('.bshare-custom').show();
    })
    //返回顶部
    document.addEventListener("scroll",function(){
        $('.returnUp').show();
    });
    $('.returnUp').on('click',function(){
        document.documentElement.scrollTop = 0;
    });
});