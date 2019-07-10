
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-info-tombstone-item__3T4K8 c-gap-inner-top-large"},[(_vm.type === 2)?(_c('div',[_c('c-row',[_c('c-span',{attrs:{"col":"5"}},[_c('div',{style:({
                        'background-color': _vm.color,
                        'height': '.17rem'
                    })})]),_vm._v(" "),_c('c-span',{attrs:{"col":"7"}})],1),_vm._v(" "),_c('c-row',{staticClass:"c-gap-top-large",style:({
                'margin-bottom': '.4rem'
            })},_vm._l((3),function(item,index){return _c('c-span',{key:index,attrs:{"col":"4"}},[_c('div',{style:([
                        {
                            'background-color': _vm.color,
                            'height': 0,
                            'padding-bottom': '66.66666667%'
                        },
                        index === 0
                            ? {
                                'border-top-left-radius': '3px',
                                'border-bottom-left-radius': '3px'
                            }
                            : {},
                        index === 2
                            ? {
                                'border-top-right-radius': '3px',
                                'border-bottom-right-radius': '3px'
                            }
                            : {}
                    ])})])}))],1)):(_vm._e()),_vm._v(" "),(_vm.type === 3)?(_c('div',[_c('c-row',[_c('c-span',{attrs:{"col":"5"}},[_c('div',{style:({
                        'background-color': _vm.color,
                        'height': '.17rem'
                    })})]),_vm._v(" "),_c('c-span',{attrs:{"col":"7"}})],1),_vm._v(" "),_c('c-row',{staticClass:"c-gap-top-large"},[_c('c-span',{attrs:{"col":"12"}},[_c('div',{style:({
                        'background-color': _vm.color,
                        'height': '.13rem'
                    })})])],1),_vm._v(" "),_c('c-row',{staticClass:"c-gap-top",style:({
                'margin-bottom': '.4rem'
            })},[_c('c-span',{attrs:{"col":"10"}},[_c('div',{style:({
                        'background-color': _vm.color,
                        'height': '.13rem'
                    })})]),_vm._v(" "),_c('c-span',{attrs:{"col":"2"}})],1)],1)):(_vm._e()),_vm._v(" "),(_vm.type === 4)?(_c('div',[_c('c-row',{style:({
                'margin-bottom': '.3rem'
            })},[_c('c-span',{attrs:{"col":"4"}},[_c('div',{style:({
                        height: 'auto'
                    })},[_c('div',{style:({
                            'background-color': _vm.color,
                            'height': '0',
                            'padding-bottom': '66.66666667%',
                            'border-radius': '3px'
                        })})])]),_vm._v(" "),_c('c-span',{attrs:{"col":"8"}},[_c('div',{style:({
                        'background-color': _vm.color,
                        'height': '.13rem'
                    })}),_vm._v(" "),_c('c-row',{staticClass:"c-gap-top"},[_c('c-span',{attrs:{"col":"6"}},[_c('div',{style:({
                                'background-color': _vm.color,
                                'height': '.13rem'
                            })})]),_vm._v(" "),_c('c-span',{attrs:{"col":"2"}})],1)],1)],1)],1)):(_vm._e()),_vm._v(" "),(_vm.type === 5)?(_c('div',[_c('c-row',{style:({
                'margin-top': '.09rem'
            })},[_c('c-span',{attrs:{"col":"10"}},[_c('div',{style:({
                        'background-color': _vm.color,
                        'height': '.17rem'
                    })})]),_vm._v(" "),_c('c-span',{attrs:{"col":"2"}})],1),_vm._v(" "),_c('c-row',{style:({
                'margin-top': '.16rem'
            })},[_c('c-span',{attrs:{"col":"10"}},[_c('div',{style:({
                        'background-color': _vm.color,
                        'height': '4.2rem',
                        'border-radius': '3px'
                    })})]),_vm._v(" "),_c('c-span',{attrs:{"col":"2"}})],1),_vm._v(" "),_c('c-row',{style:({
                'margin-top': '.2rem',
                'margin-bottom': '.29rem'
            })},[_c('c-span',{attrs:{"col":"12"}},[_c('div',{style:({
                        'background-color': _vm.color,
                        'height': '.13rem'
                    })})])],1)],1)):(_vm._e()),_vm._v(" "),_c('div',{style:({
            'height': '1px',
            'background-color': _vm.color
        })})])},
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
    var _this = this;

    if (this.animationType === 'vertical') {
      // 因为 iOS animation-delay 只支持负数，所以从上往下的效果就用 js 进行延时
      setTimeout(function () {
        _this.$el.className += ' ' + _this.$style.cItemAnimationVertical;
      }, 200 * this.index);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"cInfoTombstoneItem":"c-info-tombstone-item__3T4K8","cItemAnimationVertical":"c-item-animation-vertical__Z91oW"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"type": {"type": Number,"default": 1},"color": {"type": String,"default": "#f4f2f2"},"index": {"type": Number,"default": 0},"animationType": {"type": String}};
            obj.components = {"c-row": require("../Row/Row"),"c-span": require("../Row/Span")};

            
            

            


            
            obj.data = function () {
                return {};
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
    