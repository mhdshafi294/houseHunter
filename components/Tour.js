
import Image from 'next/image'
import styles from '../styles/Tour.module.css'
import {useRef} from 'react'
import YouTube, { YouTubeProps } from 'react-youtube';
import { MdKingBed, MdBathtub, MdGarage } from 'react-icons/md';
import { GiStairs } from 'react-icons/gi';
import { BsTelephoneFill,BsPlayFill } from 'react-icons/bs';
import { houseDetail } from '../constants/constants.js'

export default function Tour(){
    // const youtubeContsinerRef = useRef();
    // const youtubeModuleRef = useRef();

    // const handleOnPlay = () => {
    //     youtubeContsinerRef.current.style.zIndex = "2";
    //     youtubeContsinerRef.current.style.transform = "translateX(-10px)";
    //     youtubeContsinerRef.current.style.width = "740px";
    //     youtubeModuleRef.current.setAttribute("opts", "{height: '739', width: '488', playerVars: {autoplay: 0,}") ;
    // }
    // // This const is for YouTube component.
    // const onPlayerReady = YouTubeProps['onReady'] = (event) => {
    //     // access to player in all event handlers via event.target
    //     event.target.pauseVideo();
    // }
    
    // const opts = YouTubeProps['opts'] = {
    //     height: '416',
    //     width: '488',
    //     playerVars: {
    //     // https://developers.google.com/youtube/player_parameters
    //     autoplay: 0,
    //     },
    // };
    
    return(
        <section className={styles.tour}>
            <div className={styles.left}>
                <div className={styles.title}>
                    <div className={styles.divider}></div>
                    <div className={styles.titleText}>
                        <p className={styles.smallTitleText}>Ready to Sell!</p>
                        <h2 className={styles.largeTitle}>Let’s tour and see our house!</h2>
                    </div>
                </div>
                <div className={styles.infos}>
                    <p className={styles.description}>
                        Houses recommended by our partners that have been curated to become the home of your dreams!
                    </p>
                    <div className={styles.detail}>
                        <h6>House Detail</h6>
                        <div className={styles.details}>
                            <div className={styles.d1}>
                                <MdKingBed />
                                <p>
                                    {houseDetail[0].bedrooms} Bedrooms
                                </p>
                            </div>
                            <div className={styles.d1}>
                                <MdBathtub />
                                <p>
                                    {houseDetail[0].bathrooms} Bathrooms
                                </p>
                            </div>
                            <div className={styles.d1}>
                                <MdGarage />
                                <p>
                                    {houseDetail[0].carport} Carport
                                </p>
                            </div>
                            <div className={styles.d1}>
                                <GiStairs />
                                <p>
                                    {houseDetail[0].floors} Floors
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.greyDivider}></div>
                    <div className={styles.contact}>
                        <Image src='/../public/imgs/ellipse6.png' className={styles.contactPic} width='56' height='56'/>
                        <div className={styles.contactText}>
                            <p className={styles.name}>Dianne Russell</p>
                            <p className={styles.job}>Manager Director</p>
                        </div>
                        <button className={styles.contactButton} href="tel:+963-394-204-793"><BsTelephoneFill /> Contact Now</button>
                    </div>
                </div>
            </div>
            <div className={styles.media}>
                <div className={styles.imgs}>
                    <Image src='/../public/imgs/Rectangle18.jpg' className={styles.contactPic} width='296' height='168'/>
                    <Image src='/../public/imgs/Rectangle19.jpg' className={styles.contactPic} width='96' height='80'/>
                    <Image src='/../public/imgs/Rectangle20.jpg' className={styles.contactPic} width='96' height='80'/>
                    {/* <YouTube videoId="2g811Eo7K8U" opts={opts} /> */}
                </div>
                <div className={styles.video} >
                    <YouTube 
                        videoId="zumJJUL_ruM" 
                        opts={{
                                height: '416',
                                width: '488',
                                playerVars: {
                                autoplay: 0,
                                },
                            }} 
                        onReady={(event) => { event.target.pauseVideo(); }}
                        // onPlay={handleOnPlay}
                        // ref={youtubeModuleRef}
                    />
                    {/* <Image src='/../public/imgs/Rectangle17.jpg' className={styles.contactPic} width='488' height='416'/>
                    <button className={styles.videoButton}><BsPlayFill /></button> */}
                </div>
            </div>
        </section>
    )
}