/**
 * Created by redstart on 2017/11/8.
 */
var beianhaoItem = document.getElementById('elecfans-beianhao');
beianhaoItem.setAttribute('href', 'http://www.miibeian.gov.cn/');
beianhaoItem.setAttribute('target', '_blank');

var gatherMain = document.getElementById('gatherMain');
var footMainText = gatherMain.innerHTML;

var appendFooterMsg = '<ul class="ga-lf wid152">' +
    '      <b>华强聚丰</b>' +
    '      <li><a target="_blank" href="http://www.elecfans.com/about/" rel="nofollow">关于我们</a></li>' +
    '      <li><a target="_blank" href="http://www.hqchip.com/help/factsheet.html" rel="nofollow">投资关系</a></li>' +
    '      <li><a target="_blank" href="http://www.hqchip.com/help/news/lists.html" rel="nofollow">新闻动态</a></li>' +
    '      <li><a target="_blank" >媒体报道</a></li>' +
    '      <li><a target="_blank" href="http://www.elecfans.com/about/zhaopin.html" rel="nofollow">加入我们</a></li>' +
    '      <li><a target="_blank" href="http://www.elecfans.com/about/contact.html" rel="nofollow">联系我们</a></li>' +
    '      <b class="mt15">社交网络</b>' +
    '      <li><a target="_blank" href="http://weibo.com/elecfanscom" rel="nofollow">微博</a></li>' +
    '      <b class="mt15">移动</b>' +
    '      <li><a target="_blank" href="http://www.elecfans.com/app/">电子发烧友 APP</a></li>' +
    '      <li><a target="_blank" href="http://m.elecfans.com/">电子发烧友 WAP</a></li>' +
    '  </ul>' +
    '  <ul class="ga-lf wid152">' +
    '      <b>联系我们</b>' +
    '      <p>大中华区广告合作</p>' +
    '      <p>Ben Tseng</p>' +
    '      <p><a href="mailto:hezuo@elecfans.com">hezuo@elecfans.com</a></p>' +
    '      <p>Mike Zhang</p>' +
    '      <p class="mb16"><a href="mailto:mikezhang@elecfans.com">mikezhang@elecfans.com</a></p>' +
    '      <p>内容合作</p>' +
    '      <p>陆楠</p>' +
    '      <p class="mb16"><a href="mailto:lunan@elecfans.com">lunan@elecfans.com</a></p>' +
    '      <p>内容合作（海外）</p>' +
    '      <p>Brandon Smith</p>' +
    '      <p><a href="mailto:brandon.smith@elecfans.com">brandon.smith@elecfans.com</a></p>' +
    '      <div class="ga-attend">' +
    '      <p>关注我们的微信</p>' +
    '      <img src="http://www.elecfans.com/skin-2012/images/u267.png">' +
    '      </div>' +
    '  </ul>' +
    '  <ul class="ga-lf absolute-ga">' +
    '     <b> </b>' +
    '      <p>供应链服务 PCB/IC/PCBA</p>' +
    '      <p>江良华</p>' +
    '      <p class="mb16"><a href="mailto:lanhu@hqchip.com">lanhu@hqchip.com</a></p>' +
    '      <p class="tzhz-mt">投资合作</p>' +
    '      <p>曾海银</p>' +
    '      <p><a href="mailto:zenghaiyin@elecfans.com">zenghaiyin@elecfans.com</a></p>' +
    '      <div class="ga-attend">' +
    '          <p>下载发烧友APP</p>' +
    '          <img src="http://t.elecfans.com/Public/pc/live/img/u40.png">' +
    '      </div>' +
    '  </ul>';
footMainText += appendFooterMsg;
gatherMain.innerHTML = footMainText;
