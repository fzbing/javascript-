/*
基本类型(值类型):
Number
String
Boolean

undefined
null
引用类型:
Array
Object
Function
 */

var s1 = "123";
var s2 = "123";

s1 == s2; //true 
s1 === s2;//true

/*

 */

var s1 = new String("123");
var s2 = new String("123");

s1 == s2; //false 
s1 === s2;//false

/*

 */

var s1 = String("123");
var s2 = String("123");

s1 == s2; //true
s1 === s2;//true

/*

 */
var f1 = Function();
var f2 = Function();
f1 == f2; //false
f1 === f2;//false

/*

 */
var a = {n:1};
var b = {n:1};

a == b;//false
a === b;//false

/*

 */