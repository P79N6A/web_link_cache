WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/initial-templates.soy' */
// This file was automatically generated from initial-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Blueprints.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }


Confluence.Templates.Blueprints.createDialogBody = function(opt_data, opt_ignored) {
  return Confluence.Templates.Blueprints.waitContainer(null) + '<div class="create-dialog-body loadable"><div class="template-select-container">' + Confluence.Templates.Blueprints.waitContainer(null) + '<div class="template-select-container-body loadable"></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.createDialogBody.soyTemplateName = 'Confluence.Templates.Blueprints.createDialogBody';
}


Confluence.Templates.Blueprints.waitContainer = function(opt_data, opt_ignored) {
  return '<div class="wait-container">' + Confluence.Templates.Blueprints.waitIcon(null) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.waitContainer.soyTemplateName = 'Confluence.Templates.Blueprints.waitContainer';
}


Confluence.Templates.Blueprints.waitIcon = function(opt_data, opt_ignored) {
  return '<div class="wait-icon"></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.waitIcon.soyTemplateName = 'Confluence.Templates.Blueprints.waitIcon';
}


Confluence.Templates.Blueprints.helpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.helpLink({href: "https:\/\/confluence.atlassian.com\/display\/ConfCloud\/Pages+and+Blogs"});
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.helpLink.soyTemplateName = 'Confluence.Templates.Blueprints.helpLink';
}


Confluence.Templates.Blueprints.spaceHelpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.helpLink({href: "https:\/\/confluence.atlassian.com\/display\/ConfCloud\/Create+a+Space"});
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.spaceHelpLink.soyTemplateName = 'Confluence.Templates.Blueprints.spaceHelpLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/discovery-tooltip.soy' */
// This file was automatically generated from discovery-tooltip.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Quick.Create.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Quick == 'undefined') { Confluence.Quick = {}; }
if (typeof Confluence.Quick.Create == 'undefined') { Confluence.Quick.Create = {}; }


Confluence.Quick.Create.discoveryTooltip = function(opt_data, opt_ignored) {
  return '<p class="title">' + soy.$$escapeHtml('TIME-SAVING TEMPLATES') + '</p><p>' + soy.$$filterNoAutoescape('Want some help creating awesome pages quickly? There are some useful templates here, to help get you started.') + '</p><p><button class="aui-button" id="closeDisDialog">' + soy.$$escapeHtml('Okay, got it') + '</button></p>';
};
if (goog.DEBUG) {
  Confluence.Quick.Create.discoveryTooltip.soyTemplateName = 'Confluence.Quick.Create.discoveryTooltip';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-base.js' */
Confluence.Dialogs=Confluence.Dialogs||{};(function(c){function b(g,f){try{return require(g)}catch(d){console.error(d);return f}}Confluence.Dialogs.CreateDialogBase=function a(N){var h,X,r=N.dialogId,x=N.webItemsPath,A=[],i=false,Z=b("confluence/api/event",{bind:function(){}}),u=require("confluence/confluence-storage-manager")("confluence-create-content-plugin"),I=b("confluence/legacy-message-queue-analytics",{send:function(){}}),E,C=true,Y=false,aa,U;function B(){if(!X){return}if(X.find(".button-panel-cancel-link:visible").is(".disabled")){return}if(Confluence.Blueprint.HowToUse){Confluence.Blueprint.HowToUse.notifyCancel(h)}AJS.trigger("analytics",{name:r+".cancel"+E});h.remove();c(".tipsy").remove();h=null;X=null;return false}function V(){return c(".create-dialog-create-button:visible")}function S(){return c(".create-dialog-body .template:visible").length}function H(ab){return ab.data("content-blueprint-id")}function J(ad){var af=H(ad),ac=ad.data("template-id"),ae=af||ac,ab=af?"contentBlueprintId":"templateId";if(!ae){return W("itemModuleCompleteKey",ad.data("item-module-complete-key"))}return W(ab,ae)}function m(ab){if(!S()){return false}if(c(this).attr("disabled")==="disabled"){return false}c(this).attr("disabled","disabled").before('<div class="create-dialog-button-spinner"></div>');c(".create-dialog-button-spinner").spin("small");var ae=F.getSpaceKey();var ad=c(".template.selected");var ac=J(ad);if(!ac){throw new Error("Expected at least one template to be selected")}ac.spaceKey=ae;Confluence.Blueprint.fireWizard(ab,ac,h)}function z(){if(!S()){V().attr("disabled","disabled")}else{V().removeAttr("disabled")}}function W(ab,ac){return _.find(F.loadedWebitems[F.getSpaceKey()],function(ad){return ad[ab]==ac})}function P(ab){return W("contentBlueprintId",ab)}function L(ad){var ac=P(ad);var ab=ac&&ac.wizard;var ae=f(!ab);V().text(ae)}function t(ab){ab.addClass("selected").siblings().removeClass("selected");L(H(ab));AJS.trigger(Confluence.Dialogs.Events.ITEM_SELECTED,{item:ab})}function s(ab,ag){var ad=ab.find(".template");var af=ad.filter(".selected");var ac=ad.index(af)+ag;ac=ac%ad.length;var ae=ad.eq(ac);t(ae);ae.focus();ab.simpleScrollTo(ae)}function d(ac){var ab=2;switch(ac){case 37:return -1;case 39:return +1;case 38:return -ab;case 40:return +ab}return 0}function O(ab){ab.bind("keydown",function(ac){var ad=d(ac.which);if(ad){s(ab,ad);return AJS.stopEvent(ac)}})}function j(ab){return ab==="com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blank-page"||ab==="com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post"||ab==="com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post-legacy"||ab==="com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post-fabric"}function n(al,af){var ak=F.getSpaceKey();var an=F.loadedWebitems[ak];an=F.filterWebItems(an);i=an&&an.length>0&&_.some(an,function(ao){return ao.isPromoted});A=p(an);if(!i&&al){an=A}var ac=Confluence.Templates.Blueprints.templates({webItems:an,spaceKey:ak});var ai=c(ac);var ah=M(ai);if(i&&ah===undefined){var ak=F.getSpaceKey();var ae=c.parseJSON(u.getItem("showMore"))||{};var aj=ae[ak];if(!aj||aj<3){var ad=ai.find(".template");_.each(ad,function(ap){var ao=c(ap);var aq=J(ao);if(!aq.isPromoted&&!j(aq.itemModuleCompleteKey)){ao.hide()}});var am=ai.append(Confluence.Templates.Blueprints.Promoted.showMore())[0];c("#promoted-link",am).click(function(){ae[ak]=(aj||0)+1;u.setItemQuietly("showMore",JSON.stringify(ae));c(this).closest(".templates").find(".template").css("display","");c(this).closest("li").remove();z()})}}var ab=X.find(".templates");if(ab.length){if(af){ab.fadeOut(150,function(){ab.replaceWith(ai.fadeIn(150));w();q();O(ai)})}else{ab.replaceWith(ai)}}else{c(".template-select-container-body").append(ai)}if(Q()){var ag=!al;D(A.length,ag)}else{e()}if(X.searcher){X.searcher.refreshItems();X.searcher.filter()}X.find(".loading").removeClass("loading");X.trigger("create-content.loaded");q();O(ai);if(Q()){w()}if(ah!==undefined){C=false;X.find(".templates").simpleScrollTo(ah.first().click());C=true}z()}function M(af){if(!h.initContext){return}var ag;var ac;var ae=Confluence.Blueprint.Selector.getSelectors();for(var ad=0,ab=ae.length;ad<ab;ad++){ag=ae[ad](h.initContext);if(ag&&ag.length){ac=af.find('.template[data-item-module-complete-key="'+ag+'"]');if(ac.length){return ac}else{AJS.log("Attempted to select a blueprint that could not be found in the create dialog: "+ag)}}}}function w(){var ab=c(".templates");ab.css("height",ab.outerHeight(false)-c("#discover-new-banner").outerHeight())}function q(){C=false;c(".template").click(function(){t(c(this))}).dblclick(function(){V().click()}).focus(function(){c(this).click()});c(".template:visible:first").click();c(".template").click(function(){if(C){I.send("ui",{source:"createPageModal",actionSubject:"template",action:"clicked",actionSubjectId:"template",attributes:{templateName:c(this).find(".template-name").text()||"",templateId:this.dataset.templateId||"",blueprintId:this.dataset.contentBlueprintId||"",blueprintKey:this.dataset.blueprintModuleCompleteKey||""}})}});C=true}function p(ag){var af="",ad=[],ae=[];for(var ac=0,ab=ag.length;ac<ab;ac++){if(ag[ac].isNew){ae=T();af=(c.inArray(ag[ac].itemModuleCompleteKey,ae)!=-1);if(af){ag[ac].isNew=false}else{ad.push(ag[ac])}}}return ad}function K(){var ab=c.parseJSON(u.getItem("dismissed"));return ab||[]}function T(){var ab=c.parseJSON(u.getItem("used"));return ab||[]}function e(){var ab=c("#discover-new-banner");if(ab.length){ab.remove()}}function D(ae,ac){e();var ab=Confluence.Templates.Blueprints.discoverNewBanner({newItemsNo:ae,showLinkToNew:ac});var ad=c(".template-select-container-body");ad.prepend(ab);ad.find(".aui-button-link").click(function(){var af=!c(this).data("is-filtered");F.fillWebItemsInDialog(af,true)});c("#discover-new-banner .icon-close").click(function(){c("#discover-new-banner").slideUp(150);var ah=K();var ag,ai,af;for(ag=0,af=A.length;ag<af;ag++){ai=A[ag].itemModuleCompleteKey;if(c.inArray(ai,ah)==-1){ah.push(ai)}}u.setItemQuietly("dismissed",JSON.stringify(ah));F.fillWebItemsInDialog(false)})}function Q(){if(A.length==0||i){return false}var ac=K();if(ac.length==0){return true}for(var ab=0;ab<A.length;++ab){if(c.inArray(A[ab].itemModuleCompleteKey,ac)==-1){return true}}return false}function o(ab){aa="mouseClick";U=void 0;var ab=ab||{},ad=function(af){if(h){if(af.keyCode===27){B();if(E===".create-page"){I.send("ui",{source:"createPageModal",actionSubject:"keyboardShortcut",action:"pressed",actionSubjectId:"close"})}}else{if(af.keyCode===13){var ag=af.target.nodeName&&af.target.nodeName.toLowerCase();if(ag=="textarea"){return}if(E===".create-page"){aa="keyPress";U="enter"}V().click()}}}};E=ab.triggerSrc?"."+ab.triggerSrc:"";var ac={width:840,height:449,id:r,closeOnOutsideClick:false,keypressListener:ad,focusSelector:".templates"};h=c.extend(new AJS.Dialog(ac),F);X=h.popup.element;h.addHeader(N.headingText);h.initContext=ab.initContext;var ae=X.searcher=Confluence.DomFilterField({items:"#create-dialog .templates .template",inputId:"createDialogFilter",placeholderText:"Filter",postSearch:function(af){C=false;if(af.length==0){AJS.trigger(Confluence.Dialogs.Events.ITEM_SELECTED,{noVisibleItem:true})}else{af.eq(0).click()}if(!ab.showStepOne){z()}if(Y){I.send("ui",{source:"createPageModal",actionSubject:"submitted",action:"search",actionSubjectId:"templateSearchBar"});Y=false}C=true},submitCallback:function(af,ag){C=false;af.eq(0).dblclick();C=true}});ae.form.find("input").attr("tabindex",100);ae.form.find("input").keyup(function(){Y=true});X.find(".dialog-title").prepend(N.helpLinkTemplate(),ae.form);h.addPanel("SinglePanel",Confluence.Templates.Blueprints.createDialogBody(),"loading");c.extend(h,{addButtonPanel:y,addFullButtonPanel:l,addBackButton:v,removeBackButton:k});h.addButtonPanel(h.getPage(0),m);h.prevPage=function(){X.find(".create-dialog-button-spinner").remove();X.find(".create-dialog-create-button").removeAttr("disabled");return AJS.Dialog.prototype.prevPage.apply(h,arguments)};X.find(".dialog-button-panel").find("button, .button-panel-link").attr("tabindex",100);X.options=ab=c.extend({showDialog:true,updateHeight:true},ab);h.getPanel(0).setPadding(0);h.gotoPanel(0);c("#create-dialog").find(".wait-icon").spin("medium");ab.showDialog&&h.show();Confluence.sessionCheck();Z.bind("blueprint.before-create",function(){var ag=aa==="keyPress";var ai=ag?"keyboardShortcut":"button";var ah=ag?"pressed":"clicked";var af=ag?{key:U}:void 0;I.send("ui",{source:"createPageModal",actionSubject:ai,action:ah,actionSubjectId:"create",attributes:af})});return h}function f(ab){return ab?"Create":"Next"}function g(ab){return function(ac,ad,af){var ae=ab&&ab.call(this,ac,ad);if(ae!==true&&af){af.preventDefault()}else{return ae}}}function y(af,ae,ab,ad){var ac=f(ab);af.addButton(AJS.I18n.getText(ac),null,"create-dialog-create-button");af.buttonpanel.find(".button-panel-button").removeClass("button-panel-button").addClass("aui-button");af.buttonpanel.find(".create-dialog-create-button").click(function(al){var ak=J(c(".template.selected"));if(!ak||(!ak.templateId&&!j(ak.itemModuleCompleteKey))){return}var ah=aa==="keyPress";var aj=ah?"keyboardShortcut":"button";var ai=ah?"pressed":"clicked";var ag=ah?{key:U}:void 0;I.send("ui",{source:"createPageModal",actionSubject:aj,action:ai,actionSubjectId:"create",attributes:ag})});af.buttonpanel.find(".create-dialog-create-button").addClass("aui-button-primary").click(ae);af.buttonpanel.find(".create-dialog-create-button").attr("data-test-id","create-dialog-create-button");if(ad){af.buttonpanel.addClass(ad)}this.addCancel("Close",g(function(){if(E===".create-page"){I.send("ui",{source:"createPageModal",actionSubject:"button",action:"clicked",actionSubjectId:"close"})}return B()}))}function l(ad,ac,ae,ab){this.addBackButton(ad,ae);this.addButtonPanel(ad,g(ac),ab);return ad.buttonpanel}function v(ab,ac){ab.addButton("Back",g(function(ad){ac&&ac();if(ad.curpage==1){ad.fillWebItemsInDialog()}ad.prevPage();if(ad.curpage==0){w()}ab.remove();ad.page.pop();if(S()&&!c(".template.selected").length){C=false;c(".template:visible:first").click();C=true}}),"button-panel-back")}function k(){var ac=this.getPage(this.curpage);var ab=ac.buttonpanel.find(".button-panel-back");ab.remove()}function R(ad,ac){var ab=this,ac=_.isUndefined(ac)?true:ac;ab.loadedWebitems=ab.loadedWebitems||{};var ae=this.loadedWebitems[ad];if(ae){return AJS.$.Deferred().resolve([ae])}return c.ajax({url:Confluence.getContextPath()+x,dataType:"json",data:{spaceKey:ad},async:ac}).done(function(af){ab.loadedWebitems[ad]=af})}function G(){var ab=this;return AJS.$.getJSON(Confluence.getContextPath()+"/rest/create-dialog/1.0/spaces",{promotedSpaceKey:AJS.params.spaceKey,promotedSpacesLimit:10,otherSpacesLimit:1000}).done(function(ac){ab.loadedSpaces=ac;AJS.trigger("create-dialog.data-ready")})}var F={openDialog:o,closeDialog:B,requestWebItems:R,requestSpaces:G,loadedWebitems:{},loadedSpaces:{},fillWebItemsInDialog:n,filterWebItems:function(ab){return ab},getSpaceKey:function(){return null}};return F}}(AJS.$));Confluence.Dialogs.Events={};Confluence.Dialogs.Events.ITEM_SELECTED="create-dialog.item-selected";
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/loader.js' */
Confluence.Blueprint=Confluence.Blueprint||{};var resourcesLoaded=false;var noSpaceErrors={noAccess:"Request permission from your Confluence administrator.",createNew:"Pages are stored in spaces, which help you organize related work and keep it together.\u003cbr /\u003e\u003cbr /\u003eCreate a space first, so your pages have a place to live.",titleNoAccess:"Can\'t create new pages in this space",titleWithAccess:"Start by creating a space"};function createNewDialogBase(){Confluence.Blueprint.Dialog=Confluence.Dialogs.CreateDialogBase({dialogId:"create-dialog",webItemsPath:"/rest/create-dialog/1.0/blueprints/web-items",helpLinkTemplate:Confluence.Templates.Blueprints.helpLink,headingText:"Create"})}Confluence.Blueprint.loadDialog=function(c){var b=AJS.$.Deferred();var a;if(!resourcesLoaded||c.forceReload){if(c.forceReload){createNewDialogBase()}a=Confluence.Blueprint.Dialog.openDialog(c);var e=WRM.require("wrc!create-content");var d=AJS.$.Deferred();Confluence.Blueprint.Dialog.requestSpaces().done(function(){var g=Confluence.Blueprint.Dialog.loadedSpaces,f=g.promotedSpaces.spaces[0]||g.otherSpaces.spaces[0];if(f){Confluence.Blueprint.Dialog.requestWebItems(f.id).done(function(){d.resolve()})}else{$.ajax({url:AJS.contextPath()+"/rest/graph",type:"POST",contentType:"application/json",dataType:"json",data:JSON.stringify({operationName:"user",query:"query user {  user (current:true) {    operations { operation }  }}",variables:{location:"system.user"}}),success:function(k){var j=false;if(k&&k.data&&k.data.user&&Array.isArray(k.data.user.operations)){j=!!k.data.user.operations.find(function(l){return l.operation==="create_space"})}var i=$(".dialog-panel-body.loading .wait-container");var h=i.closest(".loading");i.replaceWith($("<div/>").addClass("no-spaces-found").append($("<div />").addClass("icon-wrapper").html('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 18.38 18.38">  <title>group</title>  <rect x="2.9" y="2.9" width="14" height="14" rx="1.71" ry="1.71" transform="translate(-4.81 9.19) rotate(-45)" style="fill:#de350b"/>  <path d="M10,15a1,1,0,1,1,0-2h0a1,1,0,1,1,0,2Zm1-4a1,1,0,0,1-2,0V6a1,1,0,0,1,2,0Z" transform="translate(-0.71 -0.71)" style="fill:#fff"/></svg>')).append($("<div/>").html(noSpaceErrors[j?"createNew":"noAccess"])));h.removeClass("loading");$(".create-dialog-create-button").hide();$(".dialog-title").html(noSpaceErrors[j?"titleWithAccess":"titleNoAccess"])}})}});AJS.$.when(e,d.promise()).done(function(){AJS.trigger("blueprint.wizard-register.load");Confluence.Dialogs.LocationPanel(Confluence.Blueprint.Dialog);c=AJS.$.extend(c,{createDialog:a,dialogBase:Confluence.Blueprint.Dialog});resourcesLoaded=true;b.resolve(Confluence.Blueprint.Dialog.openDialog(c))}).fail(function(){AJS.log("Could not load resources for create dialog")})}else{b.resolve(Confluence.Blueprint.Dialog.openDialog(c))}return b.promise()};function trackAnalyticEvent(){var a=window.location.pathname;if(a.indexOf("/draft-createpage.action")>-1){AJS.bind("rte-ready",function(c){$("#rte-button-publish").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.create-dialog.blue-print.save"})});$("#rte-button-cancel").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.create-dialog.blue-print.close"})})})}else{if(a.indexOf("/createpage.action")>-1){var b=$("#createpageform input[name='queryString']").val();if(typeof b==="string"&&b.indexOf("src=quick-create")>-1){AJS.bind("rte-ready",function(c){$("#rte-button-publish").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.blank.save"})});$("#rte-button-cancel").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.blank.close"})});$("#rte-button-location").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.blank.change.location"})})})}else{AJS.bind("rte-ready",function(c){$("#rte-button-publish").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.create-dialog.blank.save"})});$("#rte-button-cancel").click(function(){AJS.trigger("analytics",{name:"confluence.quick.create.create-dialog.blank.close"})})})}}}}createNewDialogBase();AJS.toInit(function(d){var c=false;AJS.bind("blueprint.wizard-register.load",function(){if(!c){AJS.trigger("blueprint.wizard-register.ready");c=true}});var b=d("#create-page-button:visible");if(!b.length){return}d(document).on("click",".create-child-page-link",function(){Confluence.Blueprint.loadDialog({location:"child-page"});return false});trackAnalyticEvent();if(AJS.DarkFeatures.isEnabled("adg3.create-experience")){}else{var a=d("#quick-create-page-button");if(a.is(":visible")){AJS.whenIType("c").followLink("#quick-create-page-button")}else{AJS.whenIType("c").click("#create-page-button")}}});AJS.bind("shortcuts-loaded.keyboardshortcuts",function(b,a){AJS.$.each(a.shortcuts,function(d,c){if(c.param=="#createPageLink"){a.shortcuts.splice(d,1);return false}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-launcher.js' */
(function(){function a(d,c,e){Confluence.Blueprint.Dialog.requestWebItems(d,c).done(function(f){var g=Confluence.Blueprint.Dialog.loadedWebitems[d];if(_.isEmpty(g)){AJS.log("create-from-template-macro: No Create dialog web items found for spaceKey >"+d+"<");return}e(f,g)}).fail(function(){AJS.log("create-from-template-macro: requestWebItems call for spaceKey >"+d+"< failed")})}function b(){var c={};AJS.$("#create-dialog-init-params div").each(function(){c[$(this).data("key")]=$(this).data("value")});return c}Confluence.Blueprint=$.extend(Confluence.Blueprint,{loadDialogAndOpenTemplate:function(c){if(!_.isObject(c)){throw new Error("Confluence.Blueprint.loadDialogAndOpenTemplate called with no options")}var e=c.spaceKey,h=c.contentBlueprintId,d=c.templateId,g=c.title,f=c.initContext?c.initContext:b();if(e){Confluence.Blueprint.loadDialog({showDialog:true,updateHeight:false,showStepOne:true,initContext:f}).done(function(i){a(e,true,function(m,n){var k=_.find(n,function(o){if(h){return o.contentBlueprintId==h}return o.templateId==d});if(!k){AJS.log("create-from-template-macro: No Create dialog web item found for contentBlueprintId >"+h+"< and templateId >"+d+"<");return}var l=k.itemModuleCompleteKey;k=$.extend({},k);k.title=g;k.spaceKey=""+e;AJS.trigger(Confluence.Dialogs.Events.ITEM_SELECTED,{config:k});Confluence.Blueprint.fireWizard(m,k,i);i.removeBackButton();var j=k.howToUseTemplate&&!k.skipHowToUse;if(j||Confluence.Blueprint.hasWizard(l,k)){i.show()}})})}else{Confluence.Blueprint.loadDialog({initContext:f})}}});AJS.getWindowQueryParams=function(){var h={};if(window.location.search.length>1){var c=window.location.search.substr(1).split("&");for(var e=0;e<c.length;e++){var g=c[e].split("=");var d=unescape(g[0]);var f=g.length>1?unescape(g[1]):"";h[d]=f}}return h};AJS.toInit(function(){var e=b();if(e.createSpaceDialog){Confluence.SpaceBlueprint.loaded.then(function(){Confluence.SpaceBlueprint.Dialog.launch()});return}var f=AJS.getWindowQueryParams();var d=f.createDialogSpaceKey;if(!f.createDialog||!d){return}var c=f.createDialogBlueprintKey;if(d&&c){a(d,false,function(h,i){var g=_.find(i,function(j){return j.blueprintModuleCompleteKey==c});if(g){f.createDialogBlueprintId=g.contentBlueprintId}else{AJS.log("No blueprint found with key: "+c)}});delete f.createDialogBlueprintKey}if(d&&!f.createDialogBlueprintId&&!f.createDialogTemplateId){AJS.log("Confluence.Blueprint.launchDialog triggered with incorrect options - please check the URL query: "+window.location.search);return}Confluence.Blueprint.loadDialogAndOpenTemplate({spaceKey:d,contentBlueprintId:f.createDialogBlueprintId,templateId:f.createDialogTemplateId,initContext:e})})})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/space-blueprint.js' */
define("confluence-create-content/space-blueprint",[],function(){return{loaded:AJS.$.Deferred()}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-create-content/space-blueprint","Confluence.SpaceBlueprint");AJS.deprecate.prop(window.Confluence.SpaceBlueprint,"Dialog",{sinceVersion:"6.0.6",extraInfo:"Use require('confluence-create-content/space-blueprint')"});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/space-dialog.js' */
AJS.toInit(function(c){Confluence.SpaceBlueprint.Dialog=c.extend(Confluence.Dialogs.CreateDialogBase({dialogId:"create-dialog",webItemsPath:"/rest/create-dialog/1.0/space-blueprint/dialog/web-items",helpLinkTemplate:Confluence.Templates.Blueprints.spaceHelpLink,headingText:"Create space"}),{getParentPageId:function(){return undefined},getSpaceKey:function(){return undefined},launch:function(f){var e=f?{showDialog:false,updateHeight:false,showStepOne:true,initContext:{}}:{};var d=Confluence.SpaceBlueprint.Dialog.openDialog(e);createSpacePromise=WRM.require("wrc!create-space");webItemsPromise=Confluence.SpaceBlueprint.Dialog.requestWebItems();AJS.$.when(createSpacePromise,webItemsPromise).done(function(j,i){AJS.trigger("blueprint.wizard-register.load");if(!f&&Confluence.SpaceBlueprint.WelcomeDialog.isShowWelcomeDialog()){Confluence.SpaceBlueprint.WelcomeDialog.showWelcomeDialog();d.remove();return}Confluence.SpaceBlueprint.Dialog.fillWebItemsInDialog();var k=Confluence.SpaceBlueprint.Dialog.loadedWebitems[undefined];if(_.isEmpty(k)){AJS.log("Could not load space dialog - web items not found");return}if(!f){return}var h=_.find(k,function(l){return l.itemModuleCompleteKey==f});if(!h){AJS.log("Error finding space blueprint with id"+f);return}Confluence.Blueprint.fireWizard(i[0],h,d);d.removeBackButton();var g=h.howToUseTemplate&&!h.skipHowToUse;if(g||Confluence.Blueprint.hasWizard(f,h)){d.show()}}).fail(function(){AJS.log("Could not load resources for space dialog")})}});var a=c('#create-space-button, a[href="'+Confluence.getContextPath()+'/spaces/createspace-start.action"]'),b=c("#create-personal-space-link");if(b.length){b.unbind("click");b.click(function(){Confluence.SpaceBlueprint.Dialog.launch("com.atlassian.confluence.plugins.confluence-create-content-plugin:create-personal-space-item");return false})}if(!a.length){return}c('a[href="'+Confluence.getContextPath()+'/spaces/createspace-start.action"]').unbind("click");a.click(function(d){Confluence.SpaceBlueprint.Dialog.launch();return false});Confluence.SpaceBlueprint.loaded.resolve()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/blueprint-object.js' */
(function(s,b){var n={};var m;var w;var F={};var C={};function o(M,L,K){if(M==="space"){return"space-blueprint/create-space?favorite=true"}if(t("blueprint",K.replace(":","_"))){return"content/blueprint/"+K+"/instance"}if(M==="view"){return"content-blueprint/create-content"}return"content-blueprint/create-draft"}function J(K){return K==="com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blank-page"}function d(K){return K==="com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post"}function r(K){return K==="com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post-fabric"}function y(K){return K==="com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post-legacy"}function E(N,O){if(!N||N<0){return false}var L=O===AJS.Meta.get("space-key");var M=AJS.Meta.get("content-type")==="page";var K=s("#page-restricted-container").length;return L&&M&&!K}function i(L,K,O,N){var M={type:L,status:K,space:{key:O},metadata:{properties:{editor:{value:"v2"}}}};if(E(N,O)){M.ancestors=[{id:N}]}return M}function k(L,K,O,N){var M={type:L,status:K,space:{key:O}};if(E(N,O)){M.ancestors=[{id:N}]}return M}function D(K){return AJS.DarkFeatures.isEnabled(K)}function u(){return D("fabric.editor.blank.blogpost")}function z(){return u()&&D("fabric.editor.all-pages")}function j(){return z()||D("fabric.editor.blank.page")}function t(K,L){return z()||(u()&&D("fabric.editor."+K+"."+L))}function f(N,P,O,M){var L=Confluence.getContextPath()+"/rest/api/content";var K=i(N,"draft",P,O);A(L,K)}function c(L,M){var K=Confluence.getContextPath()+"/rest/api/content";A(K,{type:L,status:"draft",space:{key:M}})}function a(L,K,Q,O,N){var P=L.contentTemplateId||L.templateId||L.contentTemplateKey;var M={content:k("page",K,Q,O),contentBlueprintSpec:{context:N,blueprintId:L.contentBlueprintId}};if(P){M.contentBlueprintSpec.contentTemplateId=P}return M}function q(M,P,O,N){var L=Confluence.getContextPath()+"/rest/api/template/page/"+M.templateId+"/instance";var K=a(M,"draft",P,O,N);A(L,K)}function I(K,P,N,M){var O=Confluence.getContextPath()+"/pages/createpage-entervariables.action?templateId="+encodeURIComponent(K.templateId)+"&spaceKey="+encodeURIComponent(P)+"&title="+encodeURIComponent(K.title||"")+"&newSpaceKey="+encodeURIComponent(P);for(var L in M){O+="&"+encodeURIComponent(L)+"="+encodeURIComponent(M[L])}if(E(N,P)){O+="&fromPageId="+encodeURIComponent(N)}window.location=O}function B(L){var K=b("confluence/legacy-message-queue");var N=String(L.id);var M={containerType:"space",containerId:N,source:"createSpaceModal",action:"created",actionSubject:"space",attributes:{spaceTemplateKey:m.name}};K.push({type:"ATLASSIAN_CONFLUENCE_ANALYTICS_NEXT_TRACK",payload:M})}function A(M,L){var P=AJS.$(".create-dialog-button-spinner");var O=AJS.$("#create-dialog .dialog-button-panel");var K=O.find(".create-dialog-create-button");if(P.length===0){O.prepend('<div class="create-dialog-button-spinner"></div>');P=AJS.$(".create-dialog-button-spinner").spin("small")}var N=M.indexOf("space-blueprint")!==-1?true:false;s.ajax({url:M,type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(L)}).done(function(S){if(N){B(S)}var Q=S.createSuccessRedirectUrl||S.url;if(!Q){var R=S._links.editui||S.content._links.editui||S._links.webui||S.content._links.webui;Q=Confluence.getContextPath()+R}window.location=Q}).fail(function(U,V,S){var R=JSON.parse(U.responseText).errorMessage||"";var T="We can\'t create that blueprint right now.";var Q=b("aui/flag");Q({type:"error",title:T,body:R});if(K.length&&K.prop("disabled")){K.prop("disabled",false)}}).always(function(){P.spinStop();P.remove()})}function g(T,L,S,R){AJS.trigger("blueprint.before-create");var P=b("confluence/confluence-storage-manager")("confluence-create-content-plugin");var U=s.parseJSON(P.getItem("used"))||[];U.push(m.itemModuleCompleteKey);P.setItemQuietly("used",JSON.stringify(U));var V=_.isString(T)?T:"";var N=m.createResult;var Q=m.blueprintModuleCompleteKey;var X=R&&R.getSubmissionRestPath?R.getSubmissionRestPath():"/rest/create-dialog/1.0/"+o(N,w,Q);var K=Confluence.getContextPath()+X;var W=S?S.getParentPageId():"";var M;if(R&&R.assembleSubmissionObject){M=R.assembleSubmissionObject(L)}else{if(N==="space"){M=x(L)}else{M=h(V,L,W);if(t("blueprint",Q.replace(":","_"))){var O=N==="view"?"current":"draft";M=a(M,O,w,M.parentPageId,M.context)}}}A(K,M);AJS.trigger("blueprint.after-create")}function x(K){return{context:K,name:K.name,spaceKey:K.spaceKey,description:K.description,permissions:K.spacePermission,spaceBlueprintId:m.contentBlueprintId}}function h(N,K,L){var M=K||{};return{context:M,spaceKey:w,title:M.title||N||"",parentPageId:M.parentPageId||L,contentTemplateId:M.contentTemplateId||"",contentBlueprintId:m.contentBlueprintId,contentTemplateKey:M.contentTemplateKey||"",viewPermissionsUsers:M.viewPermissionsUsers||""}}function v(M){var K=b("confluence/confluence-storage-manager")("confluence-create-content-plugin");var L=s.parseJSON(K.getItem("used"))||[];if(s.inArray(M,L)===-1){L.push(M)}K.setItemQuietly("used",JSON.stringify(L))}Confluence.Blueprint=AJS.$.extend(Confluence.Blueprint,{register:function(K,L){n[K]=L},validateTitle:function(L,O,P,K){var N=s.trim(L.val()),M;if(!N){M=P||"Title is required."}else{if(!Confluence.Blueprint.canCreatePage(O,N)){M=K||"A page with this name already exists."}}if(M){L.focus().siblings(".error").html(M);return false}return true},canCreatePage:function(M,L){var K=false;s.ajax({url:Confluence.getContextPath()+"/rest/create-dialog/1.0/blueprints/can-create-page",dataType:"json",data:{spaceKey:M,pageTitle:L},async:false}).done(function(N){K=N}).fail(function(N){AJS.log("Failed to call 'can-create-page' - "+N)});return K},hasWizard:function G(L,K){return(C[L]||(K&&K.wizard))&&!F[L]},setWizard:function H(M,L){var K=s({});L(K);C[M]=K},getWizard:function(K){return C[K]||s({})},setDirectCallback:function(L,K){F[L]=K},getDirectCallback:function(K){return F[K]},fireWizard:function(V,P,aa){var O=aa.initContext||{};w=P.spaceKey;m=P;var M=P.itemModuleCompleteKey;var Z=aa.getParentPageId();v(M);AJS.trigger("analytics",{name:"confluence.create-content.submit",data:{blueprintId:P.contentBlueprintId,dialogType:aa.id,isNew:P.isNew,isPromoted:P.isPromoted,itemKey:M,name:P.name,spaceKey:w,templateId:P.templateId,}});if(M){var U=M.replace(/\.|:/g,"_");AJS.trigger("analytics",{name:aa.id+".submit."+U,data:{spaceKey:w}});if(P.directLink){var N={templateId:P.templateId,spaceKey:w,title:P.title||"",newSpaceKey:w,fromPageId:(Z&&w===AJS.Meta.get("space-key"))?Z:""};s.extend(N,O);var K=P.directLink;for(var Q in N){K=K.replace(new RegExp("{"+e(Q)+"}","g"),N[Q])}window.location=Confluence.getContextPath()+l(K);return}if(J(M)&&j()){return f("page",w,Z,O)}if(r(M)||(d(M)&&u())){return f("blogpost",w,Z,O)}if(y(M)){return c("blogpost",w,Z,O)}var Y;var T=this.getDirectCallback(M);if(T){Y=function W(){var ab={spaceKey:w,pageData:{},initContext:O};T(V,ab);var ac=s.extend(O,{pageData:ab.pageData});new Confluence.DialogWizard(aa,g).doFinalAction(V,ab,ac,g)}}else{if(P.wizard){var L=P.wizard.pages[0].id;Y=function R(){var ab=Confluence.Blueprint.getWizard(M);Confluence.DialogWizard(aa,g).newPage(P,L,{},s.extend(O,{spaceKey:w,pages:{},parentPageId:aa.getParentPageId(),title:P.title}),ab)}}else{if(n[M]){Y=function S(){n[M](aa,w,g)}}else{if(P.contentBlueprintId){Y=function X(){g(null,s.extend(O,P),aa)}}else{throw Error("No way to process item: "+M)}}}}if(P.howToUseTemplate){Confluence.Blueprint.HowToUse.check(aa,P,Y)}else{Y()}}else{if(P.templateId){AJS.trigger("analytics",{name:aa.id+".submit.template",data:{spaceKey:w,templateId:P.templateId}});if(t("template",P.templateId)){q(P,w,Z,O)}else{I(P,w,Z,O)}}else{throw new Error("Unknown item: "+P)}}}});function p(){var K={};if(AJS.Meta.get("page-title")){K.parentPageId=AJS.Meta.get("page-id");K.parentPageTitle=AJS.Meta.get("page-title")}else{K.parentPageId=AJS.Meta.get("parent-page-id");K.parentPageTitle=AJS.Meta.get("from-page-title")}return K}function l(M){var L=M.match(/^(.*)\?(.+)$/);if(!L){return M}var N=L[1];var K=L[2].split("&").filter(function(O){return/^.+=.+$/.test(O)}).join("&");return N+(K?"?":"")+K}function e(K){return K.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1")}Confluence.Blueprint.Util={};Confluence.Blueprint.Util.getParentPageLocation=p})(AJS.$,require);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-blueprint-selector.js' */
(function(b){var a=[];Confluence.Blueprint.Selector={registerSelector:function(c){if(c&&typeof(c)==="function"){a.push(c)}},getSelectors:function(){return a}}})(AJS.$);
}catch(e){WRMCB(e)};