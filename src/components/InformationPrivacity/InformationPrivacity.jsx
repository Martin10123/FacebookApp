import styles from "./information.module.css";

export const InformationPrivacity = () => {
  return (
    <section className={styles.info__container}>
      <div className={styles.info__box}>
        <h2 className={styles.info__title_h2}>Información</h2>
        <p className={styles.info__title_p}>
          Esta pagina la hice para practicar mis habilidades de react, me
          parecio buena practica intentar ver que tanto podia replicar de las
          funcionalidades de Facebook, asi que lo intente. Esta pagina esta echa
          con:
        </p>
        <ul className={styles.info__list_ul}>
          <li className={styles.info__li}>
            <i className="fa-brands fa-react"></i>
            <p>React</p>
          </li>
          <li className={styles.info__li}>
            <i className="fa-solid fa-network-wired"></i>
            <p>Context</p>
          </li>
          <li className={styles.info__li}>
            <i className="fa-solid fa-database"></i>
            <p>Firebase</p>
          </li>
          <li className={styles.info__li}>
            <i className="fa-brands fa-git"></i>
            <p>Git como manejador de versión</p>
          </li>
          <li className={styles.info__li}>
            <i className="fa-brands fa-github"></i>
            <p>
              Para alojar proyectos utilizando el sistema de control de
              versiones Git.
            </p>
          </li>
        </ul>
        <p className={styles.info__other_info}>Todo esta good very good</p>
        <div className={styles.info__privacity}>
          <h2>Privacidad</h2>
          <p>
            Bueno la privacidad de esta app nos vale mucho, por eso esto esta
            protegido por Dios y todos ustedes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InformationPrivacity;
