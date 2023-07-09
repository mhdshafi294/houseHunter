import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsCard from './StatsCard'
import styles from '../styles/Hero.module.css'
import { stats } from '../constants/constants.js'

export default function Hero(){
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        };

    return(
        <div className={styles.hero}>
            <div className={styles.left}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        find the place to <br/> live <span>your dreams</span> <br/> easily here
                    </h2>
                    <p className={styles.description}>
                        Everything you need about finding your place to live will be here, where it will be easier for you
                    </p>
                    <div className={styles.searchBar}>
                        <Image className={styles.fluent} src="/imgs/fluent_location-16-filled.png" width="24" height="24"/>
                        <input
                            type="text"
                            placeholder="Search for the location you want!"
                            onChange={handleChange}
                            value={searchInput} 
                        />
                        <button className={styles.btn}>search <span>&#8250;</span></button>
                    </div>
                    <p className={styles.partnership}>
                        Our Partnership 
                    </p>
                    <div className={styles.partners}>
                        <Image src='/imgs/traveloka_logo 2.png' width='83' height='18'/>
                        <Image src='/imgs/tiket_logo 5.png' width='83' height='23'/>
                        <Image src='/imgs/airbnb_logo 3.png' width='83' height='26'/>
                        <Image src='/imgs/tripadvisor_logo.png' width='83' height='15'/>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.redCorner}></div>
                <div className={styles.blueCorner}></div>
                <div className={styles.yellowCorner}></div>
                <div className={styles.statsScroll}>
                    <div className={styles.stats}>
                        {
                        stats.map((stat, index) =>(
                            <StatsCard 
                                key={index}
                                stat={stat}
                            />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}