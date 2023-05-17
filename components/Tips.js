import Image from 'next/image'
import styles from '../styles/Tips.module.css'
import { tipsInfo } from '../constants/constants.js'

export default function Tips(){
    return(
        <section>
            <div className='divider'></div>
            <p className='section-title-small'>See tips and trick from our partnership</p>
            <h2 className='section-title-large'>Find out more about <br /> selling and buying homes</h2>
        </section>
    )
}