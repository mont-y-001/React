// const x:number = 10;
// console.log(x);

//###Types in arguement
// function greet(firstName:String){
//     console.log(`Hello ${firstName}`)
// }
// greet("Mohit");


//-------------------------Type inference----------------------//
// function Sum(a:number,b:number) : number{
//     return a+b;
// }
// console.log(Sum(95,6));


//---------------------------function callback-------------// 
// function after1sec(fn:any){
//     setInterval(fn,1000);
// }
// after1sec(()=>{
//     console.log('hello world');
// })



//-----------------------------Object passing---------------------//
// interface User {
//     fname: string;
//     lname: string;
//     age: number;
// }

// function isLegal(user: User): boolean {
//     return user.age > 18;
// }

// console.log(
//     isLegal({
//         fname: "Mohit",
//         lname: "Yadav",
//         age: 22
//     })
// );





//---------------Impelemt-------------------// 
// interface Person{
//     name:String;
//     age?:number;
//     greet(phrase:String):void;
// }

// class Employee implements Person{
//     name:String;
//     age:number;

//     constructor(n:String,a:number){
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase: String): void {
//         console.log(`${phrase} ${this.name} age ${this.age}`);
//     }
// }
// const e = new Employee("Mohit",22);
// e.greet("Hii there!");



//---------------Types-------------------//
// type Employe = {
//     name:string;
//     startedDate:Date;
// }
// interface Manager {
//    name:string;
//    department:String;
// }

// type TechLead = Employe & Manager;
// const tl: TechLead = {
//     name: "Mohit",
//     startedDate:  new Date("2024-07-06"),
//     department: "Engineering"
// };
// console.log(tl);




//----------------------Arrays in TS-------------------//
// interface User{
//     name:string;
//     age:number;
// }

// function canVote(person:User[]){
//     return person.filter(x => x.age>=18);
// }
// console.log(canVote([{
//     name:"Mohit",
//     age:17
// },{
//  name:"Raman",
//     age:19
// }]))




//----------------Generic-----------------------//
// type Input = string | number;
// function firstVal(arr : Input[]){
//     return arr[0];
// }

// let val = firstVal(["Mohit","Yadav"]);
// console.log(val.toupperCase());            //Problem


function firstVal<T>(arr : T[]):T | undefined{
    return arr[0];
}

let val = firstVal<string>(["Mohit","Yadav"]);
let val2 = firstVal<number>([1,2,3]);
console.log(val2);
if (val !== undefined) {
    console.log(val.toUpperCase());
} 