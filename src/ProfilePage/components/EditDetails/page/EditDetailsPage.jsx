import { LayoutDetails } from "../layout/LayoutDetails";

import styles from "./editDetails.module.css";

export const EditDetailsPage = () => {
  return (
    <>
      <section className={styles.details__container}>
        <div className={styles.details__box}>
          <div className={styles.details__content}>
            <i className="fa-solid fa-arrow-left"></i>
            <p>Editar detalles</p>
          </div>
          <div className={styles.details__title}>
            <h2>Personaliza tus detalles</h2>
            <p>Los datos que selecciones serán públicos</p>
          </div>
          <div className={styles.details__contain_all_info}>
            <LayoutDetails
              title="Trabajo"
              titleButton="Agregar trabajo"
              infoDetail="Trabajo en miami"
            />
            <LayoutDetails
              title="Educación"
              titleButton="Agregar estudios"
              infoDetail="Seminario de Cartagena"
            />
            <LayoutDetails
              title="Pais - Ciudad"
              titleButton="Agregar pais"
              infoDetail="Cartagena"
            />
            <LayoutDetails
              title="Relación"
              titleButton="Agregar relación"
              infoDetail="En una relación con: sfjdsjfkd"
            />
          </div>
          <div className={styles.details__button}>
            <button>Guardar</button>
          </div>
        </div>
      </section>
    </>
  );
};
