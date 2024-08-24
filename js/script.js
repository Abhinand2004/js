let arr=[]

function display() {

    str=``
    for(i in arr){
        str+=`<li>${arr[i]} <button onclick="edit(${i})">edit</button> or <button onclick="dlt(${i})">delete</button></li>`
    }
    document.getElementById("display").innerHTML=str
    document.getElementById("name").value=""
    document.getElementById("num").value=""


}
display()

function add() {
name=document.getElementById("name").value
num=document.getElementById("num").value

    if(name && num ==null){
        alert("enter something")

    }else{
        arr.push(`${name}:${num}`)
    display()


    }
}
function edit(i) {
    x=prompt("enter new name")
    y=prompt("enter new number")

    if (x&&y !=null) {
        arr[i]=`${x}:${y}`
    display()

    }
    else{
        alert("enter something")
    }
}
function dlt(i) {
    arr.splice(i,1)
    display()
}
