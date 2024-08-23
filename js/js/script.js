


// let arr={name:"abhi",age:20,lastname:"leoo",
//     fullname:function(){
//         return this.name+this.lastname
//     }
// }
// console.log(arr.fullname());



// let x={
//     a:10,
//     b:20,
//     c:function () {
//         console.log(this);
//     }
// }
// let y=x.c
// y.call(x)

// y=x.c.bind(x)
// y()


// x={
//     a:10,b:20
// }
// y={
//     c:function (params) {
//         console.log(this.a+this.b);
//     }
// }

// z=y.c
// z.call(x)




class Car{
    color="red"
    wheel=2
    fuel="petrol"
    startenigin(){
        console.log("started");
    }
    stop(){
        console.log("stoped");
    }
}


swift=new Car()
console.log(swift.wheel);