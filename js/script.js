function GetData() {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        
        abc=``
        data.map((content)=>{
            abc=`
            <tr>
            <th>POST-ID</th>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>

            <th>BODY</th>
            </tr>
           `
        })
    
        str=``
        data.map((content)=>{
            str+=`
            <tr>
            <td>${content.postId}</td>
            <td>${content.id}</td>
            <td>${content.name}</td>
            <td>${content.email}</td>
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