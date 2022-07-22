import styles from './Footer.module.scss'
const Footer = () => {
    return (
        <footer className={styles.footer}>

            <section id='contacto' className={`${styles.contacto}`} >
                <h3>Consultas</h3>

                <div className={`${styles.iconosContacto} container`}>


                    <div id='facebook' className={`${styles.iconos}`}>
                        <div className={`${styles.icono} ${styles.icono1}`}></div>
                        <div>
                            <span>Facebook</span>
                            <p>www.facebook.com</p>
                        </div>
                    </div>



                    <div id='email' className={`${styles.iconos}`}>
                        <div className={`${styles.icono}  ${styles.icono2}`}></div>
                        <div>
                            <span>Email</span>
                            <p>mail@info.com</p>
                        </div>
                    </div>


                    <div id='whatsapp' className={`${styles.iconos}`}>
                        <div className={`${styles.icono}  ${styles.icono3}`}></div>
                        <div>
                            <span>Whatsup</span>
                            <p>1124182986</p>
                        </div>
                    </div>



                </div>






            </section>
            <section id='pie' className={`${styles.pie}`} >
                <p> {new Date().getFullYear()}- Lic. Pablo Lopez </p>
            </section>




        </footer>
    );
}

export default Footer;