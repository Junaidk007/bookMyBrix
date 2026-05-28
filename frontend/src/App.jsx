import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='appLayout'>
        <Home />
      </div>
    </>
  )
}

export default App
