function GetData() {
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        

        
    
        str=``
        data.map((content)=>{
            str+=`
            <div class="asd"><li>${content.userId}</li>
            <li>${content.id}</li>
            <li>${content.title}</li>
            </div>
            `
        })
        

        document.getElementById("div1").innerHTML=str
    })
    .catch((error)=>{
        alert(error)
    })
}