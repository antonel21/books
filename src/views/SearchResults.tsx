import React, { Component } from 'react'
import './SearchResults.scss'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import SecondaryCard from '../components/cards/SecondaryCard'

interface SearchResultsProps {}

export class SearchResults extends Component<SearchResultsProps> {
  render() {
    return (
      <div className="results-container1">
        <SecondaryCard class="card-container1" />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
