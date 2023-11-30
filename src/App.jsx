import { useState, useEffect } from 'react'
import './App.css'
import Layout from './layout.jsx'

function App() {
  const [segundos, setSegundos] = useState(0)
  const [minutos, setMinutos] = useState(54)
  const [horas, setHoras] = useState(14)

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundos(segundos + 1)
      if (segundos == 59) {
        setSegundos(0)
        setMinutos(minutos + 1)
        if (minutos == 59) {
          setMinutos(0)
          setHoras(horas +1)
        }
      } 

     }, 1000);

    return () => clearInterval(interval);



  })

  return (
    <Layout horas={horas} minutos={minutos} segundos={segundos}/>
     
  )
}

export default App
