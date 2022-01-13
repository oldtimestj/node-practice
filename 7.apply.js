/*
 * @Description: 
 * @version: 
 * @Author: tjwang
 * @Date: 2022-01-13 16:55:36
 * @LastEditors: tjwang
 * @LastEditTime: 2022-01-13 17:01:20
 */
/*
 * @Description: 
 * @version: 
 * @Author: tjwang
 * @Date: 2022-01-11 10:16:01
 * @LastEditors: tjwang
 * @LastEditTime: 2022-01-13 16:55:10
 */
function fn1 () {
  console.log(this, arguments);
}
function fn2 () {
  console.log(this, 2);
}

//apply的特点
//1、可以改变当前函数的this指向
//2、还会让当前的函数执行
Function.prototype.apply = function (context, args) {
  context = context ? Object(context) : window;
  context.fn = this;
  if (!args) {
    context.fn();
  }
  let r = eval('context.fn(' + args + ')');
  delete context.fn;
  return r;
}
fn1.apply(fn2, [1, 2, 3])