import React, { useState } from 'react'

const ReviewForm = ({addReview}) => {
    const [title, setTitle] = useState('')
    const [review, setReview] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = { title: title, review: review }
        fetch('http://localhost:8000/reviews', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            addReview(data)
        })
        setTitle('')
        setReview('')
    }

    const formTitleText = (e) => {
        setTitle(e.target.value)
    }

    const formReviewText = (e) => {
        setReview(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
                <label type='text'>
                    Title: <input type="text" name='text' value={title} onChange={formTitleText}/>
                </label>
                <br />
                <label type='text'>
                    Review: <textarea type="text" name='review' value={review} onChange={formReviewText}/>
                </label>
                <input type="submit" />
            </form>
    )
}

export default ReviewForm;