define("wkview:widget/common_toc/common/doc_tag/index.js",function(o,t,i){var e=o("wkcommon:widget/ui/lib/jquery/jquery.js"),n=o("wkcommon:widget/lib/fis/data/data.js"),a=o("wkview:widget/common_item/commonUtil/commonUtil.js"),s=o("wkview:widget/model/vipData.js"),c=n.get("WkInfo")||{},d=c.DocInfo||{},r=e(".doc-tag-wrap"),g=function(){this.init().bindEvent()};g.prototype={constructor:g,ops:{},init:function(){return 19===+d.flag?this:(s.run(e.proxy(this.showTag,this),e.proxy(this.showTag,this)),this)},showTag:function(){d.isVipFreeDoc=window.isVipFreeDoc;var o=a.calcualteDocValueType(d),t=a.DOC_VALUE_TYPE;switch(o){case t.PROFESSIONAL:e(".doc-tag-professional",r).show();break;case t.TICKET_VIP_FREE:e(".doc-tag-vip-free",r).show();break;case t.PAY_DISCOUNT:e(".doc-tag-pay-discount",r).show();break;case t.PARTNER_NORMAL:e(".doc-tag-pay-normal",r).show();break;case t.PAY_NORMAL:e(".doc-tag-pay-normal",r).show();break;case t.PAY_PACK:e(".doc-tag-pay-normal",r).show();break;case t.TICKET:e(".doc-tag-ticket",r).show()}},bindEvent:function(){r.on("mouseover",".doc-tag",function(){var o=e(this),t=e(".tag-info",o);t.show()}),r.on("mouseleave",".doc-tag",function(o){var t=this.offsetWidth,i=this.offsetHeight,n=this.getBoundingClientRect().top+document.body.scrollTop,a=(o.pageX-this.getBoundingClientRect().left-t/2)*(t>i?i/t:1),s=(o.pageY-n-i/2)*(i>t?t/i:1),c=Math.round((180*Math.atan2(s,a)/Math.PI+180)/90+3)%4,d=["up","right","down","left"];if("down"!==d[c]){var r=e(".tag-info",e(this));r.hide()}}),r.on("mouseleave",".tag-info",function(){var o=e(this);o.hide()}),e(window).scroll(function(){try{var o=e(window).scrollTop(),t=e(".reader-container")[0],i=t.getBoundingClientRect().bottom,n=r[0].getBoundingClientRect().bottom;if(n>i)return void r.css({visibility:"hidden"});r.css({visibility:"visible"}),o>=268?r.addClass("fixed"):r.removeClass("fixed")}catch(a){console.warn(a)}})}},i.exports=g});