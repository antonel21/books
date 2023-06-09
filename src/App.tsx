import React, { Component } from 'react';
import NavBar from './components/nav-bar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Trending from './views/Trending';
import RandomBook from './views/RandomBook';
import GreatestBooks from './views/GreatestBooks';
import SummerReads from './views/SummerReads';
import SearchResults from './views/SearchResults';
import { connect } from 'react-redux';
import { RootState } from '.';
import ProductDetail from './views/ProductDetail';
import { iUser } from './utils/iUser';
import { setUserData } from './store/actions/bookActions';
import { Dispatch } from 'redux';

interface AppProps {
  search: string;
  setUserData: (userData: iUser) => void;
}

class App extends Component<AppProps> {
  componentDidMount(): void {
    const isUserLogged = JSON.parse(
      localStorage.getItem('books.user-data') as string,
    ) as iUser;
    if (isUserLogged) this.props.setUserData(isUserLogged);
  }

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
                  <SummerReads />
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

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUserData: (userData: iUser) => dispatch(setUserData(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
