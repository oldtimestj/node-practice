/*
 * @Description:
 * @version:
 * @Author: tjwang
 * @Date: 2021-12-14 13:44:48
 * @LastEditors: tjwang
 * @LastEditTime: 2021-12-14 14:04:00
 */
//通用柯里化函数
function currying (fn) {
  //函数长度就是参数个数
  //console.log(fn.length)
  //存储每次调用的时候传入的变量
  const inner = (args = []) => {
    return args.length >= fn.length ? fn(...args) : (...userArgs) => inner([...args, ...userArgs]);
  }
  return inner();
}
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