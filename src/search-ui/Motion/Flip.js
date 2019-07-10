/**
 * @file animations.js
 * @author zhangwentao <zhangwentao@baidu.com>
 *
 * 简单的 Flip 封装
 * new Flip(options?)
 * flip.first(ele)
 * flip.last(ele | fn)
 * flip.play(options?)
 */

import flip from './animations';

export default class Flip {
    constructor() {
        this.firstEle = null;
        this.lastEle = null;
        this.bounds = null;
        this.lastBounds = null;
        this.delta = null;
    }
    // 读取 first bounds
    first(ele) {
        this.firstEle = ele;
        this.bounds = ele.getBoundingClientRect();
        return this.bounds;
    }

    // 读取 last bounds, 并计算 delta
    last(eleOrFn) {
        let ele;
        if (typeof eleOrFn === 'function') {
            ele = this.firstEle;
            eleOrFn(ele);
        }
        else {
            ele = this.lastEle = eleOrFn;
        }

        const bounds = this.lastBounds = this.lastEle.getBoundingClientRect();

        const x = this.bounds.left - bounds.left;
        const y = this.bounds.top - bounds.top;
        const w = this.bounds.width / bounds.width;
        const h = this.bounds.height / bounds.height;

        const delta = {x, y, w, h};
        this.delta = delta;

        return bounds;
    }

    // play 调用 animations 的 flip
    play(el, conf = {}, opt = {}) {

        el = el || this.firstEle || this.lastEle;
        conf.delta = this.delta;

        return flip(el, conf, opt);
    }
}
