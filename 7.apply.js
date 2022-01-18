/*
 * @Description: 
 * @version: 
 * @Author: tjwang
 * @Date: 2022-01-13 16:55:36
 * @LastEditors: tjwang
 * @LastEditTime: 2022-01-14 16:25:48
 */
// /*
//  * @Description: 
//  * @version: 
//  * @Author: tjwang
//  * @Date: 2022-01-13 16:55:36
//  * @LastEditors: tjwang
//  * @LastEditTime: 2022-01-13 17:01:20
//  */
// /*
//  * @Description: 
//  * @version: 
//  * @Author: tjwang
//  * @Date: 2022-01-11 10:16:01
//  * @LastEditors: tjwang
//  * @LastEditTime: 2022-01-13 16:55:10
//  */
// function fn1 () {
//   console.log(this, arguments);
// }
// function fn2 () {
//   console.log(this, 2);
// }

// //apply的特点
// //1、可以改变当前函数的this指向
// //2、还会让当前的函数执行
// Function.prototype.apply = function (context, args) {
//   context = context ? Object(context) : window;
//   context.fn = this;
//   if (!args) {
//     context.fn();
//   }
//   let r = eval('context.fn(' + args + ')');
//   delete context.fn;
//   return r;
// }
// fn1.apply(fn2, [1, 2, 3])

let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
]

/**
 * 递归查找，获取children
 */
const getChildren = (data, result, pid) => {
  for (const item of data) {
    if (item.pid === pid) {
      const newItem = { ...item, children: [] };
      result.push(newItem);
      getChildren(data, newItem.children, item.id);
    }
  }
}

/**
* 转换方法
*/
// const arrayToTree = (data, pid) => {
//   const result = [];
//   getChildren(data, result, pid)
//   return result;
// }
// const arrayToTree = (data, id = 'id', pid = 'pid', children = 'children') => {
//   const result = [];
//   const hash = {};
//   arr.forEach((item, index) => {
//     hash[data[index][id]] = data[index];
//   })
//   arr.forEach((item) => {
//     const hashVP = hash[item[pid]];
//     if (hashVP) {
//       !hashVP[children] && (hashVP[children] = []);
//       hashVP[children].push(item);
//     } else {
//       result.push(item);
//     }
//   })
//   return result;
// }
function arrayToTree (items) {
  let res = []
  let getChildren = (res, pid) => {
    for (const i of items) {
      if (i.pid === pid) {
        const newItem = { ...i, children: [] }
        res.push(newItem)
        getChildren(newItem.children, newItem.id)
      }
    }
  }
  getChildren(res, 0)
  return res
}
console.log(arrayToTree(arr));
