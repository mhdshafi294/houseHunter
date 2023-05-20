import {useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HouseCard from './HouseCard'
import styles from '../styles/Section2.module.css'
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { MdVilla, MdApartment } from 'react-icons/md';
import { houseInfo, sectionTwoNavs } from '../constants/constants.js'

export default function Property(){
    const [scrolling, setScrolling] = useState(0);
    const [sectionNavs, setSectionNavs] = useState(sectionTwoNavs);
    const carouselRef = useRef();

    const navs = sectionNavs.map(item => (
        <Link key={item.type} href={item.link}>
            <li 
                className={item.active? styles.acvtiveNav : ''} 
                onClick={() => makeActive(item.type)}
                >
                    {item.type === 'House' && <BsFillHouseDoorFill />}
                    {item.type === 'Villa' && <MdVilla />}
                    {item.type === 'Apartment' && <MdApartment />}
                    {item.type}
            </li>
        </Link>
    ))

    const makeActive = (type) => {
        setSectionNavs(prev => {
            return prev.map(item => {
                return item.type === type ? {...item, active:!item.active} : {...item, active:false}
            })
        })
    }

    // let houseInfoFiltered = houseInfo.filter()

    const scroll = (node, left) => {
        return node.scrollTo({ left, behavior: 'smooth' });
    }

    const moveRight = (e) => {
        e.preventDefault();
        if (carouselRef.current) {
            const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * ((scrolling + 1) / houseInfo.length));
            scroll(carouselRef.current, scrollLeft);
        }
    }

    const moveLeft = (e) => {
        e.preventDefault();
        if (carouselRef.current) {
            const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * ((scrolling - 1) / houseInfo.length));
            scroll(carouselRef.current, scrollLeft);
        }
    }

    const handleScroll = () => {
        if (carouselRef.current) {
            const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * houseInfo.length);
    
            setScrolling(index);
        }
    }

    useEffect(() => {
        const handleResize = () => {
            if (carouselRef.current) {
                scroll(carouselRef.current, 0);
            }
        }
    
        window.addEventListener('resize', handleResize);
    }, []);

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
                    {navs}
                </div>
                <div className={styles.buttons}>
                    <button className={styles.arrowLeft} onClick={(e) => moveLeft(e)}><Image src="/../public/imgs/s2/eva_arrow-backward.png" width="28" height="28"/></button>
                    <button className={styles.arrowRight} onClick={(e) => moveRight(e)}><Image src="/../public/imgs/s2/eva_arrow-forward.png" width="28" height="28"/></button>
                </div>
            </div>
            <div className={styles.scrollContainer} ref={carouselRef} onScroll={handleScroll}>
                <div className={styles.houseCards}>
                    {houseInfo.map((house, index) => {
                        return (
                            <HouseCard
                                key={index}
                                house={house}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}