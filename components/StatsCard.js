import styles from '../styles/StatsCard.module.css'
import Image from 'next/image';

export default function StatsCard(props){
    return (
        <div className={styles.statsCard}>
            <div className={styles.statsImages}>

            </div>
            <div className={styles.statsTexts}>
                <h4 className={styles.statsTitle}></h4>
                <p className={styles.statsSentence}></p>
            </div>
        </div>
    )
}