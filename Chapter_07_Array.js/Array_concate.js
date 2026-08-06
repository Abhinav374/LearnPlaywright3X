let a= [1,2];
let b= [3,4];
let c=a.concat(b);
console.log(c)

//spread modernway cancatination.(...)
//...all the element
let d= [...a,...b]
console.log(d)

//Join- it converts array into big string
let s =["Pass", "Fail","Skip"].join(" | ");
console.log(s);