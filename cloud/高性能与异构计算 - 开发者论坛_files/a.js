/**
 * xiao yun bang nin vision 2
 * author: liuqi.lq@alibaba-inc.com
**/
(function(){
    var suffix = function(){
       var domain = window.location.host;
       if(!domain.match(/^.+\.aliyun\.|^aliyun\./))return '.com';
       var output =  domain.replace(/^.*\.aliyun|^aliyun/i,'');
       if(!output)output = '.com';
       return output;
    }();
    var cururl = window.location.href;
    var loaded = false;
    var PAGECONST={};
    var timeCache=300;//延迟时间suggest
    var curDo=null;
    var CHANGE_CACHE= 300; //页面切换动画时间
    var isRobotPanel= false;
    var pathurl = 'http://'+window.location.host+window.location.pathname;
    var cloud_helper_button;//小云帮您button
    var cloud_helper_body_wrap;//小云帮帮您窗体
    var cloud_helper_button_wrap;//小云帮您button父节点
    var version_time = new Date();
    var version_id = ""+version_time.getFullYear()+(version_time.getMonth()+1)+version_time.getDate();
    //加载config文件
    loadScript("//static.aliyun"+suffix+"/??js/www-knight/components/cloud_helper/cloud_helper_config.js"+"?v="+version_id,function(){
        if(!window.CHCONFIG){
            return;
        }
        if(window.CHCONFIG.isInWhiteList(pathurl)){
            //创建小云帮您按钮
            createWrap();
        }
    });
    //增加小云帮您按钮
    function createWrap(){
        if(!window.jQuery){
            loadScript("//static.aliyun.com/js/lib/jquery-1.6.2.min.js",function(){
                start();
            });
        }else{
            start();
        }    
    }
    //入口
    function start(){
        var  node = '<div class="cloud-helper-body-wrap"></div>';
        $(node).appendTo($(document.body));
        addHelpStyle("http://static.aliyun"+suffix+"/??css/www-knight/components/cloud_helper.css"+"?v="+version_id);
        cloud_helper_button = $(window.CHCONFIG.defaultButtonName);
        cloud_helper_body_wrap = $('.cloud-helper-body-wrap');
        cloud_helper_button_wrap =$(window.CHCONFIG.defaultButtonWrap);
        if(cloud_helper_button.length == 0 ){
            if(cloud_helper_button_wrap.length == 0){
                $(document.body).append(window.CHCONFIG.button_2_html);
            }
        }
        if(!CHCONFIG.showXiaoYunButton)
            cloud_helper_button.hidden();
        if(CHCONFIG.loadOnClick){
            waitBeforeLoad();
        }else{
            loadAndStart();
        }  
    }
    //点击加载
    function waitBeforeLoad(){
        $(window.CHCONFIG.defaultButtonName).click(function(){
            if(!loaded){
                renderWrapper(loadAndStart);
            }
        }).hover(function(){
            if($(this).hasClass('cloud-helper-showonce')){
                $(this).removeClass('cloud-helper-showonce');
            }
        });
    }
    //直接加载
    function loadAndStart(){
        loadScript("http://portal.manjushri.alibaba.com/htdocs/js/mjr-api.js",getInitParams);
    }
    //加载函数
    function loadScript(url, callback){
        var script = document.createElement("script")
        script.type = "text/javascript";
        if (script.readyState){  //IE
            script.onreadystatechange = function(){
                if (script.readyState == "loaded" ||
                        script.readyState == "complete"){
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {  //Others
            script.onload = function(){
                callback();
            };
        }
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    //ga 埋点代码
    function createGaPoint(action,data,value){
        if(window.ga){
            ga('send', 'event', 'Cloud Helper', action, {
                'eventLabel': data,
                'eventValue': value
            });
        }
    }
    function addHelpStyle(href){
        (function(href)
        {
            var link = document.createElement('link');
            link.setAttribute("href", href);
            link.setAttribute("rel", "Stylesheet");
            link.setAttribute("type", "text/css");
            document.getElementsByTagName('head')[0].appendChild(link);
        }).apply(window, [href]);
    }

    //获取cookies
    function getCookie(objName){//获取指定名称的cookie的值
        var arrStr = document.cookie.split("; ");
        for(var i = 0;i < arrStr.length;i ++){
            var temp = arrStr[i].split("=");
            if(temp[0] == objName) 
                return unescape(temp[1]);
        }
        return false;
    }
    function renderWrapper(callback){
        var htmlStr = [
            '<div class="cloud-helper-box">',
                '<div class="cloud-helper-box-top">',
                    '<div title="点击拖动" class="cloud-helper-box-sec-tit">',
                        '<div class="cloud-helper-box-close cloud-helper-box-switch"><a href="" title="关闭" onclick="return false;"></a></div>',
                        '<div class="cloud-helper-box-change cloud-helper-box-switch"><a href="" title="返回" onclick="return false;"></a></div>',
                        '<span class="cloud-helper-box-top-text">您可能遇到的问题?</span>',
                    '</div>',
                '</div>',
                '<div class="cloud-helper-loading-body"></div>',
            '</div>'
        ];
        cloud_helper_body_wrap.html(htmlStr.join(''));
        cloud_helper_body_wrap.css(CHCONFIG.wrapStyle);
        cloud_helper_body_wrap.fadeToggle(200,callback);
        $('.cloud-helper-box-close').click(function(){
            cloud_helper_body_wrap.fadeOut(200);
        });
    }

    function getInitParams(){
        $.ajax({
            url: "http://help.aliyun" + suffix + "/robot/cloud",
            dataType: "script",
            data:{
                url:cururl
            },
            success: function(){
                if(window.__retConfig){
                    if(window.__retConfig['siteId']){
                        PAGECONST['exportURL'] = "http://portal.manjushri.alibaba.com/portal/portal/exportRecord.jspa";
                        // PAGECONST['robotDomain'] = window.__retConfig['robotDomain'];
                        PAGECONST['siteId'] = window.__retConfig['siteId'];
                        PAGECONST['instanceCode'] = window.__retConfig['instanceCode'];
                        PAGECONST['sceneCode'] = window.__retConfig['scenceCode'];
                        PAGECONST['contextParams'] = window.__retConfig['contextParams'];
                        PAGECONST['digest'] = window.__retConfig['digest'];
                        initParams();
                    }
                }
            },
            beforeSend: function(){
             // Handle the beforeSend event
            },
            complete: function(){
             // Handle the complete event
            }
        }); 
    }
    function initParams(){
        MJRAPI.init({
                robotDomain:"http://onlineservice.aliyun.com",
                instanceCode:PAGECONST['instanceCode'],
                sceneCode:PAGECONST['sceneCode'],
                contextParams:PAGECONST['contextParams'],
                digest:PAGECONST['digest'],
                // siteId:PAGECONST['siteId'],
                // name:PAGECONST['loginId'],
                callback:function(result){helpInit(result);}
            }
        ); 
    }
    function helpInit(result){
        if(result.apiIsSuccess){
            renderHTML(result,CHCONFIG.configBaseUrl);
            judgeManualServStatus();
            loaded = true;
            $('#cloud-helper-control').click(function(e){
                e.preventDefault();
                if($(this).find('.cloud-helper-box-icon').hasClass('cloud-helper-box-icon-up')){
                    $(this).find('.cloud-helper-box-icon').removeClass('cloud-helper-box-icon-up');
                    $(this).find('.cloud-helper-box-icon').addClass('cloud-helper-box-icon-down');
                }else{
                    $(this).find('.cloud-helper-box-icon').removeClass('cloud-helper-box-icon-down');
                    $(this).find('.cloud-helper-box-icon').addClass('cloud-helper-box-icon-up');
                }
                $('.cloud-helper-box-bot').slideToggle(150);
                createGaPoint('click','CloudHelper.onlineServiceWitch');
            });

            $('#cloud-helper-ask-btn').click(function(e){
                e.stopPropagation();
                $('.cloud-helper-suggest-results').remove();
                clearTimeout(curDo);
                if($('#cloud-helper-search-ipt').attr('_status')=='keep' && $('#cloud-helper-search-ipt').val()!=""){
                    var q=$('#cloud-helper-search-ipt').val();
                    doAsk(q,'1');
                    setInputStatus('#cloud-helper-search-ipt','default');               
                }
                createGaPoint('click','CloudHelper.submitQuestion');
            });
            
            //点击切换面板状态
            $('.cloud-helper-box-change').click(function(){
                if($(this).hasClass('cloud-helper-box-arrow-right'))
                    changePageState(3);
                else
                    changePageState(2);
                createGaPoint('click','CloudHelper.changePanelStatus');
            });
            //机器人清空与导出操作
            $('.cloud-helper-robot-clear').click(function(){
                if (confirm('是否确定要清空问答记录？')){
                    $('.cloud-helper-robot-main').html('<div style="margin-top:0;" class="cloud-helper-robot-answer cloud-helper-robor-answer-default"><div class="cloud-helper-robot-answer-head"><p><span class="cloud-helper-bold">小云解答：</span><span class="cloud-helper-grey">('+getTime()+')</span></p></div><div class="cloud-helper-robot-answer-text">您好，我是智慧的小云，我将继续为您服务！</div></div>');
                }
                createGaPoint('click','CloudHelper.clearChatRecords');
                return false;
            })

            //input逻辑
            setInputStatus('#cloud-helper-search-ipt','default');
            $('#cloud-helper-search-ipt').click(function(){
                if($(this).attr('_status')=='keep')
                    setInputStatus(this,'keep');
                else
                    setInputStatus(this,'ready');
                createGaPoint('click','CloudHelper.searchInput');
            }).blur(function(){
                if($('#cloud-helper-search-ipt').val()==''){
                    setInputStatus(this,'default'); 
                }
            }).focus(function(){
                if($(this).attr('_status')=='keep')
                    setInputStatus(this,'keep');
                else
                    setInputStatus(this,'ready');
            });    
            //键盘操作与问题推荐选择
            var select = createSelect();
            $('#cloud-helper-search-ipt').keyup(function(e){
                var theEvent =  e || window.event;     
                code = theEvent.keyCode ? theEvent.keyCode : (theEvent.which ? theEvent.which : theEvent.charCode)
                var KEY = {
                    UP: 38,
                    DOWN: 40,
                    DEL: 46,
                    TAB: 9,
                    RETURN: 13,
                    ESC: 27,
                    BACKSPACE: 8,
                    LEFT:37,
                    RIGHT:39
                };
                clearTimeout(curDo);
                switch(code) {
                    case KEY.UP:
                        select.next();
                        break;
                    case KEY.DOWN:
                        select.prev();
                        break;
                    case KEY.RETURN:
                        if($('.cloud-helper-suggest-hover').length >= 1){
                            $('.cloud-helper-suggest-hover').click();
                            setInputStatus('#cloud-helper-search-ipt','ready'); 
                        }
                        else{
                            $('#cloud-helper-ask-btn').click();
                            setInputStatus('#cloud-helper-search-ipt','ready');
                            $('#cloud-helper-search-ipt').focus();
                        }
                        break;
                    case KEY.LEFT:
                        break;
                    case KEY.RIGHT:
                        break;
                    default:
                        curDo = setTimeout(function(){
                            var question =$('#cloud-helper-search-ipt').val();
                            if(question!=""){
                                dosuggest(question);
                            }
                            else{
                               $('.cloud-helper-suggest-results').remove(); 
                            }
                        },timeCache);
                        setInputStatus($('#cloud-helper-search-ipt'),'keep');
                        break;
                }
                
            });
            //键盘操作结束
            //box窗体显示与隐藏

            //点击小云帮您toggle
            $(window.CHCONFIG.defaultButtonName).click(function(){
                cloud_helper_body_wrap.fadeToggle(200);
                changePageState(1);
                cloud_helper_body_wrap.css(CHCONFIG.wrapStyle);
                createGaPoint('click','CloudHelper.xiaoyunButton');    
            });
            
            //点击close隐藏
            $('.cloud-helper-box-close').click(function(){
                // cloud_helper_body_wrap.fadeOut(200);
                changePageState(1);
                createGaPoint('click','CloudHelper.closeButton');
            });
            //点击页面任何地方隐藏suggest
            $(document).click(function(){
                $('.cloud-helper-suggest-results').remove();
            });
            //初始客服栏隐藏
            //$('.cloud-helper-box-bot').hide();
            //点击售前售后，备案邮箱链接埋点
            $('#cloud-helper-workOrder').click(function(){
                createGaPoint('click','CloudHelper.workOrderLink');
            });
            $('#cloud-helper-email').click(function(){
                createGaPoint('click','CloudHelper.emailLink');
            });
            var winWidth = 950;
            var winHeight = 500;
            var openleft = parseInt(($(window).width() - winWidth)/2);
            var opentop = parseInt(($(window).height() - winHeight)/2);
            $('#cloud-helper-putonrecord').click(function(e){
                e.preventDefault();
                window.open('http://www.aliyun'+suffix+'/user/livechat/gettaobaotokenUrl?sourceid=1225141339','阿里云','height=' + winHeight + ',width=' + winWidth + ',left=' + openleft + ',top=' + opentop + ',toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');    
                createGaPoint('click','CloudHelper.putOnRecordLink');
            });
            $('#cloud-helper-presaleservice').click(function(e){
                e.preventDefault();
                window.open('http://www.aliyun'+suffix+'/user/livechat/gettaobaotokenUrl?sourceid=1225141032','阿里云','height=' + winHeight + ',width=' + winWidth + ',left=' + openleft + ',top=' + opentop + ',toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');    
                createGaPoint('click','CloudHelper.preSaleServiceLink');
            });

            //导出
            $('#help_chat_expo').click(function(e){
                e.preventDefault();
                exportChatRecords();
                createGaPoint('click','CloudHelper.exportChatRecords');
            });
            //拖动实现
            //首先将绝对定位右侧 改为左侧
            // var left=$(window).width()-cloud_helper_body_wrap.width()-55;
            // cloud_helper_body_wrap.css('left',left+'px');
            /*---拖动---*/
            $(function(){
                var _move=false;//移动标记
                var _x,_y;//鼠标离控件左上角的相对位置
                var moveNode=cloud_helper_body_wrap;
                var mouseDownNode=$('.cloud-helper-box-top');
                var windowWidth=$(window).width();
                var windowHeight=$(window).height();
                var moveNodeHeight=cloud_helper_body_wrap.height();
                var moveNodeWidth=cloud_helper_body_wrap.width();
                mouseDownNode.addClass('cloud-helper-grab');
                mouseDownNode.mousedown(function(e){
                    e.preventDefault();
                    windowWidth=$(window).width();
                    windowHeight=$(window).height();
                    moveNodeHeight=cloud_helper_body_wrap.height();
                    moveNodeWidth=cloud_helper_body_wrap.width();
                    _move=true;
                    _x=e.pageX-(windowWidth-parseInt(moveNode.css("right"))-moveNodeWidth);
                    _y=e.pageY-parseInt(moveNode.css("top"));
                    mouseDownNode.addClass('cloud-helper-grabbing');
                });
                $(document).mousemove(function(e){
                    if(_move){
                        var x=e.pageX-_x;//移动时根据鼠标位置计算控件左上角的绝对位置
                        var y=e.pageY-_y;
                        if(x < 0) x=0;
                        if(x > windowWidth-moveNodeWidth) x=windowWidth-moveNodeWidth;
                        if(y < 0) y=0;
                        if(y > windowHeight-moveNodeHeight) y=windowHeight-moveNodeHeight;
                        moveNode.css({top:y,right:(windowWidth-x-moveNodeWidth)});
                        //控件新位置
                        e.preventDefault();
                    }
                }).mouseup(function(){
                    _move=false;
                    mouseDownNode.removeClass('cloud-helper-grabbing');
              });
            });
        var currentList = null;
        $('.cloud-helper-box-list-tit a').click(function(e){
            createGaPoint('click','CloudHelper.question.'+$(this).text());
            e.preventDefault();
            $('.cloud-helper-box-info').hide(); //隐藏公告栏
            var con = $(this).parent().parent();
            if(currentList){
                if($(currentList)[0] == $(con)[0]){
                    if($('.cloud-helper-box-list-con',currentList).is(":visible")){
                        $('.cloud-helper-box-list-con',currentList).hide();
                    }
                    else{
                        $('.cloud-helper-box-list-con',currentList).show();
                    }
                    $('.cloud-helper-box-panel').css({'height':$('.cloud-helper-box-mid').height()});   
                    return;
                }else{
                    $('.cloud-helper-box-list-con',con).toggle();
                    $('.cloud-helper-box-list-con',currentList).hide();
                }
            }else{
                $('.cloud-helper-box-list-con',con).show();
            }

            if($('.cloud-helper-box-list-con',con).text()==""){
                // $('.cloud-helper-box-list-con',con).show();
            // }else{
                MJRAPI.ask({
                    question:$(this).text(),
                    questionType:'2',
                    indexId:con.attr("id"),
                    callback:function(result){
                                if(result.apiIsSuccess){
                                    var answer = result.answer;
                                    $('.cloud-helper-box-list-con',con).html(answer.content);
                                    // $('<div class="cloud-helper-box-list-con">'+answer.content+'</div>').appendTo(con);
                                    if(answer.childQuestions && answer.childQuestions.length>0){
                                        var str=['<div class="cloud-helper-box-sublist">'];
                                        for(var j=0;j<answer.childQuestions.length;j++){
                                             str.push('<div id="'+answer.childQuestions[j].indexId+'">' +
                                                     '<div class="cloud-helper-box-sublist-tit"><span class="cloud-helper-box-sublist-icon"></span>'+answer.childQuestions[j].question+'</div></div>');
                                        }
                                        str.push('</div>');
                                        $('.cloud-helper-box-list-con').append(str.join(''));
                                        $('.cloud-helper-box-sublist-tit').click(function(){
                                            var item = $(this).parent().parent();
                                            if(item.has('.cloud-helper-box-sublist-con').length>0){
                                                $('.cloud-helper-box-sublist-con',item).toggle();
                                            }else{
                                                MJRAPI.ask({
                                                    question:$(this).parent().text(),
                                                    questionType:'3',
                                                    indexId:item.attr("id"),
                                                    callback:function(result){
                                                        if(result.apiIsSuccess){
                                                            var answer = result.answer;
                                                            $('<div class="cloud-helper-box-sublist-con">'+answer.content+'</div>').appendTo(item);
                                                        }
                                                    }
                                                })
                                            }
                                        });
                                    }
                                    //如果出现#mjrlink这种情况
                                    $('.cloud-helper-box-list-con',con).find('a').each(function(i,el){
                                        var markpos=decodeURIComponent(el.href).indexOf('#mjrlink:');
                                        if(markpos>=0){
                                            var q=decodeURIComponent(el.href).substring(markpos+9);
                                            $(this).click(function(e){
                                                e.preventDefault();
                                                doAsk(q,'1');
                                            });
                                        }
                                    });
                                }
                                $('.cloud-helper-box-list-con',con).find('a').attr('target','_blank');
                            }
                        //重置panel高度
                }); 
            }
            currentList = con;
            $('.cloud-helper-box-panel').css({'height':$('.cloud-helper-box-mid').height()});
        });
        }
    }
    function renderHTML(result,callback){
        var htmlStrTop = [];
        if(result.announcements.length>0){
            htmlStrTop.push('<div class="cloud-helper-box-info">');
            htmlStrTop.push(result.announcements[0].content);
            htmlStrTop.push('</div>');
        }

        htmlStrTop.push('<div class="cloud-helper-box-panel cloud-helper-transition"><div class="cloud-helper-box-mid cloud-helper-transition"><div class="cloud-helper-box-list2">');

        for(var i=0;i<result.recommendedQuestions.length;i++){
             htmlStrTop.push('<div id="'+result.recommendedQuestions[i].indexId+'">' +
                     '<div class="cloud-helper-box-list-tit"><a href="#">'+result.recommendedQuestions[i].question+'</a></div><div class="cloud-helper-box-list-con"></div></div>');
        }
        htmlStrTop.push('</div></div><div class="cloud-helper-robot cloud-helper-transition"><div class="cloud-helper-robot-main"></div></div></div>');
        var htmlStrBot = [
            '<div style="display:none" id="mjr_export_div">',
                '<form method="post" target="mjr_export_iframe" action="'+PAGECONST['exportURL']+'" id="mjr_export_form">',
                    '<textarea cols="1" rows="1" name="htmlSource" id="mjr_export_input"></textarea>',
                    '<input type="text" name="sessionUuid" id="mjr_export_uuid">',
                    '<input type="text" name="digest" id="mjr_export_digest">',
                '</form>',
            '</div>',
            '<div class="cloud-helper-box-sec">',
                '<div class="cloud-helper-box-sec-tit"><p>问问智慧的小云:</p><a href="" class="cloud-helper-robot-clear cloud-helper-robot-opt ">清空</a><a class="cloud-helper-robot-derive cloud-helper-robot-opt " href=""  id="help_chat_expo">导出记录</a></div>',
                '<div class="cloud-helper-box-sec-con">',
                    '<input type="text" class="cloud-helper-search-ipt cloud-helper-search-ipt-default" id="cloud-helper-search-ipt"/> <a class="cloud-helper-box-btn cloud-helper-box-btn-white" id="cloud-helper-ask-btn">提问</a>',
                '</div>',
            '</div>',
            '<div class="cloud-helper-box-sec20"><a id="cloud-helper-control" href=""><span class="cloud-helper-box-icon cloud-helper-box-icon-down"></span><span class="cloud-helper-box-bot-label2 user-select-none" >在线客服</span></a></div>',
            '<div class="cloud-helper-box-bot">',
                '<table><tbody>',
                    '<tr>',
                        '<td><span class="cloud-helper-box-bot-label">售前:</span><a  href=""  id="cloud-helper-presaleservice"><span class="cloud-helper-box-icon cloud-helper-box-icon1" ></span><span class="cloud-helper-box-bot-label2">在线</span></a><span class="cloud-helper-box-bot-tel" id="cloud-helper-presaleservice-tel" >'+CHCONFIG.presaleserviceTel+'</span></td>',
                        '<td><span class="cloud-helper-box-bot-label">备案:</span><a  href="" id="cloud-helper-putonrecord"><span class="cloud-helper-box-icon cloud-helper-box-icon1"></span><span class="cloud-helper-box-bot-label2">在线</span></a><span class="cloud-helper-box-bot-tel" id = "cloud-helper-putonrecord-tel" >'+CHCONFIG.putonrecordTel+'</span></td>',
                    '</tr>',
                    '<tr>',
                        '<td><span class="cloud-helper-box-bot-label">售后:</span><a  href="http://workorder.aliyun.com/faq" target="_blank" id="cloud-helper-workOrder"><span class="cloud-helper-box-icon cloud-helper-box-icon3"></span><span class="cloud-helper-box-bot-label2">工单</span></a><span class="cloud-helper-box-bot-tel" id="cloud-helper-workOrderTel">'+CHCONFIG.workOrderTel+'</span></td>',
                        '<td><span class="cloud-helper-box-bot-label">邮箱:</span><a class="cloud-helper-box-bot-label4" href="http://help.aliyun.com/bug" target="_blank" id="cloud-helper-email">云邮箱在线反馈</a></td>',
                    '</tr>',
                    '</tbody>',
                '</table>',
            '</div>'
        ];
        $('.cloud-helper-loading-body').remove();
        var node = $(htmlStrTop.join('')+htmlStrBot.join(''));
        node = callback(node,cururl,pathurl);
        $('.cloud-helper-box').append(node);
        $('.cloud-helper-robot-opt').hide();
    }
    function judgeManualServStatus(){
        //判断客服状态
        $.ajax({
            url: "http://www.aliyun"+suffix+"/user/livechat/gettaobaotools",
            dataType: "script",
            success: function(){
                //window.__ay_taobao_tools.source = ({"1225141339": true,"1225141032": false,"1225141032": true });
                //售前
                if(!window.__ay_taobao_tools.source["1225141032"]){
                    var cloud_helper_presaleservice = $('#cloud-helper-presaleservice');
                    cloud_helper_presaleservice.addClass('cloud-helper-box-gy');
                    cloud_helper_presaleservice.find('.cloud-helper-box-bot-label2').text("离线").addClass('cloud-helper-box-gy');;
                    cloud_helper_presaleservice.find('.cloud-helper-box-icon').removeClass('cloud-helper-box-icon1').addClass('cloud-helper-box-icon2');
                    $('#cloud-helper-presaleservice-tel').addClass('cloud-helper-box-gy');
                }
                //备案
                if(!window.__ay_taobao_tools.source["1225141339"]){
                    var cloud_helper_putonrecord = $('#cloud-helper-putonrecord');
                    cloud_helper_putonrecord.addClass('cloud-helper-box-gy');
                    cloud_helper_putonrecord.find('.cloud-helper-box-bot-label2').text("离线").addClass('cloud-helper-box-gy');
                    cloud_helper_putonrecord.find('.cloud-helper-box-icon').removeClass('cloud-helper-box-icon1').addClass('cloud-helper-box-icon2');
                }
            },
            beforeSend: function(){
             // Handle the beforeSend event
            },
            complete: function(){
             // Handle the complete event
            }
        });
    }
    function exportChatRecords(){
        if ($("#mjr_export_iframe").size() == 0) {
             $("#mjr_export_div")
                  .append("<iframe name=\"mjr_export_iframe\" src=\"about:blank\" style=\"width:0;height:0;border:0\"></iframe>");
         }
         //需要注意的是，图片要用绝对地址
         var insertStyle=["<style>",
            ".cloud-helper-robot{margin-left:15px;margin-right: 15px;display:none;}",
            ".cloud-helper-robot-main{margin:20px auto;}",
            ".cloud-helper-robot a{color:#0066cc;}",
            ".cloud-helper-robot a:visited{color:#0066cc;}",
            ".cloud-helper-robot-main{height: 500px;width:600px;background: #fff;border: 1px solid #bbb;overflow-y: auto;overflow-x:hidden ;padding:15px;}",
            ".cloud-helper-robot-question{height: 35px76;background: #f0f9fe;border: 1px solid #c8def2;border-radius: 3px;padding:10px;}",
            ".cloud-helper-bold{font-weight:bold;}",
            ".cloud-helper-blue{color: #f48c12;}",
            ".cloud-helper-grey{color:#999;}",
            ".cloud-helper-robot-question-head{}",
            ".cloud-helper-robot-question-text{font-size: 14px;}",
            ".cloud-helper-robot-answer{margin-top:15px;}",
            ".cloud-helper-robot-answer-head{padding-left: 35px;background: url(img/xiaoyun-small.jpg) no-repeat 0 50%;height: 30px;line-height: 30px;}",
            ".cloud-helper-robot-answer-text{margin-top:10px;margin-bottom:10px;white-space:normal;word-wrap: break-word;line-height: 1.7em;color: #333;}",
            ".cloud-helper-robot-answer-related{padding-bottom:20px;}",
            ".cloud-helper-robot-answer-related ul{margin-top:5px;}",
            ".cloud-helper-robot-answer-related ul li{line-height: 2em;}",
            ".cloud-helper-robot-answer-sublist{list-style-type :square ;color:red;}",
            "</style>"].join();
         $("#mjr_export_input").val(insertStyle+$('.cloud-helper-robot').html());
         $("#mjr_export_uuid").val(MJRAPI._const.sessionUuid);
         $("#mjr_export_digest").val(PAGECONST['digest']);
         $("#mjr_export_form").submit();
    }
    function askCallback(param){
        if(!param.apiIsSuccess){
        }else{
            if(param.displayType!= undefined){
                //问题节点
                var questionNode = $('<div class="cloud-helper-robot-question"><p class="cloud-helper-robot-question-head"><span class="cloud-helper-bold">'+MJRAPI._const["userName"]+'：</span><span class="cloud-helper-grey">('+getTime()+')</span></p></div>');
                //问题节点文本
                var questionNodeText=$('<p class="cloud-helper-robot-question-text"><span class="cloud-helper-blue"></span></p>');
                //答案节点
                var answerNode = $('<div class="cloud-helper-robot-answer"><div class="cloud-helper-robot-answer-head"><p><span class="cloud-helper-bold">小云解答：</span><span class="cloud-helper-grey">('+getTime()+')</span></p></div></div>');
                //答案节点文本
                var answerNodeText = $('<div class="cloud-helper-robot-answer-text"></div>');
                //默认选择输入框的内容作为问题
                var inputVal = $('#cloud-helper-search-ipt').val();
                //返回问题类型为一般问题,displayType='1'
                
                questionNodeText.find('.cloud-helper-blue').text(questionName);

                if(param.displayType=="1"){
                    answerNodeText.html(param.answer.content).appendTo(answerNode);
                    if(param.answer.similarQuestions.length >= 1){
                        var tmpHtml=$('<div class="cloud-helper-robot-answer-related"><p class="cloud-helper-bold">相关问题：</p></div>');
                        var list= $('<ul></ul>');
                        var li= null;
                        $.each(param.answer.similarQuestions,function(i,el){
                            li=$('<li></li>');
                            $('<a href="">'+el+'</a>').appendTo(li).click(function(e){
                                e.preventDefault();
                                questionTitle=el;
                                doAsk(el,'1');
                            });
                            li.appendTo(list);
                        });
                        list.appendTo(tmpHtml);
                        tmpHtml.appendTo(answerNode);
                    }
                }
                //返回问题类型为C类问题,无匹配结果无相似问题,仅有推荐问题结果,displayType='2'
                if(param.displayType=="2"){
                    answerNodeText.append('<p>亲，我不太明白您的情况，您要问的是？</p>').appendTo(answerNode);
                }
                //返回类型为提纲式问题，displayType='3'
                if(param.displayType=="3"){
                    if(param.answer.content!=''){
                        answerNodeText.append(param.answer.content);
                    }
                    if(param.answer.childQuestions.length >= 1){
                        var list= $('<ul class="cloud-helper-robot-answer-sublist"></ul>');
                        $.each(param.answer.childQuestions,function(i,el){
                            var li=$('<li></li>');
                            $('<a href="">'+el.alias+'</a>').appendTo(li).click(function(e){
                                e.preventDefault();
                                doAsk(el.alias,'1');
                            });
                            li.appendTo(list);
                        });
                        answerNodeText.append(list).appendTo(answerNode);
                    }
                }
                //返回类型为相似问题，dispalyType='4'
                if(param.displayType=="4"){
                    answerNodeText.append('<p class="cloud-helper-display4">亲，我不太明白您的情况，您要问的是？</p>');
                    $.each(param.answer.similarQuestions,function(i,el){
                        var p=$('<p></p>');
                        $('<a href="">'+el+'</a>').click(function(e){
                            e.preventDefault();
                            doAsk(el,'1');
                        }).appendTo(p);
                        p.appendTo(answerNodeText);
                    });
                    answerNodeText.append('<p class="cloud-helper-display4">对这些答案都不满意？可在下方“在线客服”中寻求支持</p>').appendTo(answerNode);;
                }
                //这里是自己加上的，感觉答案链接需要新窗口打开
                answerNodeText.find('a').attr('target','_blank');
                //如果a标签中href有#mjrlink:,新提出个问题
                answerNodeText.find('a').each(function(i,el){
                    var markpos=decodeURIComponent(el.href).indexOf('#mjrlink:');
                    if(markpos>=0){
                        var q=decodeURIComponent(el.href).substring(markpos+9);
                        $(this).click(function(e){
                            e.preventDefault();
                            doAsk(q,'1');
                        });
                    }
                });
                questionNode.append(questionNodeText);
                $('.cloud-helper-robot-main').append(questionNode).append(answerNode);;
                
                //获取目前的高度，设置scrolltop
                var heightTotal=0;
                $('.cloud-helper-robot-question').each(function(i,e){
                    heightTotal+=$(e).height()+22;
                });
                $('.cloud-helper-robot-answer').each(function(i,e){
                    heightTotal+=$(e).height()+30;
                });
                heightTotal-=($('.cloud-helper-robot-question').last().height()+22);
                heightTotal-=($('.cloud-helper-robot-answer').last().height()+30);
                if($('.cloud-helper-robor-answer-default').length>=1)
                    heightTotal-=15;
                if(isRobotPanel){
                    $('.cloud-helper-robot-main').animate({'scrollTop':heightTotal},300); 
                }else{
                    setTimeout(function(){
                        $('.cloud-helper-robot-main').animate({'scrollTop':heightTotal},300); 
                    },CHANGE_CACHE);
                }
            }
        }
    }
    function doAsk(question,questionType){
        if(!isRobotPanel){
            changePageState(3);
        }
        MJRAPI.ask({question:question,questionType:questionType,callback:askCallback});
        questionName=question;
    }
    function getTime() {
        var d=new Date();
        return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
    }
    //设置窗体位置
    //问题推荐
    function suggestCallback(param){
        var hoverClass='cloud-helper-suggest-hover';
        var hover='.'+hoverClass;
        if(!param.apiIsSuccess){
        }
        if(param.apiIsSuccess && param.questions.length>=1){
            $('.cloud-helper-suggest-results').remove();
            var element=$('<div class="cloud-helper-suggest-results"></div>');
            var list=$('<ul></ul>');
            $.each(param.questions,function(i,question){
                $('<li>'+question+'</li>').appendTo(list).click(function(){
                    //选择某个suggest的问题之后进入一般问题提问流程
                    doAsk(question,'1');
             
                    $('.cloud-helper-suggest-results').remove();
                    setInputStatus('#cloud-helper-search-ipt','default'); 
                })
                .mouseover(function(){
                    $('.cloud-helper-suggest-hover').removeClass(hoverClass);
                    $(this).addClass(hoverClass);
                })
                .mouseout(function(){
                    if($(this).hasClass(hoverClass) ){
                        $(this).removeClass(hoverClass);
                    }
                });
            });
            //设置最后一个问题默认选中
            list.appendTo(element);
            element.appendTo($('.cloud-helper-box-sec-con'));
        }
    }
    function dosuggest(q){
        var ret = MJRAPI.suggest({question:q,callback:suggestCallback});
    }
    //panel状态切换
    function changePageState(state){
        //state=1 首页，且无robot
        //state=2 首页，有robot可以返回robot
        //state=3 robot 页面
        //state=4 robot 清空以后的页面
        var cloud_helper_box_panel = $('.cloud-helper-box-panel');
        var cloud_helper_box_mid = $('.cloud-helper-box-mid');
        var cloud_helper_robot = $('.cloud-helper-robot');
        var cloud_helper_box_change = $('.cloud-helper-box-change');
        var cloud_helper_robot_opt = $('.cloud-helper-robot-opt');
        var cloud_helper_box_info = $('.cloud-helper-box-info');
        var cloud_helper_box_top_text = $('.cloud-helper-box-top-text');
        
        switch(state)
        {
            case 1:
                cloud_helper_box_panel.removeClass('cloud-helper-transition');
                cloud_helper_box_mid.removeClass('cloud-helper-transition');
                cloud_helper_robot.removeClass('cloud-helper-transition');
                if(!cloud_helper_box_change.hasClass('cloud-helper-box-arrow-right')){
                    cloud_helper_box_change.addClass('cloud-helper-box-arrow-right');
                }
                cloud_helper_robot_opt.hide();
                if(cloud_helper_box_info.text()!=""){
                    cloud_helper_box_info.show();
                }
                cloud_helper_box_mid.css({'left':'0'});
                cloud_helper_robot.css({'left':'500px'});
                $('.cloud-helper-box-list-con').hide();
                cloud_helper_box_panel.css({'height':cloud_helper_box_mid.height()});
                isRobotPanel = false;
                cloud_helper_box_panel.addClass('cloud-helper-transition');
                cloud_helper_box_mid.addClass('cloud-helper-transition');
                cloud_helper_robot.addClass('cloud-helper-transition');
                break;
            case 2:
                //状态切换按钮变为右指
                cloud_helper_box_change.addClass('cloud-helper-box-arrow-right').show();
                //机器人操作节点隐藏
                cloud_helper_robot_opt.hide();
                if(isRobotPanel){
                    cloud_helper_box_top_text.text("您可能遇到的问题？");
                    cloud_helper_box_info.hide();
                    cloud_helper_box_panel.css({'height':cloud_helper_box_mid.height()});
                    cloud_helper_box_mid.css({'left':'0'});
                    cloud_helper_robot.css({'left':'500px'});
                }
                isRobotPanel = false;
                break;
            case 3:
                //状态切换按钮变为左指
                cloud_helper_box_change.removeClass('cloud-helper-box-arrow-right').show();
                //机器人操作节点可见
                cloud_helper_robot_opt.show();
            
                cloud_helper_box_top_text.text("小云解答：");
                cloud_helper_box_info.hide();
                cloud_helper_box_panel.css({'height':'272px'});
                cloud_helper_box_mid.css({'left':'-500px'});
                cloud_helper_robot.css({'left':'0px'});
                isRobotPanel = true;
                break;
        }
    }
    //ipt状态切换
    function setInputStatus(node,status){
        switch(status){
            case 'default':
                if(!$(node).hasClass('cloud-helper-search-ipt-default')){
                    $(node).removeClass().addClass('cloud-helper-search-ipt cloud-helper-search-ipt-default');
                }
                $(node).attr('value','请用一句话简要描述您的问题');
                $(node).attr('_status','default');

                break;
            case 'ready':
                if(!$(node).hasClass('cloud-helper-search-ipt-ready')){
                    $(node).removeClass().addClass('cloud-helper-search-ipt cloud-helper-search-ipt-ready');
                }
                $(node).attr('value','');
                $(node).attr('_status','ready');
                break;
            case 'keep':
                if(!$(node).hasClass('cloud-helper-search-ipt-keep')){
                    $(node).removeClass().addClass('cloud-helper-search-ipt cloud-helper-search-ipt-keep');
                }
                $(node).attr('_status','keep');
                break;
        }
    }
    //suggest选择操作
    function createSelect(){
        var CLASSES = {
            ACTIVE: "cloud-helper-suggest-hover"
        };
        function moveSelect(step) {
            // mouseoverIsLock =true;
            var listItems=$('.cloud-helper-suggest-results li');
            //当前hover的步数
            var active;
            active =  $('.'+CLASSES.ACTIVE).index();
            listItems.eq(active).removeClass(CLASSES.ACTIVE);
            active += step;
            if (active < 0) {
                active = listItems.size() - 1;
            } else if (active >= listItems.size()) {
                active = 0;
            }
            var activeItem = listItems.eq(active).addClass(CLASSES.ACTIVE);
        };
        return {
            next:function(){
                moveSelect(-1);
            },
            prev:function(){
                moveSelect(1);
            }

        };
    };
})();
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-40435133-1', 'aliyun.com');
ga('send', 'pageview');

/* RMKT */
document.write('<img height="0"  width="0" style="border-style:none;position: absolute;left:-9999px" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/977293844/?value=0&amp;label=BPPnCOT7oQUQlKSB0gM&amp;guid=ON&amp;script=0"/>');

/* click */
(function(){
    function doMonitorForDataGa(target){
        var target = target;
        var _ga = target.getAttribute("data-ga");
        if (typeof (ga) != "undefined" && _ga != '') {
            if(_ga.indexOf("_gaq.push") > -1){
                eval(_ga); //compatible previous version.
            }else{
                var _gaArr = _ga.split('.');
                if(_gaArr.length < 2) return;
                var category ='Click';
                var action ='';
                var label = '';
                if(_gaArr.length == 2){
                    category ='Click';
                    action  =_gaArr[0];
                    label  = _gaArr[1];
                }else{
                    category =_gaArr.shift();
                    action =_gaArr.shift();
                    label = _gaArr.join('.');
                }
				ga('send', 'event', category, action, label);
            }
        }
    }
    var _elemArr = document.getElementsByTagName('A'),
        _elemLen = _elemArr.length;

    function addEvent( obj, type, fn ) {
        if ( obj.attachEvent ) {
            obj['e'+type+fn] = fn;
            obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
            obj.attachEvent( 'on'+type, obj[type+fn] );
        } else
            obj.addEventListener( type, fn, false );
    }

    var _body = document.body || document.documentElement;
    addEvent( _body, "click",function(event){
        var event = event? event: window.event ;
        var target = event.srcElement ? event.srcElement:event.target;

        if(target.getAttribute('data-ga')){
            doMonitorForDataGa(target);
        }else if(target.nodeName == "IMG" && target.parentNode.getAttribute('data-ga')){
            doMonitorForDataGa(target.parentNode);
        }
    });

})();﻿

/* 黄金令箭 */
(function(){
    var addEvent = function( obj, type, fn ) {
        if ( obj.attachEvent ) {
            obj['e'+type+fn] = fn;
            obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
            obj.attachEvent( 'on'+type, obj[type+fn] );
        } else
        obj.addEventListener( type, fn, false );
    };

    addEvent(document.body,'click',function(e) {
        e =  e || window.event;
        var target = e.target || e.srcElement;
        var targetData = target.getAttribute("data-lingjian");
        targetData = targetData || target.parentNode.getAttribute("data-lingjian");
        if (targetData) {
            var lingjianImg = window.lingjianImg = new Image();
            lingjianImg.src = "http://gm.mmstat.com/" + targetData + "?cache=" + new Date().getTime();
        }
    });
})();
