
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('c-transition',{attrs:{"enter":{
            animations: {
                fadeIn: {}
            },
            options: {
                easing: 'cubic-bezier(0.42, 0, 0.52, 1)',
                duration: 300
            }
        },"leave":{
            animations: {
                fadeIn: {
                    reverse: true
                }
            },
            options: {
                easing: 'cubic-bezier(0, 0, 0.3, 1)',
                duration: 300
            }
        }}},[_c('c-mask',{directives:[{name:"show",rawName:"a-show",value:(_vm.isShow),expression:"isShow"}],attrs:{"top":_vm.top,"z-index":_vm.zIndex}})],1),_vm._v(" "),_c('c-transition',{attrs:{"enter":{
            animations: {
                slideUp: {}
            },
            options: {
                easing: 'cubic-bezier(0.42, 0, 0.52, 1)',
                duration: 300
            }
        },"leave":{
            animations: {
                slideUp: {
                    reverse: true
                }
            },
            options: {
                easing: 'cubic-bezier(0.46, 0, 1, 1)',
                duration: 160
            }
        }}},[_c('section',{directives:[{name:"show",rawName:"a-show",value:(_vm.isShow),expression:"isShow"}],staticClass:"c-calendar",style:({
                'z-index': _vm.zIndex,
                'top': _vm.top,
                'bottom': _vm.bottom
            })},[_c('section',{staticClass:"wrapper"},[_c('header',{staticClass:"header",on:{"touchmove":function($event){$event.preventDefault();}}},_vm._l((_vm.weekStrArr),function(item,index){return _c('div',{key:index,staticClass:"week-item c-color-link",class:{
                            weekend: index === 0 || index === 6
                        }},[_vm._v("\n                        "+_vm._s(item)+"\n                    ")])})),_vm._v(" "),_c('section',{ref:"body",staticClass:"body",on:{"touchstart":_vm.handleTouchStart,"touchmove":_vm.handleTouchMove}},[_c('section',{ref:"bodyScroller",staticClass:"body-scroller"},_vm._l((_vm.monthList),function(item,index){return _c('c-calendar-month-item',{key:index,ref:"calendarMonthItem",refInFor:true,attrs:{"date":item,"cur-date":_vm.curDate,"month-index":index,"checked-arr":_vm.checkedArr,"date-checked-bg-color":_vm.dateCheckedBgColor,"date-checked-area-bg-color":_vm.dateCheckedAreaBgColor},on:{"dayclick":_vm.handleDayClick}})}))]),_vm._v(" "),_c('footer',{staticClass:"footer c-line-top c-line-bottom",on:{"touchmove":function($event){$event.preventDefault();}}},[_c('c-row',[_c('c-span',[_c('c-btn',{staticClass:"reset WA_LOG_BTN",style:({
                                    'color': _vm.btnColor,
                                    'border-color': _vm.btnBorderColor
                                }),attrs:{"text":"重置"},on:{"click":_vm.handleResetBtnClick}})],1),_vm._v(" "),_c('c-span',[_c('c-btn',{staticClass:"confirm WA_LOG_BTN",style:({
                                    'background-color': _vm.btnFillColor,
                                    'border-color': _vm.btnFillColor
                                }),attrs:{"text":"确定"},on:{"click":_vm.handleConfirmBtnClick}})],1)],1)],1)])])])],1)},
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

var _stopScrollThroughMixin = _interopRequireDefault(require("../util/stopScrollThroughMixin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  mixins: [_stopScrollThroughMixin["default"]],
  mounted: function mounted() {
    this.init();
  },
  methods: {
    // 初始化
    init: function init() {
      var _this = this;

      // 初始化月份数组
      this.monthList = []; // 初始化默认选中项

      this.checkedArr = JSON.parse(JSON.stringify(this.defaultCheckedArr)); // 初始化显示次数

      this.isShowNum = 0;
      var now = new Date(); // 如果没有传年月，设置为今天
      // 年

      if (!this.curDate.year) {
        this.curDate.year = now.getFullYear();
      } // 月


      if (!this.curDate.month) {
        this.curDate.month = now.getMonth() + 1;
      } // 天


      if (!this.curDate.day) {
        this.curDate.day = now.getDate();
      } // 时间戳


      if (!this.curDate.timestamp) {
        var date = new Date("".concat(this.curDate.year, "/").concat(this.curDate.month, "/").concat(this.curDate.day));
        this.curDate.timestamp = date.getTime();
      } // 文案不存在且开始文案存在


      if (!this.curDate.text && this.startText) {
        // 设置文案
        this.curDate.text = this.startText;
      } // 如果有默认值


      if (this.checkedArr.length > 0) {
        this.checkedArr = this.checkedArr.map(function (item, index) {
          var date = new Date("".concat(item.year, "/").concat(item.month, "/").concat(item.day));

          if (!item.dayItem) {
            item.dayItem = {};
          }

          item.dayItem.year = item.year;
          item.dayItem.month = item.month;
          item.dayItem.day = item.day;
          item.dayItem.date = date;
          item.dayItem.timestamp = date.getTime();
          return item;
        });
      } // 生成 monthList


      this.generateMonthList(); // 计算判断第一次时选中的区域

      this.monthList.forEach(function (monthItem, monthIndex) {
        _this.judgeIsInCheckedArea(monthItem);
      });
    },

    /**
     * 组件重置
     *
     * @public
     */
    reset: function reset() {
      this.init();
    },
    // 每次显示的时候要做的事
    attach: function attach() {
      var _this2 = this;

      // 当前的滚动位置项
      this.$nextTick(function () {
        // body 的高度
        _this2.bodyHeight = _this2.$refs.body.offsetHeight; // body scroller 的高度

        _this2.bodyScrollerHeight = _this2.$refs.bodyScroller.offsetHeight;
      }); // 初始化滚动 top 和滚动 bottom

      this.scrollTop = this.$refs.body.scrollTop;
      this.scrollBottom = this.scrollTop + this.bodyHeight;
    },
    // 每次消失的时候要做的事
    detach: function detach() {},
    // 生成月份项数组 monthList
    generateMonthList: function generateMonthList() {
      var _this3 = this;

      // 当前项
      var curItem = {
        year: this.curDate.year,
        month: this.curDate.month
      }; // 放到数组里

      this.monthList = [curItem]; // 添加之前的月份项

      for (var i = 0; i < this.beforeMonthNum; i++) {
        this.addLastMonthItem();
      } // 添加之后的月份项


      for (var _i = 0; _i < this.afterMonthNum; _i++) {
        this.addNextMonthItem();
      } // 遍历月份


      this.monthList.forEach(function (monthItem, monthIndex) {
        monthItem.dayArr = _this3.generateDayArr(monthItem.year, monthItem.month);
      });
    },
    // 添加上一个月
    addLastMonthItem: function addLastMonthItem() {
      // 在前面再插入一个月份
      var item = this.monthList[0];
      var lastYear = item.year,
          lastMonth = item.month;

      if (lastMonth === 1) {
        lastYear--;
        lastMonth = 12;
      } else {
        lastMonth--;
      }

      var lastItem = {
        year: lastYear,
        month: lastMonth
      };
      this.monthList.unshift(lastItem);
    },
    // 添加下一个月
    addNextMonthItem: function addNextMonthItem() {
      // 在后面再插入一个月份
      var item = this.monthList[this.monthList.length - 1];
      var nextYear = item.year,
          nextMonth = item.month;

      if (nextMonth === 12) {
        nextYear++;
        nextMonth = 1;
      } else {
        nextMonth++;
      }

      var nextItem = {
        year: nextYear,
        month: nextMonth
      };
      this.monthList.push(nextItem);
    },
    // 生成天数组
    generateDayArr: function generateDayArr(year, month) {
      var dayArr = []; // 得到某个月份的天数

      var monthDayNum = this.getMonthDayNum(year, month);

      for (var i = 0; i < monthDayNum; i++) {
        var obj = {
          year: year,
          // 年
          month: month,
          // 月
          day: i + 1 // 天

        };
        obj.dateStr = "".concat(year, "/").concat(month, "/").concat(obj.day); // 日期字符串；注意 iOS 须为 xxxx/xx/xx 这样

        obj.date = new Date(obj.dateStr); // date 对象

        obj.timestamp = obj.date.getTime(); // 时间戳

        obj.weekday = obj.date.getDay(); // 星期
        // 判断是否在默认选中项数组里

        this.judgeIsInDefaultCheckedArr(obj);
        dayArr.push(obj);
      } // 第一天不是周日的话，需要补齐


      var firstDayDiff = dayArr[0].weekday;
      var firstDayTimestamp = dayArr[0].timestamp;

      for (var _i2 = firstDayDiff - 1; _i2 >= 0; _i2--) {
        var _obj = {
          weekday: _i2,
          timestamp: firstDayTimestamp - 1 // 这里加时间戳是因为在计算选中区域的时候会根据时间戳计算

        };
        dayArr.unshift(_obj);
      } // 最后一天不是周六的话，需要补齐


      var lastDayWeekday = dayArr[dayArr.length - 1].weekday;
      var lastDayTimestamp = dayArr[dayArr.length - 1].timestamp;

      for (var _i3 = lastDayWeekday + 1; _i3 < 7; _i3++) {
        var _obj2 = {
          weekday: _i3,
          timestamp: lastDayTimestamp + 1 // 这里加时间戳是因为在计算选中区域的时候会根据时间戳计算

        };
        dayArr.push(_obj2);
      }

      return dayArr;
    },
    // 判断是否在默认选中的数组里
    judgeIsInDefaultCheckedArr: function judgeIsInDefaultCheckedArr(dayItem) {
      var _this4 = this;

      // 获得选中项长度
      var checkedArrLength = this.checkedArr.length;

      if (!checkedArrLength) {
        return false;
      }

      var isInIndex = -1; // 遍历默认选中项数组

      this.checkedArr.forEach(function (checkedItem, checkedIndex) {
        // 如果天在默认选中项数组里
        if (checkedItem.dayItem.timestamp === dayItem.timestamp) {
          isInIndex = checkedIndex; // 设置选中

          dayItem.checked = true; // 如果长度为 2 并且两个日期相等

          /* eslint-disable */

          if (checkedArrLength === 2 && _this4.checkedArr[0].dayItem.timestamp === _this4.checkedArr[1].dayItem.timestamp && _this4.sameDayText) {
            dayItem.text = _this4.sameDayText;
          }
          /* eslint-enable */
          // 如果长度为 2 并且是第一个日期
          else if (checkedArrLength === 2 && checkedIndex === 0) {
              dayItem.text = _this4.startText;
            } // 如果长度为 2 并且是后一个日期
            else if (checkedArrLength === 2 && checkedIndex === 1) {
                dayItem.text = _this4.endText;
              } // 如果长度为 1
              else if (checkedArrLength === 1) {
                  dayItem.text = _this4.startText;
                } // 赋值


          checkedItem.dayItem = dayItem;
        }
      });
      return !isInIndex === -1;
    },
    // 判断是否在选择区域内
    judgeIsInCheckedArea: function judgeIsInCheckedArea(monthItem) {
      var _this5 = this;

      // 长度小于 2 时
      if (this.checkedArr.length < 2) {
        monthItem.dayArr.forEach(function (item, index) {
          _this5.$set(item, 'isInCheckedArea', false);

          _this5.$set(item, 'isInCheckedAreaLeft', false);

          _this5.$set(item, 'isInCheckedAreaRight', false);
        });
      } // 长度等于 2 时
      else if (this.checkedArr.length === 2) {
          var startTimestamp = this.checkedArr[0].dayItem.timestamp;
          var endTimestamp = this.checkedArr[1].dayItem.timestamp; // 如果开始结束都是同一天

          if (startTimestamp === endTimestamp) {
            return;
          }

          monthItem.dayArr.forEach(function (item, index) {
            if (item.timestamp > startTimestamp && item.timestamp < endTimestamp) {
              _this5.$set(item, 'isInCheckedArea', true);
            } else if (item.timestamp === startTimestamp) {
              _this5.$set(item, 'isInCheckedAreaRight', true);
            } else if (item.timestamp === endTimestamp) {
              _this5.$set(item, 'isInCheckedAreaLeft', true);
            } else {
              _this5.$set(item, 'isInCheckedArea', false);

              _this5.$set(item, 'isInCheckedAreaLeft', false);

              _this5.$set(item, 'isInCheckedAreaRight', false);
            }
          });
        }
    },

    /**
     * 判断是否是闰年
     * 其实只要满足下面几个条件即可：
     * 1.普通年能被4整除且不能被100整除的为闰年。如2004年就是闰年,1900年不是闰年
     * 2.世纪年能被400整除的是闰年。如2000年是闰年，1900年不是闰年
     *
     * @param  {number} year 要判断的年份
     * @return {boolean} isLeapYear 返回布尔值
     */
    isLeapYear: function isLeapYear(year) {
      return !(year % (year % 100 ? 4 : 400));
    },
    // 得到某个月份的天数
    getMonthDayNum: function getMonthDayNum(year, month) {
      var isLeapYear = this.isLeapYear(year);

      if (isLeapYear) {
        return this.monthDayNumArrLeapYear[month - 1];
      }

      return this.monthDayNumArrNormalYear[month - 1];
    },
    // 天点击事件
    handleDayClick: function handleDayClick(obj) {
      // 不在时间范围内的不选
      if (obj.dayItem.timestamp < this.curDate.timestamp) {
        return;
      } // 没有日期对象的不选


      if (!obj.dayItem.date) {
        return;
      } // 单选


      if (this.type === 1) {
        this.radioCheck(obj);
      } // 范围选择
      else if (this.type === 2) {
          this.rangeCheck(obj);
        }
    },
    // 单选
    radioCheck: function radioCheck(obj) {
      var curDay = {}; // 如果没有上次选中的

      if (this.checkedArr.length === 0) {
        // 当前天
        curDay = {
          dayItem: obj.dayItem
        }; // 置为选中态

        this.$set(obj.dayItem, 'checked', true); // 设置起始文字

        this.$set(obj.dayItem, 'text', this.startText); // 扔到数组里

        this.checkedArr.push(curDay);
      } // 如果上次选中的只有一个
      else if (this.checkedArr.length === 1) {
          var lastItem = this.checkedArr[0]; // 清空

          this.$set(this.checkedArr[0].dayItem, 'checked', false);
          this.$set(this.checkedArr[0].dayItem, 'text', '');
          this.checkedArr.splice(0, 1); // 如果不等于，再重新选中；如果相等，就直接删了

          if (lastItem.dayItem.timestamp !== obj.dayItem.timestamp) {
            // 当前天
            curDay = {
              dayItem: obj.dayItem
            }; // 置为选中态

            this.$set(obj.dayItem, 'checked', true); // 设置起始文字

            this.$set(obj.dayItem, 'text', this.startText); // 扔到数组里

            this.checkedArr.push(curDay);
          }
        }
      /**
       * 点击有效日期项的时候触发
       *
       * @event change
       * @property {object} param1 点选日期的信息对象
       * @property {Date} param1.date 日期对象
       * @property {string} param1.text 日期显示文案
       * @property {number} param1.year 日期年份
       * @property {number} param1.month 日期月份
       * @property {number} param1.day 日期天数
       * @property {number} param1.weekday 日期星期数
       * @property {number} param1.timestamp 日期时间戳
       * @property {number} param1.type 组件类型
       */


      this.$emit('change', {
        type: this.type,
        date: obj.dayItem.date,
        year: obj.dayItem.year,
        month: obj.dayItem.month,
        text: obj.dayItem.text,
        day: obj.dayItem.day,
        timestamp: obj.dayItem.timestamp,
        weekday: obj.dayItem.weekday
      });
    },
    // 范围 check
    rangeCheck: function rangeCheck(obj) {
      var _this6 = this;

      var curDay = {}; // 如果没有上次选中的

      if (this.checkedArr.length === 0) {
        // 当前天
        curDay = {
          dayItem: obj.dayItem
        }; // 置为选中态

        this.$set(obj.dayItem, 'checked', true); // 设置起始文字

        this.$set(obj.dayItem, 'text', this.startText); // 扔到数组里

        this.checkedArr.push(curDay);
      } // 如果上次选中的只有一个
      else if (this.checkedArr.length === 1) {
          // 之前的选中天
          var previousDay = this.checkedArr[0]; // 当前天

          curDay = {
            dayItem: obj.dayItem
          }; // 置为选中态

          this.$set(obj.dayItem, 'checked', true); // 如果当前天时间晚于之前天

          if (curDay.dayItem.timestamp > previousDay.dayItem.timestamp) {
            // 放到后头
            this.checkedArr.push(curDay);
            this.$set(obj.dayItem, 'text', this.endText);
            this.$set(previousDay.dayItem, 'text', this.startText);
          } // 选择了同一天并且 sameDayText 存在
          else if (curDay.dayItem.timestamp === previousDay.dayItem.timestamp && this.sameDayText) {
              this.$set(this.checkedArr[0].dayItem, 'text', this.sameDayText);
              this.checkedArr.push(curDay);
            } // 选择了同一天但是 sameDayText 不存在
            else if (curDay.dayItem.timestamp === previousDay.dayItem.timestamp && !this.sameDayText) {// console.log('不能选择同一天');
              } else {
                // 放到前头
                this.checkedArr.unshift(curDay);
                this.$set(obj.dayItem, 'text', this.startText);
                this.$set(previousDay.dayItem, 'text', this.endText);
              }
        } // 如果上次选中的有两个
        else if (this.checkedArr.length === 2) {
            // 如果两个是同一天，并且当前的点击项也是这一天

            /* eslint-disable */
            if (this.checkedArr[0].dayItem.timestamp === this.checkedArr[1].dayItem.timestamp && this.checkedArr[0].dayItem.timestamp === obj.dayItem.timestamp) {
              this.$set(this.checkedArr[1].dayItem, 'checked', false);
              this.$set(this.checkedArr[1].dayItem, 'text', '');
              this.$set(this.checkedArr[0].dayItem, 'checked', false);
              this.$set(this.checkedArr[0].dayItem, 'text', '');
              this.checkedArr.splice(0, 2);
            }
            /* eslint-enable */
            // 如果两个不是同一天
            else {
                // 当前天
                curDay = {
                  dayItem: obj.dayItem
                }; // 是否之前就存在的标志索引

                var inBeforeIndex = -1; // 遍历之前的

                this.checkedArr.forEach(function (item, index) {
                  // 如果时间戳有相等的
                  if (item.dayItem.timestamp === curDay.dayItem.timestamp) {
                    // 说明之前就存在
                    inBeforeIndex = index; // 置为未选中态

                    _this6.$set(item.dayItem, 'checked', false);

                    _this6.$set(item.dayItem, 'text', '');
                  }
                }); // 如果等于 -1，说明新的选项在之前的选项里

                if (inBeforeIndex !== -1) {
                  // 从原数组中删除
                  this.checkedArr.splice(inBeforeIndex, 1);
                } // 如果等于 -1，说明新的选项不是之前的选项，清空数组，重新选择
                else if (inBeforeIndex === -1) {
                    this.checkedArr.forEach(function (item, index) {
                      // 置为未选中态
                      _this6.$set(item.dayItem, 'checked', false);

                      _this6.$set(item.dayItem, 'text', '');
                    }); // 清空为空数组

                    this.checkedArr = []; // 当前天

                    curDay = {
                      dayItem: obj.dayItem
                    }; // 置为选中态

                    this.$set(obj.dayItem, 'checked', true);
                    this.$set(obj.dayItem, 'text', this.startText); // 放入数组里

                    this.checkedArr.push(curDay);
                  }
              }
          } // 触发 change 事件


      this.$emit('change', {
        type: this.type,
        date: obj.dayItem.date,
        year: obj.dayItem.year,
        month: obj.dayItem.month,
        text: obj.dayItem.text,
        day: obj.dayItem.day,
        timestamp: obj.dayItem.timestamp,
        weekday: obj.dayItem.weekday
      });
    },
    // 重置
    handleResetBtnClick: function handleResetBtnClick() {
      var _this7 = this;

      this.checkedArr.forEach(function (item, index) {
        // 清空
        _this7.$set(item.dayItem, 'checked', false);

        _this7.$set(item.dayItem, 'text', '');
      });
      this.checkedArr = [];
      /**
       * 重置按钮点击时触发
       *
       * @event reset
       */

      this.$emit('reset');
    },
    // 确定
    handleConfirmBtnClick: function handleConfirmBtnClick() {
      var _this8 = this;

      this.$emit('close');
      var arr = [];
      this.checkedArr.forEach(function (item, index) {
        var obj = {
          type: _this8.type,
          date: item.dayItem.date,
          year: item.dayItem.year,
          month: item.dayItem.month,
          day: item.dayItem.day,
          weekday: item.dayItem.weekday,
          timestamp: item.dayItem.timestamp,
          text: item.dayItem.text
        };
        arr.push(obj);
      });
      /**
       * 确认按钮点击时触发
       *
       * @event confirm
       * @property {Array<object>} param1.selectedArr 为选中的日期数组(数组长度为 0 时代表没有选中项；长度为 1 时代表只选择了一个日期；长度为 2 时代表选择了两个日期，有先后顺序)
       * @property {Date} param1.selectedArr[].date 日期对象
       * @property {string} param1.selectedArr[].text 日期显示文案
       * @property {number} param1.selectedArr[].year 日期年份
       * @property {number} param1.selectedArr[].month 日期月份
       * @property {number} param1.selectedArr[].day 日期天数
       * @property {number} param1.selectedArr[].weekday 日期星期数
       * @property {number} param1.selectedArr[].timestamp 日期时间戳
       * @property {number} param1.selectedArr[].type 组件类型
       */

      this.$emit('confirm', {
        selectedArr: arr
      });
    },
    // 阻止滚动穿透
    handleTouchStart: function handleTouchStart(e) {
      this.handleTouchStartStopScrollThroughMixin(e);
    },
    handleTouchMove: function handleTouchMove(e) {
      this.handleTouchMoveStopScrollThroughMixin(e, this.$refs.body);
    }
  },
  watch: {
    isShow: function isShow(newVal, oldVal) {
      if (newVal) {
        this.isShowNum++;
        this.attach();
      } else {
        this.detach();
      }
    },
    defaultCheckedArr: function defaultCheckedArr(newVal, oldVal) {
      this.init();
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"isShow": {"type": Boolean,"default": false},"top": {"type": String,"default": "0"},"bottom": {"type": String,"default": "0"},"zIndex": {"type": Number,"default": 501},"btnColor": {"type": String,"default": "#000"},"btnBorderColor": {"type": String,"default": "#707379"},"btnFillColor": {"type": String,"default": "#555"},"dateCheckedBgColor": {"type": String,"default": "#3388ff"},"dateCheckedAreaBgColor": {"type": String,"default": "rgba(51, 136, 255, .1)"},"year": [Number,String],"month": [Number,String],"day": [Number,String],"type": {"type": Number,"default": 2},"startText": String,"endText": String,"sameDayText": String,"beforeMonthNum": {"type": Number,"default": 0},"afterMonthNum": {"type": Number,"default": 5},"defaultCheckedArr": {"type": Array,"default": function () { return []; }}};
            obj.components = {"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-btn": require("../Button/Button"),"c-calendar-month-item": require("../Calendar/CalendarMonthItem"),"c-transition": require("../Motion/Transition"),"c-mask": require("../Calendar/Mask")};

            
            

            


            
            obj.data = function () {
                return {"weekStrArr": ["日","一","二","三","四","五","六"],"monthDayNumArrLeapYear": [31,29,31,30,31,30,31,31,30,31,30,31],"monthDayNumArrNormalYear": [31,28,31,30,31,30,31,31,30,31,30,31],"curDate": {"year": this["year"],"month": this["month"],"day": this["day"],"timestamp": 0},"monthList": [],"checkedArr": this["defaultCheckedArr"],"bodyHeight": 0,"bodyScrollerHeight": 0,"scrollThreshold": 200,"scrollLoadProtect": false,"scrollTopProtect": {"isProtect": false,"timeout": null,"time": 1000},"scrollBottomProtect": {"isProtect": false,"timeout": null,"time": 1000},"isShowNum": 0};
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
            
            obj._scopeId = "data-a-a98a18b8";

            module.exports = obj;

            
        });
    