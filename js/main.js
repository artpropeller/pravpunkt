$(function () {
    $('.umbrella .sectors div').hover(function(){
        var sec = $(this);
        var cl = $(this).attr('class');
        sec.parent().addClass(cl);
    },function(){
        var sec = $(this);
        var cl = $(this).attr('class');
        sec.parent().removeClass(cl);
    });

    $('.fancy').fancybox();

});

