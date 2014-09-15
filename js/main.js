// Begin tooltip for socials init */

function tooltipInit() {
    jQuery("[data-toggle='tooltip']").tooltip();
};


jQuery(document).ready(function () {
    tooltipInit();
});

//Begin Color Box
jQuery(document).ready(function () {
    if (jQuery.colorbox) {

        jQuery('a.portfolio').colorbox({
            rel: 'gal',
            width: "100%",
            initialWidth: "100%",
            initialHeight: "0",
            fixed: false,
            scrolling: false,
            speed: 1200,
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
            close: "<i class='fa fa-times'></i>",
            current: "",
            onComplete: function () {
                var $box = $(this);
                $('.flexslider').flexslider({
                    animation: "slide",
                    prevText: "",
                    nextText: "",
                    start: function () {
                        $box.colorbox.resize();
                    }
                });
            }
        });

        jQuery('a.team').colorbox({
            rel: 'team',
            width: "100%",
            initialWidth: "100%",
            initialHeight: "0",
            fixed: false,
            scrolling: false,
            speed: 1000,
            previous: "<i class='fa fa-chevron-left'></i>",
            next: "<i class='fa fa-chevron-right'></i>",
            close: "<i class='fa fa-times'></i>",
            current: ""
        });
    }
});


//Begin Sticky Nav
$(window).load(function () {
    $("#navigation").sticky({ topSpacing: 0 });
});
//End Sticky Nav


// Change navigation still on scroll
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if ($("nav").hasClass("navbar-has-transition")) {
        //>=, not <=
        if (scroll >= 100) {
            $("nav").removeClass("navbar-transparent");
            $("nav").addClass("navbar-inverse");
        }
        if (scroll < 100) {
            $("nav").addClass("navbar-transparent");
            $("nav").removeClass("navbar-inverse");
        }
    }
    if ($("nav").hasClass("navbar-middle")) {
        //>=, not <=
        if (scroll >= 100) {
            $("nav").addClass("small");
        }
        if (scroll < 100) {
            $("nav").removeClass("small");
        }
    }
    if ($("nav").hasClass("navbar-info-top")) {
        //>=, not <=
        if (scroll >= 100) {
            $("nav").addClass("navbar-info-top-hidden");
            $("nav .top-info").addClass("top-info-hidden");
        }
        if (scroll < 100) {
            $("nav").removeClass("navbar-info-top-hidden");
            $("nav .top-info").removeClass("top-info-hidden");
        }
    }
}); //missing );

//Page Scroller


$(document).ready(function () {
    $('.btn-scroll[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash, $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    /* ======================================= */
    /* === CLICKABLE MAIN PARENT ITEM MENU === */
    jQuery(".navbar li.dropdown > .dropdown-toggle").removeAttr("data-toggle data-target");


    if(jQuery().pageScroller){
        //if(jQuery('body').hasClass('onepage')){
            jQuery('body').pageScroller({
                navigation: '.onepage',
                sectionClass: 'chapter',
                animationType: 'easeOutExpo',
                animationSpeed: 750,
                keyboardControl: true,
                scrollOffset: '-80'
            });
        //}
    }




	if (jQuery('#faq1').length > 0) {
		jQuery('#faq1').affix({
			offset: { top: jQuery('#faq1').offset().top - 115 }
		});
	}


	jQuery('#faq1 a').bind('click', function (e) {
		e.preventDefault();

		jQuery('html, body').animate({
			scrollTop: jQuery(this.hash).offset().top }, 300);
	});




});

function scrollToTop(i) {
    if (i == 'show') {
        if (jQuery(this).scrollTop() != 0) {
            jQuery('#toTop').fadeIn();
        } else {
            jQuery('#toTop').fadeOut();
        }
    }
}

jQuery(window).scroll(function () {
    scrollToTop('show');
});

//Begin Parallax

jQuery(window).load(function () {
    "use strict";

    /* parallax effect */
    if (!device.mobile()) {
        jQuery("#MainHeader").parallax("50%", 0.2);
        jQuery("#Parallax1").parallax("50%", 0.2);
        jQuery("#Parallax2").parallax("50%", 0.2);
        jQuery("#Parallax3").parallax("50%", 0.2);
        jQuery("#Parallax4").parallax("50%", 0.2);
    }
});

jQuery(window).resize(function () {
    if (!device.mobile()) {
        setTimeout(function () {
            jQuery("#MainHeader").parallax("20%", 0.4, true);
        }, 500);

        setTimeout(function () {
            jQuery("#Parallax1").parallax("60%", 0.4, true);
        }, 500);

        setTimeout(function () {
            jQuery("#Parallax2").parallax("20%", 0.4, true);
        }, 500);

        setTimeout(function () {
            jQuery("#Parallax3").parallax("60%", 0.4, true);
        }, 500);

        setTimeout(function () {
            jQuery("#Parallax4").parallax("60%", 0.4, true);
        }, 500);
    }

}); //End Parallax

//Begin PieChart
jQuery('.pie-chart').each(function () {
    var $t = jQuery(this);

    var scaleColor = $t.attr('data-scalecolor');
    var trackColor = "transparent";

    $t.easyPieChart({
        animate: $t.attr('data-animate'),
        barColor: $t.attr('data-barcolor'),
        trackColor: trackColor,
        scaleColor: scaleColor == 'false' ? false : scaleColor,
        lineCap: $t.attr('data-linecap'),
        lineWidth: $t.attr('data-linewidth'),
        size: $t.attr('data-size')
    });
});

//End PieChart


//Begin Progress Bar


//End Progress Bar
//Begin Gallery
$(window).load(function () {

    /*function myfunc() {
     jQuery("#MainHeader").parallax("50%", 0.2);
     jQuery("#Parallax1").parallax("50%", 0.2);
     jQuery("#Parallax2").parallax("50%", 0.2);
     jQuery("#Parallax3").parallax("50%", 0.2);
     jQuery("#Parallax4").parallax("50%", 0.2);
     }*/

    var $container = $('.projects')
    // initialize Isotope
    $container.isotope({
        // options...
        resizable: false, // disable normal resizing
        // set columnWidth to a percentage of container width
        masonry: { }
    });

    // update columnWidth on window resize
    $(window).smartresize(function () {
        $container.isotope({
            // update columnWidth to a percentage of container width
            masonry: { }
        });
    });
    $('.portfolioFilter a').click(function () {
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    //myfunc();
});

//End Gallery

// Begin Gmap3 Maps
// helper - validate data attr
function validateDataAttr($attr) {
    "use strict";
    return $attr !== undefined;

};

// init gmap - Asynchronous Loading
function initmap() {
    "use strict";
    jQuery(".googleMap").each(function () {
        var atcenter = "";
        var $this = jQuery(this);
        var location = $this.data("location");
        var text = $this.data("text");

        var offset = 0;

        if (validateDataAttr($this.data("offset"))) {
            offset = $this.data("offset");
        }

        if (validateDataAttr(location)) {

            $this.gmap3({
                marker: {
                    //latLng: [40.616439, -74.035540],
                    address: location,
                    options: {
                        visible: false
                    },
                    callback: function (marker) {
                        atcenter = marker.getPosition();
                    }
                },
                map: {
                    options: {
                        //maxZoom:11,
                        zoom: 17,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        // ('ROADMAP', 'SATELLITE', 'HYBRID','TERRAIN');
                        scrollwheel: false,
                        draggable: false,
                        disableDoubleClickZoom: false,
                        mapTypeControlOptions: {
                            //mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID],
                            //style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                            //position: google.maps.ControlPosition.RIGHT_CENTER
                            mapTypeIds: []
                        }
                    }
                    /*events: {
                     idle: function () {
                     if (!$this.data('idle')) {
                     $this.gmap3('get').panBy(0, offset);
                     $this.data('idle', true);
                     }
                     }
                     }*/
                },
                overlay: {
                    //latLng: [40.616439, -74.035540],
                    address: location,
                    options: {
                        content: '<div class="googleMap-description"><div class="googleMap-triangle"><div class="googleMap-triangle-inside"></div></div>' + text + '</div>',
                        offset: {
                            y: -60,
                            x: 20
                        }
                    }
                }
                //},"autofit"
            });

            // center on resize
            google.maps.event.addDomListener(window, "resize", function () {
                //var userLocation = new google.maps.LatLng(53.8018,-1.553);
                $this.gmap3('get').setCenter(atcenter);
                $this.gmap3('get').panBy(0, 0);
            });

            // set height
            $this.css("min-height", $this.data("height") + "px");
        }

    });
};

function loadScript() {
    "use strict";
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initmap';
    document.body.appendChild(script);
};

window.onload = loadScript;

// End Gmap3 Maps

//Begin Flex Slider
$(window).load(function () {

    jQuery('.fullscreen-slider-slogan').flexslider({
        animation: "fade",
        smoothHeight: true,
        touch: true,
        directionNav: false,
        controlNav: false
    });

    jQuery('.fullscreen-flexslider.description-middle').flexslider({
        animation: "fade",
        smoothHeight: true,
        touch: true,
        directionNav: true,
        manualControls: '.flex-control-nav li a'
    });

    jQuery('.fullscreen-flexslider').flexslider({
        animation: "slide",
        smoothHeight: true,
        touch: true,
        directionNav: true,
        manualControls: '.flex-control-nav li a'
    });

    jQuery('.flexslider-with-video').flexslider({
        animation: "slide",
        smoothHeight: true,
        touch: true,
        directionNav: false,
        manualControls: '.flex-control-nav li a',
        start: function(){
            jQuery('.flexslider-with-video').addClass("visible");
        }
    });

    jQuery('.flexslider.bigslider').flexslider({
        animation: "slide",
        touch: true,
        prevText: "",
        nextText: ""
    });

    jQuery('.flexCarousel .flexslider').flexslider({
        animation: "slide",
        touch: true,
        prevText: "",
        nextText: "",
        slideshow: false,
        itemWidth: 150,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
        minItems: 1,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
        maxItems: 5,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
        move: 1,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
        controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav: true
    });

    jQuery('.blog .flexslider').flexslider({
        animation: "slide",
        touch: true,
        prevText: "",
        nextText: ""
    });

});

(function ($) {
    //load slider with kenburns effect
    if ($('.fullscreen-flexslider-ken-burns').length) {

        /* Initialize FlexSlider */
        $(window).on('load', function () {
            $.fsargs = {
                animation: "fade",
                controlNav: true,
                smoothHeight: true,
                animationLoop: true,
                manualControls: '.flex-control-nav li a',
                slideshow: true,
                touch: true,
                start: function (slider) {
                    $.fs = { // get shortcode params
                        slider: slider,
                        scale: slider.container.data('scale'),
                        translate: slider.container.data('translate'),
                        opacity_duration: slider.container.data('opacity-duration'),
                        transform_duration: slider.container.data('transform-duration'),
                        animation: slider.container.data('animation')
                    }
                    slider.fsdimensions();
                    slider.height($.fs.maxheight).find('.slides').height($.fs.maxheight).find('.focus-shift').height($.fs.maxheight);
                    if ($.fs.animation == 'kb') {
                        slider.fskenburns();
                    }
                    slider.removeClass('fsloading').addClass('fsready');
                }, before: function (slider) {
                    slider.find('img.kb').removeClass('kb').attr('style', '');
                }, after: function (slider) {
                    $.fs.slider = slider;
                    if ($.fs.animation == 'kb') {
                        slider.fskenburns();
                    }
                }
            }
            $('.fullscreen-flexslider-ken-burns').flexslider($.fsargs);
        });

        /* Image dimension classes & container max-height */
        $.fn.fsdimensions = function (options) {
            settings = $.extend({}, $.fs, options);
            this.each(function () {
                $.fs.heights = new Array();
                $(this).find('img').each(function (i) {
                    var img = new Array($(this).width(), $(this).height()), w = img[0], h = img[1];
                    if (h > w) {
                        $(this).addClass('pt'); // .pt = portrait
                    } else if (h < w) {
                        $(this).addClass('ls'); // .ls = landscape
                        $.fs.heights.push(h); // push these to future max-height
                    } else {
                        $(this).addClass('sq');        // .sq = square
                    }
                });
                // Set smallest img.ls height as max-height for container
                $.fs.maxheight = Math.min.apply(Math, $.fs.heights);

                if (settings.animation == 'kb') {
                    var $focusshift = settings.slider.find('.focus-shift');
                    var $focuswidth = $focusshift.width() - parseInt(settings.translate.replace('px', ''));
                    $focusshift.css({
                        'width': $focuswidth + 'px', '-webkit-transform': 'translate(' + settings.translate + ')', '-moz-transform': 'translate(' + settings.translate + ')', '-ms-transform': 'translate(' + settings.translate + ')', '-o-transform': 'translate(' + settings.translate + ')', 'transform': 'translate(' + settings.translate + ')'
                    });
                }
            });
            return false;
        }

        /* Ken Burns effect */
        $.fn.fskenburns = function (options) {
            settings = $.extend({}, $.fs, options);
            this.each(function () {
                var $currimg = $(settings.slider.slides[settings.slider.currentSlide]).find('img');
                $currimg.addClass('kb').css({
                    '-webkit-transition-duration': settings.transform_duration,
                    '-moz-transition-duration': settings.transform_duration,
                    '-ms-transition-duration': settings.transform_duration,
                    '-o-transition-duration': settings.transform_duration,
                    'transition-duration': settings.transform_duration,
                    '-webkit-transform': 'scale(' + settings.scale + ')',
                    '-moz-transform': 'scale(' + settings.scale + ')',
                    '-ms-transform': 'scale(' + settings.scale + ')',
                    '-o-transform': 'scale(' + settings.scale + ')',
                    'transform': 'scale(' + settings.scale + ')'
                });
                return false;
            });
        }
    }
}(jQuery))

// jQuery(document).ready(function () {
//     if(jQuery("#d3map")){
//         var $map = jQuery("#d3map");
//         var width = parseInt($map.attr('data-width'));
//         var height = parseInt($map.attr('data-height'));

//         var quantize = d3.scale.quantize().domain([0, .15]).range(d3.range(9).map(function (i) {
//             return "q" + i + "-9";
//         }));

//         var path = d3.geo.path().projection(null);

//         var svg = d3.select("#d3map").append("svg").attr("width", width).attr("height", height).attr('viewBox', ' 0 0 ' + width + ' ' + height).attr('preserveAspectRatio', 'xMidYMid');

//         d3.json("us.json", function (error, us) {
//             svg.append("g").attr("class", "counties").selectAll("path").data(topojson.feature(us, us.objects.counties).features).enter().append("path").attr("class",function (d) {
//                 return quantize(d.properties.rate);
//             }).attr("d", path);

//             svg.append("path").datum(topojson.mesh(us, us.objects.states, function (a, b) {
//                 return a !== b;
//             })).attr("class", "states").attr("d", path);

//             jQuery(window).trigger('resize');
//         });
//     }
// });


jQuery(window).on("resize", function () {
    if(jQuery("#d3map")){
        var $map = jQuery('#d3map');
        var aspect = parseInt($map.attr('data-width')) / parseInt($map.attr('data-height'));
        var $svg = $map.find('svg');

        var targetWidth = $svg.parent().width();

        $svg.attr("width", targetWidth);
        $svg.attr("height", targetWidth / aspect);
    }

});

/* Begin Video */

jQuery(document).ready(function () {
    // Target your .container, .wrapper, .post, etc.
    $(".video").fitVids();

});
/* End Video */

/* Begin Revolution Slider */

jQuery(document).ready(function () {

    if (jQuery().revolution && jQuery('.rev-slider').length) {

        jQuery('#rev1').revolution({
            delay: 8000,
            startwidth: 940,
            startheight: 550,
            hideThumbs: 10,
            fullWidth: "on",
            forceFullWidth: "on",
            navigationStyle: "round"
        });
        jQuery('#rev2').revolution({
            delay: 5000,
            startwidth: 940,
            startheight: 650,
            hideThumbs: 10,
            fullWidth: "on",
            forceFullWidth: "on",
            navigationStyle: "round"
        });
    }

});	//ready

/* End Revolution Slider */

/* Begin Animations */

jQuery(document).ready(function () {
    if (jQuery().appear) {
        if (device.mobile()) {
            // disable animation on mobile
            jQuery("body").removeClass("initAnimate");
        } else {
            jQuery('.initAnimate .animated').appear(function () {
                jQuery(this).each(function () {
                    jQuery(this).addClass('activate');
                    jQuery(this).addClass($(this).data('fx'));
                });
            }, {accY: -150});
        }
    }
});

/* End Animation */

// Count To

jQuery(document).ready(function () {
    $('.counter').data('countToOptions', {
        formatter: function (value, options) {
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
        }
    }).appear(function () {
        $(this).each(function (options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        });
    });
});


/* show search form */
jQuery(document).ready(function () {

    jQuery('#searchIcon1').click(function () {

        if((jQuery('div.searchForm').hasClass('search-open'))){
            jQuery('div.searchForm').removeClass('search-open');
        } else{
            jQuery('div.searchForm').addClass('search-open');
        }
    });
});