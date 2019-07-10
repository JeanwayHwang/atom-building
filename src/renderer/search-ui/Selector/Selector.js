
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-selector"},[_c('div',{staticClass:"c-selector-btns__2k2bS WA_LOG_BTN",on:{"click":_vm.filterOpen}},[_vm._t("default")],2),_vm._v(" "),_c('div',{staticClass:"c-selector-wrapper"},[_c('c-transition',{attrs:{"enter":{
                animations: {
                    opacity: {}
                },
                options: {
                    duration: _vm.durationIn
                }
            },"leave":{
                animations: {
                    opacity: {
                        reverse: true
                    }
                },
                options: {
                    duration: _vm.durationOut
                }
            },"name":"c-selector-mask-show"}},[(_vm.open)?(_c('div',{staticClass:"mask__Kbs8j",attrs:{"role":"button","aria-label":"关闭"},on:{"click":_vm.filterClose,"touchmove":function($event){$event.preventDefault();}}})):(_vm._e())]),_vm._v(" "),_c('c-transition',{attrs:{"enter":{
                animations: {
                    slideUp: {}
                },
                options: {
                    duration: _vm.durationIn
                }
            },"leave":{
                animations: {
                    slideUp: {
                        reverse: true
                    }
                },
                options: {
                    duration: _vm.durationOut
                }
            },"name":"c-selector-panel-show"}},[(_vm.open && _vm.type === 'radio')?(_c('c-selector-radio',{attrs:{"title":_vm.title,"data":_vm.data,"title-align":_vm.titleAlign,"selected-idx":_vm.selectedIndex},on:{"clickItem":_vm.clickItem,"select":_vm.select,"close":_vm.filterClose}})):((_vm.open && _vm.type === 'multi')?(_c('c-selector-multi',{attrs:{"title":_vm.title,"data":_vm.data,"title-align":_vm.titleAlign,"selected-idxes":_vm.selectedIndexes,"left-text":_vm.leftText,"right-text":_vm.rightText},on:{"select":_vm.select}})):(_vm._e()))],1)],1)])},
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
  methods: {
    filterOpen: function filterOpen() {
      /**
       * 打开浮层
       *
       * @event open
       */
      this.$emit('open');
    },
    filterClose: function filterClose() {
      /**
       * 关闭浮层
       *
       * @event close
       */
      this.$emit('close');
    },
    clickItem: function clickItem(value) {
      this.selectedIndex = this.type === 'multi' ? -1 : value || -1;
      /**
       * 点击选项
       *
       * @event clickItem
       */

      this.$emit('clickItem', value);
    },
    select: function select(infos) {
      this.selectedIndexes = this.type === 'multi' ? infos : [];
      /**
       * 选择条目时触发（若为多选，则为确定时触发）
       *
       * @event select
       * @property {object|array} param1 多选时，是形如 [0, 1, 3] 的数组，内容为多选选中序号；单选时是对象
       * @property {number} param1.index 选择条目的序号
       * @property {string} param1.text 选择条目的文案
       * @property {string} param1.value 选择条目的值
       */

      this.$emit('select', infos);
      this.$emit('close');
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"mask":"mask__Kbs8j","cSelectorBtns":"c-selector-btns__2k2bS"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"title": {"type": String,"default": ""},"type": {"type": String,"default": "radio"},"leftText": {"type": String,"default": "全选"},"rightText": {"type": String,"default": "保存"},"data": {"type": Array,"required": true},"open": {"type": Boolean,"default": false},"titleAlign": {"type": String,"default": "center"}};
            obj.components = {"c-transition": require("../Motion/Transition"),"c-selector-radio": require("./SelectorRadio"),"c-selector-multi": require("./SelectorMulti")};

            
            

            


            
            obj.data = function () {
                return {"durationIn": 320,"durationOut": 240,"selectedIndex": -1,"selectedIndexes": []};
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
    