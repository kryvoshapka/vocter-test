$(window).ready(function() {

    setTimeout(function () {
        $(".wrapper").animate({opacity: 1}, 500);
    }, 200);

    $('.car-parts').click(function() {
        $('.parts').fadeToggle(100);
    });

    $(function () {
        $("ul li").mouseover(function(){
            $("ul li").removeClass("active");
            $(this).addClass('active');
        });
    });

    $(".calc-1").hover(
        function(){
            $(".ar-1").show();

        },
        function(){
            $(".arrow-down").hide();
        }
    );

    $(".calc-2").hover(
        function(){
            $(".ar-2").show();

        },
        function(){
            $(".arrow-down").hide();
        }
    );

    $(".calc-3").hover(
        function(){
            $(".ar-3").show();

        },
        function(){
            $(".arrow-down").hide();
        }
    );

});

let carList = [{

    class: "mini",
    type: ["минимальный.jpg", "стандарт.jpg", "стандарт+.jpg", "стандарт++.jpg", "стандарт+++.jpg", "целиком.jpg", "чистый.jpg"],
    parts: ["оптика.jpg", "пороги-внутренние.jpg", "пороги-наружные.jpg", "двери.jpg", "задние-крылья.jpg", "капот.jpg", "передний-бампер.jpg", "задний-бампер.jpg"]

}, {

    class: "middle",
    type: ["минимальный.jpg", "стандарт.jpg", "стандарт+.jpg", "стандарт++.jpg", "стандарт+++.jpg", "целиком.jpg", "чистый.jpg"],
    parts: ["оптика.jpg", "пороги-внутренние.jpg", "пороги-наружные.jpg", "двери.jpg", "задние-крылья.jpg", "капот.jpg", "передний-бампер.jpg", "задний-бампер.jpg"]

}, {

    class: "premium",
    type: ["минимальный.jpg", "стандарт.jpg", "стандарт+.jpg", "стандарт++.jpg", "стандарт+++.jpg", "целиком.jpg", "чистый.jpg"],
    parts: ["оптика.jpg", "пороги-внутренние.jpg", "пороги-наружные.jpg", "двери.jpg", "задние-крылья.jpg", "капот.jpg", "передний-бампер.jpg", "задний-бампер.jpg"]

}];


/* ничего не понимаю
let i = $("li").index();


$("ul li").hover(function(){
    i = this.index();
    $("img").attr("src", carList[i]);
});
*/
