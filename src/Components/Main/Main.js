import styles from './Main.module.scss'

const Main = () => {
  return (
    <main className={styles.main}>
      <p id={styles.cita}>
        <h1 id="bienvenida" className='text-center'>Pablo Lopez - Terapia analítica</h1>
        <br />

        <i> (...) Le debo al psicoanálisis entender la vida como un desafío el que uno no puede sentirse víctima; en definitiva, el psicoanálisis me ha enseñado que uno debe entregarse durante toda una vida a una tarea imposible: aceptar las consecuencias imprevisibles de lo que uno elige.</i></p>
    </main>
  );
}

export default Main;