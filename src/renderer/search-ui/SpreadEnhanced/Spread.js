
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"spread",staticClass:"c-spread__34jVV",class:[
        'c-spread-' + _vm.type
    ],style:([
        _vm.rowTile
            ? {
                'margin-left': '-.17rem',
                'margin-right': '-.17rem'
            }
            : {}
    ])},[(_vm.topBtn.isShow)?(_c('c-spread-top-btn',{ref:"topBtn",attrs:{"spread":_vm.mSpread,"text-align":_vm.topBtn.textAlign,"left-text":_vm.topBtn.leftText,"spread-text":_vm.topBtn.spreadText,"fold-text":_vm.topBtn.foldText,"padding-top":_vm.topBtn.paddingTop,"padding-bottom":_vm.topBtn.paddingBottom,"padding-left":_vm.topBtn.paddingLeft,"padding-right":_vm.topBtn.paddingRight,"touchable-feedback-top":_vm.topBtn.touchableFeedbackTop,"touchable-feedback-bottom":_vm.topBtn.touchableFeedbackBottom,"touchable-feedback-left":_vm.topBtn.touchableFeedbackLeft,"touchable-feedback-right":_vm.topBtn.touchableFeedbackRight,"log-class":_vm.logClass},on:{"click":_vm.handleSpreadChange}},[_c('div',[_vm._t("top-left")],2)])):(_vm._e()),_vm._v(" "),_c('c-touchable-feedback',{attrs:{"top":-.05,"bottom":-.05,"left":-.17,"right":-.17,"open":_vm.contentClick}},[_c('div',{ref:"contentWrapper",staticClass:"content-wrapper__3BpCk",style:([
                _vm.contentWrapperHeight !== 'auto'
                    ? {
                        height: _vm.contentWrapperHeight + 'px'
                    }
                    : {}
            ]),on:{"webkitTransitionEnd":_vm.handleContentWrapperTransitionEnd,"transitionend":_vm.handleContentWrapperTransitionEnd,"click":function($event){_vm.contentClick && _vm.handleSpreadChange()}}},[_c('div',{ref:"content",staticClass:"content__3LE1b",style:([
                    _vm.transitionType === 'top'
                        ? {
                            top: _vm.contentTop + 'px'
                        }
                        : {}
                ])},[(_vm.type === 'list')?([_c('div',{ref:"listFold"},_vm._l((_vm.slotsCount),function(index){return (index - 1 < _vm.listThreshold)?(_c('div',{key:index - 1,ref:"listItem",refInFor:true,staticClass:"list-item"},[_vm._t('list' + (index - 1))],2)):(_vm._e())})),_vm._v(" "),(_vm.showListSpread)?(_c('div',{ref:"listSpread"},_vm._l((_vm.slotsCount),function(index){return (index - 1 >= _vm.listThreshold)?(_c('div',{key:index - 1,ref:"listItem",refInFor:true,staticClass:"list-item"},[_vm._t('list' + (index - 1))],2)):(_vm._e())}))):(_vm._e())]):((_vm.type === 'paragraph')?([_c('div',{ref:"paragraph",class:[
                            _vm.paragraphThreshold === 1
                                ? _vm.$style.cLineClamp1
                                : 'c-line-clamp' + _vm.paragraphThreshold
                        ],style:([
                            {
                                'margin-bottom': '0',
                                'padding-bottom': '5px'
                            },
                            _vm.paragraphThreshold === 0
                                ? {
                                    'padding-bottom': '0'
                                }
                                : {}
                        ])},[_vm._t("paragraph")],2)]):((_vm.type === 'height')?([_vm._t("default")]):(_vm._e())))],2)])]),_vm._v(" "),_c('div',{staticClass:"spread-right-bottom-btn__1cC8X",style:({
            bottom: _vm.rightBottomBtn.bottom,
            right: _vm.rightBottomBtn.right
        })},[(_vm.rightBottomBtn.isShow)?(_c('c-spread-right-bottom-btn',{ref:"rightBottomBtn",attrs:{"spread":_vm.mSpread,"spread-text":_vm.rightBottomBtn.spreadText,"fold-text":_vm.rightBottomBtn.foldText,"bg-color":_vm.rightBottomBtn.bgColor,"icon-color":_vm.rightBottomBtn.iconColor,"log-class":_vm.logClass},on:{"click":_vm.handleSpreadChange}})):(_vm._e())],1),_vm._v(" "),(
            !_vm.topBtn.isShow
                && !_vm.rightBottomBtn.isShow
                && _vm.bottomBtn.isShow
                && (_vm.type === 'list'
                    ? _vm.slotsCount > _vm.listThreshold
                    : true
                )
        )?(_c('c-spread-bottom-btn',{ref:"bottomBtn",class:[
            _vm.bottomBtn.borderTop
                ? 'c-line-top'
                : '',
            _vm.bottomBtn.borderBottom
                ? 'c-line-bottom'
                : ''
        ],attrs:{"spread":_vm.mSpread,"text-align":_vm.bottomBtn.textAlign,"spread-text":_vm.bottomBtn.spreadText,"bg-color":_vm.bottomBtn.bgColor,"icon-color":_vm.bottomBtn.iconColor,"fold-text":_vm.bottomBtn.foldText,"padding-top":_vm.bottomBtn.paddingTop,"padding-bottom":_vm.bottomBtn.paddingBottom,"touchable-feedback-top":_vm.bottomBtn.touchableFeedbackTop,"touchable-feedback-bottom":_vm.bottomBtn.touchableFeedbackBottom,"log-class":_vm.logClass},on:{"click":_vm.handleSpreadChange}})):(_vm._e())],1)},
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

var _domUtil = require("../util/domUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// dom 操作
var _default = {
  mounted: function mounted() {
    // 判断是否是 Android 手百
    if (_userAgent["default"].isAndroid() && _userAgent["default"].isBaiduBox()) {
      this.isAndroidBaiduApp = true;
    }

    var iOSVersion = _userAgent["default"].iOSVersion()[0]; // iOS 8 降级


    if (iOSVersion <= 8) {
      this.isDownGrade = true;
      (0, _domUtil.clearDomTransition)(this.$refs.contentWrapper);
      (0, _domUtil.clearDomTransition)(this.$refs.content);
    } // type === 'list'
    // 如果是列表类型，并且默认展开


    if (this.type === 'list' && this.spread) {
      // 计算收起高度
      this.foldContentWrapperHeight = this.$refs.listFold.offsetHeight;
    } // type === 'height'
    // 如果是高度类型
    else if (this.type === 'height') {
        // 如果收起高度大于内容区的高度
        if (this.foldHeight >= this.$refs.content.offsetHeight) {
          // 高度自适应
          this.contentWrapperHeight = 'auto'; // 底部按钮

          if (this.bottomBtn && this.bottomBtn.isShow) {
            this.bottomBtn.isShow = false;
          } // 顶部按钮
          else if (this.topBtn && this.topBtn.isShow) {
              this.topBtn.isShow = false;
            } // 右下方按钮
            else if (this.rightBottomBtn && this.rightBottomBtn.isShow) {
                this.rightBottomBtn.isShow = false;
              }
        }
      }
  },
  // render
  render: function render() {
    var _this = this;

    var vnodes = this.$slots["default"];

    if (vnodes && vnodes.length) {
      // 列表类型
      if (this.type === 'list') {
        vnodes.forEach(function (vnode, index) {
          // 放入指定 slot
          _this.$slots['list' + index] = [vnode];
        }); // 设置 slots 长度

        this.slotsCount = vnodes.length;
      } // 段落类型
      else if (this.type === 'paragraph') {
          // 放入指定 slot
          var vnode = vnodes[0]; // 这里 vnode 可以用数组包起来也可以不包，但是不包起来会出现渲染同一个 slot 的问题，vue 会报 warning，所以还是用数组包起来

          this.$slots.paragraph = [vnode]; // 设置 slots 长度

          this.slotsCount = 1;
        }
    }

    return this.$super.render();
  },
  methods: {
    /**
     * 展开
     */
    spreadFun: function spreadFun() {
      var _this2 = this;

      var oldHeight = this.$refs.content.clientHeight; // 列表

      if (this.type === 'list') {
        // 计算收起高度
        this.calculateFoldHeight(); // 设置内容区域高度，开启高度动画

        this.contentWrapperHeight = this.$refs.content.clientHeight; // 如果降级

        if (this.isDownGrade) {
          this.contentWrapperHeight = 'auto';
        } // type === 'list' 分为两种类型
        // 一种是阶段展开，每次展开 n 行
        // 另一种是直接展开
        // 阶段展开；如果展开步数存在


        if (this.spreadStep) {
          this.listThreshold += this.spreadStep; // 如果当前的显示行数大于或等于整个数量

          if (this.listThreshold >= this.slotsCount) {
            // 显示展开后的 list
            this.showListSpread = true; // 设置为展开态

            this.setSpreadStatus(true); // 清空当前行

            this.listThreshold = this.threshold;
          }
        } // 直接展开
        else {
            // 显示展开后的 list
            this.showListSpread = true; // 设置为展开态

            this.setSpreadStatus(true);
          }
      } // 段落
      else if (this.type === 'paragraph') {
          // 设置为展开态
          this.setSpreadStatus(true); // 计算收起高度

          this.calculateFoldHeight(); // 设置内容区域高度，开启高度动画

          this.contentWrapperHeight = this.$refs.content.clientHeight; // 设置不截断

          this.paragraphThreshold = 0;
        } // 高度
        else if (this.type === 'height') {
            // 设置为展开态
            this.setSpreadStatus(true); // 设置内容区域高度，开启高度动画

            this.contentWrapperHeight = this.$refs.content.clientHeight;
          }

      this.$nextTick(function () {
        // 设置内容区域高度
        _this2.contentWrapperHeight = _this2.$refs.content.clientHeight; // 计算 diffHeight

        var newHeight = _this2.contentWrapperHeight;
        var diffHeight = newHeight - oldHeight; // 如果是 transition 是 top 类型

        if (_this2.transitionType === 'top') {
          _this2.contentTop = 0;
        }

        var obj = {
          // 这里翻转是因为 调用 setSpreadStatus 设置 mSpread 状态的时候是在 setTimeout(,0) 才执行，在这里 mSpread 还是之前的值，所以要做一下取反
          spread: !_this2.mSpread,
          type: _this2.type,
          height: _this2.calculateSpreadHeight(),
          slotsCount: _this2.slotsCount,
          diffHeight: diffHeight
        };

        if (_this2.type === 'list') {
          obj.listThreshold = _this2.listThreshold;
        }
        /**
         * 展开收起状态改变后触发的回调
         *
         * @event change
         * @property {boolean} spread 是否展开
         * @property {string} type 当前展开收起的类型
         * @property {number} height 当前高度
         * @property {number} diffHeight 相较于上一次变化的高度，主要用来配合外侧元素动态计算高度
         */


        _this2.$emit('change', obj);
      });

      if (this.isAndroidBaiduApp) {
        setTimeout(function () {
          _this2.contentWrapperTransitionEndThings();
        }, 300);
      }
    },

    /**
     * 收起
     */
    foldFun: function foldFun() {
      var _this3 = this;

      // 设置状态
      this.setSpreadStatus(false);
      var oldHeight = this.$refs.content.clientHeight; // 如果是 transition 是 top 类型

      if (this.transitionType === 'top') {
        this.contentTop = -this.$refs.contentWrapper.offsetWidth;
      } // 设置收起初始高度，用来做高度动画；这里必须使用操作 dom 的方法指定高度，不能使用数据驱动视图的方式


      this.$refs.contentWrapper.style.height = this.$refs.content.clientHeight + 'px'; // 这里必须主动调用 dom 的属性，触发浏览器重排，否则动画不生效

      this.$refs.contentWrapper.offsetWidth; // 设置内容区域高度为收起时的高度

      this.contentWrapperHeight = this.foldContentWrapperHeight; // 列表并且降级
      // 这个只有降级才会这样处理

      if (this.type === 'list' && this.isDownGrade) {
        // 设置收起
        this.showListSpread = false;
      }

      this.$nextTick(function () {
        // 计算 diff height
        var newHeight = _this3.calculateSpreadHeight();

        var diffHeight = newHeight - oldHeight;
        /**
         * 展开收起状态改变后触发的回调
         *
         * @event change
         * @property {boolean} spread 是否展开
         * @property {string} type 当前展开收起的类型
         * @property {number} height 当前高度
         * @property {number} diffHeight 相较于上一次变化的高度，主要用来配合外侧元素动态计算高度
         */

        _this3.$emit('change', {
          // 这里翻转是因为 调用 setSpreadStatus 设置 mSpread 状态的时候是在 setTimeout(,0) 才执行，在这里 mSpread 还是之前的值，所以要做一下取反
          spread: !_this3.mSpread,
          type: _this3.type,
          height: newHeight,
          diffHeight: diffHeight
        });
      });

      if (this.isAndroidBaiduApp) {
        setTimeout(function () {
          _this3.contentWrapperTransitionEndThings();
        }, 300);
      }
    },
    // 设置展开收起的状态
    setSpreadStatus: function setSpreadStatus(spread) {
      var _this4 = this;

      // 这里 setTimeout 0 是因为如果立即切换的话，展开和收起发送的日志是反的
      setTimeout(function () {
        _this4.mSpread = spread;
      }, 0);
    },
    // 展开收起按钮点击
    handleSpreadChange: function handleSpreadChange() {
      var _this5 = this;

      // 点击保护
      if (this.spreadBtnClickProtect) {
        return;
      }

      this.spreadBtnClickProtect = true;
      this.spreadBtnClickProtectTimeout = setTimeout(function () {
        _this5.spreadBtnClickProtect = false;
      }, 300);
      /**
       * 展开收起按钮点击事件
       *
       * @event spreadbtnclick
       * @property {boolean} lastSpread 上一次展开收起的状态，true 展开，false 收起
       */

      this.$emit('spreadbtnclick', {
        lastSpread: this.mSpread
      }); // 如果是收起

      if (!this.mSpread) {
        // 展开
        this.spreadFun();
      } // 如果是展开
      else if (this.mSpread) {
          // 收起
          this.foldFun();
        }
    },
    // 动画结束后需要做的事
    contentWrapperTransitionEndThings: function contentWrapperTransitionEndThings() {
      // 列表
      if (this.type === 'list') {
        // height 设置为 auto
        this.contentWrapperHeight = 'auto'; // 如果是收起状态

        if (!this.mSpread) {
          // 设置收起
          this.showListSpread = false;
        }
      } // 段落
      else if (this.type === 'paragraph') {
          // height 设置为 auto
          this.contentWrapperHeight = 'auto'; // 如果是收起状态

          if (!this.mSpread) {
            // 重置 paragraphThreshold
            this.paragraphThreshold = this.threshold;
          }
        } // 高度
        else if (this.type === 'height') {}
    },
    // 高度变化动画回调
    handleContentWrapperTransitionEnd: function handleContentWrapperTransitionEnd() {
      // 如果不是 Android 手百；Android 手百的引擎，对于 transitionEnd 的回调时机有问题
      if (!this.isAndroidBaiduApp) {
        this.contentWrapperTransitionEndThings();
      }
    },
    // 计算收起高度；列表\段落类型，高度类型在 data 初始化时已计算完毕
    calculateFoldHeight: function calculateFoldHeight() {
      // threshold === 0 时是特殊情况，此时的动效不是在高度上生效而是在 margin-top 上生效
      if (this.threshold === 0) {
        this.foldContentWrapperHeight = 0;
      } // 如果不是 threshold === 0，如果还没有得到收起时的高度


      if (!this.foldContentWrapperHeight) {
        // 计算收起时的高度
        this.foldContentWrapperHeight = this.$refs.content.clientHeight;
      } // threshold === 0 时是特殊情况，此时的动效不是在高度上生效而是在 margin-top 上生效，有动效时点击过快 或者 无动效时 会导致 foldContentWrapperHeight 计算错误，所以这里要处理


      if (this.threshold === 0) {
        this.foldContentWrapperHeight = 0;
      }
    },
    // 计算整个展开收起的高度
    calculateSpreadHeight: function calculateSpreadHeight() {
      var spreadHeight = this.contentWrapperHeight;

      if (this.isDownGrade) {
        spreadHeight = this.$refs.content.clientHeight;
      } // 底部按钮栏
      // 如果按钮栏存在并且高度不为 auto 的话


      if (this.bottomBtn && this.bottomBtn.isShow && this.$refs.bottomBtn) {
        spreadHeight += this.$refs.bottomBtn.$el.offsetHeight;
      }

      return spreadHeight;
    },
    setThreshold: function setThreshold(threshold) {
      var _this6 = this;

      if (this.type === 'list') {
        this.listThreshold = threshold; // 如果是展开

        if (this.mSpread) {
          this.mSpread = false;
          this.showListSpread = false;
        }
      } else if (this.type === 'paragraph') {
        this.paragraphThreshold = threshold;
      } // 在渲染结束后


      this.$nextTick(function () {
        // 清空收起高度
        _this6.foldContentWrapperHeight = 0; // 重新计算收起高度

        _this6.calculateFoldHeight();
      });
    }
  },
  watch: {
    threshold: function threshold(newVal, oldVal) {
      this.setThreshold(newVal);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"cSpread":"c-spread__34jVV","contentWrapper":"content-wrapper__3BpCk","content":"content__3LE1b","cLineClamp1":"c-line-clamp1__3-jE0","spreadRightBottomBtn":"spread-right-bottom-btn__1cC8X"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"type": {"type": String,"default": "list"},"spread": {"type": Boolean,"default": false},"contentClick": {"type": Boolean,"default": false},"bottomBtn": {"type": Object,"default": function () { return {"isShow": true,"textAlign": "center"}; }},"topBtn": {"type": Object,"default": function () { return {"isShow": false}; }},"rightBottomBtn": {"type": Object,"default": function () { return {"isShow": false,"spreadText": "展开","foldText": "收起"}; }},"rowTile": {"type": Boolean,"default": false},"logClass": {"type": Boolean,"default": true},"threshold": {"type": Number,"default": 1},"spreadStep": Number,"foldHeight": {"type": Number,"default": 24}};
            obj.components = {"c-spread-bottom-btn": require("./SpreadBottomBtn"),"c-spread-top-btn": require("./SpreadTopBtn"),"c-spread-right-bottom-btn": require("./SpreadRightBottomBtn"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
            obj.data = function () {
                return {"isDownGrade": false,"mSpread": this["spread"],"slotsCount": 0,"contentWrapperHeight": (((((this["type"]==="height")&&this["foldHeight"])&&(!this["spread"])))?(this["foldHeight"]):("auto")),"foldContentWrapperHeight": ((((this["type"]==="height")&&this["foldHeight"]))?(this["foldHeight"]):(0)),"spreadHeight": 0,"transitionType": (((this["threshold"]===0))?("top"):("height")),"contentTop": 0,"showListSpread": this["spread"],"listThreshold": this["threshold"],"paragraphThreshold": ((this["spread"])?(0):(this["threshold"])),"spreadBtnClickProtect": false,"spreadBtnClickProtectTimeout": null,"isAndroidBaiduApp": false};
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
    