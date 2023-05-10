import React from 'react';
import Link from 'next/link';
import styles from '../styles/button.module.css'

export default function ButtonGreen(props){

    return(
        <div className={styles.buttonGreen}>
            {props.value}
        </div>
    )
}