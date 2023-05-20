import Image from 'next/image'
import styles from '../styles/Footer.module.css'
import { ImFacebook } from 'react-icons/im';
import { AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai';

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.hounter}>
                <p className={styles.hounterText}>We provide information about properties such as houses, villas and apartments to help people find their dream home</p>
                <div className={styles.social}>
                    <ImFacebook />
                    <AiOutlineTwitter />
                    <AiFillInstagram />
                </div>
            </div>
            <div className={styles.other}>
                <div className={styles.property}>
                    <ul>
                        <li>House</li>
                        <li>Apartment</li>
                        <li>Villa</li>
                    </ul>
                </div>
                <div className={styles.article}>
                    <ul>
                        <li>New Article</li>
                        <li>Popular Article</li>
                        <li>Most Read</li>
                        <li>Tips & Tricks</li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <ul>
                        <li>2464 Royal Ln. Mesa, New Jersey 45463</li>
                        <li>{`(671) 555-0110`}</li>
                        <li>info@hounter.com</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}