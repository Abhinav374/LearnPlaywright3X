function add(a,b,c){
    return a+b+c;
}

let num=[1,2,3]
add(...num)

function hasError(...codes)
{
    return codes.some(c=>c>=400)
}
let responseCode=[200,201,404];
hasError(...responseCode)