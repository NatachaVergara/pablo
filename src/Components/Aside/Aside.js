import img from  './img/pp.jpg';
import styles from './Aside.module.scss'

const Aside = () => {
    return (
        <aside className={styles.aside} >
            <div className={`card ${styles.card}`}>
                <img src={img} className="card-img-top" alt="Licenciado Pablo Lopez" />
                <div className="card-body">
                    <h5 className="card-title" id="sobre-mi">Sobre mi</h5>
                    <p className="card-text">Soy psicologo psicoanalista hace 11 años. Mi práctica se centra en el análisis y la superación del padecimiento en adolescentes, jovenes y adultos.</p>
                </div>
                
            </div>
        </aside>
     );
}
 
export default Aside;