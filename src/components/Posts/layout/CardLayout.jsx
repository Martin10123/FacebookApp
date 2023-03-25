import { useState } from "react";
import { usePositionElement } from "../../../hooks";
import { OptionsPost } from "../CardPost";
import { ButtonsReactions } from "./ButtonsReactions";

import styles from "./layout.module.css";

export const CardLayout = ({
  children,
  photoUser,
  nameUser,
  createdDate,
  iconStyle,
  isCardShare = false,
  style,
}) => {
  const [openOptions, setOpenOptions] = useState(false);
  const { myDivRef, isAtBottom } = usePositionElement();

  return (
    <div style={style} className={styles.layout__container}>
      <div className={styles.layout__content_info_user}>
        <div className={styles.layout__name_date}>
          <img src={photoUser} alt="Foto de perfil del usuario" />
          <span className={styles.layout__content_name_user}>
            <p className={styles.layout__name}>{nameUser}</p>
            <span className={styles.layout__date_post}>
              <p>
                {createdDate}. <i className={iconStyle}></i>
              </p>
            </span>
          </span>
        </div>

        {!isCardShare && (
          <i
            className="fa-solid fa-ellipsis"
            ref={myDivRef}
            onClick={() => setOpenOptions(!openOptions)}
          ></i>
        )}

        {!isCardShare && openOptions && (
          <OptionsPost
            isAtBottom={isAtBottom}
            setOpenOptions={setOpenOptions}
          />
        )}
      </div>

      <div className={styles.layout__desc_post}>
        <p>Lorem</p>
      </div>

      {children}

      {!isCardShare && <ButtonsReactions />}
    </div>
  );
};
