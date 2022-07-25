import React from 'react'
import psicoanalisis from '../../assets/img/psicoanalisisV.jpg'
import terapia from '../../assets/img/terapia.jpg'
import observable from '../../assets/img/observacionDeSi.jpg'

import styles from './Practicas.module.scss'
import { Link } from 'react-router-dom'
const Practicas = () => {


  let imgs = [
    { id: 1, img: psicoanalisis, titulo: 'Psicoanálisis' },
    { id: 2, img: terapia, titulo: 'Terapia Análitica' },
    { id: 3, img: observable, titulo: 'Conocimiento de sí mismo' }

  ]

  return (
    <section className={`${styles.container}`}>
      <h3>Práctica</h3>
      <div className={styles.cardContainer}>  
       {imgs.map(card => (
        <Link className={`card ${styles.card}`} key={card.id} to='/practica'>
          <img src={card.img} className="card-img-top" alt={card.titulo} />
          <div className="card-body">
            <h5 className="card-title">{card.titulo} </h5>
          </div>
        </Link>
      ))}</div>


    </section>

  )
}

export default Practicas