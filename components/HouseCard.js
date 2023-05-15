import Image from "next/image";
import styles from '../styles/HouseCard.module.css'

export default function HouseCard({house}){
    let badgeBackGround = '';
    let badgeColor = '';
    if(house.badge === 'Popular'){
        badgeBackGround = '#FEE2E2';
        badgeColor = '#EF4444';
    } else if(house.badge === 'New House'){
        badgeBackGround = '#DBEAFE';
        badgeColor = '#1D4ED8';
    } else if(house.badge === 'Best Deals'){
        badgeBackGround = '#D1FAE5';
        badgeColor = '#047857';
    }
    
    const badgeStyles = {
        position: 'absolute',
        left: '16px',
        top: '332px',
        borderRadius: '32px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: '8px 16px',
        gap: '10px',
        backgroundColor: badgeBackGround,
        color: badgeColor,
    }

    return(
        <div className={styles.houseCard}>
            <div className={styles.badge} style={badgeStyles}>{house.badge}</div>
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