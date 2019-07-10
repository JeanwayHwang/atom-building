/**
 * @file dom 工具
 */

/**
 * 给 dom 增加 transition 动效
 *
 * @param {HTMLDocument} dom 要添加动效的 dom
 * @param {string} transition css transition 字符串
 */
export const addDomTransition = (dom, transition) => {
    dom.style.transition = transition;
    dom.style.webkitTransition = transition;
};

/**
 * 清除 dom transition 动效
 *
 * @param {HTMLDocument} dom 要添加动效的 dom
 */
export const clearDomTransition = dom => {
    dom.style.transition = 'none';
    dom.style.webkitTransition = 'none';
};

/**
 * 获得屏幕宽度
 *
 * @param {Object} vm vnode 实例
 *
 * @return {number} width 屏幕宽度
 */
export const getScreenWidth = vm => {
    let width = window.innerWidth;
    if (vm && vm.$platform === 'pc') {
        width = 538;
    }
    return width;
};

/**
 * 获得屏幕高度
 *
 * @return {number} height 屏幕高度
 */
export const getScreenHeight = () => window.innerHeight;

export function getRect(el) {
    return {
        top: el.offsetTop,
        left: el.offsetLeft,
        width: el.offsetWidth,
        height: el.offsetHeight
    };
}
