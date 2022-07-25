import img from './img/pp.jpg';
import styles from './Aside.module.scss'

const Aside = () => {
  return (
    <aside className={styles.aside} >
      <div className={`card border-0 mt-5 ${styles.card}`}>
        <img src={img} className="card-img-top rounded-0" alt="Licenciado Pablo Lopez"/>
      </div>
    </aside>
  );
}

export default Aside;