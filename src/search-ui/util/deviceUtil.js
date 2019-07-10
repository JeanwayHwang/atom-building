/**
 * @file 设备工具
 */

/**
 * 是否为 iPhone 小屏手机，包括 4, 4s, 5, 5s, se 等
 *
 * @return {boolean} isIosSmall 是否为 iPhone 小屏手机
 */
export const isIosSmall = () => {
    let isIphone = /iphone/.test(navigator.userAgent.toLowerCase());
    let width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    return width < 321 && isIphone;
};

/**
 * 是否是低版本 Chrome
 *
 * @return {boolean} isLowChrome 是否为 Android 低版本 chrome 内核
 */
export const isLowChrome = () => {
    let ua = navigator.userAgent.toLowerCase();
    let isAndroid = /android/.test(ua);
    if (isAndroid) {
        let chromeReg = /chrome\/(\w*)/g;
        let chromeos = ua.match(chromeReg);
        if (chromeos && chromeos[0]) {
            chromeos = parseInt(chromeos[0].substring(7), 10);
            if (chromeos > 52) {
                return false;
            }
            return true;
        }
    }
    return false;
};
