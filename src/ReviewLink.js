import React from 'react'
import { Link } from 'react-router-dom'

const ReviewLink = ({review}) => {
    return (
        <>
        <Link to={`/reviews/${review.id}`}>
            {review.title}
        </Link>
        <br />
        </>
    )
}

export default ReviewLink