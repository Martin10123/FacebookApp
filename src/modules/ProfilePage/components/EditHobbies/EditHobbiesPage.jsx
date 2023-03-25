import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

import { hobbies } from "../../../../assets/hobbies";
import { listHobbies } from "../../helpers/dataGlobal";

import styles from "./editHobbies.module.css";
import { firebaseDB } from "../../../../services";

export const EditHobbies = ({ infoUserActive, setOpenEditHobbies }) => {
  const [selectedHobbies, setSelectedHobbies] = useState(
    infoUserActive?.infoPersonal.hobbies || []
  );
  const [startLoading, setStartLoading] = useState(false);

  const onCheckboxChange = ({ target }) => {
    const value = target.name;

    if (selectedHobbies.includes(value)) {
      setSelectedHobbies(selectedHobbies.filter((hobby) => hobby !== value));
    } else {
      if (selectedHobbies.length <= 7) {
        setSelectedHobbies([...selectedHobbies, value]);
      }
    }
  };

  const onSavedHobbies = async () => {
    if (selectedHobbies.length === 0) return;

    setStartLoading(true);

    try {
      await setDoc(
        doc(firebaseDB, "users", infoUserActive?.uid),
        {
          infoPersonal: {
            hobbies: [...selectedHobbies],
          },
        },
        { merge: true }
      );
      setStartLoading(false);
      setOpenEditHobbies(false);
    } catch (error) {
      console.log(error);
      setStartLoading(false);
    }
  };

  return (
    <>
      <section className={styles.hobbies__container}>
        <div className={styles.hobbies__box}>
          <div className={styles.hobbies__content}>
            <i
              style={{ pointerEvents: startLoading ? "none" : "all" }}
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

                  <input
                    checked={selectedHobbies.includes(name)}
                    className={styles.hobbies__checkbox}
                    name={name}
                    onChange={onCheckboxChange}
                    type="checkbox"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.hobbies__buttons}>
            <button disabled={startLoading} onClick={onSavedHobbies}>
              {startLoading ? "Guardando..." : "Guardar"}
            </button>
            <button
              disabled={startLoading}
              onClick={() => setOpenEditHobbies(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
