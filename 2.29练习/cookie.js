/** 
 * @param {sting} key  
 * @param {*} value 
 * @param {*} expires //指定过期秒数 0表示关闭浏览器失效
 */
function setCookie(key,value,expires){
    if(expires == 0){
        return document.cookie = `${key}=${value};path/`;
    }
    let d = new Date();
    d.setTime(d.getTime()+expires*1000)
    document.cookie = `${key}=${value};path/;expires`+d.toUTCString();
}

function getCookie(){

}

function removeCookie(){

}