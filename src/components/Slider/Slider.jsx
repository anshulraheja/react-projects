import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import slideData from './slideData.js'
import {FiChevronLeft , FiChevronRight}  from 'react-icons/fi';
import styles from './slider.module.css';

const Slider = () => {
    const [index, setIndex] = useState(0);
    const [data, setData]= useState(slideData);

    useEffect(() => {
        const lastIndex = data.length - 1;
        if (index < 0) {
          setIndex(lastIndex);
        }
        if (index > lastIndex) {
          setIndex(0);
        }
    }, [index, data]);
    
    //auto slider 
    // useEffect(() => {
    //     let slider = setInterval(() => {
    //       setIndex(index + 1);
    //     }, 5000);
    //     return () => {
    //       clearInterval(slider);
    //     };
    // }, [index]);

    return (

        <section className={styles.mainSection}>
            <div className={styles.title}>
                <h2>Slider Functionality</h2>
            </div>
            <div className={styles.dataSection}>
                {data.map((item, itemIndex)=>{
                    const {id, name, job, image, text} = item;

                    let position = 'nextSlide';
                    if (itemIndex === index) {
                        position = 'activeSlide';
                    }
                    if (
                        itemIndex === index - 1 ||
                        (index === 0 && itemIndex === data.length - 1)
                    ) {
                        position = 'lastSlide';
                    }
                    var newPosition = `styles.${position}`
                    // console.log(typeof newPosition);
                    // console.log(typeof styles.mainSection)
                    return(
                        <article className={newPosition} key={id}>
                            <img src={image} alt={name} className={styles.img} />
                            <h4>{name}</h4>
                            <p>{job}</p>
                            <p className={styles.text}>{text}</p>
                        </article>
                    )
                })}
                <button className={styles.prev} onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                </button>
                <button className={styles.next} onClick={() => setIndex(index + 1)}>
                   <FiChevronRight />
                </button>
            </div>
        </section>
    )
}

export default Slider
