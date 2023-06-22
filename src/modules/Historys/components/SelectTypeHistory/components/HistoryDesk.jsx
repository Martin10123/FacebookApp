import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoApp, photoUser } from "../../../../../assets";
import { PrivacityHistories } from "./PrivacityHistories";

import styles from "../page/selectTypeHistory.module.css";

export const HistoryDesk = ({
  children,
  displayNameUser,
  removeRowsGrid = false,
  setOpenHistoryText,
  typeOnBackPage,
}) => {
  const [openSettings, setOpenSettings] = useState(false);

  const navigate = useNavigate();

  const onBackPage = (type) => {
    if (type === "logo") {
      navigate("/");
    } else if (type === "CHD") {
      setOpenHistoryText(false);
    } else {
      navigate(-1);
    }
  };

  return (
    <>
      <div
        className={styles.select_history__content_displayName}
        style={
          removeRowsGrid
            ? {
                gridTemplateRows: "none",
                height: "fit-content",
                maxHeight: "100vh",
              }
            : {}
        }
      >
        <div className={styles.select_history__nav}>
          <button
            className={styles.select_history__close_create_history}
            onClick={() => onBackPage(typeOnBackPage)}
          >
            X
          </button>
          <figure
            className={styles.select_history__logo_facebook}
            onClick={() => onBackPage("logo")}
          >
            <img src={logoApp} alt="Logo de la app" />
          </figure>
        </div>

        <div className={styles.select_history__info_user_create_history}>
          <span className={styles.select_history__title_history}>
            <h3>Tu historia</h3>

            <span
              className={styles.select_history__settings}
              onClick={() => setOpenSettings(true)}
            >
              <i className="fa-solid fa-gear"></i>
            </span>
          </span>

          <figure className={styles.select_history__image_name}>
            <img src={photoUser} alt="Foto del usuario" />

            <figcaption className={styles.select_history__name_user}>
              {displayNameUser}
            </figcaption>
          </figure>
        </div>

        {children}
      </div>

      {openSettings && <PrivacityHistories setOpenSettings={setOpenSettings} />}
    </>
  );
};
