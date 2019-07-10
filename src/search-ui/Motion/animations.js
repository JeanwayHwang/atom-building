/**
 * @file animations.js
 * @author zhangwentao <zhangwentao@baidu.com>
 */
import '@baidu/web-animations-js';
import Promise from '@searchfe/promise';

const EASING = {
    'ease': 'cubic-bezier(.25,.1,.25,1)',
    'linear': 'cubic-bezier(0,0,1,1)',
    'ease-in': 'cubic-bezier(.46,0,1,1)',
    'ease-out': 'cubic-bezier(0,0,.3,1)',
    'ease-in-out': 'cubic-bezier(.42,0,.52,1)'
};

const defOpt = {
    duration: 320,
    easing: 'ease-in-out'
};

const find = (array, predicate, context) => {
    if (typeof Array.prototype.find === 'function') {
        return array.find(predicate, context);
    }
    if (typeof predicate !== 'function') {
        throw new TypeError(predicate + ' is not a function');
    }

    context = context || this;
    const length = array.length;
    let i;

    for (i = 0; i < length; i++) {
        if (predicate.call(context, array[i], i, array)) {
            return array[i];
        }
    }
};

let willChangeMap = [];

const addWillChange = (el, propertyName) => {
    let obj = find(willChangeMap, item => item.el === el);

    if (!obj) {
        obj = {
            el,
            props: {}
        };
        willChangeMap.push(obj);
    }

    if (!obj.props[propertyName]) {
        obj.props[propertyName] = 0;
    }

    obj.props[propertyName]++;
    el.style.setProperty('will-change', Object.keys(obj.props).join(','));
    // el.style.setProperty('transform', 'translateZ(0)');
    // el.style.setProperty('-webkit-transform', 'translateZ(0)');
};

const removeWillChange = (el, propertyName) => {
    let obj = find(willChangeMap, item => item.el === el);
    if (!obj || obj.props[propertyName] === undefined) {
        return;
    }

    obj.props[propertyName]--;

    if (obj.props[propertyName] === 0) {
        delete obj.props[propertyName];
        const props =  Object.keys(obj.props);

        if (props.length === 0) {
            el.style.removeProperty('will-change');
            // el.style.removeProperty('transform');
            // el.style.removeProperty('-webkit-transform');
        }
        else {
            el.style.setProperty('will-change', props.join(','));
        }
    }
};

/**
 * doAnimate 动画执行函数
 *
 * @param {Element} el Element
 * @param {Array} frames 关键帧
 * @param {Object} conf
 *      direction: 'up'|'down'|'left'|'right' 滑入的方向
 *      reverse: true|false 是否反向动画
 * @param {Object} opt Web Animation Opions
 * @return {Object} {animation, promise} Web Animation 对象 和 Animation promise 对象
 */
const doAnimate = (el, frames, conf, opt) => {
    let properties = (frames && frames[0] && Object.keys(frames[0])) || [];
    properties.forEach(propertyName => {
        addWillChange(el, propertyName);
        el.style.removeProperty(propertyName);
    });

    if (conf.reverse) {
        frames.reverse();
    }

    opt = Object.assign({}, defOpt, opt);
    opt.easing = EASING[opt.easing] || opt.easing;

    let animation = el.animate(frames, opt);

    // fix 部分 android 机直接 cancel() 不生效的 bug
    animation.cancelFix = () => {
        animation.play();
        animation.cancel();
    };

    const promise = new Promise((resolve, reject) => {
        animation.onfinish = () => {
            resolve(animation);
        };
        animation.oncancel = () => {
            reject(animation);
        };
    }).then(animation => {
        properties.forEach(propertyName => removeWillChange(el, propertyName));
        return animation;
    }).catch(animation => {
        properties.forEach(propertyName => removeWillChange(el, propertyName));
        return animation;
    });

    return {animation, promise};
};

/**
 * slide 滑入动画封装
 *
 * @param {Element} el Element
 * @param {Object} conf
 *      direction: 'up'|'down'|'left'|'right' 滑入的方向
 *      reverse: true|false 是否反向动画
 * @param {Object} opt Web Animation Opions
 * @return {Object} see doAnimate()
 */
export const slide = (el, conf = {}, opt = {}) => {
    let frames;
    switch (conf.direction) {
        case 'up':
            frames = [{
                transform: 'translateY(100%)'
            }, {
                transform: 'translateY(0)'
            }];
            break;
        case 'left':
            frames = [{
                transform: 'translateX(-100%)'
            }, {
                transform: 'translateX(0)'
            }];
            break;
        case 'right':
            frames = [{
                transform: 'translateX(100%)'
            }, {
                transform: 'translateX(0)'
            }];
            break;
        case 'down':
        default:
            frames = [{
                transform: 'translateY(-100%)'
            }, {
                transform: 'translateY(0)'
            }];
            break;
    }

    return doAnimate(el, frames, conf, opt);
};

/**
 * slideUp 动画封装
 * slide + {direction: 'up'}
 * @param {Element} el Element
 * @param {Object} conf reverse: true|false 是否反向动画
 * @param {Object} opt Web Animation Opions
 * @return {Object} see doAnimate()
 * @see slide
 */
export const slideUp = (el, conf = {}, opt = {}) => {
    const config = Object.assign({direction: 'up'}, conf);
    return slide(el, config, opt);
};

/**
 * slideDown 动画封装
 * slide + {direction: 'down'}
 * @param {Element} el Element
 * @param {Object} conf reverse: true|false 是否反向动画
 * @param {Object} opt Web Animation Opions
 * @return {Object} see doAnimate()
 * @see slide
 */
export const slideDown = (el, conf = {}, opt = {}) => {
    const config = Object.assign({direction: 'down'}, conf);
    return slide(el, config, opt);
};

/**
 * expand 展开动效封装
 *
 * @param {Element} el Element
 * @param {Object} conf reverse: true|false 是否反向动画
 * @param {Object} opt Web Animation Opions
 * @return {Object} see doAnimate()
 */
export const expand = (el, conf = {}, opt = {}) => {
    // removeProperty height to get real bound and animate it
    el.style.removeProperty('height');
    const bounds = el.getBoundingClientRect();
    const height = bounds.height;
    let frames = [{
        height: 0
    }, {
        height: `${height}px`
    }];

    return doAnimate(el, frames, conf, opt);
};

/**
 * opacity 淡入动效封装
 *
 * @param {Element} el Element
 * @param {Object} conf
 *      reverse: true|false 是否反向动画
 *      frames: [0, .5] 起始的 keyframe (opacity)
 * @param {Object} opt Web Animation Opions
 * @return {Object} see doAnimate()
 */
export const opacity = (el, conf = {}, opt = {}) => {
    let keys = [0, 1];
    if (conf.frames) {
        keys = conf.frames;
    }

    let frames = [{
        opacity: keys[0]
    }, {
        opacity: keys[1]
    }];

    return doAnimate(el, frames, conf, opt);
};

/**
 * flip 动效封装
 *
 * @param {Element} el Element
 * @param {Object} conf
 *      reverse: true|false 是否反向动画
 *      delta: {x, y, w, h} flip 的 scale 和位移
 * @param {Object} opt Web Animation Opions
 * @return {Object} see doAnimate()
 */
export const flip = (el, conf = {}, opt = {}) => {
    let {x, y, w, h} = conf.delta;

    if (conf.reverse) {
        x = -x;
        y = -y;
        w = 1 / w;
        h = 1 / h;
    }

    let frames = [{
        transformOrigin: 'top left',
        transform: `translate(${x}px, ${y}px) scale(${w}, ${h})`
    }, {
        transformOrigin: 'top left',
        transform: 'none'
    }];

    return doAnimate(el, frames, conf, opt);
};

/**
 * rotate 动画封装
 *
 * @param {Element} el Element
 * @param {Object} conf
 *      reverse: true|false 是否反向动画
 *      frames: [0, 180] 起始的 keyframe (rotate deg)
 * @param {Object} opt Web Animation Opions
 * @return {Object} see doAnimate()
 */
export const rotate = (el, conf = {}, opt = {}) => {
    let frames = [{
        transform: `rotate(${conf.frames[0]}deg)`
    }, {
        transform: `rotate(${conf.frames[1]}deg)`
    }];

    return doAnimate(el, frames, conf, opt);
};

/**
 * animate 动画封装
 *
 * @param {Element} el Element
 * @param {Object} conf
 *      reverse: true|false 是否反向动画
 *      frames: [{}, {}] 起始的 keyframe
 * @param {Object} opt Web Animation Opions
 * @return {Object} see doAnimate()
 */
export const animate = (el, conf = {}, opt = {}) => {
    let frames = conf.frames;
    return doAnimate(el, frames, conf, opt);
};

/* eslint-disable fecs-export-on-declare */
export default {
    rotate,
    slide,
    slideUp,
    slideDown,
    opacity,
    fadeIn: opacity,
    expand,
    flip,
    animate
};
