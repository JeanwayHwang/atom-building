
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-link',{attrs:{"url":_vm.url,"params":_vm.params,"aria-label":(_vm.audioText + ".时长" + _vm.transTime)}},[_c('div',{ref:"audioContainer",staticClass:"c-audio-container c-gap-left-small",style:([
            {
                width: _vm.audioWidth,
                backgroundColor: _vm.active ? _vm.activeBackgroundColor : _vm.backgroundColor,
                border: _vm.active ? '1px solid ' + _vm.activeBackgroundColor : '1px solid ' + _vm.backgroundColor
            },
            _vm.border
                ? {
                    border: _vm.border
                }
                : {},
            _vm.isOpacity
                ? {
                    backgroundColor: _vm.active ? 'rgba(0,0,0,.08)' : 'rgba(255,255,255,.2)',
                    border: null
                }
                : {}
        ]),attrs:{"rl-type":"stop"},on:{"touchstart":_vm.handleTouchStart,"touchend":_vm.handleTouchEnd,"click":_vm.play}},[_c('div',{staticClass:"c-audio-inner c-gap-left",style:({
                paddingRight: _vm.setPadding
            })},[_c('div',{staticClass:"c-audio-playing-wrap"},[_c('div',{class:[
                        _vm.isOpacity ? 'c-audio-opacity' : '',
                        _vm.isPlaying ? 'c-audio-playing' : ''
                    ]},[_c('svg',{staticClass:"c-audio-svg",attrs:{"width":"16px","height":"16px","viewBox":"0 0 48 48","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"fill":_vm.iconColor,"transform":"\n                                translate(24.742540, 24.002542)\n                                rotate(45.000000)\n                                translate(-24.742540, -24.002542)\n                                translate(10.242540, 10.002542)\n                            ","fill-rule":"nonzero"}},[_c('path',{staticClass:"c-audio-line0",attrs:{"id":"Oval-Copy-3","d":"\n                                    M30.0146615,27.5146615,\n                                    C30.0146615,28.3430887,\n                                    29.3430887,29.0146615,\n                                    28.5146615,29.0146615,\n                                    C27.6862344,29.0146615,\n                                    27.0146615,28.3430887,\n                                    27.0146615,27.5146615,\n                                    C27.0146615,13.4853155,\n                                    14.8874597,2.34279293,\n                                    0.157207067,2.34279293,\n                                    C-0.671220057,2.34279293,\n                                    -1.34279293,1.67122006,\n                                    -1.34279293,0.842792933,\n                                    C-1.34279293,0.0143658079,\n                                    -0.671220057,-0.657207067,\n                                    0.157207067,-0.657207067,\n                                    C16.4902523,-0.657207067,\n                                    30.0146615,11.7690753,\n                                    30.0146615,27.5146615,\n                                    Z\n                                "}}),_vm._v(" "),_c('path',{staticClass:"c-audio-line1",attrs:{"id":"Oval-Copy-2","d":"\n                                    M20.3772222,27.420545,\n                                    C20.3772222,28.2489721,\n                                    19.7056493,28.920545,\n                                    18.8772222,28.920545,\n                                    C18.048795,28.920545,\n                                    17.3772222,28.2489721,\n                                    17.3772222,27.420545,\n                                    C17.3772222,18.4517081,\n                                    10.1065434,11.1810294,\n                                    1.13770656,11.1810294,\n                                    C0.309279434,11.1810294,\n                                    -0.362293441,10.5094565,\n                                    -0.362293441,9.68102935,\n                                    C-0.362293441,8.85260223,\n                                    0.309279434,8.18102935,\n                                    1.13770656,8.18102935,\n                                    C11.7633976,8.18102935,\n                                    20.3772222,16.7948539,\n                                    20.3772222,27.420545,\n                                    Z\n                                "}}),_vm._v(" "),_c('path',{attrs:{"id":"Oval-Copy","d":"\n                                    M11.5925025,27.6470131,\n                                    C11.5925025,28.4754402,\n                                    10.9209296,29.1470131,\n                                    10.0925025,29.1470131,\n                                    C9.26407539,29.1470131,\n                                    8.59250251,28.4754402,\n                                    8.59250251,27.6470131,\n                                    C8.59250251,23.5768082,\n                                    5.29294955,20.2772553,\n                                    1.22274471,20.2772553,\n                                    C0.394317584,20.2772553,\n                                    -0.277255291,19.6056824,\n                                    -0.277255291,18.7772553,\n                                    C-0.277255291,17.9488282,\n                                    0.394317584,17.2772553,\n                                    1.22274471,17.2772553,\n                                    C6.9498038,17.2772553,\n                                    11.5925025,21.919954,\n                                    11.5925025,27.6470131,\n                                    Z\n                                "}})])])])]),_vm._v(" "),_c('span',{staticClass:"c-audio-clamp-inner c-gap-left-middle c-color-link c-font-normal",class:_vm.isOpacity ? 'c-audio-opacity' : '',style:({
                    color: _vm.textColor
                })},[_vm._v("\n                "+_vm._s(_vm.audioText)+"\n            ")]),_vm._v(" "),(_vm.showTime && _vm.time)?(_c('span',{staticClass:"c-audio-time c-gap-left c-color-gray c-font-small",class:_vm.isOpacity ? 'c-audio-opacity' : '',style:({
                    color: _vm.timeColor
                })},[_vm._v("\n                "+_vm._s(_vm.transTime)+"\n            ")])):(_vm._e())]),_vm._v(" "),(!_vm.isOpacity)?(_c('div',{staticClass:"c-audio-arrow-rectangle",style:([
                {
                    backgroundColor: _vm.active ? _vm.activeBackgroundColor : _vm.backgroundColor,
                    borderLeft: _vm.border,
                    borderBottom: _vm.border
                }
            ])})):(_c('div',{staticClass:"c-audio-arrow-triangle",style:({
                'border-right': _vm.active ? '5px solid rgba(0,0,0,.08)' : '5px solid rgba(255,255,255,.2)'
            })})),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.isProgress)?(_c('div',{directives:[{name:"show",rawName:"a-show",value:(_vm.progressWidth),expression:"progressWidth"}],staticClass:"c-audio-arrow-triangle",style:({
                    'border-right': '5px solid ' + _vm.progressColor
                })})):(_vm._e())]),_vm._v(" "),(_vm.isProgress)?(_c('div',{staticClass:"c-audio-progress-wrapper"},[_c('div',{staticClass:"c-audio-progress",style:({
                    width: _vm.progressWidth
                })})])):(_vm._e())],1)])},
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

var _audioPlayer = _interopRequireDefault(require("@baidu/audio-player"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  mounted: function mounted() {
    var vm = this; // 如果是直接跳转的，就不初始化啦

    if (vm.url || vm.params) {
      return;
    }

    if (vm.audioUrl && vm.time) {
      vm.audioPlayer(); // 六合,情景页暂停播放

      vm.$root.$on('detach', function () {
        vm.playerObj && vm.playerObj.pause();
      });
    }
  },
  computed: {
    // 将秒数转换为分钟显示
    transTime: function transTime() {
      if (!this.mTime || !parseInt(this.mTime, 10)) {
        return;
      }

      this.mTime = parseInt(this.mTime, 10);
      var minute = parseInt(this.mTime / 60, 10);
      var second = this.mTime % 60;
      minute = minute < 10 ? '0' + minute : minute;
      second = second < 10 ? '0' + second : second;
      return minute + ':' + second;
    },
    // 最终显示的文案
    audioText: function audioText() {
      return this.displayText = this.mCustomText || this.displayText || this.pauseText;
    },
    // 根据是否显示时间设置右侧的 padding
    setPadding: function setPadding() {
      if (!this.mTime) {
        this.mShowTime = false;
      }

      return this.mShowTime ? '50px' : '10px';
    }
  },

  /**
   * 销毁
   */
  beforeDestroy: function beforeDestroy() {
    this.playerObj.destroy();
    this.playerObj = null;
  },
  methods: {
    /**
     * 初始化 audio player
     */
    audioPlayer: function audioPlayer() {
      var vm = this;
      vm.playerObj = new _audioPlayer["default"]();
      vm.playerObj.playList = [{
        audioUrl: vm.audioUrl
      }]; // 状态改变监听

      vm.playerObj.on('statusChange', function (e) {
        vm.status = e.status; // 播放

        if (e.status === 'PLAYING') {
          vm.mCustomText = '';
          vm.displayText = vm.playText;
          vm.audioWidth = vm.$refs.audioContainer.offsetWidth + 'px';
          vm.playAnimate();
        } // 持续播放时的轮询时间更新
        else if (e.status === 'TIME_UPDATE') {
            if (vm.isProgress) {
              var time = parseInt(vm.mTime, 10);
              var rate = vm.playerObj.currentTime / time;
              vm.progressWidth = vm.$refs.audioContainer.offsetWidth * rate + 'px';
            }
          } // 暂停
          else if (e.status === 'PAUSE') {
              vm.displayText = vm.continueText;
              vm.playStop();
            } // 结束
            else if (e.status === 'ENDED' || vm.playerObj.currentTime >= vm.time) {
                vm.displayText = vm.customText || vm.pauseText;
                vm.playStop();

                if (vm.isProgress) {
                  vm.progressWidth = 0;
                }

                return;
              }
      });
    },

    /**
     * 播放
     */
    play: function play() {
      var vm = this;

      if (!vm.audioUrl) {
        return;
      } // 如果需要进度条的话，调用 player 的方法


      if (vm.isProgress) {
        vm.playerObj.toggle();
      } else {
        vm.playerObj.play();

        if (vm.status === 'PLAYING' || vm.status === 'TIME_UPDATE') {
          vm.playerObj.currentTime = 0;
          vm.playerObj.pause();
        } else if (vm.status === 'PAUSE' || vm.status === 'ENDED') {
          vm.playerObj.play();
        }
      }
      /**
       * 播放状态更新事件
       *
       * @event play
       * @property {object} param1 事件对象
       * @property {string} param1.status 音频的状态, PLAYING (正在播放)，PAUSE (暂停)，ENDED (播放结束)，TIME_UPDATE (时间更新)
       */


      vm.$emit('play', {
        status: vm.status || 'PLAYING'
      });
    },
    playAnimate: function playAnimate() {
      this.isPlaying = true;
    },
    playStop: function playStop() {
      this.isPlaying = false;
    },
    handleTouchStart: function handleTouchStart(e) {
      this.active = true;
    },
    handleTouchEnd: function handleTouchEnd(e) {
      this.active = false;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"audioUrl": {"type": String},"isOpacity": {"type": Boolean,"default": false},"isProgress": {"type": Boolean,"default": true},"time": {"type": [Number,String]},"showTime": {"type": Boolean,"default": true},"customText": {"type": String},"url": {"type": String},"params": {"type": Object},"iconColor": {"type": String},"textColor": {"type": String},"timeColor": {"type": String},"backgroundColor": {"type": String,"default": "#f5f5f5"},"activeBackgroundColor": {"type": String,"default": "#ebebeb"},"progressColor": {"type": String,"default": "rgba(0,0,0,.03)"},"border": {"type": String}};
            obj.components = {"c-row": require("../Row/Row"),"c-icon": require("../Icon/Icon"),"c-link": require("../Link/Link")};

            
            

            


            
            obj.data = function () {
                return {"playerObj": null,"isPlaying": false,"audioWidth": "auto","status": "","playText": "正在播放","pauseText": "点击播放","continueText": "继续播放","mCustomText": ((this["customText"])?(this["customText"]):("")),"displayText": "","mTime": ((this["time"])?(this["time"]):("")),"mShowTime": ((this["showTime"])?(this["showTime"]):("")),"active": false,"progressing": false,"progressWidth": 0};
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
            
            obj._scopeId = "data-a-6952f740";

            module.exports = obj;

            
        });
    