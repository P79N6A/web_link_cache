document.write('Copyright&copy;2005-2018 <a href="http://www.51cto.com">51CTO.COM</a> 版权所有 未经许可 请勿转载');
var Nurl=location.href;
var _hmt = _hmt || [];
if ($('.login-suc').length > 0) {
	var a = $('.login-suc')[0].innerHTML;
	var patten = /home.51cto.com\/space\?uid=(\d+)/;
	var uid = a.match(patten)[1];
} else {
	var uid = 0;
}
var _educto = _educto || [];
_educto.push(['_setUserId',uid]);
(function() {
	var hm = document.createElement("script");
	if(Nurl.indexOf('news.')>(-1)){
		hm.src = "//hm.baidu.com/hm.js?14b773fd8478d26c7a7ec38801c60760";
		document.write(decodeURI("%3Cscript src='https://tongji.51cto.com/cto.js/4f40caf2630f98041adb33eadac93be4' type='text/javascript'%3E%3C/script%3E"));
	}else if(Nurl.indexOf('network.')>(-1)){
		hm.src = "//hm.baidu.com/hm.js?e9fe16c899bc0bc1aec8b30576bb2bd2";
		document.write(decodeURI("%3Cscript src='https://tongji.51cto.com/cto.js/e595a1a222a6348436fcd8ff6d5e2e88' type='text/javascript'%3E%3C/script%3E"));
	}else if(Nurl.indexOf('netsecurity.')>(-1)){
		hm.src = "//hm.baidu.com/hm.js?3d28e60b6d163e1c88205c8fa1170e65";
		document.write(decodeURI("%3Cscript src='https://tongji.51cto.com/cto.js/1a201ded9deeac0af802dcc93cae2da8' type='text/javascript'%3E%3C/script%3E"));
	}else if(Nurl.indexOf('developer.')>(-1)){
		hm.src = "//hm.baidu.com/hm.js?d55da66c9f787db48875408c202cde11";
		document.write(decodeURI("%3Cscript src='https://tongji.51cto.com/cto.js/bc20b099e054d5e648120c44d7a94173' type='text/javascript'%3E%3C/script%3E"));
	}else if(Nurl.indexOf('database.')>(-1)){
		hm.src = "//hm.baidu.com/hm.js?dde02ea6cdc603917ab28742ac5a66f0";
		document.write(decodeURI("%3Cscript src='https://tongji.51cto.com/cto.js/c02d5fb2b1ca7d16cc935254722ee2d4' type='text/javascript'%3E%3C/script%3E"));
	}else if(Nurl.indexOf('server.')>(-1)){
		hm.src = "//hm.baidu.com/hm.js?8257fd828c8dd96eaac940c075e5b58f";
		document.write(decodeURI("%3Cscript src='https://tongji.51cto.com/cto.js/14e29cb62026251c54cfc4fabca56cf4' type='text/javascript'%3E%3C/script%3E"));
	}else if(Nurl.indexOf('os.')>(-1)){
		hm.src = "//hm.baidu.com/hm.js?b6e2d52e9f0660b9fbaf0f2029c046c0";
		document.write(decodeURI("%3Cscript src='https://tongji.51cto.com/cto.js/5b3d6ada2a51485725303e3eac45544c' type='text/javascript'%3E%3C/script%3E"));
	}else if(Nurl.indexOf('virtual.')>(-1)){
		hm.src = "//hm.baidu.com/hm.js?f5261e1814d2175f352db0c87ae0116b";
		document.write(decodeURI("%3Cscript src='https://tongji.51cto.com/cto.js/f9ea646c90bdaa4e99680394dc8597e0' type='text/javascript'%3E%3C/script%3E"));
	}else if(Nurl.indexOf('cloud.')>(-1)){
		hm.src = "//hm.baidu.com/hm.js?3972342e5668e3f7abd9e2ffc70ce57b";
		document.write(decodeURI("%3Cscript src='https://tongji.51cto.com/cto.js/8192812cbdc06ec00de3a3244ee59305' type='text/javascript'%3E%3C/script%3E"));
	}else if(Nurl.indexOf('mobile.')>(-1)){
		hm.src = "//hm.baidu.com/hm.js?5f70e4835ac91d9dbad7b7d529c65de7";
		document.write(decodeURI("%3Cscript src='https://tongji.51cto.com/cto.js/111ef0d5dd0beb1ff4ebd70294eb2ea1' type='text/javascript'%3E%3C/script%3E"));
	}else if(Nurl.indexOf('book.')>(-1)){
		hm.src = "//hm.baidu.com/hm.js?1f6cd06abaf7169487e48929fddcf059";
		document.write(decodeURI("%3Cscript src='https://tongji.51cto.com/cto.js/9871f204099e5613e53c6375e3c20b28' type='text/javascript'%3E%3C/script%3E"));
	}else if(Nurl.indexOf('stor.')>(-1)){
		hm.src = "//hm.baidu.com/hm.js?7cea740243bb104278f3a034ce20048c";
		document.write(decodeURI("%3Cscript src='https://tongji.51cto.com/cto.js/3b1394b98d24427ef2cc5385b14836ea' type='text/javascript'%3E%3C/script%3E"));
	}else if(Nurl.indexOf('biz.')>(-1)){
		hm.src = "//hm.baidu.com/hm.js?a4bf644cf49c3a2a2ab8dfadb640a4b5";
		document.write(decodeURI("%3Cscript src='https://tongji.51cto.com/cto.js/2be5cb65e9c304e5fc99c9bd315c6360' type='text/javascript'%3E%3C/script%3E"));
	}else if(Nurl.indexOf('zhuanlan.')>(-1)){
		hm.src = "//hm.baidu.com/hm.js?9c570f5c763f99154dc10943f9185fff";
		document.write(decodeURI("%3Cscript src='https://tongji.51cto.com/cto.js/ee35f9a255b333ec359a691cf0b6950a' type='text/javascript'%3E%3C/script%3E"));
	}else if(Nurl.indexOf('bigdata.')>(-1)){
		hm.src = "//hm.baidu.com/hm.js?a87681ba138bfff39ed80db35dcb9fcb";
		document.write(decodeURI("%3Cscript src='https://tongji.51cto.com/cto.js/6332a9a4bb036399721aecf6453e9f7f' type='text/javascript'%3E%3C/script%3E"));
	}else if(Nurl.indexOf('mdsa.')>(-1)){
		hm.src = "//hm.baidu.com/hm.js?b5e5fe20534940f05cd69e786fa0cf8b";
		document.write(decodeURI("%3Cscript src='https://tongji.51cto.com/cto.js/2962246606e68e1c06bc703bb2bd3eff' type='text/javascript'%3E%3C/script%3E"));
	}else if(Nurl.indexOf('cio.')>(-1) || Nurl.indexOf('cioage.')>(-1)){
		hm.src = "//hm.baidu.com/hm.js?b3729a021557bb14cf968a81993e388a";
		document.write(decodeURI("%3Cscript src='https://tongji.51cto.com/cto.js/be014f9f2cc54d922977ef6afdbb6506' type='text/javascript'%3E%3C/script%3E"));
	}else if(Nurl.indexOf('ai.')>(-1)){
		hm.src = "//hm.baidu.com/hm.js?1c79d93f588d7ba3532a83c4e116040f";
	}else if(Nurl.indexOf('blockchain.')>(-1)){
		hm.src = "//hm.baidu.com/hm.js?d3f7942106244a49e1fe9f06e35a339e";
	}else if(Nurl.indexOf('iot.')>(-1)){
		hm.src = "//hm.baidu.com/hm.js?a764ad7be9e3625f3316fcb1ea90b659";
	}else{
		hm.src = "//hm.baidu.com/hm.js?110fc9b2e1cae4d110b7959ee4f27e3b";
		document.write(decodeURI("%3Cscript src='https://tongji.51cto.com/cto.js/3d687af193414ffaa3c273083508caa8' type='text/javascript'%3E%3C/script%3E"));
	}
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
})();
document.write("</div>");

// 人工智能和区块链文章底部添加微信公众号二维码
if(document.domain.indexOf('ai.51cto.com') >= 0) {
	var zwnr = document.getElementsByClassName('zwnr');
	if(zwnr.length == 1) {
        zwnr[0].innerHTML += '<div style="width:618px;height:189px;padding-bottom:20px;border-top: 1px solid #eae7e2;padding-top:16px;"><h1 style="font-size:18px;text-align:center;padding-bottom:10px;">AI推手公众号介绍</h1> <div style="float:left;width: 440px;padding-left:10px;padding-right:15px;line-height:2;text-align:left;padding-top:15px;">智能时代来临，一起向前进，做AI技术的参与者，推动者！这里有普通用户能看懂的产业趋势与商业评论、入门人员能看懂的AI场景应用技术、更有与资深专家合作撰写的深度技术解析！</div><div style="margin-top:10px;float:right;"><img src="https://s4.51cto.com/oss/201803/16/9d39d6d140cdafbe3bc7340edff6c275.jpg" style="display:block;border:1px solid #ccc;"></div></div>';
	}
}
/*if(document.domain.indexOf('blockchain.51cto.com') >= 0) {
    var zwnr = document.getElementsByClassName('zwnr');
    if(zwnr.length == 1) {
        zwnr[0].innerHTML += '<div style="width: 618px;height:209px;padding-bottom:15px;border-top: 1px solid #eae7e2;padding-top:16px;"><h1 style="font-size:18px;text-align:center;padding-bottom:4px;">51CTO区块链社群正式开通</h1> <div style="float:left;width: 440px;padding-left:10px;padding-right:15px;line-height:2;text-align:left;padding-top:15px;">全球视野下的行业大势、国内外最新政策、 区块链技术应用、案例解析、数字货币市场动态、相关投资经验......区块链领域全方位价值信息，尽在51CTO区块链社群。大势已来，让我们共同缔造历史!</div><div style="margin-top:10px;float:right;"><img src="https://s2.51cto.com/oss/201807/03/ccf448cbbec178f5fcad3f1a15371f05.png" alt="" style="display:block;border:1px solid #ccc;"><span style="display:block;color:#666;text-align:center;padding-top:5px;font-size:14px;">51币读官微</span></div></div>';
    }
}*/
if(document.domain.indexOf('developer.51cto.com') >= 0) {
    var zwnr = document.getElementsByClassName('zwnr');
    if(zwnr.length == 1) {
zwnr[0].innerHTML += '<div style="width: 618px;height:209px;padding-bottom:15px;border-top: 1px solid #eae7e2;padding-top:16px;"><h1 style="font-size:18px;text-align:center;padding-bottom:4px;">关注“51CTO技术栈”微信公众号获取更多精彩内容</h1> <div style="float:left;width: 440px;padding-left:10px;padding-right:15px;line-height:2;text-align:left;padding-top:15px;">51CTO技术栈专注于IT技术领域，汇聚技术大咖为您分享开发架构、系统运维、大数据、人工智能等一线技术解析和实践案例等深度干货文章，愿我们一起悦享技术，成就CTO梦想！</div><div style="margin-top:10px;float:right;"><img src="https://s4.51cto.com/oss/201810/12/45b2e7a4966b273b015c04328d3e18f2.jpg" alt="" style="display:block;border:1px solid #ccc;"><span style="display:block;color:#666;text-align:center;padding-top:5px;font-size:14px;">51CTO技术栈</span></div></div>';
    }
}


if(window.location.href.indexOf('art') >= 0 || window.location.href.indexOf('htm') >= 0) {
	/*var lecturers = new Array(
		"https://s5.51cto.com/oss/201809/30/ca520a0927a05eeb3589f20928b80196.jpg"
	);*/
var host = window.location.host;
var domain_prefix = host.replace(/\.51cto\.com/, '');
var lecturers = new Array();
switch (domain_prefix){
	case 'bigdata':
		lecturers = [
			'https://s3.51cto.com/oss/201810/12/45762201afda8c76e7c32e406a1bf58b.png',
		];
		break;
	case 'developer':
		lecturers = [
			'https://s4.51cto.com/oss/201810/12/c42416bd5645953d367b4c6f1d6e1b8b.png',
		];
		break;
	case 'blockchain':
		lecturers = [
			'https://s2.51cto.com/oss/201810/12/87bd5800e2e15870ce4ac827ac72878d.png',
		];
		break;
	case 'ai':
		lecturers = [
			'https://s1.51cto.com/oss/201810/12/9d31418c17570abe8bd79199e48b6b33.png',
		];
		break;
	case 'iot':
		lecturers = [
			'https://s3.51cto.com/oss/201810/12/811b62ff23a1702eef7952368fb7fabb.png',
		];
		break;
	case 'mobile':
		lecturers = [
			'https://s2.51cto.com/oss/201810/12/b822c285639398d50ddc025bd966a640.png',
		];
		break;
	case 'news':
		lecturers = [
			'https://s1.51cto.com/oss/201810/12/1edb04508f7b1ad87e079141c0121b3d.png',
		];
		break;
	default:
      		lecturers = [
        		'https://s5.51cto.com/oss/201810/18/599b50361aac2fbb52e2a8156177f693.png',
      		];
      		break;
}
//1024activity
lecturers = [
	'https://s3.51cto.com/oss/201901/23/505616d478ef460fb9508b3e5f75e8c9.jpg'  
];
//1024activity

	var lecturer = lecturers[Math.floor((Math.random()*lecturers.length))];
	document.body.innerHTML += '<div class="footer_mask" style="background:url('+lecturer+') no-repeat center top;width:100%;position: fixed;bottom:0;height:0;"><div style="position: relative;margin:0 auto;width:1000px;"><a href="http://blog.51cto.com/cloumn/composedetail?id=6&zxdb" style="display:block; width: 1000px;height: 90px;" target="_blank"> </a><span class="js_close" onclick="document.getElementsByClassName(\'footer_mask\')[0].style.display=\'none\'" style="position: absolute;right:-55px;top:5px;cursor: pointer;"><img src="https://s3.51cto.com/oss/201803/22/0b6cdc3714b2d45b1c173d72c17a8be2.jpg"></span></div></div>';
	$(".footer_mask").animate({width: "100%",height:"90px"}, 1000);
}
