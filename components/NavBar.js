import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Reviews(){
    const [signedIn, setSignedIn] = useState(false);

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
                    <Link  href='/property'><li>Property <span>&#8250;</span> </li></Link>
                </div>
                {!signedIn && <Link href='/signUp' className='signUp'><li>Sign Up!</li></Link>}
            </ul>
        </div>
    )
}