// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
  const [image, setImage] = useState('')

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(r => r.json())
    .then(data => setImage(data.message))
  })

  if(!image) return <p>Loading...</p>

  return (
    <div>
      <img src={image} alt='A Random Dog'/>
    </div>
  )
}

export default App