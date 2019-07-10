
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"multi__1tfV4"},[_c('div',{staticClass:"header-wrapper__IY6xJ c-line-bottom",on:{"touchmove":function($event){$event.preventDefault();}}},[_c('c-row',{staticClass:"header__20sW8"},[(_vm.titleAlign === 'center')?(_c('c-span',{staticClass:"all-wrapper__1j9fP c-span-middle WA_LOG_BTN",attrs:{"col":"3"},nativeOn:{"click":function($event){_vm.handleSelectAllBtnClick($event)}}},[_vm._v("\n                "+_vm._s(_vm.leftText)+"\n            ")])):(_vm._e()),_vm._v(" "),_c('c-span',{attrs:{"col":_vm.titleAlign === 'center' ? '6' : '9'}},[_c('div',{staticClass:"title__3aopM"},[_c('div',{staticClass:"header-middle__3luuv"},[_c('c-line',{staticClass:"c-title c-color-link",attrs:{"align":_vm.titleAlign === 'center' ? 'center' : 'left',"clamp":"1"}},[_vm._v("\n                            "+_vm._s(_vm.title)+"\n                        ")])],1)])]),_vm._v(" "),_c('c-span',{staticClass:"close-wrapper__2Rxgk c-span-middle WA_LOG_BTN",attrs:{"col":"3","role":"button","aria-label":"关闭"},nativeOn:{"click":function($event){_vm.handleConfirmBtnClick($event)}}},[_vm._v("\n                "+_vm._s(_vm.rightText)+"\n            ")])],1)],1),_vm._v(" "),_c('div',{ref:"list",staticClass:"list__2Ues7",on:{"touchstart":_vm.handleTouchStart,"touchmove":_vm.handleTouchMove}},_vm._l((_vm.data),function(item,idx){return _c('div',{key:idx,staticClass:"item-wrapper__2MvX2 c-line-bottom"},[_c('c-row',{staticClass:"item__3eEEf WA_LOG_BTN c-gap-inner-top-large c-gap-inner-bottom-large c-color",class:[
                    idx === _vm.myIdx ? _vm.$style.selected : '',
                    idx === _vm.myIdx ? 'c-color-link' : ''
                ],attrs:{"aria-checked":_vm.isSelected(idx)},nativeOn:{"click":function($event){_vm.changeItem(idx, item)}}},[_c('c-span',{attrs:{"col":"11"}},[_c('c-line',{attrs:{"clamp":"1"}},[_vm._v("\n                        "+_vm._s(item.text)+"\n                    ")])],1),_vm._v(" "),_c('c-span',{staticClass:"icon-wrapper__1QQWq",attrs:{"col":"1"}},[(_vm.isSelected(idx))?(_c('c-icon',{staticClass:"icon-check__22UN0",attrs:{"type":"check"}})):(_vm._e())],1)],1)],1)}))])},
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
    handleConfirmBtnClick: function handleConfirmBtnClick() {
      var arr = [];

      for (var i = 0; i < this.idxArr.length; i++) {
        arr[i] = this.idxArr[i];
      }

      this.$emit('select', this.copyArr(this.idxArr));
    },
    handleSelectAllBtnClick: function handleSelectAllBtnClick() {
      this.idxArr = this.copyArr(this.idxArr);

      for (var i = 0; i < this.data.length; i++) {
        if (!(this.idxArr.indexOf(i) + 1)) {
          this.idxArr.push(i);
        }
      }
    },
    changeItem: function changeItem(idx, item) {
      this.idxArr = this.copyArr(this.idxArr);
      var idxOf = this.idxArr.indexOf(idx);

      if (idxOf + 1) {
        this.idxArr.splice(idxOf, 1);
      } else {
        this.idxArr.push(idx);
      }
    },
    isSelected: function isSelected(idx) {
      return this.idxArr.indexOf(idx) + 1;
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
    },
    copyArr: function copyArr(arr) {
      var newArr = [];

      for (var i = 0; i < arr.length; i++) {
        newArr[i] = arr[i];
      }

      return newArr;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"multi":"multi__1tfV4","headerWrapper":"header-wrapper__IY6xJ","header":"header__20sW8","title":"title__3aopM","allWrapper":"all-wrapper__1j9fP","headerMiddle":"header-middle__3luuv","closeWrapper":"close-wrapper__2Rxgk","list":"list__2Ues7","itemWrapper":"item-wrapper__2MvX2","item":"item__3eEEf","iconWrapper":"icon-wrapper__1QQWq","iconCheck":"icon-check__22UN0","selected":"selected__2SAOz"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"title": String,"data": Array,"selectedIdxes": Array,"leftText": String,"rightText": String,"titleAlign": {"type": String,"default": "center"}};
            obj.components = {"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-line": require("../Line/Line"),"c-icon": require("../Icon/Icon")};

            
            

            


            
            obj.data = function () {
                return {"idxArr": this["selectedIdxes"]};
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
    