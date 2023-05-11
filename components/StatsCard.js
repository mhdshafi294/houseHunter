import styles from '../styles/StatsCard.module.css'
import Image from 'next/image';

export default function StatsCard(props){
    return (
        <div className={styles.statsCard}>
            <div className={styles.statsImages}>
                {
                props.stat.images.map((image, index) =>(
                    <Image 
                        key={index}
                        className={styles.statsImage}
                        width='56' 
                        height='56'
                        src={image}
                    />
                    ))
                }
            </div>
            <div className={styles.statsTexts}>
                <h4 className={styles.statsTitle}>{props.stat.title}</h4>
                <p className={styles.statsSentence}>{props.stat.sentence}</p>
            </div>
        </div>
    )
}