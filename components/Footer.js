import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Footer.module.css'
import { ImFacebook } from 'react-icons/im';
import { AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai';

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.hounter}>
                <div className='logo'>
                    <div className='logoPaint'>
                        <div className='logoPaintOrange'></div>
                        <div className='logoPaintGreen'></div>
                    </div>
                    <p className='logoText'>Hounter</p>
                </div>
                <p className={styles.hounterText}>We provide information about properties such as houses, villas and apartments to help people find their dream home</p>
                <div className={styles.social}>
                    <Link  href='https://www.facebook.com/' className={styles.facebook}><ImFacebook /></Link>
                    <Link  href='https://twitter.com/' className={styles.twitter}><AiOutlineTwitter /></Link>
                    <Link  href='https://www.instagram.com/' className={styles.instagram}><AiFillInstagram /></Link>
                </div>
            </div>
            <div className={styles.other}>
                <div className={styles.property}>
                    <h6>Property</h6>
                    <ul>
                        <Link  href='/house'><li>House</li></Link>
                        <Link  href='/apartment'><li>Apartment</li></Link>
                        <Link  href='/villa'><li>Villa</li></Link>
                    </ul>
                </div>
                <div className={styles.article}>
                    <h6>Article</h6>
                    <ul>
                        <Link  href='/newArticle'><li>New Article</li></Link>
                        <Link  href='/popularArticle'><li>Popular Article</li></Link>
                        <Link  href='/mostRead'><li>Most Read</li></Link>
                        <Link  href='/tips&Tricks'><li>Tips & Tricks</li></Link>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <h6>Contact</h6>
                    <ul>
                        <li>2464 Royal Ln. Mesa, New Jersey 45463</li>
                        <Link  href="tel:+963-394-204-793"><li>{`(671) 555-0110`}</li></Link>
                        <Link  href="mailto:mhd.shafi2.n@gmail.com"><li>info@hounter.com</li></Link>
                    </ul>
                </div>
            </div>
        </footer>
    )
}