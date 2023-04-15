import React from 'react'
import Review from './Review/Review'

const Reviews = () => {
  return (
    <div className="w-full flex items-start justify-start flex-col gap-4">
        <Review />
        <Review />
        <Review />
    </div>
  )
}

export default Reviews