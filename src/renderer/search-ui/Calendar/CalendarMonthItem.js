
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.date)?(_c('div',{staticClass:"c-calendar-month-item c-line-top"},[(_vm.date.dayArr[0])?(_c('div',{staticClass:"title c-gap-top-large",style:({
                color: _vm.date.dayArr[0].timestamp < _vm.curDate.timestamp
                    ? '#999'
                    : '#333'
            })},[_c('div',{staticStyle:{"display":"none"}},[_vm._v("\n                "+_vm._s(_vm.checkedArr)+"\n            ")]),_vm._v("\n            "+_vm._s(_vm.date.year)+"年"+_vm._s(_vm.date.month)+"月\n        ")])):(_vm._e()),_vm._v(" "),(_vm.date.dayArr)?(_c('div',{staticClass:"content"},_vm._l((_vm.math_ceil(_vm.date.dayArr.length / 7)),function(row,rowIndex){return _c('div',{key:rowIndex,staticClass:"row"},[_vm._l((_vm.date.dayArr),function(item,index){return [(index >= rowIndex * 7 && index < (rowIndex + 1) * 7)?(_c('span',{key:index,staticClass:"item WA_LOG_BTN",class:{
                            'item-disable': item.timestamp < _vm.curDate.timestamp
                        },style:({
                            'padding-left': index % 7 === 0 ? '.17rem' : 0,
                            'padding-right': index % 7 === 6 ? '.17rem' : 0,
                            'color': (item.timestamp < _vm.curDate.timestamp)
                                ? '#999'
                                : index % 7 === 0 || index % 7 === 6
                                    ? _vm.dateCheckedBgColor
                                    : '#000',
                            'background-color': item.isInCheckedArea ? _vm.dateCheckedAreaBgColor : ''
                        }),on:{"click":function($event){_vm.handleDayClick({
                            dayArr: _vm.date.dayArr,
                            dayItem: item,
                            monthIndex: _vm.monthIndex,
                            index: index
                        })}}},[(item.isInCheckedAreaLeft)?(_c('div',{staticClass:"left-bg",style:({
                                'background-color': _vm.dateCheckedAreaBgColor,
                                'width': index % 7 === 0
                                    ? _vm.firstLeftBgWidth
                                    : index % 7 === 6
                                        ? _vm.lastLeftBgWidth
                                        : '50%'
                            })})):(_vm._e()),_vm._v(" "),(item.isInCheckedAreaRight)?(_c('div',{staticClass:"right-bg",style:({
                                'background-color': _vm.dateCheckedAreaBgColor,
                                'width': index % 7 === 0
                                    ? _vm.firstRightBgWidth
                                    : index % 7 === 6
                                        ? _vm.lastRightBgWidth
                                        : '50%'
                            })})):(_vm._e()),_vm._v(" "),_c('div',{ref:"circleArea",refInFor:true,staticClass:"wrapper",class:{
                                'item-checked': item.checked && item.day
                            },style:({
                                'background-color': item.checked && item.day ? _vm.dateCheckedBgColor : ''
                            })},[_c('div',{staticClass:"c-font-medium day"},[_vm._v("\n                                "+_vm._s(item.day)+"\n                            ")]),_vm._v(" "),(item.text)?(_c('div',{staticClass:"text"},[_vm._v("\n                                "+_vm._s(item.text)+"\n                            ")])):(_vm._e())])])):(_vm._e())]})],2)}))):(_vm._e())])):(_vm._e())])},
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
    // attach
    this.attach(); // 计算圆形区域的宽度

    this.getCircleWidth(); // 判断是否在选择区域内

    this.judgeIsInCheckedArea();
  },
  updated: function updated() {},
  methods: {
    attach: function attach() {
      // 获得屏幕宽度
      this.screenWidth = document.body.clientWidth; // 计算边框值

      if (this.screenWidth < 360) {
        this.colSideWidth = 17 * .9;
      } // 计算宽度默认值


      this.circleAreaWidth = (this.screenWidth - this.colSideWidth * 2) / 7;
    },
    // 得到圆形区域的宽度
    getCircleWidth: function getCircleWidth() {
      var offsetWidth = this.$refs.circleArea[0].offsetWidth;

      if (offsetWidth) {
        this.circleAreaWidth = offsetWidth;
      } // 因为通栏的时候最左和最右间距有问题，需要调整


      this.firstLeftBgWidth = this.circleAreaWidth / 2 + this.colSideWidth + 'px';
      this.firstRightBgWidth = this.circleAreaWidth / 2 + 'px';
      this.lastLeftBgWidth = this.circleAreaWidth / 2 + 'px';
      this.lastRightBgWidth = this.circleAreaWidth / 2 + this.colSideWidth + 'px';
    },
    // 天数点击事件
    handleDayClick: function handleDayClick(obj) {
      this.$emit('dayclick', obj);
    },
    // 判断是否在选择区域内
    judgeIsInCheckedArea: function judgeIsInCheckedArea() {
      var _this = this;

      // 长度小于 2 时
      if (this.checkedArr.length < 2) {
        this.date.dayArr.forEach(function (item, index) {
          _this.$set(item, 'isInCheckedArea', false);

          _this.$set(item, 'isInCheckedAreaLeft', false);

          _this.$set(item, 'isInCheckedAreaRight', false);
        });
      } // 长度等于 2 时
      else if (this.checkedArr.length === 2) {
          var startTimestamp = this.checkedArr[0].dayItem.timestamp;
          var endTimestamp = this.checkedArr[1].dayItem.timestamp; // 如果开始结束都是同一天

          if (startTimestamp === endTimestamp) {
            return;
          }

          this.date.dayArr.forEach(function (item, index) {
            if (item.timestamp > startTimestamp && item.timestamp < endTimestamp) {
              _this.$set(item, 'isInCheckedArea', true);
            } else if (item.timestamp === startTimestamp) {
              _this.$set(item, 'isInCheckedAreaRight', true);
            } else if (item.timestamp === endTimestamp) {
              _this.$set(item, 'isInCheckedAreaLeft', true);
            } else {
              _this.$set(item, 'isInCheckedArea', false);

              _this.$set(item, 'isInCheckedAreaLeft', false);

              _this.$set(item, 'isInCheckedAreaRight', false);
            }
          });
        }
    }
  },
  watch: {
    checkedArr: function checkedArr(newVal, oldVal) {
      // 判断是否在选择区域内
      this.judgeIsInCheckedArea(); // 计算圆形区域的宽度

      this.getCircleWidth();
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"monthIndex": Number,"date": Object,"checkedArr": Array,"curDate": Object,"dateCheckedBgColor": String,"dateCheckedAreaBgColor": String};
            obj.components = {"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-btn": require("../Button/Button")};

            
            

            


            
            obj.data = function () {
                return {"screenWidth": 0,"colSideWidth": 17,"circleAreaWidth": 0,"firstLeftBgWidth": "50%","firstRightBgWidth": "50%","lastLeftBgWidth": "50%","lastRightBgWidth": "50%"};
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
            
            obj._scopeId = "data-a-7540e93b";

            module.exports = obj;

            
        });
    