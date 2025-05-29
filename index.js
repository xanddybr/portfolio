const url = "https://viacep.com.br/ws/21730000/json/"


fetch(url, { method:"GET"} )
.then(resp => console.log(resp.status))
