import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsCard from './StatsCard'
import { stats } from '../constants/constants.js'

export default function Hero(){
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        };

    return(
        <div className='hero'>
            <div className='left'>
                <div className='content'>
                    <h2 className='title'>
                        find the place <br/> to live <span>your dreams</span> <br/> easily here
                    </h2>
                    <p className='description'>
                        Everything you need about finding your place to live will be here, where it will be easier for you
                    </p>
                    <div className='searchBar'>
                        <Image className='fluent' src="/../public/imgs/fluent_location-16-filled.png" width="24" height="24"/>
                        <input
                            type="text"
                            placeholder="Search for the location you want!"
                            onChange={handleChange}
                            value={searchInput} 
                        />
                        <button className='btn'>search <span>&#8250;</span></button>
                    </div>
                    <p className='partnership'>
                        Our Partnership 
                    </p>
                    <div className='partners'>
                        <Image src='/../public/imgs/traveloka_logo 2.png' width='83' height='18'/>
                        <Image src='/../public/imgs/tiket_logo 5.png' width='83' height='23'/>
                        <Image src='/../public/imgs/airbnb_logo 3.png' width='83' height='26'/>
                        <Image src='/../public/imgs/tripadvisor_logo.png' width='83' height='15'/>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='stats'>
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
    )
}