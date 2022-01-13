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
  console.log(2);
}

//call的特点
//1、可以改变当前函数的this指向
//2、还会让当前的函数执行
// fn1.call('hello');
// Function.prototype.call = function(context){
//   this()
// }
//fn1.call(fn2)  // 1
// fn1.call.call.call(fn2)
Function.prototype.call = function (context) {
  context = context ? Object(context) : window;
  context.fn = this;
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']');
  }
  let r = eval('context.fn(' + args + ')');
  delete context.fn;
  return r;
}
fn1.call('hello', '1', '2', '3')