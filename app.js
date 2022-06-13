//api
const endpoint = "https://restcountries.com/v3.1/all";
//tableau qui stock les données de l'api
const cities =[];

// const params = {
//     access_key: 'ba2e80effd6f658e7352626a45cd58ce',
//     query:'France'
    
//   }


 fetch(endpoint)
    
    .then (blob => blob.json()) //sous une autre forme
    //.then (response => response.json())
    //.then (data => console.log(JSON.stringify(data)))
    .then(data => cities.push(...data))
    
console.log(cities)



  