
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Section2.module.css'

export default function Section2(){
    return(
        <div className={styles.section2}>
            <div className={styles.sectionHeader}>
                <div className={styles.title}>
                    <div className={styles.smallTitle}>
                        <div className={styles.divider}></div>
                        <p className={styles.smallTitleText}>Our Recommendation</p>
                    </div>
                    <h2 className={styles.largeTitle}>Featured House</h2>
                </div>
                <div className={styles.navs}>
                    <Link  href='/about'><li className={styles.avtiveNav}>House</li></Link>
                    <Link  href='/article'><li>Villa</li></Link>
                    <Link  href='/property'><li>Apartment</li></Link>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.arrowLeft}><Image src="/../public/imgs/s2/eva_arrow-backward.png" width="28" height="28"/></div>
                    <div className={styles.arrowRight}><Image src="/../public/imgs/s2/eva_arrow-forward.png" width="28" height="28"/></div>
                </div>
            </div>
        </div>
    )
}