
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"radio__3NfWj"},[_c('div',{staticClass:"header-wrapper__KQcoc c-line-bottom",on:{"touchmove":function($event){$event.preventDefault();}}},[_c('c-row',{staticClass:"header__QxEtP"},[(_vm.titleAlign === 'center')?(_c('c-span',{attrs:{"col":"3"}})):(_vm._e()),_vm._v(" "),_c('c-span',{attrs:{"col":_vm.titleAlign === 'center' ? '6' : '9'}},[_c('div',{staticClass:"title__3f8eJ"},[_c('div',{staticClass:"header-middle__8boIU"},[_c('c-line',{staticClass:"c-title c-color-link",attrs:{"align":_vm.titleAlign === 'center' ? 'center' : 'left',"clamp":"1"}},[_vm._v("\n                            "+_vm._s(_vm.title)+"\n                        ")])],1)])]),_vm._v(" "),_c('c-span',{staticClass:"close-wrapper__2ETs2 c-span-middle WA_LOG_BTN",attrs:{"col":"3","role":"button","aria-label":"关闭"},nativeOn:{"click":function($event){_vm.handleCloseBtnClick($event)}}},[_c('c-icon',{staticClass:"c-font-big c-color close__3Rv6D",attrs:{"type":"close_line"}})],1)],1)],1),_vm._v(" "),_c('div',{ref:"list",staticClass:"list__3BvlZ",attrs:{"role":"radiogroup"},on:{"touchstart":_vm.handleTouchStart,"touchmove":_vm.handleTouchMove}},_vm._l((_vm.data),function(item,idx){return _c('div',{key:idx,staticClass:"item-wrapper__1H-jo c-line-bottom",attrs:{"aria-checked":idx === _vm.myIdx,"role":"radio"}},[_c('c-row',{staticClass:"item__Cm5w0 WA_LOG_BTN c-gap-inner-top-large c-gap-inner-bottom-large c-color",class:[
                    idx === _vm.myIdx ? _vm.$style.selected : '',
                    idx === _vm.myIdx ? _vm.$style.cColorLink : ''
                ],nativeOn:{"click":function($event){_vm.changeItem(idx, item)}}},[_c('c-span',{attrs:{"col":"11"}},[_c('c-line',{attrs:{"clamp":"1"}},[_vm._v("\n                        "+_vm._s(item.text)+"\n                    ")])],1),_vm._v(" "),_c('c-span',{staticClass:"icon-wrapper__2NmDS",attrs:{"col":"1"}},[(idx === _vm.myIdx)?(_c('c-icon',{staticClass:"icon-check__2a-4Y",attrs:{"type":"check"}})):(_vm._e())],1)],1)],1)}))])},
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
    this.myIdx = this.selectedIdx; // 打开后选中默认数据,记录选择结果

    if (this.myIdx === -1 && Array.isArray(this.data)) {
      var index = -1;

      for (var i = 0; i < this.data.length; i++) {
        var it = this.data[i];

        if (it.selected === true) {
          index = i;
          break;
        }
      }

      this.myIdx = index;
    }
  },
  methods: {
    // 关闭按钮点击
    handleCloseBtnClick: function handleCloseBtnClick() {
      this.$emit('close');
    },

    /**
     * 点击item逻辑处理
     * @param idx {number} 顺序值
     * @param item {Object} 当前项数据
     * */
    changeItem: function changeItem(idx, item) {
      var infos = Object.assign({}, item, {
        index: idx
      });
      this.$emit('select', infos);
      this.$emit('close');
    },
    // 开始触摸
    handleTouchStart: function handleTouchStart(e) {
      this.startY = e.touches[0].clientY;
    },
    handleTouchMove: function handleTouchMove(e) {
      var status = '11';
      var ele = this.$refs.list;
      var currentY = e.touches[0].clientY;

      if (ele.scrollTop === 0) {
        // 如果内容小于容器则同时禁止上下滚动
        status = ele.offsetHeight >= ele.scrollHeight ? '00' : '01';
      } else if (ele.scrollTop + ele.offsetHeight + 1 >= ele.scrollHeight) {
        // 已经滚到底部了只能向上滚动
        status = '10';
      }

      if (status !== '11') {
        // 判断当前的滚动方向
        var direction = currentY - this.startY > 0 ? '10' : '01'; // 操作方向和当前允许状态求与运算，运算结果为0，就说明不允许该方向滚动，则禁止默认事件，阻止滚动

        if (!(parseInt(status, 2) & parseInt(direction, 2))) {
          e.preventDefault();
        }
      }
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"radio":"radio__3NfWj","headerWrapper":"header-wrapper__KQcoc","header":"header__QxEtP","title":"title__3f8eJ","headerMiddle":"header-middle__8boIU","closeWrapper":"close-wrapper__2ETs2","close":"close__3Rv6D","list":"list__3BvlZ","itemWrapper":"item-wrapper__1H-jo","item":"item__Cm5w0","iconWrapper":"icon-wrapper__2NmDS","iconCheck":"icon-check__2a-4Y","selected":"selected__1RGMp"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"title": String,"data": Array,"selectedIdx": Number,"titleAlign": {"type": String,"default": "center"}};
            obj.components = {"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-line": require("../Line/Line"),"c-icon": require("../Icon/Icon")};

            
            

            


            
            obj.data = function () {
                return {"myIdx": -1,"startY": 0};
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
    