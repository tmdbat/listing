(function(c){var h=window.AmazonUIPageJS||window.P,k=h._namespace||h.attributeErrors,b=k?k("AllOffersDisplayIngressAssets",""):h;b.guardFatal?b.guardFatal(c)(b,window):b.execute(function(){c(b,window)})})(function(c,h,k){c.execute("all-offers-display-ingress-init",function(){c.when("A","jQuery","all_offers_display_ingress_utils","all-offers-display-register-state","all_offers_display_ingress_csm_counters").execute("all_offers_display_ingress_load_AOD_assets",function(b,a,e,g,d){function f(b){c.now().execute(function(a){a!==
k||g.isMarkerOverrideRegistered()||(c.register("aodIngressClick"),c.register("aodDeclarativeEvent",function(){return b}),g.setMarkerOverrideTriggered())})}b.state("aod:assetsLoaded",{isAodAssetsLoaded:!0});d.triggerUnitCounter("aodIngressAssetsLoadCtr");b.declarative("show-all-offers-display","click",function(a){a.$event.preventDefault();a.$event.stopPropagation();!b.state("aod:assets2Loaded")&&e.isClickOnAODIngressSupported(a)&&(f(a),c.when("aod-load-event-handler","aodDeclarativeEvent").execute(function(b,
a){a&&a.data&&(a.data.pc="dp");b.renderAodAction(a)}))});b.declarative("s-show-all-offers-display","click",function(a){a.$event.preventDefault();a.$event.stopPropagation();!b.state("aod:assets2Loaded")&&e.isClickOnAODIngressSupported(a)&&(f(a),c.when("search-all-offers-display-util","aodDeclarativeEvent").execute(function(a,b){a.searchOnClickHandler(b)}))});b.declarative("all-offers-display-show-from-morpheus","click",function(a){a.$event.preventDefault();a.$event.stopPropagation();!b.state("aod:assets2Loaded")&&
e.isClickOnAODIngressSupported(a)&&(f(a),c.when("all-offers-display-morpheus-util","aodDeclarativeEvent").execute(function(a,b){a.openAODFromMorpheus(b)}))})});c.when("A","jQuery","all-offers-display-register-state","all_offers_display_ingress_csm_counters").execute("all-offers-display-enable-compare",function(b,a,e,g){b.state("aod:assets2Loaded")||(b=h.location.href.split("?"),1<b.length&&(b=b[1].toLowerCase().split(/[&,#]/))&&-1!==b.indexOf("aod\x3d1")&&c.now().execute(function(a){a===k&&(e.isMarkerOverrideRegistered()?
g.incrementAndTriggerCounter("aodAutoLoadMarkerOverrideSetCtr"):(g.triggerUnitCounter("aodAutoLoadAssetsRequestedCtr"),c.register("aodIngressClick"),e.setMarkerOverrideTriggered()))}))});c.when("A","jQuery","all_offers_display_ingress_olp_hyperlink").register("all_offers_display_ingress_utils",function(b,a,c){return{isClickOnAODIngressSupported:function(a){return c.getOlpHyperlink(a)?!0:!1}}});c.register("all_offers_display_ingress_csm_counters",function(){var b=h.ue;return{incrementAndTriggerCounter:function(a){b&&
b.count&&b.count(a,(b.count(a)||0)+1)},triggerUnitCounter:function(a){b&&b.count&&b.count(a,1)}}});c.when("all_offers_display_ingress_csm_counters").register("all_offers_display_ingress_aod_supported",function(b){return{isPropertySupported:function(a,e,g){var d=typeof a[e]===g;if(!d){var f={};a.tagName&&(f.tagName=a.tagName);a.getAttribute&&"function"===typeof a.getAttribute&&(a.getAttribute("id")&&(f.id=a.getAttribute("id")),a.getAttribute("class")&&(f.class=a.getAttribute("class")),a.getAttribute("href")&&
(f.href=a.getAttribute("href")));a="aodPropertyUnsupportedMessage, element: "+JSON.stringify(f);c.log(a+(", propertyName: "+e+", propertyType: "+g),"WARN","aodPropertyUnsupportedMessage");b.triggerUnitCounter("aodPropertyUnsupportedMessage")}return d}}});c.when("A","jQuery","all_offers_display_ingress_aod_supported").register("all_offers_display_ingress_olp_hyperlink",function(b,a,c){return{getOlpHyperlink:function(b){if(b&&b.$event&&b.$event.target){var d=b.$event.target;if("A"===d.nodeName&&d.href)return d.href;
if(c.isPropertySupported(b.$event.target,"closest","function"))return(b=d.closest("a"))?b.href:null;if(b=a(d).closest("a"))return b.attr("href")}return null}}});c.when("A","jQuery").register("all-offers-display-register-state",function(b,a){var c=!1;return{isMarkerOverrideRegistered:function(){return c},setMarkerOverrideTriggered:function(){c=!0}}})})});