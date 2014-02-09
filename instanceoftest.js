function Test1(){}
function Test2(){}

var a=new Test1();
var b=new Test2();
console.log(a instanceof Test1);
console.log(a instanceof Test2);
/*console.log(a.prototype.isPrototypeOf(b));
*/

function typeAndValue(x){
	if(x==null) return "";
	switch(x.constructor){
		case Number: return "Number: "+x;
		case String: return "String: "+x;
		case Date: return "Date: "+x;
		case Test2: return "Test2: ";
		case Test1: return "Test1: ";
		default: return "Other";
	}
}
function Test3(){}
var c=new Test3();

console.log(typeAndValue(a));
console.log(typeAndValue(12));
console.log(typeAndValue(c));