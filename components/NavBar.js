import React, {useState, useEffect} from 'react';
import Link from 'next/link';

export default function Reviews(){

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
                    <Link legacyBehavior href='/about'><a><li>About</li></a></Link>
                    <Link legacyBehavior href='/article'><a><li>Article</li></a></Link>
                    <Link legacyBehavior href='/property'><a><li>Property</li></a></Link>
                </div>
                <Link legacyBehavior href='/signUp' className='signUp'><a><li>Sign Up</li></a></Link>
            </ul>
        </div>
    )
}