import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const styles = {
        container: {
            margin: '2rem auto',
            width: '50%',
        },  
        projectList: {
            fontSize: '1.5rem'
        }

    }
    return (
        <div style={styles.container}>
            <h1 style={{'font-size':'3rem'}}>Project List </h1>
            <div style={styles.projectList}>
                <ul>
                    <li><Link to="/Readmore">Readmore </Link></li>
                    <li><Link to="/Card">Card </Link></li>
                    <li><Link to="/Accordion">Accordion </Link></li>
                    <li> <Link to="/Menu">Menu </Link></li>
                    <li> <Link to="/Tab">Tab </Link></li>
                    <li> <Link to="/Slider">Slider </Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Home
