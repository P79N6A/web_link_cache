WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.extra.jira:jirachart-macro', location = 'util/dialog-helper.js' */
define("confluence/jim/util/dialog-helper",["ajs","confluence-macro-browser/macro-browser"],function(a,c){var b={addSelectOtherMacroLink:function(d){var e="Select Macro";d.addLink(e,function(){d.hide();var f=c.settings||{};f.selectedMacro=null;c.open(f)},"dialog-back-link")}};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jirachart-macro', location = '/jirachart/jirachart-dialog.js' */
AJS.Editor.JiraChart=(function(j){var m=-1;var A=6109;var e=6155;var d="Insert";var q="Cancel";var x="Insert JIRA Chart";var c;var g;var E=function(H){if(!c){c=new AJS.ConfluenceDialog({width:840,height:590,id:"jira-chart"});c.addHeader(x);g=AJS.Editor.JiraChart.Panels;for(var G=0;G<g.length;G++){if(typeof(g[G].title)==="function"){c.addPanel(g[G].title())}else{if(g[G].title!==undefined){c.addPanel(g[G].title)}}var K=c.getCurrentPanel();g[G].init(K)}j("#jira-chart ul.dialog-page-menu").show().append(Confluence.Templates.ConfluenceJiraPlugin.addCrossMacroLink({id:"open-jira-issue-dialog",label:"JIRA Issue/Filter"}));c.addButton(d,function(){var L=g[c.getCurrentPanel().id];if(b(L.chartType)&&L.isImageChartExisted()){var M=L.getMacroParamsFromDialog();C(M);AJS.Editor.JiraChart.close()}else{y(j("#jira-chart-content-"+L.chartType))}},"insert-jira-chart-macro-button");var J=require("confluence/jim/util/dialog-helper");J.addSelectOtherMacroLink(c);c.addCancel(q,function(){AJS.Editor.JiraChart.close()})}AJS.$("#jira-chart .dialog-page-menu button").click(function(){var N=g[c.getCurrentPanel().id];var M=c.getCurrentPanel().body;var L=AJS.Editor.JiraChart.Helper.getSelectedServer(M);n(M,L);p(M);N.handleInsertButton();N.focusForm();N.resetDisplayOption()});var I=c.getCurrentPanel().body;p(I);var F=F||function(M){var L={};_.each(M,function(N,O){L[N.chartType]=O});return L}(g);f(F,H);a();c.gotoPanel(r(F,H));c.overrideLastTab();c.show();i()};var r=function(F,G){if(G&&G.params){return F[G.params.chartType]}return 0};var s=function(){_.each(AJS.Editor.JiraChart.Panels,function(F){F.preBinding&&typeof F.preBinding==="function"&&F.preBinding()})};var i=function(){j("#open-jira-issue-dialog").click(function(){AJS.Editor.JiraChart.close();if(AJS.Editor.JiraConnector){AJS.Editor.JiraConnector.openCleanDialog(false)}})};var D=function(F){if(AJS.Editor.JiraConnector.servers.length>0){AJS.Editor.JiraConnector.Panel.prototype.applinkServerSelect(F.find("#jira-chart-servers"),function(G){l(F);if(p(F)){n(F,G);B(F)}})}};var b=function(G){var F=c.getCurrentPanel().body;return F.find("#jira-chart-content-"+G).length>0};var k=function(F){F(g[c.getCurrentPanel().id])};var y=function(F){if(AJS.Editor.JiraChart.Helper.convertSearchTextToJQL(F)===undefined){return}k(function(G){G.renderChart()})};var p=function(F){if(F.find("#jira-chart-support-all-version").length){return true}var G=AJS.Editor.JiraChart.Helper.getSelectedServer(F);if(w(G)){t(F);z(F);return false}return true};var C=function(H){var G={name:"jirachart",params:H};var F=require("confluence-macro-browser/macro-browser-facade");F.insert(G)};var f=function(F,H){for(var G=0;G<g.length;G++){g[G].resetDialogValue()}s();if(H&&H.params){var I=g[F[H.params.chartType]];I.bindingDataFromMacroToForm(H.params)}};var v=function(){if(AJS.Editor.JiraConnector.servers===undefined||AJS.Editor.JiraConnector.servers.length===0){AJS.Editor.JiraConnector.warningPopup(AJS.Meta.get("is-admin"));return false}return true};var l=function(F){F.find(".jira-oauth-message-marker").remove();F.find(".jira-chart-img").empty();F.find("#jira-chart-search-input").empty()};var a=function(){j("#jira-chart").find(".insert-jira-chart-macro-button").disable()};var h=function(){var F=AJS.$("#jira-chart").find(".insert-jira-chart-macro-button");if(F.is(":disabled")){F.enable()}};var o=function(F){F.find("#jira-chart-search-button").disable()};var u=function(F){if(F.find("#jira-chart-search-button").is(":disabled")){F.find("#jira-chart-search-button").enable()}};var n=function(H,G){j(".jira-oauth-message-marker",H).remove();var I={selectedServer:G,msg:AJS.Editor.JiraConnector.Panel.prototype.msg};if(G&&G.authUrl){var F=AJS.Editor.JiraConnector.Panel.prototype.createOauthForm.call(I,function(){j(".jira-oauth-message-marker",H).remove();AJS.Editor.JiraChart.search(H)});H.find("div.jira-chart-search").append(F)}};var t=function(F){F.find(".jira-chart-img").html(Confluence.Templates.ConfluenceJiraPlugin.showJiraUnsupportedVersion())};var z=function(G){G.find("#jira-chart-search-input").attr("disabled","disabled");G.find("#jira-chart-search-button").attr("disabled","disabled");var F=G.find(".jirachart-display-opts-close, .jirachart-display-opts-open");if(F.hasClass("jirachart-display-opts-close")){F.click()}F.addClass("disabled");a()};var B=function(F){F.find("#jira-chart-search-input").removeAttr("disabled");F.find("#jira-chart-search-button").removeAttr("disabled");F.find(".jirachart-display-opts-open").removeClass("disabled")};var w=function(G){var F=G.buildNumber;return F==m||(F>=A&&F<e)};return{close:function(){c.hide();var F=require("confluence-macro-browser/macro-browser-facade");F.cancel()},edit:function(F){if(!v()){return}E(F);var H=c.getCurrentPanel().body;if(!p(H)){return}B(H);if(F.params!==undefined&&F.params.serverId!==undefined){y(H)}var G=AJS.Editor.JiraChart.Helper.getSelectedServer(H);n(H,G)},search:y,disableInsert:a,enableInsert:h,disableSearch:o,enableSearch:u,insertJiraChartMacroWithParams:C,open:E,clearChartContent:l,loadServers:D,validateServerSupportedChart:p}})(AJS.$);AJS.Editor.JiraChart.Panels=[];AJS.MacroBrowser.setMacroJsOverride("jirachart",{opener:AJS.Editor.JiraChart.edit});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jirachart-macro', location = '/jirachart/jirachart-helper.js' */
AJS.Editor.JiraChart.Helper=(function(g){var a=/^\d+$/;var m={};var f=function(o){o=(o&&typeof o==="string")?o.replace("px",""):"";if(o==="auto"){o=""}if(o.indexOf("%")>0){o=o.replace("%","")*4}return o};var n=function(o){return a.test(o)};var k=function(o){var p=AJS.Editor.JiraConnector.servers;if(p.length>1){return o.find("#jira-chart-servers option:selected").data("jiraapplink")}return p[0]};var h=function(p){var u=AJS.Editor.JiraConnector.servers;var r;var q=p.find("#jira-chart-search-input").val();if(q.indexOf("http")===0){var t=AJS.JQLHelper.findServerIndexFromUrl(q,u);if(t!==-1){r=u[t].id;p.find("#jira-chart-servers").val(r)}else{var s=Confluence.Templates.ConfluenceJiraPlugin.noServerWarning({isAdministrator:AJS.Meta.get("is-admin"),contextPath:Confluence.getContextPath()});p.find(".jira-chart-img").html(s);AJS.Editor.JiraChart.disableInsert();return}}var o=AJS.JQLHelper.convertToJQL(q,r);if(o){p.find("#jira-chart-search-input").val(o)}else{p.find(".jira-chart-img").html(Confluence.Templates.ConfluenceJiraPlugin.jqlInvalid());AJS.Editor.JiraChart.disableInsert()}return o};var d=function(o,q){var s=k(o);if(q){var p=s.id;var t=m[p];if(!t){AppLinks.makeRequest({appId:s.id,type:"GET",url:"/rest/gadget/1.0/statTypes",dataType:"json",async:false,success:function(u){if(u){m[s.id]=u;t=u}},error:function(u){if(u){m[s.id]=JSON.parse(u.responseText);t=JSON.parse(u.responseText)}AJS.log("Jira Chart Macro: unable to retrieve statTypes from AppLink: "+s.id)}}).fail(function(u){if(u){m[s.id]=JSON.parse(u.responseText);t=JSON.parse(u.responseText)}})}var r="";_.each(t.stats,function(u){r+="<option value = '"+u.value+"'>"+AJS.escapeHtml(u.label)+" </option>"});q.html(r)}};var l=function(o){o.next().next(".width-error").remove();var p=f(o.val());var q;if(p){if(n(p)){if(p<100||p>9000){q="wrongNumber"}}else{q="wrongFormat"}}if(q){o.next().after(Confluence.Templates.ConfluenceJiraPlugin.warningValWidthColumn({error:q}));AJS.Editor.JiraChart.disableInsert();return false}return true};var j=function(o){return{jql:o.find("#jira-chart-search-input"),width:o.find("#jira-chart-width"),border:o.find(".jira-chart-show-border"),showinfor:o.find(".jira-chart-show-infor"),displayOption:o.find(".jirachart-display-opts-close, .jirachart-display-opts-open"),server:o.find("#jira-chart-servers")}};var c=function(p,o){p.jql.val(decodeURIComponent(o.jql));p.width.val(o.width);p.border.attr("checked",(o.border==="true"));p.showinfor.attr("checked",(o.showinfor==="true"));if(AJS.Editor.JiraConnector.servers.length>1){p.server.val(o.serverId)}};var b=function(q,o){var p=k(o);return{jql:encodeURIComponent(q.jql.val()),width:f(q.width.val()),border:q.border.prop("checked"),showinfor:q.showinfor.prop("checked"),serverId:p.id,server:p.name,isAuthenticated:!p.authUrl}};var i=function(p,o){return{contentId:AJS.Meta.get("page-id"),macro:{name:"jirachart",params:{jql:p.jql,serverId:p.serverId,width:p.width,border:p.border,showinfor:p.showinfor,chartType:o}}}};var e=function(o){if(o){return AJS.$.trim(o.val())!==""&&o.val()!==o.attr("placeholder")}return false};return{getSelectedServer:k,bindingCommonChartElements:j,bindingCommonDataFromMacroToForm:c,getCommonMacroParamsFromDialog:b,getCommonChartParamsRequest:i,convertSearchTextToJQL:h,convertFormatWidth:f,isChartWidthValid:l,isNumber:n,isJqlNotEmpty:e,populateStatType:d}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jirachart-macro', location = '/jirachart/jirachart-panel.js' */
AJS.Editor.JiraChart.Panel=function(){};AJS.Editor.JiraChart.Panel.prototype={init:function(a){var b=this.chartType;var c=Confluence.Templates.ConfluenceJiraPlugin.contentJiraChart({isMultiServer:AJS.Editor.JiraConnector.servers.length>1,chartType:b});a.html(c);this.container=AJS.$(this.containerId);AJS.Editor.JiraChart.clearChartContent(this.container);AJS.Editor.JiraChart.loadServers(this.container);this.bindingChartElements();this.bindingActions()},bindingActions:function(){var e=this;var d=function(){if(e.isFormValid()){AJS.Editor.JiraChart.search(e.container)}else{AJS.Editor.JiraChart.disableInsert()}};var b=e.container.find(e.clickableElements);b.click(d);var f=e.container.find(e.onChangeElements);f.change(d);e.chartElements.jql.change(function(){if(this.value!==e.jqlWhenEnterKeyPress){e.container.find(".jira-chart-img").empty();AJS.Editor.JiraChart.disableInsert()}e.jqlWhenEnterKeyPress=""}).bind("paste",function(){setTimeout(function(){if(e.isFormValid()){e.jqlWhenEnterKeyPress=e.chartElements.jql.val();AJS.Editor.JiraChart.search(e.container)}},100)});var a=e.container.find("input[type='text']");var c=function(g){if(g.attr("id")==="jira-chart-search-input"){e.jqlWhenEnterKeyPress=g.val()}};a.unbind("keydown").keydown(function(g){if(g.which==13){var h=function(i){a.unbind("keyup",h);if(e.isFormValid()){AJS.Editor.JiraChart.search(e.container)}c(a);return AJS.stopEvent(i)};a.keyup(h);return AJS.stopEvent(g)}});e.bindSelectOption();e.bindingServerChange()},bindingServerChange:function(){var a=this;a.chartElements.server.change(function(){if(a.isFormValid()&&AJS.Editor.JiraChart.validateServerSupportedChart(a.container)){AJS.Editor.JiraChart.search(a.container)}else{AJS.Editor.JiraChart.disableInsert()}})},renderChart:function(){var e=this;var b=this.getChartParamsRequest();var a=Confluence.getContextPath()+"/rest/tinymce/1/macro/preview";var d=this.container.find(".jira-chart-img");d.html('<div class="loading-data"></div>');var c=d.find(".loading-data")[0];AJS.$.data(c,"spinner",Raphael.spinner(c,50,"#666"));if(e.request){e.request.abort()}e.request=AJS.$.ajax({url:a,type:"POST",contentType:"application/json",data:JSON.stringify(b)}).done(function(f){d.html("").hide();var i=AJS.$('<iframe frameborder="0" id="chart-preview-iframe"></iframe>');i.appendTo(d);var h=i[0].contentWindow,g=h.document;i.on("load",function(){h.AJS.$("#main").addClass("chart-preview-main");d.show();e.handleInsertButton()});f=f.replace("window.onload","var chartTest");g.open();g.write(f);g.close()}).error(function(f){if(f.statusText!="abort"){AJS.log("Jira Chart Macro - Fail to get data from macro preview");d.html(Confluence.Templates.ConfluenceJiraPlugin.jiraChartErrorMessage({message:"Unable to render JIRA chart macro due to an execution error."}))}AJS.Editor.JiraChart.disableInsert()})},resetDialogValue:function(){var a=AJS.$("input",this.container);a.filter(":text").val("");a.filter(":checked").removeAttr("checked");this.container.find("#jira-chart-search-input").val();this.container.find(".jira-chart-img").empty();this.resetDisplayOption()},resetDisplayOption:function(){var b=this;var a=this.chartElements.displayOption;a.addClass("jirachart-display-opts-open");a.removeClass("jirachart-display-opts-close");setTimeout(function(){var c=b.container.find(".jira-chart-option");c.scrollTop(0);c.css({overflow:"hidden",top:"430px"})},0)},bindSelectOption:function(){var c=this;var b=c.container.find(".jira-chart-option");var d=function(g){var f=40;var i=b.position().top+"px";var e="";var h={top:430};if(g){i="";e=f-b.find("#jiraChartMacroOption").height()+"px";h={bottom:0};b.css("overflow","auto")}else{b.css("overflow","hidden")}b.css("top",i);b.css("bottom",e);b.animate(h,500)};b.css("top","430px");var a=this.chartElements.displayOption;a.click(function(g){var f=AJS.$(this);g.preventDefault();if(f.hasClass("disabled")){return}var h=f.hasClass("jirachart-display-opts-open");if(h){d(true);f.addClass("jirachart-display-opts-close");f.removeClass("jirachart-display-opts-open")}else{d();f.removeClass("jirachart-display-opts-close");f.addClass("jirachart-display-opts-open")}})},isImageChartExisted:function(){return this.container.find("#chart-preview-iframe").contents().find(".jira-chart-macro-img").length>0},focusForm:function(){this.container.find("#jira-chart-search-input").focus()},handleInsertButton:function(){if(this.isFormValid()&&this.isResultValid()){AJS.Editor.JiraChart.enableInsert()}else{AJS.Editor.JiraChart.disableInsert()}}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jirachart-macro', location = '/jirachart/piechart-panel.js' */
AJS.Editor.JiraChart.Panel.PieChart=function(d){AJS.Editor.JiraChart.Panel.call(this);var a="Pie Chart";var c="pie";var b=this;this.title=a;this.chartType=c;this.containerId="#jira-chart-content-pie";this.clickableElements=".jira-chart-search button, .jira-chart-show-border, .jira-chart-show-infor";this.onChangeElements="#jira-chart-statType, #jira-chart-width";this.isFormValid=function(){return AJS.Editor.JiraChart.Helper.isChartWidthValid(b.chartElements.width)&&AJS.Editor.JiraChart.Helper.isJqlNotEmpty(b.chartElements.jql)};this.isResultValid=function(){return this.container.find("#chart-preview-iframe").contents().find(".jira-chart-macro-wrapper").length};this.bindingActions=function(){var e=this;AJS.Editor.JiraChart.Panel.prototype.bindingActions.call(e);e.container.find(".widthInfo").tooltip({gravity:"w"})};this.bindingServerChange=function(){b.chartElements.server.change(function(){AJS.Editor.JiraChart.Helper.populateStatType(b.container,b.chartElements.statType);if(b.isFormValid()){AJS.Editor.JiraChart.search(b.container)}else{AJS.Editor.JiraChart.disableInsert()}})};this.bindingChartElements=function(){this.chartElements=AJS.Editor.JiraChart.Helper.bindingCommonChartElements(this.container);this.chartElements.statType=this.container.find("#jira-chart-statType")};this.getChartParamsRequest=function(){var f=this.getMacroParamsFromDialog();var e=AJS.Editor.JiraChart.Helper.getCommonChartParamsRequest(f,this.chartType);e.macro.params.statType=f.statType;return e};this.getMacroParamsFromDialog=function(){var e=AJS.Editor.JiraChart.Helper.getCommonMacroParamsFromDialog(this.chartElements,this.container);e.chartType=c;e.statType=this.chartElements.statType.val();return e};this.bindingDataFromMacroToForm=function(e){if(e){AJS.Editor.JiraChart.Helper.bindingCommonDataFromMacroToForm(this.chartElements,e);this.chartElements.statType.val(e.statType)}};this.preBinding=function(){AJS.Editor.JiraChart.Helper.populateStatType(this.container,this.container.find("#jira-chart-statType"))}};AJS.Editor.JiraChart.Panel.PieChart.prototype=AJS.Editor.JiraChart.Panel.prototype;AJS.Editor.JiraChart.Panel.PieChart.prototype.constructor=AJS.Editor.JiraChart.Panel.PieChart;AJS.Editor.JiraChart.Panels.push(new AJS.Editor.JiraChart.Panel.PieChart(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jirachart-macro', location = '/jirachart/createdvsresolvedchart-panel.js' */
AJS.Editor.JiraChart.Panel.CreatedVsResolvedChart=function(e){AJS.Editor.JiraChart.Panel.call(this);var d="createdvsresolved";var c=this;var a=function(){c.container.find("#created-vs-resolved-chart-periodName").val("daily");c.container.find("#created-vs-resolved-chart-daysprevious").val("30")};var b=function(){var h=c.chartElements.periodName.val();var g=e.trim(c.chartElements.daysprevious.val());var f=c.container.find(".days-previous-error");if(g===""){c.container.find(".days-previous-error").html("Days Previously is required field.");return false}if(!AJS.Editor.JiraChart.Helper.isNumber(g)||g<0){f.html("Days Previously must be a number and positive.");return false}switch(h){case"hourly":isValid=g<=10;if(!isValid){f.html(AJS.format("Days must not exceed {0} for {1} period",10,h))}break;case"daily":isValid=g<=300;if(!isValid){f.html(AJS.format("Days must not exceed {0} for {1} period",300,h))}break;case"weekly":isValid=g<=1750;if(!isValid){f.html(AJS.format("Days must not exceed {0} for {1} period",1750,h))}break;case"monthly":isValid=g<=7500;if(!isValid){f.html(AJS.format("Days must not exceed {0} for {1} period",7500,h))}break;case"quarterly":isValid=g<=22500;if(!isValid){f.html(AJS.format("Days must not exceed {0} for {1} period",22500,h))}break;case"yearly":isValid=g<=36500;if(!isValid){f.html(AJS.format("Days must not exceed {0} for {1} period",36500,h))}break;default:isValid=false}if(isValid){f.empty()}return isValid};this.title="Created vs Resolved";this.chartType=d;this.containerId="#jira-chart-content-createdvsresolved";this.clickableElements=".jira-chart-search button, .jira-chart-show-border, .jira-chart-show-infor, #created-vs-resolved-chart-cumulative, #created-vs-resolved-chart-showunresolvedtrend";this.onChangeElements="#created-vs-resolved-chart-periodName, #created-vs-resolved-chart-daysprevious, #created-vs-resolved-chart-versionLabel, #jira-chart-width";this.isFormValid=function(){var f=AJS.Editor.JiraChart.Helper.isChartWidthValid(c.chartElements.width);return b()&&f&&AJS.Editor.JiraChart.Helper.isJqlNotEmpty(c.chartElements.jql)};this.isResultValid=function(){return this.container.find("#chart-preview-iframe").contents().find(".jira-chart-macro-wrapper").length};this.init=function(f){AJS.Editor.JiraChart.Panel.prototype.init.call(this,f);a()};this.bindingChartElements=function(){this.chartElements=AJS.Editor.JiraChart.Helper.bindingCommonChartElements(this.container);this.chartElements.periodName=this.container.find("#created-vs-resolved-chart-periodName");this.chartElements.daysprevious=this.container.find("#created-vs-resolved-chart-daysprevious");this.chartElements.isCumulative=this.container.find("#created-vs-resolved-chart-cumulative");this.chartElements.showUnresolvedTrend=this.container.find("#created-vs-resolved-chart-showunresolvedtrend");this.chartElements.versionLabel=this.container.find("#created-vs-resolved-chart-versionLabel")};this.bindingActions=function(){AJS.Editor.JiraChart.Panel.prototype.bindingActions.call(this);this.container.find(".widthInfo").tooltip({gravity:"w"});this.container.find(".showunresolvedtrendInfo").tooltip({gravity:"w"});this.container.find(".cumulativeInfo").tooltip({gravity:"w"});this.container.find(".versionLabelInfo").tooltip({gravity:"w"});this.container.find(".daysPreviousInfo").tooltip({gravity:"w"})};this.getChartParamsRequest=function(){var g=this.getMacroParamsFromDialog();var f=AJS.Editor.JiraChart.Helper.getCommonChartParamsRequest(g,this.chartType);f.macro.params.periodName=g.periodName;f.macro.params.daysprevious=g.daysprevious;f.macro.params.isCumulative=g.isCumulative;f.macro.params.showUnresolvedTrend=g.showUnresolvedTrend;f.macro.params.versionLabel=g.versionLabel;return f};this.getMacroParamsFromDialog=function(){var f=AJS.Editor.JiraChart.Helper.getCommonMacroParamsFromDialog(this.chartElements,this.container);f.chartType=d;f.periodName=this.chartElements.periodName.val();f.daysprevious=e.trim(this.chartElements.daysprevious.val());f.isCumulative=this.chartElements.isCumulative.prop("checked");f.showUnresolvedTrend=this.chartElements.showUnresolvedTrend.prop("checked");f.versionLabel=this.chartElements.versionLabel.val();return f};this.resetDialogValue=function(){AJS.Editor.JiraChart.Panel.prototype.resetDialogValue.call(this);a()};this.bindingDataFromMacroToForm=function(f){if(f){AJS.Editor.JiraChart.Helper.bindingCommonDataFromMacroToForm(c.chartElements,f);c.chartElements.isCumulative.attr("checked",(f.isCumulative!=="false"));c.chartElements.showUnresolvedTrend.attr("checked",(f.showUnresolvedTrend==="true"));c.chartElements.periodName.val(f.periodName===""?"daily":f.periodName);c.chartElements.versionLabel.val(f.versionLabel);c.chartElements.daysprevious.val(f.daysprevious===""?"30":f.daysprevious)}}};AJS.Editor.JiraChart.Panel.CreatedVsResolvedChart.prototype=AJS.Editor.JiraChart.Panel.prototype;AJS.Editor.JiraChart.Panel.CreatedVsResolvedChart.prototype.constructor=AJS.Editor.JiraChart.Panels.CreatedVsResolvedChart;AJS.Editor.JiraChart.Panels.push(new AJS.Editor.JiraChart.Panel.CreatedVsResolvedChart(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jirachart-macro', location = '/jirachart/twodimensionalchart-panel.js' */
AJS.Editor.JiraChart.Panel.TwoDimensionalChart=function(d){AJS.Editor.JiraChart.Panel.call(this);var c="twodimensional";var f=5;var b=this;var e=function(){var h=d(".twodimensional-number-of-result-error");var g=b.chartElements.numberToShow.val();if(AJS.Editor.JiraChart.Helper.isNumber(g)&&g>0){h.empty();return true}h.html("The number of rows should be a positive integer");return false};var a=function(){b.chartElements.numberToShow.val(f);b.chartElements.xstattype.val("statuses");b.chartElements.ystattype.val("assignees")};this.title="Two Dimensional";this.chartType=c;this.containerId="#jira-chart-content-twodimensional";this.clickableElements=".jira-chart-search button, .jira-chart-show-border, .jira-chart-show-infor, #twodimensional-show-total";this.onChangeElements="#twodimensional-xaxis, #twodimensional-yaxis, #twodimensional-number-of-result";this.isFormValid=function(){var g=e();return g&&AJS.Editor.JiraChart.Helper.isJqlNotEmpty(b.chartElements.jql)};this.isResultValid=function(){return this.container.find("#chart-preview-iframe").contents().find(".two-dimensional-chart-table").length};this.init=function(g){AJS.Editor.JiraChart.Panel.prototype.init.call(this,g);a()};this.bindingChartElements=function(){this.chartElements=AJS.Editor.JiraChart.Helper.bindingCommonChartElements(this.container);this.chartElements.xstattype=this.container.find("#twodimensional-xaxis");this.chartElements.ystattype=this.container.find("#twodimensional-yaxis");this.chartElements.sortBy=this.container.find("#twodimensional-sortby");this.chartElements.sortDirection=this.container.find("#twodimensional-sort-direction");this.chartElements.showTotals=this.container.find("#twodimensional-show-total");this.chartElements.numberToShow=this.container.find("#twodimensional-number-of-result")};this.getChartParamsRequest=function(){var h=this.getMacroParamsFromDialog();var g=AJS.Editor.JiraChart.Helper.getCommonChartParamsRequest(h,this.chartType);g.macro.params.xstattype=h.xstattype;g.macro.params.ystattype=h.ystattype;g.macro.params.sortBy=h.sortBy;g.macro.params.sortDirection=h.sortDirection;g.macro.params.showTotals=h.showTotals;g.macro.params.numberToShow=h.numberToShow;return g};this.getMacroParamsFromDialog=function(){var g=AJS.Editor.JiraChart.Helper.getCommonMacroParamsFromDialog(this.chartElements,this.container);g.chartType=c;g.xstattype=this.chartElements.xstattype.val();g.ystattype=d.trim(this.chartElements.ystattype.val());g.sortBy=d.trim(this.chartElements.sortBy.val());g.sortDirection=d.trim(this.chartElements.sortDirection.val());g.showTotals=this.chartElements.showTotals.prop("checked");g.numberToShow=this.chartElements.numberToShow.val();return g};this.bindingDataFromMacroToForm=function(g){if(g){AJS.Editor.JiraChart.Helper.bindingCommonDataFromMacroToForm(b.chartElements,g);b.chartElements.xstattype.val(g.xstattype);b.chartElements.ystattype.val(g.ystattype);b.chartElements.sortBy.val(g.sortBy);b.chartElements.sortDirection.val(g.sortDirection);b.chartElements.showTotals.attr("checked",g.showTotals==="true");b.chartElements.numberToShow.val(g.numberToShow)}};this.resetDialogValue=function(){AJS.Editor.JiraChart.Panel.prototype.resetDialogValue.call(this);a()};this.isImageChartExisted=function(){return this.container.find("#chart-preview-iframe").contents().find(".two-dimensional-chart-table").length>0};this.preBinding=function(){AJS.Editor.JiraChart.Helper.populateStatType(this.container,this.container.find("#twodimensional-xaxis"));AJS.Editor.JiraChart.Helper.populateStatType(this.container,this.container.find("#twodimensional-yaxis"));b.chartElements.xstattype.val("statuses");b.chartElements.ystattype.val("assignees")};this.bindingServerChange=function(){b.chartElements.server.change(function(){AJS.Editor.JiraChart.Helper.populateStatType(b.container,b.chartElements.xstattype);AJS.Editor.JiraChart.Helper.populateStatType(b.container,b.chartElements.ystattype);b.chartElements.xstattype.val("statuses");b.chartElements.ystattype.val("assignees");if(b.isFormValid()){AJS.Editor.JiraChart.search(b.container)}else{AJS.Editor.JiraChart.disableInsert()}})}};AJS.Editor.JiraChart.Panel.TwoDimensionalChart.prototype=AJS.Editor.JiraChart.Panel.prototype;AJS.Editor.JiraChart.Panel.TwoDimensionalChart.prototype.constructor=AJS.Editor.JiraChart.Panel.TwoDimensionalChart;AJS.Editor.JiraChart.Panels.push(new AJS.Editor.JiraChart.Panel.TwoDimensionalChart(AJS.$));
}catch(e){WRMCB(e)};