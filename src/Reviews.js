import React, {useState, useEffect} from 'react'
import ReviewForm from './ReviewForm'
import ReviewLink from './ReviewLink'
const Reviews = () => {
    const [reviews, setReviews] = useState([])

    const addReview = (review) => {
        setReviews([...reviews, review])
    }


    useEffect(()=> {
        fetch('http://localhost:8000/reviews')
        .then(resp => resp.json())
        .then(data =>  { 
            setReviews(data)
        })
    },[])

    const reviewList = reviews.map(review => <ReviewLink review={review}/> )
    return (
        <div>
            <h1>Reviews</h1>
            {reviewList}
            <hr />
            <ReviewForm addReview={addReview}/>
        </div>
    )
}

export default Reviews