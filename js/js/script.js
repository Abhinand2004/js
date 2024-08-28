
// class Car{
//     constructor(fuel){
//         this.fuel1=fuel
//     }
// startengin(){
//     console.log(`${this.fuel1}`);
// }

// }



// x=new Car("diesel")

// x.startengin()



// class Button{

//     constructor(name){
//         this.Button=document.createElement("button")
//         this.Button.innerHTML=name
//         document.getElementById("new").appendChild(this.Button)

//     }
//     set height(h){
//         this.Button.style.height=h+"px"
//     }
//     set width(h){
//         this.Button.style.width=h+"px"
//     }

//     get Height(){
//         return parseInt(this.Button.style.height)
//     }
//     get Width(){
//         return parseInt(this.Button.style.width)
// }
// }
// btn1=new Button("click mee")
// btn1.height=100
// btn1.width=100
// x=btn1.Height
// console.log(x);


// class Father {
//     name="sathyanarayanan"
//     job(){
//         console.log("he is a farmer");
//     }
// }

// class son extends Father{
//     name="abhi"
//     designation(){
//         console.log("he is a engineer");
//     }
// }
// x= new son

// x.designation()
// x.job()



// class Father{
//     constructor(name,age){
//         this.name1=name
//         this.age1=age
//     }
//     fun(){
//         console.log(`${this.name1}  ${this.age1}`);

//     }
// }
// class child extends Father{
//     constructor(name,age){
//         super(name,age)
        
//     }
// }

// x=new child("abhi",20)

// x.fun()




// 


// class Father{
//     height(){
//         console.log("father is tall");
//     }
//     eye(){
//         console.log("father has blue eyes");
//     }
//     strong(){
//         console.log("father is so strong");
//     }
//     love(){
//         console.log(" father loves everyone");
//     }
//     voice(){
//         console.log("father has deep voice");
//     }
// }

// class boy extends Father{
//     bheight(){
//         console.log("son is small");
//     }
// }
// class girl extends Father{
//     eyes(){
//         console.log("has eyes like father");
//     }
// }

// boy=new boy
// girl=new girl

// boy.bheight()
// boy.height()
// boy.strong()
// boy.voice()

// girl.eyes()
// girl.eye()
// girl.love()



// class Vehicle{
//     make="made in 1992"
//     model="Model=MC1992"
//     startengin(){
//         console.log("Engin started");
//     }
// }
// class Car extends Vehicle{
//     doors="2 doors"
//     honkHorn(){
//         console.log("Beep beep");
//     }
// }

// let car=new Car
// console.log(car.make);
// console.log(car.model);
// car.startengin()
// console.log(car.doors);
// car.honkHorn()


// class Person{
//     constructor(name){
//         this.name=name
//     }
//     intoduce(){
//         console.log(`hello my name is ${this.name}`);
//     }
// }
// class student extends Person{
//     constructor(name,subject){
//         super(name)

//         this.subject=subject


//     }
//     study_method(){
//         console.log(`iam studying ${this.subject}`);
//     }
// }

// std=new student("abhi","js")
// std.intoduce()
// std.study_method()

// class Employee{
//     constructor(name,position){
//         this.name=name
//         this.position=position
//     }
//     describe(){
//         console.log(`i am ${this.name} and i work as a ${this.position} `);
//     }
// }

// class manager extends Employee{
//     constructor(name,position){
//         super(name,position)
//         this.name=name
//         this.position=position
//     }


// }

// manager=new manager("abhi","Manager")
// manager.describe()