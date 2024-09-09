let url=window.location.href;
let urlparams=new URLSearchParams(url.split("?")[1])
let id=urlparams.get("id")
console.log(id);
let itm


async function GetDetails(){
    const res= await fetch(`https://dummyjson.com/products/${id}`)
    const data=await res.json()
    console.log(data);
    const discountDecimal = data.discountPercentage / 100;
    const remainingFactor = 1 - discountDecimal;
    const ogprice = data.price/ remainingFactor

    document.getElementById("card").innerHTML=`
    <div class="image" ><img id="imagee" src="${data.thumbnail}" alt="">
    <div class="btn"><button class="b2">BuyNow</button>
    <button class="b1">AddToCart</button></div></div>




    <div class="details">
    <span class="brand">${data.brand}</span>
    <span class="title">${data.title}</span>

    <span class="soofer">special offers</span>

    <span class="span1"> <span class="ogprice"><del>$${ogprice}</del></span> <span class="price">$${data.price}</span><span class="dic">${data.discountPercentage}% off</span></span>

    <span class="rating"><h3>${data.rating} ☆</h3></span>
    
    </div>
    
    `

    let str=``
    data.images.map((img)=>{
      str+=`
      <div class="img">
      <img src="${img}" alt="no img" onmouseover="changePic('${img}')" />
      </div>
      `
    })
  document.getElementById("sidecards").innerHTML=str

  

}
GetDetails()

function changePic(image){
  console.log("heyyy");
  document.getElementById("imagee").src=`${image}`
}