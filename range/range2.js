
//here is the constructing function which should construct the object
//by new key word
function Range(from,to){
	//these two attributes cannot be inherited
	this.from=from;
	this.to=to;
}


//the prototype object is the only sign to the object 
//2 objects inherit one single object only when they have the
//same prototype object
Range.prototype={
	constructor:Range,
	includes:function(x){
		return this.from<=x && x>=this.to;
	},

	foreach:function(f){
		for (var x=Math.ceil(this.form);x<=this.to;x++){
			f(x);
		}
	},
	tostring:function(){
		return "("+this.from+"..."+this.to+")";
	}
}

var r= new Range(1,3);

console.log(r.includes(2));
r.foreach(console.log);
console.log(r.tostring());
//if the object really inherit from Range.prototype that instanceof 
//will return true
console.log(r instanceof Range);

//remember:
//every javascript function can be an object ,and every javascript function
//has the prototype attribute , the value of this attribute is an object and 
//this object contains only one attribute which cannot enum is constructor
//and constructor is a function object

function F(){}
var p=F.prototype;
var c=p.constructor;
console.log(c===F);

var o=new F();
console.log(o.constructor===F);