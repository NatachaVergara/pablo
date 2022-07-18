import styles from './Footer.module.scss'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p> {new Date().getFullYear()}- Pablo Lopez </p>
        </footer>
    );
}

export default Footer;