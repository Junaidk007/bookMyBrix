import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Listing from './pages/Listing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='appLayout'>
        {/* <Home /> */}
        <Listing/>
      </div>
    </>
  )
}

export default App
