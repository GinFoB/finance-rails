/**
 * Created by akramkhalifa on 14/03/2016.
 */
var init_friend_lookup;

init_friend_lookup = function () {
    $('#friend-lookup-form').on('ajax:before', function (event,data,status) {
        show_spinner();
    });
    $('#friend-lookup-form').on('ajax:after', function (event,data,status) {
        hide_spinner();
    });

    $('#friend-lookup-form').on('ajax:success', function (event,data,status,xhr) {
        $('#friend-lookup').replaceWith(data);
        init_friend_lookup();
    });

    $('#friend-lookup-form').on('ajax:error', function (event,xhr,status,errors) {
        hide_spinner();
        $('#friend-lookup-results').replaceWith(' ');
        $('#friend-lookup-errors').replaceWith('friend was not found');
    });
};

$(document).ready(function () {
    console.log('start');
    init_friend_lookup();
});