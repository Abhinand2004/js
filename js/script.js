
let products
async function GetData(){
    const res = await fetch("https://dummyjson.com/products")
    if (res.status==200) {
        const Data= await res.json() 
        console.log(Data);
        products=Data.products
        str=``
        products.map((product)=>{
            str+=`
            <div class="card">
            <div class="cardtop">
                <img src="${product.images}" alt="" id="img">
            </div>
            <div class="cardbottom">
                    <P class="p0">${product.category}</P>
                    <p class="p1">${product.brand}</p>
                    <p class="title">${product.title}</p>
                   <div class="disc">
                    <p class="p2">$${product.price}</p>
                    <p class="p3">${product.discountPercentage}%  off</p>
                   </div>
                    <p class="p4"><span>Size:</span>${product.dimensions.width}</p>
            </div>
        </div>
            
            `
        })
        document.getElementById("mainside").innerHTML=str
    }
  
}

GetData()