function github(){
    const Username = document.getElementById("Uname").value;
    const url = "https://api.github.com/users/"+Username+"/repos";
    fetch(url)
    .then((response)=>{

        return response.json()
    
    })
    .then(data=>{  console.log(data)
    })
}