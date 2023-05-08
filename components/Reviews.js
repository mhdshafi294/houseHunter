import React, {useRef} from 'react';
import ReviewCard from './ReviewCard'
import { reviews } from '../constants/constants.js'
import { useState } from 'react';

export default function Reviews(){
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef();

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= reviews.length) {
            newIndex = reviews.length - 1;
        }
        setActiveIndex(newIndex);
    };

    return (
        <div className='reviews'>
            <div className='divider'></div>
            <p className='section-title-small'>See Our Review</p>
            <h2 className='section-title-large'>What Our User Say About Us</h2>
            <div ref={carouselRef} className='ReviewCards'>
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
            <div className="indicators">
                {reviews.map((item, index) => {
                    return (
                    <button
                        key={index}
                        className={`indicator-buttons ${
                            index === activeIndex
                            ? "indicator-symbol-active"
                            : "indicator-symbol"
                        }`}
                        onClick={() => {
                        updateIndex(index);
                        }}
                    >
                    </button>
                    );
                })}
            </div>
        </div>
        )
}