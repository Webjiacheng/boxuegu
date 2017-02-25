/**
 * Created by hujiacheng on 2017/2/25.
 */
requirejs.config({
    baseUrl:'/',
    paths:{
        //引入第三方库
        jquery:'lib/jquery/jquery',
        bootstrap:'lib/bootstrap/js/bootstrap',
        //引入自己的js地址
        userList:'js/user/list',
        userProfile:'js/user/profile',
        common:'js/common/common',
        NProgress:'lib/nprogress/nprogress'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        }
    }
});
//所有页面都需要这两个文件，先加载
require(['jquery','bootstrap']);
(function (window) {
    require(['common']);
    var pathname=window.location.pathname;
    switch(pathname){
        case '/html/user/list.html':
            require(['userList']);
            break;
        default:
            console.log('失败');
    }
}(window))