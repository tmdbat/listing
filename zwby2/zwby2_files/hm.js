(function(){var h={},mt={},c={id:"93e3985479f509c0a71b34dcba507d2c",dm:["wearesellers.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:true,align:0,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,kbtrk:1,pt:0,aet:'',hca:'AC80A78BA07A4381',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var r=void 0,s=!0,t=null,u=!1;mt.cookie={};mt.cookie.set=function(b,a,d){var f;d.Y&&(f=new Date,f.setTime(f.getTime()+d.Y));document.cookie=b+"="+a+(d.domain?"; domain="+d.domain:"")+(d.path?"; path="+d.path:"")+(f?"; expires="+f.toGMTString():"")+(d.Vb?"; secure":"")};mt.cookie.get=function(b){return(b=RegExp("(^| )"+b+"=([^;]*)(;|$)").exec(document.cookie))?b[2]:t};mt.lang={};mt.lang.d=function(b,a){return"[object "+a+"]"==={}.toString.call(b)};
mt.lang.wa=function(b){return mt.lang.d(b,"Number")&&isFinite(b)};mt.lang.ea=function(){return mt.lang.d(c.aet,"String")};mt.lang.h=function(b){return b.replace?b.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):b};mt.lang.trim=function(b){return b.replace(/^\s+|\s+$/g,"")};mt.lang.F=function(b,a){var d=u;if(b==t||!mt.lang.d(b,"Array")||a===r)return d;if(Array.prototype.indexOf)d=-1!==b.indexOf(a);else for(var f=0;f<b.length;f++)if(b[f]===a){d=s;break}return d};
(function(){var b=mt.lang;mt.e={};mt.e.Wa=function(a){return document.getElementById(a)};mt.e.ba=function(a,b){var f=[],k=[];if(!a)return k;for(;a.parentNode!=t;){for(var l=0,p=0,m=a.parentNode.childNodes.length,g=0;g<m;g++){var e=a.parentNode.childNodes[g];if(e.nodeName===a.nodeName&&(l++,e===a&&(p=l),0<p&&1<l))break}if((m=""!==a.id)&&b){f.unshift("#"+encodeURIComponent(a.id));break}else m&&(m="#"+encodeURIComponent(a.id),m=0<f.length?m+">"+f.join(">"):m,k.push(m)),f.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+
(1<l?"["+p+"]":""));a=a.parentNode}k.push(f.join(">"));return k};mt.e.ta=function(a){return(a=mt.e.ba(a,s))&&a.length?String(a[0]):""};mt.e.Rb=function(a){return mt.e.ba(a,u)};mt.e.Xa=function(a){var b;for(b="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return t};mt.e.Za=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.e.eb=function(a){var b={top:0,left:0};if(!a)return b;var f=mt.e.Za(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(b=a.getBoundingClientRect());
return{top:b.top+(window.pageYOffset||f.scrollTop)-(f.clientTop||0),left:b.left+(window.pageXOffset||f.scrollLeft)-(f.clientLeft||0)}};mt.e.getAttribute=function(a,b){var f=a.getAttribute&&a.getAttribute(b)||t;if(!f&&a.attributes&&a.attributes.length)for(var k=a.attributes,l=k.length,p=0;p<l;p++)k[p].nodeName===b&&(f=k[p].nodeValue);return f};mt.e.M=function(a){var b="document";a.tagName!==r&&(b=a.tagName);return b.toLowerCase()};mt.e.hb=function(a){var d="";a.textContent?d=b.trim(a.textContent):
a.innerText&&(d=b.trim(a.innerText));d&&(d=d.replace(/\s+/g," ").substring(0,255));return d};mt.e.$a=function(a){var b=mt.e.M(a);"input"===b&&("button"===a.type||"submit"===a.type)?a=a.value||"":"img"===b?(b=mt.e.getAttribute,a=b(a,"alt")||b(a,"title")||b(a,"src")):a="body"===b||"html"===b?["(hm-default-content-for-",b,")"].join(""):mt.e.hb(a);return String(a).substring(0,255)};(function(){(mt.e.zb=function(){function a(){if(!a.O){a.O=s;for(var b=0,f=k.length;b<f;b++)k[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(f){setTimeout(b,
1);return}a()}var f=u,k=[],l;document.addEventListener?l=function(){document.removeEventListener("DOMContentLoaded",l,u);a()}:document.attachEvent&&(l=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",l),a())});(function(){if(!f)if(f=s,"complete"===document.readyState)a.O=s;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",l,u),window.addEventListener("load",a,u);else if(document.attachEvent){document.attachEvent("onreadystatechange",
l);window.attachEvent("onload",a);var k=u;try{k=window.frameElement==t}catch(m){}document.documentElement.doScroll&&k&&b()}})();return function(b){a.O?b():k.push(b)}}()).O=u})();return mt.e})();mt.event={};mt.event.c=function(b,a,d){b.attachEvent?b.attachEvent("on"+a,function(a){d.call(b,a)}):b.addEventListener&&b.addEventListener(a,d,u)};mt.event.preventDefault=function(b){b.preventDefault?b.preventDefault():b.returnValue=u};
(function(){var b=mt.event;mt.g={};mt.g.da=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.g.rb=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:r;mt.g.cookieEnabled=navigator.cookieEnabled;mt.g.javaEnabled=navigator.javaEnabled();mt.g.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.g.Bb=(window.screen.width||0)+"x"+(window.screen.height||0);mt.g.colorDepth=window.screen.colorDepth||0;mt.g.D=function(){var a;
a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.g.z=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.g.orientation=0;(function(){function a(){var a=0;window.orientation!==r&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==r)&&(a=screen.orientation.angle);mt.g.orientation=a}a();b.c(window,"orientationchange",a)})();return mt.g})();
mt.m={};mt.m.parse=function(){return(new Function('return (" + source + ")'))()};
mt.m.stringify=function(){function b(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=d[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function a(a){return 10>a?"0"+a:a}var d={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(f){switch(typeof f){case "undefined":return"undefined";case "number":return isFinite(f)?String(f):"null";case "string":return b(f);case "boolean":return String(f);
default:if(f===t)return"null";if(f instanceof Array){var d=["["],l=f.length,p,m,g;for(m=0;m<l;m++)switch(g=f[m],typeof g){case "undefined":case "function":case "unknown":break;default:p&&d.push(","),d.push(mt.m.stringify(g)),p=1}d.push("]");return d.join("")}if(f instanceof Date)return'"'+f.getFullYear()+"-"+a(f.getMonth()+1)+"-"+a(f.getDate())+"T"+a(f.getHours())+":"+a(f.getMinutes())+":"+a(f.getSeconds())+'"';p=["{"];m=mt.m.stringify;for(l in f)if(Object.prototype.hasOwnProperty.call(f,l))switch(g=
f[l],typeof g){case "undefined":case "unknown":case "function":break;default:d&&p.push(","),d=1,p.push(m(l)+":"+m(g))}p.push("}");return p.join("")}}}();mt.localStorage={};mt.localStorage.T=function(){if(!mt.localStorage.j)try{mt.localStorage.j=document.createElement("input"),mt.localStorage.j.type="hidden",mt.localStorage.j.style.display="none",mt.localStorage.j.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.j)}catch(b){return u}return s};
mt.localStorage.set=function(b,a,d){var f=new Date;f.setTime(f.getTime()+d||31536E6);try{window.localStorage?(a=f.getTime()+"|"+a,window.localStorage.setItem(b,a)):mt.localStorage.T()&&(mt.localStorage.j.expires=f.toUTCString(),mt.localStorage.j.load(document.location.hostname),mt.localStorage.j.setAttribute(b,a),mt.localStorage.j.save(document.location.hostname))}catch(k){}};
mt.localStorage.get=function(b){if(window.localStorage){if(b=window.localStorage.getItem(b)){var a=b.indexOf("|"),d=b.substring(0,a)-0;if(d&&d>(new Date).getTime())return b.substring(a+1)}}else if(mt.localStorage.T())try{return mt.localStorage.j.load(document.location.hostname),mt.localStorage.j.getAttribute(b)}catch(f){}return t};
mt.localStorage.remove=function(b){if(window.localStorage)window.localStorage.removeItem(b);else if(mt.localStorage.T())try{mt.localStorage.j.load(document.location.hostname),mt.localStorage.j.removeAttribute(b),mt.localStorage.j.save(document.location.hostname)}catch(a){}};mt.sessionStorage={};mt.sessionStorage.set=function(b,a){if(window.sessionStorage)try{window.sessionStorage.setItem(b,a)}catch(d){}};
mt.sessionStorage.get=function(b){return window.sessionStorage?window.sessionStorage.getItem(b):t};mt.sessionStorage.remove=function(b){window.sessionStorage&&window.sessionStorage.removeItem(b)};mt.Aa={};mt.Aa.log=function(b,a){var d=new Image,f="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[f]=d;d.onload=d.onerror=d.onabort=function(){d.onload=d.onerror=d.onabort=t;d=window[f]=t;a&&a(b)};d.src=b};mt.la={};
mt.la.ib=function(){var b="";if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];a&&a.description&&(b=a.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b=a.GetVariable("$version"))&&(b=b.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(d){}return b};
mt.la.Qb=function(b,a,d,f,k){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+b+'" width="'+d+'" height="'+f+'"><param name="movie" value="'+a+'" /><param name="flashvars" value="'+(k||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+b+'" width="'+d+'" height="'+f+'" src="'+a+'" flashvars="'+(k||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.k=function(b,a){var d=b.match(RegExp("(^|&|\\?|#)("+a+")=([^&#]*)(&|$|#)",""));return d?d[3]:t};mt.url.Sb=function(b){return(b=b.match(/^(https?:)\/\//))?b[1]:t};mt.url.bb=function(b){return(b=b.match(/^(https?:\/\/)?([^\/\?#]*)/))?b[2].replace(/.*@/,""):t};mt.url.aa=function(b){return(b=mt.url.bb(b))?b.replace(/:\d+$/,""):b};mt.url.ba=function(b){return(b=b.match(/^(https?:\/\/)?[^\/]*(.*)/))?b[2].replace(/[\?#].*/,"").replace(/^$/,"/"):t};
(function(){function b(){for(var a=u,b=document.getElementsByTagName("script"),f=b.length,f=100<f?100:f,k=0;k<f;k++){var l=b[k].src;if(l&&0===l.indexOf("https://hm.baidu.com/h")){a=s;break}}return a}return h.Va=b})();var A=h.Va;
h.l={Tb:"http://tongji.baidu.com/hm-web/welcome/ico",ia:"hm.baidu.com/hm.gif",Ha:"tongji.baidu.com",ob:"hmmd",pb:"hmpl",Mb:"utm_medium",nb:"hmkw",Ob:"utm_term",lb:"hmci",Lb:"utm_content",qb:"hmsr",Nb:"utm_source",mb:"hmcu",Kb:"utm_campaign",A:0,o:Math.round(+new Date/1E3),C:Math.round(+new Date/1E3)%65535,protocol:"https:"===document.location.protocol?"https:":"http:",P:A()||"https:"===document.location.protocol?"https:":"http:",Ub:0,Na:6E5,ub:6E5,Cb:5E3,Oa:5,B:1024,Ma:1,I:2147483647,Ba:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt hh".split(" "),
G:s,qa:["a","input","button"],Ja:{id:"data-hm-id",W:"data-hm-class",na:"data-hm-xpath",content:"data-hm-content",S:"data-hm-tag",link:"data-hm-link"},pa:"data-hm-enabled",oa:"data-hm-disabled"};(function(){var b={r:{},c:function(a,b){this.r[a]=this.r[a]||[];this.r[a].push(b)},L:function(a,b){this.r[a]=this.r[a]||[];for(var f=this.r[a].length,k=0;k<f;k++)this.r[a][k](b)}};return h.w=b})();
(function(){function b(b,f){var k=document.createElement("script");k.charset="utf-8";a.d(f,"Function")&&(k.readyState?k.onreadystatechange=function(){if("loaded"===k.readyState||"complete"===k.readyState)k.onreadystatechange=t,f()}:k.onload=function(){f()});k.src=b;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(k,l)}var a=mt.lang;return h.load=b})();
(function(){var b=mt.e,a=mt.lang,d=mt.event,f=mt.g,k=h.l,l=h.w,p=[],m={Ca:function(){c.ctrk&&(d.c(document,"mouseup",m.La()),d.c(window,"unload",function(){m.Q()}),setInterval(function(){m.Q()},k.Na))},La:function(){return function(e){e=m.Ya(e);if(""!==e){var a=(k.P+"//"+k.ia+"?"+h.b.za().replace(/ep=[^&]*/,"ep="+encodeURIComponent(e))).length;a+(k.I+"").length>k.B||(a+encodeURIComponent(p.join("!")+(p.length?"!":"")).length+(k.I+"").length>k.B&&m.Q(),p.push(e),(p.length>=k.Oa||/\*a\*/.test(e))&&
m.Q())}}},Ya:function(e){var g=e.target||e.srcElement;if(0===k.Ma){var n=(g.tagName||"").toLowerCase();if("embed"==n||"object"==n)return""}var q;f.da?(q=Math.max(document.documentElement.scrollTop,document.body.scrollTop),n=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),n=e.clientX+n,q=e.clientY+q):(n=e.pageX,q=e.pageY);e=m.cb(e,g,n,q);var d=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:n-=d/2;break;case 2:n-=d}d=
[];d.push(n);d.push(q);d.push(e.vb);d.push(e.wb);d.push(e.yb);d.push(a.h(e.xb));d.push(e.Pb);d.push(e.jb);(g="a"===(g.tagName||"").toLowerCase()?g:b.Xa(g))?(d.push("a"),d.push(a.h(encodeURIComponent(g.href)))):d.push("b");return d.join("*")},cb:function(e,d,n,q){e=b.ta(d);var g=0,v=0,k=0,l=0;if(d&&(g=d.offsetWidth||d.clientWidth,v=d.offsetHeight||d.clientHeight,l=b.eb(d),k=l.left,l=l.top,a.d(d.getBBox,"Function")&&(v=d.getBBox(),g=v.width,v=v.height),"html"===(d.tagName||"").toLowerCase()))g=Math.max(g,
d.clientWidth),v=Math.max(v,d.clientHeight);return{vb:Math.round(100*((n-k)/g)),wb:Math.round(100*((q-l)/v)),yb:f.orientation,xb:e,Pb:g,jb:v}},Q:function(){0!==p.length&&(h.b.a.et=2,h.b.a.ep=p.join("!"),h.b.i(),p=[])}},g={Fa:function(){c.ctrk&&setInterval(g.Db,k.Cb)},Db:function(){var e=f.D()+f.z();0<e-h.b.a.vl&&(h.b.a.vl=e)}};l.c("pv-b",m.Ca);l.c("pv-b",g.Fa);return m})();
(function(){var b=mt.lang,a=mt.e,d=mt.event,f=mt.g,k=h.l,l=h.w,p=+new Date,m=[],g={ra:function(){return function(e){if(h.b&&h.b.G&&c.aet&&c.aet.length){var d=e.target||e.srcElement;if(d){var n=h.b.qa,q=a.getAttribute(d,k.pa)!=t?s:u;if(a.getAttribute(d,k.oa)==t)if(q)g.U(g.$(d,e));else{var f=a.M(d);if(b.F(n,"*")||b.F(n,f))g.U(g.$(d,e));else for(;d.parentNode!=t;){var q=d.parentNode,f=a.M(q),v="a"===f&&b.F(n,"a")?s:u,f="button"===f&&b.F(n,"button")?s:u,l=a.getAttribute(q,k.pa)!=t?s:u;if(a.getAttribute(q,
k.oa)==t&&(v||f||l)){g.U(g.$(q,e));break}d=d.parentNode}}}}}},$:function(e,d){var n={},q=k.Ja;n.id=a.getAttribute(e,q.id)||a.getAttribute(e,"id")||"";n.W=a.getAttribute(e,q.W)||a.getAttribute(e,"class")||"";n.na=a.getAttribute(e,q.na)||a.ta(e);n.content=a.getAttribute(e,q.content)||a.$a(e);n.S=a.getAttribute(e,q.S)||a.M(e);n.link=a.getAttribute(e,q.link)||a.getAttribute(e,"href")||"";n.type=d.type||"click";q=b.wa(e.offsetTop)?e.offsetTop:0;"click"===d.type?q=f.da?d.clientY+Math.max(document.documentElement.scrollTop,
document.body.scrollTop):d.pageY:"touchend"===d.type&&(d.ga&&b.d(d.ga.changedTouches,"Array")&&d.ga.changedTouches.length)&&(q=d.ga.changedTouches[0].pageY);n.Jb=q;return n},U:function(e){var a=b.h,a=[+new Date-(h.b.s!==r?h.b.s:p),a(e.id),a(e.W),a(e.S),a(e.na),a(e.link),a(e.content),e.type,e.Jb].join("*");g.V(a);b.F(["a"],e.S)&&b.d(this.J(),"Function")&&this.J()()},V:function(e){e.length>k.B||(encodeURIComponent(m.join("!")+e).length>k.B&&(g.K(m.join("!")),m=[]),m.push(e))},K:function(e){h.b.a.et=
5;h.b.a.ep=e;h.b.i()},J:function(){return function(){m&&m.length&&(g.K(m.join("!")),m=[])}}};b.ea()&&""!==c.aet&&l.c("pv-b",function(){d.c(document,"click",g.ra());"ontouchend"in document&&d.c(window,"touchend",g.ra());d.c(window,"unload",g.J())});return g})();
(function(){var b=mt.event,a=mt.g,d=h.l,f=h.w,k=+new Date,l=[],p=t,m={Ra:function(){return function(){h.b&&(h.b.G&&c.aet&&c.aet.length)&&(window.clearTimeout(p),p=window.setTimeout(function(){m.Ea(a.D()+a.z())},150))}},Ea:function(a){m.V([+new Date-(h.b.s!==r?h.b.s:k),a].join("*"))},V:function(a){if(encodeURIComponent(l.join("!")+a).length>d.B||5<l.length)m.K(l.join("!")),l=[];l.push(a)},K:function(b){h.b.a.et=6;h.b.a.vh=a.z();h.b.a.ep=b;h.b.i()},J:function(){return function(){l&&l.length&&(m.K(l.join("!")),
l=[])}}};mt.lang.ea()&&""!==c.aet&&f.c("pv-b",function(){b.c(window,"scroll",m.Ra());b.c(window,"unload",m.J())});return m})();
(function(){function b(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.X.fb()+","+h.X.ab();h.b.i()}}function a(){clearTimeout(z);var b;v&&(b="visible"==document[v]);y&&(b=!document[y]);m="undefined"==typeof b?s:b;if((!p||!g)&&m&&e)x=s,n=+new Date;else if(p&&g&&(!m||!e))x=u,q+=+new Date-n;p=m;g=e;z=setTimeout(a,100)}function d(e){var a=document,b="";if(e in a)b=e;else for(var n=["webkit","ms","moz","o"],d=0;d<n.length;d++){var q=n[d]+e.charAt(0).toUpperCase()+e.slice(1);if(q in a){b=
q;break}}return b}function f(b){if(!("focus"==b.type||"blur"==b.type)||!(b.target&&b.target!=window))e="focus"==b.type||"focusin"==b.type?s:u,a()}var k=mt.event,l=h.w,p=s,m=s,g=s,e=s,w=+new Date,n=w,q=0,x=s,v=d("visibilityState"),y=d("hidden"),z;a();(function(){var e=v.replace(/[vV]isibilityState/,"visibilitychange");k.c(document,e,a);k.c(window,"pageshow",a);k.c(window,"pagehide",a);"object"==typeof document.onfocusin?(k.c(document,"focusin",f),k.c(document,"focusout",f)):(k.c(window,"focus",f),
k.c(window,"blur",f))})();h.X={fb:function(){return+new Date-w},ab:function(){return x?+new Date-n+q:q}};l.c("pv-b",function(){k.c(window,"unload",b())});return h.X})();
(function(){var b=mt.lang,a=h.l,d=h.load,f={tb:function(f){if((window._dxt===r||b.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var l=h.b.Z();d([a.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(l)].join(""),f)}},Ib:function(a){if(b.d(a,"String")||b.d(a,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",a])}};return h.Pa=f})();
(function(){function b(e,a,b,d){if(!(e===r||a===r||d===r)){if(""===e)return[a,b,d].join("*");e=String(e).split("!");for(var f,g=u,k=0;k<e.length;k++)if(f=e[k].split("*"),String(a)===f[0]){f[1]=b;f[2]=d;e[k]=f.join("*");g=s;break}g||e.push([a,b,d].join("*"));return e.join("!")}}function a(e){for(var b in e)if({}.hasOwnProperty.call(e,b)){var n=e[b];d.d(n,"Object")||d.d(n,"Array")?a(n):e[b]=String(n)}}var d=mt.lang,f=mt.m,k=mt.g,l=h.l,p=h.w,m=h.Pa,g={H:[],R:0,xa:u,p:{ma:"",page:""},init:function(){g.f=
0;p.c("pv-b",function(){g.Qa();g.Ta()});p.c("pv-d",function(){g.Ua();g.p.page=""});p.c("stag-b",function(){h.b.a.api=g.f||g.R?g.f+"_"+g.R:"";h.b.a.ct=[decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),g.p.ma,g.p.page].join("!")});p.c("stag-d",function(){h.b.a.api=0;g.f=0;g.R=0})},Qa:function(){var e=window._hmt||[];if(!e||d.d(e,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var e=window._hmt,a=0;a<arguments.length;a++){var b=arguments[a];d.d(b,"Array")&&(e.cmd[e.id].push(b),"_setAccount"===
b[0]&&(1<b.length&&/^[0-9a-f]{32}$/.test(b[1]))&&(b=b[1],e.id=b,e.cmd[b]=e.cmd[b]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,e)},Ta:function(){var e=window._hmt;if(e&&e.cmd&&e.cmd[c.id])for(var a=e.cmd[c.id],b=/^_track(Event|MobConv|Order|RTEvent)$/,d=0,f=a.length;d<f;d++){var k=a[d];b.test(k[0])?g.H.push(k):g.ha(k)}e.cmd[c.id]={push:g.ha}},Ua:function(){if(0<g.H.length)for(var e=0,a=g.H.length;e<a;e++)g.ha(g.H[e]);g.H=t},ha:function(e){var a=e[0];if(g.hasOwnProperty(a)&&
d.d(g[a],"Function"))g[a](e)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(g.f|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],u===a||s===a))g.f|=2,h.b.ua=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){g.f|=4;h.b.a.et=0;h.b.a.ep="";h.b.a.vl=k.D()+k.z();h.b.a.kb=0;h.b.ca?(h.b.a.nv=0,h.b.a.st=4):h.b.ca=s;var b=h.b.a.u,n=h.b.a.su;h.b.a.u=l.protocol+"//"+document.location.host+a[1];g.xa||(h.b.a.su=document.location.href);h.b.i();h.b.a.u=b;
h.b.a.su=n;h.b.s=+new Date}},_trackEvent:function(a){2<a.length&&(g.f|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=d.h(a[1])+"*"+d.h(a[2])+(a[3]?"*"+d.h(a[3]):"")+(a[4]?"*"+d.h(a[4]):""),h.b.i())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],n=a[4]||3;if(0<b&&6>b&&0<n&&4>n){g.R++;for(var f=(h.b.a.cv||"*").split("!"),k=f.length;k<b-1;k++)f.push("*");f[b-1]=n+"*"+d.h(a[2])+"*"+d.h(a[3]);h.b.a.cv=f.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.b.setData("Hm_cv_"+
c.id,encodeURIComponent(a),c.age):h.b.Ab("Hm_cv_"+c.id)}}},_setUserTag:function(a){if(!(3>a.length)){var f=d.h(a[1]);a=d.h(a[2]);if(f!==r&&a!==r){var n=decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),n=b(n,f,1,a);h.b.setData("Hm_ct_"+c.id,encodeURIComponent(n),c.age)}}},_setVisitTag:function(a){if(!(3>a.length)){var f=d.h(a[1]);a=d.h(a[2]);if(f!==r&&a!==r){var n=g.p.ma,n=b(n,f,2,a);g.p.ma=n}}},_setPageTag:function(a){if(!(3>a.length)){var f=d.h(a[1]);a=d.h(a[2]);if(f!==r&&a!==r){var n=g.p.page,
n=b(n,f,3,a);g.p.page=n}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"===a[1].charAt(0)?l.protocol+"//"+window.location.host+a[1]:a[1],g.xa=s)},_trackOrder:function(b){b=b[1];d.d(b,"Object")&&(a(b),g.f|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=f.stringify(b),h.b.i())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])g.f|=32,h.b.a.et=93,h.b.a.ep=a,h.b.i()},_trackRTPageview:function(b){b=b[1];d.d(b,"Object")&&(a(b),b=f.stringify(b),
512>=encodeURIComponent(b).length&&(g.f|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(d.d(b,"Object")){a(b);b=encodeURIComponent(f.stringify(b));var k=function(a){var b=h.b.a.rt;g.f|=128;h.b.a.et=90;h.b.a.rt=a;h.b.i();h.b.a.rt=b},n=b.length;if(900>=n)k.call(this,b);else for(var n=Math.ceil(n/900),q="block|"+Math.round(Math.random()*l.I).toString(16)+"|"+n+"|",m=[],v=0;v<n;v++)m.push(v),m.push(b.substring(900*v,900*v+900)),k.call(this,q+m.join("|")),m=[]}},_setUserId:function(a){a=a[1];m.tb();
m.Ib(a)},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],u===a||s===a))h.b.va=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],u===a||s===a))h.b.G=a}};g.init();h.Ia=g;return h.Ia})();
(function(){function b(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=s,this.a={},this.va=this.ua=s,this.G=e.G,this.qa=k.ea()&&0<c.aet.length?c.aet.split(","):"",this.ca=u,this.init())}var a=mt.url,d=mt.Aa,f=mt.la,k=mt.lang,l=mt.cookie,p=mt.g,m=mt.localStorage,g=mt.sessionStorage,e=h.l,w=h.w;b.prototype={fa:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},ya:function(a,b){a=a.replace(/^https?:\/\//,
"");return 0===a.indexOf(b)},N:function(b){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.ya(b,c.dm[d]))return s}else{var e=a.aa(b);if(e&&this.fa(e,c.dm[d]))return s}return u},Z:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.fa(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},sa:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.ya(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,
"$1")+"/"}return"/"},gb:function(){if(!document.referrer)return e.o-e.A>c.vdur?1:4;var b=u;this.N(document.referrer)&&this.N(document.location.href)?b=s:(b=a.aa(document.referrer),b=this.fa(b||"",document.location.hostname));return b?e.o-e.A>c.vdur?1:4:3},getData:function(a){try{return l.get(a)||g.get(a)||m.get(a)}catch(b){}},setData:function(a,b,d){try{l.set(a,b,{domain:this.Z(),path:this.sa(),Y:d}),d?m.set(a,b,d):g.set(a,b)}catch(e){}},Ab:function(a){try{l.set(a,"",{domain:this.Z(),path:this.sa(),
Y:-1}),g.remove(a),m.remove(a)}catch(b){}},Gb:function(){var a,b,d,f,g;e.A=this.getData("Hm_lpvt_"+c.id)||0;13===e.A.length&&(e.A=Math.round(e.A/1E3));b=this.gb();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){f=d.split(",");for(g=f.length-1;0<=g;g--)13===f[g].length&&(f[g]=""+Math.round(f[g]/1E3));for(;2592E3<e.o-f[0];)f.shift();g=4>f.length?2:3;for(1===a&&f.push(e.o);4<f.length;)f.shift();d=f.join(",");f=f[f.length-1]}else d=e.o,f="",g=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+
c.id,e.o);d=e.o===this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.N(document.location.href)&&(""===document.referrer||this.N(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=f;this.a.lv=g},za:function(){for(var a=[],b=this.a.et,d=+new Date,f=0,g=e.Ba.length;f<g;f++){var k=e.Ba[f],l=this.a[k];"undefined"!==typeof l&&""!==l&&("tt"!==k||"tt"===k&&0===b)&&(("ct"!==k||"ct"===k&&0===b)&&("kb"!==k||"kb"===k&&3===b))&&a.push(k+"="+encodeURIComponent(l))}switch(b){case 0:a.push("sn="+
e.C);this.a.rt&&a.push("rt="+encodeURIComponent(this.a.rt));break;case 3:a.push("sn="+e.C);break;case 5:a.push("sn="+e.C);a.push("_lpt="+this.s);a.push("_ct="+d);break;case 6:a.push("sn="+e.C);a.push("_lpt="+this.s);a.push("_ct="+d);break;case 85:a.push("sn="+e.C);break;case 90:this.a.rt&&a.push("rt="+this.a.rt)}return a.join("&")},Hb:function(){this.Gb();this.a.si=c.id;this.a.hca="0"===c.hca?r:c.hca;this.a.su=document.referrer;this.a.hh=window.location.hash;this.a.ds=p.Bb;this.a.cl=p.colorDepth+
"-bit";this.a.ln=String(p.language).toLowerCase();this.a.ja=p.javaEnabled?1:0;this.a.ck=p.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=f.ib();this.a.v="1.2.39";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";this.a.vl=p.D()+p.z();var b=document.location.href;this.a.cm=a.k(b,e.ob)||"";this.a.cp=a.k(b,e.pb)||a.k(b,e.Mb)||"";this.a.cw=a.k(b,e.nb)||a.k(b,e.Ob)||"";this.a.ci=a.k(b,e.lb)||a.k(b,e.Lb)||"";this.a.cf=a.k(b,e.qb)||a.k(b,e.Nb)||
"";this.a.cu=a.k(b,e.mb)||a.k(b,e.Kb)||""},init:function(){try{this.Hb(),0===this.a.nv?this.Fb():this.ka(".*"),h.b=this,this.Ka(),w.L("pv-b"),this.Eb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));d.log(e.P+"//"+e.ia+"?"+b.join("&"))}},Eb:function(){function a(){w.L("pv-d")}this.ua?(this.ca=s,this.a.et=0,this.a.ep="",this.a.vl=p.D()+p.z(),this.i(a)):a();this.s=+new Date},i:function(a){if(this.va){var b=
this;b.a.rnd=Math.round(Math.random()*e.I);w.L("stag-b");var f=e.P+"//"+e.ia+"?"+b.za();w.L("stag-d");b.Ga(f);d.log(f,function(d){b.ka(d);k.d(a,"Function")&&a.call(b)})}},Ka:function(){var b=document.location.hash.substring(1),d=RegExp(c.id),f=a.aa(document.referrer)===e.Ha?1:0,g=a.k(b,"jn"),k=/^heatlink$|^select$|^pageclick$/.test(g);b&&(d.test(b)&&f&&k)&&(this.a.rnd=Math.round(Math.random()*e.I),b=document.createElement("script"),b.setAttribute("type","text/javascript"),b.setAttribute("charset",
"utf-8"),b.setAttribute("src",e.protocol+"//"+c.js+g+".js?"+this.a.rnd),g=document.getElementsByTagName("script")[0],g.parentNode.insertBefore(b,g))},Ga:function(a){var b=g.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");g.set("Hm_unsent_"+c.id,b)},ka:function(a){var b=g.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+
"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,""))?g.set("Hm_unsent_"+c.id,b):g.remove("Hm_unsent_"+c.id))},Fb:function(){var a=this,b=g.get("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),f=function(b){d.log(e.P+"//"+decodeURIComponent(b),function(b){a.ka(b)})},k=0,l=b.length;k<l;k++)f(b[k])}};return new b})();
(function(){var b=mt.event,a=mt.lang,d=h.l;if(c.kbtrk&&"undefined"!==typeof h.b){h.b.a.kb=a.wa(h.b.a.kb)?h.b.a.kb:0;var f=function(){h.b.a.et=85;h.b.a.ep=h.b.a.kb;h.b.i()};b.c(document,"keyup",function(){h.b.a.kb++});b.c(window,"unload",function(){f()});setInterval(f,d.ub)}})();var B=h.l,C=h.load;c.pt&&C([B.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
(function(){var b=mt.g,a=mt.lang,d=mt.event,f=mt.m;if("undefined"!==typeof h.b&&(c.med||(!b.da||7<b.rb)&&c.cvcc)){var k,l,p,m,g=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},e=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===u)return u},w=function(b,d){var e={};e.n=k;e.t="clk";e.v=b;if(d){var g=d.getAttribute("href"),l=d.getAttribute("onclick")?""+d.getAttribute("onclick"):t,m=d.getAttribute("id")||"";p.test(g)?(e.sn="mediate",
e.snv=g):a.d(l,"String")&&p.test(l)&&(e.sn="wrap",e.snv=l);e.id=m}h.b.a.et=86;h.b.a.ep=f.stringify(e);h.b.i();for(e=+new Date;400>=+new Date-e;);};if(c.med)l="/zoosnet",k="swt",p=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,m={click:function(){for(var a=[],b=g(document.getElementsByTagName("a")),b=[].concat.apply(b,g(document.getElementsByTagName("area"))),b=[].concat.apply(b,g(document.getElementsByTagName("img"))),d,e,f=0,k=b.length;f<k;f++)d=b[f],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(p.test(e)||p.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){l="/other-comm";k="other";p=c.cvcc.q||r;var n=c.cvcc.id||r;m={click:function(){for(var a=[],b=g(document.getElementsByTagName("a")),b=[].concat.apply(b,g(document.getElementsByTagName("area"))),b=[].concat.apply(b,g(document.getElementsByTagName("img"))),d,e,f,k=0,l=b.length;k<l;k++)d=b[k],p!==r?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),n?(d=d.getAttribute("id"),(p.test(e)||p.test(f)||n.test(d))&&
a.push(b[k])):(p.test(e)||p.test(f))&&a.push(b[k])):n!==r&&(d=d.getAttribute("id"),n.test(d)&&a.push(b[k]));return a}}}if("undefined"!==typeof m&&"undefined"!==typeof p){var q;l+=/\/$/.test(l)?"":"/";var x=function(b,d){if(q===d)return w(l+b,d),u;if(a.d(d,"Array")||a.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(q===d[e])return w(l+b+"/"+(e+1),d[e]),u};d.c(document,"mousedown",function(b){b=b||window.event;q=b.target||b.srcElement;var d={};for(e(m,function(b,e){d[b]=a.d(e,"Function")?e():document.getElementById(e)});q&&
q!==document&&e(d,x)!==u;)q=q.parentNode})}}})();(function(){var b=mt.e,a=mt.lang,d=mt.event,f=mt.m;if("undefined"!==typeof h.b&&a.d(c.cvcf,"Array")&&0<c.cvcf.length){var k={Da:function(){for(var a=c.cvcf.length,f,m=0;m<a;m++)(f=b.Wa(decodeURIComponent(c.cvcf[m])))&&d.c(f,"click",k.Sa())},Sa:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=f.stringify(a);h.b.i()}}};b.zb(function(){k.Da()})}})();
(function(){var b=mt.event,a=mt.m;if(c.med&&"undefined"!==typeof h.b){var d=+new Date,f={n:"anti",sb:0,kb:0,clk:0},k=function(){h.b.a.et=86;h.b.a.ep=a.stringify(f);h.b.i()};b.c(document,"click",function(){f.clk++});b.c(document,"keyup",function(){f.kb=1});b.c(window,"scroll",function(){f.sb++});b.c(window,"unload",function(){f.t=+new Date-d;k()});b.c(window,"load",function(){setTimeout(k,5E3)})}})();})();