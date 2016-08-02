/**
 * Created by Елена on 02.08.2016.
 */
$( document ).ready(function() {

    $('.cube').hover(function () {
            $(this).addClass('hoverCube'); //hover
            $('.hoverCube').click(function () { //click
                $('.hoverCube>div').css({
                    width: "50px",
                    height: "50px",
                    overflow: "hidden"
                });
                $('.hoverCube .front').css({
                    transform: "translateZ(0)"
                });
                $('.hoverCube .back').css({
                    transform: "translateZ(-50px) rotateY(180deg)"
                });
                $('.hoverCube .right').css({
                    transform: "rotateY(-270deg) translateX(50px)"
                });
                $('.hoverCube .left').css({
                    transform: "rotateY(270deg) translateX(-50px)"
                });
                $('.hoverCube .top').css({
                    transform: "rotateX(-270deg) translateY(-50px)"
                });
                $('.hoverCube .bottom').css({
                    transform: "rotateX(270deg) translateY(50px)"
                });
                $(this).addClass('unClick');
            }); //click end


            $('.unClick').click(function () {
                $('.hoverCube>div').css({
                    width: "100%",
                    height: "100%",
                    overflow: "auto"
                });
                $('.hoverCube .front').css({
                    transform: "translateZ(100px)"
                });
                $('.hoverCube .back').css({
                    transform: "translateZ(-100px) rotateY(180deg)"
                });
                $('.hoverCube .right').css({
                    transform: "rotateY(-270deg) translateX(100px)"
                });
                $('.hoverCube .left').css({
                    transform: "rotateY(270deg) translateX(-100px)"
                });
                $('.hoverCube .top').css({
                    transform: "rotateX(-270deg) translateY(-100px)"
                });
                $('.hoverCube .bottom').css({
                    transform: "rotateX(270deg) translateY(100px)"
                });
                $(this).removeClass('unClick');
            }); //hover end


    },
            function () { //unhover
                $(this).removeClass('hoverCube');
                return false;
    });

});