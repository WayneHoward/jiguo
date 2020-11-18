$(function(){
    $('.searchRegister>span').on('click',function(){
        window.location.href = './../regist.html';
    });
    function mark(){
        var f_date = new Date("11 26,2020").getTime();
        var n_date = new Date().getTime();
        var day = Math.floor((f_date - n_date)/1000/60/60/24);
        var hours = Math.floor((f_date - n_date)/1000/60/60%24);
        var minutes = Math.floor((f_date - n_date)/1000/60%60);
        var seconds = Math.floor((f_date - n_date)/1000%60);
        $('.show .time').html('申请时间剩余：'+day+'天'+hours+'小时'+minutes+'分钟'+seconds+'秒');
    }
    mark();
    setInterval(mark,1000);

    setTimeout(function(){
        $('.showBox .show .text').fadeIn('slow');
    },600);

    var blingbling = '';
    setTimeout(function(){
        blingbling = setInterval(function(){
            $('.showBox .show .text .applyOnTime .cover').fadeToggle('slow')
        },20);
    },1200);
    $('.showBox .show .text .applyOnTime .cover').on('mouseenter',function(){
        $('.showBox .show .text .applyOnTime .cover').hide();
    });

    $('.hot .more').on('click',function(){
        window.location.href = './../use/use-public-all.html';
    });

    //返回顶部
    $('.returnUp').on('click',function(){
        document.documentElement.scrollTop = 0;
    });
});