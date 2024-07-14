// var x=13;
// {
//     let x=9;//we can use const also but in const the value cannot be changed further...
//     console.log(x);
// }
// console.log(x);

// Previous Syntax
// var x=function(x,y){
//     return x+y;
// };

// console.log(x(13,9));
// // ES6 syntax (Arrow function)
// // const a=(x,y)=>{
// //     return x+y;
// // };
// const a=(x,y)=>x+y
// console.log(a(1,9));


// Spread operator
// const q1=["Jan","Feb","Mar"];
// const q2=["Apr","May","Jun"];
// const q3=["Jul","Aug","Sep"];
// const q4=["Oct","Nov","Dec"];
// const year=[...q1,...q2,...q3,...q4];
// console.log(year);

// const marks=[95,96,97,98,99,1,50,75];
// // let maxVal=Math.max(...marks);
// // console.log(maxVal);

// let sum=0;
// for(let num of marks){
//     sum+=num;
// }
// console.log(sum);

// const name="ShivangAgrawal";
// let text="";
// for(let char of name){
//     text+=char+" ";
// }
// console.log(text);

// Map
// const car=new Map([["BMW",7500000],["Lamborgini",60000000],["Porche",20000000],["Audi",10000000]]);
// console.log(car);
// console.log(car.get("Porche"));

// Sets
// const letters=new Set();
// letters.add("a");
// letters.add("b");
// letters.add("a");//this will not be considered because it already exist.
// console.log(letters);

// Classes
// class Car{
//     constructor(name,mfgyear){
//         this.name=name;
//         this.mfgyear=mfgyear;
//     }
// }
// const myCar1=new Car("Mercedes",2024);
// const myCar2=new Car("Ferrari",2023);
// console.log(myCar1,myCar2);

// Asynchronous Syntax
// const myFunction=()=>{return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("THis is inside promise");
//         resolve();
//     },2000);
// });
// };

// myFunction().then(()=>{
//     console.log("Resolved");
// })
// .catch(()=>{
//     console.error("Rejected");
// });

// Symbol type
// const person={
//     firstName:"Shivang",
//     lastName:"Agrawal",
//     age:19,
//     couse:"CSE",
// };
// let id=Symbol("id");
// person[id]=208064;
// console.log(person);

// default value
// const addTwo=(a,b=9)=>a+b;
// console.log(addTwo(13));

// adding multiple numbers('...'is a rest operator)
const addNumbers=(...args)=>{
    let sum=0;
    for(let arg of args){
        sum+=arg;
    }
    return sum;
}
console.log(addNumbers(13,2,26,23));