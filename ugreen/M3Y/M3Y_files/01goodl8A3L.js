'use strict';mix_d("FirebirdSpCards__sp-rhf-desktop-carousel:sp-rhf-desktop-carousel__VkX4q4qw","exports tslib @c/aui-carousel @c/dom @c/remote-operations @c/scoped-dom @p/A @p/a-carousel-framework".split(" "),function(c,f,n,p,q,r,t,u){function a(b){return b&&"object"===typeof b&&"default"in b?b:{"default":b}}var v=a(n),w=a(q),x=a(r),g=a(t),y=a(u);c._operationNames=["getCarouselItems"];c.card=function(b){return f.__awaiter(void 0,void 0,void 0,function(){var a,c,k,h,l,d,e;return f.__generator(this,
function(m){switch(m.label){case 0:return a=x["default"].cardRoot.getElementsByClassName("sp-shoveler")[0],c=w["default"].setup(["getCarouselItems"]),k=y["default"].getCarousel(p.unscope(a)),h=v["default"].getCarousel(a),l=a.dataset||{},d=k.getAttr("name"),e=function(){g["default"].loadDynamicImage("[data-name]='"+d+"' .sp-dynamic-image");null===b||void 0===b?void 0:b(a)},[4,h.initialized];case 1:return m.sent(),g["default"].on("a:carousel:"+d+":change:pageSize",e),g["default"].on("a:carousel:"+d+
":change:loading",e),g["default"].on("a:carousel:"+d+":change:animating",e),e(),h.attachRemoteOperation(function(a){var b=a.indexes;a=a.ids;return c.getCarouselItems(f.__assign(f.__assign({},l),{ids:a,indexes:b,offset:String(b[0]||0)}))}),[2]}})})}});
