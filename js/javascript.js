// fixxbuxx on every 3s and 5s multiples

// for(i=1;i<=100;i++)
//     {
//         if (i%3==0 && i%5==0) {
//             console.log("fixxbuxx");
//         }
//         else{
//             console.log(i);
//         }

//     }


// fixx on 3s muliple 

// for(i=1;i<=100;i++)
//     {
//         if (i%3==0 && i%5!=0) {
//             console.log("fizzz");
//         }else if (i%5==0 && i%3!=0) {
//             console.log("buzzz");
//         }
//         else if (i%5==0 && i%3==0) {
//             console.log("fixxbuzzz");
//         }
//         else{
//             console.log(i);
//         }
//     }



// a=parseInt(prompt())
// b=parseInt(prompt())
// c=parseInt(prompt())
// d=((a+b+c)/300)*100
// console.log(d+"%");

// if (d>90) {
//     console.log("A+");
// }else if (d>80) {
//     console.log("A");
// }
// else if (d>70) {
//     console.log("B+");
// }
// else if (d>60) {
//     console.log("B");
// }
// else if (d>50) {
//     console.log("C+");
// }
// else if (d>40) {
//     console.log("C");
// }
// else if (d>30) {
//     console.log("D+");
// }else{
//     console.log("FAIL");
// }




// for(i=1;i<=10;i++)
//     {
//     if (i==5) {
//         break
//     }
//     else{

//         console.log(i);
//     }
//     }



// for(i=1;i<=10;i++)
//     {
//     if (i==5) {
//         continue
//     }
//     else{

//         console.log(i);
//     }
//     }


// working
// var a=10
// var a=20
// console.log(a);

// notworking
// let a=10
// let a=10
// console.log(a);


// function fun() {
//     if (true) {
        
//         var a=10
//         console.log("first"+a);
        
//     }
//         console.log("second"+a);
    
    
// }

// fun()



    

// for(i=1;i<=5;i++)
//     str=""
//     {
//         for(j=1;j<=5;j++)
//             {
//                 str+="*"
//                 console.log(str);
//             }
            
//     }


// for(i=1;i<=5;i++)
   
//     {
//          str=""
//         for(j=5;j<=i;j--)
//             {
//                 str+=j
                
//             }
//      console.log(str);    
//     }





// function abc(){
//     console.log("heyyyy");
//     console.log("heyyyy");
//     console.log("heyyyy");
//     console.log("heyyyy");
//     console.log("heyyyy");
//     console.log("heyyyy");
    
// }


// console.log("....................");
// abc()
// console.log("!!!!!!!!!!!!!!!!!!!!");
// abc()

// console.log("@@@@@@@@@@@@@@@@@@@@");
// abc()
// console.log("####################");

// abc()

// console.log("$$$$$$$$$$$$$$$$$$$$");
// abc()

// console.log("^^^^^^^^^^^^^^^^^^^^");













// function abc(rate) {
//     if(rate<50)
//         {
//             console.log("you only have"+rate);
//         }
//     else{
//         console.log("you have " +rate+" eat food");
//     }
    
// }

// abc(60)
// abc(20)





// function abc() {
//     return "10egg"
// }
// a=abc()
// console.log(a);




// function add(a,b) {
//     return a+b
// }

// x=add(2,3)

// console.log(x);




// num1=parseInt(prompt("num1"))
// num2=parseInt(prompt("num2"))

// function sqr(num1,num2) {
//     return (num1+num2)*(num1+num2)
    
// }

// out=sqr(num1,num2)
// console.log(out);






// function sqr(num1,num2) {
//     return (num1+num2)*(num1+num2)
    
// }

// out=sqr(parseInt(prompt("num1")),parseInt(prompt("num1")))
// console.log(out);




// function odd(num) {
//     src=""
//     for(i=1;i<=num;i+=2)
        
//         {
            
//             src+=i
//         }
//       return src
//         }
// out=odd(10)
// console.log(out);



// function fibi(num) {
//     a=0
//     b=1
//     while (a<=num) {
//         console.log(a);
//         c=a+b
//         a=b
//         b=c
//     }
// }
// fibi(10)








// str="abcdef lol"

// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.startsWith("a"));
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.includes("a"));
// x=str.split()
// console.log(x);
// y=x.join("+")
// console.log(y);

// console.log(str.replace("ab","ak"));









// let a=[1,2,"a","b",true,false]
// console.log(a.length);
// console.log(a);
// console.log(a.join(" "));
// a.push("heyy")
// console.log(a);
// a.pop()
// console.log(a);
// a.splice(0,1)
// console.log(a);
// a[2]="lol"
// console.log(a);



// str="lolllll"
// for(i=0;i<=str.length;i++)
//     {
//         console.log(str[i]);
//     }

// str="lolllll"
// for(i in a)
//     {
//         console.log(str[i]);
//     }







// let arr=[]
// for(i=1;i<=100;i++)
//     {
//         if (i%5==0 && i%3==0) {
//             arr.push("fixxbuzz")
//         }else if (i%3==0) {
//             arr.push("fixx")
//         }
//         else if (i%5==0) {
//             arr.push("buzz")
//         }
//         else{
//             arr.push(i)
//         }
//     }
    
//     console.log(arr);





//largest in loop

// let arr=[1,2,3,4,5,6,7,8,9]
// larg=arr[0]
// for(i=1;i<=arr.length;i++)
//     {
//         if(arr[i]>larg){
//     larg=arr[i]
//     }

//     }
// console.log(larg);








// object 1st class
// object=[
//     {name:"leoo",age:19,mark:"pass",course:"js"},
//     {name:"messi",age:39,mark:"pass",course:"js"},
//     {name:"don",age:15,mark:"pass",course:"js"},
//     {name:"abhi",age:19,mark:"pass",course:"js"}
// ]


// // console.log(object[3]);
// for(i in object){
//     console.log(object[i].name);
// }



// x=JSON.stringify(object)
// console.log(x);
// y=JSON.parse(x)
// console.log(y);

// let todo=[]
// while (true) {
//     num=parseInt(prompt("1:for add \n 2:for display \n 3:for edit \n 4:for delete \n 5:for exit\n"))
//     if (num==1) {
//         add=(prompt("add element"))
//         todo.push(add)
//     }else if (num==2) {
//         str=``
//         for(i in todo){
//             str+=`[${+[i]+1} ]${todo[i]}\n`

//         }
//         alert(str)
//     }
//     else if (num==3) {
//         str=``
//         for(i in todo){
//             str+=`[${+[i]+1} ]${todo[i]}\n`

//         }
//         edit=parseInt(prompt("which syntax you want to edit \n"+str))
//         update=(prompt("enter"))
//         todo[i-1]=update
//         up=``
//         for(i in todo){
//             up+=`[${+[i]+1} ]${todo[i]}\n`

//         }
//         alert(up)
//     }
//     else if (num==4) {
//         str=``
//         for(i in todo){
//             str+=`[${+[i]+1} ]${todo[i]}\n`

//         }
//         dlt=parseInt(prompt("which syntax you want to delete \n"+str))
//         todo.splice(dlt-1,1)
//         dt=``
//         for(i in todo){
//             dt+=`[${+[i]+1} ]${todo[i]}\n`

//         }
//         alert(dt)
//     }
//     else if (num==5) {
//         break
//     }
// }







// call by value

// function ab() {
//     let a=10
//     cd(a)
//     console.log(a);
// }
// function cd(x) {
//     x+=1
//     console.log(x);
// }

// ab()





// call by reference
// function ab() {
//     let a=[10]
//     cd(a)
//     console.log(a[0]);
// }
// function cd(x) {
//     x[0]+=1
//     console.log(x[0]);
// }

// ab()



// function ab(a,b) {
//     function cd() {
//         c=a+b
//         return c
//     }
//     return cd
// }


// x=ab(2,4)
// console.log(x());






// document.getElementById("age").value="heyyyyy"
// document.getElementById("hlo").innerHTML="<h1>loll</h1>"


// document.getElementById("hlo").setAttribute("class","heyy")
// x=document.getElementById("hlo").getAttribute("class")
// console.log(x);
// document.getElementById("hlo").style.color="rgba(100,111,233,333)"
// document.getElementById("hlo").style.fontWeight="700"


const btn=document.createElement("button")
btn.textContent="clic me"
document.getElementById("hlo").appendChild(btn)