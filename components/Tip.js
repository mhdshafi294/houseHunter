
import Image from 'next/image'
import styles from '../styles/Tip.module.css'

export default function Tip({tipInfos}){
    return(
        <div className={styles.tip}>
            <div className={styles.imgDiv}>
                <Image className={styles.img} src={tipInfos.image} width="200" height="144"/>
            </div>
            <div className={styles.right}>
                <div className={styles.author}>
                    <Image className={styles.authorImg} src={tipInfos.authorImage} width="32" height="32"/>
                    <p className={styles.authorName}>{tipInfos.authorName}</p>
                </div>
                <h5 className={styles.title}>{tipInfos.title}</h5>
                <div className={styles.durationAndDate}>
                    <span className={styles.clock}></span>
                    <p className={styles.duration}>{tipInfos.readDuration} min read | </p>
                    <p className={styles.date}>{tipInfos.publishDate}</p>
                </div>
            </div>
        </div>
    )
}