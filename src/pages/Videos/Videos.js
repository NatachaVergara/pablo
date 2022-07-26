import React, { useState } from 'react'
import styles from './Videos.module.scss'
import { videos } from '../../assets/videos/videos'
import VideoCard from '../../Components/VideoCard/VideoCard'

const Videos = () => {
    const [vids, setVids] = useState(videos)
    const [value, setValue] = useState('')


    // const onSearch = () => {
    //     let video = vids.filter(v => v.name === value)

    //     if (value === '')
    //         setVids(videos)
    //     else {
    //         setVids(video)
    //     }

    // }
   

    return (
        <main className={styles.container}>
            <div className={`btn-group ${styles.search}`}>
                <select className="form-select" aria-label="Default select example">
                    <option value='' onChange={(e) => setValue(e.target.value)} >🔎 Temas</option>
                    <option value='ANSIEDAD' onChange={(e) => setValue(e.target.value)} >Ansiedad</option>
                    <option value='DEPRESION' onChange={(e) => setValue(e.target.value)}>Depresión</option>
                    <option value='ADICCIONES' onChange={(e) => setValue(e.target.value)}>Adicciones</option>
                    <option value='TRASTORNOS ALIMENTICIOS' onChange={(e) => setValue(e.target.value)} >Trastornos Alimenticios</option>
                </select>
            </div >

            {
                vids.map(video =>
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
                        key={video.id}
                    />
                ))
            }
        </main >
    )
}

export default Videos