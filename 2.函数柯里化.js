/*
 * @Description:
 * @version:
 * @Author: tjwang
 * @Date: 2021-12-14 13:44:48
 * @LastEditors: tjwang
 * @LastEditTime: 2021-12-20 16:18:27
 */
// 函数柯里化 多个参数的传入 把他转化成n个函数
// 一般柯里化参数要求 都是一个个的传
//通用柯里化函数
function currying (fn) {
  //函数长度就是参数个数
  //console.log(fn.length)
  //存储每次调用的时候传入的变量
  const inner = (args = []) => {//存储每次调用时候传入的参数
    //主要靠递归 返回函数
    return args.length >= fn.length ? fn(...args) : (...userArgs) => inner([...args, ...userArgs]);
  }
  return inner();
}
//柯里化 让函数变得更具体一些,反柯里化 让函数范围变得更大
function isType (typing, val) {
  return Object.prototype.toString.call(val) == `[object ${typing}]`;
}
let utils = {};
['String', 'Number', 'Boolean', 'Null', 'Undefined'].forEach(type => {
  utils['is' + type] = currying(isType)(type);
});
console.log('123', utils.isString('123'));

function sum (a, b, c, d) {
  return a + b + c + d;
}

let sum1 = currying(sum);
let sum2 = sum1(1);
let sum3 = sum2(2, 3);
let result = sum3(4, 5);
console.log('result', result);