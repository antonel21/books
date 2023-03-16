import React from 'react'
import NavBar from './components/nav-bar/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Trending from './views/Trending'
import RandomBook from './views/RandomBook'
import GreatestBooks from './views/GreatestBooks'
import SummerReads from './views/SummerReads'
import SingleBook from './views/SingleBook'
import SearchResults from './views/SearchResults'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/random" element={<RandomBook />} />
          <Route path="/summer-reads" element={<SearchResults />} />
          <Route path="/greatest-books" element={<SummerReads />} />
          <Route path="/single-book/:id" element={<SingleBook />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
