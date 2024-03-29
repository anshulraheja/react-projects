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
                    <li><Link to="/Crypto">Crypto Price Tracker </Link></li>
                    <li><Link to="/Counter">Counter</Link></li>
                    <li><Link to="/FetchData">Fetch Data</Link></li>
                    <li><Link to="/FetchData2">Ben Ward Interview-Fetch Data</Link></li>
                    <li><Link to="/MainPage">Change Theme - Context API</Link></li>
                    <li><Link to="/StopWatch">Stop Watch</Link></li>
                    <li><a href="https://demo-store-app.netlify.app/">Demo Store App</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Home
