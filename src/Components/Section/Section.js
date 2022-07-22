import Aside from "../Aside";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Section.module.scss";

const Section = () => {
  return (
    <Container id="container" className={styles.container}>
      <Row>
        <Col>
          <h1 id="bienvenida" >Pablo Lopez - Terapia analítica</h1>
          <h4>
            <i>
              "Las emociones inexpresadas nunca mueren. Son enterradas vivas y
              salen más tarde de peores formas."
            </i>{" "}
            - Sigmund Freud -
          </h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <section className="d-flex flex-column justify-content-between">
            <div className={`parrafos ${styles.parrafos}`} >
              <p className={styles.sobreMi}>
                Concibo la terapia como un camino de
                <strong> autoconocimiento y registro de sí </strong>. La idea es
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
            </div>

       
          </section>
        </Col>
        <Col xs={12} md={6}>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
