import React from 'react';
import Image from 'next/image'

export default function ReviewCard(props){
    return (
        <div className='review-card'>
            <Image src={props.image}  className='review-house-pic' width='740' height='400'/>
            <div className='review-content'>
                <h4 className='review-title'>{props.title}</h4>
                <p className='review-details'>{props.description}</p>
                <div className='review-person-rate'>
                    <div className='review-person'>
                        <Image src={props.userImage} className='review-person-pic' width='40' height='40'/>
                        <div className='review-person-name-job'>
                            <p className='review-person-name'>{props.userName}</p>
                            <p className='review-person-job'>{props.userJob}</p>
                        </div>
                    </div>
                    <div className='review-rate'>
                        <Image src={'/../public/imgs/vector.png'} className='review-star'width='23' height='23'/>
                        <p className='review-rate'>{props.rate}</p>
                    </div>
                </div>
            </div>
        </div>
      )
}