import React from 'react'
import styles from './Practica.module.scss'

import img1 from '../../assets/img/psicoanalisisV.jpg'
import img2 from '../../assets/img/terapia.jpg'
import img3 from '../../assets/img/observacionDeSi.jpg'
import Card from '../../Components/Card/Card'

const Practica = () => {

  let info = [

    { id: 1, title: 'Psicoanálisis', img: img1, texto: 'Lorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit amet' },
    { id: 2, title: 'Terapia Analítica', img: img2, texto: 'Lorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit amet' },
    { id: 3, title: 'Conocimiento de sí mismo', img: img3, texto: 'Lorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit amet' },



  ]

  return (
    <main className={styles.container}>
      <div className={styles.banner}></div>
      <div className={styles.sectionContainer}>
        {info.map(i => (

          <Card
            key={i.id}
            id={i.id}
            img={i.img}
            title={i.title}
            texto={i.texto}
            style={styles.divContainer}
          />


        ))}


      </div>

    </main>
  )
}

export default Practica