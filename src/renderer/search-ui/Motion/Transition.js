
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',[_vm._t("default")],2)},
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

var _animations = _interopRequireDefault(require("./animations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var doAnimations = function doAnimations(el, animations) {
  var conf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var opt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var aObjs = [];
  Object.keys(animations).forEach(function (key) {
    var config = Object.assign({}, animations[key] || {}, conf);

    var animation = _animations["default"][key] && _animations["default"][key](el, config, opt);

    if (animation) {
      aObjs.push(animation);
    }
  });
  return aObjs;
};

var _default = {
  functional: true,
  render: function render(createElement, context) {
    var props = context.props,
        data = context.data;
    data.props = data.props || {};
    data.props.css = false;
    data.on = data.on || {};
    var listeners = data.on;
    var enter = listeners.enter,
        leave = listeners.leave;
    var afterEnter = listeners['after-enter'] || listeners.afterEnter;
    var afterLeave = listeners['after-leave'] || listeners.afterLeave;

    if (props.enter) {
      var aObjs = [];

      listeners.enter = function (el, done) {
        var _props$enter = props.enter,
            animations = _props$enter.animations,
            options = _props$enter.options;
        var opt = Object.assign({
          fill: 'both'
        }, options || {});
        aObjs = doAnimations(el, animations, {}, opt);
        /* eslint-disable fecs-camelcase */

        el.__enter_aObjs__ = aObjs;

        if (aObjs[0]) {
          aObjs[0].promise.then(done);
        } else {
          done();
        }

        enter && enter(el, done);
      };

      listeners.afterEnter = function (el) {
        /* eslint-disable fecs-camelcase */
        el.__enter_aObjs__ && el.__enter_aObjs__.forEach(function (_ref) {
          var animation = _ref.animation;
          animation.cancelFix();
        });
        afterEnter && afterEnter(el);
      }; // 当动画未完成时切换 a-show 状态 会触发 Cancelled 此时重新执行 render, 需要将 aObjs 存储到 el 上


      listeners.enterCancelled = function (el) {
        /* eslint-disable fecs-camelcase */
        el.__enter_aObjs__ && el.__enter_aObjs__.forEach(function (_ref2) {
          var animation = _ref2.animation;
          animation.finish();
          animation.cancelFix();
        });
        el.__enter_aObjs__ = undefined;
      };
    }

    if (props.leave) {
      var _aObjs = [];

      listeners.leave = function (el, done) {
        var _props$leave = props.leave,
            animations = _props$leave.animations,
            options = _props$leave.options;
        var opt = Object.assign({
          fill: 'both'
        }, options || {});
        _aObjs = doAnimations(el, animations, {}, opt);
        /* eslint-disable fecs-camelcase */

        el.__leave_aObjs__ = _aObjs;

        if (_aObjs[0]) {
          _aObjs[0].promise.then(done);
        } else {
          done();
        }

        leave && leave(el, done);
      };

      listeners.afterLeave = function (el) {
        /* eslint-disable fecs-camelcase */
        el.__leave_aObjs__ && el.__leave_aObjs__.forEach(function (_ref3) {
          var animation = _ref3.animation;
          animation.cancelFix();
        });
        afterLeave && afterLeave(el);
      }; // 当动画未完成时切换 a-show 状态 会触发 Cancelled 此时重新执行 render, 需要将 aObjs 存储到 el 上


      listeners.leaveCancelled = function (el) {
        /* eslint-disable fecs-camelcase */
        el.__leave_aObjs__ && el.__leave_aObjs__.forEach(function (_ref4) {
          var animation = _ref4.animation;
          animation.finish();
          animation.cancelFix();
        });
        el.__enter_aObjs__ = undefined;
      };
    }

    return createElement('transition', context.data, context.children);
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"enter": {"type": Object,"required": true},"leave": {"type": Object,"required": true}};
            obj.components = {};

            obj.abstract = true;
            

            


            
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
    