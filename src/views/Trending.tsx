import React, { Component } from 'react'
import Button from '../components/button/Button'
import Caption from '../components/caption/Caption'
import Card from '../components/card/Card'
import Thumbnail from '../components/thumbnail/Thumbnail'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import Description from '../components/description/Description'
import './Trending.scss'
import Label from '../components/label/Label'
import { connect } from 'react-redux'
import booksApi from '../services/booksApi'
import { fetchTrendingBooks, setIsLoading } from '../store/actions/bookActions'
import { Dispatch } from 'redux'
import Loading from '../components/loading/Loading'

interface TrendingProps {
  trendingBooks: []
  isLoading: boolean
  fetchTrendingBooks: any
  setIsLoading: any
}

class Trending extends Component<TrendingProps> {
  async fetchTrendingBooks() {
    // const withCover = []
    try {
      const { data } = await booksApi.get(`/trending/daily.json?limit=30`)
      this.props.fetchTrendingBooks(data.works)
      this.props.setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount(): void {
    this.fetchTrendingBooks()
  }
  render() {
    console.log(this.props.trendingBooks)

    return this.props.isLoading ? (
      <Loading />
    ) : (
      <>
        <Label class="page-desc" labelText="Trending Books" />
        <div className="trending-container">
          {this.props.trendingBooks.map((book: any) => (
            <Card
              class="card-container"
              children={
                <>
                  <FavoriteBorderOutlinedIcon
                    className="fav-icon"
                    onClick={() => {}}
                  />
                  <Thumbnail
                    class="fav-img"
                    alt=""
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                  />
                  <Description
                    class="desc-card"
                    children={
                      <>
                        <Caption class="desc-title" title="" />
                        <Caption class="desc-author" title="" />
                        <Caption class="desc-price" title="" />
                        <Button
                          class="card-btn"
                          handleClick={() => {}}
                          type="button"
                          label="Add To Cart"
                        />
                      </>
                    }
                  />
                </>
              }
            />
          ))}
        </div>
      </>
    )
  }
}
const mapStateToProps = (state: any) => {
  return {
    isLoading: state.home.isLoading,
    trendingBooks: state.home.trendingBooks,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setIsLoading: (payload: boolean) => dispatch(setIsLoading(payload)),
    fetchTrendingBooks: (payload: any) => dispatch(fetchTrendingBooks(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trending)
