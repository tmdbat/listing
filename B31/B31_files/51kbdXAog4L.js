(function(l){var h=window.AmazonUIPageJS||window.P,p=h._namespace||h.attributeErrors,q=p?p("VSEPlayer",""):h;q.guardFatal?q.guardFatal(l)(q,window):q.execute(function(){l(q,window)})})(function(l,h,p){(function(){function q(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}function G(a,b){b={contentId:""+a.initialVideo.contentId,customerId:a.customerId,isForesterTrackingDisabled:a.sushiMetricsConfig.isRobot,foresterMetadataParams:{client:a.requestMetadata.clientId,
marketplaceId:a.requestMetadata.marketplaceId,method:a.requestMetadata.method,requestId:a.requestMetadata.requestId,session:a.requestMetadata.sessionId},videoUrl:a.initialVideo.videoUrl,posterSource:a.initialVideo.imageUrl,pageAsin:a.requestMetadata.pageAsin,parentId:b,vendorCode:a.initialVideo.vendorCode,shouldStartMuted:a.shouldStartMuted,shouldAutoplay:a.shouldAutoplay,shouldPreload:a.shouldPreload,useAutoplayFallback:a.useAutoplayFallback,shouldDisableControls:a.shouldDisableControls,useCarousel:a.useCarousel,
useBuyBox:a.useBuyBox,languagePreferenceStrings:a.languagePreferenceStrings,sushiMetricsConfig:{eventSource:a.sushiMetricsConfig.eventSource,endpoint:a.sushiMetricsConfig.endpoint,requestId:a.sushiMetricsConfig.requestId,sessionId:a.sushiMetricsConfig.sessionId,customerId:a.sushiMetricsConfig.customerId,refMarkers:a.sushiMetricsConfig.refMarkers,sessionType:a.sushiMetricsConfig.sessionType,placementContext:a.sushiMetricsConfig.placementContext,marketplaceId:a.sushiMetricsConfig.marketplaceId,weblabIds:a.sushiMetricsConfig.weblabIds,
pageAsin:a.sushiMetricsConfig.pageAsin,isInternal:a.sushiMetricsConfig.isInternal,isRobot:a.sushiMetricsConfig.isRobot,clientId:a.sushiMetricsConfig.clientId,creativeId:a.sushiMetricsConfig.creativeId||""},refTag:a.refTag,ospData:{vendorTrackingId:a.initialVideo.vendorTrackingId,videoReferenceId:a.initialVideo.videoReferenceId,productAsin:a.initialVideo.productAsin},useUpNextComponent:a.useUpNextComponent,isVideoImmersivePlayer:a.isVideoImmersivePlayer,ospLinkCode:a.ospLinkCode,showClosedCaptions:a.showClosedCaptions,
closedCaptionsText:a.closedCaptionsText,clientPrefix:a.clientPrefix,captionsOffText:a.captionsOffText,languageCode:a.languageCode,isChromelessPlayer:a.isChromelessPlayer,enableDelphiAttribution:a.enableDelphiAttribution,aciContentId:a.initialVideo.aciContentId,mimeType:a.initialVideo.mimeType};a.eventTimestamp&&(b.eventTimestamp=a.eventTimestamp);return b}h.vseFeatures=h.vseFeatures||{};var z=h.gatedP||{register:function(a,b,d,c,e){void 0===e&&(e=h.vseFeatures);l.now(a).execute(a+"-prereg",function(g){g||
e[b]||(e[b]=!0,c.resolve(d(c)).then(function(){l.now(a).execute(a+"-reg",function(d){d||(l.log("Gated registration failed to register module!","ERROR",a),e[b]=!1)})}))})},declare:function(a,b,d,c){void 0===c&&(c=h.vseFeatures);l.now(a).execute(a+"-prereg",function(e){e||c[b]||(c[b]=!0,l.declare(a,d))})}},r={count:function(a,b){var d=h.ue;d&&d.count("vse:csm:"+a,b)},emitSushiMetric:function(a,b,d){var c=this;b=b||"https://unagi-na.amazon.com/1/events/com.amazon.eel.vse.metricstest.nexus";d=d||0;if(!(3<=
d)){var e=JSON.stringify(a).replace(/\\\\/g,""),g={params:e,paramsFormat:"json",contentType:"application/json; charset\x3dutf-8",error:function(){c.emitSushiMetric(a,b,++d)}},f=navigator.userAgent.match(/iPhone/i),v=!1;l.now("mash").execute("vse-detect-mshop",function(){v=!0});var t=null!==f&&v;l.when("A").execute("Emit-VSE-Metrics",function(a){navigator&&navigator.sendBeacon&&!t?navigator.sendBeacon(b,e):a.post(b,g)})}},logFatal:function(a,b,d){h.ueLogError&&h.ueLogError(d,{logLevel:"FATAL",attribution:a,
message:b})},logError:function(a,b,d){h.ueLogError&&h.ueLogError(d,{logLevel:"ERROR",attribution:a,message:b})}},w={fetchLatestPageState:function(a,b){a.state.replace(b,JSON.parse(a.$("script[type\x3d'a-state'][data-a-state*\x3d"+b+"]").html()));return a.state(b)},isDefined:function(a){return"undefined"!==typeof a&&null!==a}},B={getClosedCaptions:function(a,b){var d=[];if(!a.objectIsEmpty(b))for(a=b.split(","),b=0;b<a.length;b+=2)a[b+1]!==p&&d.push({locale:a[b],url:a[b+1]});return d}},H=function(){return function(a){this.message=
a}}(),I=function(){function a(b,a){void 0===a&&(a={refTagRecorderEndPoint:"/gp/mobile/tag/?",retryLimit:3});this.A=b;this.config=a}a.prototype.emitRefTag=function(b,a){void 0===a&&(a=0);if(!(a>=this.config.retryLimit)){var c=this;this.A.post(this.config.refTagRecorderEndPoint+"ref\x3d"+b,{error:function(){c.emitRefTag(b,++a)}})}};return a}(),J=p&&p.__assign||Object.assign||function(a){for(var b,d=1,c=arguments.length;d<c;d++){b=arguments[d];for(var e in b)Object.prototype.hasOwnProperty.call(b,e)&&
(a[e]=b[e])}return a},K=function(){return function(a){var b=this;this.config=a;this.log=function(a){b.videoEvent&&(b.videoEvent("setEntity",{video:J({},b.basePayload,a)}),b.videoEvent("log",{schemaId:b.schemaId},{ent:"all"}))};this.schemaId=a.schemaId;this.basePayload={player:"Brila",parentElementId:a.parentElementId};h.csa&&(this.videoEvent=h.csa("Events",{producerId:a.producerId}))}}(),C=function(){function a(b,d,c,e,g){var f=this;this.player=d;this.A=c;this.isIvx=e;this.clientPrefix=g;this.secondsFromLastEvent=
this.lastLoggedEventInterval=this.loggingInterval=this.initialLoggingDelay=0;this.aciContentId="";this.emitCarouselClickEvent=function(){f.logCSAEvent(f.secondsFromLastEvent);f.isAutoplay=!1};this.attachPlayerEventListeners=function(){f.player.on("playbackStart",f._playbackStartHandler);f.player.on("fullscreenchange",f._playerModeChangeHandler);f.player.on("pause",f._playbackPauseHandler);f.A.on("vse:"+f.clientPrefix+":player:continuous:play",function(){f.isAutoplay=!0});f.A.on("vse:"+f.clientPrefix+
":page:lightBoxClosed",function(){f.isAutoplay=!1})};this._playbackStartHandler=function(){f.aciContentId=f.getCurrentACIContentId();f.removeCSAEventHandler();f.addCSAEventHandler()};this._playerModeChangeHandler=function(){f.logCSAEvent(f.secondsFromLastEvent,f.currentPlayerMode);f.removeCSAEventHandler();f.addCSAEventHandler()};this._playbackPauseHandler=function(){f.logCSAEvent(f.secondsFromLastEvent);f.removeCSAEventHandler()};this.addCSAEventHandler=function(){f.lastLoggedEventInterval=f.A.interval(function(){f.secondsFromLastEvent++},
a.TIMERS.TIME_FROM_LAST_EVENT_MS);f.initialLoggingDelay=f.A.delay(function(){f.logCSAEvent(f.secondsFromLastEvent);f.loggingInterval=f.A.interval(function(){f.logCSAEvent(f.secondsFromLastEvent)},a.TIMERS.SUBSEQUENT_INTERVAL_MS)},a.TIMERS.INITIAL_DELAY_MS)};this.removeCSAEventHandler=function(){clearInterval(f.lastLoggedEventInterval);clearInterval(f.loggingInterval);clearTimeout(f.initialLoggingDelay);f.secondsFromLastEvent=0;f.loggingInterval=0;f.initialLoggingDelay=0};this.logCSAEvent=function(b,
a){""!==f.aciContentId?(f.currentPlayerMode=f.getCurrentPlayerMode(),b={contentId:f.aciContentId,viewDuration:b.toString(),playerMode:a||f.currentPlayerMode,isAutoPlayed:f.isAutoplay.toString(),isCaptionOn:f.player.isCaptionOn().toString(),isAudioOn:(!f.player.isMuted()).toString(),videoRequestId:f.player.getTitleSessionId().toString()},f.csa.log(b),f.secondsFromLastEvent=0):r.count(f.clientPrefix+":csa:noContentIdPresented",1)};this.csa=new K(b);this.player=d;this.currentPlayerMode=this.getCurrentPlayerMode();
this.isAutoplay=this.player.isAutoplayed();this.attachPlayerEventListeners()}a.prototype.getCurrentPlayerMode=function(){return this.isIvx?"IMMERSIVE_VIEW":this.player.isFullscreen()?"FULL_SCREEN":"MODAL"};a.prototype.getCurrentContentId=function(){return this.player.getCurrent().contentId||""};a.prototype.getCurrentACIContentId=function(){return this.player.getCurrent().aciContentId||""};a.TIMERS={INITIAL_DELAY_MS:2E3,SUBSEQUENT_INTERVAL_MS:3E4,TIME_FROM_LAST_EVENT_MS:1E3};return a}(),x={queueComplete:!0},
u=function(){function a(b,a,c){var e=this;this.player=b;this.frame=a;this.assets=[];this.currentIndex=0;this.eventEmitter=new c.EventEmitter;this.player.on("playbackComplete",function(){e.currentIndex++;e.doPlay()})}a.prototype.play=function(b){b?this.player.play(b):this.player.play();return this};a.prototype.getCurrentTime=function(){return this.player.getCurrentTime()};a.prototype.setCurrentTime=function(b){this.player.setCurrentTime(b);return this};a.prototype.getMediaDuration=function(){return this.player.getMediaDuration()};
a.prototype.mute=function(){this.player.mute();return this};a.prototype.unmute=function(){this.player.unmute();return this};a.prototype.isMuted=function(){return this.player.isMuted()};a.prototype.resume=function(b){this.player.resume(b);return this};a.prototype.pause=function(){this.player.pause();return this};a.prototype.next=function(){this.player.stop();this.currentIndex++;this.doPlay();return this};a.prototype.previous=function(){this.player.stop();this.currentIndex--;this.doPlay();return this};
a.prototype.seek=function(b){this.player.seek(b);return this};a.prototype.enqueue=function(b,a){void 0===a&&(a=this.assets.length);b instanceof Array?(b=b.slice(),b.splice(0,0,this.assets),Array.prototype.splice.apply(this.assets,b)):this.assets.splice(a,0,b);return this};a.prototype.dequeue=function(b){var a=this,c;if("number"===typeof b)c=[b];else if(b instanceof Array){var e=b.map(function(b){return b.contentId});c=this.assets.map(function(b){return e.indexOf(b.contentId)}).filter(function(b){-1!=
b})}else c=[this.assets.map(function(b,a){return a}).filter(function(c){a.assets[c].contentId==b.contentId})[0]];for(var g=0,f=c.length;g<f;g++)this.assets.splice(c[g],1);return this};a.prototype.on=function(b,a){if(x.hasOwnProperty(b))this.eventEmitter.on(b,a);else this.player.on(b,a);return this};a.prototype.off=function(b,a){x.hasOwnProperty(b)?this.eventEmitter.off(b,a):this.player.off(b,a);return this};a.prototype.getAssets=function(){return this.assets};a.prototype.getCurrentAssetIndex=function(){return this.currentIndex-
1};a.prototype.getPosition=function(){return this.player.getPosition()};a.prototype.isPlaying=function(){return this.player.isPlaying()};a.prototype.isPaused=function(){return this.player.isPaused()};a.prototype.getVersion=function(){return this.player.getVersion()};a.prototype.destroy=function(){this.player.destroy()};a.prototype.addChild=function(b,a){this.player.addChild(b,a);return this};a.prototype.removeChild=function(b){this.player.removeChild(b);return this};a.prototype.loadNextVideoPoster=
function(b){this.player.loadNextVideoPoster(b);return this};a.prototype.blur=function(){this.player.blur();return this};a.prototype.requestFullscreen=function(){this.player.requestFullscreen();return this};a.prototype.exitFullscreen=function(){this.player.exitFullscreen();return this};a.prototype.isFullscreen=function(){return this.player.isFullscreen()};a.prototype.fluid=function(b){this.player.fluid(b);return this};a.prototype.aspectRatio=function(b){this.player.aspectRatio(b);return this};a.prototype.enableCurrentTextTrack=
function(b){void 0===b&&(b="en");this.player.enableCurrentTextTrack(b);return this};a.prototype.disableCurrentTextTrack=function(b){void 0===b&&(b="en");this.player.disableCurrentTextTrack(b);return this};a.prototype.updateTextTrack=function(b){this.player.updateTextTrack(b);return this};a.prototype.setInitialData=function(b){this.player.setInitialData(b);return this};a.prototype.showPoster=function(b){this.player.showPoster(b);return this};a.prototype.getCurrent=function(){return this.player.getCurrent()};
a.prototype.isCaptionOn=function(){return this.player.isCaptionOn()};a.prototype.isAutoplayed=function(){return this.player.isAutoplayed()};a.prototype.getTitleSessionId=function(){return this.player.getTitleSessionId()};a.prototype.doPlay=function(){var b=this.player.getCurrent();b?this.assets[this.currentIndex].contentId==b.contentId?this.player.play():this.player.play(this.assets[this.currentIndex]):this.assets[this.currentIndex]&&this.player.play(this.assets[this.currentIndex])};return a}(),y=
function(){function a(b,a,c,e){var g=this;this.config=a;this.libs=e;this.eventEmitter=new e.EventEmitter;this.currentAsset=c;this.initHandlers();e=document.getElementById(a.parentId);var f=document.createElement("video");c=a.parentId+"-element";f.id=c;f.className=a.isVideoImmersivePlayer?"video-js brila-vip-vjs":"video-js brila-video-js";f.setAttribute("playsinline","true");a.shouldDisableControls||a.isChromelessPlayer||f.setAttribute("controls","true");a.shouldAutoplay&&f.setAttribute("autoplay",
"true");(a.shouldStartMuted||a.isChromelessPlayer)&&f.setAttribute("muted","true");a.shouldPreload||f.setAttribute("preload","none");e.appendChild(f);e=a.languageCode?a.languageCode.toString():"en";e={player:{techOrder:["html5"],textTrackSettings:!1,html5:{hls:{overrideNative:b.overrideNativePlayer()},nativeAudioTracks:!1,nativeVideoTracks:!1,nativeTextTracks:!1},languages:(t={},t[e]={"subtitles off":a.captionsOffText},t),language:e}};a.isVideoImmersivePlayer&&(e.player.bigPlayButton=!1,e.player.posterImage=
a.posterSource,e.player.controlBar={playToggle:!1,volumePanel:!1,currentTimeDisplay:!0,remainingTimeDisplay:!0,fullscreenToggle:!1});this.videoJS=t=b.embed(c,a,e);document.getElementById(c).setAttribute("style","width:100%; height:100%;");this.videoJS.poster(a.posterSource);a.shouldPreload&&this.videoJS.src({src:a.videoUrl,type:a.mimeType});this.vseMetrics=b.metrics(this.videoJS);a.isVideoImmersivePlayer?(this.videoJS.on("click",function(){g.eventEmitter.emit("playerClick")}),this.videoJS.on("touchstart",
function(){g.eventEmitter.emit("playerClick")})):this.videoJS.aspectRatio("16:9");this.videoJS.on("ended",function(){g.eventHandlers.onPlaybackComplete()});this.videoJS.on("playing",function(){g.eventHandlers.onPlaybackStart();g.config.useAutoplayFallback&&(g.eventEmitter.emit("autoplaySucceeded"),g.config.useAutoplayFallback=!1)});this.videoJS.on("cancelContinuousPlay",function(){g.eventHandlers.onCancelContinuousPlay()});this.videoJS.on("playUpNext",function(){g.eventHandlers.onPlayUpNext()});var v=
this;t.ready(function(){v.eventEmitter.emit("playerLoaded")});var t}a.prototype.play=function(b){var a=this;this.vseMetrics.setPlayCommandInvokeTimestamp(Date.now());if(this.isDPXDesktopFullScreenRequest(b))this.vseMetrics.setPageLoadStartTimestamp(Date.now()),this.videoJS.play();else if(this.setInitialData(b),this.config.useAutoplayFallback)b=this.videoJS.play(),b!==p&&b.then(function(b){}).catch(function(b){a.eventEmitter.emit("autoplayFailed")});else return this.videoJS.play()};a.prototype.setInitialData=
function(b){var a=this.getTextTrackMode("en");b&&(this.currentAsset&&b.contentId===this.currentAsset.contentId?this.config.shouldPreload||this.videoJS.src({src:b.videoUrl,type:b.mimeType}):(this.videoJS.poster(b.imageUrl),this.videoJS.posterImage.show(),this.vseMetrics.setContentId&&this.vseMetrics.setContentId(b.contentId),this.vseMetrics.setAciContentId(b.aciContentId),this.vseMetrics.setRefTag&&this.vseMetrics.setRefTag(b.refTag?b.refTag:""),this.vseMetrics.setOspAttribution&&this.vseMetrics.setOspAttribution({vendorTrackingId:b.vendorTrackingId?
b.vendorTrackingId:"",videoReferenceId:b.videoReferenceId?b.videoReferenceId:"",productAsin:b.productAsin?b.productAsin:""}),this.videoJS.src({src:b.videoUrl,type:b.mimeType}),this.currentAsset=b));if(this.config.showClosedCaptions){this.removeCurrentTextTracks();var c=[];this.currentAsset&&this.currentAsset.closedCaptions&&(c=this.currentAsset.closedCaptions);b&&b.closedCaptions&&(c=b.closedCaptions);this.updateTextTrack(c);this.vseMetrics.updateTextTrackMetrics();"showing"===a&&this.enableCurrentTextTrack()}b=
b&&b.eventTimestamp?b.eventTimestamp:Date.now();this.vseMetrics.setPageLoadStartTimestamp(b)};a.prototype.showPoster=function(b){this.videoJS.poster(b);this.videoJS.posterImage.show();return this};a.prototype.updateTextTrack=function(b){var a=this;b.forEach(function(b){a.videoJS.addRemoteTextTrack({src:b.url,kind:"subtitles",srclang:b.locale,label:a.config.closedCaptionsText,"default":!1},!1)})};a.prototype.enableCurrentTextTrack=function(b){void 0===b&&(b="en");this.changeTextTrackMode(b,"showing")};
a.prototype.disableCurrentTextTrack=function(b){void 0===b&&(b="en");this.changeTextTrackMode(b,"disabled")};a.prototype.muted=function(b){return this.videoJS.muted(b)};a.prototype.mute=function(){this.videoJS.muted(!0);return this};a.prototype.unmute=function(){this.videoJS.muted(!1);return this};a.prototype.isMuted=function(){return this.videoJS.muted()};a.prototype.getCurrentTime=function(){return this.videoJS.currentTime()};a.prototype.setCurrentTime=function(b){this.videoJS.currentTime(b);return this};
a.prototype.getMediaDuration=function(){return isNaN(this.videoJS.duration())?0:this.videoJS.duration()};a.prototype.pause=function(){this.videoJS.pause();return this};a.prototype.resume=function(b){this.videoJS.play();return this};a.prototype.seek=function(b){this.videoJS.currentTime(b);return this};a.prototype.stop=function(){this.videoJS.pause();this.currentAsset=p;return this};a.prototype.on=function(b,a){this.eventEmitter.on(b,a);this.videoJS.on(b,a);return this};a.prototype.off=function(b,a){return this};
a.prototype.getCurrent=function(){return this.currentAsset};a.prototype.getPosition=function(){return this.videoJS.currentTime()};a.prototype.isPlaying=function(){return!this.videoJS.paused()};a.prototype.isPaused=function(){return this.videoJS.paused()};a.prototype.getVersion=function(){return"VJS"};a.prototype.destroy=function(){this.vseMetrics.publishBeforeDispose();this.videoJS.off("ended",this.eventHandlers.onPlaybackComplete);this.videoJS.dispose();this.videoJS=null};a.prototype.addChild=function(b,
a){this.videoJS.addChild(b,a);return this};a.prototype.removeChild=function(b){this.videoJS.removeChild(b);return this};a.prototype.loadNextVideoPoster=function(b){this.videoJS.poster(b);this.videoJS.posterImage.show();return this};a.prototype.aspectRatio=function(b){this.videoJS.aspectRatio(b);return this};a.prototype.requestFullscreen=function(){this.videoJS.requestFullscreen();return this};a.prototype.exitFullscreen=function(){this.videoJS.exitFullscreen();return this};a.prototype.isFullscreen=
function(){return this.videoJS.isFullscreen()};a.prototype.fluid=function(b){this.videoJS.fluid(b);return this};a.prototype.blur=function(){this.videoJS.blur();return this};a.prototype.isCaptionOn=function(){var b=!1,a=this.videoJS.remoteTextTracks();if(a)for(var c=0;c<a.length;++c)if("showing"===a[c].mode){b=!0;break}return b};a.prototype.isAutoplayed=function(){return this.videoJS.options()&&this.videoJS.options().autoplay?this.videoJS.options().autoplay:!1};a.prototype.getTitleSessionId=function(){return this.vseMetrics.getTitleSessionId()};
a.prototype.initHandlers=function(){var a=this;this.eventHandlers={onPlaybackComplete:function(){return a.player_onPlaybackComplete()},onPlaybackStart:function(){return a.player_onPlaybackStart()},onCancelContinuousPlay:function(){return a.player_onCancelContinuousPlay()},onPlayUpNext:function(){return a.player_onPlayUpNext()}}};a.prototype.player_onPlaybackComplete=function(){var a=this.currentAsset;this.previousAsset=this.currentAsset;this.currentAsset=p;this.previousAsset&&(this.previousAsset.eventTimestamp=
Date.now());this.eventEmitter.emit("playbackComplete",a)};a.prototype.player_onCancelContinuousPlay=function(){this.currentAsset=this.previousAsset;this.eventEmitter.emit("cancelContinuousPlay",this.previousAsset)};a.prototype.player_onPlayUpNext=function(){this.eventEmitter.emit("playUpNext",this.previousAsset)};a.prototype.player_onPlaybackStart=function(){this.currentAsset&&(this.currentAsset.eventTimestamp=Date.now());this.eventEmitter.emit("playbackStart",this.currentAsset)};a.prototype.isDPXDesktopFullScreenRequest=
function(a){return this.config.sushiMetricsConfig&&this.config.sushiMetricsConfig.placementContext&&-1!==this.config.sushiMetricsConfig.placementContext.indexOf("desktop_web.ImageBlock")&&a&&!a.hasOwnProperty("refTag")&&a.contentId!==this.currentAsset.contentId};a.prototype.changeTextTrackMode=function(a,d){var c=this.videoJS.remoteTextTracks();if(c)for(var e=0;e<c.length;e++){var g=c[e];"subtitles"===g.kind&&g.language===a&&(g.mode=d)}};a.prototype.getTextTrackMode=function(a){var d=this.videoJS.remoteTextTracks();
if(d)for(var c=0;c<d.length;c++){var e=d[c];if("subtitles"===e.kind&&e.language===a)return e.mode}return"disabled"};a.prototype.removeCurrentTextTracks=function(){var a=this.videoJS.remoteTextTracks();if(a)for(var d=0;d<a.length;d++)this.videoJS.removeRemoteTextTrack(a[d])};return a}(),D=function(){function a(a,d){var c=this;this.libs=d;this.commands=[];a.then(function(a){c.playerInstance=a;c.executeCommands()})}a.prototype.executeCommands=function(){for(var a=0;a<this.commands.length;a++)this.commands[a](this.playerInstance)};
a.prototype.play=function(a){var d=this;this.playerInstance?this._play(a,this.playerInstance):this.commands.push(function(){for(var c=[],e=0;e<arguments.length;e++)c[e]=arguments[e];return d._play(a,c[0])});return this};a.prototype.mute=function(){var a=this;this.playerInstance?this._mute(this.playerInstance):this.commands.push(function(){for(var d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];return a._mute(d[0])});return this};a.prototype.unmute=function(){var a=this;this.playerInstance?this._unmute(this.playerInstance):
this.commands.push(function(){for(var d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];return a._unmute(d[0])});return this};a.prototype.isMuted=function(){var a=this;if(this.playerInstance)return this._isMuted(this.playerInstance);this.commands.push(function(){for(var d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];return a._isMuted(d[0])});return!0};a.prototype.getCurrentTime=function(){var a=this;if(this.playerInstance)return this._getCurrentTime(this.playerInstance);this.commands.push(function(){for(var d=
[],c=0;c<arguments.length;c++)d[c]=arguments[c];return a._getCurrentTime(d[0])});return 0};a.prototype.setCurrentTime=function(a){var d=this;this.playerInstance?this._setCurrentTime(a,this.playerInstance):this.commands.push(function(){for(var c=[],e=0;e<arguments.length;e++)c[e]=arguments[e];return d._setCurrentTime(a,c[0])})};a.prototype.getMediaDuration=function(){var a=this;if(this.playerInstance)return this._getMediaDuration(this.playerInstance);this.commands.push(function(){for(var d=[],c=0;c<
arguments.length;c++)d[c]=arguments[c];return a._getMediaDuration(d[0])});return 0};a.prototype.pause=function(){var a=this;this.playerInstance?this._pause(this.playerInstance):this.commands.push(function(){for(var d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];return a._pause(d[0])});return this};a.prototype.resume=function(a){var d=this;this.playerInstance?this._resume(a,this.playerInstance):this.commands.push(function(){for(var c=[],e=0;e<arguments.length;e++)c[e]=arguments[e];return d._resume(a,
c[0])});return this};a.prototype.stop=function(){var a=this;this.playerInstance?this._stop(this.playerInstance):this.commands.push(function(){for(var d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];return a._stop(d[0])});return this};a.prototype.seek=function(a){var d=this;this.playerInstance?this._seek(a,this.playerInstance):this.commands.push(function(){for(var c=[],e=0;e<arguments.length;e++)c[e]=arguments[e];return d._seek(a,c[0])});return this};a.prototype.on=function(a,d){var c=this;this.playerInstance?
this._on(a,d,this.playerInstance):this.commands.push(function(){for(var e=[],g=0;g<arguments.length;g++)e[g]=arguments[g];return c._on(a,d,e[0])});return this};a.prototype.off=function(a,d){var c=this;this.playerInstance?this._off(a,d,this.playerInstance):this.commands.push(function(){for(var e=[],g=0;g<arguments.length;g++)e[g]=arguments[g];return c._off(a,d,e[0])});return this};a.prototype.aspectRatio=function(a){var d=this;this.playerInstance?this._aspectRatio(a,this.playerInstance):this.commands.push(function(){for(var c=
[],e=0;e<arguments.length;e++)c[e]=arguments[e];return d._aspectRatio(a,c[0])});return this};a.prototype.getCurrent=function(){if(this.playerInstance)return this.playerInstance.getCurrent()};a.prototype.getPosition=function(){return this.playerInstance?this.playerInstance.getPosition():0};a.prototype.isPlaying=function(){return this.playerInstance?this.playerInstance.isPlaying():!1};a.prototype.isPaused=function(){return this.playerInstance?this.playerInstance.isPaused():!1};a.prototype.getVersion=
function(){return this.playerInstance?this.playerInstance.getVersion():""};a.prototype.destroy=function(){this.playerInstance&&this.playerInstance.destroy();this.playerInstance=null};a.prototype.addChild=function(a,d){this.playerInstance&&this.playerInstance.addChild(a,d);return this};a.prototype.removeChild=function(a){this.playerInstance&&this.playerInstance.removeChild(a);return this};a.prototype.loadNextVideoPoster=function(a){this.playerInstance&&this.playerInstance.loadNextVideoPoster(a);return this};
a.prototype.setInitialData=function(a){this.playerInstance&&this.playerInstance.setInitialData(a);return this};a.prototype.updateTextTrack=function(a){this.playerInstance&&this.playerInstance.updateTextTrack(a);return this};a.prototype.showPoster=function(a){this.playerInstance&&this.playerInstance.showPoster(a);return this};a.prototype.blur=function(){this.playerInstance&&this.playerInstance.blur();return this};a.prototype.requestFullscreen=function(){var a=this;this.playerInstance?this._requestFullscreen(this.playerInstance):
this.commands.push(function(){for(var d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];return a._requestFullscreen(d[0])});return this};a.prototype.exitFullscreen=function(){this.playerInstance&&this.playerInstance.exitFullscreen();return this};a.prototype.isFullscreen=function(){return this.playerInstance?this.playerInstance.isFullscreen():!1};a.prototype.fluid=function(a){this.playerInstance&&this.playerInstance.fluid(a);return this};a.prototype.enableCurrentTextTrack=function(a){void 0===a&&(a=
"en");this.playerInstance&&this.playerInstance.enableCurrentTextTrack(a)};a.prototype.disableCurrentTextTrack=function(a){void 0===a&&(a="en");this.playerInstance&&this.playerInstance.disableCurrentTextTrack(a)};a.prototype.isCaptionOn=function(){return this.playerInstance?this.playerInstance.isCaptionOn():!1};a.prototype.isAutoplayed=function(){return this.playerInstance?this.playerInstance.isAutoplayed():!1};a.prototype.getTitleSessionId=function(){return this.playerInstance?this.playerInstance.getTitleSessionId():
""};a.prototype._play=function(a,d){a?d.play(a):d.play()};a.prototype._mute=function(a){a.mute()};a.prototype._unmute=function(a){a.unmute()};a.prototype._isMuted=function(a){return a.isMuted()};a.prototype._getCurrentTime=function(a){return a.getCurrentTime()};a.prototype._setCurrentTime=function(a,d){d.setCurrentTime(a)};a.prototype._getMediaDuration=function(a){return a.getMediaDuration()};a.prototype._pause=function(a){a.pause()};a.prototype._stop=function(a){a.stop()};a.prototype._requestFullscreen=
function(a){a.requestFullscreen()};a.prototype._resume=function(a,d){d.resume(a)};a.prototype._seek=function(a,d){d.seek(a)};a.prototype._on=function(a,d,c){c.on(a,d)};a.prototype._off=function(a,d,c){c.off(a,d)};a.prototype._destroy=function(a){a.destroy()};a.prototype._aspectRatio=function(a,d){d.aspectRatio(a)};return a}(),E=function(){function a(a){this.deps=a}a.prototype.create=function(a){var d=this,c=q(),e=new this.deps.promise(function(a,b){h[c]={resolve:a,reject:b}});l.when("brila").execute("construct-player",
function(a){h[c].resolve(a)});var g=document.getElementById(a.containerId),f=a.containerId+"-container";g.innerHTML='\x3cdiv id\x3d"'+f+'" style\x3d"width:100%; height:100%"\x3e\x3c/div\x3e';g=(new this.deps.promise(function(c,g){e.then(function(e){var g=new y(e,G(a,f),a.initialVideo,d.deps);g.on("playerLoaded",function(){c(g)})})})).then(function(a){return a});return new u(new D(g,this.deps),document.getElementById(f),this.deps)};return a}(),F=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(a){function b(){}
function d(a,b,c){this.fn=a;this.context=b;this.once=c||!1}function c(){this._events=new b;this._eventsCount=0}var e=Object.prototype.hasOwnProperty,g="~";Object.create&&(b.prototype=Object.create(null),(new b).__proto__||(g=!1));c.prototype.eventNames=function(){var a=[],b,c;if(0===this._eventsCount)return a;for(c in b=this._events)e.call(b,c)&&a.push(g?c.slice(1):c);return Object.getOwnPropertySymbols?a.concat(Object.getOwnPropertySymbols(b)):a};c.prototype.listeners=function(a,b){a=this._events[g?
g+a:a];if(b)return!!a;if(!a)return[];if(a.fn)return[a.fn];b=0;for(var c=a.length,d=Array(c);b<c;b++)d[b]=a[b].fn;return d};c.prototype.emit=function(a,b,c,d,e,m){var k=g?g+a:a;if(!this._events[k])return!1;var k=this._events[k],h=arguments.length,l,n;if(k.fn){k.once&&this.removeListener(a,k.fn,p,!0);switch(h){case 1:return k.fn.call(k.context),!0;case 2:return k.fn.call(k.context,b),!0;case 3:return k.fn.call(k.context,b,c),!0;case 4:return k.fn.call(k.context,b,c,d),!0;case 5:return k.fn.call(k.context,
b,c,d,e),!0;case 6:return k.fn.call(k.context,b,c,d,e,m),!0}n=1;for(l=Array(h-1);n<h;n++)l[n-1]=arguments[n];k.fn.apply(k.context,l)}else{var q=k.length,r;for(n=0;n<q;n++)switch(k[n].once&&this.removeListener(a,k[n].fn,p,!0),h){case 1:k[n].fn.call(k[n].context);break;case 2:k[n].fn.call(k[n].context,b);break;case 3:k[n].fn.call(k[n].context,b,c);break;case 4:k[n].fn.call(k[n].context,b,c,d);break;default:if(!l)for(r=1,l=Array(h-1);r<h;r++)l[r-1]=arguments[r];k[n].fn.apply(k[n].context,l)}}return!0};
c.prototype.on=function(a,b,c){b=new d(b,c||this);a=g?g+a:a;this._events[a]?this._events[a].fn?this._events[a]=[this._events[a],b]:this._events[a].push(b):(this._events[a]=b,this._eventsCount++);return this};c.prototype.once=function(a,b,c){b=new d(b,c||this,!0);a=g?g+a:a;this._events[a]?this._events[a].fn?this._events[a]=[this._events[a],b]:this._events[a].push(b):(this._events[a]=b,this._eventsCount++);return this};c.prototype.removeListener=function(a,c,d,e){a=g?g+a:a;if(!this._events[a])return this;
if(!c)return 0===--this._eventsCount?this._events=new b:delete this._events[a],this;var h=this._events[a];if(h.fn)h.fn!==c||e&&!h.once||d&&h.context!==d||(0===--this._eventsCount?this._events=new b:delete this._events[a]);else{for(var m=0,k=[],l=h.length;m<l;m++)(h[m].fn!==c||e&&!h[m].once||d&&h[m].context!==d)&&k.push(h[m]);k.length?this._events[a]=1===k.length?k[0]:k:0===--this._eventsCount?this._events=new b:delete this._events[a]}return this};c.prototype.removeAllListeners=function(a){a?(a=g?
g+a:a,this._events[a]&&(0===--this._eventsCount?this._events=new b:delete this._events[a])):(this._events=new b,this._eventsCount=0);return this};c.prototype.off=c.prototype.removeListener;c.prototype.addListener=c.prototype.on;c.prototype.setMaxListeners=function(){return this};c.prefixed=g;c.EventEmitter=c;"undefined"!==typeof a&&(a.exports=c)}).EventEmitter,m={vars:{A:{},isMobile:!1,shouldSetInitialData:!0},BrilaFactory:E,VSEPlayer:u,BrilaShim:y,PlayerPromiseShim:D,guid:q,PostMetric:r,AuiUtils:w,
RefTagRecorder:I,InvalidArgumentsException:H,gatedP:z,auiUtils:w,postMetric:r,closedCaptionsUtils:B,EventEmitter:F,OnSiteAttributionMetrics:C,setInitialData:function(a,b){m.vars.shouldSetInitialData&&b&&(a.setInitialData(b),m.vars.shouldSetInitialData=!1)}},A=function(){function a(){}a.PLAYER_PAGE_STATE_NOT_FOUND_ERROR_KEY="VSEPlayerFailedToRenderNoPageState";a.CANNOT_FIND_CSA_WIDGET="VSEPlayerCannotFindCSAWidget";a.EMPTY_STRING="";return a}();try{var L=function(a){return new a(function(b,d){l.when("A",
"ready").register("VSEPlayer",function(c){var d;m.vars.A=c;var g=function(a,b,c){var d=a.create(b);d.on("playbackComplete",function(){m.vars.A.trigger("vsePlayer-"+c+"-playbackComplete")});d.on("loadeddata",function(){m.vars.A.trigger("vsePlayer-"+c+"-playerLoaded");m.setInitialData(d,b.initialVideo)});d.on("fullscreenchange",function(){m.vars.A.trigger("vsePlayer-"+c+"-fullscreenchange")});d.on("playbackStart",function(){m.vars.A.trigger("vsePlayer-"+c+"-playbackStart")});m.vars.A.on.orientationchange(function(a){w.isDefined(d)&&
(0===a.orientation?m.vars.A.trigger("vse:player:"+c+":portrait"):90===a.orientation&&m.vars.A.trigger("vse:player:"+c+":landscape"))});return d};return{initPlayer:function(b){try{var h=w.fetchLatestPageState(c,b);if(h){var l=h.awaConfig;m.vars.isMobile=h.isMobile;var p=h.clientPrefix,q=l.containerId;b={gatedP:z,EventEmitter:F,promise:a};var x={videoUrl:h.videoUrl,contentId:l.initialVideo,vendorCode:h.vendorCode,vendorTrackingId:h.vendorTrackingId,productAsin:h.productAsin,videoReferenceId:h.videoReferenceId,
closedCaptions:B.getClosedCaptions(m.vars.A,h.initialClosedCaptions),eventTimestamp:m.vars.A.now(),imageUrl:h.imageUrl,duration:0,refTag:A.EMPTY_STRING,aciContentId:h.aciContentId,mimeType:h.mimeType};l.initialVideo=x;d=new E(b);var k=g(d,l,p);if(!m.vars.A.objectIsEmpty(l.osaInstrumentationConfig)){var u=m.vars.A.$("#"+q).closest("[data-csa-c-id]");u.length||r.count(A.CANNOT_FIND_CSA_WIDGET,1);var y={parentElementId:u.data("csa-c-id"),schemaId:l.osaInstrumentationConfig.schemaId,producerId:l.osaInstrumentationConfig.producerId};
new C(y,k,m.vars.A,!1,p)}m.vars.A.trigger("vsePlayer-"+p,{player:k,containerId:q})}else r.count(A.PLAYER_PAGE_STATE_NOT_FOUND_ERROR_KEY,1),m.vars.A.trigger("vsePlayer-"+b+"-initialization-failed")}catch(n){r.logFatal("vse-ns","InitializeVSEPlayer",n)}},Utils:m,_noneFeature:b()}})})};l.when("A","3p-promise").execute("VSE-gatedP-register-player-client",function(a,b){z.register("VSEPlayer","VSEPlayer-client-registered",L,b)})}catch(a){r.logError("vse-ns","RegisterVSEPlayer",a)}})()});