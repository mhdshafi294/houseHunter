import { useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Subscribe.module.css'
import { MdEmail } from 'react-icons/md';


export default function Subscribe() {
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    return (
        <section className={styles.subscribe}>
            <div className={styles.subscribeTextContainer}>
                <h3 className={styles.subscribeTitle}>Subscribe For More Info <br /> and update from Hounter</h3>
                <div className={styles.subscribeBar}>
                    <MdEmail className={styles.icon} />
                    <input
                        type="text"
                        placeholder="Your email here"
                        onChange={handleChange}
                        value={email}
                    />
                    <button className={styles.btn}>Subsribe Now</button>
                </div>
            </div>
            <Image className={styles.img1} src="/../public/imgs/Rect12.png" width="81" height="81" />
            <Image className={styles.img2} src="/../public/imgs/ellipse6.png" width="36" height="36" />
            <Image className={styles.img3} src="/../public/imgs/ellipse9.jpg" width="36" height="36" />
            <Image className={styles.img4} src="/../public/imgs/Rect25.png" width="54" height="54" />
            <Image className={styles.img5} src="/../public/imgs/Rect26.png" width="70" height="70" />
            <Image className={styles.img6} src="/../public/imgs/ellipse6_1.png" width="36" height="36" />
            <Image className={styles.img7} src="/../public/imgs/ellipse9_1.png" width="36" height="36" />
            <Image className={styles.img8} src="/../public/imgs/Rect27.png" width="55" height="55" />
        </section>
    )
}