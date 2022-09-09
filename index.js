import fetch from "node-fetch";

const table = document.querySelector('#table')

console.log(table)

const traerApi = async () => {
    try{
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        const data = await res.json()
        tableBody(data)
    }catch(err){
        console.log(err)
    }
};


const tableBody = (cont) => {
   

    cont.map(el => {
        const row = table.insertRow();
        row.innerHTML = `
        <td>${el.name}</td>
        <td>${el.current_price}</td>
        `
    })

 
}


traerApi()