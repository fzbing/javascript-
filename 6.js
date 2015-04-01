/*
运算数(子表达式)的优先级

在js中,是从左向右的 取操作数
在c中,函数调用的优先级要高于普通变量

赋值运算符 都是从右向左的
*/

/*
http://liunian.info/%E8%BF%9E%E7%BB%AD%E8%B5%8B%E5%80%BC%E4%B8%8E%E6%B1%82%E5%80%BC%E9%A1%BA%E5%BA%8F.html
http://www.cnblogs.com/snandy/archive/2011/08/19/2145309.html
 */

var a = {
  n: 1
};
var b = a;
a.x = a = {
  n: 2
};
console.log(a);
console.log(b);

/*

 */
var a = 5;
function fun(){
    a = 10;
    return 20;
}
var b = a + fun(); // b 的值？
/*

 */
var a = 5;
function fun(){
    a = 10;
    return 20;
}
var b = fun() + 5; // b 的值？