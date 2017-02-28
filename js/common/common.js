/**
 * Created by hujiacheng on 2017/2/25.
 */
define(['jquery','jqueryCookie','NProgress'],function ($,undefined,NProgress) {
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });

    var pathname=window.location.pathname;
    console.log(pathname);
    $('a').removeClass('active').filter('[href="'+pathname+'"]').addClass('active').parents().show();

    $('#return').on('click',function () {
        $.ajax({
            url:'/v6/logout',
            type:'post',
            success:function (data) {
                if(data.code==='200'){
                    console.log('进来');
                    location.href='/html/home/login.html';
                }
            },
            error:function (data) {
                //console.log(data);
            }
        })
        return false;
    });
    //{"tc_name":"123456","tc_avatar":""}
    var userInfo;
    try{
        userInfo=JSON.parse($.cookie('userInfo'));
    }catch(e){
        userInfo={};
    }
    var tc_name=userInfo.tc_name;
    var tc_avatar=userInfo.tc_avatar;
    console.log(tc_name+'----'+tc_avatar);
    $('.aside .profile h4').html(tc_name?tc_name:'小木瓜');
    $('.aside .profile img').attr('src',tc_avatar?tc_avatar:'/img/default.jpg');

    NProgress.done();
})