/*
 * @Description:
 * @version:
 * @Author: tjwang
 * @Date: 2021-12-14 14:48:38
 * @LastEditors: tjwang
 * @LastEditTime: 2021-12-14 15:13:53
 */
const fs = require('fs');
function after (times, callback) {
  let arr = []; //目前这里不关心顺序
  return (data, index) => {
    arr[index] = data; //保证顺序采用索引
    if (--times === 0) { //多个请求并发需要靠计数器来实现
      callback(arr);
    }
  }
}
let out = after(2, (arr) => {
  console.log('arr', arr);
})
fs.readFile('./text/a.txt', 'utf-8', (error, data) => {
  out(data, 0);
})
fs.readFile('./text/b.txt', 'utf-8', (error, data) => {
  out(data, 1);
})

//发布订阅模式 订阅 -》再发布