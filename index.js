const url = "https://viacep.com.br/ws/01001000/json/"


fetch(url, { method:"GET"} )
.then(resp => resp.json())
.then(data => console.log(data))
