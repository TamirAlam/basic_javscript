// function EvenOrOdd(){
//  let n=6;
//  if(n%2==0){
  // console.log("n is even number");
//  }
//  else{
  // console.log("n is odd number");
//  }
// }
// EvenOrOdd();


// task2
// let n=4;
// function squre(n){
  // let ans=n*n;
  // return ans;
// }
// console.log(squre(n));

// task3  maximum number

// function maximum(){
//   let a=12;
//   let b=14;
//   if(a>b){
//     console.log("a is greater");
//   }
//   else {
//     console.log("b is greater");
//   }
// }
// maximum();


// task4  conect two string

// function connect(){
  // let a ="Tamir";
  // let b="Alam";

  // console.log(a+" "+b);
// }
// connect();



//  Arrow function
// declare
//  const abc=()=>{
  // let a=10;
  // let b=12;
  // console.log(a+b);
//  };
//  abc();



// task 6
// const stringContains=(str,char)=>{
  // return str.includes(char);
// }
// console.log(stringContains("hello","e"));
// console.log(stringContains("world","e"));
// console.log(stringContains("1223","5"));


// Function parameter defaullt values
// function prod(a,b){
  //  return a*b;
// }
// console.log(prod(4,5));




// task 8
// function  persons(name,age){
//  return ` name is:${name}, ${age}`
// }
// console.log(persons("tamir","alam"));



// higher order function
// const  calltime=(func,n)=>{
// 
  // for(let i=0;i<n;i++){
    // func();
  // }
// };
// const sayhello=()=>{
    // console.log("hello!!");
// };
// calltime(sayhello,5);


//task 9
// Higher-order function to apply a function to a value
const applyFunction = (func, value) => {
  return func(value);
};

// Higher-order function to apply a power function to the result
const applyPowerFunction = (func, value, exponent) => {
  const intermediateResult = applyFunction(func, value);
  return Math.pow(intermediateResult, exponent);
};

// Example functions to be used
const double = (x) => x * 2; // Doubles the value
const increment = (x) => x + 1; // Increments the value

// Example usage
const value = 5;
const exponent = 3;

// Applying the functions
const doubledThenCubed = applyPowerFunction(double, value, exponent); // (5 * 2)^3 = 10^3 = 1000
const incrementedThenCubed = applyPowerFunction(increment, value, exponent); // (5 + 1)^3 = 6^3 = 216

console.log(doubledThenCubed); // Output: 1000
console.log(incrementedThenCubed); // Output: 216


