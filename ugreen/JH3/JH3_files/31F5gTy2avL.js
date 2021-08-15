var LoggingClientManager=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SOURCE_ID_TO_NAME_MAPPING=void 0,t.SOURCE_ID_TO_NAME_MAPPING={650:"Twitch",651:"Twitch",652:"Twitch",3036:"Twitch",3802:"Twitch",3848:"Twitch"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.VISUAL_COMPLETENESS_LATENCY=t.CREATIVE_LOAD_LATENCY=t.UNCAUGHT_ERROR=void 0;const i="uncaughtError";t.UNCAUGHT_ERROR=i;const r="creativeLoadLatency";t.CREATIVE_LOAD_LATENCY=r;const o="visualCompletenessLatency";t.VISUAL_COMPLETENESS_LATENCY=o,t.default=class{constructor(e){if(this.events={uncaughtError:{}},this.timers={},this.onNewError=function(){},this.window=e&&e.window||"undefined"!=typeof window&&window,!this.window||!this.window.document)throw new Error("Window and/or document is not defined");this.trackLoadLatency(),this.trackVisualCompletenessLatency(),this.addErrorListener()}trackLoadLatency(){this.timers[r]=new Date}trackVisualCompletenessLatency(){this.timers[o]=new Date}addErrorListener(){const e=this.events[i];this.addListener(this.window,"error",t=>{let n=t.message;if(t.error&&t.error.stack){const e=`${t.message} : ${t.error.stack}`;n=e.length<500?e:e.substring(0,500)}void 0===e[n]&&(e[n]=!0,this.onNewError(n))})}addListener(e,t,n){const i=function(e=window.event){return n(e)};if(e.addEventListener)e.addEventListener(t,i,!0);else if(t="on"+t,e.attachEvent)e.attachEvent(t,i);else{const n=e[t];e[t]=function(){i.apply(this,arguments),"function"==typeof n&&n.apply(this,arguments)}}}}},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(n(8)),r=u(n(9)),o=n(0),s=n(4),a=u(n(5)),c=n(1);function u(e){return e&&e.__esModule?e:{default:e}}t.default=class{constructor(e,t){if(this.window=e.window||"undefined"!=typeof window&&window,!this.window||!this.window.document)throw new Error("Window and/or document is not defined");this.cemLogger=e.cemLogger||new i.default({renderId:e.renderId,supplySource:o.SOURCE_ID_TO_NAME_MAPPING[e.sourceId],isDebug:e.isDebug,stage:e.stage,market:e.locale,templateName:e.templateName}),this.aid=e.adId,this.cid=e.creativeId;var n=e.isPDACreative||.05<Math.random();if(e.currentDate){var r=.5<Math.random();const t=new Date(e.currentDate);var s=t.getUTCHours(),c=t.getUTCMinutes();this.suppressViewabilityEventLogging=e.isPDACreative||r&&(4===s||5===s&&c<30)}this.visualCompleteness=new a.default(e.requiredElementsForVisualCompleteness,n),this.requiredElementsForVisualCompleteness=e.requiredElementsForVisualCompleteness,this.preDefinedUrlsForVisualCompleteness=e.preDefinedUrlsForVisualCompleteness,e.isPDACreative||this.cemLogger.logImpression(),this.performanceEventManager=t,n||this.trackLoadLatency(),this.trackVisualCompletenessLatency(),this.attachGlobals(),this.addErrorListener()}attachGlobals(){this.window.document.ad={aid:this.aid,cid:this.cid},this.window.CemLogger=this.cemLogger,this.window.Viewability=r.default,this.window.VisualCompleteness=this.visualCompleteness}trackVisualCompletenessLatency(){this.visualCompleteness.startTimer(this.performanceEventManager.timers[c.VISUAL_COMPLETENESS_LATENCY]),this.requiredElementsForVisualCompleteness.forEach(e=>{if(this.preDefinedUrlsForVisualCompleteness[e]){const t=new Image;t.onload=()=>{this.visualCompleteness.endTimer(e)},t.src=this.preDefinedUrlsForVisualCompleteness[e]}})}trackLoadLatency(){this.performanceEventManager.addListener(this.window,"load",()=>{var e=new Date-this.performanceEventManager.timers[c.CREATIVE_LOAD_LATENCY];this.cemLogger.logPerformanceEvent(s.CEM_LOGGER_METRICS.EVENT_NAMES.CREATIVE_LOAD_LATENCY,e)})}addErrorListener(){var e=e=>{this.cemLogger.logPerformanceEvent(s.CEM_LOGGER_METRICS.EVENT_NAMES.UNCAUGHT_ERROR,e)};this.performanceEventManager.onNewError=e;for(const t in this.performanceEventManager.events[c.UNCAUGHT_ERROR])e(t)}addViewabilityListener(e){const t=new r.default(e,this.window);this.suppressViewabilityEventLogging||(t.getPercentInView()<=-1?this.cemLogger.logEvent({eventName:s.CEM_LOGGER_METRICS.EVENT_NAMES.VIEWABILITY_FAILURE,eventType:s.CEM_LOGGER_METRICS.EVENT_TYPES.VIEWABILITY,componentType:s.CEM_LOGGER_METRICS.COMPONENT_TYPES.CREATIVE,componentName:s.CEM_LOGGER_METRICS.COMPONENT_TYPES.CREATIVE}):t.onView(.5,1e3,()=>{this.cemLogger.logEvent({eventName:s.CEM_LOGGER_METRICS.EVENT_NAMES.IN_VIEW,eventType:s.CEM_LOGGER_METRICS.EVENT_TYPES.VIEWABILITY,componentType:s.CEM_LOGGER_METRICS.COMPONENT_TYPES.CREATIVE,componentName:s.CEM_LOGGER_METRICS.COMPONENT_TYPES.CREATIVE})}))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CEM_LOGGER_METRICS=void 0,t.CEM_LOGGER_METRICS={EVENT_TYPES:{VIEWABILITY:"viewability",CLICK_THROUGH:"click_through"},EVENT_NAMES:{AAN_LATENCY:"aanLatency",AAN_ERROR:"aanError",UNCAUGHT_ERROR:"uncaughtError",CREATIVE_LOAD_LATENCY:"creativeLoadLatency",IN_VIEW:"inView",VIEWABILITY_FAILURE:"viewabilityFailure",CREATIVE_CLICK:"creativeClick",NAVIGATION_ATTEMPT:"navigationAttempt",NAVIGATION_ERROR:"navigationError",NAVIGATION_INFO:"navigationInfo"},COMPONENT_TYPES:{CREATIVE:"creative"}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=class{constructor(e,t){this.timer=null,this.initializeEvents(e),this.latencies={},this.suppressEventLogging=t,this.isComplete=!1,this.handleTimeout()}initializeEvents(e){this.events={},e.forEach(e=>this.addTimer(e))}handleTimeout(){this.timeout=setTimeout(()=>{this.clearInvalidTimers(),this.logEvents()},2500)}startTimer(e){this.timer=e}endTimer(e){if(null===this.timer)throw new Error("You must call startTimer() before calling endTimer()");void 0!==this.events[e]&&0!==this.events[e]&&(this.events[e]--,0===this.events[e]&&(this.latencies[e]=new Date-this.timer,this.validateComplete()))}addTimer(e){void 0===this.events[e]&&(this.events[e]=0),this.events[e]++}skipTimer(e){void 0!==this.events[e]&&0!==this.events[e]&&(this.events[e]--,0===this.events[e]&&void 0===this.latencies[e]&&delete this.events[e],0===this.events[e]&&this.validateComplete())}clearInvalidTimers(){Object.keys(this.events).forEach(e=>{void 0===this.latencies[e]&&delete this.events[e]})}validateComplete(){this.isComplete=Object.keys(this.events).every(e=>void 0!==this.latencies[e]),this.isComplete&&this.logEvents()}logEvents(){clearTimeout(this.timeout);var e=new Date-this.timer;window&&window.CemLogger&&!this.suppressEventLogging&&(Object.keys(this.events).forEach(e=>{window.CemLogger.logBatchedPerformanceEvent(e+"Latency",this.latencies[e])}),this.isComplete?window.CemLogger.logBatchedPerformanceEvent("visualCompleteness",e):window.CemLogger.logMetric("visualCompleteness",{subtype:"visualCompletenessFailure",value:1}))}}},,,function(e,t,n){"use strict";n.r(t);var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,i=arguments[t];for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),"object"===(void 0===e?"undefined":r(e))?this.configure(e):this.oldConfig.apply(this,arguments)}(function(e,t,n){t&&o(e.prototype,t)})(s,[{key:"oldConfig",value:function(e,t,n,i){this.configure({renderId:e,isDebug:t,stage:n,market:i})}},{key:"configure",value:function(e){var t=e.sampleRate,n=e.batchTimeout;e=function(e,t){var n,i={};for(n in e)0<=t.indexOf(n)||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}(e,["sampleRate","batchTimeout"]),n="number"==typeof n?n:50;this.enabled="number"!=typeof t||Math.random()<t,i(this,e),this.bufferedMetrics=[],this.timers={},this.setCemEndpoint(),this.setDebouncedLogBatchMetrics(n)}},{key:"setCemEndpoint",value:function(){var e=function(e,t){if(!e||!t)throw new Error("aan endpoint could not be identified. All arguments are required: "+JSON.stringify({stage:e,market:t})+".");var n=function(e){switch(e){case"US":case"CA":case"MX":case"BR":return"na";case"UK":case"DE":case"FR":case"IT":case"ES":case"IN":case"AE":case"NL":case"SA":return"eu";case"JP":case"AU":case"SG":return"fe";case"CN":return"cn"}}(t);switch(e){case"prod":var i=function(e){return"amazon."+function(e){switch(e){case"US":return"com";case"MX":return"com.mx";case"UK":return"co.uk";case"JP":return"co.jp";case"AU":return"com.au";case"AE":return"ae";case"SA":return"sa";case"BR":return"com.br";case"NL":return"nl";case"SG":return"sg";default:return e.toLowerCase()}}(e)}(t);return"https://aan."+("na"===n?"amazon.com":i);case"gamma":return"https://aan-internal-"+("na"===n?"":n+"-")+"gamma.amazon.com";default:return"https://aan-internal.vipinteg.amazon.com"}}(this.stage,this.market||"US");this.cemEndpoint=e+"/cem"}},{key:"setDebouncedLogBatchMetrics",value:function(e){var t,n,i,r=this;this.debouncedLogBatchMetrics=(t=function(){var e;Object.keys(r.bufferedMetrics).length&&(e=r.prepareBatchedMetrics(),r.isDebug?(console.log("[DEBUG] Logging "+r.bufferedMetrics.length+" metrics:"),r.bufferedMetrics.forEach((function(e){console.log("- [DEBUG] Metric "+e.dimensions.subtype+" with dimensions:"),console.log(metrics.dimensions)}))):r.postMetrics(e))},n=e,i=void 0,function(){var e=this,r=arguments;clearTimeout(i),i=setTimeout((function(){return t.apply(e,r)}),n)})}},{key:"postMetrics",value:function(e){this.enabled&&function(e,t){if("undefined"!=typeof XMLHttpRequest){var n=new XMLHttpRequest;n.onerror=function(e){console.error("Failure posting to CEM: "+e)},n.open(t.method||"POST",e,!0);var i,r=t.headers||{};for(i in r)n.setRequestHeader(i,r[i]);n.send(t.body)}}(this.cemEndpoint,{body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}},{key:"startTimer",value:function(e){this.timers[e]=new Date}},{key:"endTimer",value:function(e,t){var n;this.timers[e]&&(n=new Date-this.timers[e],this.logPerformanceEvent(e,n,t),delete this.timers[e])}},{key:"batchMetric",value:function(e){var t=this.bufferedMetrics[e],n=i({},1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},{template_name:this.templateName});Array.isArray(t)?t.push(n):this.bufferedMetrics[e]=[n],this.logBatchedMetrics()}},{key:"prepareBatchedMetrics",value:function(){var e=this;return Object.keys(this.bufferedMetrics).map((function(t){return{event_type:t,render_id:e.renderId,dimensions:e.bufferedMetrics[t]}}))}},{key:"logBatchedMetrics",value:function(){this.debouncedLogBatchMetrics()}},{key:"logMetric",value:function(e,t){t=i({},t,{template_name:this.templateName,supply_source:this.supplySource}),this.isDebug?(console.log("[DEBUG] Logging metric for "+t.subtype+" with dimensions:"),console.log(t)):(t={render_id:this.renderId,event_type:e,dimensions:t||{}},this.postMetrics(t))}},{key:"doLogging",value:function(e,t,n){(n?this.batchMetric:this.logMetric).call(this,e,t)}},{key:"doLogImpression",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];this.doLogging("impression",i({subtype:"impression",value:1},e),t)}},{key:"logImpression",value:function(e){this.doLogImpression(e)}},{key:"logBatchedImpression",value:function(){this.doLogImpression(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},!0)}},{key:"doLogEvent",value:function(e,t){var n=e.eventName,r=e.eventType,o=e.componentType,s=e.componentName,a=(e=void 0===(a=e.eventValue)?1:a,2<arguments.length&&void 0!==arguments[2]&&arguments[2]);this.doLogging(r,i({component_type:o,component_name:s,subtype:n,value:e},t),a)}},{key:"logEvent",value:function(e){this.doLogEvent(e)}},{key:"logBatchedEvent",value:function(e){this.doLogEvent(e,1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},!0)}},{key:"doLogPerformanceEvent",value:function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]&&arguments[3];this.doLogging("performance",i({subtype:e,value:t||1,userAgent:navigator&&navigator.userAgent},n),r)}},{key:"logPerformanceEvent",value:function(e,t,n){this.doLogPerformanceEvent(e,t,n)}},{key:"logBatchedPerformanceEvent",value:function(e,t){this.doLogPerformanceEvent(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},!0)}}]),n=s,t.default=n},function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t){var n=o(t);t=(t=t).innerWidth||t.document.documentElement.clientWidth,n=s((e=e.getBoundingClientRect()).top,e.bottom,n),t=s(e.left,e.right,t),e=(e.bottom-e.top)*(e.right-e.left);return Math.min(1,Math.max(0,n*t/e))}function o(e){return e.innerHeight||e.document.documentElement.clientHeight}function s(e,t,n){var i=0<e?n-e:0<t?Math.min(t,n):0;return Math.min(i,t-e)}function a(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),this.window=t||window,this.elem=e}n.r(t),function(e,t,n){t&&i(e.prototype,t)}(a,[{key:"getPercentInView",value:function(){var e=this.getTopWindow();if(e){if(this.window===e)return r(this.elem,e);if(this.window.frameElement)return r(this.window.frameElement,e)}else if(this.window.$sf)try{return(this.window.$sf.ext.inViewPercentage()||0)/100}catch(e){}return-1}},{key:"getTopWindow",value:function(){return function(e){if(!e)throw new Error("window argument required");if("boolean"==typeof e.dacxIsCrossOrigin)return e.dacxIsCrossOrigin;try{if(!e.top.document)throw new Error("cross-domain exception");e.dacxIsCrossOrigin=!1}catch(t){e.dacxIsCrossOrigin=!0}return e.dacxIsCrossOrigin}(this.window)?null:this.window.top}},{key:"onViewThreshold",value:function(e,t,n,i){var r,o,s=this,a=null;return r=function(){if(s.getPercentInView()>=e&&s.getPercentInView()<=t){var r=(new Date).getTime();if(null===a)a=r;else if(n<r-a)return i(),1}else a=null},o=null,function e(){r()||(o=setTimeout(e,100))}(),{clear:function(){o&&clearTimeout(o)}}}},{key:"onView",value:function(e,t,n){return this.onViewThreshold(e,1,t,n)}},{key:"onHide",value:function(e,t,n){return this.onViewThreshold(0,e,t,n)}},{key:"getVerticalPositionOnPage",value:function(){var e,t,n,i=-1,r=this.getTopWindow();if(r)this.window===r?(e=this.elem.getBoundingClientRect().top,t=o(r),n=this.elem.getBoundingClientRect().height,i=Math.max(Math.min(e/(t-n),1),0)):this.window.frameElement&&(e=this.window.frameElement.getBoundingClientRect().top,t=o(r),n=this.window.frameElement.getBoundingClientRect().height,i=Math.max(Math.min(e/(t-n),1),0));else if(this.window.$sf)try{i=Math.max(Math.min($sf.ext.geom().self.t/($sf.ext.geom().win.h-$sf.ext.geom().self.h),1),0)}catch(e){}return i}}]),n=a,t.default=n}]);