import React, { useState } from 'react'
import Inputbox from './inputbox'
import useCurrencyOptions from './useCurrencyOptions'

function App() {
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const currencyOptions = useCurrencyOptions(from)
  const options = Object.keys(currencyOptions || {})
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState()
  const values = Object.values(currencyOptions)


  const convert = () => {
    setConvertedAmount(+(amount) * (currencyOptions[to.toUpperCase()]))
    console.log(convertedAmount)
  }

  const swap = () => {
    setTo(from)
    setFrom(to)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  return (

    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()

              }}
            >
              <div className="w-full mb-1">
                <Inputbox
                  label="From"
                  currencyOptions={options}
                  amount={amount}
                  setAmount={setAmount}
                  setFrom={setFrom}
                  from={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

                  onClick={swap}>swap</button>
              </div>
              <div className="w-full mt-1 mb-4">
                <Inputbox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  from={to}

                  setFrom={setTo}
                />

              </div>

              <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
                convert
              </button>
            </form>
          </div>
        </div>

      </div>
      <br></br>

    </>
  )
}

export default App