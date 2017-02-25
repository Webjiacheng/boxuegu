/**
 * Created by hujiacheng on 2017/2/25.
 */
requirejs.config({
    baseUrl:'/',
    paths:{
        jquery:'/lib/require/require',
        bootstrap:'/lib/bootstrap/js/bootstrap'
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
    var pathname=window.location.pathname;
    switch(pathname){
        case '/html/user.list.html':
            require([''])
    }
}(window))