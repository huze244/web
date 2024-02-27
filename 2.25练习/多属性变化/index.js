import { getStyle } from "./getStyle.js";
export default fn
/**
 * 
 * @param {*} dom 
 * @param {*} style 
 */
function fn(dom,style){
    let timer;
    timer = setInterval(function(){
        for(let key in style){
            let current = parseFloat(getStyle(dom, key))
            let Mathfn = style[key]-current>0?'ceil':'floor'
            let speed = Math[Mathfn]((style[key]-current)*0.05);
            if(current == style[key]){
                delete style[key];
                if(Object.keys(style).length == 0)
                clearInterval(timer)
            }else{
                dom.style[key] = current + speed + 'px'
            }
        }
    },20)
}