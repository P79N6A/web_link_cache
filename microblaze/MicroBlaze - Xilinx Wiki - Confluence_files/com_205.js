WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/jquery.ui.menu.js' */
(function(d){d.widget("ui.menu",{_create:function(){var a=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(b){d(b.target).closest(".ui-menu-item a").length&&(b.preventDefault(),a.select(b))});this.refresh()},refresh:function(){var a=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function(b){a.activate(b,d(this).parent())}).mouseleave(function(){a.deactivate()})},activate:function(a,b){this.deactivate();if(this.hasScroll()){var c=b.offset().top-this.element.offset().top,e=this.element.attr("scrollTop"),d=this.element.height();0>c?this.element.attr("scrollTop",e+c):c>d&&this.element.attr("scrollTop",e+c-d+b.height())}this.active=b.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",a,{item:b})},deactivate:function(){this.active&&
(this.active.children("a").removeClass("ui-state-hover").removeAttr("id"),this._trigger("blur"),this.active=null)},next:function(a){this.move("next",".ui-menu-item:first",a)},previous:function(a){this.move("prev",".ui-menu-item:last",a)},first:function(){return this.active&&!this.active.prev().length},last:function(){return this.active&&!this.active.next().length},move:function(a,b,c){this.active?(a=this.active[a+"All"](".ui-menu-item").eq(0),a.length?this.activate(c,a):this.activate(c,this.element.children(b))):
this.activate(c,this.element.children(b))},nextPage:function(a){if(this.hasScroll())if(!this.active||this.last())this.activate(a,this.element.children(":first"));else{var b=this.active.offset().top,c=this.element.height(),e=this.element.children("li").filter(function(){var a=d(this).offset().top-b-c+d(this).height();return 10>a&&-10<a});e.length||(e=this.element.children(":last"));this.activate(a,e)}else this.activate(a,this.element.children(!this.active||this.last()?":first":":last"))},previousPage:function(a){if(this.hasScroll())if(!this.active||
this.first())this.activate(a,this.element.children(":last"));else{var b=this.active.offset().top,c=this.element.height();result=this.element.children("li").filter(function(){var a=d(this).offset().top-b+c-d(this).height();return 10>a&&-10<a});result.length||(result=this.element.children(":first"));this.activate(a,result)}else this.activate(a,this.element.children(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight")},select:function(a){this._trigger("selected",
a,{item:this.active})}})})(jQuery);
}catch(e){WRMCB(e)};