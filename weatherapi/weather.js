async function weather(){
    let x=document.getElementById('test').value
    const url='https://api.openweathermap.org/data/2.5/weather?q='+x+'&appid=ee5e8f8ecfb19792de92892bf7816871'
    const resp=await fetch(url)
    let data=await resp.json();
    document.getElementById("val").innerHTML+=`Temp:${data.main.temp}<br>`
    console.log(data)
}