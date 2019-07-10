
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-transition',{attrs:{"enter":{
        animations: {
            fadeIn: {}
        },
        options: {
            duration: _vm.enterAnimationDuration,
            easing: 'cubic-bezier(0, 0, 1, 1)'
        }
    },"leave":{
        animations: {
            fadeIn: {
                reverse: true,
                fill: 'end'
            }
        },
        options: {
            duration: _vm.leaveAnimationDuration,
            easing: 'cubic-bezier(0, 0, 1, 1)'
        }
    }},on:{"beforeLeave":_vm.handleBeforeLeave,"leave":_vm.handleLeave,"afterLeave":_vm.handleAfterLeave}},[_c('div',{staticClass:"c-tombstone",class:[
            _vm.type === 1
                ? 'c-row-tile'
                : {}
        ]},[(_vm.type === 1)?(_vm._l((_vm.imgNum),function(i){return _c('c-img-tombstone',{key:i,attrs:{"type":_vm.imgType,"row-tile":_vm.rowTile}})})):(_vm._l((_vm.num),function(item,index){return _c('c-tombstone-item',{key:index,attrs:{"type":_vm.type,"index":index,"animation-type":_vm.animationType}})}))],2)])},
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
 * @file 占位加载（墓碑）
 * @author wangkai <wangkai37@baidu.com>
 */
var _default = {
  methods: {
    /**
     * 组件移除之前的回调.
     *
     * @event beforeleave
     */
    handleBeforeLeave: function handleBeforeLeave() {
      this.$emit('beforeleave');
    },

    /**
     * 组件移除的回调.
     *
     * @event leave
     */
    handleLeave: function handleLeave() {
      this.$emit('leave');
    },

    /**
     * 组件移除之后的回调.
     *
     * @event afterleave
     */
    handleAfterLeave: function handleAfterLeave() {
      this.$emit('afterleave');
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"type": {"type": Number,"default": 1},"rowTile": {"type": Boolean,"default": false},"enterAnimationDuration": {"type": Number,"default": 0},"leaveAnimationDuration": {"type": Number,"default": 80},"imgNum": {"type": Number,"default": 1},"imgType": {"type": String,"default": "waterfall"},"num": {"type": Number,"default": 6},"animationType": {"type": String}};
            obj.components = {"c-img-tombstone": require("./ImgTombstone"),"c-tombstone-item": require("./TombstoneItem"),"c-transition": require("../Motion/Transition")};

            
            

            


            
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
            
            

            module.exports = obj;

            
        });
    