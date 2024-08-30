function GetData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        
        abc=``
        data.map((content)=>{
            abc=`
            <tr>
            <th>ID</th>
            <th>USER_ID</th>
            <th>TITLE</th>
            <th>BODY</th>
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
            <td>${content.body}</td>

            </tr>`
        })
        document.getElementById("body1").innerHTML=abc

        document.getElementById("body2").innerHTML=str
    })
    .catch((error)=>{
        alert(error)
    })
}
