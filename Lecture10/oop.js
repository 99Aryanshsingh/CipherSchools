// // object literal
// let person={
//     firstName:"Shantanu",
//     lastName:"Shubham",
//     getFullName:function(){
//         return `This name of person is ${person.firstName}${person.lastName}`;
//     },

//     phoneNumber:{
//         mobile: "12345",
//         landline: "67890",
//     },

// };

// console.log(person.getFullName());
// console.log(person.phoneNumber);
// console.log(person.phoneNumber.mobile);


// // object constructor
// function person(firstName,lastName){
//     this.firstName=firstName;
//     this.lastName=lastName;
// }
// let person1=new person("Shantanu","Shubham");
// let person2=new person("Akshay","raj");
// console.log(person1.firstName);
// console.log(`${person2.firstName} ${person2.lastName}`);


// // Object.create method 
// const coder={
//     isStudying:false,
//     printIntro:function(){
//         console.log(`My name is${this.name}. Am i Studying?: ${this.isStudying}`);
//     }
// };
// const myself=Object.create(coder);
// myself.name="Shantanu Shubham";
// myself.isStudying=true;
// myself.printIntro();

// // classes-no classes in javascript exist only object exist.
// class Vehicle{
//     constructor(name, maker, engine){
//       this.name = name;
//       this.maker = maker;
//       this.engine = engine;
//     }
  
//   getDetails(){
//     return `The name of the vehicle is ${this.name}`;
//    }
  
//   };
  
//   let v1 = new Vehicle("Creta","Hyundai","2500cc");
//   let v2 = new Vehicle("Q5","Audi","3000cc");
  
//   console.log(v1.name);
//   console.log(v2.maker);
//   console.log(v1.getDetails());
// before ES6 model to do above program we use
// function Vehicle(name, maker, engine){
//     this.name = name;
//     this.maker = maker;
//     this.engine = engine;
//   }
  
//   Vehicle.prototype.getDetails = function(){
//     return `The name of the vehicle is ${this.name}`;
//   }
  
//   let v1 = new Vehicle("Creta","Hyundai","2500cc");
//   let v2 = new Vehicle("Q5","Audi","3000cc");
  
//   console.log(v1.name);
//   console.log(v2.maker);
//   console.log(v1.getDetails());

// Encapsulation
// class Person{
//     constructor(name, id){
//       this.name = name;
//       this.id = id;
//    }
//   addAddress(newAddress){
//     this.address = newAddress;
//     }
//   getDetails(){
//     console.log(`Name is: ${this.name} and the address is: ${this.address}`)
//     }
//   }
//   let person1 = new  Person("Shan", 24);
//   person1.addAddress("UP");
//   person1.getDetails();

// // restricting the access
// class Person{
//     constructor(firstName, lastName){
//       this.firstName = firstName;
//       this.lastName = lastName;
   
  
//   let getDetails_NoAccess = function(){
//     return `The first name is: ${this.firstName} and last name is: ${this.lastName}`;
//     };
  
  
//     this.getDetails_Acess = function(){
//         return `The first name is: ${this.firstName} and last name is: ${this.lastName}`;
//       };
//     } 
//   } 
// let person1 = new Person("Shantanu", "Shubham");
  
//   console.log(person1.firstName);
//   console.log(person1.getDetails_NoAccess());
//   console.log(person1.getDetails_Access());


// inheritence
class Person{
    constructor(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
    } 
    getDetails = function() {
      return `The first name is: ${this.firstName} and last name is: ${this.lastName}`;
      };    
  }
  class Student extends Person{
    constructor(firstName, lastName, rollNumber){
      super(firstName,lastName);
      this.rollNumber = rollNumber;
    }
    getDetails = function(){
        return `The first name is: ${this.firstName} and last name is: ${this.lastName} and the roll Number is:${this.rollNumber}`;
      }; 
  }
let person1 = new  Person("Shantanu", "Shubham");
console.log(person1.firstName);
console.log(person1.getDetails());
let student1 = new Student("Anurag","Mishra", 20);
console.log(student1.getDetails());