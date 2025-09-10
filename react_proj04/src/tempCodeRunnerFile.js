 async function fetchData(){
        const res=await fetch(`https://open.er-api.com/v6/latest/usd`);
        console.log(res)
        const json=await res.json();
        // setData(data.rates);
        console.log(json)
        console.log(json.rates)
       }
       fetchData()