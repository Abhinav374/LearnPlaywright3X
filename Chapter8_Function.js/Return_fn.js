function getStatus(code){
    if(code>=200 && code<300) return "success"
    if(code>=400 && code<500) return "client error"
    if(code>=500) return "server error"

}
getStatus(200);
getStatus(400);
getStatus(500);

//return nothing-undefined
function logTest(name){
    console.log(`Running: ${name}`);
    //no return statement
}
logTest("Hello")