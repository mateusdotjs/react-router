import React from "react"
import styles from './About.module.css'

const About = () => {
    return (
        <div className={`container ${styles.about}`}>
            <h1 className={styles.title}>Você está na página About</h1>
        </div>
    )
}

export default About