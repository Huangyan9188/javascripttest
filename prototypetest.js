
/*
in this test demo because everything in javascript are all
object, so we test to add some function into the original 
objects ,like Function, Object, Number to make every thing 
inherits these class can have the util function or data to 
share.
using x.prototype.f to judge if the prototype has the function 
or the data f
*/
Function.prototype.helloworld=function(){
	console.log("helloworld");
}

Object.prototype.helloworld=function(){
	console.log("good2cya");
}

Number.prototype.helloworld=function(){
	console.log("HelloInt");
}

String.prototype.helloworld=function(){
	console.log("HelloString");
}
// Float.prototype.helloworld=function(){
// 	console.log("HelloFloat");
// }
var c=function(){};
c.helloworld();

var d=new Object();
d.helloworld();

var e=2;
e.helloworld();
var f=2.2;
f.helloworld();
var g="huangyan";
g.helloworld();
