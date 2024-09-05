// import add from "./script1.js";
// console.log(add(1,2));


// import * as data from "./script1.js"

// console.log(data.sub(3,1));


// import { add,sub } from "./script1.js";

// console.log(add(1,2));


// const set=/^[abl]b/


// console.log(set.test("abbbbl"));
// console.log(set.test("loooolll"));



// const set=/^[0-4]/


// console.log(set.test("15"));


// const set=/^[^f]/
// console.log(set.test("fcat eat fishh"));



// const set =/^[a-z]*[.com]/
// console.log(set.test("abi.com"));



// console.log(date.test("11-02-2012"));



// function success(){
//     x=document.getElementById("date").value
// const date=/^([0-2]\d|3[01])-([0]\d|1[0-2])-(\d{4})/
// out=date.test(x)
// str=``
// if(out){
//     str+=`
//    <li> <h1>Date:${x}</h1></li>

//     `
// }else{
//     str+=`
//     <li> <h1>Enter date in correct format</h1></li>
//      `
// }

// // str+=`${out==true?"<li>${x}</li>":"you enterd wrong"}`
// document.getElementById("output").innerHTML=str
// document.getElementById("date").value=""
// }





// function success(){
//     x=document.getElementById("pass").value
// const date=/^(?=[A-Za-z])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()?.,])[!@#$%^&*()/.,A-Za-z]{8,}/

// out=date.test(x)
// str=``
// if(out){
//     str+=`
//    <li> <h1>Name:${x}</h1></li>
//    <li>success</li>
//     `
// }else{
//     str+=`
//     <li> <p>PassWord Must strt with an alphebet ,must contain Uppercase& Lowercase letters ,must need an symbol and a number ,want minimam 8 digits</p></li>
//      `
// }

// // str+=`${out==true?"<li>${x}</li>":"you enterd wrong"}`
// document.getElementById("output").innerHTML=str
// document.getElementById("pass").value=""
// }





function success(){
    x=document.getElementById("email").value
const date=/^[a-zA-Z]*[!@$%^&*(A-Za-z)][@]*[a-z].+\../

out=date.test(x)
str=``
if(out){
    str+=`
   <li> <h1>EMAIL:${x}</h1></li>
   <li>success</li>
    `
}else{
    str+=`
    <li> <p>must ent with @gmail.com</p></li>
     `
}

// str+=`${out==true?"<li>${x}</li>":"you enterd wrong"}`
document.getElementById("output").innerHTML=str
document.getElementById("email").value=""
}

