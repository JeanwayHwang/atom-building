
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{ref:"filterBottomLayout",staticClass:"c-filter-bottom-layout",style:({
        'position': _vm.transition ? 'relative' : 'fixed',
        'height': _vm.height,
        'max-height': _vm.maxHeight,
        'top': _vm.transition ? '-1px' : null,
        'z-index': _vm.maskZIndex + 1
    })},[(_vm.bottomData && _vm.bottomData.type === 'list')?(_c('list-layout',{ref:"listLayout",attrs:{"data":_vm.bottomData,"list-layer-max-height":_vm.listLayerMaxHeight,"selected-color":_vm.primaryColor,"unselected-color":_vm.secondColor,"store":_vm.store}})):(_vm._e()),_vm._v(" "),(_vm.bottomData && _vm.bottomData.type === 'multi')?(_c('multi-layout',{ref:"multiLayout",attrs:{"data":_vm.bottomData,"primary-color":_vm.primaryColor,"transition":_vm.transition,"store":_vm.store}})):(_vm._e()),_vm._v(" "),(_vm.bottomData && _vm.bottomData.type === 'custom')?(_c('custom-layout',{ref:"customLayout",attrs:{"data":_vm.bottomData,"primary-color":_vm.primaryColor,"transition":_vm.transition,"hide-custom-bottom-btn":_vm.hideCustomBottomBtn,"store":_vm.store}},[_vm._t("default")],2)):(_vm._e())],1)},
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
    // 计算底部栏高度；底部栏高度其实在页面初始化时已经订好了
    // 获得整个下方的 dom
    var domFilterBottomLayout = this.$refs.filterBottomLayout; // 得到距离顶部的高度

    this.top = this.getElementTop(domFilterBottomLayout); // 得到网页的高度

    this.pageHeight = this.getBrowserHeight(); // 得到 diff 高度

    this.diffHeight = this.pageHeight - this.top;
    this.calculateMultiMaxHeight();
    this.calculateMultiHeight();
    this.calculateCustomMaxHeight();
    this.calculateCustomHeight(); // multi

    if (this.bottomData && this.bottomData.type === 'multi') {
      this.height = this.multiLayoutHeight;
      this.maxHeight = this.multiLayoutMaxHeight;
    } // custom
    else if (this.bottomData && this.bottomData.type === 'custom') {
        this.height = this.customLayoutHeight;
        this.maxHeight = this.customLayoutMaxHeight;
      } else {
        this.height = 'auto';
        this.maxHeight = 'auto';
      }
  },
  methods: {
    // 获取浏览器高度
    getBrowserHeight: function getBrowserHeight() {
      return window.innerHeight;
    },
    // 获取 dom 绝对位置的纵坐标
    getElementTop: function getElementTop(element) {
      // 对象解构
      var actualTop = element.offsetTop,
          current = element.offsetParent;

      while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
      }

      return actualTop;
    },
    // 计算复合布局的最大高度
    calculateMultiMaxHeight: function calculateMultiMaxHeight() {
      // 得到复合布局的高度；乘以百分比
      if (this.multiMaxHeight.indexOf('%')) {
        // 去掉百分号
        var multiMaxHeight = this.multiMaxHeight.replace(/%/g, ''); // 变成小数

        var multiMaxHeightPercent = parseFloat(multiMaxHeight) / 100;
        this.multiLayoutMaxHeight = multiMaxHeightPercent * this.diffHeight + 'px';
      } // 如果不包含百分比
      else {
          this.multiLayoutMaxHeight = this.multiMaxHeight + 'px';
        }
    },
    // 计算复合布局的高度
    calculateMultiHeight: function calculateMultiHeight() {
      if (!this.$refs.multiLayout) {
        return;
      } // 如果存在自定义高度


      if (this.multiHeight) {
        // 如果包含百分比
        if (this.multiHeight.indexOf('%')) {
          // 去掉百分号
          var multiHeight = this.multiHeight.replace(/%/g, ''); // 变成小数

          var multiHeightPercent = parseFloat(multiHeight) / 100;
          this.multiLayoutHeight = multiHeightPercent * this.diffHeight + 'px';
        } // 如果不包含百分比
        else {
            this.multiLayoutHeight = this.multiHeight + 'px';
          }
      } // 如果不存在自定义高度
      else {
          var multiLayoutDom = this.$refs.multiLayout.$el;
          this.multiLayoutHeight = multiLayoutDom.offsetHeight + 'px';
        }
    },
    // 计算自定义布局的最大高度
    calculateCustomMaxHeight: function calculateCustomMaxHeight() {
      // 得到复合布局的高度；乘以百分比
      if (this.customMaxHeight.indexOf('%')) {
        // 去掉百分号
        var customMaxHeight = this.customMaxHeight.replace(/%/g, ''); // 变成小数

        var customMaxHeightPercent = parseFloat(customMaxHeight) / 100;
        this.customLayoutMaxHeight = customMaxHeightPercent * this.diffHeight + 'px';
      } // 如果不包含百分比
      else {
          this.customLayoutMaxHeight = this.customMaxHeight + 'px';
        }
    },
    // 计算自定义布局的高度
    calculateCustomHeight: function calculateCustomHeight() {
      if (!this.$refs.customLayout) {
        return;
      } // 如果存在自定义高度


      if (this.customHeight) {
        // 如果包含百分比
        if (this.customHeight.indexOf('%')) {
          // 去掉百分号
          var customHeight = this.customHeight.replace(/%/g, ''); // 变成小数

          var customHeightPercent = parseFloat(customHeight) / 100;
          this.customLayoutHeight = customHeightPercent * this.diffHeight + 'px';
        } // 如果不包含百分比
        else {
            this.customLayoutHeight = this.customHeight + 'px';
          }
      } // 如果不存在自定义高度
      else {
          // 算出真实的高度
          var customLayoutDom = this.$refs.customLayout.$el;
          this.customLayoutHeight = customLayoutDom.offsetHeight + 'px';
        }
    }
  },
  watch: {
    bottomData: function bottomData(newData, oldData) {
      var _this = this;

      // 这里要在 dom 生成之后才能获得到真实的高度
      this.$nextTick(function () {
        // multi
        if (newData && newData.type === 'multi') {
          _this.calculateMultiMaxHeight();

          _this.calculateMultiHeight();

          _this.height = _this.multiLayoutHeight;
          _this.maxHeight = _this.multiLayoutMaxHeight;
        } // custom
        else if (newData && newData.type === 'custom') {
            _this.calculateCustomMaxHeight();

            _this.calculateCustomHeight();

            _this.height = _this.customLayoutHeight;
            _this.maxHeight = _this.customLayoutMaxHeight;
          } else {
            _this.height = 'auto';
            _this.maxHeight = 'auto';
          }
      });
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"store": {"type": Object},"bottomData": {"type": Object},"primaryColor": {"type": String},"secondColor": {"type": String},"multiHeight": String,"multiMaxHeight": {"type": String,"default": "70%"},"customHeight": String,"customMaxHeight": {"type": String,"default": "70%"},"hideCustomBottomBtn": {"type": Boolean,"default": false},"listLayerMaxHeight": {"type": String},"transition": {"type": Boolean,"default": false},"maskZIndex": {"type": Number,"default": 299}};
            obj.components = {"list-layout": require("./ListLayout"),"multi-layout": require("./MultiLayout"),"custom-layout": require("./CustomLayout")};

            
            

            


            
            obj.data = function () {
                return {"top": 0,"pageHeight": 0,"diffHeight": 0,"height": "auto","maxHeight": "auto","multiLayoutHeight": null,"multiLayoutMaxHeight": null,"customLayoutHeight": null,"customLayoutMaxHeight": null};
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
            
            obj._scopeId = "data-a-453ba612";

            module.exports = obj;

            
        });
    