$(function(){"use strict";function m(){b=$(window).width(),c=$(window).height(),f=!!$(".menu-button").is(":visible")}function o(){m(),s(),z(),A(),$('.swiper-container.initialized[data-slides-per-view="responsive"]').each(function(){var b=a["swiper-"+$(this).attr("id")],c=$(this),d=q(c);b.params.slidesPerView=d,b.reInit();var e=c.find(".pagination span"),f=e.hide().slice(0,e.length+1-d);f.length<=1||d>=c.find(".swiper-slide").length?c.addClass("pagination-hidden"):c.removeClass("pagination-hidden"),f.show()})}function p(){var b=0;$(".swiper-container").each(function(){var c=$(this),d="swiper-unique-id-"+b;c.addClass("swiper-"+d+" initialized").attr("id",d),c.find(".pagination").addClass("pagination-"+d);var e=parseInt(c.attr("data-autoplay"),10),f=parseInt(c.attr("data-center"),10),g=!c.closest(".circle-description-slide-box").length,h=c.attr("data-slides-per-view");h="responsive"==h?q(c):parseInt(h,10);var i=parseInt(c.attr("data-loop"),10),j=parseInt(c.attr("data-speed"),10),k=parseInt(c.attr("data-slides-per-group"),10);if(k||(k=1),a["swiper-"+d]=new Swiper(".swiper-"+d,{speed:j,pagination:".pagination-"+d,loop:i,paginationClickable:!0,autoplay:e,slidesPerView:h,slidesPerGroup:k,keyboardControl:!0,calculateHeight:!0,simulateTouch:g,centeredSlides:f,roundLengths:!0,onInit:function(a){var b=$(window).width();b<750?a.params.slidesPerGroup=1:a.params.slidesPerGroup=k},onResize:function(a){var b=$(window).width();b<750?a.params.slidesPerGroup=1:(a.params.slidesPerGroup=k,a.resizeFix(!0))},onSlideChangeEnd:function(a){var d=(1===i?a.activeLoopIndex:a.activeIndex,c.find(".swiper-slide-active").attr("data-val"));c.find('.swiper-slide[data-val="'+d+'"]').addClass("active")},onSlideChangeStart:function(b){if(c.find(".swiper-slide.active").removeClass("active"),c.hasClass("thumbnails-preview")){var d=1===i?b.activeLoopIndex:b.activeIndex;a["swiper-"+c.next().attr("id")].swipeTo(d),c.next().find(".current").removeClass("current"),c.next().find('.swiper-slide[data-val="'+d+'"]').addClass("current")}},onSlideClick:function(b){c.hasClass("thumbnails")&&a["swiper-"+c.prev().attr("id")].swipeTo(b.clickedSlideIndex)}}),a["swiper-"+d].reInit(),"responsive"==c.attr("data-slides-per-view")){var l=c.find(".pagination span"),m=l.hide().slice(0,l.length+1-h);m.length<=1||h>=c.find(".swiper-slide").length?c.addClass("pagination-hidden"):c.removeClass("pagination-hidden"),m.show()}b++})}function q(a){return b>=k?parseInt(a.attr("data-add-slides"),10):b>=j?parseInt(a.attr("data-lg-slides"),10):b>=i?parseInt(a.attr("data-md-slides"),10):b>=h?parseInt(a.attr("data-sm-slides"),10):b>=g?parseInt(a.attr("data-xs-slides"),10):parseInt(a.attr("data-mob-slides"),10)}function r(){$(".timePiker").each(function(){$(".timePiker").DateTimePicker({dateTimeFormat:"dd-MM-yyyy hh:mm:ss AA",maxDateTime:"20-07-2016 12:00:00 AM",minDateTime:"20-07-2012 12:00:00 AM",animationDuration:100})})}function s(){$(".video-click").find("iframe").height($(".img-href").height())}function u(){if($(".accordion-chooser").length){var a=$(".accordion-chooser").find("a.active"),b=a.data("fifter"),c=a.parents(".accordion-filter").find(".accordion");return a.siblings(".active").removeClass("active"),a.addClass("active"),"*"==b?c.find(".acc-panel").show():(c.find(".acc-panel:not("+b+")").hide(),c.find(b).show()),!1}}function v(a){return 0===a?"00":a<10?"0"+a:""+a}function w(a){var b=new Date,c=new Date(a),d=c-b;d<0&&(d=0);var e=parseInt(d/864e5,10),f=d%864e5,g=parseInt(f/36e5,10),h=f%36e5,i=parseInt(h/6e4,10),j=h%6e4,k=parseInt(j/1e3,10);$(".days").text(v(e)),$(".hours").text(v(g)),$(".minutes").text(v(i)),$(".seconds").text(v(k))}function z(){if($(".fullpage").length){if(b<992)return!1;$("body").css("overflow-y","hidden"),$(".fullpage").css("height",c+"px"),$("html, body").scrollTop(0)}}function A(){if(!$(".fullpage").length)return!1;if(b>=992){var a=$(".fullpage-wrapper"),d=$(".fullpage .section.active"),e=d.index(),f=$(".footer").outerHeight();d.hasClass("footer")?a.css("top","-"+(c*(e-1)+f)+"px"):a.css("top","-"+c*e+"px"),$("html, body").scrollTop(0)}else $("body").css("overflow-y","auto")}var b,c,e,f,a=[],g=451,h=768,i=992,j=1200,k=1600,l=navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i);m(),u(),$(".center-image").each(function(){var a=$(this).attr("src");$(this).parent().addClass("background-block").css({"background-image":"url("+a+")"}),$(this).hide()});var n=$("header");n.hasClass("header-sticked")&&(n.hasClass("st-58")?$("body").addClass("st-58"):n.hasClass("st-100")?$("body").addClass("st-100"):n.hasClass("st-148")?$("body").addClass("st-148"):$("body").addClass("stick"),alert(1)),$(window).load(function(){p()}),l?window.addEventListener("orientationchange",function(){o()},!1):$(window).resize(function(){o()}),$(".swiper-arrow-left").on("click",function(){a["swiper-"+$(this).closest(".arrows").find(".swiper-container").attr("id")].swipePrev()}),$(".swiper-arrow-right").on("click",function(){a["swiper-"+$(this).closest(".arrows").find(".swiper-container").attr("id")].swipeNext()}),$(window).scroll(function(){$(window).scrollTop()>posY+50?$("header").addClass("scrol"):$("header").removeClass("scrol")}),$(window).width()<768&&($(".drop-tabs").on("click",function(){return $(".arrow-down").hasClass("act")?($(this).find(".arrow-down").removeClass("act"),$(this).find(".nav-tabs").slideUp(400)):($(".drop span").slideUp(300),$(this).find(".arrow-down").addClass("act"),$(this).find(".nav-tabs").slideDown(400)),!1}),$(".click-tabs").on("click",function(){var a=$(this).index();$(this).parent().parent().parent().find("b").text($(this).text()),$(".drop-tabs").find(".nav-tabs").slideUp(400),$(".tab-pane").removeClass("active"),$(".tab-pane").eq(a).addClass("active")})),r(),$(".click-tabs a").on("click",function(){r()}),$(".video-click").on("click",function(){$(this).find("iframe").attr("src",$(this).find(".video-change").attr("href")+"&autoplay=1"),$(this).find(".video").show(),$(this).find(".img-href").hide(),$(this).find(".video-title").hide()}),$(".video .close-v").on("click",function(){$(".video").fadeOut(500,function(){$(".video iframe").attr("src",""),$(".img-href").show(),$(".video-title").show()})}),$(document).on("click",".video-open",function(){$(".video-player").addClass("active");var a=$(this).find("img").attr("data-src");setTimeout(function(){$(".video-player iframe").attr("src",a)},1e3)}),$(".video-player .close-iframe").on("click",function(){$(".video-player iframe").attr("src",""),setTimeout(function(){$(".video-player").removeClass("active")},1e3)}),$("#fullpage").on("mousewheel",function(a){console.log(a.deltaX,a.deltaY,a.deltaFactor)}),$(".search .search-img").on("click",function(){return $(this).siblings(".search-popup").toggleClass("active"),!1}),$(".s_close\t").on("click",function(){return $(this).parent(".search-popup").toggleClass("active"),!1}),$(".card-icon, .card-link").on("click",function(){return $(this).siblings(".cart-popup").slideToggle(),!1}),$(".cart_close").on("click",function(){return $(this).parent(".cart-popup").slideToggle(),!1}),$(".cart-popup .item-remove").on("click",function(){return $(this).parents(".hotel-small").remove(),!1});var t=0;if($(document).on("click",".nav-tab-item",function(){var a=$(this);if(t||a.hasClass("active"))return!1;t=1,a.closest(".nav-tab").find(".nav-tab-item").removeClass("active"),a.addClass("active");var b=a.parent().parent().find(".nav-tab-item").index(this);a.closest(".tab-wrapper").find(".tab-info:visible").fadeOut(500,function(){a.closest(".tab-wrapper").find(".tab-info").eq(b).fadeIn(500,function(){t=0,o(),setTimeout(function(){p()},500)})})}),$(".cat-drop").on("click",function(){var a=$(this).parent("li");if(a.hasClass("active"))return!1;var b=a.parent(".sidebar-category").find("li.active");return b.removeClass("active"),b.find("ul").slideToggle(),a.addClass("active").find("ul").slideToggle(),!1}),$(".drop").on("click",function(){return $(this).find(".drop-list").hasClass("act")?($(this).find(".drop-list").removeClass("act"),$(this).find("span").slideUp(300)):($(".drop span").slideUp(300),$(".drop .act").removeClass("act"),$(this).find(".drop-list").addClass("act"),$(this).find("span").slideDown(300)),!1}),$(".drop span a").on("click",function(){$(this).parent().parent().find("b").text($(this).text()),$(".drop").find("span").slideUp(300)}),$(".accordion").each(function(){$(this).find(".acc-title").on("click",function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).siblings(".acc-body").slideUp()):($(this).closest(".accordion").find(".active").removeClass("active"),$(this).closest(".accordion").find(".acc-body").slideUp("slow"),$(this).toggleClass("active"),$(this).siblings(".acc-body").slideToggle("slow"))})}),$(".accordion-chooser a").on("click",function(){if($(this).hasClass("active"))return!1;var a=$(this).data("fifter"),b=$(this).parents(".accordion-filter").find(".accordion");return $(this).siblings(".active").removeClass("active"),$(this).addClass("active"),"*"==a?b.find(".acc-panel").show():(b.find(".acc-panel:not("+a+")").hide(),b.find(a).show()),!1}),$(".counters").length&&$(".counters").viewportChecker({classToAdd:"counted",offset:100,callbackFunction:function(a,b){a.find(".counter-number").countTo()}}),$(".datepicker").length&&$(".datepicker").datepicker(),$(".slider-range").each(function(a){var b=$(this).data("counter"),c=$(this).data("position"),d=parseInt($(this).data("from"),10),e=parseInt($(this).data("to"),10),f=parseInt($(this).data("min"),10),g=parseInt($(this).data("max"),10);$(this).find(".range").attr("id","slider-range-"+a),$(this).find(".amount-start").attr("id","amount-start-"+a),$(this).find(".amount-end").attr("id","amount-end-"+a),$("#slider-range-"+a).slider({range:!0,min:f,max:g,values:[d,e],slide:function(d,e){"start"==c?($("#amount-start-"+a).val(b+e.values[0]),$("#amount-end-"+a).val(b+e.values[1])):($("#amount-start-"+a).val(e.values[0]+b),$("#amount-end-"+a).val(e.values[1]+b))}}),"start"==c?($("#amount-start-"+a).val(b+$("#slider-range-"+a).slider("values",0)),$("#amount-end-"+a).val(b+$("#slider-range-"+a).slider("values",1))):($("#amount-start-"+a).val($("#slider-range-"+a).slider("values",0)+b),$("#amount-end-"+a).val($("#slider-range-"+a).slider("values",1)+b))}),$(".circle-wrapper").length&&$(".circle-wrapper").viewportChecker({classToAdd:"counted",offset:100,callbackFunction:function(a,b){a.find(".circle").circliful()}}),$(".progress-wrapper").length&&$(".progress-wrapper").viewportChecker({classToAdd:"counted",offset:100,callbackFunction:function(a,b){a.find(".count").countTo(),a.find(".progress-block").not(".counted").each(function(){$(this).addClass("counted");var a=$(this).find(".progress-bar"),b=parseInt(a.attr("data-speed"),10),c=a.attr("data-to");a.animate({width:c+"%"},{duration:b})})}}),e=$(".filter-content"),$(".filter-nav").on("click","a",function(){var a=$(this).attr("data-filter");e.isotope({filter:a});var b=$(this).parent().parent();b.find(".selected").removeClass("selected"),$(this).parent().addClass("selected")}),$(".back-counter").length){var x=$(".back-counter").data("finaldate");w(x),setInterval(function(){w(x)},1e3)}$(".ClassyCountdown").length&&$("#countdown").ClassyCountdown({theme:"white",end:$.now()+645600,style:{element:"",labels:!1,days:{gauge:{thickness:.05}},hours:{gauge:{thickness:.05}},minutes:{gauge:{thickness:.05}},seconds:{gauge:{thickness:.05}}}}),$(".choose-hotel .drop span a").on("click",function(){var a=$(this).parents(".main-wraper"),b=a.find(".hotel-clip .bg"),c=b.css("background-image");c.match("hotel_bg.jpg")?(b.fadeTo(800,0,function(){$(this).css({"background-image":c.replace("hotel_bg.jpg","hotel_bg2.jpg")})}).fadeTo(800,1),a.find(".hotel-choose:not(.hotel-hidden)").hide(0),a.find(".hotel-choose.hotel-hidden").show(0,function(){o()})):(b.fadeTo(800,0,function(){$(this).css({"background-image":c.replace("hotel_bg2.jpg","hotel_bg.jpg")})}).fadeTo(800,1),a.find(".hotel-choose.hotel-hidden").hide(0),a.find(".hotel-choose:not(.hotel-hidden)").show(0,function(){o()}))}),$(".change-slider").on("click",function(){var a=$(this).attr("href");return $(this).parents(".section").find(".bg-bg-chrome").fadeTo("slow",.3,function(){$(this).css({"background-image":"url("+a+")"})}).fadeTo("slow",1),$(this).parents(".section").find(".change-slider.active").removeClass("active"),$(this).addClass("active"),!1}),$(document).on("click",".slide-preview a",function(){var a=$(this).attr("href");return $(this).parents(".slider-block-right").siblings(".slider-block-left").fadeTo("slow",.3,function(){$(this).css({"background-image":"url("+a+")"})}).fadeTo("slow",1),$(this).siblings(".active").removeClass("active"),$(this).addClass("active"),!1});var y=0;if($(".tab-tour-header .tab-tour").on("click",function(){var a=$(this);if(y||a.hasClass("active"))return!1;y=1;var b=a.index(),c=a.parents(".tab-tour-header").siblings(".tab-tour-content");a.siblings(".active").removeClass("active"),a.addClass("active"),c.find(".hotel-wrpp.active").fadeOut(800,function(){$(this).removeClass("active"),c.find(".hotel-wrpp").eq(b).fadeIn(800,function(){$(this).addClass("active"),y=0,o()})})}),$(".tab-select .drop span a").on("click",function(){var a=$(this),b=a.index(),c=a.parents(".tab-select").siblings(".tab-tour-content");c.find(".hotel-wrpp.active").fadeOut(800,function(){$(this).removeClass("active"),c.find(".hotel-wrpp").eq(b).fadeIn(800,function(){$(this).addClass("active"),y=0,o()})})}),$(".change-list").on("click",function(){return!$(this).hasClass("active")&&($(this).siblings(".active").removeClass("active"),void $(this).addClass("active").parents(".list-header").siblings(".grid-content").removeClass("grid-content").addClass("list-content"))}),$(".change-grid").on("click",function(){return!$(this).hasClass("active")&&($(this).siblings(".active").removeClass("active"),void $(this).addClass("active").parents(".list-header").siblings(".list-content").removeClass("list-content").addClass("grid-content"))}),$(".fullpage").length){var B=1;$(".fullpage").mousewheel(function(a){if(0===B)return!1;if(b<=991)return!1;B=0;var d=$(".fullpage-wrapper"),e=$(".fullpage .section.active"),f=e.index(),g=$(".footer").outerHeight();if(a.deltaY==-1)if(e.hasClass("footer"))B=1;else if(e.next().hasClass("footer")){e.removeClass("active").next().addClass("active");var h=c*f+g;d.animate({top:"-"+h+"px"},"slow",function(){B=1})}else e.removeClass("active").next().addClass("active"),d.animate({top:"-"+c*(f+1)+"px"},"slow",function(){B=1});else 1==a.deltaY&&(0!==f?(e.prev().addClass("active"),e.removeClass("active"),d.animate({top:"-"+c*(f-1)+"px"},"slow",function(){B=1})):B=1)})}$(".serach-item").on("mouseover",function(){return $(".serach-item input").addClass("active"),!1}),$(".serach-item input").focus(function(){return $(this).addClass("active"),!1}),$(".serach-item input").blur(function(){return $(this).removeClass("active"),!1}),$("nav.menu .fa-angle-down, nav.menu .fa-chevron-right").on("click",function(){return $(this).parent("a").parent("li").toggleClass("active"),$(this).parent("a").next(".dropmenu").slideToggle(),!1}),$(".conf-button").on("click",function(){return $(".style-page").hasClass("slide-right")?($(".style-page").removeClass("slide-right"),$(".conf-button span").removeClass("act")):($(".style-page").addClass("slide-right"),$(".conf-button span").addClass("act")),!1}),$(".entry").on("click",function(){var a=$("body").attr("data-color"),b=$(this).attr("data-color");return!$(this).hasClass("active")&&($(this).parent().find(".active").removeClass("active"),$(this).addClass("active"),$("body").attr("data-color",b),$("img").each(function(){$(this).attr("src",$(this).attr("src").replace(a+"/",b+"/"))}),void localStorage.setItem("color",b))});var C=localStorage.getItem("color");$('.entry[data-color="'+C+'"]').on("click"),$(".rounded").on("click",function(){$("body").hasClass("noborder")&&($("body").removeClass("noborder"),$(this).closest(".color-block").find(".check-option").removeClass("active"),$(this).parent().addClass("active"))}),$(".norounded").on("click",function(){$("body").addClass("noborder"),$(this).closest(".color-block").find(".check-option").removeClass("active"),$(this).parent().addClass("active")}),$(".boxed").on("click",function(){$(".container").hasClass("box")&&($(".container").removeClass("box"),$(this).closest(".color-block").find(".check-option").removeClass("active"),$(this).parent().addClass("active"),p())}),$(".noboxed").on("click",function(){$(".container").addClass("box"),$(this).closest(".color-block").find(".check-option").removeClass("active"),$(this).parent().addClass("active"),p()}),$(".accordeon-entry h5").on("click",function(){$(this).parent().toggleClass("active"),$(this).next().toggleClass("active")}),$(".alert .fa").on("click",function(){$(this).parent().addClass("act")}),$(".popup-gallery").length&&$(".popup-gallery").magnificPopup({delegate:"a",type:"image",removalDelay:300,tLoading:"Loading image #%curr%...",mainClass:"mfp-fade",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(a){return a.is("img")?a:a.find("img")}}})});