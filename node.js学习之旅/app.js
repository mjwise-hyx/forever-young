var a = 100;
/**
 * 原型练习
 */
//注意使用环境变量
//变量作用域
function fn(){
    var a = 200;
    
    function fn2(){
        var a = 300;
        console.log(a);
    }
    
    fn2();
}

fn();

//2.进程和线程
    /**
     * 进程负责为程序的运行提供必备的运行环境
     * 进程就相当于工厂中的车间
     */
    /**
     * 线程
     * 线程是计算机中的最小的计算到位，线程负责执行其中的一部分
     * 线程就相当于工厂中的工人
     * 
     * 单线程
     *      一个人干一个活
     * 多线程
     *      多个人干一个活
     * 
     */

//3.Node.js 是一个能够在服务器中运行JavaScript的开放源代码，跨平台JavaScript,
//解决性能问题的专家，搞一个破网站吧，从node.js 开始了解整个浏览器的架构。
//客户端和服务器怎么就这么难搞，咱是专业做这个的，为什么要绝望，思想不一样，
//用自己的语言阐释这个世界，
//来创造美好，征服自己，征服世界，拥有梦想，拥抱失败。
//js的世界总是抄来抄去，没一点实用效果，如果要自己搞的话需要整这个，在客户端和服务端之间架设
//一个node.js 服务器来处理高性能的程序。而我要做的就是记住自己是写程序的，自己是专业搞计算机的。
//而目前我掌握这些代码还有些吃力，所以我找来了很多人帮忙，但貌似他们对代码的理解也不够这么深。
//大家都是抱着一腔热血在奋斗，打创拼搏着自己的事业，而我能都在这里带领他们共同前进，我感到十分荣幸，
//由此，我有点想坚守在自己阵地上，做好每一件事情，处理好现实中的关系，希望跌脸的事情不要再发生，把好用的商品推给用户。
/********************************************
 * 
 * +++++++      +++++++       +++++++
 * + 客  + -->  + 服  +       +  数  +
 * + 户  +      + 务  + ----> +  据  +
 * + 端  + <--  + 端  +  i/o  +  库  +
 * +++++++      +++++++       +++++++
 * 
 **********************************************/

//  node导包

 var stuff =  require('./count');

 var pi = require('./count').pi;

 console.log(stuff.counter(['ruby','node.js','react']));
 console.log(stuff.adder(3,2));
 console.log(pi);


 //node.js事件
//  Element.on('click',function(){
//      console.log('clicked');
//  })

 var events = require('events');
 var util = require('util');

 var Person = function(name){
     this.name = name
 }

 util.inherits(Person,events.EventEmitter);
 var xiaoming = new Person('xiaoming');
 var lili = new Person('lili');
 var lucy = new Person('lucy');

 var person = [xiaoming,lili,lucy];
 
 person.forEach(function(person) {
    person.on('speak',function(message) {
        console.log(person.name + " said: " + message);
    })
 })
xiaoming.emit('speak','hi');
lucy.emit('speak','I want a curry');

 var myEmitter = new events.EventEmitter();

 myEmitter.on('someEvent',function(message){
    console.log(message);
 })

 myEmitter.emit('someEvent','the event was emitted');



 //文件学习
 var fs = require('fs');

 //Sync 同步，readFile 异步
var readMe = fs.readFile("readMe.txt","utf8",function(err,data){
    fs.writeFile("writeMe.txt",data,function(){
        console.log('writeMe has finished');
    });
});

var waitTill = new Date(new Date90.getTime() + 4 * 1000);
while(waitTill > new Date()){

}

console.log(readMe);

console.log("finished");