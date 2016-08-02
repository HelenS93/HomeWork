/**
 * Created by Елена on 02.08.2016.
 */
$( document ).ready(function() {
            $('.front').click(function () {
                var that = $('.cube');
                that.css({
                    animation: "none",
                    transform: "rotateX(0deg) rotateY(0deg)"
                });
                setTimeout( function(){
                    $(that).css({
                        transform:"scale(3)",
                        transition: "all 0.35s ease-in"
                    });
                },1500);
            });
    $('.back').click(function () {
        var that = $('.cube');
        that.css({
            animation: "none",
            transform: "rotateX(180deg) rotateY(0deg)"
        });
        setTimeout( function(){
            $(that).css({
                transform:"scale(3)",
                transition: "all 0.35s ease-in"
            });
        },1500);
    });
    $('.top').click(function () {
        var that = $('.cube');
        that.css({
            animation: "none",
            transform: "rotateX(270deg) rotateY(0deg)"
        });
        setTimeout( function(){
            $(that).css({
                transform: "scale(3) rotateX(2700deg) rotateY(0deg)",
                transition: "all 0.35s ease-in"
            });
        },1500);
    });
    $('.bottom').click(function () {
        var that = $('.cube');
        that.css({
            animation: "none",
            transform: "rotateX(90deg) rotateY(0deg)"
        });
        setTimeout( function(){
            $(that).css({
                transform: "scale(3) rotateX(90deg) rotateY(0deg)",
                transition: "all 0.35s ease-in"
            });
        },1500);
    });
    $('.left').click(function () {
        var that = $('.cube');
        that.css({
            animation: "none",
            transform: "rotateX(0deg) rotateY(90deg)"
        });
        setTimeout( function(){
            $(that).css({
                transform: "scale(3) rotateX(0deg) rotateY(90deg)",
                transition: "all 0.35s ease-in"
            });
        },1500);
    });
    $('.right').click(function () {
        var that = $('.cube');
        that.css({
            animation: "none",
            transform: "rotateX(-90deg) rotateY(0deg)"
        });
        setTimeout( function(){
            $(that).css({
                transform: "scale(3) rotateX(-90deg) rotateY(0deg)",
                transition: "all 0.35s ease-in"
            });
        },1500);
    });
});


/* $('.cube').animate({
 opacity:0.75
 }, 5000, function () {
 // Animation complete.
 });*/
