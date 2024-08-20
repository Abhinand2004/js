// i=10
// function asd() {
//     document.getElementById("head").innerHTML=i
//     setTimeout(() => {
//         if(i==0){
//             document.getElementById("head").innerHTML="start"
//         }
//         else if (i>0) {
//             asd()
//         }
//     }, 1000);
//     i--
// }
// asd()


function setz(sec) {
    return sec<10?`0${sec}`:sec
}




function clock() {
    let dt=new Date()
    let hr=dt.getHours()
    let day=dt.getDay()
    let am=hr>12?"PM":"AM"
    document.getElementById("btm").innerHTML=`${setz(hr%12)}:${setz(dt.getMinutes())}:${setz(dt.getSeconds())}`
    document.getElementById("lvl2").innerHTML=`${setz(dt.getMonth())}:${setz(dt.getDate())}:${setz(dt.getFullYear())}`
    document.getElementById("ampm").innerHTML=`${am}`
    str=''
    switch (day) {
        case 1:str="monday"
            
            break;
            case 2:str="Tuesday"
            
            break;
            case 3:str="wenesday"
            
            break;
            case 4:str="thersday"
            
            break;
            case 5:str="friday"
            
            break;
            case 6:str="saturday"
            
            break;
            case 7:str="sunday"
            
            break;
        default:
            break;
    }

    document.getElementById("lvl3").innerHTML=`${str}`

    setTimeout(() => {
        clock()
    }, 1000);
}
clock()