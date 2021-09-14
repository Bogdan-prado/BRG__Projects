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
        touchSensitivity: 5,
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
                document.querySelector("footer").style.backgroundImage = "linear-gradient(rgba(255,255,255,0), rgba(0,0,255,1));";
            }
        },
        afterRender: function () {},
    });
});

