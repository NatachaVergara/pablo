import React from 'react'
import psicoanalisis from './img/psicoanalisisV.jpg'
import terapia from './img/terapia.jpg'
import observable from './img/observacionDeSi.jpg'

import styles from './Cards.module.scss'
const Psicoanalisis = () => {


  let imgs = [
    { id: 1, img: psicoanalisis, titulo: 'Psicoanálisis' },
    { id: 2, img: terapia, titulo: 'Terapia Análitica' },
    { id: 3, img: observable, titulo: 'Conocimiento de sí mismo' }

  ]

  return (
    <section className={`${styles.container}`}>
      {imgs.map(card => (
        <div className={`card ${styles.card}`} key={card.id}>
          <img src={card.img} className="card-img-top" alt={card.titulo} />
          <div className="card-body">
            <h5 className="card-title">{card.titulo} </h5>
          </div>
        </div>
      ))}

    </section>

  )
}

export default Psicoanalisis