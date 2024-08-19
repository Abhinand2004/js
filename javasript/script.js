i=10
function asd() {
    document.getElementById("head").innerHTML=i
    setTimeout(() => {
        if (i==0) {
            document.getElementById("head").innerHTML="start"
        }else if (i>0) {
            asd()
        }
        i--
    }, 1000);
    
}
asd()