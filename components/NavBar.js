import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css'
import Image from 'next/image';

export default function NavBar(){
    const [signedIn, setSignedIn] = useState(false);
    const [isClassActive, setIsClassActive] = useState(false);

    // Function to toggle class
    const toggleClass = () => {
        setIsClassActive(prev => !prev)
    }

    const handleSign = (e) => {
        e.preventDefault();
        setSignedIn(prev => !prev)
    }

    return(
        <div className={styles.navBar}>
            <div className='logo'>
                <div className='logoPaint'>
                    <div className='logoPaintOrange'></div>
                    <div className='logoPaintGreen'></div>
                </div>
                <p className='logoText'>Hounter</p>
            </div>
            <ul className={styles.nav}>
                <div className={styles.navs}>
                    <Link  href='/about'><li>About</li></Link>
                    <Link  href='/article'><li>Article</li></Link>
                    <button className={isClassActive ? styles.active : ''} onClick={toggleClass}><li>Property <span>&#8250;</span> </li></button>
                    <div className={`${isClassActive ? `${styles.menu} ${styles.active}` : styles.menu}`}>
                        <ul className={styles.propertyMenu}>
                            <Link  href='/house'><li>House</li></Link>
                            <Link  href='/villa'><li>Villa</li></Link>
                            <Link  href='/apartment'><li >Apartment</li></Link>
                        </ul>
                    </div>
                </div>
                {!signedIn && <Link href='/signUp' className={styles.signUp} onClick={(e)=>handleSign(e)}><li>Sign Up!</li></Link>}
                {signedIn && <Link href='/signOut' className={styles.signOut} onClick={(e)=>handleSign(e)}><li>Sign Out!</li></Link>}
            </ul>
        </div>
    )
}