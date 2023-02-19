import React from "react"
import { NavLink } from 'react-router-dom'
import styles from './About.module.css'

const About = () => {
    return (
        <div className={`container ${styles.about}`}>
            <h1 className={styles.title}>Você está na página About</h1>
            <NavLink to="/about/projects" className={styles.linkButton}>Ir para a página de projetos</NavLink>
        </div>

    )
}

export default About