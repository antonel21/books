import React, { Component } from 'react'
import Caption from '../caption/Caption'
import Thumbnail from '../thumbnail/Thumbnail'
import { NavLink } from 'react-router-dom'
import './SearchResults.scss'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

interface SearchResultsProps {
  searchedPokemons?: []
  setSearchedPokemons?: any
  singleIdPokemon?: any
}

export class SearchResults extends Component<SearchResultsProps> {
  render() {
    return (
      <div className="results-container">
        <div>
          <NavLink
            onClick={() => {
              this.props.singleIdPokemon()
              // localStorage.setItem('pokedex.id', pokemon.id)
            }}
            to={`/single-book/`}
            className="nav-link-single"
          >
            <Thumbnail
              class="results-img"
              src="https://cdn.vox-cdn.com/thumbor/p-gGrwlaU4rLikEAgYhupMUhIJc=/0x0:1650x2475/1200x0/filters:focal(0x0:1650x2475):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13757614/817BsplxI9L.jpg"
              alt="test"
            />
            <Caption class="results-caption" title="test" />
          </NavLink>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    pokemons: state.home.pokemons,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // singleIdPokemon: (id: number) => dispatch(singleIdPokemon(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
