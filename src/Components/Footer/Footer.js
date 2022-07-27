import styles from './Footer.module.scss'
const Footer = () => {
    return (
        <footer className={styles.footer}>

            <section id='contacto' className={`${styles.contacto}`} >
                <h3>Consultas</h3>

                <div className={`${styles.iconosContacto} container`}>


                    <div id='facebook' className={`${styles.iconos}`}>
                        <div className={`${styles.icono} ${styles.icono1}`}></div>
                        <a href='https://www.facebook.com' target='_blank' rel="noreferrer">
                            <p>www.facebook.com</p>
                        </a>
                    </div>



                    <div id='email' className={`${styles.iconos}`}>
                        <div className={`${styles.icono}  ${styles.icono2}`}></div>
                        <a href = "mailto:prueba@gmail.com" target='_blank' rel="noreferrer">
                            <p>mail@info.com</p>
                        </a>
                    </div>


                    <div id='whatsapp' className={`${styles.iconos}`}>
                        <div className={`${styles.icono}  ${styles.icono3}`}></div>
                        <a href="https://api.whatsapp.com/send?phone=0000000000&text=Hola Pablo, te contacto desde su sitio web." alt='logo-whatsup'
                            target="_blank" rel="noreferrer">
                            <p>1124182986</p>
                        </a>
                    </div>



                </div>






            </section>
            <section id='pie' className={`${styles.pie}`} >
                <p> {new Date().getFullYear()} - Pablo Lopez </p>
            </section>




        </footer>
    );
}

export default Footer;