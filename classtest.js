/*this is the typical class nomilizing but every object cannnot 
share the dynamic data , every data in the object is independent*/
function USER(name,age)
{
  this.name=name;
  this.age=age;
  this.job='student';
}
var user1=new USER("huangyan",25);
console.log(user1.name);
console.log(user1.age);
console.log(user1.job);

USER.prototype.job2='engerneer';

console.log(user1.job2);//engerneer

var user2=new USER("SHIJIA",27);
USER.prototype.job2='googler';
console.log(user1.job2);//googler
console.log(user2.job2);//googler
/*
//this got the error message because we cannot change user2's prototype
//Only change USER's prototype can make sense
user2.prototype.job2='deepglint';
console.log(user1.job2);
console.log(user2.job2);
*/

