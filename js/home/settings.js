/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery','ArtTemplate'],function ($,ArtTemplate) {
    $.get('/v6/teacher/profile',function (data) {
        console.log(data.result);
        var html=ArtTemplate('userInfo',data.result);
        $('.settings').html(html);
        //console.log(html);
    })
})