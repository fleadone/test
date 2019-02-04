$(document).ready(function () {
    $('.menu').on('click', function () {
        $('.menu').removeClass('active_menu');
        $(this).addClass('active_menu');
        $('.content_items').removeClass('active_content_items');
        $('.content_items').eq($('.menu').index(this)).addClass('active_content_items');
    })
    $('.status').on('click', function (){
        $('.icon_status').toggleClass('icon_status_open');
        $('.status_choise').slideToggle();
    });
    $('.choise').on('click', function () {
        $('.status').removeClass('online');
        $('.status').removeClass('offline');
        $('.status').removeClass('dont_dist');
        if ($(this).index() == '0') {
            $('.status').addClass('online');
        } if ($(this).index() == '1') {
            $('.status').addClass('dont_dist');
        } if ($(this).index() == '2') {
            $('.status').addClass('offline');
        }
    })
    $('.users_online').on('click', function () {
        $('.icon_online_down').toggleClass('icon_online_show');
        $('.show_users_online').slideToggle();
    });
    $('.item_menu').on('click', function () {
        $('.item_menu').removeClass('active_item_menu');
        $(this).addClass('active_item_menu');
        $('.content_item').removeClass('active_content');
        $('.content_item').eq($('.item_menu').index(this)).addClass('active_content');
    });
    $('.project_more').on('click', function () {
        $(this).find('.icon_project_more').toggleClass('icon_status_open');
        $(this).parent().parent().parent().find('.inside_project').slideToggle();
    });
});
