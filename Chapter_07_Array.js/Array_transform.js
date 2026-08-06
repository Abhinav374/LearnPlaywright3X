let scores =[45,82,91,60,73,70];
    let grade =scores.map(s=>s>70?"Pass": "Fail");
    //map is used to transform array into new array of the same size.
console.log(grade);

//Filter method 
let passing = scores.filter(s=>s>=70);
console.log(passing);
