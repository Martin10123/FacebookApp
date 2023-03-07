import { hobbies } from "../../../assets/hobbies";
import { listHobbies } from "../../helpers/dataGlobal";

import styles from "./editHobbies.module.css";

export const EditHobbies = ({ setOpenEditHobbies }) => {
  return (
    <>
      <section className={styles.hobbies__container}>
        <div className={styles.hobbies__box}>
          <div className={styles.hobbies__content}>
            <i
              className="fa-solid fa-arrow-left"
              onClick={() => setOpenEditHobbies(false)}
            ></i>
            <p>Editar detalles</p>
          </div>
          <div className={styles.hobbies__contain_list}>
            <div className={styles.hobbies__title}>
              <p>
                ¿Que te gusta hacer? Elige un pasatiempo para agregarlo a tu
                perfil
              </p>
              <figure className={styles.hobbies__title_figure}>
                <img src={hobbies} alt="hobbies" />
              </figure>
            </div>
            <ul className={styles.hobbies__list}>
              {listHobbies.map(({ img, name }) => (
                <li key={name} className={styles.hobbies__item}>
                  <figure className={styles.hobbies__list_img}>
                    <img src={img} alt={name} />
                    <figcaption>{name}</figcaption>
                  </figure>
                  <div className={styles.hobbies__checkbox}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.hobbies__buttons}>
            <button>Guardar</button>
            <button>Cancelar</button>
          </div>
        </div>
      </section>
    </>
  );
};
