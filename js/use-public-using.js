$(function(){
    $('.searchRegister>span').on('click',function(){
        window.location.href = './../regist.html';
    });
    $('.more').on('click',function(){
        $.ajax({
            url:'http://192.168.1.64:3000/useing/public',
            success:function(res){
                $('#more').hide();
                $('#loading').show();
                setTimeout(function(){
                    $('#loading').hide();
                    $('#finish').show();
                    inHtml(res);
                },2000);
            }
        });
    });
    function inHtml(date){
        var dot_tem = doT.template($('#list_template').text());
        $('.content ul').append(dot_tem(date))
        console.log(date);
    }
    $('.title-box .nav1 ul li:eq(0)').on('click',function(){
        window.location.href = './../use/use-public-all.html'
    });
    $('.title-box .nav1 ul li:eq(1)').on('click',function(){
        window.location.href = './../use/use-engineer.html';
    });

    $('.nav2 ul li:eq(0)').on('click',function(){
        window.location.href = './../use/use-public-all.html'
    });
    $('.nav2 ul li:eq(1)').on('click',function(){
        window.location.href = './../use/use-public-apply.html';
    });
    $('.nav2 ul li:eq(2)').on('click',function(){
        window.location.href = './../use/use-public-using.html';
    });
    $('.nav2 ul li:eq(3)').on('click',function(){
        window.location.href = './../use/use-public-end.html';
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


