/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery'],function ($) {
    console.log('添加讲师');
    $('#tc_add').on('click',function () {
        console.log($('.input-sm').eq(0).val());
        var tc_name=$('.input-sm').eq(0).val();
        console.log($('.input-sm').eq(1).val());
        var tc_pass=$('.input-sm').eq(1).val();
        console.log($('.input-sm').eq(2).val());
        var tc_join_date=$('.input-sm').eq(2).val();
        console.log($('.input-sm').eq(3).val());
        var tc_type=$('.input-sm').eq(3).val();
        console.log($('input[type="radio"]:checked').val());
        var tc_gender=$('input[type="radio"]:checked').val();
        $.ajax({
            url:'/v6/teacher/add',
            type:'post',
            data:{
                tc_name:tc_name,
                tc_pass:tc_pass,
                tc_join_date:tc_join_date,
                tc_type:tc_type,
                tc_gender:tc_gender
            },
            success:function () {
                console.log('添加成功');
            },
            error:function () {
                console.log('添加失败');
            }
        })
    })
})