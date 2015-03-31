var obj = {
    a: 65,
    b: this.a,
    c: alert(this),
    d: function() {
        console.log(this);
    }
};
console.log(obj.c);
obj.d();

/*
结果,奇特的东西.
注意JSON
 */

this = "str";

/*
https://msdn.microsoft.com/zh-cn/library/4bkfdt2w(v=vs.94).aspx
this 不可以被赋值
 */