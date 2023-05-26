"use strict";!function(e){var t=e(window);function n(e,t,n){var i;return function(){var a=this,o=arguments,s=function(){i=null,n||e.apply(a,o)},r=n&&!i;clearTimeout(i),i=setTimeout(s,t),r&&e.apply(a,o)}}function i(t,n){var i=t.find(".hajs-filter"),a=i.data("default-filter");i.length&&(i.on("click.onFilterNav","button",(function(t){t.stopPropagation();var i=e(this);i.addClass("ha-filter__item--active").siblings().removeClass("ha-filter__item--active"),n(i.data("filter"))})),i.find('[data-filter="'+a+'"]').click())}function a(t){if(t.$element.on("click",t.selector,(function(e){e.preventDefault()})),e.fn.magnificPopup)if(t.isEnabled){var n=e(window).width(),i=elementorFrontendConfig.breakpoints.md,a=elementorFrontendConfig.breakpoints.lg;t.$element.find(t.selector).magnificPopup({key:t.key,type:"image",image:{titleSrc:function(e){return e.el.attr("title")?e.el.attr("title"):e.el.find("img").attr("alt")}},gallery:{enabled:!0,preload:[1,2]},zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(e){return e.is("img")?e:e.find("img")}},disableOn:function(){return!(t.disableOnMobile&&n<i)&&!(t.disableOnTablet&&n>=i&&n<a)}})}else e.magnificPopup.close()}e.fn.getHappySettings=function(){return this.data("happy-settings")};var o=function(e){var n=e.find(".hajs-image-comparison"),i=n.getHappySettings();i[{on_hover:"move_slider_on_hover",on_swipe:"move_with_handle_only",on_click:"click_to_move"}[i.move_handle||"on_swipe"]]=!0,delete i.move_handle,n.imagesLoaded().done((function(){n.twentytwenty(i);var e=setTimeout((function(){t.trigger("resize.twentytwenty"),clearTimeout(e)}),400)}))};t.on("elementor/frontend/init",(function(){var s=elementorModules.frontend.handlers.Base,r=s.extend({bindEvents:function(){this.removeArrows(),this.run()},removeArrows:function(){var e=this;this.elements.$container.on("init",(function(){e.elements.$container.siblings().hide()}))},getDefaultSettings:function(){return{autoplay:!0,arrows:!1,checkVisible:!1,container:".hajs-slick",dots:!1,infinite:!0,rows:0,slidesToShow:1,prevArrow:e("<div />").append(this.findElement(".slick-prev").clone().show()).html(),nextArrow:e("<div />").append(this.findElement(".slick-next").clone().show()).html()}},getDefaultElements:function(){return{$container:this.findElement(this.getSettings("container"))}},onElementChange:n((function(){this.elements.$container.slick("unslick"),this.run()}),200),getSlickSettings:function(){var t={infinite:!!this.getElementSettings("loop"),autoplay:!!this.getElementSettings("autoplay"),autoplaySpeed:this.getElementSettings("autoplay_speed"),speed:this.getElementSettings("animation_speed"),centerMode:!!this.getElementSettings("center"),vertical:!!this.getElementSettings("vertical"),slidesToScroll:1};switch(this.getElementSettings("navigation")){case"arrow":t.arrows=!0;break;case"dots":t.dots=!0;break;case"both":t.arrows=!0,t.dots=!0}return t.slidesToShow=parseInt(this.getElementSettings("slides_to_show"))||1,t.responsive=[{breakpoint:elementorFrontend.config.breakpoints.lg,settings:{slidesToShow:parseInt(this.getElementSettings("slides_to_show_tablet"))||t.slidesToShow}},{breakpoint:elementorFrontend.config.breakpoints.md,settings:{slidesToShow:parseInt(this.getElementSettings("slides_to_show_mobile"))||parseInt(this.getElementSettings("slides_to_show_tablet"))||t.slidesToShow}}],e.extend({},this.getSettings(),t)},run:function(){this.elements.$container.slick(this.getSlickSettings())}}),l=s.extend({onInit:function(){s.prototype.onInit.apply(this,arguments),this.run(),this.runFilter(),t.on("resize",n(this.run.bind(this),100))},getLayoutMode:function(){var e=this.getElementSettings("layout");return"even"===e?"masonry":e},getDefaultSettings:function(){return{itemSelector:".ha-image-grid__item",percentPosition:!0,layoutMode:this.getLayoutMode()}},getDefaultElements:function(){return{$container:this.findElement(".hajs-isotope")}},getLightBoxSettings:function(){return{key:"imagegrid",$element:this.$element,selector:".ha-js-lightbox",isEnabled:!!this.getElementSettings("enable_popup"),disableOnTablet:!!this.getElementSettings("disable_lightbox_on_tablet"),disableOnMobile:!!this.getElementSettings("disable_lightbox_on_mobile")}},runFilter:function(){var e=this,t=this.getLightBoxSettings();i(this.$element,(function(n){e.elements.$container.isotope({filter:n}),"*"!==n&&(t.selector=n),a(t)}))},onElementChange:function(e){-1!==["layout","image_height","columns","image_margin","enable_popup"].indexOf(e)&&this.run()},run:function(){var e=this;e.elements.$container.isotope(e.getDefaultSettings()).imagesLoaded().progress((function(){e.elements.$container.isotope("layout")})),a(e.getLightBoxSettings())}}),d=s.extend({onInit:function(){s.prototype.onInit.apply(this,arguments),this.run(),this.runFilter(),t.on("resize",n(this.run.bind(this),100))},getDefaultSettings:function(){var t={rowHeight:+this.getElementSettings("row_height.size")||150,lastRow:this.getElementSettings("last_row"),margins:+this.getElementSettings("margins.size"),captions:!!this.getElementSettings("show_caption")},n={};return"yes"==this.getElementSettings("max_row_height")&&(n={maxRowHeight:+this.getElementSettings("row_height.size")||150}),e.extend(t,n)},getDefaultElements:function(){return{$container:this.findElement(".hajs-justified-grid")}},getLightBoxSettings:function(){return{key:"justifiedgallery",$element:this.$element,selector:".ha-js-lightbox",isEnabled:!!this.getElementSettings("enable_popup"),disableOnTablet:!!this.getElementSettings("disable_lightbox_on_tablet"),disableOnMobile:!!this.getElementSettings("disable_lightbox_on_mobile")}},runFilter:function(){var e=this,t=this.getLightBoxSettings(),n={lastRow:this.getElementSettings("last_row")};i(e.$element,(function(i){"*"!==i&&(n.lastRow="nojustify",t.selector=i),n.filter=i,e.elements.$container.justifiedGallery(n),a(t)}))},onElementChange:function(e){-1!==["row_height","max_row_height","last_row","margins","show_caption","enable_popup"].indexOf(e)&&this.run()},run:function(){this.elements.$container.justifiedGallery(this.getDefaultSettings()),a(this.getLightBoxSettings())}}),c=s.extend({onInit:function(){s.prototype.onInit.apply(this,arguments),this.wrapper=this.$element.find(".ha-news-ticker-wrapper"),this.run()},onElementChange:function(e){"item_space"!==e&&"title_typography_font_size"!==e||this.run()},run:function(){if(0!=this.wrapper.length){var t=this.wrapper.innerHeight(),n=this.wrapper.innerWidth(),i=this.wrapper.find(".ha-news-ticker-container"),a=i.find(".ha-news-ticker-item"),o=this.wrapper.data("scroll-direction"),s="scroll"+o+parseInt(t)+parseInt(n),r=this.wrapper.data("duration"),l="normal",d=10,c={transform:"translateX(0"+n+"px)"};"right"===o&&(l="reverse"),a.each((function(){d+=e(this).outerWidth(!0)})),i.css({width:d,display:"flex"}),e.keyframe.define([{name:s,"0%":c,"100%":{transform:"translateX(-101%)"}}]),i.playKeyframe({name:s,duration:r.toString()+"ms",timingFunction:"linear",delay:"0s",iterationCount:"infinite",direction:l,fillMode:"none",complete:function(){}})}}}),h=s.extend({onInit:function(){s.prototype.onInit.apply(this,arguments),this.wrapper=this.$element.find(".ha-post-tab"),this.run()},run:function(){var t=this.wrapper.find(".ha-post-tab-filter").find("li"),i=this.wrapper.data("event"),a=this.wrapper.data("query-args");t.on(i,n((function(n){n.preventDefault();var i=e(this),o=i.data("term"),s=i.closest(".ha-post-tab").find(".ha-post-tab-content"),r=s.find(".ha-post-tab-loading"),l=s.find(".ha-post-tab-item-wrapper"),d=!1;0===r.length&&(t.removeClass("active"),l.removeClass("active"),i.addClass("active"),l.each((function(){var t=e(this),n=t.data("term");o===n&&(t.addClass("active"),d=!0)})),!1===d&&e.ajax({url:HappyLocalize.ajax_url,type:"POST",data:{action:"ha_post_tab_action",security:HappyLocalize.nonce,post_tab_query:a,term_id:o},beforeSend:function(){s.append('<span class="ha-post-tab-loading"><i class="eicon-spinner eicon-animation-spin"></i></span>')},success:function(e){s.find(".ha-post-tab-loading").remove(),s.append(e)},error:function(e){}}))}),200))}});elementorFrontend.hooks.addAction("frontend/element_ready/ha-slider.default",(function(e){elementorFrontend.elementsHandler.addHandler(r,{$element:e})})),elementorFrontend.hooks.addAction("frontend/element_ready/ha-carousel.default",(function(e){elementorFrontend.elementsHandler.addHandler(r,{$element:e})})),elementorFrontend.hooks.addAction("frontend/element_ready/ha-horizontal-timeline.default",(function(e){elementorFrontend.elementsHandler.addHandler(r,{$element:e,autoplay:!1,container:".ha-horizontal-timeline-wrapper",navigation:"arrow",arrows:!0});var t=e.find(".ha-horizontal-timeline-image");void 0!==t.data("mfp-src")&&t.magnificPopup({type:"image",gallery:{enabled:!0}})})),e("body").on("click.onWrapperLink","[data-ha-element-link]",(function(){var t,n,i=e(this),a=i.data("ha-element-link"),o=i.data("id"),s=document.createElement("a");s.id="happy-addons-wrapper-link-"+o,s.href=a.url,s.target=a.is_external?"_blank":"_self",s.rel=a.nofollow?"nofollow noreferer":"",s.style.display="none",document.body.appendChild(s),(t=document.getElementById(s.id)).click(),n=setTimeout((function(){document.body.removeChild(t),clearTimeout(n)}))}));var u=function(e){e.hasClass("elementor-element-edit-mode")&&e.addClass("ha-has-bg-overlay")},f={"ha-image-compare.default":o,"ha-number.default":function(e){elementorFrontend.waypoint(e,(function(){var t=e.find(".ha-number-text");t.numerator(t.data("animation"))}))},"ha-skills.default":function(t){elementorFrontend.waypoint(t,(function(){t.find(".ha-skill-level").each((function(){var t=e(this),n=t.find(".ha-skill-level-text"),i=t.data("level");t.animate({width:i+"%"},500),n.numerator({toValue:i+"%",duration:1300,onStep:function(){n.append("%")}})}))}))},"ha-fun-factor.default":function(e){elementorFrontend.waypoint(e,(function(){var t=e.find(".ha-fun-factor__content-number");t.numerator(t.data("animation"))}))},"ha-bar-chart.default":function(t){elementorFrontend.waypoint(t,(function(){var t=e(this),n=t.find(".ha-bar-chart-container"),i=t.find("#ha-bar-chart"),a=n.data("settings");n.length&&new Chart(i,a)}))},"ha-twitter-feed.default":function(t){var n=t.find(".ha-twitter-load-more"),i=t.find(".ha-tweet-items");n.on("click",(function(n){n.preventDefault();var a=e(this),o=a.data("settings"),s=a.data("total"),r=t.find(".ha-tweet-item").length;e.ajax({url:HappyLocalize.ajax_url,type:"POST",data:{action:"ha_twitter_feed_action",security:HappyLocalize.nonce,query_settings:o,loaded_item:r},success:function(t){s>r?e(t).appendTo(i):(a.text("All Loaded").addClass("loaded"),setTimeout((function(){a.css({display:"none"})}),800))},error:function(e){}})}))},"ha-threesixty-rotation.default":function(t){var n=t.find(".ha-threesixty-rotation-inner"),i=n.data("selector"),a=n.data("autoplay"),o=t.find(".ha-threesixty-rotation-magnify"),s=t.find(".ha-threesixty-rotation-360img"),r=o.data("zoom"),l=t.find(".ha-threesixty-rotation-play"),d=circlr(i,{play:!0});if("on"===a){var c=t.find(".ha-threesixty-rotation-autoplay");c.on("click",(function(e){e.preventDefault(),d.play(),s.remove()})),setTimeout((function(){c.trigger("click"),c.remove()}),1e3)}else l.on("click",(function(t){t.preventDefault();var n=e(this).find("i");n.hasClass("hm-play-button")?(n.removeClass("hm-play-button"),n.addClass("hm-stop"),d.play()):(n.removeClass("hm-stop"),n.addClass("hm-play-button"),d.stop()),s.remove()}));o.on("click",(function(n){t.find("img").each((function(){-1!==e(this).attr("style").indexOf("block")&&(HappySimplaMagnify(e(this)[0],r),o.css("display","none"),s.remove())}))})),e(document).on("click",(function(i){var a=e(i.target),r=t.find(".ha-img-magnifier-glass"),l=o.find("i");r.length&&a[0]!==l[0]&&(r.remove(),o.removeAttr("style")),a[0]===n[0]&&s.remove()})),n.on("mouseup mousedown touchstart touchend",(function(e){s.remove()}))},"ha-data-table.default":function(t){var n=t.find(".ha-table__head-column-cell");t.find(".ha-table__body-row").each((function(t,i){e(i).find(".ha-table__body-row-cell").each((function(t,i){e(i).prepend('<div class="ha-table__head-column-cell">'+n.eq(t).html()+"</div>")}))}))},section:u,column:u,"ha-event-calendar.default":function(e){var t=e.find(".ha-ec"),n=e.find(".ha-ec-popup-wrapper"),i=e.find(".ha-ec-popup-close"),a=t.data("events"),o=t.data("initialview"),s=t.data("firstday"),r=t.data("locale"),l=t.data("show-popup"),d=t.data("allday-text");if(void 0!==a){var c={stickyHeaderDates:!1,locale:r,headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"},initialView:o,firstDay:s,eventTimeFormat:{hour:"numeric",minute:"2-digit",meridiem:"short"},events:a,height:"auto",eventClick:function(t){if("yes"==l){var i=function(e){return new Date(e)},a=function(e){var t=e.getHours(),n=e.getMinutes(),i=t>=12?"pm":"am";return(t=(t%=12)||12)+":"+(n=n<10?"0"+n:n)+i};t.jsEvent.preventDefault();t.view.calendar.currentData.currentDate.toString();var o=t.event.allDay,s=t.event.title,r=t.event.startStr,c=t.event.endStr,h=t.event.extendedProps.guest,u=t.event.extendedProps.location,f=t.event.extendedProps.description,m=t.event.url,p=t.event.extendedProps.image,g=n.find(".ha-ec-event-title"),v=n.find(".ha-ec-event-time-wrap"),y=n.find(".ha-ec-event-guest-wrap"),w=n.find(".ha-ec-event-location-wrap"),b=n.find(".ha-ec-popup-desc"),_=n.find(".ha-ec-popup-readmore-link"),x=n.find(".ha-ec-popup-image");if(x.css("display","none"),g.css("display","none"),v.css("display","none"),y.css("display","none"),w.css("display","none"),b.css("display","none"),_.css("display","none"),n.addClass("ha-ec-popup-ready"),p&&(x.removeAttr("style"),x.find("img").attr("src",p),x.find("img").attr("alt",s)),s&&(g.removeAttr("style"),g.text(s)),h&&(y.removeAttr("style"),y.find("span.ha-ec-event-guest").text(h)),u&&(w.removeAttr("style"),w.find("span.ha-ec-event-location").text(u)),f&&(b.removeAttr("style"),b.html(f)),!0!==o){v.removeAttr("style"),r=Date.parse(i(r)),c=Date.parse(i(c));var k=a(i(r)),C="Invalid Data";r<c&&(C=a(i(c))),v.find("span.ha-ec-event-time").text(k+" - "+C)}else v.removeAttr("style"),v.find("span.ha-ec-event-time").text(d);m&&(_.removeAttr("style"),_.attr("href",m),"on"===t.event.extendedProps.external&&_.attr("target","_blank"),"on"===t.event.extendedProps.nofollow&&_.attr("rel","nofollow"))}else if(t.event.url&&t.event.extendedProps.external){t.jsEvent.preventDefault();var S,E,T=e.data("id"),D=document.createElement("a");return D.id="happy-even-calender-link-"+T,D.href=t.event.url,D.target=t.event.extendedProps.external?"_blank":"_self",D.rel=t.event.extendedProps.nofollow?"nofollow noreferer":"",D.style.display="none",document.body.appendChild(D),(S=document.getElementById(D.id)).click(),E=setTimeout((function(){document.body.removeChild(S),clearTimeout(E)})),!1}},dateClick:function(e){itemDate=e.date.toUTCString()}};new FullCalendar.Calendar(t[0],c).render(),e.find(".ha-ec-popup-wrapper").on("click",(function(e){e.stopPropagation(),e.target!==e.currentTarget&&e.target!=i[0]&&e.target!=i.find(".eicon-editor-close")[0]||n.addClass("ha-ec-popup-removing").removeClass("ha-ec-popup-ready")}))}},"ha-mailchimp.default":function(t){var n=t.find(".ha-mailchimp-form"),i=t.find(".ha-mc-response-message"),a=n.data("success-message");n.on("submit",(function(t){t.preventDefault();var o={action:"ha_mailchimp_ajax",security:HappyLocalize.nonce,subscriber_info:n.serialize(),list_id:n.data("list-id"),post_id:n.parent().data("post-id"),widget_id:n.parent().data("widget-id")};e.ajax({type:"post",url:HappyLocalize.ajax_url,data:o,success:function(e){n.trigger("reset"),e.status?(i.removeClass("error"),i.addClass("success"),i.text(a)):(i.addClass("error"),i.removeClass("success"),i.text(e.msg));var t=setTimeout((function(){i.removeClass("error"),i.removeClass("success"),clearTimeout(t)}),5e3)},error:function(e){}})}))},"ha-image-accordion.default":function(t){if(t.hasClass("ha-image-accordion-click")){var n=t.find(".ha-ia-item");n.each((function(t,i){e(this).on("click",(function(t){e(this).hasClass("active")||(n.removeClass("active"),e(this).addClass("active"))}))}))}},"ha-content-switcher.default":function(t){var n=t.find(".ha-content-switcher-wrapper");if("button"==n.data("design-type")){var i=n.find(".ha-cs-button"),a=n.find(".ha-cs-content-section");i.each((function(t,o){e(this).on("click",(function(t){if(t.preventDefault(),!e(this).hasClass("active")){i.removeClass("active"),e(this).addClass("active"),a.removeClass("active");var o=e(this).data("content-id");n.find("#"+o).addClass("active")}}))}))}else{var o=n.find(".ha-cs-switch.ha-input-label"),s=n.find("input.ha-cs-toggle-switch"),r=n.find(".ha-cs-switch.primary"),l=n.find(".ha-cs-switch.secondary"),d=n.find(".ha-cs-content-section.primary"),c=n.find(".ha-cs-content-section.secondary");o.on("click",(function(e){s.is(":checked")?(r.removeClass("active"),d.removeClass("active"),l.addClass("active"),c.addClass("active")):(l.removeClass("active"),c.removeClass("active"),r.addClass("active"),d.addClass("active"))}))}},"ha-member.default":function(e){var t=e.find(".ha-btn"),n=e.find(".ha-member-lightbox");if(n.length>0){var i=n.find(".ha-member-lightbox-close");t.on("click",(function(){n.addClass("ha-member-lightbox-show")})),n.on("click",(function(e){n.hasClass("ha-member-lightbox-show")&&(e.target==n[0]||e.target==i[0]||e.target==i.find("i.eicon-editor-close")[0])&&n.removeClass("ha-member-lightbox-show")}))}},"ha-creative-button.default":function(e){var t=e.find(".ha-creative-btn-wrap"),n=t.data("magnetic"),i=t.find("a.ha-creative-btn");"yes"==n&&(t.on("mousemove",(function(e){var n=e.pageX-(t.offset().left+t.outerWidth()/2),a=e.pageY-(t.offset().top+t.outerHeight()/2);i.css("transform","translate("+.3*n+"px, "+.5*a+"px)")})),t.on("mouseout",(function(e){i.css("transform","translate(0px, 0px)")})));var a=e.find(".ha-eft--expandable"),o=a.find(".text");a.length>0&&o.length>0&&(o[0].addEventListener("transitionend",(function(){o[0].style.width&&(o[0].style.width="auto")})),a[0].addEventListener("mouseenter",(function(e){e.currentTarget.classList.add("hover"),o[0].style.width="auto";var t=o[0].offsetWidth;o[0].style.width="0",window.getComputedStyle(o[0]).transform,o[0].style.width="".concat(t,"px")})),a[0].addEventListener("mouseleave",(function(e){e.currentTarget.classList.remove("hover"),o[0].style.width="".concat(o[0].offsetWidth,"px"),window.getComputedStyle(o[0]).transform,o[0].style.width=""})))},"ha-pdf-view.default":function(e){var t=e.data("id"),n=e.find(".viewer-"+t).data("pdf-settings"),i={width:n.width,height:n.height,page:n.page_number};PDFObject.embed(n.pdf_url,"#"+n.unique_id,i)},"ha-comparison-table.default":function(n){var i=n.find(".ha-comparison-table-wrapper"),a=n.find(".ha-comparison-table__head"),o=a.data("sticky-header"),s=(n.height(),i.innerHeight()),r=i.offset().top;"yes"===o&&t.scroll((function(){var t=e(this).scrollTop();t>=r?a.addClass("table-sticky"):t>s&&a.removeClass("table-sticky")}))}};e.each(f,(function(e,t){elementorFrontend.hooks.addAction("frontend/element_ready/"+e,t)}));var m={"ha-image-grid.default":l,"ha-justified-gallery.default":d,"ha-news-ticker.default":c,"ha-post-tab.default":h};e.each(m,(function(e,t){elementorFrontend.hooks.addAction("frontend/element_ready/"+e,(function(e){elementorFrontend.elementsHandler.addHandler(t,{$element:e})}))}));elementorFrontend.hooks.addAction("frontend/element_ready/ha-navigation-menu.default",(function(i){var a=i.find(".ha-nav-menu");jQuery(window).width()<1025&&jQuery(window).width()>767&&a.find(".ha-submenu-indicator-wrap").on("click",(function(t){t.preventDefault();var n=e(this).parent("li.menu-item-has-children");n&&n.children("ul.sub-menu").slideToggle()}));function o(){jQuery(window).width()<768?(a.removeClass("ha-navigation-menu-wrapper"),a.addClass("ha-navigation-burger-menu"),a.find(".ha-submenu-indicator-wrap").on("click",(function(t){t.preventDefault();var n=e(this).parent("li.menu-item-has-children");n&&n.children("ul.sub-menu").slideToggle()}))):(a.addClass("ha-navigation-menu-wrapper"),a.removeClass("ha-navigation-burger-menu"),a.find("ul.menu").removeAttr("style"),a.find("ul.sub-menu").removeAttr("style"))}a.find(".ha-menu-toggler").on("click",(function(t){var n=e(this).data("humberger"),i=a.find("ul.menu");"open"==n?(e(".ha-menu-open-icon").addClass("hide-icon"),e(".ha-menu-close-icon").removeClass("hide-icon"),e(".ha-menu-close-icon").addClass("show-icon"),i.slideDown()):(e(".ha-menu-close-icon").addClass("hide-icon"),e(".ha-menu-open-icon").removeClass("hide-icon"),e(".ha-menu-open-icon").addClass("show-icon"),i.slideUp())})),o(),t.on("resize",n(o,100))}))}))}(jQuery);