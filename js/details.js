let url=window.location.href;
let urlparams=new URLSearchParams(url.split("?")[1])
let id=urlparams.get("id")
console.log(id);
let itm


async function GetDetails(){
    const res= await fetch(`https://dummyjson.com/products/${id}`)
    const data=await res.json()
    console.log(data);
    document.getElementById("card").innerHTML=`
    <div class="image"><img src="${data.thumbnail}" alt="">
    <div class"btn"><button class="b2">BuyNow</button>
    <button class="b1">AddToCart</button></div></div>
    <div class="details">
    <span class="brand">${data.brand}</span>
    <span class="title">${data.title}</span>

    <span class="soofer">special offers</span>
    <span class="span1"><span class="price">$${data.price}</span><span class="dic">${data.discountPercentage}% off</span></span>
    <span class="span2"><span class="rating">${data.rating} ☆</span></span>
    
    </div></div>
    
    `
  document.getElementById("sidecards").innerHTML=`  

  <img src="${data.images}" alt="" class="smallimg">

  `

}
GetDetails()