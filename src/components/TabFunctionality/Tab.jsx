import React ,{useState, useEffect} from 'react'
import { FaAngleDown } from 'react-icons/fa';
import styles  from './tab.module.css'

const url = 'https://course-api.com/react-tabs-project';

const Tab = () => {
    const [loading, setLoading]= useState(true);
    const [data, setData]= useState([]);
    const [value, setValue]= useState(0);

    const fetchData = async () => {
        const response = await fetch(url);
        const newData = await response.json();
        setData(newData);
        setLoading(false);
    }

    useEffect(() =>{
        fetchData()
    },[]);

    if(loading){
        return(
            <section className={styles.loadingSection}>
                <h1>Loading...</h1>
            </section>
        )
    }

    const {company, dates, duties, title} = data[value];

    return (
        <section className={styles.mainSection}>
            <div className ={styles.title}>
                <h2>Experience</h2>
            </div>
            <div className = {styles.dataContainer}>
                {/* button container */}
                <div className = {styles.btnContainer}>
                    {data.map((item, index)=>{
                        return(
                            <button
                            key={item.id}
                            onClick={()=>setValue(index)}
                            className={`styles.btn ${index ===value && 'activeBtn'}`}>{item.company}</button>
                        )
                    })}
                </div>
                {/* info */}
                <div className = {styles.infoContainer}>
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className = {styles.date}>{dates}</p>
                    {duties.map((duty, index)=>{
                        return(
                            <div key={index} className={styles.description}>
                                <FaAngleDown className={styles.icon}/>
                                <p>{duty}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}


export default Tab
