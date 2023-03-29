import React, { Component } from 'react';
import NavBar from './components/nav-bar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Trending from './views/Trending';
import RandomBook from './views/RandomBook';
import GreatestBooks from './views/GreatestBooks';
import SummerReads from './views/SummerReads';
import SingleBook from './views/ProductDetail';
import SearchResults from './views/SearchResults';
import { connect } from 'react-redux';
import { RootState } from '.';
import ProductDetail from './views/ProductDetail';

interface AppProps {
  search: string;
}

class App extends Component<AppProps> {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                this.props.search.length > 2 ? <SearchResults /> : <Trending />
              }
            />
            <Route
              path="/random"
              element={
                this.props.search.length > 2 ? (
                  <SearchResults />
                ) : (
                  <RandomBook />
                )
              }
            />
            <Route
              path="/summer-reads"
              element={
                this.props.search.length > 2 ? (
                  <SearchResults />
                ) : (
                  <GreatestBooks />
                )
              }
            />
            <Route
              path="/greatest-books"
              element={
                this.props.search.length > 2 ? (
                  <SearchResults />
                ) : (
                  <ProductDetail />
                )
              }
            />
            <Route
              path="/single-book/:id"
              element={
                this.props.search.length > 3 ? (
                  <SearchResults />
                ) : (
                  <SingleBook />
                )
              }
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return { search: state.searchReducer.search };
};

export default connect(mapStateToProps)(App);
