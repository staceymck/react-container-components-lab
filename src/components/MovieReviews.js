
import React from 'react'

const MovieReviews = ({reviews}) => {
  return(
    <div className="review-list">
      {reviews.map(m => {
        return (
        <div className="review" id={m.display_title}>
          <h2>{m.display_title}</h2>
          <h4>By: {m.byline}</h4>
          <p>{m.summary_short}</p>
        </div>
        )
      })
      }
    </div>
  )
}

export default MovieReviews