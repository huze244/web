import { getStyle } from "./getStyle.js";
export default fn
/**
 * 
 * @param {*} dom 
 * @param {*} style 
 */
function fn(dom, targets, callback) {
    let timer = setInterval(() => {
        for (let key in targets) {

            let current = key == 'opacity' ? parseFloat(getStyle(dom, key)) * 1000 : parseFloat(getStyle(dom, key));
            // 计算此次移动距离吧
            let target = key == 'opacity' ? targets[key] * 1000 : targets[key]
            let method = target - current > 0 ? 'ceil' : 'floor';
            let speed = Math[method]((target - current) * 0.05);
            if (current == target) {
                delete targets[key];
                if (Object.keys(targets).length == 0) {
                    clearInterval(timer);
                }
                console.log('over');
                Object.prototype.toString.call(callback) == '[object Function]' && callback();
            } else {
                if (key == 'opacity') {
                    dom.style[key] = (current + speed) / 1000;
                } else {
                    dom.style[key] = current + speed + 'px';
                }
            }
        }
    }, 20)
}