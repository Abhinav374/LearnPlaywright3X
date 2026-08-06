 function greet(name){
    return`hello.${name}`
 }

 // function as expression
 const exp = function (name){
    return`hello.${name}`
 }
console.log(greet('Alice'))
console.log(exp('Rose'))
