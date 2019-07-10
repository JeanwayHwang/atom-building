/**
 * @file 异步文件的一个工具
 * @author cxtom(cxtom2008@gmail.com)
 */

const head = document.head || document.getElementsByTagName('head')[0];

/**
 * 创建一个 style 标签，插入到 head 中
 *
 * @param {string} id 唯一id
 * @param {string} name 组件名称
 * @return {HTMLStyleElement}
 */
function createStyleElement(id, name) {
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.id = id;
    styleElement.setAttribute('for', name);
    head.appendChild(styleElement);
    return styleElement;
}

/**
 * 将 css 内容添加到 tag 上，并防止重复
 *
 * @param {string} css css 4内容
 * @param {string} id 唯一id
 * @param {string} name 组件名称
 */
export function applyToTag(css, id, name) {

    id = `__MODULE_PREFIX__/${id}`;

    let ele = document.getElementById(id);

    if (ele && ele.tagName.toLowerCase() === 'style') {
        return;
    }

    const styleElement = createStyleElement(id, name);
    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = css;
    }
    else {
        while (styleElement.firstChild) {
            styleElement.removeChild(styleElement.firstChild);
        }
        styleElement.appendChild(document.createTextNode(css));
    }
}
