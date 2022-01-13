/*
 * @Description:
 * @version:
 * @Author: tjwang
 * @Date: 2021-12-14 13:43:47
 * @LastEditors: tjwang
 * @LastEditTime: 2021-12-20 15:01:26
 */
// 扩展方法 会用到高阶函数

function core (...args) { //核心代码
  // ...
  console.log('core', ...args);
  // ...
}

//给core函数增加一些额外的逻辑，但是不能更改核心代码

Function.prototype.before = function (cb) {
  //this = core
  // ...args在函数参数中叫剩余，在方法执行中叫拓展
  return (...args) => { //newCore 剩余晕算法-》可以把多个参数转成数组
    cb();
    this(...args); // 拓展运算符
  }
}
let newCore = core.before(() => {
  console.log('before');
})
newCore('a', 'b');
//1.如果我们想给函数进行扩展  可以使用高阶函数
//2.什么叫做闭包 
//函数的定义是有作用域的概念，一个函数定义的作用域和执行的作用域不在同一个 肯定会出现闭包