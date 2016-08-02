/**
 * Created by Елена on 02.08.2016.
 */
$( document ).ready(function() {


    $('.cube').hover(function () {
            $(this).addClass('hoverCube'); //hover

            $('[href="#front"]').click(function () {
                $('.front').css({
                    "transform":"rotateX(0deg) rotateY(0deg)"
                })
            });
            //hover end

    },
            function () { //unhover
                $(this).removeClass('hoverCube');
                return false;
    });


});