
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-tags"},[(!_vm.noContent && _vm.bottom)?(_c('c-tags-content',{ref:"content",attrs:{"selected":_vm.oSelected,"status":_vm.status,"loading-data":_vm.tagData,"inner-height":_vm.innerHeight,"rl-type":_vm.contentTouchableStop ? 'stop' : null,"tag-list":_vm.tagList}},[_vm._l((_vm.tagList),function(item,index){return _vm._t('__c__' + index)})],2)):(_vm._e()),_vm._v(" "),_c('c-tags',{attrs:{"label-list":_vm.tagLabelList,"selected-index":_vm.selectedIndex,"is-expand":_vm.isExpand,"allow-scroll":_vm.allowScroll},on:{"change":_vm.change}}),_vm._v(" "),(!_vm.noContent && !_vm.bottom)?(_c('c-tags-content',{ref:"content",attrs:{"selected":_vm.oSelected,"status":_vm.status,"loading-data":_vm.tagData,"inner-height":_vm.innerHeight,"rl-type":_vm.contentTouchableStop ? 'stop' : null,"tag-list":_vm.tagList}},[_vm._l((_vm.tagList),function(item,index){return _vm._t('__c__' + index)})],2)):(_vm._e())],1)},
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
  render: function render() {
    var _this = this;

    var vnodes = this.$slots["default"] || [];
    this.tagList = vnodes.map(function (vnode, index) {
      _this.$slots['__c__' + index] = [vnode];
      var data = vnode.componentOptions.propsData;
      var itemObj = {
        isLoading: data.isLoading ? data.isLoading : false
      };
      return itemObj;
    });
    return this.$super.render();
  },
  watch: {
    selectedIndex: function selectedIndex(value, old) {
      var _this2 = this;

      if (value > this.tagLabelList.length) {
        return;
      }

      this.status = 'leave'; // 渐隐状态是

      setTimeout(function () {
        _this2.status = 'show';
        _this2.oSelected = value;
      }, 240);
    }
  },
  methods: {
    change: function change(value, old) {
      old = old === undefined ? this.oSelected : old;

      if (value === old) {
        return;
      }

      this.$emit('change', value, old);
      this.oSelected = value.current;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"selected": {"type": Number,"default": 0},"allowScroll": {"type": Boolean,"default": false},"bottom": {"type": Boolean,"default": false},"noContent": {"type": Boolean,"default": false},"tagLabelList": {"type": Array},"isExpand": {"type": Boolean,"default": false},"innerHeight": {"type": Number,"default": 0},"contentTouchableStop": {"type": Boolean,"default": true}};
            obj.components = {"c-tags-content": require("./TagsContent"),"c-tags": require("./Tags")};

            
            

            


            
            obj.data = function () {
                return {"selectedIndex": this["selected"],"status": "show","oSelected": this["selected"]};
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
            
            

            module.exports = obj;

            
        });
    