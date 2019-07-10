
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-infinite-scroll-bottom-bar",style:([
        {
            'visibility': _vm.status === _vm.LOAD_STATUS.IDLE
                ? 'hidden'
                : 'visible',
            'background-color': _vm.bgColor
        },
        _vm.rowTile
            ? {
                'margin-left': '-.17rem',
                'margin-right': '-.17rem'
            }
            : {}
    ]),on:{"click":_vm.handleClick}},[_c('div',{staticClass:"center",attrs:{"aria-live":"assertive"}},[_vm._t("left"),_vm._v(" "),(_vm.status === _vm.LOAD_STATUS.LOADING)?(_c('span',{staticClass:"c-loading-icon",style:({
                'background-color': _vm.iconColor
            })})):(_vm._e()),_vm._v(" "),_c('span',{staticClass:"c-loading-text c-color c-font-small",style:({
                color: _vm.textColor
            })},[_vm._v("\n            "+_vm._s(_vm.text)+"\n        ")]),_vm._v(" "),_vm._t("right")],2)])},
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
 * @file 无限下拉底部栏
 * @author chenrui09@baidu.com
 * @changer wangkai37@baidu.com
 */
var _default = {
  methods: {
    handleClick: function handleClick() {
      /**
       * 点击事件
       *
       * @event click
       * @property {number} param1.status 加载状态；0：空闲；1：加载中；2：加载完成；3：加载失败
       */
      this.$emit('click', {
        status: this.status
      });
    }
  },
  computed: {
    // 显示文案
    text: function text() {
      var text = '';

      switch (this.status) {
        case 0:
          break;

        case 1:
          text = this.loadingText;
          break;

        case 2:
          text = this.loadEndText;
          break;

        case 3:
          text = this.loadFailText;
          break;

        default:
          break;
      }

      return text;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"loadingText": {"type": String,"default": "正在加载..."},"loadEndText": {"type": String,"default": "到底了 没有更多内容了"},"loadFailText": {"type": String,"default": "加载失败 点击重新加载"},"status": {"type": [Number,String],"default": 0},"bgColor": {"type": String,"default": "#fff"},"iconColor": {"type": String,"default": "#2a2a31"},"textColor": {"type": String,"default": "#555"},"rowTile": {"type": Boolean,"default": false}};
            obj.components = {"c-slink": require("../Slink/Slink")};

            
            

            


            
            obj.data = function () {
                return {"LOAD_STATUS": {"IDLE": 0,"LOADING": 1,"LOAD_END": 2,"LOAD_FAIL": 3}};
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
            
            obj._scopeId = "data-a-a66755f2";

            module.exports = obj;

            
        });
    