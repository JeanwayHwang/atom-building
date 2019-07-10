
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"content",staticClass:"c-navs-list-more"},[_c('div',{staticClass:"c-navs-list-more-container"},_vm._l((_vm.row),function(rowIndex){return _c('c-row',{key:rowIndex,staticClass:"c-gap-top-large"},_vm._l((3),function(colIndex){return _c('c-span',{key:colIndex,attrs:{"col":"4"}},[(_vm.labelList[rowIndex * 3 + colIndex - 4] !== _vm.undefine)?(_c('div',{staticClass:"c-navs-list-more-item c-color-gray-a WA_LOG_BTN",class:{
                        'c-navs-list-more-selected': colIndex + rowIndex * 3 - 4 === _vm.selectedIndex
                    },style:(colIndex + rowIndex * 3 - 4 === _vm.selectedIndex
                        ? {
                            'color': _vm.selectedColor,
                            'border-color': _vm.selectedColor
                        }
                        : null),attrs:{"data-log":_vm.logContent.logList&&_vm.logContent.logList[rowIndex * 3 + colIndex - 4]
                        ? _vm.logContent.logList[rowIndex * 3 + colIndex - 4]
                        : null,"data-nolog":!_vm.isOpenLog},on:{"click":function($event){_vm.itemClick(rowIndex * 3 + colIndex - 4)}}},[_c('span',[_vm._v("\n                        "+_vm._s(_vm.labelList[rowIndex * 3 + colIndex - 4].txt)+"\n                    ")])])):(_vm._e())])}))}))])},
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
* @file c-navs 组件字组件， 可滑动nav 展开组件
* @auth songshaokang
*/
var _default = {
  methods: {
    toggle: function toggle() {
      this.$emit('toggle');
    },
    itemClick: function itemClick(index) {
      this.$emit('clickItem', index);
    }
  },
  computed: {
    row: function row() {
      return Math.ceil(this.labelList.length / 3);
    },
    toggleStyle: function toggleStyle() {
      if (this.isOpen) {
        return "height: ".concat(this.$refs.content.offsetHeight, "px");
      }

      return 'height: 0';
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"labelList": {"type": Array,"required": true},"selectedIndex": {"type": Number,"default": 0},"toggleLabel": {"type": String,"default": "请选择分类"},"selectedColor": {"type": String,"default": "#333"},"isOpen": {"type": Boolean,"default": false},"isOpenLog": {"type": Boolean,"default": true},"logContent": {"type": Object,"default": function () { return {}; }}};
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

                

                originCreated && originCreated.call(self);
            };
            
            obj._scopeId = "data-a-2ddf62dc";

            module.exports = obj;

            
        });
    