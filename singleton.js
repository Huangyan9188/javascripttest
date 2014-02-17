/*
In this singleton instance all the members are public,so all the 
variables will be loaded when instance is created
*/
var singleton1={
	a:1,
	b:2,
	c:function(){console.log('helloworld');},
	d:function(d){console.log(d)}
}

var singleton2=function(){
	var a=1,fn=function(){};
	return {
		method:function(){fn;},
		getAttr:function(){return a;}
	};
}();

var LazySingleton=function(){
	var a=1,fn=function(){};
	var obj={
		method:function(){fn()},
		getAttr:function(){return a;}
	};
	function init(){
		return obj;
	}
	return {
		getInstance:init
	};
}();

var singletonFactory=function(){
	function A(){
		this.good='a';
	}
	var a=A;
	return{b:a};
}();
var t=new singletonFactory.b();
console.log(t.good);