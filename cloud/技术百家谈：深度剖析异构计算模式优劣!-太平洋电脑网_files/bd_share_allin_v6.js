 /**
  * ���ڰٶȷ���2.0������΢�Ź���
  * ��������ͨ����ҳ����
  * @tit ������⣬��Ϊ�գ�Ϊ�յ�����»�ȡdocument.title��
  * @pic ����ͼƬ��ַ����Ϊ�գ�Ϊ���򲻷���ͼƬ��
  * @content ������������Ϊ�գ�
  * @shareType ���빤�����ͣ�����Ϊ�գ�ֵΪ"tools"��ֻ��ʾ��������"slide"��ֻ��ʾ�������ڣ�"slideTools"���������͸������ڶ���ʾ��
  * @pos ���븡������λ�ã���Ϊ�գ�Ĭ��Ϊ"right"����shareTypeΪ"slide"��"slideTools"ʱ����Ч��
  * ��������
  * <div class="bdshare_warp" id="bdshare_warp" tit="���Ա���" pic="" content="" shareType="tools">
  * <div class="bdshare_warp_v2" id="bdshare_warp_v2" tit="���Ա���" pic="" content="" shareType="tools">
  *     <script src="http://js.3conline.com/ue/share/online/bd_share_allin_v6.js"></script>
  * </div>
  * ��������� ��������
  * <div class="bd-share-warp bdsharebuttonbox"></div>
  */
 
(function(){

    function getElementsByClass(searchClass,node,tag) {
        var classElements = new Array();
        if ( node == null )
                node = document;
        if ( tag == null )
                tag = '*';
        var els = node.getElementsByTagName(tag);
        var elsLen = els.length;
        var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
        for (i = 0, j = 0; i < elsLen; i++) {
                if ( pattern.test(els[i].className) ) {
                        classElements[j] = els[i];
                        j++;
                }
        }
        return classElements;
    }

    if (!getElementsByClass('pc-share-wrap')) {
        return;
    }

    window.BDSharePlus = {
        tag : '.bd-share-warp',
        shareType : 'tools',
        pos : 'right',
        color : '0',
        init : function(){
            window._bd_share_main = null;

            if(window.extendBDshare){
                for(var key in extendBDshare){
                    BDSharePlus[key] = extendBDshare[key];
                }
            }

            var tag = this.tag;

            if(tag.charAt(0) == '#'){
                tag = this.tag.replace('#',''),
                elems = document.getElementById(tag);
            }else if(tag.charAt(0) == '.'){
                tag = this.tag.replace('.',''),
                elems = getElementsByClass(tag);
            }

            this.elems = elems;

            if(!elems || elems.length == 0){
                return
            }

            this.setConfig();

        },
        setConfig : function () {
            var elems = this.elems,
                html = '<i class="bd-txt">������</i><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="����΢��"></a><a href="#" class="bds_sqq" data-cmd="sqq" style="background-position:-162px 0" title="����QQ����"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="��������΢��"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="����QQ�ռ�"></a><a href="#" class="bds_tqq" data-cmd="tqq" title="������Ѷ΢��"></a>';

            if(this.shareType == 'slide' || this.shareType == 'slideTools'){
                window._bd_share_config["slide"] = [{
                    bdImg: this.color,
                    bdPos: this.pos,
                    bdTop: 100
                }];

                if(this.shareType == 'slide'){
                    return
                }
            }



            if(elems.length != 0){
                var share = []
                    o = {},
                    tag = '';

                for (var i = 0 , len = elems.length; i < len; i++) {
                    elem = elems[i];
                    tag = 'share_' + i;
                    elem.setAttribute('data-tag', tag);
                    elem.innerHTML = html;
                };
            }

        }
    };
    //����ҳ�����ͼƬ
    var sharePis = [];
    

    (function(){
       
        var target = getElementsByClass('content',null,'div')[0];
        if(!target) return;
        var imgs = target.getElementsByTagName('img'),
            n = 0,
            len = imgs.length;
        for(;n<len;n++){
            var src = imgs[n].getAttribute('#src') || imgs[n].getAttribute('src');
            sharePis.push(src);
        }
    })();
    if(sharePis.length==0){
        sharePis = '';
    }else{
        sharePis = sharePis.slice(0,5);
        sharePis = sharePis.join('||');
    }

    var bd_warp1 = document.getElementById('bdshare_warp'),
        titleReg = /([^_]*)_?.*/,
        tit = bd_warp1.getAttribute('tit') || document.title.replace(titleReg, "$1"),
        pos = bd_warp1.getAttribute('pos') || 'right',
        content = bd_warp1.getAttribute('content') || '',
        sharePis = bd_warp1.getAttribute('pic') || sharePis;

    window._bd_share_config = {
        "common": {
            "bdSnsKey": {
                "tsina": "2953917903"
            },
            "bdText": tit + '�������� @̫ƽ���������',
            "bdDesc": content,
            "bdMini": "1",
            "bdMiniList": ["mshare", "qzone", "tsina", "weixin", "renren", "tqq"],
            "bdPic": sharePis,
            "bdStyle": "0",
            "bdSize": "16"
        },
        "share": {
            "bdSize": 16,
            "bdUrl":window.location.href + "?from=bdshare"
        }
    };

    

    var style = document.createElement('style'),
        frag = document.createDocumentFragment(),
        box = document.createElement('div'),
        cssStr = '.pc-share .bdshare-button-style0-16{height:26px;padding:6px;zoom:1}.pc-share .bdshare-button-style0-16 a{width:26px;height:26px;padding:0;margin:0 2px 0 0;float:left;background-image:url(//www1.pconline.com.cn/2014/ue/share/images/art_tools_v3.png)!important}.pc-share .bdshare-button-style0-16 a.bds_more{display:none}.pc-share .bdshare-button-style0-16 a.bds_weixin{background-position:0 0!important}.pc-share .bdshare-button-style0-16 a.bds_sqq{background-position:-162px 0!important}.pc-share .bdshare-button-style0-16 a.bds_qzone{background-position:-27px 0!important}.pc-share .bdshare-button-style0-16 a.bds_tsina{background-position:-54px 0!important}.pc-share .bdshare-button-style0-16 a.bds_tqq{background-position:-81px 0!important}';

    box.className = 'bdsharebuttonbox';
    box.innerHTML = '<em class="art-triangle"></em><div></div><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="����΢��"></a><a href="#" class="bds_sqq" data-cmd="sqq" title="����QQ"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="��������΢��"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="����QQ�ռ�"></a><a href="#" class="bds_tqq" data-cmd="tqq" title="������Ѷ΢��"></a>';

    style.setAttribute("type", "text/css");
    if(style.styleSheet){// IE
        style.styleSheet.cssText = cssStr;
    } else {// w3c
        var cssText = document.createTextNode(cssStr);
        style.appendChild(cssText);
    }

    frag.appendChild(style);
    frag.appendChild(box);

    switch (bd_warp1.getAttribute('shareType')) {
    case 'tools':
     //bd_warp2.appendChild(frag);
        bd_warp1.appendChild(frag);

        break;

    case 'slide':
        window._bd_share_config["slide"] = [{
            bdImg: 0,
            bdPos: pos,
            bdTop: 100
        }];
        break;

    case 'slideTools':
        bd_warp1.appendChild(frag);
        window._bd_share_config["slide"] = [{
            bdImg: 0,
            bdPos: pos,
            bdTop: 100
        }];
        break;
    }

if(document.getElementById('bdshare_warp_v2')){
        
    var bd_warp2 = document.getElementById('bdshare_warp_v2');
    var style2 = document.createElement('style'),
        frag2 = document.createDocumentFragment(),
        box2 = document.createElement('div'),
        cssStr2 = '.art-info .pc-share-wrap{display:none}.art-info .pc-share .bdshare-button-style0-16{width:80px;height:auto;border:1px solid #b9b9b9;background:#fff}.art-info .pc-share .bdshare-button-style0-16 a{height:16px;width:50px;margin:0;float:none;background-image:none!important;display:block;line-height:16px;margin:8px 0 5px 4px;position:relative;padding-left:22px;text-align:left}.art-info .pc-share .bdshare-button-style0-16 a.bds_more{display:none}.art-info .bdshare-button-style0-16 a em{width:16px;height:16px;padding:0;margin:0 2px 0 0;float:left;background-image:url(//www1.pconline.com.cn/2014/ue/share/images/art_tools_v3.png)!important;position:absolute;left:0;top:0}.art-info .bdshare-button-style0-16 .bds_weixin em,.art-info .bdshare-button-style0-16 .bds_weixin:hover em{background-position:0 -46px!important}.art-info .bdshare-button-style0-16 .bds_sqq em,.art-info .bdshare-button-style0-16 .bds_sqq:hover em{background-position:-110px -46px!important}.art-info .bdshare-button-style0-16 .bds_tsina em,.art-info .bdshare-button-style0-16 .bds_tsina:hover em{background-position:-36px -46px!important}.art-info .bdshare-button-style0-16 .bds_qzone em,.art-info .bdshare-button-style0-16 .bds_qzone:hover em{background-position:-18px -46px!important}.art-info .bdshare-button-style0-16 .bds_tqq em,.art-info .bdshare-button-style0-16 .bds_tqq:hover em{background-position:-54px -46px!important}.art-info .tool-item .art-triangle{background-image:url(//www1.pconline.com.cn/2014/ue/share/images/art_tools_v3.png);width:9px;height:6px;left:35px;top:-5px;background-position:-48px -77px}';

    box2.className = 'bdsharebuttonbox';
    box2.innerHTML = '<em class="art-triangle"></em><div></div><a href="#" class="bds_more" data-cmd="more"></a><div></div><a href="#" class="bds_weixin" data-cmd="weixin" title="����΢��"><em></em>΢�ź���</a><a href="#" class="bds_sqq" data-cmd="sqq" title="����QQ"><em></em>QQ����</a><a href="#" class="bds_tsina" data-cmd="tsina" title="��������΢��"><em></em>����΢��</a><a href="#" class="bds_qzone" data-cmd="qzone" title="����QQ�ռ�"><em></em>QQ�ռ�</a><a href="#" class="bds_tqq" data-cmd="tqq" title="������Ѷ΢��"><em></em>��Ѷ΢��</a>';
        
    style2.setAttribute("type", "text/css");
    if(style2.styleSheet){// IE
        style2.styleSheet.cssText = cssStr2;
    } else {// w3c
        var cssText2 = document.createTextNode(cssStr2);
        style2.appendChild(cssText2);
    }

    frag2.appendChild(style2);
    frag2.appendChild(box2);

        switch (bd_warp2.getAttribute('shareType')) {
        case 'tools':
         //bd_warp2.appendChild(frag);
            bd_warp2.appendChild(frag2);

            break;

        case 'slide':
            window._bd_share_config["slide"] = [{
                bdImg: 0,
                bdPos: pos,
                bdTop: 100
            }];
            break;

        case 'slideTools':
            bd_warp2.appendChild(frag2);
            window._bd_share_config["slide"] = [{
                bdImg: 0,
                bdPos: pos,
                bdTop: 100
            }];
            break;
        }

    }
    BDSharePlus.init();
    

    with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = location.protocol + '//js.3conline.com/ue/share/pc_static/api/js/share.js?v=86835285.js?cdnversion=' + ~ ( - new Date() / 36e5)];
})()