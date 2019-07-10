
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{class:_vm.iconClass ? _vm.iconClass : 'c-icon',domProps:{"innerHTML":_vm._s(_vm.icon)},on:{"click":function($event){_vm.$emit('click', $event)}}})},
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
 * @file icon
 * @author cxtom <cxtom2008@gmail.com>
 */

/* eslint-disable fecs-camelcase, fecs-properties-quote */
var ICON_MAP = {
  baidu: 384,
  loading: 93,
  play: 305,
  pause: 7,
  music_play: 306,
  music_play_line: 367,
  video_play: 309,
  video_play2: 84,
  music_pause: 315,
  download: 313,
  imgs: 41,
  "goto": 0,
  right_arrow: 5,
  kg_right_arrow: 46,
  right: 308,
  top: 310,
  down: 316,
  left: 387,
  down_circle: 25,
  back_to_first: 9,
  rise: 355,
  fall: 362,
  fair: 354,
  plus: 19,
  multiply: 17,
  star: 94,
  empty_star: 92,
  weibo_star: 12,
  hint: 30,
  hint_thin: 56,
  fullscreen: 2,
  open: 44,
  setting: 24,
  user: 27,
  praise: 28,
  refresh: 392,
  change: 29,
  dustbin: 23,
  mail: 20,
  msg: 42,
  close: 1,
  close_thin: 18,
  close_line: 26,
  exchange: 370,
  back_to_top: 382,
  check: 8,
  input: 390,
  glance: 59,
  commit: 337,
  add: 10,
  bus: 3,
  phone: 307,
  super_phone: 388,
  iphone: 6,
  search: 311,
  history: 31,
  link: 11,
  location: 312,
  trip: 55,
  position: 391,
  broadcast: 34,
  image: 338,
  photograph: 13,
  voice: 14,
  straight: 16,
  v: 339,
  register: 363,
  trolley: 35,
  smile: 21,
  cry: 22,
  hotel: 40,
  food: 39,
  view_spot: 38,
  price: 37,
  strategy: 36,
  comment: 45,
  feature: 43,
  calendar: 52,
  play_thin: 50,
  pause_thin: 49,
  note: 48,
  recommend: 51,
  subscribe: 53,
  sweep: 61,
  more: 60,
  more_circle: 67,
  takeaway: 70,
  plus2: 71,
  card: 74,
  park: 75,
  wifi: 76,
  navigation: 77,
  subway: 79,
  taxi: 78,
  share: 81,
  share2: 82,
  save: 80,
  group_more: 83,
  collect: 85,
  collect_thin: 86,
  order: 87,
  broadcast2: 88,
  consult: 62,
  share3: 58,
  official: 57,
  public_praise: 54,
  back: 336,
  more2: 63,
  user2: 64,
  search_thick: 65,
  share_thick: 66,
  v1: 68,
  v2: 15,
  v3: 32,
  vp: 33,
  photograph2: 72,
  voice2: 69,
  overall: 91,
  video_play3: 106,
  video_preview: 100,
  live_broadcast: 105,
  menu: 104,
  forbid: 103,
  home: 95,
  new_praise: 96,
  praised: 97,
  original_text: 102,
  education: 101,
  error: 99,
  voice_broadcast: 98,
  map: 73,
  list: 90,
  top_left: 107,
  feedback: 114,
  volume: 113,
  checkbox_uncheck: 112,
  checkbox_checked: 111,
  walk: 110,
  car: 109,
  subway2: 108,
  seat: 116,
  queue: 115,
  voice_playback: 118,
  bar_chart: 119,
  pie_chart: 120,
  baidu_text: 121,
  annotation: 117,
  trend_chart: 123,
  panorama: 124,
  security: 125,
  mip: 126,
  heart_hollow: 127,
  heart: 128,
  headset: 129,
  gesture: 130,
  candle: 131,
  about: 133,
  oppose: 132,
  oppose_hollow: 134,
  enlarge: 135,
  comment1: 136,
  refrigerator: 137,
  cooker: 138,
  TV: 139,
  air_conditioner: 140,
  heating: 141,
  heater: 142,
  toilet: 143,
  washer: 144,
  balcony: 145,
  wardrobe: 146,
  bed: 147,
  back_special: 148,
  close_special: 149,
  more_special: 150,
  microfinance: 151,
  appointment: 152,
  hide: 153,
  hotel2: 154,
  train: 155,
  expert: 156,
  red_envelopes: 157,
  music: 158,
  heat: 159,
  shop_hot: 160,
  forum: 162,
  diamond: 163,
  heat_line: 164,
  express: 165,
  calendar2: 166,
  weibo: 168
};
/* eslint-enable fecs-camelcase, fecs-properties-quote */

var _default = {
  computed: {
    icon: function icon() {
      if (this.code) {
        return this.code;
      }

      if (ICON_MAP[this.type] != null) {
        return '&#xe' + (1536 + ICON_MAP[this.type]).toString(16);
      }

      return '&#xe780';
    }
  }
};
/**
 * 点击事件
 *
 * @event click
 * @property {Event} param1 透传点击事件对象
 */

exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"type": {"type": String},"code": String,"iconClass": String};
            obj.components = {};

            
            

            


            
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
    