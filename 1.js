alert(a);
function a(x) {
    this.a = x;
}
alert(a(12));
alert(a);

/*
为什么会出现这种情况呢?
首先JavaScript
(预编译) 把所有 '声明的变量' 或 '定义的函数' 初始化为 undefined.
(执行期) (边编译边执行,即解释) 给变量实际赋值.

所以 :
第一个 a :
function a(x)    {
    this.a = x;
}
第二个 a : undefined
一开始 a为一个函数的名字,所以可以运行 a(12). 运行完a就被赋值为12,函数没有返回值
第三个 a : 12
 */

alert(a);
function a(x) {
    this.a = x;
    return a;
}
alert(a(12));
alert(a);

/*
function a(x) {
    this.a = x;
    return a;
}
12
12
 */

alert(a);
function a(x) {
    var a = x;
    return a;
}
alert(a(12));
alert(a);

/*
function
12
function
// 因为 函数里面的 a 为局部变量.在闭包(即,a函数)里面对外不可见
 */