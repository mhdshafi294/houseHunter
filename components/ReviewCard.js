import React from 'react';
import Image from 'next/image'
import styles from '../styles/ReviewCard.module.css'

export default function ReviewCard(props){
    return (
        <div className={styles.reviewCard}>
            <Image src={props.image}  className={styles.reviewHousePic} width='740' height='400'/>
            <div className={styles.reviewContent}>
                <h4 className={styles.reviewTitle}>{props.title}</h4>
                <p className={styles.reviewDetails}>{props.description}</p>
                <div className={styles.reviewPersonRate}>
                    <div className={styles.reviewPerson}>
                        <Image src={props.userImage} className={styles.reviewPersonPic} width='40' height='40'/>
                        <div className={styles.reviewPersonNameJob}>
                            <p className={styles.reviewPersonName}>{props.userName}</p>
                            <p className={styles.reviewPersonJob}>{props.userJob}</p>
                        </div>
                    </div>
                    <div className={styles.reviewRate}>
                        <Image src={'/../public/imgs/vector.png'} className={styles.reviewStar} width='23' height='23'/>
                        <p className={styles.reviewRateText}>{props.rate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}