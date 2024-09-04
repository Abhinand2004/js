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



function success(){
    x=document.getElementById("date").value
const date=/^([0-2]\d|3[01])-([0]\d|1[0-2])-(\d{4})/
out=date.test(x)
str=``
if(out){
    str+=`
   <li> <h1>Date:${x}</h1></li>
    `
}else{
    str+=`
    <li> <h1>Enter date in correct format</h1></li>
     `
}

// str+=`${out==true?"<li>${x}</li>":"you enterd wrong"}`
document.getElementById("output").innerHTML=str
document.getElementById("date").value=""
}

