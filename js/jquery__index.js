 $(document).ready(function () {
    $(document).scroll(function () {
        if ($("main").scrollTop > 0) {
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