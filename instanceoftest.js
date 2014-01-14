function Test1(){}
function Test2(){}

var a=new Test1();
var b=new Test2();
console.log(a instanceof Test1);
console.log(a instanceof Test2);
/console.log(a.prototype.isPrototypeOf(b));