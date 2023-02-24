import { useState } from "react";
import { photoUser } from "../assets";
import { AutoComplete } from "../helpers";
import { useCloseModal } from "../hooks";
import { WindownChats } from "../MessagesApp";
import { WindownNotifications } from "../WindownNotifications/WindownNotifications";

import styles from "./navbar.module.css";

export const NavIconsDesk = () => {
  const [openAutoComplete, setOpenAutoComplete] = useState(false);
  const [openWindownChat, setOpenWindownChat] = useState(false);
  const [openWindownNotifi, setOpenWindownNotifi] = useState(false);

  const ref = useCloseModal(() => setOpenAutoComplete(false));
  const ref1 = useCloseModal(() => setOpenWindownChat(false));
  const ref2 = useCloseModal(() => setOpenWindownNotifi(false));

  return (
    <>
      <div
        className={styles.nav__search_friends}
        onClick={() => setOpenAutoComplete(true)}
        ref={ref}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" name="searchFriend" placeholder="Buscar amigos..." />

        {openAutoComplete && <AutoComplete />}
      </div>

      <div className={styles.nav__buttons_desk}>
        <div
          className={styles.nav__icon}
          onClick={() => setOpenWindownChat(true)}
          ref={ref1}
          style={{
            background: openWindownChat ? "#0099ff3d" : "",
            color: openWindownChat ? "#0099ff" : "",
          }}
        >
          <i className="fa-brands fa-facebook-messenger"></i>

          {openWindownChat && <WindownChats />}
        </div>
        <div
          className={styles.nav__icon}
          onClick={() => setOpenWindownNotifi(true)}
          ref={ref2}
          style={{
            background: openWindownNotifi ? "#0099ff3d" : "",
            color: openWindownNotifi ? "#0099ff" : "",
          }}
        >
          <i className="fa-solid fa-bell"></i>
          {openWindownNotifi && <WindownNotifications />}
        </div>

        <div className={styles.nav__user_profile}>
          <figure className={styles.nav__user_photo}>
            <img src={photoUser} alt="Foto de perfil del usuario" />
          </figure>

          <div className={styles.nav__icon_drow}>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </>
  );
};
