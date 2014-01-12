function inherit(p){//a function returns an new object which inherit from prototype object p
	if(p==null) throw TypeError();
	if(Object.create)//if really hase create()function which has the same function of inherit
		return Object.create(p);
	var t=typeof p;//to test the type of p
	if(t!=="object" && t!=="function") throw TypeError();
	function f(){};//a empty constructing function
	f.prototype=p;
	return new f();
}
// a simple js class
function range(from,to){
	var r=inherit(range.methods);

	r.from=from;
	r.to=to;
	return r;
}

//protype object definition
range.methods={
	// to judte x is between from and to 
	includes: function(x){
		return this.from<=x && x<=this.to;
	},
	//for every integer between from an to as the argument to run function f
	foreach1: function(f){
		for(var x=Math.ceil(this.from);x<=this.to;x++)f(x);
	},

	tostring: function(){
		return "("+this.from+"..."+this.to+")";
	}
}

var r=range(1,10);// did not need to use new because we have inherit a
//new object using inherit() function which contains the new function
console.log(r.includes(2));
console.log(r.tostring());
r.foreach1(console.log);

/*
	this is the simple class of javascript.where that we can learn 
	the from and to attributes is not shared and no inherited
	but the share place like range.mentods or .prototype can refer to 
	these data using this. this means the actural object
*/