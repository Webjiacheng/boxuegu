/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery'],function ($) {
    console.log('js/home/login');
    $.ajax({
        url:'/v6/login',
        type:'post',
        data:{
            'tc_name':123456,
            'tc_pass':123456
        },
        success:function () {
            console.log('成功');
        },
        error:function () {
            console.log('失败');
        }
    })
})