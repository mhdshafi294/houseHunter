import Image from 'next/image'
import styles from '../styles/Tips.module.css'
import Tip from './Tip'
import { tipsInfo } from '../constants/constants.js'

export default function Tips(){
    return(
        <section className={styles.tips}>
            <div className='divider'></div>
            <p className='section-title-small'>See tips and trick from our partnership</p>
            <h2 className='section-title-large'>Find out more about <br /> selling and buying homes</h2>
            <button className={styles.moreArticales}>More Artikel</button>
            <div className={styles.tipsContent}>
                <div className={styles.smallTips}>
                    {tipsInfo.slice(0, 3).map((tip, index) => (
                        <Tip 
                        key={index}
                        tipInfos={tip}
                        />
                    ))}
                </div>
                <div className={styles.largeTip}></div>
            </div>
        </section>
    )
}