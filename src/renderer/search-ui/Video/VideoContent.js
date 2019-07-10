
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-link',{ref:"container",staticClass:"video-content__2kFLL",attrs:{"aria-modal":_vm.isExpanded,"role":"alertdialog"}},[_c('c-touchable-stop',{staticStyle:{"margin-bottom":".05rem"}},[_c('div',{ref:"posterWrapper",staticClass:"poster-wrapper__2Wa3O",class:[_vm.$style[((_vm.video.imgType) + "PosterWrapper")], _vm.noMotion ? _vm.$style.noMotion : ''],style:({
                height: _vm.width ? _vm.width / 3 + 'px' : 'auto',
                background: _vm.isGif ? '#4c4c4c' : 'white'
            }),nativeOn:{"click":function($event){_vm.handlePlay($event)}}},[_c('c-img',{ref:"poster",staticClass:"poster__ASdpD c-gap-top-zero",style:({
                    width: _vm.video.zoom ? '100%' : ((_vm.isGif ? _vm.width / 16 * 9 : _vm.width) + 'px'),
                    transform: _vm.isGif ? ("translateX(" + (_vm.width / 32 * 7) + "px)") : 'none',
                    padding: _vm.isGif ? '.15rem' : '0',
                    display: _vm.isGif ? 'none' : 'block'
                }),attrs:{"src":_vm.video.poster,"type":_vm.video.posterType ? _vm.video.posterType : 'w',"aria-hidden":"true"},nativeOn:{"click":function($event){_vm.handleExpand($event)}}}),_vm._v(" "),_c('c-img',{staticClass:"hidden__24mKX c-gap-top-zero c-gap-bottom-zero",attrs:{"src":_vm.video.poster,"type":_vm.video.imgType === 'b' ? 's' : _vm.video.imgType,"padding-bottom":_vm.video.imgType === 'b' ? 50.75 : '',"aria-hidden":"true"},nativeOn:{"click":function($event){_vm.handleExpand($event)}}}),_vm._v(" "),_c('div',{staticClass:"slot-abs__3j_3S",style:({
                    width: _vm.width + 'px',
                    height: _vm.width / 16 * 9 + 'px'
                })},[(_vm.isPlayFront)?(_c('div',{ref:"playFront",staticClass:"slot-wrapper__2NvKy"},[_vm._t("player-front")],2)):(_vm._e()),_vm._v(" "),(_vm.isPlayEnd)?(_c('div',{ref:"playEnd",staticClass:"slot-wrapper__2NvKy"},[_vm._t("player-end")],2)):(_vm._e())]),_vm._v(" "),(_vm.isPlayFront && !_vm.isGif)?(_c('div',{ref:"playFrontMask",staticClass:"player-mask__3mxSC"})):(_vm._e()),_vm._v(" "),(_vm.isPlayEnd)?(_c('div',{staticClass:"player-mask__3mxSC player-mask-light__1PQ2j"})):(_vm._e())],1),_vm._v(" "),_c('c-icon',{ref:"closeIcon",staticClass:"c-icon player-close-icon__39BPQ",class:[(_vm.isAndroid && !_vm.isGif) ? _vm.$style.whiteClose : ''],attrs:{"type":"multiply","role":"button","aria-roledescription":"关闭视频.按钮"},on:{"click":_vm.handleShrink}}),_vm._v(" "),_c('div',{ref:"videoWrapper",staticClass:"video-wrapper__1rg8m",style:({ width: _vm.width + 'px' })},[_c('div',{staticClass:"player-wrapper"},[(!_vm.isGif)?(_c('b-player',{ref:"player",staticClass:"player__Zc4Ib",attrs:{"src":_vm.video.src,"poster":_vm.video.poster,"height":_vm.width / 16 * 9,"t7playerinline":_vm.isLowBox,"playsinline":"true","autoplay":"autoplay","preload":"none"}})):(_vm._e())],1)])],1),_vm._v(" "),_c('c-row',{staticClass:"main-wrapper__2hJqe"},[_c('c-span',{staticStyle:{"padding-left":".01rem"},attrs:{"col":_vm.video.col,"aria-roledescription":((_vm.video.title ? _vm.video.title : '') + ".视频"),"aria-hidden":_vm.isExpanded,"role":"button","data-module":"c-v-pl"}},[_c('c-touchable-stop',{staticStyle:{"position":"relative"}},[_c('c-img',{staticClass:"thumb",class:[_vm.video.logo && !_vm.video.smallLogo ? _vm.$style.logoWrapper : ''],style:({
                        opacity: _vm.isExpanded ? 0 : 1
                    }),attrs:{"src":_vm.video.thumb,"circle-mask-icon":_vm.video.iconType ? _vm.video.iconType : 'video_play3',"circle-mask-text":_vm.video.iconTxt,"type":_vm.video.imgType === 'b' ? 's' : _vm.video.imgType,"show-num":_vm.video.time,"padding-bottom":_vm.video.imgType === 'b' ? 50.75 : ''},nativeOn:{"click":function($event){_vm.handleExpand($event)}}}),_vm._v(" "),_c('img',{directives:[{name:"show",rawName:"a-show",value:(!_vm.isExpanded && _vm.video.logo),expression:"!isExpanded && video.logo"}],class:_vm.video.smallLogo ? _vm.$style.smallLogo : _vm.$style.logo,attrs:{"src":_vm.video.logo}})],1)],1),_vm._v(" "),_c('c-span',{ref:"rightWrapper",staticClass:"right-wrapper__2gkhe",attrs:{"col":12 - _vm.video.col}},[_c('div',{ref:"rightText",staticClass:"right-text__29b8Z",class:[_vm.noMotion ? _vm.$style.noMotion : '']},[_vm._t("player-right",[_c('c-touchable-feedback',{attrs:{"url":_vm.text.url,"is-jump":""}},[_c('c-text-line',{attrs:{"text":_vm.text.text,"color":_vm.text.textColor,"clamp":_vm.text.textClamp ? _vm.text.textClamp : 4}})],1)])],2)])],1),_vm._v(" "),_c('c-row',{directives:[{name:"show",rawName:"a-show",value:(!_vm.vanish),expression:"!vanish"}],ref:"areaBelow",staticClass:"area-below__kC3_P",class:[_vm.noMotion ? _vm.$style.noMotion : '']},[(_vm.video.posterType !== 's' || _vm.video.vanish)?(_c('c-span',{attrs:{"col":"12"}},[_vm._t("player-right",[_c('c-touchable-feedback',{attrs:{"url":_vm.text.url,"is-jump":""}},[_c('c-text-line',{attrs:{"text":_vm.text.text,"color":_vm.text.textColor,"clamp":_vm.text.textClamp ? _vm.text.textClamp : 4}})],1)])],2)):(_vm._e())],1)],1)},
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

require("fusion/b-player/b-player");

var _orientationMixin = _interopRequireDefault(require("../util/orientationMixin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var THUBMNAIL_WIDTH = {
  s: '32%',
  b: '65%'
};
var _default = {
  methods: {
    /**
     * 展开动效
     * 0ms-300ms 16:9大图 展开
     * 0ms-180ms 右侧区域 下移
     * 0ms-180ms 右侧区域 渐隐
     * 0ms-300ms 下侧区域 高度增加
     * 0ms-300ms 下侧区域 渐显
     * 300ms-380ms 关闭按钮渐显
     * 48ms-348ms 蒙层渐显 (多 48ms 解决部分机型 300ms 未完全展开问题)
     */
    handleExpand: function handleExpand() {
      var _this = this;

      this.isPlayEnd = false;
      /**
       * 点击展开事件
       *
       * @event expand
       */

      this.$emit('expand');
      setTimeout(function () {
        _this.isExpanded = true;
      }, this.noMotion ? 0 : 50);
      var height = this.width / 16 * 9 + 'px';
      var posterWrapper = this.$refs.posterWrapper;
      var areaBelow = this.$refs.areaBelow.$el;
      var rightText = this.$refs.rightText;
      var closeIcon = this.$refs.closeIcon.$el;
      posterWrapper.style.opacity = 1;
      posterWrapper.style.zIndex = 4;
      posterWrapper.style.width = '100%';
      posterWrapper.style.height = height;

      if (this.video.shift) {
        rightText.style.marginLeft = '105%';
      } else {
        rightText.style.marginTop = height;
      }

      rightText.style.opacity = 0;
      areaBelow.style.height = areaBelow.scrollHeight + 'px';
      areaBelow.style.paddingTop = '0.15rem';
      areaBelow.style.opacity = 1;
      closeIcon.style.display = 'block';

      if (!this.video.wait) {
        this.play();
      } else {
        this.isPlayFront = true;
      }

      setTimeout(function () {
        if (_this.isPlayFront) {
          _this.$refs.playFront.style.opacity = 1;

          if (!_this.isGif) {
            _this.$refs.playFrontMask.style.opacity = 1;
          }
        }
      }, this.noMotion ? 0 : 48);
      setTimeout(function () {
        closeIcon.style.opacity = 1;
        rightText.className = [_this.isGif ? _this.$style.rightTextDisappear : _this.$style.rightText, _this.noMotion ? _this.$style.noMotion : ''].join(' ');
      }, this.noMotion ? 0 : 300);
    },

    /**
     * 收起动效
     * 0ms 蒙层消失
     * 0ms 关闭按钮消失
     * 0ms-300ms 16:9大图 收缩
     * 0ms-120ms 右侧区域 上移
     * 0ms-180ms 右侧区域 渐显
     * 0ms-200ms 下侧区域 高度减少
     * 0ms-200ms 下侧区域 渐隐
     * 300-420ms 16:9大图 渐隐
     *
     * @param {event} e 事件
     */
    handleShrink: function handleShrink(e) {
      var _this2 = this;

      e && e.preventDefault();
      this.isExpanded = false;
      this.isPlayEnd = false;
      /**
       * 点击收起事件
       *
       * @event shrink
       */

      this.$emit('shrink');
      var videoWrapper = this.$refs.videoWrapper;
      var posterWrapper = this.$refs.posterWrapper;
      var areaBelow = this.$refs.areaBelow.$el;
      var rightText = this.$refs.rightText;
      var closeIcon = this.$refs.closeIcon.$el;
      var playFront = this.$refs.playFront;
      var playFrontMask = this.$refs.playFrontMask;
      posterWrapper.style.opacity = 1;
      posterWrapper.style.zIndex = 4;
      videoWrapper.style.opacity = 0;
      videoWrapper.style.height = 0;
      posterWrapper.style.width = THUBMNAIL_WIDTH[this.video.imgType ? this.video.imgType : 's'];
      posterWrapper.style.height = this.width / 3 + (this.video.col / 4 - 2) * 5 + 'px';
      rightText.style.opacity = 1;

      if (this.video.shift) {
        rightText.style.marginLeft = '0%';
      } else {
        rightText.style.marginTop = 0;
      }

      areaBelow.style.height = 0;
      areaBelow.style.paddingTop = 0;
      areaBelow.style.opacity = 0;
      closeIcon.style.display = 'none';
      closeIcon.style.opacity = 0;

      if (playFront) {
        playFront.style.opacity = 0;
      }

      if (playFrontMask) {
        playFrontMask.style.opacity = 0;
      }

      if (!this.isGif) {
        var player = this.$refs.player;
        player.fusion.remove();
        player.innerHTML = '';
        player.style.height = 0;
        player.style.width = 0;
      }

      setTimeout(function () {
        posterWrapper.style.opacity = 0;
        rightText.className = [_this2.$style.rightText, _this2.noMotion ? _this2.$style.noMotion : ''].join(' ');
      }, this.isGif || this.noMotion ? 0 : 300);
      setTimeout(function () {
        _this2.isPlayFront = false;
        posterWrapper.style.zIndex = -1;
      }, this.noMotion ? 0 : 480);
    },

    /**
     * 播放动效
     * 0ms-240ma 蒙层渐隐
     *
     * @return {null}
     */
    play: function play() {
      var _this3 = this;

      if (!this.video.src) {
        return void 0;
      }

      var height = this.width / 16 * 9 + 'px';
      var videoWrapper = this.$refs.videoWrapper;
      var posterWrapper = this.$refs.posterWrapper;
      var closeIcon = this.$refs.closeIcon.$el;
      /**
       * 开始播放事件
       *
       * @event playStart
       */

      this.$emit('playStart');
      var player = this.$refs.player;
      player.setAttribute('src', this.video.src + '?t=' + new Date().getTime());
      player.style.height = 'auto';
      player.style.width = '100%';

      player.fusionReady = function () {
        player.fusion.play();
        player.fusion.on('playend', function () {
          _this3.isPlayEnd = true;

          _this3.$nextTick(function () {
            if (_this3.$refs.playEnd) {
              _this3.$refs.playEnd.style.opacity = 1;
            }
          });
          /**
           * 播放结束事件
           *
           * @event playEnd
           */


          _this3.$emit('playEnd');

          posterWrapper.style.opacity = 1;
          posterWrapper.style.zIndex = 4;
          player.fusion.remove();
          player.innerHTML = '';
        });
      };

      setTimeout(function () {
        posterWrapper.style.opacity = 0;
        closeIcon.style.opacity = 1;
        videoWrapper.style.opacity = 1;
        videoWrapper.style.height = height;
      }, this.noMotion ? 0 : 300);
      setTimeout(function () {
        _this3.isPlayEnd = false;
        _this3.isPlayFront = false;
        var posterWrapper = _this3.$refs.posterWrapper;
        posterWrapper.style.zIndex = -1;
        posterWrapper.style.opacity = 1;
      }, this.noMotion ? 0 : 600);
    },
    mediaQueryOrientationListenerMixin: function mediaQueryOrientationListenerMixin(mediaQueryList) {
      var _this4 = this;

      setTimeout(function () {
        _this4.width = _this4.$refs.container.$el.clientWidth;

        _this4.$nextTick(function () {
          _this4.$refs.posterWrapper.style.height = _this4.isExpanded ? _this4.width / 16 * 9 + 'px' : (_this4.isGif ? 'auto' : _this4.width / 3 - 5) + 'px';
        });
      }, this.noMotion ? 0 : 500);
    }
  },
  mixins: [_orientationMixin["default"]],
  mounted: function mounted() {
    var ua = navigator.userAgent.toLowerCase();
    this.isAndroid = /android/.test(ua);
    this.isBox = /baiduboxapp/.test(ua); // 安卓 5 6 手百 video 播放器无法触发 fusion playend 事件，此情况下改为手百不劫持播放器

    this.isLowBox = (/android 5/.test(ua) || /android 6/.test(ua)) && /baiduboxapp/i.test(ua);
    this.width = this.$refs.container.$el.clientWidth;
    this.isGif = this.video.posterType === 's';
    this.noMotion = this.isAndroid && (!this.isBox || this.isLowBox);
    this.vanish = this.isGif || this.video.vanish;
  },
  deactivated: function deactivated() {
    if (this.isExpanded && !this.isGif) {
      this.handleShrink(null);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"videoContent":"video-content__2kFLL","mainWrapper":"main-wrapper__2hJqe","videoWrapper":"video-wrapper__1rg8m","posterWrapper":"poster-wrapper__2Wa3O","poster":"poster__ASdpD","hidden":"hidden__24mKX","player":"player__Zc4Ib","playerMask":"player-mask__3mxSC","playerMaskLight":"player-mask-light__1PQ2j","playerCloseIcon":"player-close-icon__39BPQ","whiteClose":"white-close__cg-Or","logoWrapper":"logo-wrapper__3IlKq","logo":"logo__1wFpl","smallLogo":"small-logo__1ZSTy","rightWrapper":"right-wrapper__2gkhe","areaBelow":"area-below__kC3_P","slotAbs":"slot-abs__3j_3S","slotWrapper":"slot-wrapper__2NvKy","rightText":"right-text__29b8Z","rightTextDisappear":"right-text-disappear__zOmBW","noMotion":"no-motion__Gp5lc","sPosterWrapper":"s-poster-wrapper__1K6AB","bPosterWrapper":"b-poster-wrapper__2ql3y"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"video": {"type": Object,"default": function () { return {}; }},"text": {"type": Object,"default": function () { return {}; }}};
            obj.components = {"c-line": require("../Line/Line"),"c-link": require("../Link/Link"),"c-icon": require("../Icon/Icon"),"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-img": require("../Image/Image"),"c-timespan": require("../Timespan/Timespan"),"c-text-line": require("../TextLine/TextLine"),"c-touchable-stop": require("../TouchableFeedback/TouchableStop"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
            obj.data = function () {
                return {"isExpanded": false,"isPlayEnd": false,"isPlayFront": false,"width": 0,"isAndroid": false,"isGif": false,"isLowBox": false,"noMotion": false,"vanish": false};
            };
            var originCreated = obj.created;
            obj.created = function () {
                var self = this;
                self.$super = {
                    render: function () {
                        return _module1.exports.render.apply(self, arguments);
                    }
                };

                
                        Object.keys(cssModules).forEach(function (key) {
                            self[key] = cssModules[key];
                        });
                    

                originCreated && originCreated.call(self);
            };
            
            

            module.exports = obj;

            
        });
    