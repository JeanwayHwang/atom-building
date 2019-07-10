
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"indicator__Cctz6",style:({
        'padding-top': _vm.paddingTop,
        'padding-bottom': _vm.paddingBottom
    })},[_c('div',{staticClass:"indicator-inner__1_loO",style:({
            '-webkit-transform': 'translateX(-' + _vm.transIndex * 11 + 'px) scale(1)',
            'transform': 'translateX(-' + _vm.transIndex * 11 + 'px) scale(1)'
        })},[(_vm.type === 'dot')?(_vm._l((_vm.length),function(i,index){return _c('div',{key:index,staticClass:"indicator-item__2KUwu"},[_c('div',{staticClass:"indicator-item-selected__3RFqy",class:_vm.shadow ? _vm.$style.indicatorItemShadow : '',style:([
                        {
                            backgroundColor: _vm.color
                        },
                        _vm.curIndex === index
                            ? {
                                backgroundColor: _vm.selectedColor
                            }
                            : {},
                        ((index === _vm.transIndex + _vm.threshold - 1) || (index === _vm.transIndex)) && index !== 0 && index !== (_vm.length - 1)
                            ? {
                                top: '1px',
                                width: '4px',
                                height: '4px',
                                borderRadius: '2px'
                            }
                            : {}
                    ])})])})):(_vm._e())],2)])},
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
  watch: {
    curIndex: function curIndex(newVal, oldVal) {
      if (newVal > oldVal) {
        if (newVal >= this.threshold - 1 && newVal < this.length - 1) {
          this.transIndex = newVal - (this.threshold - 2);
        } // 处理最左边临界的情况


        if (newVal >= this.threshold - 1 && this.transIndex === 0) {
          this.transIndex = this.length - this.threshold;
        }
      } else {
        if (newVal <= this.transIndex && this.transIndex > 0) {
          this.transIndex = newVal - 1;
        } // 处理最右边临界的情况


        if (newVal === 0) {
          this.transIndex = 0;
        }
      }
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"indicator":"indicator__Cctz6","indicatorInner":"indicator-inner__1_loO","indicatorItem":"indicator-item__2KUwu","indicatorItemSelected":"indicator-item-selected__3RFqy","indicatorItemShadow":"indicator-item-shadow__2oJxr"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"length": {"type": Number,"default": 0},"curIndex": {"type": [Number,String],"default": -1},"selectedColor": {"type": String,"default": "#999"},"color": {"type": String,"default": "#e1e1e1"},"shadow": {"type": Boolean,"default": true},"type": {"type": String,"default": "dot"},"paddingTop": {"type": String,"default": ".1rem"},"paddingBottom": {"type": String,"default": ".1rem"},"threshold": {"type": Number,"default": 5}};
            obj.components = {};

            
            

            


            
            obj.data = function () {
                return {"transIndex": 0};
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
    