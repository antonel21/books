import React, { Component } from 'react'
import PrimaryCard from '../components/cards/PrimaryCard'
import './Trending.scss'
import Label from '../components/label/Label'
import { connect } from 'react-redux'
import booksApi from '../services/booksApi'
import {
  fetchTrendingBooks,
  setIsLoading,
  setPageNumber,
} from '../store/actions/bookActions'
import { Dispatch } from 'redux'
import Loading from '../components/loading/Loading'
import Pagination from '@mui/material/Pagination'

interface TrendingProps {
  trendingBooks: []
  isLoading: boolean
  fetchTrendingBooks: any
  setIsLoading: any
  pageNumber: number
  setPageNumber: any
  search: string
}

class Trending extends Component<TrendingProps> {
  async fetchTrendingBooks() {
    try {
      const { data } = await booksApi.get(
        `/trending/daily.json?page=${this.props.pageNumber}&limit=20`,
      )
      const newData = await booksApi.get(
        `/search.json?q=${this.props.search}&limit=20`,
      )
      if (this.props.search.length < 3) {
        this.props.fetchTrendingBooks(data.works)
      } else {
        this.props.fetchTrendingBooks(newData.data.docs)
      }
      this.props.setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount(): void {
    this.fetchTrendingBooks()
  }

  componentDidUpdate(
    prevProps: Readonly<TrendingProps>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ): void {
    if (
      prevProps.search !== this.props.search &&
      (this.props.search.length > 3 || this.props.search.length === 0)
    ) {
      this.props.setIsLoading(true)
      this.fetchTrendingBooks()
    }
    if (prevProps.pageNumber !== this.props.pageNumber) {
      this.props.setIsLoading(true)
      this.fetchTrendingBooks()
    }
  }
  render() {
    return (
      <>
        <Label class="page-desc" labelText="Trending Books" />
        {this.props.isLoading ? (
          <Loading />
        ) : (
          <div className="trending-container">
            {this.props.trendingBooks.map((book: any, index: number) => (
              <PrimaryCard book={book} key={index} class="card-container" />
            ))}
          </div>
        )}
        <Pagination
          onChange={(e, page) => this.props.setPageNumber(page)}
          className="pagination"
          count={10}
          color="primary"
        />
      </>
    )
  }
}
const mapStateToProps = (state: any) => {
  return {
    isLoading: state.home.isLoading,
    trendingBooks: state.home.trendingBooks,
    pageNumber: state.home.pageNumber,
    search: state.home.search,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setIsLoading: (payload: boolean) => dispatch(setIsLoading(payload)),
    fetchTrendingBooks: (payload: any[]) =>
      dispatch(fetchTrendingBooks(payload)),
    setPageNumber: (pageNumber: number) => dispatch(setPageNumber(pageNumber)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trending)
