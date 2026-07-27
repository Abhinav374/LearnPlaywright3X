let tests= ["login","Checkout", "Search"];


for (let i=0;i<tests.length;i++){
    
console.log(tests[i])
}
console.log("--------------------------")

for (let test of tests){
    console.log(test)
}
console.log("--------------------------")

//forEach(no return value)
test.forEach((test,index) => {
    console.log(`${index}:${test}`)
});