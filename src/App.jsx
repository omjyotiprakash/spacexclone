// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='relative bg-black'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App