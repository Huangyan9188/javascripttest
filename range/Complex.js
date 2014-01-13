/*
in this file,we define a new complex class, to describe
the complex number
*/

/*
function isNaN is used to judge a number if not number, 
if number is not number which returns true else returns false
isNaN used to parseInt or parseFloat or num/zero condition
*/
/*
this is the construction function
*/
function Complex(real,imaginary){
	if(isNaN(real)||isNaN(imaginary))
		throw new TypeError();
	this.r=real;
	this.i=imaginary;
}

Complex.prototype.add=function(that){
	return new Complex(this.r+that.r,this.i+that.i);
};

Complex.prototype.mul=function(that){
	return new Complex(this.r*that.r-this.i*that.i);
};

Complex.prototype.mag=function(){
	return Math.sqrt(this.r*this.r+this.i*this.i);
};

Complex.prototype.neg=function(){
	return new Complex(-this.r,-this.i);
};

Complex.prototype.equals=function(that){
	return that !=null&& 
	that.constructor===Complex  &&
	this.r===that.r&&this.i===that.i;
};

Complex.ZERO=new Complex(0,0);
Complex.ONE=new Complex(1,0);
Complex.I=new Complex(0,1);

Complex.prototype.toString=function(){
	return "{"+this.r+","+this.i+"}";
};

Complex.parse=function(s){
	try{
		var m=Complex._format.exec(s);
		return Complex(parseFloat(m[1]),parseFloat(m[2]));
	}catch(x){
		throw new TypeError("cannot parse '"+s+"' as a complex number.");
	}
};

//Complex._format=/^\{([^,]+),([^}]+)\}&/;

var c=new Complex(2,3);
var d=new Complex(c.i,c.r);
console.log(c.add(d).toString());
//console.log(Complex.parse(c.toString()).neg().toString());