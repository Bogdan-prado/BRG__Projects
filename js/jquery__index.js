$(document).ready(function() {
	$('#pagepiling').pagepiling({
	menu: ".myMenu",
        direction: 'horizontal',
        verticalCentered: false,
        sectionsColor: [],
        anchors: ["firstPage","secondPage","thirdPage"],
        scrollingSpeed: 100,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
    normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 10,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){
			if(index == 1){
                document.querySelector(".section__ButtonNav").style.display = "none";
 			} else{
                document.querySelector(".section__ButtonNav").style.display = "block";
            }
            if(index == 2){
                $(".section2").scroll(function(){
                    if($(".section2").scrollTop() > 5){
                    $(".section__planetButton").fadeOut();
                    $(".back__link").css({"position": "sticky", "top": "calc(67px + (100 - 67) * ((100vw - 360px) / (768 - 360)))",
                "left": "calc(170px + (369 - 170) * ((100vw - 360px) / (768 - 360)))"});
                $(".pp-scrollable").css({"top": "-100px"});
                    }else{
                        $(".section__planetButton").fadeIn();
                    }
                });
            }
        },
        afterRender: function () {},
    });
});

