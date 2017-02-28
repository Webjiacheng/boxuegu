/**
 * Created by hujiacheng on 2017/2/26.
 */
/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery','ArtTemplate'],function ($,ArtTemplate) {
    //更新教师列表
    $.get('/v6/teacher',function (data) {
        if(data.code==200){
            //渲染模板
            var html = ArtTemplate('teacher-list-tpl', {list:data.result});
            $('#tc_list').html(html);
        }
    });
    //点击查看教师详情
    $(document).on('click','.tc_view',function () {
        $.get('/v6/teacher/view',{
            tc_id:$(this).parent().attr('data-id')
        },function (data) {
            if(data.code==200){
                //渲染查看模板
                var html=ArtTemplate('tc_view',data.result
                );
                $('#tc_view_tpl').html(html);
            }
        });
    });
    //点击注销教师
    $(document).on('click','.tc_handle',function () {
        var attr_a=$(this);
        //1-线获取tc_id
        var tc_status=null;
        $.get('/v6/teacher/view',{
            tc_id:$(this).parent().attr('data-id')
        },function (data) {
            if(data.code==200){
                //渲染查看模板
                //console.log(data);
                tc_status=data.result.tc_status;
                console.log('tc_status'+tc_status);
            }
            //2-注销或开启
            $.post('/v6/teacher/handle',{
                tc_id:attr_a.parent().attr('data-id'),
                tc_status:tc_status
            },function (data) {
                if(data.code==200){
                    console.log(data);
                    //console.log(data.result.tc_status);
                    if(tc_status==1){
                        attr_a.html('开 启');
                    }else {
                        attr_a.html('注 销');
                    }
                }
            });
        });

    })
})