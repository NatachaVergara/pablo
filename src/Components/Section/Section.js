import Aside from "../Aside";
import styles from "./Section.module.scss";

const Section = () => {
  return (
    <div id="container" className={styles.container}>
      <Aside />
      <section className="d-flex flex-column justify-content-between">
        <div className={`parrafos ${styles.parrafos}`} >
          <h3 className="text-center" id="sobre-mi">Sobre mi</h3>
          <br />
          <p className={`${styles.sobreMi} ${styles.letra}`}>
            Soy psicologo psicoanalista hace 11 años. Mi práctica se centra en el análisis y la superación del padecimiento en adolescentes, jovenes y adultos.
          </p>
          <p className={styles.sobreMi}>
            Concibo la terapia como un camino de
            <strong> autoconocimiento y registro de sí </strong>. <br></br> La idea es
            que el paciente conforme un espacio donde pueda sentirse libre y
            cómodo de hablar de lo que sienta con vistas a abordar esos
            temas desde una perspectiva donde el problema surja de forma
            natural. Luego, hacerlo consciente y visible a partir del habla
            y comenzar a trabajarlo. Ésto último supone una decisión.{" "}
          </p>
          <p className={styles.sobreMi}>
            Creo firmemente que, al decidir trabajar sobre nuestros
            problemas, es la manera correcta de comenzar a resolverlos.
          </p>
          <h5 className="text-center">
            <i>
              "Las emociones inexpresadas nunca mueren. Son enterradas vivas y
              salen más tarde de peores formas."
            </i>{" "}
            Sigmund Freud
          </h5>
        </div>
      </section>

    </div >
  );
};

export default Section;
