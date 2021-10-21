import React, { useState, useEffect} from 'react'

const Review = (props) => {
    const [fullReview, setFullReview] = useState({ 
        title: '',
        review: ''
})

    useEffect(() => {
         fetch(`http://localhost:8000/reviews/${props.match.params.id}`)
         .then(resp => resp.json())
         .then(data => setFullReview(data))
    }, [])

    return (
    <>
    <h1>{fullReview.title}</h1>
    <h2>{fullReview.review}</h2>
    </>
    )
}

export default Review;