/*
 * @Description:
 * @version:
 * @Author: tjwang
 * @Date: 2021-12-14 15:14:24
 * @LastEditors: tjwang
 * @LastEditTime: 2021-12-14 16:14:14
 */
const fs = require('fs');

//发布订阅模式 订阅 -》再发布
let events = {
  _events: [],
  on (fn) {
    this._events.push(fn);
  },
  emit (data) {
    this._events.forEach(fn => fn(data));
  }
}
//订阅有顺序，可以采用数组
//发布订阅模式就是把多个核心方法先暂存起来,最后一次执行
events.on(() => {
  console.log('每读取一次 就触发一次');
})
let arr = [];
events.on((data) => {
  arr.push(data);
})
events.on(() => {
  if (arr.length === 2) { //最终结果还是计数器
    console.log('读取完毕', arr);
  }
})
fs.readFile('./text/a.txt', 'utf-8', (error, data) => {
  events.emit(data);
})
fs.readFile('./text/b.txt', 'utf-8', (error, data) => {
  events.emit(data);
})

//观察者模式 vue2 基于发布订阅的（包含发布订阅）
// 发布订阅没有依赖关系
//对于观察者 观察者 被观察者