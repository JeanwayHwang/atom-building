
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"drawer",staticClass:"c-drawer",style:({
        'position': _vm.isFixed ? 'fixed' : 'relative',
        'z-index': _vm.zIndexData
    }),attrs:{"data-module":"c-dr"}},[_c('transition',{attrs:{"name":"c-mask-show"},on:{"after-leave":_vm.afterMaskLeave,"before-enter":_vm.beforeMaskEnter}},[_c('div',{directives:[{name:"show",rawName:"a-show",value:(_vm.isOpenData),expression:"isOpenData"}],staticClass:"c-mask",attrs:{"role":"button","aria-label":"关闭"},on:{"click":_vm.handleClose,"touchmove":function($event){$event.preventDefault();}}})]),_vm._v(" "),_c('c-row',{staticClass:"c-drawer-row"},[_c('transition',{attrs:{"name":"c-mask-show-left"}},[_c('c-span',{directives:[{name:"show",rawName:"a-show",value:(_vm.isOpenData),expression:"isOpenData"}],ref:"maskTips",staticClass:"mask-tips",attrs:{"col":_vm.cols.left},nativeOn:{"click":function($event){_vm.handleClose($event)}}},[(_vm.openCount === 1)?(_c('div',{staticClass:"close-tips"},[(_vm.leftTips && _vm.leftTips.icon)?(_c('c-icon',{staticClass:"icon",attrs:{"type":_vm.leftTips.icon}})):(_vm._e()),_vm._v(" "),(_vm.leftTips && _vm.leftTips.text)?(_c('div',{staticClass:"text c-font-normal"},[_vm._v("\n                        "+_vm._s(_vm.leftTips.text)+"\n                    ")])):(_vm._e())],1)):(_vm._e())])],1),_vm._v(" "),_c('transition',{attrs:{"name":"c-panel-show"}},[_c('c-span',{directives:[{name:"show",rawName:"a-show",value:(_vm.isOpenData),expression:"isOpenData"}],ref:"panel",staticClass:"panel",attrs:{"col":_vm.cols.right}},[_c('div',{staticClass:"c-panel-wrapper"},[(_vm.title)?(_c('div',{staticClass:"title c-line-bottom c-font-big c-color-link"},[_vm._v("\n                        "+_vm._s(_vm.title)+"\n                    ")])):(_vm._e()),_vm._v(" "),(_vm.list && _vm.list.length > 0)?(_c('section',{staticClass:"list-wrapper c-gap-bottom-small"},[_c('div',{staticClass:"list"},_vm._l((_vm.list),function(item,index){return _c('c-touchable-feedback',{key:index,staticClass:"c-gap-top-small",attrs:{"top":-.02},nativeOn:{"click":function($event){_vm.handleListItemClick({
                                    item: item,
                                    index: index
                                })}}},[_c('div',{staticClass:"item c-font-medium c-gap-inner-top c-gap-inner-bottom c-line-clamp1",class:{
                                        'item-checked': item.checked,
                                        'c-color-link': item.checked
                                    }},[_vm._v("\n                                    "+_vm._s(item.text)+"\n                                ")])])}))])):(_vm._e()),_vm._v(" "),_vm._t("default")],2)])],1)],1)],1)},
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
    this.$root.$on('attach', function () {});
    this.$root.$on('detach', this.detach);
  },
  methods: {
    detach: function detach() {
      this.isFixed = false;
      this.isOpenData = false;
      this.zIndexData = -1;
      this.handleClose();
    },
    handleClose: function handleClose() {
      /**
       * 关闭浮层事件，需要监听该事件控制抽屉组件是否显示
       *
       * @event close
       */
      this.$emit('close');
    },
    afterMaskLeave: function afterMaskLeave() {
      this.isFixed = false;
    },
    beforeMaskEnter: function beforeMaskEnter() {
      this.isFixed = true;
    },
    handleListItemClick: function handleListItemClick(obj) {
      var _this = this;

      // 清空所有 checked
      this.list.forEach(function (item) {
        _this.$set(item, 'checked', false);
      }); // 设置 checked

      this.$set(obj.item, 'checked', true);
      /**
       * 单选类型时选择后的改变事件
       *
       * @event change
       * @property {object} param1.item 选中项数据
       * @property {number} param1.index 选中项索引
       */

      this.$emit('change', obj); // 关闭

      this.$emit('close');
    }
  },
  watch: {
    isOpen: function isOpen(newVal, oldVal) {
      // 如果是 isOpen === true，记一次数
      if (newVal) {
        this.openCount++;
      }

      this.isOpenData = this.isOpen;
      this.zIndexData = this.zIndex;
    }
  },
  beforeDestory: function beforeDestory() {
    this.detach();
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"isOpen": {"type": Boolean,"default": false},"title": String,"list": {"type": Array,"default": function () { return []; }},"direction": {"type": String,"default": "right"},"cols": {"type": Object,"default": function () { return {"left": 4,"right": 8}; }},"leftTips": {"type": Object,"default": function () { return {"text": "轻触关闭目录","icon": "gesture"}; }},"zIndex": {"type": Number,"default": 501}};
            obj.components = {"c-line": require("../Line/Line"),"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-icon": require("../Icon/Icon"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
            obj.data = function () {
                return {"isOpenData": this["isOpen"],"zIndexData": this["zIndex"],"isFixed": false,"openCount": 0};
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
            
            obj._scopeId = "data-a-05970634";

            module.exports = obj;

            
        });
    