// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
  const [image, setImage] = useState('')

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(r => r.json())
    .then(data => setImage(data.message))
  }, [])
  // use an empty dependencies array, so we only run the fetch request ONCE

  if(!image) return <p>Loading...</p>

  return <img src={image} alt='A Random Dog'/>
}

export default App