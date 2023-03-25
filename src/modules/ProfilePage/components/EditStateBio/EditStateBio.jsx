import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";

import { ButtonForm } from "../../../Auth";
import { firebaseDB } from "../../../../services";
import { photoUser } from "../../../../assets";
import { useForm } from "../../../../hooks";

import styles from "./editStateBio.module.css";

export const EditStateBio = ({ infoUserActive, setOpenEditStateBio }) => {
  const [startLoading, setStartLoading] = useState(false);
  const { stateBio, onInputChange } = useForm({
    stateBio: infoUserActive?.stateBio || "",
  });

  const onSaveStateBio = async () => {
    setStartLoading(true);

    try {
      await updateDoc(doc(firebaseDB, "users", infoUserActive?.uid), {
        stateBio,
      });

      setStartLoading(false);
      setOpenEditStateBio(false);
    } catch (error) {
      console.log(error);
      setStartLoading(false);
    }
  };

  return (
    <div className={styles.bio__container}>
      <div className={styles.bio__content}>
        <div className={styles.bio__nav}>
          <i
            className={`fa-solid fa-arrow-left ${
              startLoading ? "disabled_btn" : ""
            }`}
            onClick={() => setOpenEditStateBio(false)}
          ></i>
          <p>Editar estado</p>
        </div>

        <div className={styles.bio__contain_info}>
          <figure className={styles.bio__photo_user}>
            <img src={photoUser} alt="Foto de perfil del usuario" />

            <figcaption className={styles.bio__name_user}>
              <p>Martin Elias</p>
              <p>
                <i className="fa-solid fa-earth-americas"></i>
                Publico
              </p>
            </figcaption>
          </figure>

          <div className={styles.bio__content_text}>
            <textarea
              className={styles.bio__textarea}
              maxLength={100}
              name="stateBio"
              onChange={onInputChange}
              placeholder="Describete a ti mismo..."
              value={stateBio}
            />

            <span className={styles.bio__count_word}>
              {stateBio.length}/100
            </span>
          </div>
        </div>

        <div className={styles.bio__buttons}>
          <ButtonForm
            disabled={startLoading}
            title={startLoading ? "Guardando..." : "Guardar"}
            onSubmit={onSaveStateBio}
          />
        </div>
      </div>
    </div>
  );
};
