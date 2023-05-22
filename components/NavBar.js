import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Reviews(){
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
        <div className='navBar'>
            <div className='logo'>
                <div className='logoPaint'>
                    <div className='logoPaintOrange'></div>
                    <div className='logoPaintGreen'></div>
                </div>
                <p className='logoText'>Hounter</p>
            </div>
            <ul className='nav'>
                <div className='navs'>
                    <Link  href='/about'><li>About</li></Link>
                    <Link  href='/article'><li>Article</li></Link>
                    <button className={isClassActive ? 'active' : ''} onClick={toggleClass}><li>Property <span>&#8250;</span> </li></button>
                    <div className={`${isClassActive ? "menu active" : "menu"}`}>
                        <ul className='propertyMenu'>
                            <Link  href='/house'><li>House</li></Link>
                            <Link  href='/villa'><li>Villa</li></Link>
                            <Link  href='/apartment'><li >Apartment</li></Link>
                        </ul>
                    </div>
                </div>
                {!signedIn && <Link href='/signUp' className='signUp' onClick={(e)=>handleSign(e)}><li>Sign Up!</li></Link>}
                {signedIn && <Link href='/signOut' className='signOut' onClick={(e)=>handleSign(e)}><li>Sign Out!</li></Link>}
            </ul>
        </div>
    )
}