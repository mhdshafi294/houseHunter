import {useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HouseCard from './HouseCard'
import styles from '../styles/Property.module.css'
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { MdVilla, MdApartment } from 'react-icons/md';
import { houseInfo, propertyNavs } from '../constants/constants.js'

export default function Property(){
    const [scrolling, setScrolling] = useState(0);
    const [sectionNavs, setSectionNavs] = useState(propertyNavs);
    const carouselRef = useRef();

    let houseInfoFiltered = filterProperties(houseInfo, sectionNavs)

    function filterProperties(properties, sectionNavs){
        let sectionNavsFiltered = sectionNavs.filter(nav => nav.active);
        let sectionNavsFilters = sectionNavsFiltered.map(nav => nav.type);
        let filteredProperties = properties.filter(property => sectionNavsFilters.includes(property.type))
        filteredProperties = filteredProperties.length ? filteredProperties : properties;
        return filteredProperties;
    }

    const navs = sectionNavs.map(item => (
        <button key={item.type}
                className={item.active? styles.acvtiveNav : ''} 
                onClick={() => makeActive(item.type)}
        >
            <li>
                    {item.type === 'House' && <BsFillHouseDoorFill />}
                    {item.type === 'Villa' && <MdVilla />}
                    {item.type === 'Apartment' && <MdApartment />}
                    {item.type}
            </li>
        </button>
    ))

    const makeActive = (type) => {
        setSectionNavs(prev => {
            return prev.map(item => {
                return item.type === type ? {...item, active:!item.active} : {...item}
            })
        })
    }

    const scroll = (node, left) => {
        return node.scrollTo({ left, behavior: 'smooth' });
    }

    const moveRight = (e) => {
        e.preventDefault();
        if (carouselRef.current) {
            const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * ((scrolling + 1) / houseInfoFiltered.length));
            scroll(carouselRef.current, scrollLeft);
        }
    }

    const moveLeft = (e) => {
        e.preventDefault();
        if (carouselRef.current) {
            const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * ((scrolling - 1) / houseInfoFiltered.length));
            scroll(carouselRef.current, scrollLeft);
        }
    }

    const handleScroll = () => {
        if (carouselRef.current) {
            const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * houseInfoFiltered.length);
    
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
                    {houseInfoFiltered.map((house, index) => {
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