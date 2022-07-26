import img from './img/pp.jpg';
import styles from './Aside.module.scss'

const Aside = () => {
  return (
    
      <div className={`card border-0  ${styles.card}`} id='sobreMi'>
        <img src={img} className="card-img-top" alt="Licenciado Pablo Lopez"/>
      </div>
   
  );
}

export default Aside;