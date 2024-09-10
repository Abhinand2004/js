
let url=window.location.href;
let urlparams=new URLSearchParams(url.split("?")[1])
let id=urlparams.get("id")
console.log(id);

async function GetDetails(){
    const res= await fetch(`https://dummyjson.com/products/${id}`)
     data=await res.json()
     
    }

    GetDetails()