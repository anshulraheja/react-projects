// card with carousel functionality
import { useState } from "react";
import data from './data'
import styles from './card.module.css'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
export default function Card() {
    const [index , setIndex] = useState(0);
    const {name, job, image, text} = data[index];
    const length = data.length;
  
    const checkIndex = (index) =>{
        if(index>length-1){
            return 0
        }
        else if (index<0){
            return length-1;
        }
        else
            return index
    }

    const prevButton = () =>{
        setIndex((index)=>{
            let newIndex = index - 1;
            return checkIndex(newIndex)
        })
    }

    const nextButton = () =>{
        setIndex((index)=>{
            let newIndex = index + 1;
            return checkIndex(newIndex)
        })
    }

    const randomButton = () => {
        let randomNumber = Math.floor(Math.random() * length);
        if (randomNumber === index) {
          randomNumber = index + 1;
        }
        setIndex(checkIndex(randomNumber));
    }
    return (
        <article className={styles.container}>
            <div className={styles.imgContainer}>
            <img src={image} alt={name} className={styles.personImg}/>
            <span className={styles.quoteIcon}>
                <FaQuoteRight />
            </span>
            </div>
            <h4 className={styles.author}>{name}</h4>
            <p className={styles.job}>{job}</p>
            <p className={styles.info}>{text}</p>
            <div className={styles.buttonContainer}>
            <button className={styles.prevBtn} onClick={prevButton}>
                <FaChevronLeft />
            </button>
            <button className={styles.nextBtn} onClick={nextButton}>
                <FaChevronRight />
            </button>
            </div>
            <button className={styles.randomBtn} onClick={randomButton}>
            surprise me
            </button>
      </article>
  );
}
