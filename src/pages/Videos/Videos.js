import React, { useState } from 'react'
import styles from './Videos.module.scss'
import { videos } from '../../assets/videos/videos'
import VideoCard from '../../Components/VideoCard/VideoCard'

const Videos = () => {
    const [vids, setVids] = useState(videos)

    const onSearch = (id) => {
        let video = vids.filter(v => v.id === id)
        id === '' ? setVids(videos) : setVids(video)
    }


    return (
        <main className={styles.container}>
            <div className={`dropdown ${styles.search}`}>
                <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    🔎 Temas
                </button>
                <ul className="dropdown-menu">
                    <li onClick={() => onSearch('')}  >Todo</li>
                    {vids.map(value => (<li key={value.id} onClick={() => onSearch(value.id)}>{value.tema}</li>))}
                </ul>
            </div >

            {
                vids.map(video =>
                (
                    <VideoCard
                        styles={styles}
                        name={video.tema}
                        mp4={video.mp4}
                        ogg={video.ogg}
                        title={video.title}
                        subTitle={video.subTitle}
                        texto={video.texto}
                        ul={video.ul}
                        key={video.id}
                    />
                ))
            }
        </main >
    )
}

export default Videos