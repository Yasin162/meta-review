import React from 'react'

function ReviewForm() {
    return (
        <div>

            <hr />
            <form>
                <label type='text'>
                    Title: <input type="text"/>
                </label>
                <br />
                <label type='text'>
                    Review: <textarea type="text"/>
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}

export default ReviewForm;