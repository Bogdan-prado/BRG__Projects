 $(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 1) {
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