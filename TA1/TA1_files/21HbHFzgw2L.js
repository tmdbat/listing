(function(c){var g=window.AmazonUIPageJS||window.P,k=g._namespace||g.attributeErrors,a=k?k("AllOffersDisplayIngressAssets",""):g;a.guardFatal?a.guardFatal(c)(a,window):a.execute(function(){c(a,window)})})(function(c,g,k){c.execute("all-offers-display-ingress-init",function(){c.when("A","jQuery","all_offers_display_ingress_utils","all-offers-display-register-state","all_offers_display_ingress_csm_counters").execute("all_offers_display_ingress_load_AOD_assets",function(a,b,e,h,d){function f(a){c.now().execute(function(b){b!==
k||h.isMarkerOverrideRegistered()||("function"===typeof l&&l("bb","aod-main-assets-injection",{wb:1}),c.register("aodIngressClick"),c.register("aodDeclarativeEvent",function(){return a}),h.setMarkerOverrideTriggered())})}var l=g.uet;a.state("aod:assetsLoaded",{isAodAssetsLoaded:!0});d.triggerUnitCounter("aodIngressAssetsLoadCtr");a.declarative("show-all-offers-display","click",function(b){b.$event.preventDefault();b.$event.stopPropagation();a.state("aod:assets2Loaded")?c.when("aod-load-event-handler").execute(function(a){a.renderAodAction(b)}):
e.isClickOnAODIngressSupported(b)&&(f(b),c.when("aod-load-event-handler","aodDeclarativeEvent").execute(function(a,b){a.renderAodAction(b)}))});a.declarative("s-show-all-offers-display","click",function(b){b.$event.preventDefault();b.$event.stopPropagation();!a.state("aod:assets2Loaded")&&e.isClickOnAODIngressSupported(b)&&(f(b),c.when("search-all-offers-display-util","aodDeclarativeEvent").execute(function(a,b){a.searchOnClickHandler(b)}))});a.declarative("all-offers-display-show-from-morpheus",
"click",function(b){b.$event.preventDefault();b.$event.stopPropagation();!a.state("aod:assets2Loaded")&&e.isClickOnAODIngressSupported(b)&&(f(b),c.when("all-offers-display-morpheus-util","aodDeclarativeEvent").execute(function(b,a){b.openAODFromMorpheus(a)}))})});c.when("A","jQuery","all-offers-display-register-state","all_offers_display_ingress_csm_counters").execute("all-offers-display-enable-compare",function(a,b,e,h){var d=g.uet;a.state("aod:assets2Loaded")||(a=g.location.href.split("?"),1<a.length&&
(a=a[1].toLowerCase().split(/[&,#]/))&&-1!==a.indexOf("aod\x3d1")&&c.now().execute(function(b){b===k&&(e.isMarkerOverrideRegistered()?h.incrementAndTriggerCounter("aodAutoLoadMarkerOverrideSetCtr"):(h.triggerUnitCounter("aodAutoLoadAssetsRequestedCtr"),"function"===typeof d&&d("bb","aod-main-assets-injection-auto-load",{wb:1}),c.register("aodIngressClick"),e.setMarkerOverrideTriggered()))}))});c.when("A","jQuery","all_offers_display_ingress_olp_hyperlink").register("all_offers_display_ingress_utils",
function(a,b,c){return{isClickOnAODIngressSupported:function(b){return c.getOlpHyperlink(b)?!0:!1}}});c.register("all_offers_display_ingress_csm_counters",function(){var a=g.ue;return{incrementAndTriggerCounter:function(b){a&&a.count&&a.count(b,(a.count(b)||0)+1)},triggerUnitCounter:function(b){a&&a.count&&a.count(b,1)}}});c.when("all_offers_display_ingress_csm_counters").register("all_offers_display_ingress_aod_supported",function(a){return{isPropertySupported:function(b,e,h){var d=typeof b[e]===
h;if(!d){var f={};b.tagName&&(f.tagName=b.tagName);b.getAttribute&&"function"===typeof b.getAttribute&&(b.getAttribute("id")&&(f.id=b.getAttribute("id")),b.getAttribute("class")&&(f.class=b.getAttribute("class")),b.getAttribute("href")&&(f.href=b.getAttribute("href")));b="aodPropertyUnsupportedMessage, element: "+JSON.stringify(f);c.log(b+(", propertyName: "+e+", propertyType: "+h),"WARN","aodPropertyUnsupportedMessage");a.triggerUnitCounter("aodPropertyUnsupportedMessage")}return d}}});c.when("A",
"jQuery","all_offers_display_ingress_aod_supported").register("all_offers_display_ingress_olp_hyperlink",function(a,b,c){return{getOlpHyperlink:function(a){if(a&&a.$event&&a.$event.target){var d=a.$event.target;if("A"===d.nodeName&&d.href)return d.href;if(c.isPropertySupported(a.$event.target,"closest","function"))return(a=d.closest("a"))?a.href:null;if(a=b(d).closest("a"))return a.attr("href")}return null}}});c.when("A","jQuery").register("all-offers-display-register-state",function(a,b){var c=!1;
return{isMarkerOverrideRegistered:function(){return c},setMarkerOverrideTriggered:function(){c=!0}}})})});