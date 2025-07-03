import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clima from './Clima'

function App() {
  const [count, setCount] = useState(0)
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  async function buscarClima() {
    setIsLoading(true)

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'6fa075125c2a4a329ff707c1f429ddf0'}&units=metric&lang=pt`)
      const data = await response.json()
      console.log(data)

      setWeather({
        name: data.name,
        temperatura: data.main.temp,
        description: data.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
      })

    } catch (erro) {
      setWeather(null)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className='flex flex-col gap-4 h-screen p-10 bg-cover bg-no-repeat bg-center'
      style={{ backgroundImage: "url('/image.png')" }}>
      <div className='bg-white rounded-xl p-4 shadow-lg'>
        <h1>Previsão do Tempo</h1>
        <hr className='h-px my-3'></hr>

        <div className='mih-h-20 flex flex-col gap-4 items-center'>
          <input
            type='text'
            placeholder='Digite o nome da cidade'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className='border p-2 rounded'
          />
          <button
            onClick={() => buscarClima()}
            className='bg=gradient-to-r from-teal-500 to-sky-500 p-2 rounded-lg shadow-md text-black'
          >
            Buscar clima
          </button>
          {
            weather && (
              <Clima clima={weather} />
            )
          }
        </div>

      </div>

    </div>
  )
}

export default App
