import React from 'react'
import psicoanalisis from '../../assets/img/psicoanalisisV.jpg'
import terapia from '../../assets/img/terapia.jpg'
import observable from '../../assets/img/observacionDeSi.jpg'

import styles from './Practica.module.scss'
const Psicoanalisis = () => {


  let imgs = [
    { id: 1, img: psicoanalisis, titulo: 'Psicoanálisis' },
    { id: 2, img: terapia, titulo: 'Terapia Análitica' },
    { id: 3, img: observable, titulo: 'Conocimiento de sí mismo' }

  ]

  return (
    <section className={`${styles.container}`} id='practica'>
      <h3>Práctica</h3>
      <div className={styles.cardContainer}>
        {imgs.map(card => (
          <div className={`card ${styles.card}`} key={card.id}>
            <img src={card.img} className="card-img-top" alt={card.titulo} />
            <div className="card-body">
              <h5 className="card-title">{card.titulo} </h5>
            </div>
          </div>
        ))}
      </div>
    </section>

  )
}

export default Psicoanalisis