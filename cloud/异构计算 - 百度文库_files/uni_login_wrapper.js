function isSingleInstanceProd(s){var i=["mn","ma","im_hi"];return("|"+i.join("|")+"|").indexOf("|"+s+"|")>-1}function isLoginInstance(s){return s=s||"login",s+""=="login"}function saveInitInstance(s){window._pass_popinit_instance=s}function getInitInstance(){return window._pass_popinit_instance}var passport=passport||window.passport||{};passport._modulePool=passport._modulePool||{},passport._define=passport._define||function(s,i){passport._modulePool[s]=i&&i()},passport._getModule=passport._getModule||function(s){return passport._modulePool[s]};var passport=window.passport||{};passport.pop=passport.pop||{},passport.pop.insertScript=passport.pop.insertScript||function(s,i){var n=document,a=n.createElement("SCRIPT");a.type="text/javascript",a.charset="UTF-8",a.readyState?a.onreadystatechange=function(){("loaded"===a.readyState||"complete"===a.readyState)&&(a.onreadystatechange=null,i&&i())}:a.onload=function(){i&&i()},a.src=s,n.getElementsByTagName("head")[0].appendChild(a)},passport.pop.init=passport.pop.init||function(s){var i={"http:":"http://passport.bdimg.com","https:":"https://ss0.bdstatic.com/5LMZfyabBhJ3otebn9fN2DJv"};if(isSingleInstanceProd(s.apiOpt.product)&&isLoginInstance(s.type)&&getInitInstance())return getInitInstance();var n;n=s&&"https"===s.protocol?"https:":window.location?window.location.protocol.toLowerCase():document.location.protocol.toLowerCase();var a=["pp","mn","wk","cmovie","translate","baidugushitong","ik","exp","waimai","jn","im","do","yuedu","hao123","tb","netdisk","developer","newdev","image_eco","zbsc","bpit_hcm","defensor","study"],e=s&&s.apiOpt&&s.apiOpt.product||"",t=("|"+a.join("|")+"|").indexOf("|"+e+"|")>-1,p=t?"/passApi/js/uni_loginv4_6b1a88d.js":"/passApi/js/uni_login_4569c9a.js",c=t?"/passApi/js/uni_loginv4_tangram_fe181cc.js":"/passApi/js/uni_login_tangram_a26fb01.js",_=t?"/passApi/css/uni_loginv4_1c50fab.css":"/passApi/css/uni_login_new_a9b11fc.css",o={uni_login:p,uni_login_tangram:c,uni_loginPad:"/passApi/js/uni_loginPad_7e33f3f.js",uni_loginPad_tangram:"/passApi/js/uni_loginPad_tangram_b05ab85.js",uni_smsloginEn:"/passApi/js/uni_smsloginEn_5e62ce0.js",uni_smsloginEn_tangram:"/passApi/js/uni_smsloginEn_tangram_596f2ce.js",uni_loginWap:"/passApi/js/uni_loginWap_02f571f.js",uni_loginWap_tangram:"/passApi/js/uni_loginWap_02f571f.js",uni_accConnect:"/passApi/js/uni_accConnect_35a03f7.js",uni_accConnect_tangram:"/passApi/js/uni_accConnect_tangram_e594a76.js",uni_accRealName:"/passApi/js/uni_accRealName_d6420f2.js",uni_accRealName_tangram:"/passApi/js/uni_accRealName_tangram_9bd4f37.js",uni_checkPhone:"/passApi/js/uni_checkPhone_1570917.js",uni_checkPhone_tangram:"/passApi/js/uni_checkPhone_tangram_fcbeac6.js",uni_checkIDcard:"/passApi/js/uni_checkIDcard_e516228.js",uni_checkIDcard_tangram:"/passApi/js/uni_checkIDcard_tangram_28d0fe3.js",uni_accSetPwd:"/passApi/js/uni_accSetPwd_94666de.js",uni_accSetPwd_tangram:"/passApi/js/uni_accSetPwd_tangram_a65545a.js",uni_IDCertify:"/passApi/js/uni_IDCertify_dd7e009.js",uni_IDCertify_tangram:"/passApi/js/uni_IDCertify_tangram_29e512c.js",uni_travelComplete:"/passApi/js/uni_travelComplete_e7748f4.js",uni_travelComplete_tangram:"/passApi/js/uni_travelComplete_tangram_9fcf41e.js",uni_bindGuide:"/passApi/js/uni_bindGuide_a0a714e.js",uni_bindGuide_tangram:"/passApi/js/uni_bindGuide_tangram_00ba481.js",uni_fillUserName:"/passApi/js/uni_fillUserName_8f733e6.js",uni_fillUserName_tangram:"/passApi/js/uni_fillUserName_tangram_d75c6ab.js",uni_IDCertifyQrcode:"/passApi/js/uni_IDCertifyQrcode_0dc2087.js",uni_IDCertifyQrcode_tangram:"/passApi/js/uni_IDCertifyQrcode_tangram_6b55b7a.js",uni_loadingApi:"/passApi/js/uni_loadingApi_e1cb593.js",uni_loadingApi_tangram:"/passApi/js/uni_loadingApi_tangram_0964dca.js",uni_secondCardVerify:"/passApi/js/uni_secondCardVerify_01ee06b.js",uni_secondCardVerify_tangram:"/passApi/js/uni_secondCardVerify_tangram_c3ea3b0.js",uni_multiBind:"/passApi/js/uni_multiBind_400f698.js",uni_multiBind_tangram:"/passApi/js/uni_multiBind_tangram_1ad6213.js",uni_multiUnbind:"/passApi/js/uni_multiUnbind_6834a2d.js",uni_multiUnbind_tangram:"/passApi/js/uni_multiUnbind_tangram_6e9b900.js",uni_changeUser:"/passApi/js/uni_changeUser_763a88c.js",uni_changeUser_tangram:"/passApi/js/uni_changeUser_tangram_bb6e698.js",uni_loginMultichoice:"/passApi/js/uni_loginMultichoice_50a5dcf.js",uni_loginMultichoice_tangram:"/passApi/js/uni_loginMultichoice_tangram_b7b847b.js",uni_confirmWidget:"/passApi/js/uni_confirmWidget_0c38d1a.js",uni_confirmWidget_tangram:"/passApi/js/uni_confirmWidget_tangram_1232c04.js"},r={login:_,loginWap:"/passApi/css/uni_loginWap_f57424a.css",smsloginEn:"/passApi/css/uni_smsloginEn_eef0a6a.css",accConnect:"/passApi/css/uni_accConnect_ab6dda9.css",accRealName:"/passApi/css/uni_accRealName_a224a37.css",secondCardVerify:"/passApi/css/uni_secondCardVerify_1a69328.css",checkPhone:"/passApi/css/uni_checkPhone_cd7c7a0.css",checkIDcard:"/passApi/css/uni_checkIDcard_be79680.css",accSetPwd:"/passApi/css/uni_accSetPwd_29f7784.css",IDCertify:"/passApi/css/uni_IDCertify_36e091b.css",IDCertifyQrcode:"/passApi/css/uni_IDCertifyQrcode_1e8827b.css",loadingApi:"/passApi/css/uni_loadingApi_f8732c0.css",loginPad:"/passApi/css/uni_loginPad_af389a4.css",multiBind:"/passApi/css/uni_multiBind_e8d24e4.css",multiUnbind:"/passApi/css/uni_multiUnbind_21428a6.css",changeUser:"/passApi/css/uni_changeUser_c7ae7b4.css",loginMultichoice:"/passApi/css/uni_loginMultichoice_289d3a0.css",confirmWidget:"/passApi/css/uni_confirmWidget_3d41f3b.css",uni_rebindGuide:"/passApi/css/uni_rebindGuide_347ecf2.css",travelComplete:"/passApi/css/uni_travelComplete_b06b013.css",bindGuide:"/passApi/css/uni_bindGuide_35d4a06.css",fillUserName:"/passApi/css/uni_fillUserName_931cb17.css"},u=i[n]||i["https:"];s=s||{},s.type=s.type||"login";var d,l=document,g=("_PassUni"+(new Date).getTime(),u+r[s.type]);s.cssUrlWrapper&&(g=cssUrlWrapper.join(t?"uni_loginv4.css":"uni_login.css")),d={show:function(){return d.loadPass(s.apiOpt),d.willShow=!0,d},setSubpro:function(i){return s.apiOpt&&(s.apiOpt.subpro=i),d},setMakeText:function(i){return s.apiOpt&&(s.apiOpt.makeText=i),d},loadPass:function(){var i=l.createElement("link");i.rel="stylesheet",i.type="text/css",i.href=g,i.disabled=!1,i.setAttribute("data-for","result"),l.getElementsByTagName("head")[0].appendChild(i),d.show=function(){return d.willShow=!0,d},s.plugCss&&(i=l.createElement("link"),i.rel="stylesheet",i.type="text/css",i.href=s.plugCss,i.disabled=!1,i.setAttribute("data-for","result"),l.getElementsByTagName("head")[0].appendChild(i)),d.passCallback(),delete d.loadPass},passCallback:function(){d.components.length>0?passport.pop.insertScript(d.components.shift(),d.passCallback):(passport.pop[s.type](s,d,function(){d.willShow&&d.show(),s&&s.onRender&&s.onRender()}),delete d.passCallback,delete d.components)},components:[]};var m="uni_"+s.type;return s.tangram&&(m+="_tangram"),s.apiOpt&&s.apiOpt.product+""=="ik"&&Math.random()<.3&&(d.components.push(u+"/passApi/js/uni/passhunt.js"),s.hunter=!0),d.components.push(u+o[m]),s.cache&&d.loadPass(s.apiOpt),s.id&&l.getElementById(s.id)&&(l.getElementById(s.id).onclick=function(){d.show()}),isSingleInstanceProd(s.apiOpt.product)&&isLoginInstance(s.type)&&saveInitInstance(d),d};