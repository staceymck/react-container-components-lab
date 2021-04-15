import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ""
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  fetchReviews = () => {
    fetch(URL + `&query=${this.state.searchTerm}`)
    .then(res => res.json())
    .then(({results}) => {
      this.setState({
        reviews: results
      })
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.fetchReviews()
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">Search:</label>
          <input type="text" id="search" value={this.state.searchTerm} onChange={this.handleChange}></input>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}