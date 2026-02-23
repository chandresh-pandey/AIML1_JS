// console.log("hello world");
//  document.write('hello world');


// const sym1 = Symbol(4);
// console.log(sym1);
// const sym2 =Symbol(4);
// console.log(sym2);
// if(sym1==sym2){
//     console.log("true");
// }
// else{
//     console.log("false");
// }
// var a = 10;
// var b = 20;
// var linebreak = "<br/>";
// document.write("(a<b)=>");
// result = (a<b);
// document.write(result);
// var count;
// document.write("starting loop" +"<br/>");
// for(count=0;count<10;count++){
//     document.write("current count :"+count);
//     document.write("<br/>");
// }
const person={
    fname:"ajay",lname:"singh",age:25
};
for(let x in person){
    console.log("person details:"+x+":"+person[x])
}