var deviceJump=(function(){var ua=navigator.userAgent.toLowerCase();var locHref=window.location.href.toLowerCase();var locHrefHostname=location.hostname;var rf=document.referrer.toLowerCase();var rfHostname=rf.split("/")[2];var locSearch=window.location.search;var locHash=window.location.hash;var jumpYN=false;var hasAd=false;var jumpUrl="main";var domain="";var wap_3gHostname="";var ipadHostname="";if(locHrefHostname.indexOf("pconline")!=-1){domain=".pconline.com.cn";wap_3gHostname="g.pconline.com.cn";ipadHostname="ipad.pconline.com.cn"}else{if(locHrefHostname.indexOf("pcauto")!=-1){domain=".pcauto.com.cn";wap_3gHostname="m.pcauto.com.cn";ipadHostname="ipad.pcauto.com.cn"}else{if(locHrefHostname.indexOf("pclady")!=-1){domain=".pclady.com.cn";wap_3gHostname="g.pclady.com.cn";ipadHostname="pad.pclady.com.cn"}else{if(locHrefHostname.indexOf("pcbaby")!=-1){domain=".pcbaby.com.cn";wap_3gHostname="m.pcbaby.com.cn";ipadHostname="pad.pcbaby.com.cn"}else{if(locHrefHostname.indexOf("pcgames")!=-1){domain=".pcgames.com.cn";wap_3gHostname="m.pcgames.com.cn";ipadHostname="pad.pcgames.com.cn"}else{if(locHrefHostname.indexOf("pchouse")!=-1){domain=".pchouse.com.cn";wap_3gHostname="m.pchouse.com.cn";ipadHostname="pad.pchouse.com.cn"}else{domain=document.domain;wap_3gHostname=locHrefHostname;ipadHostname=locHrefHostname}}}}}}var bIsIpad=ua.match(/ipad/i)=="ipad";var bIsMiui=ua.match(/mi-pad/i)=="mi-pad";var bIsIpodOs=ua.match(/ipod/i)=="ipod";var bIsIphoneOs=ua.match(/iphone/i)=="iphone";var bIsAndroid=ua.match(/android/i)=="android";var bIsMobile=ua.match(/mobile/i)=="mobile";var bIsWP=ua.match(/windows phone/i)=="windows phone";var bIsSymbian=ua.match(/symbian/i)=="symbian";var bIsNokia=ua.match(/nokia/i)=="nokia";var bIsWindowsCe=ua.match(/windows ce/i)=="windows ce";var bIsUC=ua.match(/rv:1.2.3.4/i)=="rv:1.2.3.4";var bIsNT=ua.match(/windows nt/i)=="windows nt";var bIsTrident=ua.match(/trident/i)=="trident";var bIsWeixin=ua.match(/micromessenger/i)=="micromessenger";var bIsBlackBerry=ua.match(/blackberry/i)=="blackberry";if(!(window.PCGPARAM&&typeof(window.PCGPARAM)=="object")){window.PCGPARAM=new Object()}if(bIsWeixin){window.PCGPARAM.bIsWeixin=true}else{window.PCGPARAM.bIsWeixin=false}if(bIsIpad||bIsMiui){window.PCGPARAM.browserType="ipad"}else{if(bIsNokia||bIsSymbian||bIsBlackBerry||bIsWindowsCe||bIsWP){window.PCGPARAM.browserType="wap"}else{if(bIsMobile||bIsIpodOs||bIsIphoneOs||bIsAndroid||bIsUC){window.PCGPARAM.browserType="wap_3g"}else{window.PCGPARAM.browserType="main"}}}var deviceJump=function(){};deviceJump.prototype={init:function(jsonLink,fc){jumpUrl=window.PCGPARAM.browserType;if(typeof(fc)!="undefined"){fc(jumpUrl,jsonLink)}if(jumpUrl=="main"){return false}if(locSearch.indexOf("type=checked")!=-1){return false}if(locHrefHostname.indexOf("cms.pc")==0){return false}if(jsonLink[jumpUrl]==undefined||jsonLink[jumpUrl]==""){return false}if(locHref.indexOf(jsonLink[jumpUrl])!=-1){var wapIndexLink="//"+wap_3gHostname+"/w/";if(locHref!=wapIndexLink){return false}}if(rf==""){jumpYN=true;document.cookie="referrerUrl="+rf+";expires="+new Date(new Date().getTime()-10000).toGMTString()+";path=/;domain="+domain}else{if(rfHostname.indexOf(domain)==-1||rfHostname.indexOf("mrobot")!=-1){jumpYN=true;document.cookie="referrerUrl="+rf+";expires="+new Date(new Date().getTime()+10000).toGMTString()+";path=/;domain="+domain}if((rfHostname!=locHrefHostname)&&(rf+locHref).split(wap_3gHostname).length>=2){jumpYN=true;document.cookie="referrerUrl="+rf+";expires="+new Date(new Date().getTime()+10000).toGMTString()+";path=/;domain="+domain}if((rfHostname!=locHrefHostname)&&(rf+locHref).split(ipadHostname).length>=2){jumpYN=true;document.cookie="referrerUrl="+rf+";expires="+new Date(new Date().getTime()+10000).toGMTString()+";path=/;domain="+domain}}if(!jumpYN){return false}if(locSearch){if(locSearch.indexOf("fromApp")!=-1){if(jsonLink[jumpUrl].indexOf("?")!=-1){jsonLink[jumpUrl]+="&fromApp"}else{jsonLink[jumpUrl]+="?fromApp"}}}if(locHash||locSearch){console.log(locSearch+locHash);if((locSearch+locHash).indexOf("ad=")!=-1){var adNum=(locSearch+locHash).split("ad=")[1].split("#")[0];if(jsonLink[jumpUrl].indexOf("?")!=-1){jsonLink[jumpUrl]+="#ad="+adNum}else{if(jsonLink[jumpUrl].indexOf("#")!=-1){jsonLink[jumpUrl]+="?ad="+adNum}else{jsonLink[jumpUrl]+="#ad="+adNum}}}}if(jsonLink[jumpUrl].toLowerCase().match(/^http/)!="http"){jsonLink[jumpUrl]=location.protocol+jsonLink[jumpUrl]}location.href=jsonLink[jumpUrl]}};return new deviceJump()})();