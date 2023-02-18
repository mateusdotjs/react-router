import React from 'react'
import styles from './Home.module.css'

const Home = () => {

    return (
        <div className={`container ${styles.home}`}>
            <h1 className={styles.title}>Você está na página Home</h1>
        </div>
    )
}

export default Home
