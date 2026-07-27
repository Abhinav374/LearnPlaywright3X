//
let nums =[10,25,30,40];
let result = nums.find(x=>x>20);
console.log(result);

//findIndex
let index= nums.findIndex(n=>n>20);
console.log(index);

let a=nums.findLast(n=>n>20);//40
console.log(a);
let b=nums.findLastIndex(n=>n>20);//3
console.log(b);