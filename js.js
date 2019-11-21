// function Father(bloodType){
//     this.bloodType=bloodType||'Rh';
// }
function Father(bloodType){
    this.bloodType=bloodType;
}

Father.prototype.wife = 'gouma';
function Son(name,age,phone){
    Father.call(this,'Rh');
    this.name=name;
    this.age=age;
    this.mother=this.wife;
    this.phone=phone;
}
function Daughter(name,age,phone){
    Father.call(this,'Rh');
    this.name=name;
    this.age=age;
    this.mother=this.wife;
    this.phone=phone;
}
(function(){
    function a (){}
    a.prototype=Father.prototype;
    Son.prototype=new a();
    Son.prototype.constructor=Son;
    Daughter.prototype=new a();
    Daughter.prototype.constructor=Daughter;
})();
let Son1=new Son('CDD','18','17823849119');
let Daughter1=new Daughter('CMM','15','13650504149');
Object.defineProperties(Son1,{
    name:{configurable: false,
        enumerable: false,
        writable: false},
    bloodType:{
        configurable: false,
        enumerable: false,
        writable: false}
})
Object.defineProperties(Daughter1,{
    name:{configurable: false,
        enumerable: false,
        writable: false},
    bloodType:{
        configurable: false,
        enumerable: false,
        writable: false}
})
console.log(Son1);
console.log(Daughter1);
console.log('Son1.name=AA');
Son1.name='AA';
console.log(Son1);
console.log(Father.prototype.wife);
console.log(Son.prototype.constructor===Son);
console.log(Daughter.prototype.constructor===Daughter);