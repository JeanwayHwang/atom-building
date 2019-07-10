
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{ref:"arrow",staticClass:"arrow__HxzGj",attrs:{"aria-hidden":"true"}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","version":"1.1","width":"14","height":"24"}},[_c('path',{attrs:{"fill":_vm.fillColor,"stroke":_vm.color,"d":_vm.directionData === 2
                ? 'M1 15 L7 9 L13 15'
                : 'M1 9 L7 15 L13 9',"stroke-width":"1"}},[_c('animate',{ref:"svgAnimateSpread",attrs:{"attributeName":"d","from":"M1 9 L7 15 L13 9","to":"M1 15 L7 9 L13 15","dur":".3s","begin":"indefinite","calcMode":"spline","keySplines":"0.18, 0, 0.26, 1"}}),_vm._v(" "),_c('animate',{ref:"svgAnimateFold",attrs:{"attributeName":"d","from":"M1 15 L7 9 L13 15","to":"M1 9 L7 15 L13 9","dur":".3s","begin":"indefinite","calcMode":"spline","keySplines":"0.18, 0, 0.26, 1"}})])])])},
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

/**
 * @file 特殊 Icon
 * @author wangkai <wangkai37@baidu.com>
 */
var _default = {
  methods: {
    svgAnimate: function svgAnimate(direction) {
      var _this = this;

      if (direction === 1) {
        // 开启 svg 动画
        this.$refs.svgAnimateFold.beginElement();
      } else if (direction === 2) {
        // 开启 svg 动画
        this.$refs.svgAnimateSpread.beginElement();
      } // 线程结束后更新状态


      setTimeout(function () {
        _this.directionData = direction;
      }, 0);
    }
  },
  watch: {
    direction: function direction(newVal, oldVal) {
      if (this.animation) {
        if (oldVal === 1 && newVal === 2) {
          this.svgAnimate(2);
        } else if (oldVal === 2 && newVal === 1) {
          this.svgAnimate(1);
        }
      } else {
        this.directionData = newVal;
      }
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"arrow":"arrow__HxzGj"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"color": {"type": String,"default": "#000"},"fillColor": {"type": String,"default": "#fff"},"direction": {"type": Number,"default": 1},"animation": {"type": Boolean,"default": true}};
            obj.components = {"c-icon": require("../Icon/Icon")};

            
            

            


            
            obj.data = function () {
                return {"directionData": this["direction"]};
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
    