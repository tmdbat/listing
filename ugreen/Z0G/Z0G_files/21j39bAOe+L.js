'use strict';mix_d("SimilaritiesUICards__p13n-desktop-sims-fbt:p13n-desktop-sims-fbt__eDzLsCBJ",["exports","tslib","@c/browser-operations","@c/remote-operations","@c/scoped-dom"],function(u,l,L,M,N){function h(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}var O=h(L),P=h(M),d=h(N),z=function(a){return l.__awaiter(void 0,void 0,void 0,function(){var e,m,c,b,A,B,f,E,v,n,p,h,q,r,w,F,x,u,k,C;return l.__generator(this,function(l){c=d["default"].cardRoot.getElementsByClassName("cardRoot")[0];
b=1;c&&c.dataset.count&&(b=Number(c.dataset.count));c&&c.dataset.components&&(A=JSON.parse(c.dataset.components));c&&c.dataset.addToCart&&(B=JSON.parse(c.dataset.addToCart));c&&c.dataset.priceTotals&&(f=JSON.parse(c.dataset.priceTotals));c&&c.dataset.pointsTotal&&(E=JSON.parse(c.dataset.pointsTotal));if(A&&f){l=A;for(var H=b,z=[],I=[],g=0;g<H;g++){var t=g+1;1<t&&(z[g]=d["default"].cardRoot.getElementsByClassName("thumbnailPlus-"+String(t))[0]);I[g]=d["default"].cardRoot.getElementsByClassName("thumbnail-"+
String(t))[0]}var G=!1,J=0,K="";for(g=0;g<H;g++){t=String(g+1);var y=z[g],D=I[g];l[t]&&l[t].checked?(J++,K+=t,0===g?G=!0:y&&(G?y.style.display="unset":(G=!0,y.style.display="none")),D&&(D.style.display="unset")):(y&&(y.style.display="none"),D&&(D.style.display="none"))}e=J;m=K;v=e;n=f[m];p=d["default"].cardRoot.getElementsByClassName(a.totalLabel)[0];h=d["default"].cardRoot.getElementsByClassName(a.totalAmount)[0];q=d["default"].cardRoot.getElementsByClassName(a.addItems)[0];r=d["default"].cardRoot.getElementsByClassName(a.chooseItems)[0];
w=d["default"].cardRoot.getElementsByClassName(a.actionDetails)[0];0===v?(q&&(q.style.display="none"),p&&(p.style.display="none"),r&&(r.style.display="unset"),w&&(w.style.visibility="hidden")):(n?(p&&h&&(h.innerText=n,p.style.display="block"),q&&(q.style.display="none"),r&&(r.style.display="none")):(q&&(q.style.display="inline-block"),r&&(r.style.display="none"),p&&(p.style.display="none")),w&&(w.style.visibility="visible"));c&&A&&E&&(F=d["default"].cardRoot.getElementsByClassName(a.pointsAmount)[0],
x=d["default"].cardRoot.getElementsByClassName(a.totalPointsLabel)[0],(u=E[m])?x&&F&&(F.innerText=u,x.style.display="block"):x&&(x.style.display="none"));k=d["default"].cardRoot.getElementsByClassName(a.addAllButton)[0];C=void 0;k&&(C=k.getElementsByClassName("a-button-text")[0]);0===v?k&&!k.classList.contains("a-button-disabled")&&k.classList.add("a-button-disabled"):(k&&k.classList.contains("a-button-disabled")&&k.classList.remove("a-button-disabled"),C&&B&&B.length>=v&&(C.innerText=B[v-1]))}return[2]})})},
n;(function(a){a.clickHandler="clickHandler";a.checkHandler="checkHandler";a.popupHandler="popupHandler"})(n||(n={}));var e={simsFbtContainter:"_p13n-desktop-sims-fbt_fbt-desktop_sims-fbt-containter__2Cffh",thumbnailBox:"_p13n-desktop-sims-fbt_fbt-desktop_thumbnail-box__4jnIT",thumbnailPlus:"_p13n-desktop-sims-fbt_fbt-desktop_thumbnail-plus__zdWox",productBox:"_p13n-desktop-sims-fbt_fbt-desktop_product-box__3PBxY",itemDetailsPerAsin:"_p13n-desktop-sims-fbt_fbt-desktop_item-details-per-asin__3DtF1",
fbtItemCheck:"_p13n-desktop-sims-fbt_fbt-desktop_fbt-item-check__pUIoy",addAllButton:"_p13n-desktop-sims-fbt_fbt-desktop_add-all-button__1TRXG",totalLabel:"_p13n-desktop-sims-fbt_fbt-desktop_total-label__dI983",totalPointsLabel:"_p13n-desktop-sims-fbt_fbt-desktop_total-points-label__3r09H",addItems:"_p13n-desktop-sims-fbt_fbt-desktop_add-items__16weX",chooseItems:"_p13n-desktop-sims-fbt_fbt-desktop_choose-items__15UQx",totalAmount:"_p13n-desktop-sims-fbt_fbt-desktop_total-amount__wLVdU",pointsAmount:"_p13n-desktop-sims-fbt_fbt-desktop_points-amount__1SNdT",
priceAddToCartBox:"_p13n-desktop-sims-fbt_fbt-desktop_price-add-to-cart-box__3OUdK",shipMessageBox:"_p13n-desktop-sims-fbt_fbt-desktop_ship-message-box__t-OOr",shippingInfoShowBox:"_p13n-desktop-sims-fbt_fbt-desktop_shipping-info-show-box__17yWM",showDetailsBox:"_p13n-desktop-sims-fbt_fbt-desktop_show-details-box__-R3Xb",showDetails:"_p13n-desktop-sims-fbt_fbt-desktop_show-details__3GnPL",hideDetails:"_p13n-desktop-sims-fbt_fbt-desktop_hide-details__28l17",simsFbtUnselectedItem:"_p13n-desktop-sims-fbt_fbt-desktop_sims-fbt-unselected-item__VQmZx",
simsFbtRows:"_p13n-desktop-sims-fbt_fbt-desktop_sims-fbt-rows__2LJXs",bucketDivider:"_p13n-desktop-sims-fbt_fbt-desktop_bucket-divider__25poP",titleTruncate:"_p13n-desktop-sims-fbt_fbt-desktop_title-truncate__1pPAM",detailRowElement:"_p13n-desktop-sims-fbt_fbt-desktop_detail-row-element__2WDgq",detailRowElementLeftMargin:"_p13n-desktop-sims-fbt_fbt-desktop_detail-row-element-left-margin__UkZ8O",actionDetails:"_p13n-desktop-sims-fbt_fbt-desktop_action-details__18ZiI"};u._operationNames=["getValueNoParams"];
u.card=function(){return l.__awaiter(void 0,void 0,void 0,function(){var a,h,m;return l.__generator(this,function(c){a=O["default"].setup().define;h=P["default"].setup();h.getValueNoParams();if(!d["default"].cardRoot)return[2];z(e);m=!0;a(n.clickHandler,"click",function(b){if(b.event.target){b=d["default"].cardRoot.getElementsByClassName(e.shippingInfoShowBox);var a=d["default"].cardRoot.getElementsByClassName(e.showDetails)[0],c=d["default"].cardRoot.getElementsByClassName(e.hideDetails)[0];a&&(m?
(a.style.display="none",c.style.display="unset",b&&([].forEach.call(b,function(b,a){b.style.display="block"}),m=!1)):(a.style.display="unset",c.style.display="none",b&&[].forEach.call(b,function(b,a){b.style.display="none"}),m=!0))}});a(n.checkHandler,"click",function(b){b=b.event.target;if(!b||"fbtCheck"===b.id.substr(0,8)){for(;b&&!b.classList.contains(e.fbtItemCheck);)b=b.parentElement;if(b){var a=b.id,c=d["default"].cardRoot.getElementsByClassName("cardRoot")[0],f=void 0;c&&c.dataset.components&&
(f=JSON.parse(c.dataset.components));f&&f[a]&&(f[a].checked=!f[a].checked);f&&f[a].checked&&(b.classList.contains(e.simsFbtUnselectedItem)&&b.classList.remove(e.simsFbtUnselectedItem),b.classList.contains(e.fbtCheckDetails)||b.classList.add(e.fbtCheckDetails));f&&!f[a].checked&&(b.classList.remove(e.fbtCheckDetails),b.classList.add(e.simsFbtUnselectedItem));c.dataset.components=JSON.stringify(f);z(e)}}});return[2]})})}});
