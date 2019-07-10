
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('section',{ref:"carousel",staticClass:"carousel__1sKIw",class:[
            _vm.imgType !== 'auto'
                ? 'c-img-' + _vm.imgType
                : ''
        ],style:([
            _vm.imgType !== 'auto'
                ? {
                    height: '0'
                }
                : {}
        ]),attrs:{"data-module":"c-cs"},on:{"touchstart":_vm.handleTouchStart,"touchmove":_vm.handleTouchMove,"touchend":_vm.handleTouchEnd}},[_c('div',{ref:"carouselLayout",staticClass:"carousel-layout__29t3h",class:[
                _vm.isTransition
                    ? _vm.$style.carouselLayoutTransition
                    : ''
            ],style:([
                {
                    '-webkit-transform': 'translateX(' + _vm.disX + 'px) scale(1)',
                    'transform': 'translateX(' + _vm.disX + 'px) scale(1)'
                },
                _vm.alignItems
                    ? {
                        'align-items': _vm.alignItems
                    }
                    : {},
                _vm.height
                    ? {
                        height: _vm.height
                    }
                    : {}
            ]),attrs:{"role":"listbox"}},_vm._l((_vm.listData),function(item,index){return _c('c-link',{key:index,staticClass:"carousel-img-item__2vbaA",style:([
                    {
                        'background-size': _vm.backgroundSize
                    },
                    _vm.height
                        ? {
                            'background-image': 'url(' + item.imgSrc + ')'
                        }
                        : {}
                ]),attrs:{"url":item.url,"params":item.params,"role":"option"},on:{"click":function($event){_vm.handleImgItemClick(
                    {
                        item: item,
                        index: index
                    },
                    $event
                )}}},[_c('c-img',{staticClass:"img__3RaQf c-gap-top-zero c-gap-bottom-zero",attrs:{"src":_vm.height
                        ? ''
                        : item.imgSrc,"type":_vm.imgType,"border-radius":{
                        tl: false,
                        tr: false,
                        bl: false,
                        br: false
                    },"is-show-default-image":false}})],1)})),_vm._v(" "),_c('div',{staticClass:"bottom-layout__3Dl1J",class:[
                _vm.title
                    ? _vm.$style.bottomLayoutShadow
                    : ''
            ]},[_c('div',{staticClass:"bottom-layout-wrapper__3L22A",class:[
                    _vm.title ? '' : _vm.$style.bottomLayoutWrapperCenter
                ]},[(_vm.title)?(_c('div',{ref:"title",staticClass:"title__2UITm c-line-clamp1",style:({
                        'opacity': 1,
                        'padding-right': 17 + _vm.num * 6 + (_vm.num - 1) * 5 + 'px'
                    })},[_vm._v("\n                    "+_vm._s(_vm.title)+"\n                ")])):(_vm._e()),_vm._v(" "),(_vm.showIndicator && _vm.num <= 5 && !_vm.dotIndicatorOpt.outside)?(_c('c-indicator',{staticClass:"indicator__2MqyG",class:[
                        _vm.title
                            ? ''
                            : _vm.$style.indicatorNoTitle,
                        _vm.indicatorAlign === 'right'
                            ? _vm.$style.indicatorRight
                            : ''
                    ],attrs:{"color":_vm.dotIndicatorOpt.color,"selected-color":_vm.dotIndicatorOpt.selectedColor,"shadow":_vm.dotIndicatorOpt.shadow,"length":_vm.num,"cur-index":_vm.indicatorActiveIndex - 1}})):(_vm._e())],1)]),_vm._v(" "),((!_vm.title && _vm.num > 5) || _vm.numberIndicatorOpt.show)?(_c('c-image-mask',{staticClass:"indicator-pill__14vy9",style:({
                top: _vm.numberIndicatorOpt.top,
                bottom: _vm.numberIndicatorOpt.bottom,
                left: _vm.numberIndicatorOpt.left,
                right: _vm.numberIndicatorOpt.right
            }),attrs:{"text":_vm.indicatorActiveIndex + '/' + _vm.num,"type":"pills"}})):(_vm._e()),_vm._v(" "),_vm._t("mask")],2),_vm._v(" "),(_vm.dotIndicatorOpt.outside)?(_c('div',{staticClass:"bottom-row__16K49"},[_c('c-indicator',{attrs:{"length":_vm.num,"cur-index":_vm.indicatorActiveIndex - 1,"color":_vm.dotIndicatorOpt.color,"selected-color":_vm.dotIndicatorOpt.selectedColor,"shadow":_vm.dotIndicatorOpt.shadow}})],1)):(_vm._e())])},
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

var _domUtil = require("../util/domUtil");

// dom 操作
var _default = {
  mounted: function mounted() {
    this.halfScreenWidth = (0, _domUtil.getScreenWidth)() / 2; // 初始化

    this.init();
    this.resume();
  },
  activated: function activated() {
    this.resume();
  },
  deactivated: function deactivated() {
    this.stop();
  },
  beforeDestory: function beforeDestory() {
    this.stop();
  },
  methods: {
    resume: function resume() {
      // 自动轮播
      this.setAutoPlayInterval(); // 横竖屏变化监听
      // 媒体查询 js api；参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia, https://aotu.io/notes/2017/01/31/detect-orientation/index.html, https://caniuse.com/#search=matchmedia

      this.mediaQueryList = window.matchMedia('(orientation: portrait)');
      this.mediaQueryList.addListener(this.mediaQueryOrientationListener);
    },
    stop: function stop() {
      // 移除自动轮播
      this.clearAutoPlayInterval(); // 移除横竖屏变化监听

      this.mediaQueryList.removeListener(this.mediaQueryOrientationListener);
    },
    // 横竖屏监听
    mediaQueryOrientationListener: function mediaQueryOrientationListener(mediaQueryList) {
      var _this = this;

      if (mediaQueryList.matches) {// 竖屏
      } else {} // 横屏
        // 重新计算横滑的宽度；这里的延迟是为了计算出准确的翻转手机后的 width
        // 这里有测试 vm.$nextTick 和 setTimeout(fn,0) 都会有问题，所以加了延时和动效


      setTimeout(function () {
        _this.isTransition = true;
        _this.width = _this.$refs.carousel.offsetWidth;
        _this.disX = -_this.activeIndex * _this.width;
      }, 500);
    },
    // 初始化
    init: function init() {
      // 深复制数组
      this.listData = JSON.parse(JSON.stringify(this.list)); // 计算原始长度

      if (!this.originNum) {
        // 列表类型
        if (this.list) {
          this.originNum = this.list.length;
        }
      } // 计算横滑的宽度


      this.width = this.$refs.carousel.offsetWidth; // 如果需要循环

      if (this.loop) {
        // 当 listData 存在时并且数据大于 0 时，并且长度和原始长度相同时；将头和尾重新拼接
        if (this.listData && this.listData.length > 0 && this.listData.length === this.originNum) {
          var firstItem = Object.assign(this.listData[0]);
          var lastItem = Object.assign(this.listData[this.num - 1]);
          this.listData.push(firstItem);
          this.listData.unshift(lastItem);
        } // 设置初始偏移距离


        this.disX = -this.width; // 修改索引为默认索引再 + 1

        this.activeIndex = 1; // 设置指示器的索引

        this.indicatorActiveIndex = 1;
      } else {
        // 设置初始偏移距离
        this.disX = 0; // 修改索引为默认索引

        this.activeIndex = 0; // 设置指示器的索引；因为不循环头和尾就没有多出来的一个元素了，所以 indicatorActiveIndex 需要比 activeIndex 大 1

        this.indicatorActiveIndex = 1;
      }
    },
    handleTouchStart: function handleTouchStart(e) {
      // 滑动保护
      if (this.slideProtect) {
        return;
      } // 清除自动播放


      this.clearAutoPlayInterval();
      e = e || event; // tounches 类数组，等于1时表示此时有只有一只手指在触摸屏幕

      if (e.changedTouches.length !== 1) {
        return;
      }

      this.touchStartTime = new Date().getTime(); // 注意 timeout

      if (this.fixLoopTimeout) {
        clearTimeout(this.fixLoopTimeout);
        this.fixLoopTimeout = null;
      } // 记录开始位置


      this.startX = e.touches[0].clientX;
      this.startY = e.touches[0].clientY;
    },
    handleTouchMove: function handleTouchMove(e) {
      // 滑动保护
      if (this.slideProtect) {
        e.cancelable && e.preventDefault();
        e.stopPropagation();
        return true;
      }

      e = e || event; // tounches 类数组，等于1时表示此时有只有一只手指在触摸屏幕

      if (e.changedTouches.length !== 1) {
        return true;
      } // 滑动时距离浏览器左侧实时距离


      this.moveX = e.touches[0].clientX;
      this.moveY = e.touches[0].clientY; // 起始位置减去 实时的滑动的距离，得到手指实时偏移距离

      var disX = this.moveX - this.startX;
      var disY = this.moveY - this.startY; // 增加不循环时对手势的判断

      if (this.noLoopTouchJudgement(disX)) {
        return true;
      } // 每次滑动的时候都计算方向


      var direction = this.getDirection(disX, disY); // 水平滑动时阻止点击事件透传

      if (direction === 3 || direction === 4) {
        e.cancelable && e.preventDefault();
        e.stopPropagation(); // 水平才滑动

        if (this.isTransition) {
          this.isTransition = false;
        }

        this.disX = disX - this.activeIndex * this.width;
      }

      return true;
    },
    handleTouchEnd: function handleTouchEnd(e) {
      var _this2 = this;

      // 滑动保护
      if (this.slideProtect) {
        return;
      } // 设置自动播放


      this.setAutoPlayInterval();
      this.isTransition = true;
      e = e || event; // tounches 类数组，等于1时表示此时有只有一只手指在触摸屏幕

      if (e.changedTouches.length !== 1) {
        return;
      } // 计算出持续时间


      this.touchEndTime = new Date().getTime();
      this.touchDuration = this.touchEndTime - this.touchStartTime;
      this.endX = e.changedTouches[0].clientX;
      this.endY = e.changedTouches[0].clientY;
      var disX = this.endX - this.startX;
      var disY = this.endY - this.startY; // 增加不循环时对手势的判断

      if (this.noLoopTouchJudgement(disX)) {
        return true;
      }

      this.disX = disX;
      this.disY = disY;
      this.distance = disX; // 计算出速度

      this.speed = Math.abs(this.disX / this.touchDuration); // 速度达到标准直接滑动

      if (this.speed >= this.speedThreshold) {
        this.move();
      } // 速度没达到标准需要滑动距离大于屏幕宽度的一半才能滑动
      else if (Math.abs(this.disX) > (0, _domUtil.getScreenWidth)() / 2) {
          this.move();
        }

      this.disX = -this.activeIndex * this.width; // 打开动画保护

      this.slideProtect = true;

      if (this.slideProtectTimeout) {
        clearTimeout(this.slideProtectTimeout);
        this.slideProtectTimeout = null;
      } // 延迟动画时间清除滑动保护


      this.slideProtectTimeout = setTimeout(function () {
        _this2.slideProtect = false;
      }, this.animationTime);
    },
    // 移动
    move: function move() {
      // 往左移
      if (this.disX > 0) {
        this.activeIndex -= 1; // 如果等于0 并且 是循环

        if (this.activeIndex === 0 && this.loop) {
          // 设置指示器的索引为总数
          this.indicatorActiveIndex = this.num + this.activeIndex;
        } // 如果不等于0
        else {
            // 如果循环
            if (this.loop) {
              // 设置指示器的索引为当前索引
              this.indicatorActiveIndex = this.activeIndex;
            } // 如果不循环
            else {
                // 设置指示器的索引为当前索引+1
                this.indicatorActiveIndex = this.activeIndex + 1;
              }
          }
      } // 往右移
      else {
          this.activeIndex += 1; // 如果超出最大数量 并且 是循环

          if (this.activeIndex === this.num + 1 && this.loop) {
            // 设置指示器的索引
            this.indicatorActiveIndex = this.activeIndex - this.num;
          } else {
            // 如果循环
            if (this.loop) {
              // 设置指示器的索引
              this.indicatorActiveIndex = this.activeIndex;
            } // 如果不循环
            else {
                // 设置指示器的索引为当前索引+1
                this.indicatorActiveIndex = this.activeIndex + 1;
              }
          }
        } // 触发事件


      this.emitChange();
    },
    // 不循环时对手势的判断
    noLoopTouchJudgement: function noLoopTouchJudgement(disX) {
      // 如果不循环
      if (!this.loop) {
        // 如果 dix 为负（代表往右划）并且 当前划动项的索引+1后与原始长度相等
        if (disX < 0 && this.activeIndex + 1 === this.originNum) {
          // 直接返回
          return true;
        } // 如果 dix 为正（代表往左划）并且 当前划动项的索引为0


        if (disX > 0 && this.activeIndex === 0) {
          // 直接返回
          return true;
        }
      } // 不直接 return


      return false;
    },
    // 根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    getDirection: function getDirection(angx, angy) {
      var result = 0; // 如果滑动距离太短

      if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
        return result;
      }

      var angle = this.getAngle(angx, angy);

      if (angle >= -135 && angle <= -45) {
        result = 1;
      } else if (angle > 45 && angle < 135) {
        result = 2;
      } else if (angle >= 135 && angle <= 180 || angle >= -180 && angle < -135) {
        result = 3;
      } else if (angle >= -45 && angle <= 45) {
        result = 4;
      }

      return result;
    },
    // 获得角度
    getAngle: function getAngle(angx, angy) {
      return Math.atan2(angy, angx) * 180 / Math.PI;
    },
    // 修复循环
    fixLoop: function fixLoop() {
      var _this3 = this;

      // 第 0 个，即为在左侧对最后一个的补全
      if (this.activeIndex === 0) {
        // 动画时间过后
        this.fixLoopTimeout = setTimeout(function () {
          // 关闭动画
          _this3.isTransition = false; // 设置 activeIndex 为实际的 index

          _this3.activeIndex = _this3.num; // 改变 translate 的距离

          _this3.disX = -_this3.activeIndex * _this3.width;
        }, this.animationTime);
      } // 第 num + 1 个，即为在右侧对第一个的补全
      else if (this.activeIndex === this.num + 1) {
          // 动画时间过后
          setTimeout(function () {
            // 关闭动画
            _this3.isTransition = false; // 设置 activeIndex 为实际的 index

            _this3.activeIndex = _this3.activeIndex - _this3.num; // 改变 translate 的距离

            _this3.disX = -_this3.activeIndex * _this3.width;
          }, this.animationTime);
        }
    },
    // 图片项点击事件
    handleImgItemClick: function handleImgItemClick(obj, e) {
      /**
       * 点击图片项时候触发
       *
       * @event imgitemclick
       * @property {object} param1 选中信息
       * @property {object} param1.item 为选中的图片项的参数，同 `list`
       * @property {number} param1.index 选中的图片项的索引
       * @property {Event} param2 透传点击事件对象
       */
      this.$emit('imgitemclick', obj, e);
    },
    // 设置自动播放 interval
    setAutoPlayInterval: function setAutoPlayInterval() {
      var _this4 = this;

      // 如果不是自动播放
      if (!this.autoplay) {
        return;
      } // 如果不是循环


      if (!this.loop) {
        return;
      } // 在设置前要清空


      if (this.autoplayData.interval) {
        clearInterval(this.autoplayData.interval);
        this.autoplayData.interval = null;
      } // 设置轮询器


      this.autoplayData.interval = setInterval(function () {
        _this4.activeIndex++; // 如果超出最大数量

        if (_this4.activeIndex === _this4.num + 1) {
          // 设置指示器的索引
          _this4.indicatorActiveIndex = _this4.activeIndex - _this4.num;
        } else {
          // 设置指示器的索引
          _this4.indicatorActiveIndex = _this4.activeIndex;
        } // 开启动效


        _this4.isTransition = true; // 设置 X

        _this4.disX = -_this4.activeIndex * _this4.width; // 触发事件

        _this4.emitChange();
      }, this.autoplayData.delay);
    },
    // 清除自动播放 interval
    clearAutoPlayInterval: function clearAutoPlayInterval() {
      if (this.autoplayData.interval) {
        clearInterval(this.autoplayData.interval);
        this.autoplayData.interval = null;
      }
    },
    // 触发改变事件
    emitChange: function emitChange() {
      var index = this.activeIndex - 1;

      if (index < 0) {
        index = this.originNum + index;
      } else if (index >= this.originNum) {
        index = this.originNum - index;
      }
      /**
       * 轮播改变的时候触发
       *
       * @event change
       * @property {object} param1
       * @property {Event} param1.current 当前轮播项的索引
       */


      this.$emit('change', {
        current: index
      });
    }
  },
  computed: {
    num: function num() {
      // 如果已经有了原始 num，直接使用原始 num
      if (this.originNum) {
        return this.originNum;
      } // 如果还没有，则进行计算


      var num = 0;

      if (this.$slots["default"]) {
        var vnodes = this.$slots["default"];
        num = vnodes.length;
      } else if (this.list) {
        num = this.list.length;
      }

      return num;
    }
  },
  watch: {
    activeIndex: function activeIndex(newVal, oldVal) {
      // 修复循环
      this.loop && this.fixLoop();
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"carousel":"carousel__1sKIw","carouselLayout":"carousel-layout__29t3h","carouselImgItem":"carousel-img-item__2vbaA","img":"img__3RaQf","carouselLayoutTransition":"carousel-layout-transition__29zO6","bottomLayout":"bottom-layout__3Dl1J","bottomLayoutShadow":"bottom-layout-shadow__3LVta","bottomLayoutWrapper":"bottom-layout-wrapper__3L22A","bottomLayoutWrapperCenter":"bottom-layout-wrapper-center__2AJY0","title":"title__2UITm","indicator":"indicator__2MqyG","indicatorNoTitle":"indicator-no-title__3EBA1","indicatorRight":"indicator-right__2Pim_","indicatorPill":"indicator-pill__14vy9","indicatorItemSelected":"indicator-item-selected__A2sFr","bottomRow":"bottom-row__16K49"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"list": Array,"title": String,"animationTime": {"type": Number,"default": 300},"autoplay": [Object,Boolean],"loop": {"type": Boolean,"default": true},"backgroundSize": {"type": String,"default": "cover"},"imgType": {"type": String,"default": "auto"},"indicatorAlign": {"type": String,"default": "center"},"showIndicator": {"type": Boolean,"default": true},"syncRenderAll": {"type": Boolean,"default": false},"alignItems": String,"height": {"type": String},"numberIndicatorOpt": {"type": Object,"default": function () { return {"right": ".03rem","bottom": ".05rem"}; }},"dotIndicatorOpt": {"type": Object,"default": function () { return {"color": "#c8c8c8","selectedColor": "#fff"}; }},"speedThreshold": {"type": Number,"default": 0.23}};
            obj.components = {"c-link": require("../Link/Link"),"c-img": require("../Image/Image"),"c-image-mask": require("../Image/ImageMask"),"c-indicator": require("./Indicator")};

            
            

            


            
            obj.data = function () {
                return {"listData": ((this["syncRenderAll"])?(this["list"]):((((this["list"]&&this["list"][0]))?([this["list"][0]]):([])))),"activeIndex": 1,"indicatorActiveIndex": 1,"originNum": 0,"isTransition": false,"width": 0,"startX": 0,"startY": 0,"moveX": 0,"moveY": 0,"disX": 0,"disY": 0,"slideProtect": false,"slideProtectTimeout": null,"fixLoopTimeout": null,"autoplayData": {"interval": null,"delay": (((this["autoplay"]&&this["autoplay"]["delay"]))?(this["autoplay"]["delay"]):(2500))},"touchStartTime": 0,"touchEndTime": 0,"touchDuration": 0,"speed": 0,"distance": 0,"halfScreenWidth": 0};
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
    