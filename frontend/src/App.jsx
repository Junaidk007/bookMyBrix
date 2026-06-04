import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Listing from './pages/Listing'
import Footer from './components/Footer'
import AddListing from './pages/AddListing'
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./util/ScrollToTop";

function App() {

  return (
    <>
      <Navbar />
        <ScrollToTop />
      <div className='appLayout'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-listing" element={<AddListing />} />
          <Route path="/listing/:id" element={<Listing />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App

