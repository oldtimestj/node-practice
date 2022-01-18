/*
 * @Description:
 * @version:
 * @Author: tjwang
 * @Date: 2022-01-18 14:57:27
 * @LastEditors: tjwang
 * @LastEditTime: 2022-01-18 16:22:08
 */
// 1、bind方法可以绑定this指向 绑定参数
// 2、bind方法返回一个绑定后的函数（高阶函数）
// 3、如果绑定的函数被new了，当前函数this指向就是当前的实例
// 4、new出来的结果可以找到原有类的原型
let obj = {
  name: 'tjwang'
}

function fn (name, age) {
  console.log('11', this);
  console.log(this.name + '养了一只' + name + age + '岁了');
}

Function.prototype.bind = function (context, ...args) {
  let that = this; //that就是fn 
  function Fn () { //Object.create()的原理

  }
  function fBound () { // this
    let bindArgs = Array.prototype.slice.call(arguments);
    return that.apply(this instanceof fBound ? this : context, bindArgs.concat(args));
  }
  fn.prototype = this.prototype;
  fBound.prototype = new Fn();
  return fBound;
}
fn.prototype.flag = '哺乳类';
let bindFn = fn.bind(obj, '猫');
let instance = new bindFn(9);