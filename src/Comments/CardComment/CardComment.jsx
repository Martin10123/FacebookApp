import { useState } from "react";
import { photoUser } from "../../assets";
import { ReactionsSvgCount } from "../Layout/ReactionsSvgCount";

import styles from "./cardComment.module.css";

export const CardComment = () => {
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <div className={styles.card_comment__container}>
      <figure className={styles.card_comment__photo}>
        <img src={photoUser} alt="Foto de perfil" />
      </figure>

      <div className={styles.card_comment__contain_name_info_comment}>
        <div className={styles.card_comment__name_comment}>
          <div className={styles.card_comment__name_elli}>
            <p>Martin Elias</p>
            <i
              className="fa-solid fa-ellipsis"
              onClick={() => setOpenOptions(!openOptions)}
            ></i>

            {openOptions && (
              <div className={styles.card_comment__options_elli}>
                <p>Editar</p>
                <p>Eliminar</p>
              </div>
            )}
          </div>
          <span>
            Lorem ipsum, dolorrem ipsum, dolorem ipsum, dolo rem ipsum, dolo rem
            ipsum, dolo rem ipsum, dolo rem ipsum, dolo rem ipsum, dolo rem
          </span>
        </div>

        <div className={styles.card_comment__date_reaction_response}>
          <div className={styles.comment__content_spans}>
            <span>6h</span>
            <span>Me gusta</span>
            <span>Responder</span>
          </div>
          <ReactionsSvgCount />
        </div>
      </div>
    </div>
  );
};
