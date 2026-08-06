 let result = Array.isArray([1,2,3]);
 console.log(result);

 //every, some

let r1=[80,85,90].every(s=>s>70)
console.log(r1);

let r2=[80,85,90].every(s=>s<70)
console.log(r2);

let r3=[80,85,90].some(s=>s>70)
console.log(r3);

let r4=[80,85,90,70].some(s=>s<=70)
console.log(r4);

