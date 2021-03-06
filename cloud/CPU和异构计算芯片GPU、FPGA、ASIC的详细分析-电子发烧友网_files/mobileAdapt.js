/**
 * 发烧友门户对移动设备做页面适配跳转
 * 2016年6月7日 by liuping
 */
(function() {
    if (self != top) return;
    var pathname = location.pathname;
    if (~pathname.search(/^\/webapp(\/|$)/)) return;
    if (~pathname.search(/^\/app(\/|$)/)) return;
    if (~pathname.search(/^\/company(\/|$)/)) return;
    if (~pathname.search(/^\/project(\/|$)/)) return;
    if (~pathname.search(/^\/store(\/|$)/)) return;


    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

    if (getQueryString('v') == 'pc') {
        return;
    }
    /**
     * 创建xmlhttprequest对象
     * @return {[type]} [description]
     */
    function createRequest() {
        try {
            request = new XMLHttpRequest();
        } catch (e) {
            try {
                request = new ActiveXObject("Msxml4.XMLHTTP");
            } catch (e) {
                try {
                    request = new ActiveXObject("Msxml3.XMLHTTP");
                } catch (e) {
                    try {
                        request = new ActiveXObject("Msxml3.XMLHTTP");
                    } catch (e) {
                        try {
                            request = new ActiveXObject("Microsoft.XMLHTTP");
                        } catch (e) {
                            request = false;
                        }
                    }
                }
            }
        }
        return request;
    }

    var xhr = createRequest();
    if (xhr === false) return;

    /**
     * ajax post
     * @param  {[type]} url      [description]
     * @param  {[type]} data     [description]
     * @param  {[type]} sucesscb [description]
     * @return {[type]}          [description]
     */
    function ajaxPost(url, data, sucesscb) {
        xhr.open('POST', url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var response = xhr.responseText;
                    sucesscb(response)
                } else {
                    console.log(request.status);
                }
            }
        };
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        xhr.send(formatParam(data));
    }

    function formatParam(params) {
        var paramsArray = [];
        for (var pro in params) {
            var paramValue = params[pro];
            paramsArray.push(pro + "=" + paramValue);
        }
        return paramsArray.join("&");
    }
    /**
     * 是否移动设备
     * @return {Boolean} [description]
     */
    function isMobileDevice(plus) {
        var ua = navigator.userAgent.toLowerCase();
        if (plus === true) {
            var mobileDeviceUa = new RegExp('((MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC\-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT)|(SonyEricsson)|(NEC)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC)|(SED)|(EMOL)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera))', 'i');
        } else {
            var mobileDeviceUa = new RegExp('(ipad|iphone os|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile)', 'i');
        }
        if (ua.search(mobileDeviceUa) > -1) {
            return true;
        } else {
            return false;
        }
    }

    // 如果是移动设备，并能匹配到对应的移动版页面做页面跳转
    if (isMobileDevice()) {
        ajaxPost('/webapi/MobileAdapt/getMobileUrl', {
            url: window.location.href
        }, function(response) {
            responseObj = eval("(" + response + ")");
            if (responseObj.error_code == 0) {
                var data = responseObj.data;
                window.location.href = data.murl;
            }
        });
    } else {
        // PC端个别页面做跳转
        var search_url = ['/soft/IC/2017/20170328501349.html'];
        var direct_url = ['/whitepaper/1.html'];
        var cur_path = window.location.pathname;
        var index_of_search = -1;
        for (var i = 0; search_url[i]; i++) {
            if (search_url[i] === cur_path) {
                index_of_search = i;
                break;
            }
        }
        if (index_of_search != -1 && direct_url[index_of_search] != undefined) {
            window.location.href = direct_url[index_of_search];
        }
    }
})();