import { ReactionsPost } from "./ReactionsPost";

import styles from "./layout.module.css";

export const CardLayout = ({
  children,
  photoUser,
  nameUser,
  createdDate,
  iconStyle,
}) => {
  return (
    <div className={styles.layout__container}>
      <div className={styles.layout__content_info_user}>
        <div className={styles.layout__name_date}>
          <img src={photoUser} alt="Foto de perfil del usuario" />
          <span className={styles.layout__content_name_user}>
            <p className={styles.layout__name}>{nameUser}</p>
            <span className={styles.layout__date_post}>
              <p>
                {createdDate} . <i className={iconStyle}></i>
              </p>
            </span>
          </span>
        </div>
        <i className="fa-solid fa-ellipsis"></i>
      </div>

      <div className={styles.layout__desc_post}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          commodi hic atque odio in nemo aliquid omnis corrupti vel quae nihil
          unde tempore saepe voluptate maiores esse provident, corporis
          nesciunt!
        </p>
      </div>

      {children}

      <div className={styles.layout__buttons_reactions}>
        <button className={styles.layout__button_like}>
          <i className="fa-regular fa-thumbs-up"></i>
          Like
          <ReactionsPost />
        </button>
        <button className={styles.layout__button}>
          <i className="fa-regular fa-comment"></i>
          Comentar
        </button>
        <button className={styles.layout__button}>
          <i className="fa-regular fa-share-from-square"></i>
          Compartir
        </button>
      </div>
    </div>
  );
};
