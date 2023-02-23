import {
  angry,
  care,
  haha,
  like,
  love,
  photoUser,
  sad,
  wow,
} from "../../assets";

import styles from "./listReactions.module.css";

export const ListReactions = () => {
  return (
    <div className={styles.list_reactions__container}>
      <div className={styles.list_reactions__content}>
        <div className={styles.list_reactions__nav}>
          <span>
            <i className="fa-solid fa-arrow-left"></i>
            <p>Personas que reaccionaron</p>
          </span>

          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className={styles.list_reactions__count_reactions}>
          <div className={styles.list_reactions__item}>
            <p>Todas 30,000</p>
          </div>
          <div className={styles.list_reactions__item}>
            <img src={angry} alt="" />
            <p>30,000</p>
          </div>
          <div className={styles.list_reactions__item}>
            <img src={care} alt="" />
            <p>30,000</p>
          </div>
          <div className={styles.list_reactions__item}>
            <img src={haha} alt="" />
            <p>30,000</p>
          </div>
          <div className={styles.list_reactions__item}>
            <img src={like} alt="" />
            <p>30,000</p>
          </div>
          <div className={styles.list_reactions__item}>
            <img src={love} alt="" />
            <p>30,000</p>
          </div>
          <div className={styles.list_reactions__item}>
            <img src={sad} alt="" />
            <p>30,000</p>
          </div>
          <div className={styles.list_reactions__item}>
            <img src={wow} alt="" />
            <p>30,000</p>
          </div>
        </div>

        <div className={styles.list_reactions__list_users}>
          <div className={styles.list_reactions__user}>
            <div className={styles.list_reactions__info_user}>
              <figure className={styles.list_reactions__photo}>
                <img src={photoUser} alt="Foto perfil usuario" />
                <img
                  className={styles.list_reactions__img_reac}
                  src={wow}
                  alt=""
                />
              </figure>
              <p>Martin Elias</p>
            </div>

            <button className={styles.list_reactions__btn_add_friend}>
              <i className="fa-solid fa-user-plus"></i>
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
