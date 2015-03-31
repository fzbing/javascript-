// 关于 this 的说明 http://www.ibm.com/developerworks/cn/web/1207_wangqf_jsthis/
// http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/
// http://blog.csdn.net/littlechang/article/details/8180550


/*
对于内部函数，即声明在另外一个函数体内的函数，这种绑定到全局对象的方式会产生另外一个问题。
我们仍然以前面提到的 point 对象为例，这次我们希望在 moveTo 方法内定义两个函数，
分别将 x，y 坐标进行平移。结果可能出乎大家意料，不仅 point 对象没有移动，
反而多出两个全局变量 x，y。
*/

var point = {
    x: 0,
    y: 0,
    moveTo: function(x, y) {
        // 内部函数
        var moveX = function(x) {
            this.x = x; //this 绑定到了哪里？
        };
        // 内部函数
        var moveY = function(y) {
            this.y = y; //this 绑定到了哪里？
        };

        moveX(x);
        moveY(y);
    }
};
point.moveTo(1, 1);
point.x; //==>0 
point.y; //==>0 
x; //==>1 
y; //==>1

/*
这属于 JavaScript 的设计缺陷，
正确的设计方式是内部函数的 this 应该绑定到其外层函数对应的对象上，
为了规避这一设计缺陷，聪明的 JavaScript 程序员想出了变量替代的方法，
约定俗成，该变量一般被命名为 that。

//
moveX被闭包 对上 隐藏
 */

var point = {
    x: 0,
    y: 0,
    moveTo: function(x, y) {
        var that = this;
        // 内部函数
        var moveX = function(x) {
            that.x = x;
        };
        // 内部函数
        var moveY = function(y) {
            that.y = y;
        }
        moveX(x);
        moveY(y);
    }
};
point.moveTo(1, 1);
point.x; //==>1 
point.y; //==>1

/*
另一种理解,moveX(x)函数的宿主对象是什么?
首先他们都在函数moveTo的构成的闭包中,
他们的宿主对象为全局变量
(
)
 */

var point = {
    x: 0,
    y: 0,
    moveTo: function(x, y) {
        var that = this;
        // 内部函数
        this.moveX = function(x) {
            alert(this);
            this.x = x; //this 绑定到了哪里？
        };
        // 内部函数
        this.moveY = function(y) {
            this.y = y; //this 绑定到了哪里？
        };

        this.moveX(x);
        this.moveY(y);
    }
};

point.moveTo(1, 1);
console.log(point.x); //==>0 
console.log(point.y); //==>0
console.log(x); //==>1 
console.log(y); //==>1

/*
内部函数的宿主对象为moveTo函数中的this,即point本身
 */