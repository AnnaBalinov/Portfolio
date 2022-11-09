import React, { useState, useEffect } from 'react'
import './style/global.scss'
import { LoadingSpinner } from './components/LoadingSpinner'
import { HomePage } from './pages/HomePage'

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {

    setLoading(true)

    setTimeout(() => {

      setLoading(false)
      
    }, 3000)
  }, [])

  return (
    <div>
      {loading ? <LoadingSpinner /> : <HomePage />}
    </div>
  );
}

export default App
