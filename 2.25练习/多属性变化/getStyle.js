export let getStyle = fn
/**
 * 
 * @param {*} dom 
 * @param {*} style 
 * @returns 
 */
function fn(dom,style){
    return window.getComputedStyle(dom).getPropertyValue(`${style}`);
}