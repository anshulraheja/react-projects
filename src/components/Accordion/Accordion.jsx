import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import styles from'./accorDion.module.css'
const Accordion = () => {
    const [showInfo, setShowInfo] =useState(false);

    const handleClick = () =>{
        setShowInfo(!showInfo);
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Accordian functionality</h1>
            <div className={`${styles.accordionContainer} ${ showInfo ? styles.active: null}`}>
                <h2>Section 1</h2>
                {showInfo ? <AiOutlineUp className ={styles.arrow} size={30} onClick={handleClick} /> : <AiOutlineDown className ={styles.arrow} size={30} onClick={handleClick}/>}
            </div>
            {showInfo && <p className={styles.hiddenData}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate est aut</p>}

        </div>
    )
}

export default Accordion
