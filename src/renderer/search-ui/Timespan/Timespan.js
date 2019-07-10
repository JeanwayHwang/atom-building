
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{attrs:{"aria-label":_vm.timeLabel,"role":"text"},on:{"click":function($event){_vm.$emit('click', $event)}}},[_vm._v("\n    "+_vm._s(_vm.timespan)+"\n")])},
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
 * @file 时间差组件c-timespan
 * @author haoyan@baidu.com
 */
var _default = {
  computed: {
    timespan: function timespan() {
      if (!this.time) {
        return '';
      }

      var yearUnit = '-';
      var monthUnit = '-';
      var dayUnit = ''; // 如果是中文类型

      if (this.type === 2) {
        yearUnit = '年';
        monthUnit = '月';
        dayUnit = '日';
      }

      var now = this.serverTime || new Date().getTime();
      now = parseInt(now, 10); // 单位：ms

      var time = parseInt(this.time, 10); // 单位：s

      var dur = parseInt((now - time) / 1000, 10);
      var format = this.format;
      var suffix = dur >= 0 ? '前' : '后';
      var timespan = '';

      if (format(new Date(now), 'yyyy') !== format(new Date(time), 'yyyy')) {
        timespan = format(new Date(time), "yyyy".concat(yearUnit, "MM").concat(monthUnit, "dd").concat(dayUnit));
        this.timeLabel = format(new Date(time), 'yyyy年MM月dd日');
      } else if (Math.abs(dur) === 0) {
        timespan = '刚刚';
      } else if (Math.abs(dur) > 0 && Math.abs(dur) < 60) {
        timespan = parseInt(Math.abs(dur), 10) + '秒' + suffix;
      } else if (Math.abs(dur / 60) < 60) {
        timespan = parseInt(Math.abs(dur / 60), 10) + '分钟' + suffix;
      } else if (Math.abs(dur / 60 / 60) < 24) {
        timespan = parseInt(Math.abs(dur / 60 / 60), 10) + '小时' + suffix;
      } else if (Math.abs(dur / 24 / 60 / 60) <= 7) {
        timespan = parseInt(Math.abs(dur / 24 / 60 / 60), 10) + '天' + suffix;
      } else {
        timespan = format(new Date(time), "MM".concat(monthUnit, "dd").concat(dayUnit));
        this.timeLabel = format(new Date(time), 'MM月dd日');
      }

      return timespan;
    }
  },
  methods: {
    format: function format(date, fmt) {
      var o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
      };

      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
      }

      Object.keys(o).map(function (k) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
      });
      return fmt;
    }
    /**
     * click event.
     *
     * @event click
     */

  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"time": [Number,String],"serverTime": [Number,String],"type": {"type": Number,"default": 1}};
            obj.components = {};

            
            

            


            
            obj.data = function () {
                return {"timeLabel": ""};
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
    