//Access &  modifying

let status = ['Pass','fail','skip'];
 console.log(status[0]);
 console.log(status[1]);
 console.log(status[2]);

console.log(status.at(-1));
console.log(status.at(-2));
console.log(status.at(-3));

//Modification
status[1]="blocked"
console.log(status);

//length
console.log(status.length);