let Person = class {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
};
let NewPerson = new Person("Ki obostha", 26, "Rangpur");

console.log(NewPerson.name, NewPerson.age, NewPerson.address);
