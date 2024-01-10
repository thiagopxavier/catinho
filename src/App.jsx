import { useState } from 'react'
import './App.css'
import gatinho from "./assets/catinho.jpg"

function App() {
  const [gato, setGato] = useState(true)

  const handleClick = () => {
    setGato(false)
  }

  return (
    <div id='div-gatinho'>
      {gato?
      <>
      <img 
      id='img-gatinho'
      src={gatinho} 
      alt="gatinho" 
      />
      <button
        id='button-gatinho'
        onClick={handleClick}
      >

      </button>
      </>
      : <h1>dragao dançano com a musica do toothless dancing</h1>}

    </div>
  )
}

export default App
