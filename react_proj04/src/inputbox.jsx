import React, { useState } from 'react'

function Inputbox({
  label,
  currencyOptions = [],
  setFrom,
  from,
  amount,
  setAmount,

}) {


  return (
    <div className='bg-white p-3 rounded-lg text-sm flex'>
    <div className="w-1/2">
      <label className="text-black/40 mb-2 inline-block" htmlFor="Input">{label}</label>
      <input type="number" id="Input" placeholder='0'
      className="outline-none w-full bg-transparent py-1.5"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value)
        }}
        
        />
        </div>
         <div className="w-1/2 flex flex-wrap justify-end text-right">
      <label className="text-black/40 mb-2 w-full" > Currency Type</label>
      <select
      className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      >
        {currencyOptions.map((currency) => {
          return <option key={currency} value={currency}> {currency}  </option>
        })}
      </select>
    </div>
    </div>
  )
}

export default Inputbox