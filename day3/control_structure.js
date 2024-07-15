// if else statements

// let a=12;
// if(a>0){
  // console.log("positive");
// }
// else if(a<0){
  // console.log("negative");
// }
// else{
  // console.log("zero");
// }



// let age=18;
// if(age>=18){
  // console.log("eligiblle");
// }
// 
// else if(age<18){
  // console.log("not eligible");
// }
// else{
  // console.log("nothing");
// }




// nested if else statement
let a=10;
let  b=25;
let c=15;

let largest;
if(a>=b){
  if(a>=c){
    largest=a;
  }else{
    largest=c;
  }
}
else{
  if(b>=c){
    largest=b;
  }else{
    largest=c;
  }
}

console.log(`The largest number is ${largest}.`);