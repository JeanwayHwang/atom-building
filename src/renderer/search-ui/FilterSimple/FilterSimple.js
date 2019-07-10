
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fs__3UzDX",attrs:{"rl-type":"stop","data-module":"c-fs"}},_vm._l((_vm.selectionList),function(selection,index){return _c('div',{key:selection.filterKey,staticClass:"fs-span__3xESH WA_LOG_BTN",style:({
            width: _vm.spanWidth,
            backgroundColor: _vm.backgroundColor
        }),on:{"click":function($event){_vm.onClick(selection, index)}}},[_c('span',{staticClass:"fs-text__2f3xb"},[_vm._v("\n            "+_vm._s(selection.label)+"\n        ")]),_vm._v(" "),_c('c-arrow',{staticClass:"fs-arrow__1oSFi c-gap-left-small",attrs:{"direction":_vm.selectedIndex === index
                ? 2
                : 1,"fill-color":_vm.backgroundColor,"color":"#555","animation":""}})],1)}))},
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
 * @file 简单筛选组件
 * @author dongrenguang (dongrenguang@baidu.com)
 */
var _default = {
  methods: {
    onClick: function onClick(selection, index) {
      var selectedSelection = {
        index: -1
      };

      if (this.selectedIndex !== index) {
        Object.keys(selection).forEach(function (key) {
          selectedSelection[key] = selection[key];
        });
        selectedSelection.index = index;
      }
      /**
       * 点击选项卡时触发，参数对象中包含index、filterKey和label(如果index为-1，这两个值为undefined)属性
       *
       * @event click
       * @property {number} param1.index 选中索引
       * @property {number|undefined} param1.filterKey 选中项的key，如果index为-1，则为undefined
       * @property {number|undefined} param1.label 选中项显示文字，如果index为-1，则为undefined
       */


      this.$emit('click', selectedSelection);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"fs":"fs__3UzDX","fsArrow":"fs-arrow__1oSFi","fsSpan":"fs-span__3xESH","fsText":"fs-text__2f3xb"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"selectionList": {"type": Array,"required": true},"selectedIndex": {"type": Number,"default": -1},"backgroundColor": {"type": String,"default": "#f5f5f5"}};
            obj.components = {"c-arrow": require("../AnimateIcon/Arrow")};

            
            

            


            
            obj.data = function () {
                return {"spanWidth": (((this["selectionList"]&&this["selectionList"].length))?(((100/this["selectionList"].length)+"%")):(0))};
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
    