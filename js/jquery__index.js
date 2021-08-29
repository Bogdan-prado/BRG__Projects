$(document).ready(function () {
    $("main").scroll(function () {
        if ($("main").scrollTop() > 6.99) {
            $(".main__center").slideUp(500, function () {
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