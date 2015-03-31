var person = {  
  name: "Brendan Eich",  
  hello: function(thing) {  
    console.log(this.name + " says hello " + thing);  
  }  
}

var bind = function(func, thisValue) {  
  return function() {  
    return func.apply(thisValue, arguments);  
  }  
}  
   
var boundHello = bind(person.hello, person);  
boundHello("world") // "Brendan Eich says hello world"  

/*
注意其中的 arguments
 */

Function.prototype.bind_ = function(thisValue) {
    console.log( "1:" + this );
    var that = this;
    //内部函数
    return function(){
        console.log( "2:" + this );
        return that.apply(thisValue , arguments)
    }
}
var boundHello = person.hello.bind_(person);
boundHello("world") // "Brendan Eich says hello world" 
/*
注意:
1: function hello
2: [object:Window ]

bind 与 call/apply 的区别:前者静态绑定,后者动态绑定
 */

/*
ES5为所有的Function 对象引入一个新的bind 方法，它实现下面的行为

当你需要一个原始函数作为回调传递时这更有用：
 */
var person = {
  name: "Alex Russell",
  hello: function() { console.log(this.name + " says hello world"); }
}
 
$("#some-div").click( person.hello.bind(person) );
 
// when the div is clicked, "Alex Russell says hello world" is printed
