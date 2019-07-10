
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.useFusion)?(_c('c-touchable-stop',[_c('b-share',{ref:"share",attrs:{"usePopup":_vm.usePopup,"url":_vm.url,"title":_vm.title,"content":_vm.content,"iconUrl":_vm.iconUrl,"color":_vm.color,"channel":_vm.channel,"loginfo":_vm.loginfo,"custom":_vm.custom,"imageurl":_vm.imageurl,"screenShot":_vm.screenShot,"type":_vm.type}})],1)):(_c('div',[_c('c-toast',{directives:[{name:"nossr",rawName:"a-nossr"}],attrs:{"content":_vm.toastContent,"state":_vm.toastState,"auto-close":""},on:{"change":_vm.handleToastChange}}),_vm._v(" "),_c('c-touchable-stop',[(_vm.$platform !== 'pc')?(_c('c-popup',{directives:[{name:"nossr",rawName:"a-nossr"}],attrs:{"is-open":_vm.show
                    && !_vm.hasSDK
                    && !_vm.linkPanel,"transition":_vm.usePopup,"has-padding":false,"is-hide-header":"","min-height":"100px"},on:{"close":_vm.onClose}},[_c('div',{ref:"c-share-container",staticClass:"c-share-container"},[_c('div',{staticClass:"c-share-main"},[_c('div',{staticClass:"c-share-panel",on:{"click":_vm.stop}},[_c('c-touchable-feedback',{staticClass:"c-share-button",attrs:{"role":"button"}},[_c('div',{on:{"click":function($event){_vm.onShare('wechat')}}},[_c('div',{staticClass:"c-share-img wechat"}),_vm._v(" "),_c('span',[_vm._v("微信好友")])])]),_vm._v(" "),_c('c-touchable-feedback',{staticClass:"c-share-button",attrs:{"role":"button"}},[_c('div',{on:{"click":function($event){_vm.onShare('moments')}}},[_c('div',{staticClass:"c-share-img moments"}),_vm._v(" "),_c('span',[_vm._v("朋友圈")])])]),_vm._v(" "),_c('c-touchable-feedback',{staticClass:"c-share-button",attrs:{"role":"button"}},[_c('div',{on:{"click":function($event){_vm.onShare('qq')}}},[_c('div',{staticClass:"c-share-img qq"}),_vm._v(" "),_c('span',[_vm._v("QQ好友")])])]),_vm._v(" "),_c('c-touchable-feedback',{staticClass:"c-share-button",attrs:{"role":"button"}},[_c('div',{on:{"click":function($event){_vm.onShare('qzone')}}},[_c('div',{staticClass:"c-share-img qzone"}),_vm._v(" "),_c('span',[_vm._v("QQ空间")])])]),_vm._v(" "),_c('c-touchable-feedback',{staticClass:"c-share-button",attrs:{"role":"button"}},[_c('div',{on:{"click":function($event){_vm.onShare('sinaweibo')}}},[_c('div',{staticClass:"c-share-img weibo"}),_vm._v(" "),_c('span',[_vm._v("新浪微博")])])]),_vm._v(" "),_c('c-touchable-feedback',{staticClass:"c-share-button",attrs:{"role":"button"}},[_c('div',{on:{"click":_vm.handleCopyLinkClick}},[_c('c-icon',{staticClass:"img",attrs:{"type":"link"}}),_vm._v(" "),_c('span',[_vm._v("复制链接")])],1)])],1),_vm._v(" "),_c('c-touchable-feedback',{staticClass:"c-share-cancel"},[_c('div',{attrs:{"role":"button"},on:{"click":_vm.onClose}},[_c('span',[_vm._v("取消")])])])],1)])])):(_vm._e()),_vm._v(" "),_c('c-popup',{directives:[{name:"nossr",rawName:"a-nossr"}],attrs:{"is-open":_vm.linkPanel,"transition":_vm.usePopup,"has-padding":false,"is-hide-header":"","min-height":"100px"},on:{"close":_vm.hideLinkPanel}},[_c('div',{staticClass:"copy-container"},[_c('p',{staticClass:"copy-hint"},[_vm._v("长按或点击右侧按钮复制链接，去粘贴给好友吧~")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"a-show",value:(_vm.showCopyIcon),expression:"showCopyIcon"}],staticClass:"copy-btn",attrs:{"role":"button","aria-roledescription":"复制链接.按钮"},on:{"click":_vm.handleCopyLinkClick}},[_c('c-icon',{attrs:{"type":"link"}})],1),_vm._v(" "),_c('div',{staticClass:"copy-box"},[_c('span',[_vm._v(_vm._s(_vm.text))]),_vm._v(" "),_c('a',{attrs:{"href":_vm.shortLink,"onclick":"return false;"}},[_vm._v("\n                            "+_vm._s(_vm.shortLink)+"\n                        ")])])]),_vm._v(" "),_c('c-touchable-feedback',{staticClass:"c-share-cancel"},[_c('div',{attrs:{"role":"button"},on:{"click":_vm.hideLinkPanel}},[_c('span',[_vm._v("取消")])])])],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"a-show",value:(_vm.hint),expression:"hint"}],staticClass:"hint-mask"},[_c('img',{attrs:{"src":"https://m.baidu.com/se/static/pmd/pmd/share/images/wxtips.png"}})])],1)],1))],1)},
staticRenderFns: []
}

})(_module1, _module1.exports)

            /* get script output data */
            var _module2 = {
                exports: {}
            };
            (function (module, exports) {
    "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _userAgent = _interopRequireDefault(require("@searchfe/user-agent"));

var _alaUtil = require("@baidu/ala-util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @file 分享组件
 * @author toxni (liyuhang01@baidu.com)
 */
var _default = {
  mounted: function mounted() {
    if (this.$platform !== 'pc') {
      /* eslint-disable fecs-no-require */
      require(['fusion/b-share/b-share']);
      /* eslint-enable fecs-no-require */

    }

    if (this.useFusion) {
      this.$el.addEventListener('shareclick', this.onShareClick);
      this.$el.addEventListener('close', this.onClose);

      if (this.show) {
        this.$refs.share.fusion.popup();
      }
    } else {
      var supportBox = _userAgent["default"].isBaiduBox() ? this.getVersionTwo(_userAgent["default"].baiduBoxVersion()) >= 5.4 : 0;
      var supportCraft = _userAgent["default"].isSearchCraft() ? this.getVersionTwo(_userAgent["default"].secrVersion()) >= 2.0 : 0;

      var supportJisu = _userAgent["default"].isBaiduBoxJisu && _userAgent["default"].isBaiduBoxJisu() && (this.getVersionTwo(_userAgent["default"].baiduBoxVersion()) >= 1.1 && _userAgent["default"].isIOS() || this.getVersionTwo(_userAgent["default"].baiduBoxVersion()) >= 2.2 && _userAgent["default"].isAndroid());

      this.hasSDK = supportBox || supportCraft || supportJisu;

      if (_userAgent["default"].isQQBrowser()) {
        (0, _alaUtil.loadJS)('//jsapi.qq.com/get?api=app.share');
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.useFusion) {
      this.$el.removeEventListener('shareclick', this.onShareClick);
      this.$el.removeEventListener('close', this.onClose);
    }
  },
  watch: {
    /**
     * 唤起面板时，判断是否简搜、手百环境
     * 若是，则执行 nativeShare 调起端分享面板
     * 若否，则由 show && !hasSDK 逻辑调起组件分享面板
     *
     * @param {boolean} newVal 新的 show 的值
     */
    show: function show(newVal) {
      if (!this.shortLink) {
        this.generateShortLink();
      }

      if (newVal) {
        if (this.useFusion) {
          this.$refs.share.fusion.popup();
        } else if (this.hasSDK) {
          /**
           * 关闭分享面板
           *
           * @event close
           */
          this.$emit('close');
          this.nativeShare();
        }
      }
    }
  },
  methods: {
    stop: function stop(e) {
      e.stopPropagation();
    },
    onClose: function onClose() {
      this.$emit('close');
    },
    onShareClick: function onShareClick(e) {
      var info = e._args;
      /**
       * 点击分享面板上的按钮时触发
       *
       * @event shareclick
       * @property {object} param1 分享目标
       */

      this.$emit('shareclick', info);
    },
    handleToastChange: function handleToastChange(value) {
      if (value !== this.toastState) {
        this.toastState = value;
      }
    },
    getVersionTwo: function getVersionTwo(verArr) {
      return verArr && verArr[0] && verArr[1] ? parseFloat((verArr[0] * 10 + verArr[0]) / 10) : 0;
    },

    /**
     * 点击分享到对应平台
     * 若为 UC 浏览器，执行 ucShare
     * 若为 QQ 浏览器，执行 qqBrowserShare
     * 若为其它，执行 wiseShare
     *
     * @param {string} target ['wechat', 'moments', 'qq', 'qzone', 'sinaweibo']
     */
    onShare: function onShare(target) {
      this.$emit('shareClick', {
        target: target
      });
      var tar = target.toLowerCase();

      if (_userAgent["default"].isUC()) {
        this.ucShare(tar);
      } else if (_userAgent["default"].isQQBrowser()) {
        this.qqBrowserShare(tar);
      } else {
        this.wiseShare(tar);
      }
    },

    /**
     * 手百、简搜调起分享端能力
     */
    nativeShare: function nativeShare() {
      // type 这里直接写死为 'url' 因为线上截图分享类型目前全都是链接分享 故与线上保持一致
      // TODO: 后续与相关需求方确认 是否仍需使用截图分享功能
      var params = {
        type: 'url',
        title: this.title,
        content: this.content,
        icon: this.iconUrl,
        url: this.url ? this.url : location.href,
        panel: ''
      };
      var self = this;
      /* eslint-disable fecs-no-require */

      require(['@baidu/share'], function (share) {
        share.open(params).then(function (res) {
          /**
           * 分享完成回调
           *
           * @event reslove
           */
          self.$emit('reslove');
        })["catch"](function (error) {
          /**
           * 分享失败回调
           *
           * @event catch
           */
          self.$emit('catch');
        });
      });
      /* eslint-enable fecs-no-require */

    },

    /**
     * qq 浏览器分享逻辑
     *
     * @param {string} target 分享目标
     */
    qqBrowserShare: function qqBrowserShare(target) {
      /* eslint-disable fecs-camelcase */
      var appCode = this.getAppCode(target);
      var options = {
        url: this.url ? this.url : location.href,
        title: this.title,
        description: this.content,
        img_url: this.iconUrl,
        img_title: '',
        to_app: appCode,
        cus_txt: ''
      };
      options = target === '' ? '' : options;

      if (typeof window.browser !== 'undefined' && typeof window.browser.app !== 'undefined') {
        window.browser.app.share(options);
      } // 若调起端能力的 browser 缺失，则降级到 wiseShare 方法
      else {
          this.wiseShare(target);
        }
    },

    /**
     * uc 浏览器分享逻辑
     *
     * @param {string} target 分享目标
     * @return {underfined}
     */
    ucShare: function ucShare(target) {
      var appCode = this.getAppCode(target); // Android UC 分享到 QQ 空间有问题，降级到 redirectShare 方法

      if (appCode === 'QZone' && _userAgent["default"].isAndroid()) {
        this.redirectShare(target);
        return void 0;
      }

      if (typeof window.ucweb !== 'undefined') {
        window.ucweb.startRequest('shell.page_share', [this.title, this.title, this.url ? this.url : location.href, appCode, '', '@', '']);
      } else if (typeof window.ucbrowser !== 'undefined') {
        window.ucbrowser.web_share(this.title, this.title, this.url ? this.url : location.href, appCode, '', '@', '');
      } // 若调起端能力的 ucweb ucbrowser 缺失，则降级到 wiseShare 方法
      else {
          this.wiseShare(target);
        }
    },

    /**
     * 无端能力分享逻辑（一般为手百、简搜、QQ 浏览器、UC 浏览器以外的方式）
     *
     * @param {string} target 分享目标
    */
    wiseShare: function wiseShare(target) {
      // qq空间、新浪微博采用 url 转跳方式
      if (target === 'qzone' || target === 'sinaweibo') {
        this.redirectShare(target);
      } else if (_userAgent["default"].isQQApp()) {
        this.showShareMask();
      } // 微信蒙层提示右上角分享
      else if (_userAgent["default"].isWeixinApp()) {
          this.showShareMask();
        } else {
          this.showLinkPanel();
        }
    },

    /**
     * 显示复制链接面板
     */
    showLinkPanel: function showLinkPanel() {
      var _this = this;

      // 如果短链不存在
      if (!this.shortLink) {
        // 生成短链
        this.generateShortLink(function () {
          // 打开复制链接面板
          _this.linkPanel = true;
        });
      } // 如果短链存在，直接打开复制链接面板
      else {
          this.linkPanel = true;
        }
    },

    /**
     * 生成短链
     *
     * @param {Function} cb 生成完毕后的回调函数
     */
    generateShortLink: function generateShortLink(cb) {
      var _this2 = this;

      var url = "".concat(location.protocol, "//").concat(location.protocol === 'https:' ? 'sp0.baidu.com/5LMDcjW6BwF3otqbppnN2DJv/' : '', "mysearch.pae.baidu.com/api/s");
      var href = this.url ? this.url : location.href ? this.url ? this.url : location.href : location.href; // 生成短链

      this.shortLink = href; // 请求短链地址

      (0, _alaUtil.fetch)("".concat(url, "?params=").concat(JSON.stringify([href])), {
        method: 'jsonp'
      }).then(function (data) {
        if (data && data.status === '0' && data[href]) {
          _this2.shortLink = data[href.toString()];
        } // 触发回调


        cb && cb();
      });
    },

    /**
     * 复制链接点击
     */
    handleCopyLinkClick: function handleCopyLinkClick() {
      this.copyTextToClipboard(this.shortLink);
    },

    /**
     * 复制链接至剪贴板
     *
     * @param {string} text 要复制的文案
     */
    copyTextToClipboard: function copyTextToClipboard(text) {
      // 生成一个表单元素 input/textarea
      var textArea = document.createElement('textarea'); // 背景透明

      textArea.style.background = 'transparent'; // *** 设置属性为只读，修复调起键盘并闪屏的问题

      textArea.setAttribute('readonly', 'readonly');
      textArea.value = text; // 添加至 dom

      document.body.appendChild(textArea); // 设置选中

      textArea.select(); // *** 兼容处理：修复 iOS 下 select() 不会选中文案的问题

      textArea.setSelectionRange(0, text.length);

      try {
        var successful = document.execCommand('copy', true);

        if (successful) {
          this.toastState = true;
        } else {
          this.showCopyIcon = false;
          this.linkPanel = true;
        }
      } catch (err) {
        this.showCopyIcon = false;
        this.linkPanel = true;
      } // 移除元素


      document.body.removeChild(textArea);
    },

    /**
     * 关闭复制链接面板
     */
    hideLinkPanel: function hideLinkPanel() {
      this.linkPanel = false;
    },

    /**
     * 获取各个平台分享所需不同名称字段
     *
     * @param {string} target ['wechat', 'moments', 'qq', 'qzone', 'sinaweibo']
     * @return {string} appCode
     */
    getAppCode: function getAppCode(target) {
      var appCodeList = {
        sinaweibo: ['kSinaWeibo', 'SinaWeibo', 11, '新浪微博'],
        wechat: ['kWeixin', 'WechatFriends', 1, '微信好友'],
        moments: ['kWeixinFriend', 'WechatTimeline', '8', '微信朋友圈'],
        qq: ['kQQ', 'QQ', '4', 'QQ好友'],
        qzone: ['kQZone', 'QZone', '3', 'QQ空间']
      };

      if (_userAgent["default"].isUC()) {
        return _userAgent["default"].isIOS() ? appCodeList[target][0] : appCodeList[target][1];
      }

      if (_userAgent["default"].isQQBrowser()) {
        return appCodeList[target][2];
      }
    },

    /**
     * 分享至 QQApp 微信的蒙层提示
     */
    showShareMask: function showShareMask() {
      var _this3 = this;

      this.hint = true;
      setTimeout(function () {
        _this3.hint = false;
      }, 2000);
    },

    /**
     * 分享至 qq 空间、新浪微博的 url 转跳分享方式
     *
     * @param {string} target 分享目标
     */
    redirectShare: function redirectShare(target) {
      if (target === 'qzone') {
        var url = "url=".concat(encodeURIComponent(this.url ? this.url : location.href), "&imageUrl=").concat(encodeURIComponent(this.iconurl)) + "&summary=".concat(this.content, "&title=").concat(this.title);
        window.open('http://qzs.qzone.qq.com/open/connect/widget/mobile/qzshare/index.html?' + url);
      }

      if (target === 'sinaweibo') {
        window.open("http://v.t.sina.com.cn/share/share.php?url=".concat(encodeURIComponent(this.url ? this.url : location.href), "&title=").concat(encodeURIComponent(this.title)));
      }
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"useFusion": {"type": Boolean,"default": true},"show": {"type": Boolean,"default": false},"usePopup": {"type": Boolean,"default": true},"url": {"type": String,"default": ""},"title": {"type": String,"default": ""},"content": {"type": String,"default": ""},"type": {"type": String,"default": "url"},"iconUrl": {"type": String,"default": "https://m.baidu.com/se/static/pmd/pmd/share/images/bdu.jpg"},"color": {"type": String},"channel": {"type": Array},"loginfo": {"type": Object},"custom": {"type": Array},"imageurl": {"type": String},"screenShot": {"type": String}};
            obj.components = {"c-icon": require("../Icon/Icon"),"c-popup": require("../Popup/Popup"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback"),"c-touchable-stop": require("../TouchableFeedback/TouchableStop"),"c-toast": require("../Toast/Toast")};

            
            

            


            
            obj.data = function () {
                return {"hasSDK": true,"linkPanel": false,"isScriptInserted": false,"options": {},"shortLink": "","hint": false,"screenHeight": 0,"toastContent": "复制成功","toastState": false,"showCopyIcon": true};
            };
            var originCreated = obj.created;
            obj.created = function () {
                var self = this;
                self.$super = {
                    render: function () {
                        return _module1.exports.render.apply(self, arguments);
                    }
                };

                

                originCreated && originCreated.call(self);
            };
            
            obj._scopeId = "data-a-77752786";

            module.exports = obj;

            
        });
    