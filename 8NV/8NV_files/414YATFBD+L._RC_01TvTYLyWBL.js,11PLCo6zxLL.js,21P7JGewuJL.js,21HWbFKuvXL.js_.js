(function(f){var l=window.AmazonUIPageJS||window.P,m=l._namespace||l.attributeErrors,t=m?m("CustomerReviewsCommonAssets",""):l;t.guardFatal?t.guardFatal(f)(t,window):t.execute(function(){f(t,window)})})(function(f,l,m){function t(){}f.when("A","cr-log-utils","cr-streaming-utils").register("cr-ajax-model",function(b,d,c){function a(a){k[a]&&(k[a].abort(),delete k[a])}function e(n,g,p,q,u,r,f,m){g=g||{};g.params=g.params||{};var x=r?r:v=v++;r=x;u=u?u:g.error||function(){};q=q?q:0;p=p?p:2;m=m?m:"FATAL";
var t="FATAL"===m?0:1,w=g.finallyCallback||function(){};f||(f="reviewsAjax"+h++,l.uet&&l.uet("tc",f));g.params.scope=f;g.contentType=g.contentType||"application/x-www-form-urlencoded;charset\x3dUTF-8";var y=g.success||function(){};g.success=function(a){delete k[r];"function"===typeof y&&y(a);"function"===typeof w&&w(a)};g.error=function(h,b,c){a(r);h=h||{};var k=(h.http||{}).status||"[]";q++;q<p?(b="AJAX Post to "+n+" from "+l.location.href+" failed, status code passed through parameter was: "+b+
", status code extracted from XHR HTTP object was: "+k+", attempt "+q+" of "+p+", error message was: \n "+c,d.logError(b,"WARN"),e(n,g,p,q,u,r,f,m)):(b="AJAX Post to "+n+" from "+l.location.href+" failed, status code passed through parameter was: "+b+", status code extracted from XHR HTTP object was: "+k+", exhausted "+p+" attempt(s), error message was: \n "+c,d.logError(b,m),d.logCount("AjaxFailureFatal",t),"function"===typeof u&&u(h),"function"===typeof w&&w(h))};"function"!==typeof g.chunk&&(g.chunk=
function(a){"appendFadeIn"===a[0]?c.appendFadeIn(a):"replace"===a[0]&&c.replace(a)});k[r]=b.post(n,g);return r}var h=0,v=1,k={};return{abort:a,post:e,postWithoutFatals:function(a,h,b,c,d,k,v){return e(a,h,b,c,d,k,v,"WARN")}}});"use strict";f.when("A","cr-jQuery","cr-log-utils","cr-number-utils").register("cr-A",function(b,d,c,a){b.getListFromState=function(a){var h=b.map(d("#cr-state-object, .cr-state-object"),function(a){return d(a).data("state")});return b.reduce(h,function(h,b){b!==m&&b[a]!==m&&
h.push(b[a]);return h},[])};b.getValueFromState=function(a){var h=b.getListFromState(a);1<h.length&&c.logError("More than one  value defined for key: "+a,"ERROR");return h[0]};var e={top:-100,left:-100};b.inView=function(a){a=a||d();if("function"===typeof a.offset){var b=(a.offset()||e).top-d(l).scrollTop();a=0<=b;b=b<d(l).height();return a&&b}return!1};b.onScreenAndVisible=function(b,c){b=b||d();c=a.isFiniteNumber(c)?c:0;if(b instanceof d||b.jquery){if(!b.is(":visible"))return!1;b=b[0].getBoundingClientRect();
return b.top>=0-c&&b.left>=0-c&&b.bottom<=d(l).height()+c&&b.right<=d(l).width()+c}return!1};b.compositeEventWrapper=function(a,e,d){var h=a;d&&(h=b.throttle(h,d,{trailing:!1}));return c.jsGuard(function(a){a&&(h(a),e&&a.$event&&a.$event.preventDefault())})};b.freeze=function(a){return"undefined"!==typeof Object&&"function"===typeof Object.freeze?Object.freeze(a):a};b.isFrozen=function(a){return"undefined"!==typeof Object&&"function"===typeof Object.isFrozen?Object.isFrozen(a):!1};return b});"use strict";
f.when("jQuery").register("cr-jQuery",function(b){return b});"use strict";f.declare("reviews-constants",{PUSH_STATE:!0,REPLACE_STATE:!1,RATING_SERVICE_CONTEXT_ID:"ReviewsConsumption",data:{REFTAG:"data-reftag",CSM_COUNTER:"data-csm-counter",getReviews:{STANDARD:"data-reviews-state-param",CHECKED:"data-reviews-param-checked",UNCHECKED:"data-reviews-param-unchecked"}},events:{CONTENT_CHANGED:"reviews:content-changed",RELOAD:"reviews:content-reload",RELOAD_COMPLETE:"reviews:content-reload-complete",
AUTOSCROLL_COMPLETE:"reviews:autoscroll-complete",FILTER_FIRE_AGGREGATE:"reviews:filter-action:aggregate:trigger",FILTER_FIRE_UPDATE:"reviews:filter-action:trigger",FILTER_AGGREGATE:"reviews:filter-action:aggregate",FILTER_PUSH:"reviews:filter-action:push-state",FILTER_REPLACE:"reviews:filter-action:replace-state",PAGINATION:"reviews:page-action",SEARCH_TEXTBOX:"reviews:search-textbox",SEARCH_BUTTON:"reviews:search-button",VOTE:"reviews:vote-action",TOGGLE_CLASS_CLICK:"reviews:toggle-class:click",
AJAX_POST:"reviews:ajax-post",SCROLL_TO_ELEMENT_CLICK:"reviews:scroll-to-element:click",OPEN_MASH_MODAL:"reviews:open-mash-modal",FILTER_APPLY:"reviews:filter-action:apply",FILTER_CHANGE:"reviews:filter-action:change",FILTER_TAB_CLICKED:"reviews:filter-action:tab-clicked",FILTER_APPLY_BEGIN:"reviews:filter-action:apply-begin",FILTER_APPLY_SUCCESS:"reviews:filter-action:apply-success",FILTER_APPLY_ERROR:"reviews:filter-action:apply-error",FILTER_APPLY_DONE:"reviews:filter-action:apply-done",INPUT_COMMENT:"reviews:input-comment",
SUBMIT_COMMENT:"reviews:submit-comment",OPEN_SUBMISSION_COMMENT:"reviews:open-comment-submission",SORT_COMMENTS:"reviews:sort-comments",MORE_COMMENTS:"reviews:more-comments",EDIT_COMMENT:"reviews:edit-comment",CANCEL_EDIT_COMMENT:"reviews:cancel-edit-comment",DELETE_COMMENT:"reviews:delete-comment",SUBMIT_EDIT_COMMENT:"reviews:submit-edit-comment",MODIFY_EDIT_COMMENT:"reviews:modify-edit-comment",INPUT_PRODUCT_LINK:"reviews:input-product-link",SELECT_PRODUCT_LINK:"reviews:select-product-link",STAR_RATING_CLICK:"ryp:star-rating-click",
STAR_RATING_CLEAR:"ryp:star-rating-clear-click",TRIGGER_WEBLAB:"reviews:trigger-weblab",REFTAG_TRIGGER:"reviews:trigger-reftag"},filterOptions:{SORT_KEY:"sortBy",HELPFUL:"helpful",RECENT:"recent",LEGACY_HELPFUL:"byRankDescending",LEGACY_RECENT:"bySubmissionDateDescending",MOBILE_HELPFUL:"sh",MOBILE_RECENT:"sd",STAR_KEY:"filterByStar",ALL_STARS:"all_stars",ONE_STAR:"one_star",TWO_STAR:"two_star",THREE_STAR:"three_star",FOUR_STAR:"four_star",FIVE_STAR:"five_star",POSTIVE:"positive",CRITICAL:"critical",
FORMAT_KEY:"formatType",ALL_FORMATS:"all_formats",CURRENT_FORMAT:"current_format",AVP_KEY:"reviewerType",ALL_REVIEWS:"all_reviews",AVP_ONLY:"avp_only_reviews",MEDIA_KEY:"mediaType",ALL_CONTENTS:"all_contents",MEDIA_ONLY:"media_reviews_only",LANGUAGE_KEY:"filterByLanguage",HEIGHT_KEY:"filterByHeight",WEIGHT_KEY:"filterByWeight"},keycodes:{ENTER:13,BACK_SPACE:8,SPACE:32},aui:{HIDDEN:"aok-hidden",NOWRAP:"aok-nowrap"}});"use strict";f.when("A","cr-string-utils","cr-log-utils").register("cr-popup",function(b,
d,c){function a(a){var e={};a&&a.data&&(e=a.data);var f=d.defaultIfBlank(e.url,a.$target.find("a").andSelf().filter("a").attr("href")),k=d.defaultIfBlank(e.title,"CustomerReviews");k=""+k;var n="";b.each({width:"500",height:"500",resizable:"1",scrollbars:"1",toolbar:"0",status:"1"},function(a,b){a=d.defaultIfBlank(e[b],a);n+=b+"\x3d"+a+","});n=n.slice(0,-1);var g=null;try{(g=l.open(f,k,n))?g.focus():c.logError("Unable to move focus to popup window with data: "+d.stringify(e),"ERROR"),a.$event.preventDefault()}catch(p){c.logError("Unable to open window with parameters: "+
d.stringify(e),"FATAL",p)}return g}b.declarative("cr-popup",["click"],c.jsGuard(a));return{popup:a}});"use strict";f.when("A","cr-jQuery","reviews-constants","cr-ajax-model","cr-string-utils","cr-global-view").register("cr-generic-declarative-actions",function(b,d,c,a,e,h){function f(a){g(a)&&a.data.selector&&a.data.cssClass&&(d(a.data.selector).toggleClass(a.data.cssClass),a.$event.preventDefault(),b.trigger("a:pageUpdate"))}function k(a){g(a)&&a.data.scrollToSelector&&(h.scrollTo(a.data.scrollToSelector,
0),a.$event.preventDefault())}function n(c){if(g(c)&&c.data.url&&c.data.params){c.$event.preventDefault();b.declarative.remove(c.$currentTarget,q.AJAX_POST);c=c.data;var e=c.params,h=d(c.indicatorSelector)[0],k=p(d.fn.hide,c.hideOnSuccessSelector),f=p(d.fn.show,c.showOnFailureSelector);d(c.removeOnLoadSelector).remove();a.post(c.url,{params:e,indicator:h,success:k,error:f})}}function g(a){return a&&a.data&&a.$event&&"function"===typeof a.$event.preventDefault}function p(a,b){if(b&&"function"===typeof a)return function(){var c=
d(b);0<c.length&&a.call(c)}}var q=c.events;b.declarative(q.TOGGLE_CLASS_CLICK,"click",f);b.declarative(q.SCROLL_TO_ELEMENT_CLICK,"click",k);b.declarative(q.AJAX_POST,"click",n);return{toggleCssClass:f,scrollToElement:k,ajaxPost:n}});"use strict";f.register("cr-global-model",function(){return{generateUrl:function(b,d){b&&"/"!==b.charAt(b.length-1)&&(b+="/");b&&d&&(b=b+"ref\x3d"+d);return b}}});"use strict";f.when("A","a-expander","cr-jQuery","reviews-constants","cr-string-utils").register("cr-global-view",
function(b,d,c,a,e){function h(a){var b="";if(a&&a.closest!==m){var c=a.closest("*["+g.REFTAG+"]");c&&(b=c.attr(g.REFTAG))}e.isBlank(b)&&a&&a.closest!==m&&(a=a.closest("*[rel]"))&&(b=a.attr("rel"));return e.defaultIfBlank(b,"cm_cr_unknown")}function f(a){return a&&"function"===typeof a.is?a.is("*["+g.getReviews.CHECKED+"]")&&a.is("*["+g.getReviews.UNCHECKED+"]"):!1}function k(a){return a&&a.has!==m&&a.is!==m?0<a.find(":checked").length||a.is(":checked"):!1}function n(a,b){return a&&a.attr!==m&&b?
e.parseJSON(a.attr(b))||{}:{}}var g=a.data;b.on("a:pageUpdate",function(){d!==m&&d.initializeExpanders()});return{getReviewsStateParamsFromElement:function(a){var c=b.reduce(g.getReviews,function(a,b){return a+"*["+b+"],"},"").slice(0,-1),e;c&&a&&a.closest!==m&&(e=a.closest(c));return f(e)?k(e)?n(e,g.getReviews.CHECKED):n(e,g.getReviews.UNCHECKED):n(e,g.getReviews.STANDARD)},getReftag:function(a){if(a&&a.$target)var b=a.$target;a&&a.id&&(b=c("#"+a.id));a&&a.expander&&a.expander.$expander&&(b=a.expander.$expander);
b=h(b);"cm_cr_unknown"===b&&a&&a.data&&a.data.reftag&&(b=a.data.reftag);return b},getReftagByDom:h,scrollTo:function(a,b){a=c(a).offset();b=b||0;var e=c("#cr-state-object").data("state");e=e!==m&&e.disableScroll;a&&a.top!==m&&!e&&(c("html,body").stop(),c("html,body").animate({scrollTop:a.top-b},{queue:!1,duration:500}))}}});"use strict";f.when("cr-A","cr-jQuery","cr-lazy-widget-model","cr-lazy-widget-view","cr-log-utils","cr-number-utils","cr-string-utils","cr-uri-utils","ready").register("cr-lazy-widget-controller",
function(b,d,c,a,e,h,f,k){function n(d){var h=b.getValueFromState("lazyWidgetDomainWhitelist"),g=k.getCurrentHostname();if(h)b:{for(var p=0;p<h.length;p++)if(f.endsWith(g,h[p])){e.logCount("LazyWidgetInvalidDomain",0);break b}e.logError("AJAX triggered from invalid domain: "+g,"WARN");e.logCount("LazyWidgetInvalidDomain",1)}else e.logCount("LazyWidgetInvalidDomain",1),e.logError("AJAX triggered with null whitelist from domain: "+g,"WARN");c.loadLazyWidgets(a.getLazyWidgetStubs())&&(e.logCount("LazyWidgetTrigger",
1),e.logCount("LazyWidgetTrigger:"+d,1))}var g={};g.bufferPixels=h.convertToInteger(b.getValueFromState("lazyWidgetLoaderBufferPixels"),1E3);g.delayBeforeTriggering=h.convertToInteger(b.getValueFromState("lazyWidgetLoaderDelayBeforeTriggering"),5E3);g.triggerLazyLoadIfWidgetWithinBuffer=function(e){c.lazyLoadHasTriggered()||a.getLazyWidgetStubs().each(function(a,c){if(b.onScreen(d(c),g.bufferPixels))return n("scroll"),b.off("scroll",g.triggerLazyLoadIfWidgetWithinBuffer),!1})};var p={};g.logVisibleStubMetrics=
function(c){a.getLazyWidgetStubs().each(function(a,c){a=d(c);c=a.data("widget-name");!p[c]&&b.onScreen(a)&&(e.logCount("VisibleLazyWidgetStub",1),e.logCount("VisibleLazyWidgetStub:"+c,1),p[c]=!0)})};b.on("scroll",g.logVisibleStubMetrics);b.on("scroll",g.triggerLazyLoadIfWidgetWithinBuffer);d(a.getHoverTargets()).mouseenter(function(){n("hover")});e.logCount("LazyWidgetTrigger",0);return b.freeze(g)});"use strict";f.when("cr-A","cr-ajax-model","cr-uri-utils","ready").register("cr-lazy-widget-model",
function(b,d,c){var a={},e=b.getValueFromState("lazyWidgetLoaderUrl"),h=!1;a.loadLazyWidgets=function(a){if(!h&&0<a.length){h=!0;var k=b.getValueFromState("asin"),f=b.getValueFromState("lazyWidgetCsrfToken"),g=b.getValueFromState("languageOfPreference");a=b.reduce(a,function(a,c){return a+"\x26lazyWidget\x3d"+b.$(c).data("widget-name")},e+"?asin\x3d"+k+"\x26csrf\x3d"+f+"\x26language\x3d"+g);d.postWithoutFatals(a,{success:t,cache:!1,headers:{"cache-control":"no-cache"},params:c.getUrlParametersMap()||
{}});return!0}return!1};a.lazyLoadHasTriggered=function(){return h};return b.freeze(a)});"use strict";f.when("cr-A","cr-jQuery","ready").register("cr-lazy-widget-view",function(b,d){var c={},a=b.getValueFromState("lazyWidgetLoaderHoverTargetsSelector")||"";c.getLazyWidgetStubs=function(){return d(".cr-lazy-widget")};c.getHoverTargets=function(){d(a)};return b.freeze(c)});"use strict";f.when("A").register("cr-log-utils",function(b){function d(a,b,c){l.ueLogError&&("string"!==typeof b&&(b="FATAL"),
c?l.ueLogError(c,{message:a,logLevel:b.toUpperCase(),attribution:"CustomerReviewsJS"}):l.ueLogError({message:a},{logLevel:b.toUpperCase(),attribution:"CustomerReviewsJS"}))}function c(a,b){return"string"===typeof b?b+a:"CustomerReviews:"+a}return{logError:d,jsGuard:function(a){if("function"===typeof a)return function(){try{return a.apply(this,arguments)}catch(e){d("Uncaught Error in function","FATAL",e)}};d("Unable to wrap non-function","ERROR");return a},incrementCount:function(a,b){l.ue&&(a=c(a,
b),b=l.ue.count(a)||0,l.ue.count(a,b+1))},logCount:function(a,b,d){l.ue&&(a=c(a,d),l.ue.count(a,b))}}});"use strict";f.when("A","reviews-constants").register("cr-mash-utils",function(b,d){function c(a){f.when("mash").execute(function(b){b.navstack.begin().modalOpen(a).end()})}var a=!1;f.when("mash").execute(function(){a=!0});b.declarative(d.events.OPEN_MASH_MODAL,"click",function(a){c(a.data.url);a.$event.preventDefault()});return{isMash:function(){return a},openModal:c}});"use strict";f.when("A",
"cr-log-utils").register("cr-number-utils",function(b,d){return{convertToInteger:function(b,a){if(b===parseInt(b,10))return b;if(null!==b&&b!==m&&""!==b)return parseInt(b.replace(/[^0-9]/g,""),10);if(a!==m)return a;d.logError("convertToInteger","Cannot convert "+b+" to Integer");return 0},isFiniteNumber:function(b){return"number"===typeof b&&!isNaN(b)&&isFinite(b)}}});"use strict";f.when("cr-A","reviews-constants","cr-ajax-model","cr-global-model").register("cr-reftag-utils",function(b,d,c,a){function e(a){c.postWithoutFatals(a)}
b.declarative(d.events.REFTAG_TRIGGER,"click",function(a){a.data.refMarker&&a.data.reftagTriggerUrl&&e(a.data.reftagTriggerUrl+"/ref\x3d"+a.data.refMarker)});return{triggerRefTagWithUrl:e,triggerRefTag:function(c){var d=b.getValueFromState("reftagTriggerUrl");d&&c&&e(a.generateUrl(d,c))}}});"use strict";f.when("A","cr-jQuery").register("cr-streaming-utils",function(b,d){return{appendFadeIn:function(c){if(null!==c&&2<c.length&&null!==c[1]&&null!==c[2]){var a=c[1];c=d(c[2]).hide();d(a).append(c);b.fadeIn(c,
500,"ease-in-out",function(){})}},replace:function(b){if(null!==b&&2<b.length&&null!==b[1]&&null!==b[2]){var a=b[2];d(b[1]).replaceWith(d(a))}}}});"use strict";f.when("A","cr-log-utils").register("cr-string-utils",function(b,d){function c(a){return null===a||a===m?!0:0===b.trim(a).length}return{defaultIfBlank:function(a,b){return c(a)?b:a},isBlank:c,parseJSON:function(a){try{return b.parseJSON(a)}catch(e){d.logError("Unable to parse JSON object","ERROR",e)}return null},startsWith:function(a,b){return a===
b?!0:null===a||null===b?!1:0===a.indexOf(b)},endsWith:function(a,b){if(a===b)return!0;if(null===a||null===b)return!1;var c=a.lastIndexOf(b);return-1!==c&&c===a.length-b.length},stringify:function(a){return l.JSON&&l.JSON.stringify?l.JSON.stringify(a):a}}});"use strict";f.when("A").register("cr-uri-utils",function(b){function d(){return l.location.hostname}function c(a){a=a||l.location.href;var c={},d=a.indexOf("?"),f=a.indexOf("#");a=a.slice(d+1,f>d?f:m)||"";d=[];-1<a.indexOf("\x26")?d=a.split("\x26"):
-1<a.indexOf("\x3d")&&(d=[a]);b.each(d,function(a,b){0<a.indexOf("\x3d")&&(a=a.split("\x3d"),c[a[0]]=a[1])});return c}return{getUrlParametersMap:c,addKeyValuePair:function(a,b,d){d=d||0;if(c(a)[b]===d||!a||!b)return a;b="?"+b+"\x3d"+d;return-1<a.indexOf("?")?a.replace("?",b+"\x26"):a+b},getCurrentHostname:d,getDomainRealmBaseUrl:function(a){a=a||d();if(-1!==a.indexOf(".corp.amazon.com"))return"https://development.amazon.com/";if(-1!==a.indexOf(".proxy.amazon.com")){a=a.split(".")[1];var b={dub:"https://pre-prod.amazon.co.uk/",
pdx:"https://pre-prod.amazon.co.jp/",pek:"https://pre-prod.amazon.cn/"};return b[a]!==m?b[a]:"https://pre-prod.amazon.com/"}return"/"}}});"use strict";f.when("A","reviews-constants").register("cr-weblab-utils",function(b,d){function c(a){l.ue&&l.ue.trigger&&l.ue.trigger(a.weblabID,a.treatment)}b.declarative(d.events.TRIGGER_WEBLAB,"click",function(a){a.data.weblab&&a.data.treatment&&c({weblabID:a.data.weblab,treatment:a.data.treatment})});return{triggerWeblab:c}});"use strict";f.when("cr-A","cr-jQuery",
"cr-string-utils","cr-weblab-utils","afterReady").register("cr-weblab-on-view-utils",function(b,d,c,a){function e(a,c,e){k[c]||(a=f(d(a),c,e)(),n[c]=(n[c]||[]).concat(a),b.on.scroll(a))}function f(a,c,d){return function r(){b.inView(a)&&(l(c,d),b.each(n[c]||[],function(a){b.off("scroll",a)}));return r}}function l(b,c){k[b]||(k[b]=!0,a.triggerWeblab({weblabID:b,treatment:c}))}var k={},n={};b.each(d("*[data-cr-weblab-trigger-on-scroll]"),function(a,b){a=d(a);var k=a.attr("data-cr-weblab-trigger-on-scroll");
k=c.parseJSON(k);null!==k&&(b="cr-weblab-trigger-on-scroll-"+b,a.addClass(b),e("."+b,k.weblabId,k.treatment))});return{triggerOnScrollIntoView:e,triggerWeblab:l}});"use strict";f.when("A","cr-uri-utils","cr-string-utils","3p-urijs","cr-jQuery").register("cr-extended-uri-utils",function(b,d,c,a,e){function f(){return a(l.location.href)}function m(){return f().query()}return e.extend(d,{getCurrentUri:f,getCurrentQueryString:m,getCurrentQueryParameters:function(){return a.parseQuery(m())},isAmazonDomain:function(b){if("string"===
typeof b||b instanceof String)b=a(b);var d=c.startsWith(b.domain(),"amazon");!1===d&&(b=b.hostname(),b=b.substring(b.indexOf(".")+1),d=c.startsWith(b,"amazon"));return d},setQueryParameters:function(d,e){if("string"===typeof d||d instanceof String)d=a(d);b.each(e,function(a,b){c.isBlank(a)?d.removeSearch(b):d=d.setSearch(b,a)});return d},setReftag:function(b,d){if("string"===typeof b||b instanceof String)b=a(b);for(var e=b.segment(),f=!1,h=e.length-1;0<=h;h--)if(c.startsWith(e[h],"ref\x3d")){f=!0;
e[h]="ref\x3d"+d;break}f||e.push("ref\x3d"+d);b.segment(e);return b}})});"use strict";f.when("A","cr-jQuery").register("histogram-trigger",function(b,d){function c(){b.onScreen(d("#histogramTable"))&&b.trigger("scroll")}b.on.afterLoad(c);return{triggerHistogram:c}})});
/* ******** */
(function(a){var c=window.AmazonUIPageJS||window.P,d=c._namespace||c.attributeErrors,b=d?d("CustomerReviewsMedleyAssets",""):c;b.guardFatal?b.guardFatal(a)(b,window):b.execute(function(){a(b,window)})})(function(a,c,d){a.when("A","medley-twister-view","medley-twister-model","ready").register("medley-twister-controller",function(b,e,f){function a(a){a=f.getASIN();var b=e.getDisplayedASIN();b&&a!==b&&(e.fadeReviews(!0),f.getReviews(b,function(){f.setASIN(b)},function(){},function(){e.fadeReviews(!1)}))}
var c=e.getLoadedASIN();f.setASIN(c);b.on("a:pageUpdate",a);return{onTwist:a}});"use strict";a.when("A","cr-jQuery").register("medley-twister-view",function(b,a){return{getDisplayedASIN:function(){return String(a("#ASIN").val()||"")},getLoadedASIN:function(){return(a("#cr-state-object").data("state")||{}).asin||""},fadeReviews:function(b){!1===b?a("#cm-cr-review-list .review,#most-recent-reviews-content .review").css("opacity",1):a("#cm-cr-review-list .review,#most-recent-reviews-content .review").css("opacity",
.5)}}});"use strict";a.when("A","cr-global-model","cr-ajax-model","cr-uri-utils","cr-jQuery").register("medley-twister-model",function(a,c,f,d,g){function b(a){var b=d.getUrlParametersMap()||{};b.asin=a;return b}var e;return{setASIN:function(a){e=a||""},getASIN:function(){return e},getReviews:function(a,c,e,d){var h=g("#cr-state-object").data("state");"string"===typeof a&&10===a.length?f.post(h.medleyReviewsAjaxUrl,{params:b(a),attribution:"getMedleyReviews",success:c,error:e,finallyCallback:d}):
"function"===typeof d&&d()}}})});
/* ******** */
(function(f){var g=window.AmazonUIPageJS||window.P,h=g._namespace||g.attributeErrors,b=h?h("CustomerReviewsVotingAssets",""):g;b.guardFatal?b.guardFatal(f)(b,window):b.execute(function(){f(b,window)})})(function(f,g,h){f.when("A","vote-model","vote-view","a-modal").register("vote-controller",function(b,c,a,l){function f(e,d){k(e,d);a.showElementByCssSelector(e,d.inFlight)}function k(e,d){a.hideElementByCssSelector(e,d.hideVoteComponents);d.hideAbuseComponents&&a.hideElementByCssSelector(e,d.hideAbuseComponents)}
function g(e,d){d.isReportAbuse&&(e=b.$("#mobile-abuse-"+d.voteInstanceId),l.get(e).hide());f(e,d.cssSelectors);c.submitVote(d.ajaxUrl,d.voteValue,d.voteInstanceId,d.csrfT,d.voteDimension,function(c){if(!0===c){c=e;var b=d.cssSelectors;k(c,b);a.showElementByCssSelector(c,b.onSuccess)}else c=e,b=d.cssSelectors,k(c,b),a.showElementByCssSelector(c,b.onError)},function(){var c=e,b=d.cssSelectors;k(c,b);a.showElementByCssSelector(c,b.onError)})}b.declarative("reviews:vote-action","click",function(a){g(a.$target,
a.data);a.$event.preventDefault()});return{submitVote:g}});"use strict";f.when("A","cr-ajax-model").register("vote-model",function(b,c){return{submitVote:function(a,b,f,g,h,e,d){c.post(a,{params:{voteInstanceId:f,voteValue:b,csrfT:g,voteDimension:h},attribution:"submitVote",success:e,error:d})}}});"use strict";f.when("A").register("vote-view",function(b){function c(a,c){return a.closest(".cr-vote").find(c)}return{hideThankYouAlert:function(a){c(a,".cr-vote-success").addClass("aok-hidden")},showThankYouAlert:function(a){c(a,
".cr-vote-success").removeClass("aok-hidden")},showErrorAlert:function(a){c(a,".cr-vote-error").removeClass("aok-hidden")},showFeedback:function(a){c(a,".cr-vote-feedback").removeClass("aok-hidden")},hideFeedback:function(a){c(a,".cr-vote-feedback").addClass("aok-hidden")},hideButtons:function(a){c(a,".cr-vote-buttons").addClass("aok-hidden")},hideElementByCssSelector:function(a,b){c(a,b).addClass("aok-hidden")},showElementByCssSelector:function(a,b){c(a,b).removeClass("aok-hidden")}}})});
/* ******** */
(function(g){var p=window.AmazonUIPageJS||window.P,v=p._namespace||p.attributeErrors,k=v?v("CustomerReviewsGalleryAssets",""):p;k.guardFatal?k.guardFatal(g)(k,window):k.execute(function(){g(k,window)})})(function(g,p,v){g.when("A","load").register("review-image-asset-loader",function(k){var a=!1;k.ajax("/gp/customer-reviews/aj/private/reviewsGallery/get-image-gallery-assets",{method:"post",success:function(w){g.load.css(w.reviewsLightboxCSS);var c=document.createElement("script");c.type="text/javascript";
c.async=!0;c.setAttribute("crossorigin","anonymous");c.src=w.reviewsLightboxJS;document.getElementsByTagName("head")[0].appendChild(c);a=!0;g.register("review-image-assets-loaded",{})},error:function(){var a="/gp/customer-reviews/aj/metrics/log-values?noCache\x3d"+(new Date).getTime();a+="\x26SimpleStack:ReviewImageAssetLoaderFailure\x3d1";p.Image&&((new Image).src=a)}});return{isLoaded:function(){return a}}});"use strict";g.when("A","cr-jQuery","cr-log-utils","reviews-constants","review-image-assets-loaded").register("review-image-binder",
function(k,a,w,c){function x(f,l,b,d,c){if(!(f&&l&&b instanceof a&&d instanceof a&&c instanceof a))return w.logError("Invalid parameters for imageBinder.initializeEventHandlers with ASIN: "+f+", galleryName: "+l+", $popoverTrigger: "+b+", $thumbnails: "+d+", $galleryLink: "+c,"FATAL"),!1;var h="reviewsLightbox-ready-"+l;d.click(function(){n(f,l);var c=d.index(this);b.click();g.when(h).execute(function(){a("#"+l).trigger("jumpToImageAtIndex",c)})});c.click(function(){n(f,l);b.click();g.when(h).execute(function(){a("#"+
l).trigger("hideImmersiveView")})});return!0}function n(a,b){if(!a||!b)return w.logError("Invalid parameters for imageBinder.initializeImageGallery with ASIN: "+a+", galleryName: "+b,"FATAL"),!1;if(d)return!0;(new ReviewsLightbox(b,"DESKTOP")).initializeForAsin(a);return d=!0}var d=!1,b={};g.when("reviewsLightbox-js").execute(function(){var f=a("#reviews-image-gallery-container"),b=f.attr("data-asin");0<f.length&&b&&x(b,"reviews-image-gallery",f.find(".a-popover-trigger"),f.find(".review-image-tile"),
f.find(".reviews-image-gallery-link"))});k.on(c.events.RELOAD_COMPLETE,function(){b={}});return{bindReview:function(f,d,c){var n=new ReviewGallery(c,"DESKTOP"),l=a("#"+d);l.find(".review-image-tile").each(function(d){a(this).click(function(){b[f]||(n.initializeForReview(f),b[f]=!0);l.find(".a-popover-trigger").click();g.when("reviewsLightbox-ready-"+c).execute(function(){n.render();n.showImageAtIndex(d)})})})},initializeImageGallery:n,initializeEventHandlers:x}});"use strict";g.when("A","cr-jQuery").register("cr-image-popover-controller",
function(k,a){function g(){for(var e=0;e<u.length;e++)a(u[e]).unbind("click"),a(u[e]).removeClass("cr-lightbox-selected"),a(u[e]).click(c(e))}function c(e){return function(){f(e)}}function x(e){a(u[r]).removeClass("cr-lightbox-selected");a(u[e]).addClass("cr-lightbox-selected")}function n(){a(y).unbind("click");a(z).unbind("click");a(y).click(function(){var e=parseInt(r,10)+1;f(e);d()});a(z).click(function(){var e=parseInt(r,10)-1;f(e);d()});a(A).mouseenter(function(){d()}).mouseleave(function(){v.animate({opacity:0},
100);B.animate({opacity:0},100)})}function d(){var e=.25,b=.25;a(y).css("cursor","pointer");a(z).css("cursor","pointer");if(h&&r===t.length-1&&m===h.length-1||!h&&r===t.length-1)e=0,a(y).css("cursor","auto");if(h&&0===r&&0===m||!h&&0===r)b=0,a(z).css("cursor","auto");v.animate({opacity:e},100);B.animate({opacity:b},100)}function b(e){q=a("#"+e+"_image_popover");v=q.find(".cr-lightbox-navigator-button__next");B=q.find(".cr-lightbox-navigator-button__back");y=q.find(".cr-lightbox-navigator-container__next");
z=q.find(".cr-lightbox-navigator-container__back");u=q.find(".cr-lightbox-image-thumbnail");A=q.find(".cr-lightbox-image-viewer");E=A.find(".cr-lightbox-main-image");F=q.find(".cr-lightbox-review-title");G=q.find(".cr-lightbox-review-body");H=q.find(".cr-lightbox-review-origin");C=q.find(".cr-lightbox-review-rating");D=q.find(".cr-lightbox-image-thumbnails")}function f(e){if(0<=e&&e<t.length)E.attr("src",t[e]),x(e),r=e;else if(h)a:{if(e>=t.length&&m+1<h.length)m++,r=0;else if(0>e&&0<m)m--,r=h[m].images.length-
1;else break a;t=h[m].images;F.text(h[m].title);C.removeClass();C.addClass("a-icon a-icon-star a-star-"+h[m].starRating+" cr-lightbox-review-rating");l();G.text(h[m].body);H.text(h[m].originDescription);g();f(r);x(r);n()}}function l(){a(D).empty();t.forEach(function(e){a(D).append('\x3cimg src\x3d"'+e+'" class\x3d"cr-lightbox-image-thumbnail"/\x3e')});u=q.find(".cr-lightbox-image-thumbnail")}function I(e){if(e){for(var a=0;a<h.length&&!(e<h[a].images.length);a++)e-=h[a].images.length;return e}}function p(a){return a&&
a.popover&&a.popover.$trigger&&a.popover.$trigger.context&&(a=a.popover.$trigger.context.id)&&(a=a.split("-"),2===a.length)?{reviewId:a[0],thumbnailIndex:parseInt(a[1],10)}:{}}var t,h,r=0,m=0,q,v,B,y,z,u,A,E,F,G,H,C,D;return{initImagePopover:function(a,d,c){m=h=null;b(a);t=d.substring(1,d.length-1).split(",");g();f(p(c).thumbnailIndex||0);n()},initImageGalleryPopover:function(a,d){d=p(d);var e=Object.keys(a);h=[];e.forEach(function(b){h.push(a[b])});m=e.indexOf(d.reviewId);b(h[m].reviewId);t=h[m].images;
l();g();f(I(d.thumbnailIndex)||0);n()}}});"use strict";g.when("A","cr-media-gallery-view","cr-jQuery").register("cr-media-gallery-controller",function(g,a,w){function c(){return 480<w(p).width()?3:2}function k(){var b=a.getCurrentMasonryItems(),f=c();if(0<b.length){a.addMasonryListColumnSeparators(f);var l=Math.ceil(b.length/f);a.setMasonryListHeight(l*d,"%",l*n);b=a.getPreciseMaxMasonryListHeightItems(b,f);a.setMasonryListHeight(b.heightInPixelOfColumn,"px",b.nItemInColumn*n)}}g.on("resize",k);var n=
8,d=177;return{initialize:k,getNoOfColumns:c}});"use strict";g.when("A","cr-jQuery").register("cr-media-gallery-view",function(g,a){function k(){g.objectIsEmpty(c)&&(c=a(".cr-mg-masonry-list"));return c}var c=null,p=null;return{getCurrentMasonryItems:function(){return k().find(".cr-mg-masonry-item")},setMasonryListHeight:function(c,d,b){g.objectIsEmpty(p)&&(p=a(".cr-mg-masonry-list-height-control"));var f=p.get(0);f&&(f.style.setProperty("--height-to-column-width",c+d),f.style.setProperty("--height-in-pixel",
b+"px"))},getPreciseMaxMasonryListHeightItems:function(c,d){for(var b=Array(d),f=Array(d),g=0;g<d;g++)b[g]=0,f[g]=0;var k=0;c.each(function(){var c=a(this).children(".cr-mg-ratio-control");b[k%d]+=c.get(0).getBoundingClientRect().height;f[k%d]+=1;k++});c=b.indexOf(Math.max.apply(Math,b));return{heightInPixelOfColumn:b[c],nItemInColumn:f[c]}},addMasonryListColumnSeparators:function(c){for(var d=k(),b=0;b<c-1;b++){var f=a("\x3cdiv /\x3e").attr("style","order: "+b+";height: 100%;");d.append(f)}}}})});
/* ******** */
(function(g){var m=window.AmazonUIPageJS||window.P,p=m._namespace||m.attributeErrors,e=p?p("CustomerReviewsFilteringAssets",""):m;e.guardFatal?e.guardFatal(g)(e,window):e.execute(function(){g(e,window)})})(function(g,m,p){g.when("cr-A","cr-jQuery","cr-filtering-view","cr-filtering-model","cr-global-view","reviews-constants","cr-streaming-utils").register("cr-filtering-controller",function(e,f,b,d,l,c,k){function h(n){var a=!1,c=!1;n.toggleFilters&&(c=!0);d.setASIN(b.getLoadedFilterParam("asin"));
a=d.setReviewerType(n.reviewerType,c)||a;a=d.setFormatType(n.formatType,c)||a;a=d.setFilterByKeyword(n.filterByKeyword,c)||a;a=d.setFilterByLanguage(n.filterByLanguage,c)||a;a=d.setSortOrder(n.sortOrder,c)||a;a=d.setStarFilter(n.filterByStar,c)||a;a=d.setPageNumber(n.pageNumber,c)||a;a=d.setHeightFilter(n.filterByHeight,c)||a;return a=d.setWeightFilter(n.filterByWeight,c)||a}function q(a){if(h(a.data)||a.data.forceReload)a.data.sortOrder&&b.setSortDropdown(a.data.sortOrder),b.hideReviewLoadError(),
b.hideReviews(),b.showLoadingSpinner(),e.trigger(c.events.FILTER_APPLY_BEGIN,a),d.getReviews(function(){b.showReviews();"filterByHeight"===d.getActiveTab()&&b.scrollToFilterIndex("filterByHeight");"filterByWeight"===d.getActiveTab()&&b.scrollToFilterIndex("filterByWeight");e.trigger(c.events.FILTER_APPLY_SUCCESS,a)},function(){b.showReviewLoadError();e.trigger(c.events.FILTER_APPLY_ERROR,a)},function(){b.hideLoadingSpinner();e.trigger(c.events.FILTER_APPLY_DONE,a);e.trigger(c.events.RELOAD_COMPLETE)},
function(a){"appendFadeIn"===a[0]?k.appendFadeIn(a):"replace"===a[0]&&k.replace(a)},l.getReftag(a)),a.data.scrollToSelector&&l.scrollTo(a.data.scrollToSelector,0)}function g(a){a&&a.data&&q(a)}function a(a){a&&a.data&&a.$target&&a.data.filterType&&(a.data[a.data.filterType]=a.$target.val(),q(a))}function r(a){a&&a.data&&a.data.filterType&&(b.deactivateFilterTabHeaders(),b.activateFilterTabHeader(a.data.filterType),b.changeFilterOptionsTo(a.data.filterType),d.setActiveTab(a.data.filterType),"filterByHeight"!==
a.data.filterType&&"filterByWeight"!==a.data.filterType||b.scrollToFilterIndex(a.data.filterType))}d.setReviewsAjaxUrl(b.getReviewsAjaxUrl());b.enableDesktopDPFilterDropdown();e.declarative(c.events.FILTER_APPLY,"click",e.compositeEventWrapper(g,!0,100));e.declarative(c.events.FILTER_CHANGE,"change",e.compositeEventWrapper(a,!0,100));e.declarative(c.events.FILTER_TAB_CLICKED,"click",r);d.setReviewerType(b.getLoadedFilterParam("reviewerType"),!1);d.setFormatType(b.getLoadedFilterParam("formatType"),
!1);d.setFilterByKeyword(b.getLoadedFilterParam("filterByKeyword"),!1);d.setFilterByLanguage(b.getLoadedFilterParam("filterByLanguage"),!1);d.setStarFilter(b.getLoadedFilterParam("filterByStar"),!1);d.setSortOrder(b.getLoadedFilterParam("sortOrder"),!1);d.setPageNumber(b.getLoadedFilterParam("pageNumber"),!1);d.setHeightFilter(b.getLoadedFilterParam("filterByHeight"),!1);d.setWeightFilter(b.getLoadedFilterParam("filterByWeight"),!1);d.setLanguage(b.getLoadedFilterParam("languageOfPreference"));b.getLoadedFilterParam("showLanguageFilter")?
d.setActiveTab("filterByLanguage"):b.getLoadedFilterParam("showHeightFilter")&&(d.setActiveTab("filterByHeight"),b.scrollToFilterIndex("filterByHeight"));return{setFilterParams:h,onFilterApply:g,onFilterChange:a,onFilterTabClicked:r}});"use strict";g.when("A","cr-ajax-model","ready").register("cr-filtering-model",function(e,f){function b(){return h.asin||""}function d(){return g||""}function l(a,c){c?h[a]=c:delete h[a]}function c(a,c,b){var d=!1;a&&c!==p&&(d=k(a)!==c,!d&&b&&(c="CLEAR_VALUE",d=!0),
l(a,c));return d}function k(a){return h[a]||""}var h={},g="",m;return{getReviews:function(a,c,b,d,l){var e=g;m&&f.abort(m);l&&(e+="ref\x3d"+l);m=f.post(e,{params:h,attribution:"getFilteredReviews",success:a,error:c,finallyCallback:function(){b();m=0},chunk:d})},setASIN:function(a){var c=b()!==a;l("asin",a);return c},getASIN:b,setReviewsAjaxUrl:function(a){var c=d()!==a;g=a||"";return c},getReviewsAjaxUrl:d,setReviewerType:function(a,b){return c("reviewerType",a,b)},getReviewerType:function(){return k("reviewerType")},
setFormatType:function(a,b){return c("formatType",a,b)},getFormatType:function(){return k("formatType")},setFilterByKeyword:function(a,b){return c("filterByKeyword",a,b)},getFilterByKeyword:function(){return k("filterByKeyword")},setFilterByLanguage:function(a,b){return c("filterByLanguage",a,b)},getFilterByLanguage:function(){return k("filterByLanguage")},setSortOrder:function(a,b){return c("sortBy",a,b)},getSortOrder:function(){return k("sortBy")},setStarFilter:function(a,b){return c("filterByStar",
a,b)},getStarFilter:function(){return k("filterByStar")},setPageNumber:function(a,b){return c("pageNumber",a,b)},getPageNumber:function(){return k("pageNumber")},setHeightFilter:function(a,b){return c("filterByHeight",a,b)},getHeightFilter:function(){return k("filterByHeight")},setWeightFilter:function(a,b){return c("filterByWeight",a,b)},getWeightFilter:function(){return k("filterByWeight")},getFilterParams:function(){return h||{}},updateFilterParam:l,setActiveTab:function(a){return l("activeTab",
a)},getActiveTab:function(){return k("activeTab")},setLanguage:function(a){return l("language",a)}}});"use strict";g.when("cr-A","cr-jQuery","a-dropdown","ready").register("cr-filtering-view",function(e,f,b){function d(b){return(f("#cr-state-object").data("state")||{})[b]||""}return{getReviewsAjaxUrl:function(){return(f("#cr-state-object").data("state")||{}).reviewsAjaxUrl||""},showLoadingSpinner:function(){var b=e.getValueFromState("onLoadShowHideElements");f(b).removeClass("aok-hidden")},hideLoadingSpinner:function(){var b=
e.getValueFromState("onLoadShowHideElements");f(b).addClass("aok-hidden")},hideReviews:function(){f(".filterable-reviews-content").addClass("aok-hidden")},showReviews:function(){f(".filterable-reviews-content").removeClass("aok-hidden")},showReviewLoadError:function(){f(".review-load-error").removeClass("aok-hidden")},hideReviewLoadError:function(){f(".review-load-error").addClass("aok-hidden")},deactivateFilterTabHeaders:function(){f(".cr-tab-header-text").removeClass("cr-tab-active")},activateFilterTabHeader:function(b){f(".cr-tab-header-text-"+
b).addClass("cr-tab-active")},changeFilterOptionsTo:function(b){f(".cr-tab-content").addClass("aok-hidden");f(".cr-tab-content-"+b).removeClass("aok-hidden")},getLoadedFilterParam:d,setSortDropdown:function(d){b.getSelect("cm-cr-sort-dropdown").setValue(d)},scrollToFilterIndex:function(b){var c;c=0;var e;e=d("isCardTreatmentEnabled")?f(".cr-horizontal-scroll-list-cardify-padding ul \x3e *:first-child"):f(".cr-horizontal-scroll-list-padding ul \x3e *:first-child");var h=f(m).width();b=f("ul#"+b+"-button-list")[0];
if(e===p||h===p||b===p)c=-1;else{var g=parseInt(b.dataset.index);e=parseInt(e.css("padding-left").replace("px",""));if(-1!==g){c=e-h/2;for(h=0;h<g;h++)c+=f("#"+b.children[h].firstElementChild.id).outerWidth(!0);c+=f("#"+b.children[g].firstElementChild.id).outerWidth(!0)/2}}0>c||f(".cr-filter-scroll-container").animate({scrollLeft:c},50)},enableDesktopDPFilterDropdown:function(){f("#cm-cr-dp-review-sort-type").removeClass("aok-hidden")}}});"use strict";g.when("cr-A","cr-lighthut-terms-view","reviews-constants",
"cr-log-utils").register("cr-lighthut-terms-controller",function(e,f,b,d){function g(b){b&&b.filterByKeyword!==p&&(f.setSelected(b.filterByKeyword),d.incrementCount("LighthutTermClicked"))}e.on(b.events.FILTER_APPLY_BEGIN,e.compositeEventWrapper(function(b){b&&b.data&&g(b.data)}));return{onFilterApplied:g}});"use strict";g.when("A","cr-jQuery","ready").register("cr-lighthut-terms-view",function(e,f){return{setSelected:function(b){b=b.replace(/ /g,"_");var d=(b=f("#cr-lighthouse-term-"+b))&&b.hasClass("cr-lighthut-term-selected");
f(".cr-lighthut-term-selected").removeClass("cr-lighthut-term-selected");d||b.addClass("cr-lighthut-term-selected")}}})});
/* ******** */
