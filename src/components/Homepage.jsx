import React from 'react'
import styles from '../style.module.css'

function Homepage() {
    const title = "react basics"
    return (
        <div>
            <h1 style={{ textAlign: "center", fontSize: '70px', color: 'red' }}>{title}</h1>
            <hr />
            <label className='mb-5' htmlFor="username">username</label>
            <input className={styles.userNameInput} type="text" id='username' />
        </div>
    )
}

export default Homepage
