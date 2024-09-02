function GetData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        
        abc=``
        data.map((content)=>{
            abc=`
            <tr>
            <th>USER_ID</th>
            <th>ID</th>
            <th>TITLE</th>
            <th>STATUS</th>
            </tr>
           `
        })
    
        str=``
        data.map((content)=>{

           
            str+=`
            <tr>
            <td>${content.userId}</td>
            <td>${content.id}</td>
            <td>${content.title}</td>
            <td id="color">${content.completed?"<span class='colort'>completed</span>":"<span class='colorf'>not completed</span>"}</td>

            </tr>
            `
          
        })
        document.getElementById("div1").innerHTML=abc

        document.getElementById("div2").innerHTML=str
        
        
        

        // document.getElementById("div1").innerHTML=str
    })
    .catch((error)=>{
        alert(error)
    })
}