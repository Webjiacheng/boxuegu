/**
 * Created by hujiacheng on 2017/2/25.
 */
define(['jquery'],function ($) {
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });
})