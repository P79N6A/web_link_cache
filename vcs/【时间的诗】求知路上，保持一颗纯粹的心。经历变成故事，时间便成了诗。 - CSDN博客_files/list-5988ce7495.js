$(function(){function t(t){var e=t.data("type"),i=t.parents(".article-item-box").data("articleid");switch(e){case"noTop":comPrompt.show("你确定要取消置顶这篇文章吗？","确定",n,i);break;case"top":comPrompt.show("确定要置顶当前文章？","确定",o,i);break;case"delete":comPrompt.show("确定要删除当前文章？","确定",c,i)}}function o(t){var o={articleId:t};$.post(blog_address+"/phoenix/article/top",o,function(t){t.result?comPrompt.show("文章已置顶！","确定",i,void 0,!1):t.content?alert(t.content):alert("无法置顶，请到后台操作！")})}function n(t){var o={articleId:t};$.post(blog_address+"/phoenix/article/untop",o,function(t){t.result?comPrompt.show("文章已取消置顶！","确定",i,void 0,!1):t.content?alert(t.content):alert("无法取消置顶，请到后台操作！")})}function c(t){var o={articleId:t};$.post(blog_address+"/phoenix/article/delete",o,function(t){t.result?comPrompt.show("文章已删除！","确定",i,void 0,!1):t.content?alert(t.content):alert("无法删除，请到后台删除！")})}if(listTotal>0){var e=new Paging;e.init({target:"#pageBox",pagesize:pageSize,count:listTotal,current:currentPage,firstTpl:"",lastTpl:"",callback:function(t,o,n){var c=getAllUrl(t);location.href=c}}),$(".article-list").find("button.btn-opt").click(function(){t($(this))});var i=function(){location.reload()}}}),function(){var t={fn:"",data:0,show:function(t,c,e,i,a){this.fn=e,this.data=i,a=void 0===a,$(".promptBox .text").html(t),$(".promptBox .clickYes").html(c),$(".mask").fadeIn(300),$(".promptBox").fadeIn(300),$(document).on("click",".clickYes",o),a?($(".clickNo").show(),$(document).on("click",".clickNo",n)):$(".clickNo").hide()},hide:function(){this.fn="",this.can=0,$(".mask").fadeOut(300),$(".promptBox").fadeOut(300),$(".clickYes").unbind("click",o),$(".clickNo").unbind("click",n)}};$(document).on("click",".Boxclose",function(){$(".mask").fadeOut(300),$(".promptBox").fadeOut(300)});var o=function(){t.fn&&t.fn(t.data),t.hide()},n=function(){t.hide()};window.comPrompt=t}();