let fruits=["Banana", "Orange","Mango", "Apple"]
 fruits.sort()
 console.log(fruits);

//Natural sorting
 let score =[1,13,10,2,21,20]
 console.log(score.sort());

 //Proper sorting 
 score.sort((a,b)=>a-b);//ascending
 console.log(score);


 score.sort((a,b)=>b-a);//descending
 console.log(score);

 //Array reversing
 score.reverse();
 console.log(score);
