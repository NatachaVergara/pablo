/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'

const Header = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 500) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);



    return (

        <header>
            <nav className={colorChange ? `navbar navbar-expand-md ${styles.navBardColor}` : `navbar navbar-expand-md ${styles.navbar}`}>
                <div className="container-fluid ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={`navbar-toggler-icon ${styles.navbarTogglerIcon}`}></span>
                    </button>
                    <div className={`collapse navbar-collapse`} id="navbarNav">
                        <ul className={`navbar-nav  ${styles.nav}`}>
                            <li className="nav-item">
                                <Link className={`nav-link active ${styles.navLink} `} aria-current="page" to={'/'}>inicio</Link>
                            </li>                          
                            <li className="nav-item">
                                <Link className={`nav-link active ${styles.navLink} `} to='/practica'>Práctica</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link active ${styles.navLink} `} to="/videos">Videos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;