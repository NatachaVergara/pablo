import React from 'react'
import styles from './Videos.module.scss'


const Videos = () => {
    return (
        <main className={styles.container}>

            <div className={styles.videoContainer}>
                <div>
                    <h3>Crisis de ansiedad</h3>
                    <h5> Ansiedad es una sensación de miedo indefinido, sin saber de qué. Es una reacción normal ante cualquier contingencia vaga que provoca inseguridad </h5>

                </div>


                <video width="320" height="240" controls>
                    <source src="movie.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                    Your browser does not support the video tag.
                </video>


            </div>


        </main>
    )
}

export default Videos