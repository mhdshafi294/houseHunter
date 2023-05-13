

import styles from '../styles/Section2.module.css'

export default function Section2(){
    return(
        <div className={styles.section2}>
            <div className={styles.title}>
                <div className={styles.smallTitle}>
                    <div className={styles.divider}></div>
                    <p className={styles.smallTitleText}>Our Recommendation</p>
                </div>
                <h2 className={styles.largeTitleText}>Featured House</h2>
            </div>
        </div>
    )
}