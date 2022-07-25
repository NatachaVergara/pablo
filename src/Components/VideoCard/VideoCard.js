import React from 'react'

const VideoCard = ({ styles, name, mp4, ogg, title, subTitle, texto, ul }) => {


    return (
        <>
            <div className={styles.videoContainer}>
                <div className={styles.title}>
                    <h3>{title} </h3>
                    <p> {subTitle} </p>

                </div>
                <div className={styles.video}>
                    <video width="320" height="240" controls>
                        <source src={mp4} type="video/mp4" />
                        <source src={ogg} type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className={styles.texto}>
                <p> {texto}
                </p>
                <ul>
                    {ul.map(li => <li> {li} </li>)}
                </ul>
            </div>
            <div className={`${styles.divider}`}>
                <span>--------------------------------------------------</span>
            </div>

        </>
    )
}

export default VideoCard