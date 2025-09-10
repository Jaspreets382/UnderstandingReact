import { useEffect, useState } from "react";

function useCurrencyOptions(currency){
    const[data,setData]=useState({})

    useEffect(()=>{
       async function fetchData(){
        const res=await fetch(`https://open.er-api.com/v6/latest/${currency}`);
      //   console.log(res)   
        const json=await res.json();
        setData(json.rates);
       }
       fetchData()
    },[currency])

 return data;   
}
export default useCurrencyOptions;