// // i=10
// // function asd() {
// //     document.getElementById("head").innerHTML=i
// //     setTimeout(() => {
// //         if(i==0){
// //             document.getElementById("head").innerHTML="start"
// //         }
// //         else if (i>0) {
// //             asd()
// //         }
// //     }, 1000);
// //     i--
// // }
// // asd()






// function setz(sec) {
//     return sec<10?`0${sec}`:sec
// }
// function clock() {
//     let dt=new Date()
//     let hr=dt.getHours()
//     let day=dt.getDay()
//     let am=hr>12?"PM":"AM"
//     document.getElementById("btm").innerHTML=`${setz(hr%12)}:${setz(dt.getMinutes())}:${setz(dt.getSeconds())}`
//     document.getElementById("lvl2").innerHTML=`${setz(dt.getMonth())}:${setz(dt.getDate())}:${setz(dt.getFullYear())}`
//     document.getElementById("ampm").innerHTML=`${am}`
//     str=''
//     switch (day) {
//         case 1:str="monday"
            
//             break;
//             case 2:str="Tuesday"
            
//             break;
//             case 3:str="wenesday"
            
//             break;
//             case 4:str="thersday"
            
//             break;
//             case 5:str="friday"
            
//             break;
//             case 6:str="saturday"
            
//             break;
//             case 7:str="sunday"
            
//             break;
//         default:
//             break;
//     }

//     document.getElementById("lvl3").innerHTML=`${str}`

//     setTimeout(() => {
//         clock()
//     }, 1000);
// }
// clock()

// cd=[1,2,3,4,]
// b=[...cd]
// console.log(b);






// cd=[1,2,3,4,5,6,l={name:"abhi",age:2}]

// let e= [,,a,c,d]=cd
// console.log(l.name);











// obj={name:"abhi",age:20,nex:{n:1,b:2}}
// let {name,age,nex:{n,b}}=obj
// console.log(n);














// function asd() {
//     console.log("abhi");
// }
// function bsd() {
//     console.log("hey");
//     setTimeout(() => {
//         asd()
//     }, 1000);
// }

// bsd( )











// a=[
//     {name:"abhi",age:20},
//     {name:"leoo",age:20},
//     {name:"heyy",age:20},
//     {name:"loll",age:20},
//     {name:"riyas",age:20},
//     {name:"arjun",age:20},
//     {name:"akhil",age:20},
//     {name:"devid",age:20},
//     {name:"hitler",age:20},

// ]

// a.forEach((val) => {
  
//    console.log(val);
// })








// mapping

// a=[
//     {name:"abhi",age:20},
//     {name:"leoo",age:20},
//     {name:"heyy",age:20},
//     {name:"loll",age:20},
//     {name:"riyas",age:20},
//     {name:"arjun",age:20},
//     {name:"akhil",age:20},
//     {name:"devid",age:20},
//     {name:"hitler",age:20},

// ]

// a.map((val) => {
  
//    console.log(val);
// })




// a=[
//     {name:"abhi",age:20},
//     {name:"leoo",age:20},
//     {name:"heyy",age:20},
//     {name:"loll",age:20},
//     {name:"riyas",age:20},
//     {name:"arjun",age:20},
//     {name:"akhil",age:20},
//     {name:"akhil",age:20},
//     {name:"hitler",age:20},

// ]

// let x=a.find((dt)=>{
//     return dt.name=="abhi"
// })
// console.log(x);


// let y=a.filter((d)=>{
//     return name=="akhil"
// })
// console.log(y);




// let arr=[]
// function add() {
//     let a=document.getElementById("text").value
//     arr.push(a)
//    getData()
 
// }

// function getData(){
//     str=``
//     arr.map((i,index)=>{
//         str+=`<li>${i}  <button onclick="edit(${index})">Edit</button><button onclick="dlt(${index})">delete</button></li>`
//     })
//     document.getElementById("print").innerHTML=str
//     document.getElementById("text").value=""
// }
// getData()
// function dlt(index) {
//     console.log(index);
//     arr.splice(index,1)
//     getData()
// }


// function edit(index) {
// console.log(index);
// let editData=prompt(`old data id   "${arr[index]} "   if you want to edit this then type in input field`);
// if(editData!=null){
//     arr[index]=editData
// }
// getData()    
// }








// let arr=[]

// function cll() {
//     str=   ``
//     arr.map((i,index)=>{
//         str+=`<li>${i} : <button onclick="edit(${index})">edit</button> or <button onclick="dlt(${index})">delete</button></li>`
//     })
//     document.getElementById("print").innerHTML=str
//     document.getElementById("text").value=""


// }
// cll()
// function add() {
//     let x=document.getElementById("text").value
//     arr.push(x)
//     cll()

// }
// function edit(index) {
//     y=prompt("edit ")
//     arr[index]=y
//     cll()
// }

// function dlt(index) {
//     arr.splice(index,1)
//     cll()
// }

let a=[
    {name:"abhi",age:20},
    {name:"leoo",age:20},
    {name:"heyy",age:20},
    {name:"loll",age:20},
    {name:"riyas",age:20},
    {name:"arjun",age:20},
    {name:"akhil",age:20},
    {name:"akhil",age:20},
    {name:"hitler",age:20},

]

let x=a.reduce((total,y)=>{
    return total+y.age
},0)
console.log(x);
