
// trycatch

// console.log("start");

// // a=0
// // c=a+b
// // console.log(c);
// try {
//     a=0
//     c=a+b
//     console.log(c);
// } catch  {
//     console.log("b is not defined");
// }

// finally{
//     console.log("final");
// }

// console.log("end");



// function order(callback) {
//     setTimeout(()=>{
//         console.log("food ordered");
//         callback()
//     },2000)
// }

// function decorate(callback) {
//     setTimeout(()=>{
//         console.log("decorated");
//         callback()
//     },2000)
// }

// function arrange(callback) {
//     setTimeout(()=>{
//         console.log("arrange");
//         callback()
//     },2000)
// }

// order(()=>{
//     decorate(()=>{
//         arrange(()=>{
//             console.log("all the task are completed");
//         })
//     })
// })



// function fetchData() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             reject(3)
            
//         }, 1000);
//     })
    
// }

// fetchData().then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log("reject");
//     console.log(error);
// })