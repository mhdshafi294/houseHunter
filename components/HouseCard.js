import Image from "next/image";
import styles from '../styles/HouseCard.module.css'

export default function HouseCard({house}){
    return(
        <div className={styles.houseCard}>
            <div className={styles.price}>{house.price}</div>
        </div>
    )
}