 $(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).onmousewheel() > 0) {
             $(".main__center").slideUp(1000, function () {
            $(".test").slideDown(1000);
        })
        }
    })
}) 



/*$(document).ready(function(){
    $(".ellipse__label").click(function(){
        $(".main__center").slideUp(1000, function () {
            $(".test").slideDown(1000);
        })
    });
    });*/