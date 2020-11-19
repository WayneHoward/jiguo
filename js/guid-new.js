$(function(){
    $('.searchRegister>span').on('click',function(){
        window.location.href = './../regist.html';
    });
    $('.more').click(function(){
        $.ajax({
            url:'http://192.168.1.64:3000/guid/new',
            success:function(res){
                $('#more').hide();
                $('#loading').show();
                setTimeout(function(){
                    inHtml(res);
                    $('#loading').hide();
                    $('#finish').show();
                },2000)
            }
        })
    });
    function inHtml(date){
        var dot_tem=doT.template($('#list_template').text());
        $('.content ul').append(dot_tem(date));
    }
    $('.title-box .nav ul li:eq(0)').on('click',function(){
        window.location.href = './../guid/guid-new.html'
    });
    $('.title-box .nav ul li:eq(1)').on('click',function(){
        window.location.href = './../guid/guid-hot.html';
    });
    //跳转到详情页
    $('.content-box .content ul li').on('click',function(){
        window.location.href = './../guid/guid-index.html';
    });
    //返回顶部
    document.addEventListener("scroll",function(){
        $('.returnUp').show();
    });
    $('.returnUp').on('click',function(){
        document.documentElement.scrollTop = 0;
    });
})