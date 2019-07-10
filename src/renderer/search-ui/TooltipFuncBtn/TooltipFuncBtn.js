
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"func-btn-wrapper__1frbD",attrs:{"data-tool":_vm._f("json")({feedback: _vm.feedback,
                 evaluate: _vm.evaluate.url ? _vm.evaluate.url : ''})}},[_c('c-touchable-stop',{staticClass:"mask-stop__N0UxB",nativeOn:{"click":function($event){_vm.onFuncBtnClick($event)}}},[_c('div',{staticClass:"mask__-kD-h"})]),_vm._v(" "),_c('c-touchable-stop',[_c('div',{ref:"funcBtn",staticClass:"func-btn__kfw5E",style:([
                {
                    top: '2px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '7px',
                    backgroundColor: _vm.circleColor
                },
                _vm.size === 'large'
                    ? {
                        top: '3px',
                        width: '16px',
                        height: '16px',
                        borderRadius: '8px'
                    }
                    : {}
            ]),on:{"click":_vm.onFuncBtnClick}},[_c('div',{staticClass:"triangle__2rZfk",style:([
                    {
                        top: '5px',
                        left: '3px',
                        borderColor: _vm.triangleColor + ' transparent transparent transparent'
                    },
                    _vm.size === 'large'
                        ? {
                            top: '6px',
                            left: '4px'
                        }
                        : {}
                ])})])])],1)},
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
var _default = {
  mounted: function mounted() {
    this.mounted = true;
  },
  activated: function activated() {
    this.activated = true;
  },
  deactivated: function deactivated() {
    this.activated = false;
  },
  methods: {
    // 按钮点击事件
    onFuncBtnClick: function onFuncBtnClick(e) {
      var _this = this;

      // 点击保护
      if (this.clickProtect) {
        return;
      }

      this.clickProtect = true;
      this.clickProtectTimeout = setTimeout(function () {
        _this.clickProtect = false;
      }, 300);
      var domFuncBtn = this.$refs.funcBtn;
      var rect = domFuncBtn.getBoundingClientRect();
      this.tooltip.top = rect.top;
      this.tooltip.left = rect.left; // 这里是为了解决和整卡可点误触的情况，会触发两个电机效果
      // 因为 deactivated 事件比较慢，延迟 100ms 才能获取 this.activated 的状态

      setTimeout(function () {
        // 必须是 this.activated 为  true 的时候才弹层
        if (_this.activated) {
          _this.$refs.tooltip.showFunc(true);
        }
      }, 100);
    },
    // 提示层关闭事件
    onTooltipClose: function onTooltipClose() {
      this.$refs.tooltip.hideFunc(true);
    },
    // 新反馈入口点击
    handleFeedbackClick: function handleFeedbackClick(obj) {
      this.$emit('feedbackclick', obj); // 这里增加 try catch 是因为 openFeedBack 是在 ala-cli root 模板里的代码，在组件上线时不能保证模板里一定存在该方法

      try {
        this.$root.openFeedBack();
      } catch (e) {}

      this.$refs.tooltip.hideFunc(false);
    },
    // 分享按钮点击
    handleShareBtnClick: function handleShareBtnClick() {
      this.share.show = true;
      this.$refs.tooltip.hideFunc(true);
    },
    // 分享关闭
    handleShareClose: function handleShareClose() {
      this.share.show = false;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"funcBtnWrapper":"func-btn-wrapper__1frbD","maskStop":"mask-stop__N0UxB","mask":"mask__-kD-h","funcBtn":"func-btn__kfw5E","triangle":"triangle__2rZfk","tooltipFeedbackBtn":"tooltip-feedback-btn__OPqDy"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"size": {"type": String,"default": "small"},"feedback": Object,"evaluate": {"type": Object,"default": function () { return {"url": "","params": null}; }},"shareParams": {"type": Object},"triangleColor": {"type": String,"default": "#fff"},"circleColor": {"type": String,"default": "#e5e5e5"}};
            obj.components = {"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback"),"c-touchable-stop": require("../TouchableFeedback/TouchableStop"),"c-link": require("../Link/Link")};

            
            

            


            
            obj.data = function () {
                return {"tooltip": {"show": false,"top": 0,"left": 0},"share": {"show": false,"trans": true},"mounted": false,"activated": true,"clickProtect": false,"clickProtectTimeout": null};
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
    