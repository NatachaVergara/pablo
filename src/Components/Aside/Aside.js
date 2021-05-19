import img from  './img/pp.jpg';
import './Aside.css'

const Aside = () => {
    return (
        <aside>
            <div className="card">
                <img src={img} className="card-img-top" alt="Licenciado Pablo Lopez" />
                <div className="card-body">
                    <h5 className="card-title" id="sobre-mi">Sobre mi</h5>
                    <p className="card-text">Soy psicologo psicoanalista hace 11 años. Mi práctica se centra en el análisis y la superación del padecimiento en adolescentes, jovenes y adultos.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">👉 Psicoanálisis</li>
                    <li className="list-group-item">⚡ Terapia analítica</li>
                    <li className="list-group-item">⛩ Conocimiento de sí mismo</li>
                </ul>
            </div>
        </aside>
     );
}
 
export default Aside;