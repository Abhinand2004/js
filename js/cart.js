function SetCart(){
    str=``
    for(i=0;i<localStorage.length;i++){
        const key=localStorage.key(i)
        const value=JSON.parse(localStorage.getItem(key));
        str+=`
    <div class="address">
        <h3>FromSavedAddress</h3>
        <button>EnterDelivaryPincode</button>
    </div>
    <div id="item">
        <div id="image">
            <img src="${value.thumbnail}" alt="">
        </div>
        <div id="details">
            <span class="name">${value.title}</span>
            <span class="price">$${value.price}</span>
         <span class="button"">   <button class="btn">BUY NOW</button><button class="btn" onclick='dlt(${value.id})'>Remove</button> </span>
        </div>
    </div>

    
        `
        
    }
    document.getElementById("lside").innerHTML=str
}

function dlt(key){
localStorage.removeItem(key)
SetCart();

}


SetCart()
