let a=2024;
let ans=(a%4===0)&&(a%100!==0||a%400===0);
if(ans){
  console.log(`${ans} is leap year`);
}
else{
  console.log(`${ans} is not leap year`);
}