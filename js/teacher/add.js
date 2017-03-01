/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery'],function ($) {
    console.log('添加讲师');
    $('#teacher-add-form').on('submit',function () {
        $.ajax({
            url:'/v6/teacher/add',
            type:'post',
            data:$('#teacher-add-form').serialize(),
            success:function (data) {
                console.log(data);
                location.href='/html/teacher/list.html';
            }
        })
        return false;
        // $.post('/v6/teacher/add',$('#teacher-add-form').serialize(),function (data) {
        //     if(data.code==200){
        //         console.log('添加成功');
        //         //location.href='/html/teacher/list';
        //     }else {
        //         console.log('添加失败'+data);
        //     }
        // });

        // console.log($('.input-sm').eq(0).val());
        // var tc_name=$('.input-sm').eq(0).val();
        // console.log($('.input-sm').eq(1).val());
        // var tc_pass=$('.input-sm').eq(1).val();
        // console.log($('.input-sm').eq(2).val());
        // var tc_join_date=$('.input-sm').eq(2).val();
        // console.log($('.input-sm').eq(3).val());
        // var tc_type=$('.input-sm').eq(3).val();
        // console.log($('input[type="radio"]:checked').val());
        // var tc_gender=$('input[type="radio"]:checked').val();
        // $.ajax({
        //     url:'/v6/teacher/add',
        //     type:'post',
        //     data:{
        //         tc_name:tc_name,
        //         tc_pass:tc_pass,
        //         tc_join_date:tc_join_date,
        //         tc_type:tc_type,
        //         tc_gender:tc_gender
        //     },
        //     success:function () {
        //         console.log('添加成功');
        //     },
        //     error:function () {
        //         console.log('添加失败');
        //     }
        // })

        // setInterval(function () {
        //     $.ajax({
        //         url:'/v6/teacher/add',
        //         type:'post',
        //         data:{
        //             tc_name:'a广州a广州',
        //             tc_pass:'123456',
        //             tc_join_date:'王占一',
        //             tc_type:1,
        //             tc_gender:0
        //         },
        //         success:function () {
        //             console.log('添加成功');
        //         },
        //         error:function () {
        //             console.log('添加失败');
        //         }
        //     })
        // },5000);
    })
})