
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content-wrapper__16jCG"},[_c('div',{ref:"content",staticClass:"content__16FD_",style:([
            {
                height: _vm.contentHeight === 'auto'
                    ? _vm.contentHeight
                    : _vm.contentHeight + 'px'
            }
        ]),on:{"transitionend":_vm.handleContentTransitionEnd}},[_vm._l((_vm.slotsCount),function(i,index){return [(_vm.firstSelectedIndex === index)?(_c('div',{key:index,ref:"contentItem",refInFor:true,staticClass:"content-item__3npQF"},[_c('div',{directives:[{name:"show",rawName:"a-show",value:(_vm.list[index] && _vm.list[index].loading),expression:"list[index] && list[index].loading"}],style:({
                        'padding-top': _vm.loadingOpts.paddingTop
                    })},[_c('c-loading')],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"a-show",value:(!(_vm.list[index] && _vm.list[index].loading)),expression:"!(list[index] && list[index].loading)"}]},[_vm._t('contentItem' + index)],2)])):((_vm.mounted)?(_c('div',{key:index,ref:"contentItem",refInFor:true,staticClass:"content-item__3npQF",style:([
                    {
                        'position': 'absolute',
                        'top': 0,
                        'left': 0,
                        'opacity': 0,
                        'z-index': -1
                    }
                ])},[(_vm.list[index] && _vm.list[index].loading)?(_c('div',{style:({
                        'padding-top': _vm.loadingOpts.paddingTop
                    })},[_c('c-loading')],1)):(_c('div',[_vm._t('contentItem' + index)],2))])):(_vm._e()))]})],2)])},
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

var _deviceUtil = require("../util/deviceUtil");

var _orientationMixin = _interopRequireDefault(require("../util/orientationMixin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// dom 操作
// 设备信息
var _default = {
  mixins: [_orientationMixin["default"]],
  // render
  render: function render() {
    var _this = this;

    var vnodes = this.$slots["default"];

    if (vnodes && vnodes.length) {
      vnodes.forEach(function (vnode, index) {
        // 放入指定 slot
        _this.$slots['contentItem' + index] = vnode;
      }); // 设置 slots 长度

      this.slotsCount = vnodes.length;
    }

    return this.$super.render();
  },
  mounted: function mounted() {
    // 设置 mounted 标志位
    this.mounted = true;
    this.init();
  },
  methods: {
    init: function init() {
      var _this2 = this;

      // 备份高度动效
      this.transitionOpts.heightTransitionBak = this.transitionOpts.heightTransition; // 动效降级

      if ((0, _deviceUtil.isIosSmall)() || (0, _deviceUtil.isLowChrome)()) {
        // 高度动效降级
        this.transitionOpts.heightTransition = '';
      } // 在 mounted 为 true 之后重新渲染，完成之后，再去计算高度


      this.$nextTick(function () {
        // 为了避免外部调用 init() 方法时一直给数组里 push 东西，这里每次调用 init 的时候需要清空一下
        _this2.contentItemList = []; // 遍历内容项

        for (var i = 0; i < _this2.$refs.contentItem.length; i++) {
          // 这里可以初始化一些值
          _this2.contentItemList.push({});
        } // 如果首屏渲染的不是第一个 slot


        if (_this2.firstSelectedIndex > 0) {
          // 手动调整 $refs 数组排序为正确顺序
          var item = _this2.$refs.contentItem[0];

          _this2.$refs.contentItem.splice(0, 1);

          _this2.$refs.contentItem.splice(_this2.firstSelectedIndex, 0, item);
        }

        _this2.attach(); // 如果首屏是 -1，并且竖直方向打开动效开关


        if (_this2.selectedIndex === -1 && _this2.verticalTransition) {
          // 手动把每一项的 left 移动到左边；避免 UIWebview 上滑动不流畅的问题
          _this2.$refs.contentItem.forEach(function (contentItem, index) {
            contentItem.style.left = -_this2.screenWidth + 'px';
          });
        }
      });
    },
    attach: function attach() {
      // 获取屏幕宽高
      this.screenWidth = (0, _domUtil.getScreenWidth)(this);
      this.screenHeight = (0, _domUtil.getScreenHeight)(); // 计算所有内容 item 的高度

      this.calculateAllContentItemHeight();
    },
    mediaQueryOrientationListenerMixin: function mediaQueryOrientationListenerMixin(mediaQueryList) {
      var _this3 = this;

      // 重新计算横滑的宽高；这里的延迟是为了计算出准确的翻转手机后的 width、height
      setTimeout(function () {
        // 获取屏幕宽高
        _this3.screenWidth = (0, _domUtil.getScreenWidth)(_this3);
        _this3.screenHeight = (0, _domUtil.getScreenHeight)();

        _this3.calculateAllContentItemHeight();
      }, 500);
    },
    // 计算所有内容 item 的高度
    calculateAllContentItemHeight: function calculateAllContentItemHeight() {
      // 遍历内容项
      for (var i = 0; i < this.$refs.contentItem.length; i++) {
        // 计算内容项的高度 content item height
        var contentItemHeight = this.$refs.contentItem[i].offsetHeight;
        this.contentItemList[i].height = contentItemHeight;
      }
    },
    // 重置所有 content item 位置
    resetAllContentItemPosition: function resetAllContentItemPosition() {
      var _this4 = this;

      // 遍历所有 content item
      this.contentItemList.forEach(function (contentItem, contentItemIndex) {
        // 如果位置改变了，重置位置
        if (contentItem.positionChange === undefined || contentItem.positionChange) {
          // 获得 dom
          var domContentItem = _this4.$refs.contentItem[contentItemIndex]; // 清除动画

          (0, _domUtil.clearDomTransition)(domContentItem);
          domContentItem.style.top = 0;
          domContentItem.style.left = -_this4.screenWidth + 'px';
          domContentItem.style.opacity = 0;
          domContentItem.style.zIndex = -1; // 清空标志位

          contentItem.positionChange = false;
        }
      });
    },
    // 判断滑动方向
    judgeSlideDirection: function judgeSlideDirection(newVal, oldVal) {
      // 判断滑动方向
      // 下滑
      if (oldVal === -1 && newVal !== -1) {
        // 如果开启上下滑开关
        if (this.verticalTransition) {
          this.contentSlideDirection = 'down';
          this.slideDown(newVal, oldVal);
        } // 不开启上下滑开关
        else {
            // 左滑
            if (newVal < this.curSelectedIndex) {
              this.contentSlideDirection = 'left';
              this.slideHorizontal(newVal, this.curSelectedIndex, 'left'); // 记录当前选中项的索引

              this.curSelectedIndex = newVal;
            } // 右滑
            else if (newVal > this.curSelectedIndex) {
                this.contentSlideDirection = 'right';
                this.slideHorizontal(newVal, this.curSelectedIndex, 'right'); // 记录当前选中项的索引

                this.curSelectedIndex = newVal;
              }
          }
      } // 上滑
      else if (oldVal !== -1 && newVal === -1) {
          // 如果开启上下滑开关
          if (this.verticalTransition) {
            this.contentSlideDirection = 'up';
            this.slideUp(newVal, oldVal);
          } // 不开启上下滑开关
          else {}
        } // 水平横滑
        else if (oldVal !== -1 && newVal !== -1) {
            // 记录当前选中项的索引；如果 selected 是 -1，则保持不变
            this.curSelectedIndex = newVal; // 左滑

            if (newVal < oldVal) {
              this.contentSlideDirection = 'left';
              this.slideHorizontal(newVal, oldVal, 'left');
            } // 右滑
            else if (newVal > oldVal) {
                this.contentSlideDirection = 'right';
                this.slideHorizontal(newVal, oldVal, 'right');
              }
          }
    },
    // 下滑
    slideDown: function slideDown(newVal, oldVal) {
      // 重置所有位置
      this.resetAllContentItemPosition(); // 获得 content dom

      var domContent = this.$refs.content;

      if (domContent.style.height === 'auto') {
        // 设置初始高度
        domContent.style.height = 0; // 强制触发重绘

        domContent.offsetWidth;
      } // 获得 vnode 项


      var contentItem = this.contentItemList[newVal]; // 设置标志位

      contentItem.positionChange = true; // 获得 dom

      var domContentItem = this.$refs.contentItem[newVal]; // 垂直：挪到上方

      domContentItem.style.top = -contentItem.height + 'px'; // 水平：挪到中央

      domContentItem.style.left = 0; // 设置透明度

      domContentItem.style.opacity = 1; // 设置 z-index

      domContentItem.style.zIndex = ''; // 强制触发重绘

      domContentItem.offsetWidth; // 添加 content 动效

      (0, _domUtil.addDomTransition)(this.$refs.content, this.transitionOpts.downTransition); // 添加 content item 动效

      (0, _domUtil.addDomTransition)(domContentItem, this.transitionOpts.downTransition); // 从上方挪到中央

      domContentItem.style.top = 0; // 修改 content 高度

      this.contentHeight = this.contentItemList[this.selectedIndex].height;
    },
    // 上滑
    slideUp: function slideUp(newVal, oldVal) {
      // 获得 vnode 项
      var contentItem = this.contentItemList[oldVal]; // 设置标志位

      contentItem.positionChange = true; // 获得 content item dom

      var domContentItem = this.$refs.contentItem[oldVal]; // 添加 content wraper 动效

      (0, _domUtil.addDomTransition)(this.$refs.content, this.transitionOpts.upTransition); // 添加 content item 动效

      (0, _domUtil.addDomTransition)(domContentItem, this.transitionOpts.upTransition); // 垂直：挪到上方

      domContentItem.style.top = -contentItem.height + 'px'; // 修改 content 高度

      this.contentHeight = 0;
    },
    // 水平横滑
    slideHorizontal: function slideHorizontal(newVal, oldVal) {
      var _this5 = this;

      var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'left';
      // 获得 content
      var domContent = this.$refs.content; // 清除动画

      (0, _domUtil.clearDomTransition)(domContent); // 设置初始高度

      domContent.style.height = domContent.offsetHeight + 'px'; // 获得新的 vnode 项

      var contentItemNew = this.contentItemList[newVal]; // 设置标志位

      contentItemNew.positionChange = true; // 获得 dom

      var domContentItemNew = this.$refs.contentItem[newVal];
      this.domContentItemNew = domContentItemNew; // 清除动画

      (0, _domUtil.clearDomTransition)(domContentItemNew); // 新项 zIndex 设为 'auto'

      domContentItemNew.style.zIndex = 'auto'; // 水平动画

      if (this.horizontalTransition) {
        // 垂直：挪到中央
        domContentItemNew.style.top = 0; // 水平：挪到左边

        domContentItemNew.style.left = -this.screenWidth + 'px'; // 右滑

        if (direction === 'right') {
          // 水平：挪到右边
          domContentItemNew.style.left = this.screenWidth + 'px';
        }
      } // 不加水平动画
      else {
          // 水平：归为0
          domContentItemNew.style.left = 0;
        } // 获得当前的 vnode 项


      var contentItem = this.contentItemList[oldVal]; // 设置标志位

      contentItem.positionChange = true; // 获得 dom

      var domContentItem = this.$refs.contentItem[oldVal]; // 清除动画

      (0, _domUtil.clearDomTransition)(domContentItem); // 旧项定位方式改为绝对定位

      domContentItem.style.position = 'absolute';
      domContentItem.style.top = '0';
      domContentItem.style.left = '0'; // 透明度动效

      if (this.opacityTransition) {
        // 新项透明度置为0
        domContentItemNew.style.opacity = 0; // 旧项透明度置为1

        domContentItem.style.opacity = 1;
      } // 不加透明度动效
      else {
          // 新项透明度置为0
          domContentItemNew.style.opacity = 1; // 旧项透明度置为1

          domContentItem.style.opacity = 0;
        } // 强制触发重绘


      domContentItemNew.offsetWidth; // 添加 content 动效

      (0, _domUtil.addDomTransition)(domContent, this.transitionOpts.heightTransition); // 添加新项动效

      (0, _domUtil.addDomTransition)(domContentItemNew, this.transitionOpts.horizontalTransition); // 如果有左右横滑动效

      if (this.horizontalTransition) {
        // 添加当前动效
        (0, _domUtil.addDomTransition)(domContentItem, this.transitionOpts.horizontalTransition);
      } // 如果没有左右横滑动效
      else {
          // 添加透明度动效
          (0, _domUtil.addDomTransition)(domContentItem, this.transitionOpts.opacityTransition);
        } // 如果有左右横滑动效


      if (this.horizontalTransition) {
        // 新项透明度置为1
        domContentItemNew.style.opacity = 1;
      } // 如果没有左右横滑动效
      else {
          // 旧项透明度置为0
          domContentItem.style.opacity = 0;
          setTimeout(function () {
            // 添加新项透明度动效
            (0, _domUtil.addDomTransition)(domContentItemNew, _this5.transitionOpts.opacityTransition); // 新项透明度置为1

            domContentItemNew.style.opacity = 1;
          }, 240);
        } // 水平动画


      if (this.horizontalTransition) {
        // 把新项挪到中间
        domContentItemNew.style.left = 0; // 把中间的挪到右边

        domContentItem.style.left = this.screenWidth + 'px'; // 右滑

        if (direction === 'right') {
          // 把中间的挪到左边
          domContentItem.style.left = -this.screenWidth + 'px';
        }
      } // 修改 contentWrapper 高度


      this.contentHeight = this.contentItemList[this.selectedIndex].height; // 水平横滑动效完成后，将老元素的 zIndex 设为 -1

      setTimeout(function () {
        domContentItem.style.zIndex = -1;
      }, 240);
    },
    // content 动效结束；这里会触发5次
    handleContentTransitionEnd: function handleContentTransitionEnd() {},

    /**
     * 设置 Content 高度
     *
     * @param {number} height 高度
     */
    setHeight: function setHeight(height) {
      var _this6 = this;

      var domContent = this.$refs.content; // 清除动效

      (0, _domUtil.clearDomTransition)(domContent);
      domContent.style.height = domContent.offsetHeight + 'px';
      domContent.offsetHeight; // 高度动效恢复

      (0, _domUtil.addDomTransition)(domContent, this.transitionOpts.heightTransitionBak);

      if ((0, _deviceUtil.isIosSmall)() || (0, _deviceUtil.isLowChrome)()) {
        setTimeout(function () {
          // 高度动效降级
          (0, _domUtil.addDomTransition)(_this6.$refs.content, '');
        }, 300);
      } // 更新内容区高度


      this.contentHeight = height; // 数组里高度也要更新

      this.contentItemList[this.selectedIndex].height = height;
    }
  },
  watch: {
    // 观察 selectedIndex 改变
    selectedIndex: function selectedIndex(newVal, oldVal) {
      // 如果只有一个 slot，并且竖直方向的动效切换开关为关，直接返回，节省开销
      if (this.slotsCount === 1 && !this.verticalTransition) {
        return;
      }

      this.judgeSlideDirection(newVal, oldVal);
    },
    // 这里 deep watch list 的变化；为的是实现异步 loading 的效果
    list: {
      deep: true,
      handler: function handler(newVal, oldVal) {
        var _this7 = this;

        this.$nextTick(function () {
          // 计算所有内容 item 的高度
          _this7.calculateAllContentItemHeight(); // 设置高度


          _this7.contentHeight = _this7.contentItemList[_this7.selectedIndex].height; // 获得 dom

          var domContentItem = _this7.$refs.contentItem[_this7.selectedIndex]; // 清除动画

          (0, _domUtil.clearDomTransition)(domContentItem); // 显示

          domContentItem.style.display = 'inline-block'; // 透明度设为0

          domContentItem.style.opacity = 0; // 强制触发重绘

          domContentItem.offsetWidth; // 添加动效

          (0, _domUtil.addDomTransition)(domContentItem, _this7.transitionOpts.horizontalTransition); // 透明度设为1

          domContentItem.style.opacity = 1;
        });
      }
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"contentWrapper":"content-wrapper__16jCG","content":"content__16FD_","contentItem":"content-item__3npQF"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"selectedIndex": {"type": Number,"default": 0},"list": {"type": Array,"default": function () { return []; }},"verticalTransition": {"type": Boolean,"default": false},"horizontalTransition": {"type": Boolean,"default": true},"opacityTransition": {"type": Boolean,"default": true},"loadingOpts": {"type": Object,"default": function () { return {"paddingTop": ".15rem"}; }},"transitionOpts": {"type": Object,"default": function () { return {"downTransition": "all .3s cubic-bezier(0.42, 0, 0.52, 1)","upTransition": "all .16s cubic-bezier(0.46, 0, 1, 1)","heightTransition": "height .3s cubic-bezier(0.4, 0.0, 0.2, 1)","horizontalTransition": "left .24s cubic-bezier(.18,.74,.78,.96),opacity .5s cubic-bezier(.18,0,.26,1)","opacityTransition": "opacity .24s cubic-bezier(0,0,1,1)"}; }}};
            obj.components = {"c-loading": require("../Loading/Loading"),"c-transition": require("../Motion/Transition")};

            
            

            


            
            obj.data = function () {
                return {"firstSelectedIndex": ((((!this["verticalTransition"])&&(this["selectedIndex"]===-1)))?(0):(this["selectedIndex"])),"curSelectedIndex": ((((!this["verticalTransition"])&&(this["selectedIndex"]===-1)))?(0):(this["selectedIndex"])),"contentItemList": [],"mounted": false,"contentHeight": "auto"};
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
    