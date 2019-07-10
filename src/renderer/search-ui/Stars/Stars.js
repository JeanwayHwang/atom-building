
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-stars-wrapper"},[_c('div',{staticClass:"c-stars-container",style:({
            fontSize: _vm.fontSize,
            color: _vm.color
        }),on:{"click":_vm.click}},[_c('div',_vm._l((5),function(n){return _c('c-icon',{key:n,staticClass:"c-stars-bar-empty-icon-item",class:[
                    !_vm.disabled
                        ? 'WA_LOG_BTN'
                        : ''
                ],style:([
                    _vm.emptyColor
                        ? {
                            color: _vm.emptyColor
                        }
                        : {}
                ]),attrs:{"type":_vm.emptyIcon,"data-index":n,"aria-label":(n + "分"),"aria-hidden":_vm.disabled,"role":"button"}})})),_vm._v(" "),_c('div',{staticClass:"c-stars-bar-active"},[_vm._l((_vm.numIntegerPart),function(n){return _c('c-icon',{key:n,staticClass:"c-stars-bar-active-item",class:[
                    !_vm.disabled
                        ? 'WA_LOG_BTN'
                        : ''
                ],attrs:{"type":_vm.icon,"data-index":n,"aria-label":(n + "分"),"aria-hidden":_vm.disabled,"role":"button"}})}),_vm._v(" "),(_vm.numDecimalPart)?(_c('span',{staticClass:"decimal"},[_c('c-icon',{staticClass:"c-icon decimal-inner",class:[
                        !_vm.disabled
                            ? 'WA_LOG_BTN'
                            : ''
                    ],style:({
                        width: _vm.numDecimalPart * 100 + '%'
                    }),attrs:{"type":_vm.icon}})],1)):(_vm._e())],2)]),_vm._v(" "),(_vm.showText)?(_c('span',{style:({
            fontSize: _vm.textFontSize,
            color: _vm.textColor,
            marginLeft: _vm.textGap
        }),attrs:{"aria-live":"polite"}},[_vm._v("\n        "+_vm._s(_vm.text ? _vm.text : _vm.oStars)+"\n    ")])):(_vm._e())])},
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
    click: function click(e) {
      if (this.disabled) {
        return;
      }

      var index = parseInt(e.target.dataset.index, 10);

      if (index >= 0) {
        this.change(index);
      }
    },
    change: function change(index) {
      if (index === this.oStars) {
        return;
      }
      /**
       * 评分改变时触发
       *
       * @event change
       * @property {number} current 当前的数量
       * @property {number} old 更改前的数量
       */


      this.$emit('change', {
        current: index,
        old: this.oStars
      });
      this.oStars = index;
    }
  },
  computed: {
    // 整数部分
    numIntegerPart: function numIntegerPart() {
      return Math.floor(this.oStars);
    },
    // 小数部分
    numDecimalPart: function numDecimalPart() {
      return this.oStars - Math.floor(this.oStars);
    }
  },
  watch: {
    stars: function stars(newVal) {
      this.change(newVal);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"stars": {"type": Number,"default": 0},"icon": {"type": String,"default": "star"},"emptyIcon": {"type": String,"default": "empty_star"},"color": {"type": String,"default": "#f60"},"emptyColor": String,"fontSize": {"type": String,"default": ".1rem"},"text": String,"showText": {"type": Boolean,"default": true},"textFontSize": {"type": String,"default": ".14rem"},"textColor": {"type": String,"default": "#999"},"textGap": {"type": String,"default": ".05rem"},"disabled": {"type": Boolean,"default": true}};
            obj.components = {"c-icon": require("../Icon/Icon")};

            
            

            


            
            obj.data = function () {
                return {"oStars": this["stars"]};
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
            
            obj._scopeId = "data-a-496bc406";

            module.exports = obj;

            
        });
    