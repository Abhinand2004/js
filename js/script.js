function GetData() {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        

        
    
        str=``
        data.map((content)=>{
            str+=`
            <div class="asd">
            <p>${content.title}</p>
        <img src="${content.url}" alt="">


           
            </div>
            `
        })
        

        document.getElementById("div1").innerHTML=str
    })
    .catch((error)=>{
        alert(error)
    })
}