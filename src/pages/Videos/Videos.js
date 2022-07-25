import React from 'react'
import styles from './Videos.module.scss'
import { videos } from '../../assets/videos/videos'
import VideoCard from '../../Components/VideoCard/VideoCard'

const Videos = () => {



    return (
        <main className={styles.container}>
            <div className={`btn-group ${styles.search}`}>
                <span type="button" className="btn btn-danger">🔎 Temas</span>
                <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu P-1">
                    <li>Ansiedad</li>
                    <li>Depresión</li>
                    <li>Adicciones</li>
                    <li>Trastornos Alimenticios</li >
                </ul >
            </div >

            {
                videos.map(video =>
                (
                    <VideoCard
                        styles={styles}
                        name={video.name}
                        mp4={video.mp4}
                        ogg={video.ogg}
                        title={video.title}
                        subTitle={video.subTitle}
                        texto={video.texto}
                        ul={video.ul}
                    />
                ))
            }
        </main >
    )
}

export default Videos