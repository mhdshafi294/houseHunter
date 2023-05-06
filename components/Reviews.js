import React from 'react';
import ReviewCard from './ReviewCard'
import { reviews } from '../constants/constants.js'

export default function Reviews(){
    return (
        <div className='reviews'>
            <div className='divider'></div>
            <p className='section-title-small'>See Our Review</p>
            <h2 className='section-title-large'>What Our User Say About Us</h2>
            <div className='ReviewCards'>
                {
                reviews.map((review, index) =>(
                    <ReviewCard 
                        key={index}
                        title={review.title}
                        description={review.description}
                        image={review.image}
                        userName={review.userName}
                        userJob={review.userJob}
                        userImage={review.userImage}
                        rate={review.rate}
                    />
                ))}
            </div>
        </div>
      )
}