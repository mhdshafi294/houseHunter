import Image from 'next/image'
import styles from '../styles/Tips.module.css'
import Tip from './Tip'
import { tipsInfo } from '../constants/constants.js'
import { AiFillClockCircle } from 'react-icons/ai';

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
                <div className={styles.largeTip}>
                    <div className={styles.tip}>
                        <div className={styles.imgDiv}>
                            <Image className={styles.img} src={tipsInfo[tipsInfo.length - 1].image} width="200" height="144"/>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.author}>
                                <Image className={styles.authorImg} src={tipsInfo[tipsInfo.length - 1].authorImage} width="32" height="32"/>
                                <p className={styles.authorName}>{tipsInfo[tipsInfo.length - 1].authorName}</p>
                            </div>
                            <h5 className={styles.title}>{tipsInfo[tipsInfo.length - 1].title}</h5>
                            <p className={styles.description}>{tipsInfo[tipsInfo.length - 1].title}</p>
                            <div className={styles.durationAndDate}>
                                <p className={styles.clock}> <AiFillClockCircle /></p>
                                <p>{`${tipsInfo[tipsInfo.length - 1].readDuration} min read |  ${tipsInfo[tipsInfo.length - 1].publishDate}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
