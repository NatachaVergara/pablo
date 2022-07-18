import styles from './Header.module.scss'

const Header = () => {
    return (
     
            <header>
                <nav className={`navbar navbar-expand-lg ${styles.navbar} `}>
                    <a className={`navbar-brand ${styles.navbarBrand}`} href="index.html">Lic. Pablo Lopez</a> 
                    <button className={`navbar-toggler collapsed ${styles.navbarToggler}`} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav justify-content-end me-3" id="ul-nav">
                            <li className="nav-item active">
                                <a className={`nav-link ${styles.navLinks}`} href="#bienvenida" id="l-bienvenida"> Terapia </a>
                            </li>
                            <li className="nav-item active">
                                <a className={`nav-link ${styles.navLinks}`} href="#sobre-mi" id="l-servicios">Sobre mi</a>
                            </li>
                            <li className="nav-item active">
                                <a className={`nav-link ${styles.navLinks}`} href="#contacto" id="l-contacto">Consulta</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
    );
}
 
export default Header;