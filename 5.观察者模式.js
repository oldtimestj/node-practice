/*
 * @Description:
 * @version:
 * @Author: tjwang
 * @Date: 2021-12-14 16:16:05
 * @LastEditors: tjwang
 * @LastEditTime: 2021-12-14 16:47:17
 */
//观察者模式是基于类的
class Subject {  // 被观察者 被观察者需要将观测者收集
  constructor(name) {
    this.name = name;
    this.state = '非常开心';
    this.observers = []; //发布订阅模式
  }
  attach (o) {
    this.observers.push(o); //依赖收集
  }
  setState (newState) {
    this.state = newState;
    this.observers.forEach(o => o.update(this.name, newState))
  }
}

class Observer { //观察者
  constructor(name) {
    this.name = name;
  }
  update (name, newState) {
    console.log(this.name + ':' + name + '当前' + newState);
  }
}

let s = new Subject('小宝宝');
let o1 = new Observer('爸爸');
let o2 = new Observer('妈妈');
s.attach(o1);
s.attach(o2);
s.setState('不开心了');

//vue数据变了(状态)  视图要更新(通知依赖的视图更新)