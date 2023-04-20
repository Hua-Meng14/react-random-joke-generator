import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [joke, setJoke] = useState('') // state to store joke

  const getJoke = async () => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/jokes/programming/random')
      const joke = response.data[0] // extract the joke from response
      setJoke(`${joke.setup} ${joke.punchline}`) // format the joke into a string
    } catch (error) {
      console.log(error)
      setJoke('Failed to fetch joke. Please try again.') // handle error
    }
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: 'green', fontSize: '3rem', marginBottom: '30px' }}>
        GMHUA Random Joke Generator
      </h1>
      <button
        onClick={getJoke}
        style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none' }}
      >
        Generate Joke
      </button>
      <p style={{ fontSize: '1.2rem', marginTop: '30px' }}>{joke}</p>
    </div>
  )
}

export default App