/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery','jqueryCookie'],function ($,undefined) {
    $('#formData').on('submit',function () {
        $.ajax({
            url:'/v6/login',
            type:'post',
            // data:{
            //     tc_name:$('#username').val(),
            //     tc_pass:$('#pwd').val()
            // },
            data:$(this).serialize(),
            success:function (data) {
                if(data.code===200){
                    // console.log(data);
                    $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
                    location.href='/index.html';
                }
            },
            error:function (data) {
                console.log(data);
            }
        })
        return false;
    })
})