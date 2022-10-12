// KALITIM - INHERITANCE

function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.showInfos=function(){
    console.log("İsim: "+this.name,"Yaş: "+this.age);
}

//const person=new Person("fatih",39);
//console.log(person);
//person.showInfos();

function Employee(name,age,salary){
    // this.name=name;
    // this.age=age;
    Person.call(this,name,age);
    this.salary=salary;
}
Employee.prototype=Object.create(Person.prototype);

Employee.prototype.showInfos=function(){
    console.log("İsim: "+this.name,"Yaş: "+this.age,"Maaş: "+this.salary);
}

const emp=new Employee("tuğçe",30,20000);
console.log(emp);
emp.showInfos();

