(function(g){var n=window.AmazonUIPageJS||window.P,q=n._namespace||n.attributeErrors,p=q?q("DetailPageWirelessPlansAssets",""):n;p.guardFatal?p.guardFatal(g)(p,window):p.execute(function(){g(p,window)})})(function(g,n,q){g.when("A","wireless-plans-ajax-support","wireless-plans-constants","ready").execute("wireless-plans-desktop-ajax",function(a,b,f){function d(c){b.loadAjaxContent("wirelessPlansDesktopAjax,wirelessPlans","desktop","ready",c)}a.on(f.actions.atfRefresh,function(){return d("atfRefresh")});
d("initialPageLoad")});"use strict";g.when("A","wireless-plans-constants","wireless-plans-csm-helper").register("wireless-plans-ajax-support",function(a,b,f){function d(m){h(c.ajaxSpinner).hide();h(c.ajaxErrorMessage).removeClass(e.hidden);g.log(m,"WARN",k)}var c=b.selectors,e=b.classes,k=b.featureName,l=b.actions,h=a.$;return{loadAjaxContent:function(m,e,b,k){var g=h(c.asinInput).val(),r=h(c.expanderContent);0!==r.length&&(f.logBeforeAjax(g),a.ajax("/gp/product/features/wisper/wisper-ask-btf.html",
{method:"get",params:{asin:g,showFeatures:m,deviceType:e},accepts:"text/html; charset\x3dutf-8",success:function(c){c&&/\w/.test(c)?(r.html(c),a.trigger(l.ajaxSuccess),f.logAfterAjaxResponse(),"desktop"===e&&"initialPageLoad"===k&&f.incrementCount(b+"ccTTI",n.performance.now())):d("Received malformed response from wireless plans Ajax endpoint.")},failure:function(){d("Failed to fetch data via wireless plans Ajax endpoint")}}))}}});"use strict";g.when("A","cc-manager","wireless-plans-constants","wireless-plans-desktop-registration").register("wireless-plans-mod-support",
function(a,b,f){var d=f.selectors,c=f.classes,e=f.buyingOptionNewRowName,k=f.buyingOptionUsedRowName,l=a.$,h="."+c.incompatibleMessage;a.on(f.actions.buyBoxSelection,function(m){if(0!==l(d.desktopContainer).length){m=m.selectedRow.rowName;var a=m===e;l(d.pinnedHeader).add(d.hideWhenIncompatible).toggleClass(c.hidden,!a);l(h).remove();if(!a){a=l(d.desktopContainer).find(d.incompatibleWidget).clone();a.removeClass().addClass(c.incompatibleMessage);l(d.desktopContainer).append(a);var a=l("#"+m),b=l(d.desktopDefaultOptionBox).hasClass(c.desktopSelectedPlanBox);
a.find(h).remove();b||(b=l(d.desktopContainer).find(d.incompatibleBuybox).clone(),m=m===k&&a.find(d.usedAddToCart)||a.find(d.installmentAddToCart),b.removeClass().addClass(c.incompatibleMessage),m.append(b))}}})});"use strict";g.when("A").register("wireless-plans-constants",function(){return{selectors:{container:".wireless-plans-container",desktopContainer:".wireless-plans-container-desktop",expandInitiallyInput:".wireless-plans-expand-initially-input",expandAfterSelection:".wireless-plans-expand-after-selection-input",
planItemBox:".wireless-plan-item",desktopPlanItemBox:".a-button",buttonText:".a-button-text",buttonInput:".a-button-input",subtitleCheckMark:".wireless-plans-selected-checkmark",subtitleText:".wireless-plans-subtitle-text",collapsedSubtitle:".default-collapsed-subtitle",expandedSubtitle:".default-expanded-subtitle",expanderImage:".wireless-plans-expander-image",expanderIcon:".wireless-plans-expander-icon",expanderContent:".wireless-plans-expander-content",expanderHeader:".wireless-plans-expander-header",
defaultOptionBox:".wireless-plans-default-option-box",desktopDefaultOptionBox:".default-option-button",selectedHiddenPlanBox:".initial-hidden-item.plan-list-item",pinnedHeader:"#tp-pinned-header",hideWhenIncompatible:".wireless-plans-hide-when-incompatible",incompatibleWidget:".wireless-plans-incompatible-widget",incompatibleBuybox:".wireless-plans-incompatible-buybox",buybox:"#buybox",activeRow:".a-accordion-active",rowHeader:".header-text",addToCart:"#addToCart",listItem:"li",planOptionList:".wireless-plans-options-list",
planAsin:".wireless-plans-asin",defaultBoxSelectAction:"#wireless-plans-default-box-select-action",desktopPlanSelectButton:".wireless-plan-button-select-container",ajaxSpinner:".wireless-plans-ajax-spinner",ajaxErrorMessage:".wireless-plans-ajax-error",asinInput:"#twister-plus-asin",installmentAddToCart:".installmentRowAddToCart",usedAddToCart:"#addToCart_feature_div"},compareTableSelectors:{firstDisplayedPlan:".displayed-plan-first",secondDisplayedPlan:".displayed-plan-second",lastDisplayedPlan:".displayed-plan-last",
backButton:".rotate-select-button-back",nextButton:".rotate-select-button-next"},classes:{selectedPlanBox:"wireless-plan-item-selected",desktopSelectedPlanBox:"a-button-selected",wirelessPlansExpand:"wireless-plans-expander-content-expand",incompatibleMessage:"wireless-plans-incompatible-message",hidden:"aok-hidden",rotate:"rotate",fontClass:"font-weight",hiddenPlanBox:"plan-list-item-hidden",displayPlanBox:"plan-list-item",desktopAllPlansSelected:"selected",desktopSelectButtonByAsinPrefix:"plan-button-select-"},
compareTableClasses:{firstList:"plan-list-first",secondList:"plan-list-second",lastSecondList:"plan-list-last-second",lastList:"plan-list-last",firstDisplayedPlan:"displayed-plan-first",secondDisplayedPlan:"displayed-plan-second",lastDisplayedPlan:"displayed-plan-last",displayedPlanBeforeLast:"displayed-plan-before-last",displayedColumn:"wireless-plan-column-display",hiddenColumn:"wireless-plan-column-hidden",disabledButton:"disabled-button"},viewNames:{learnMore:"wirelessLearnMoreSecondaryView",
compareChart:"wirelessPlansCompareChart"},featureName:"wirelessPlans",featureAttribution:"Website/CETech/WirelessPlans",actions:{expand:"wireless-plans-card:expanded",collapse:"wireless-plans-card:collapse",selectPlan:"wireless-plans-select",desktopSelectPlan:"wireless-plans-desktop-select",desktopRemovePlan:"wireless-plans-desktop-remove-plan",desktopShowLearnMoreDSS:"wireless-plans-show-learn-more-dss",compareChartSelectPlan:"wireless-plans-compare-select-plan",learnMoreSelectPlan:"wireless-plans-learn-more-select-plan",
learnMoreDismiss:"wireless-plans-learn-more-view-dismiss",atfRefresh:"PageRefresh:ATF",toggleExpander:"toggle-wireless-plans-expander",buyBoxSelection:"a:accordion:buybox-accordion:select",ajaxSuccess:"wireless-plans-ajax-success"},compareTableActions:{rotateBack:"rotate-plan-list-back",rotateNext:"rotate-plan-list-next"},buyingOptionPlaceholder:"${optionName}",buyingOptionNewRowName:"newAccordionRow",buyingOptionUsedRowName:"usedAccordionRow",unsupportedBuyingOptionTypes:["UNKNOWN"]}});"use strict";
var p=function(){return function(a,b){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a)){var f=[],d=!0,c=!1,e=q;try{for(var k=a[Symbol.iterator](),l;!(d=(l=k.next()).done)&&(f.push(l.value),!b||f.length!==b);d=!0);}catch(h){c=!0,e=h}finally{try{if(!d&&k["return"])k["return"]()}finally{if(c)throw e;}}return f}throw new TypeError("Invalid attempt to destructure non-iterable instance");}}();g.when("A","wireless-plans-constants","wireless-plans-csm-helper").execute(function(a,b,f){b=b.actions;
[[b.expand,"ccExpanded"],[b.desktopSelectPlan,"ccSelection"],[b.desktopRemovePlan,"ccRemoval"]].forEach(function(b){b=p(b,2);var c=b[1];return a.on(b[0],function(){return f.incrementCount(c)})});a.declarative(b.desktopShowLearnMoreDSS,"click",function(){return f.incrementCount("ccLearnMore")})});"use strict";g.when("A","wireless-plans-constants").register("wireless-plans-csm-helper",function(a,b){function f(a,b){if(c&&a)return b("twisterPlus."+a+"."+d)}var d=b.featureName,c=n.ue,e=n.uet,k=n.ues,l=
n.uex,h=d+"Ajax";return{incrementCount:function(a){var b=1<arguments.length&&arguments[1]!==q?arguments[1]:1;f(a,function(a){return c.count(a,(c.count(a)||0)+b)})},getCount:function(a){return f(a,function(a){return c.count(a)})},logBeforeAjax:function(a){c&&e&&k&&(a=d+a,e("tc",h),k("id",h,a),k("t0",h,new Date),k("ctb",h,"1"))},logAfterAjaxResponse:function(){e&&l&&(e("be",h),l("ld",h))}}});"use strict";g.when("A","cc-manager","wireless-plans-constants").register("wireless-plans-desktop-registration",
function(a,b,f){var d=f.actions;b.registerFeature({featureName:f.featureName,featureAttribution:f.featureAttribution},{init:function(a){},validateInputParams:function(a){return!0},cardCollapse:function(){a.trigger(d.collapse)},switchBuyingOption:function(a,b,d){}});a.on(d.expand,function(){})});"use strict";g.when("A","wireless-plans-constants","side-sheet","cc-manager","wireless-plans-desktop-registration").execute("wireless-plans-desktop-select-actions",function(a,b,f,d){function c(c,b){var f={itemType:"asin",
asin:c.asin,quantity:1,price:Number(c.price),offerListingId:c.offer,selectionType:"add",orderSummaryDisplayString:c.orderSummaryString,shortDisplayTitle:c.shortDisplayTitle,enableIA:!1},g=k.desktopSelectedPlanBox,n=k.fontClass;d.ccSelectionsClear(l);b.closest(e.desktopContainer).find("."+g).removeClass(g);b.closest(e.desktopPlanItemBox).addClass(g);b.siblings(e.buttonText).addClass(n);c.asin&&d.ccSelectionUpdate(l,f);b=m(e.subtitleCheckMark);f=m(e.subtitleText);g=!!c.asin;n="true"===m(e.expandAfterSelection).val();
b.toggleClass(k.hidden,!g);f.toggleClass("a-color-tertiary",!g).toggleClass("a-color-success",g).text(c.expanderSubtitle);g?a.trigger(h.desktopSelectPlan):(m(e.expanderHeader).click(),a.trigger(h.desktopRemovePlan));n&&m(e.expanderHeader).click();m(e.desktopPlanSelectButton).each(function(){m(this).hasClass(""+k.desktopSelectButtonByAsinPrefix+c.asin)?m(this).addClass(k.desktopAllPlansSelected):m(this).removeClass(k.desktopAllPlansSelected)})}var e=b.selectors,k=b.classes,l=b.featureName,h=b.actions,
m=a.$;a.declarative("wireless-plans-desktop-compare-select-plan","click",function(b){var h=m("input[name\x3dwirelessPlanAsin][value\x3d"+b.data.asin+"]");var f=k.hiddenPlanBox,d=k.displayPlanBox,l=h.closest(e.listItem);l.hasClass(f)&&(m(e.selectedHiddenPlanBox).removeClass(d).addClass(f),l.removeClass(f).addClass(d));c(b.data,h.parent().siblings(e.buttonInput));a.trigger("a:declarative:close-side-sheet:click")});a.declarative(h.desktopShowLearnMoreDSS,"click",function(c){c.$event.preventDefault();
c.$event.stopImmediatePropagation();a.trigger("a:declarative:side-sheet:click",c)});a.declarative("wireless-plans-desktop-select-action","click",function(a){c(a.data,a.$target)})});"use strict";g.when("A","wireless-plans-constants","wireless-plans-desktop-registration").execute("wireless-compare-table-rotate-actions",function(a,b){function f(c,a){g.when("a-button").execute(function(b){b=b(c);a?b.disable():b.enable()})}var d=b.compareTableSelectors,c=b.compareTableClasses;b=b.compareTableActions;var e=
a.$,k=function(){return{$currentFirstDisplayedPlan:e(d.firstDisplayedPlan),$currentSecondDisplayedPlan:e(d.secondDisplayedPlan),$currentLastDisplayedPlan:e(d.lastDisplayedPlan),$backButton:e(d.backButton),$nextButton:e(d.nextButton)}};a.declarative(b.rotateBack,"click",function(){var a=k(),b=a.$currentFirstDisplayedPlan,d=a.$currentSecondDisplayedPlan,g=a.$currentLastDisplayedPlan,n=a.$backButton,a=a.$nextButton;b.hasClass(c.firstList)||(b.hasClass(c.secondList)&&(f(n,!0),n.addClass(c.disabledButton)),
a.hasClass(c.disabledButton)&&(f(a,!1),a.removeClass(c.disabledButton)),g.removeClass(c.lastDisplayedPlan).addClass(c.hiddenColumn),d.removeClass(c.secondDisplayedPlan).removeClass(c.displayedPlanBeforeLast).addClass(c.lastDisplayedPlan),b.removeClass(c.firstDisplayedPlan).addClass(c.secondDisplayedPlan),b=parseInt(b.attr("data-plan-index")),e(".plan-column-"+(b-1)).removeClass(c.hiddenColumn).addClass(c.firstDisplayedPlan))});a.declarative(b.rotateNext,"click",function(){var a=k(),b=a.$currentFirstDisplayedPlan,
d=a.$currentSecondDisplayedPlan,g=a.$currentLastDisplayedPlan,n=a.$backButton,a=a.$nextButton;g.hasClass(c.lastList)||(g.hasClass(c.lastSecondList)&&(f(a,!0),a.addClass(c.disabledButton)),n.hasClass(c.disabledButton)&&(f(n,!1),n.removeClass(c.disabledButton)),b.removeClass(c.firstDisplayedPlan).addClass(c.hiddenColumn),d.removeClass(c.secondDisplayedPlan).addClass(c.firstDisplayedPlan),g.removeClass(c.lastDisplayedPlan).addClass(c.secondDisplayedPlan).addClass(c.displayedPlanBeforeLast),b=parseInt(b.attr("data-plan-index")),
e(".plan-column-"+(b+3)).removeClass(c.hiddenColumn).addClass(c.lastDisplayedPlan))})});"use strict";g.when("A","wireless-plans-constants").register("wireless-plans-desktop-expander-actions",function(a,b){var f=b.selectors,d=b.classes,c=a.$,e=d.wirelessPlansExpand;return{toggleWirelessPlans:function(a){c(f.expanderIcon).toggleClass(d.rotate,a);return c(f.expanderContent).toggleClass(e,a).hasClass(e)}}});"use strict";g.when("A","wireless-plans-desktop-expander-actions","wireless-plans-constants","wireless-plans-desktop-registration").execute(function(a,
b,f){function d(){var c=b.toggleWirelessPlans();if(h(e.desktopDefaultOptionBox).hasClass(k.desktopSelectedPlanBox)){var d=c?h(e.expandedSubtitle):h(e.collapsedSubtitle);h(e.subtitleText).text(d.text())}c&&a.trigger(g.expand)}function c(){"true"===h(e.expandInitiallyInput).val()&&d()}var e=f.selectors,k=f.classes,g=f.actions,h=a.$;a.declarative(g.toggleExpander,"click",d);a.on(g.collapse,function(){b.toggleWirelessPlans(!1)});a.on(g.atfRefresh,function(){c()});c()});"use strict";"use strict";"use strict";
var t=function(){var a=(new URLSearchParams(n.location.search)).get("vaipsOverride");return"/wisper/postpaid/slot?"+(a?"pagehostOverride\x3d"+a:"")};g.when("A","vaips-constants","vaips-buybox-handler","ready").execute(function(a,b,f){function d(b){b=a.$(b.target).parents(c.listItem);var d=e.selectedPlanBox;b.closest(c.planOptionList).find("."+d).removeClass(d);b.find(c.planItemBox).addClass(d);b=0!==a.$(c.planOptionList).find(c.listItem).index(b);f.unlock();b&&f.lock()}var c=b.selectors,e=b.classes,
k=b.featureName,l=a.$;b=t();var h=l(c.vaipsExpanderContent);0!==h.length&&(fetch(b,{method:"POST",headers:{"Content-Type":"text/html"}}).then(function(a){return a.text()}).then(function(a){h.html(a);l(c.planItemBox).first().addClass(e.selectedPlanBox)}).catch(function(a){g.log(a,"WARN",k)}),a.$(c.planOptionList).live("click",c.listItem,d))});"use strict";g.when("A","vaips-constants","a-dropdown","a-secondary-view").register("vaips-buybox-handler",function(a,b,f,d){function c(){var b=a.$(e.buybox),
c=b.find(e.activeAccordion);return 1===c.length?c:b}var e=b.selectors,g=b.classes,l=b.activationHTML;return{lock:function(){var b=c(),m=b.find(e.addToCartFeature).parent(),n=b.find(e.buyNowFeature).parent();m.addClass(g.hidden);n.addClass(g.hidden);n=a.$(e.vaipsActivateButton).parent().html();m.before(n);d.create(b.find(e.vaipsActivateButton),{inlineContent:l});b=b.find(e.quantitySelectElement);(b=f.getSelect(b))&&b.setValue(1);b&&b.update({status:g.disabled})},unlock:function(){var a=c().parent(),
b=a.find(e.addToCartFeature).parent(),d=a.find(e.buyNowFeature).parent();b.removeClass(g.hidden);d.removeClass(g.hidden);a.find(e.vaipsActivateButton).remove();a=a.find(e.quantitySelectElement);(a=f.getSelect(a))&&a.update({status:g.normal})}}});"use strict";g.when("A").register("vaips-constants",function(){return{selectors:{vaipsExpanderContent:".vaips-expander-content",expanderIcon:".vaips-expander-icon",planItemBox:".vaips-plans-plan-item",planOptionList:".vaips-plans-options-list",listItem:"li",
buybox:"#buybox",activeAccordion:"#buyBoxAccordion \x3e .a-accordion-active",addToCartFeature:"[data-feature-name\x3d'addToCart'] \x3e *, [data-feature-name\x3d'addToCartRow'] \x3e *, [data-feature-name\x3d'inlineButtons'] \x3e *",buyNowFeature:"[data-feature-name\x3d'buyNow'] \x3e *",vaipsActivateButton:".vaips-button",quantitySelectElement:"select[name\x3d'quantity']"},compareTableSelectors:{},classes:{selectedPlanBox:"vaips-plans-plan-item-selected",vaipsPlansExpand:"vaips-expander-content-expand",
rotate:"rotate",hidden:"aok-hidden",disabled:"disabled",normal:"normal"},compareTableClasses:{},viewNames:{},featureName:"vendorActivationOptions",featureAttribution:"Website/CETech/WirelessPlans",actions:{toggleExpander:"toggle-vaips-expander",expand:"vaip-card:expand",collapse:"vaips-card:collapse"},compareTableActions:{},buyingOptionPlaceholder:"${optionName}",buyingOptionNewRowName:"newAccordionRow",buyingOptionUsedRowName:"usedAccordionRow",unsupportedBuyingOptionTypes:["UNKNOWN"],activationHTML:"\x3cmarquee\x3e\x3ch1\x3eVAIPS WORKFLOW CONTENT GOES HERE\x3c/h1\x3e\x3c/marquee\x3e"}});
"use strict";g.when("A","vaips-constants").register("vaips-expander-actions",function(a,b){var f=b.selectors,d=b.classes,c=a.$,e=d.vaipsPlansExpand;return{toggleCardExpansion:function(a){c(f.expanderIcon).toggleClass(d.rotate,a);return c(f.vaipsExpanderContent).toggleClass(e,a).hasClass(e)}}});"use strict";g.when("A","vaips-expander-actions","vaips-constants").execute(function(a,b,f){var d=f.actions;a.declarative(d.toggleExpander,"click",function(){b.toggleCardExpansion()&&a.trigger(d.expand)});a.on(d.collapse,
function(){b.toggleCardExpansion(!1)})});"use strict";g.when("A","cc-manager","vaips-constants").register("vaips-registration",function(a,b,f){var d=f.actions,c=f.classes,e=f.featureName;b.registerFeature({featureName:e,featureAttribution:f.featureAttribution},{init:function(a){},validateInputParams:function(a){return!0},cardCollapse:function(){a.trigger(d.collapse)},switchBuyingOption:function(b,d,e){a.$("."+c.selectedPlanBox).click()}});a.on(d.expand,function(){b.cardExpanded(e)})})});