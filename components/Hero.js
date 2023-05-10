import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero(){
    return(
        <div className='hero'>
            <div className='left'>
                <div className='content'>
                    <h2 className='title'>
                    find the place <br/> to live <span>your dreams</span> <br/> easily here
                    </h2>
                    <p className='description'>

                    </p>
                    <div className='searchBar'>

                    </div>
                    <p className='partnership'>

                    </p>
                    <div className='partners'>

                    </div>
                </div>
            </div>
            <div className='right'>

            </div>
        </div>
    )
}