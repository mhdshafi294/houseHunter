import Image from "next/image";
import styles from '../styles/HouseCard.module.css'

export default function HouseCard({house}){
    return(
        <div className={styles.houseCard}>
            <div className={styles.badge}>{house.badge}</div>
            <Image src={house.image} className={styles.houseImage} width='340' height='382'/>
            <p className={styles.name}>{house.name}</p>
            <p className={styles.price}>$ {house.price}</p>
            <div className={styles.owner}>
                <Image src={house.ownerImage} className={styles.ownerImage} width='40' height='40'/>
                <div className={styles.nameAndLocation}>
                    <p className={styles.ownerName}>{house.ownerName}</p>
                    <p className={styles.location}>{house.location}</p>
                </div>
            </div>
        </div>
    )
}