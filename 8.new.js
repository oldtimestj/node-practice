/*
 * @Description: 
 * @version: 
 * @Author: tjwang
 * @Date: 2022-01-18 13:46:19
 * @LastEditors: tjwang
 * @LastEditTime: 2022-01-18 13:53:00
 */
function Animal (type) {
  this.type = type;
}
Animal.prototype.say = function () {
  console.log('say');
}
function mockNew (constructor, ...args) {
  let obj = {};
  obj.__proto__ = constructor.prototype;
  let result = constructor.apply(obj, args);
  return typeof result === 'object' ? result : obj;
}
let animal = new mockNew(Animal, '哺乳类');
console.log(animal.type);
animal.say();
