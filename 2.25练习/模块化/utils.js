// 默认导出  语法  export default 导出的数据
// 具名导出  export let/const/var 名称 = 数据
 
function add(a, b) {
  return a + b;
}
let num = 1;
// export default fn;
// 默认导出语句 在一个模块中只能写一次 如果真想使用默认导出 导出多分数据 可以将需要导出的数据组合成为对象导出
// export default num;
export default {
  // 属性名称叫做fn 属性值是fn函数
  add: add,
  // 属性名称叫做num 属性值num变量
  'num': num
}
