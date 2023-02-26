import { useState } from "react";
import { photoUser } from "../assets";
import { AutoComplete } from "../helpers";
import { useCloseModal } from "../hooks";
import { MenuDesk } from "../MenuApp";
import { WindownChats } from "../MessagesApp";
import { WindownNotifications } from "../WindownNotifications/WindownNotifications";

import styles from "./navbar.module.css";

export const NavIconsDesk = () => {
  const [openAutoComplete, setOpenAutoComplete] = useState(false);
  const [openWindownChat, setOpenWindownChat] = useState(false);
  const [openWindownNotifi, setOpenWindownNotifi] = useState(false);
  const [openMenuDesk, setOpenMenuDesk] = useState(false);

  const backgrounds = {
    openAutoComplete: openAutoComplete ? "#0099ff3d" : "",
    openWindownChat: openWindownChat ? "#0099ff3d" : "",
    openWindownNotifi: openWindownNotifi ? "#0099ff3d" : "",
  };

  const colors = {
    openAutoComplete: openAutoComplete ? "#0099ff" : "",
    openWindownChat: openWindownChat ? "#0099ff" : "",
    openWindownNotifi: openWindownNotifi ? "#0099ff" : "",
  };

  const refAutoComplete = useCloseModal(() => setOpenAutoComplete(false));
  const refChat = useCloseModal(() => setOpenWindownChat(false));
  const refNotifi = useCloseModal(() => setOpenWindownNotifi(false));
  const refMenu = useCloseModal(() => setOpenMenuDesk(false));

  return (
    <>
      <div
        className={styles.nav__search_friends}
        onClick={() => setOpenAutoComplete(true)}
        ref={refAutoComplete}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" name="searchFriend" placeholder="Buscar amigos..." />

        {openAutoComplete && <AutoComplete />}
      </div>

      <div className={styles.nav__buttons_desk}>
        <div
          className={styles.nav__icon}
          onClick={() => setOpenWindownChat(true)}
          ref={refChat}
          style={{
            background: backgrounds.openWindownChat,
            color: colors.openWindownChat,
          }}
        >
          <i className="fa-brands fa-facebook-messenger"></i>

          {openWindownChat && <WindownChats />}
        </div>
        <div
          className={styles.nav__icon}
          onClick={() => setOpenWindownNotifi(true)}
          ref={refNotifi}
          style={{
            background: backgrounds.openWindownNotifi,
            color: colors.openWindownNotifi,
          }}
        >
          <i className="fa-solid fa-bell"></i>
          {openWindownNotifi && <WindownNotifications />}
        </div>

        <div
          ref={refMenu}
          className={styles.nav__user_profile}
          onClick={() => setOpenMenuDesk(true)}
        >
          <figure className={styles.nav__user_photo}>
            <img src={photoUser} alt="Foto de perfil del usuario" />
          </figure>

          <div className={styles.nav__icon_drow}>
            <i className="fa-solid fa-chevron-down"></i>
          </div>

          {openMenuDesk && <MenuDesk />}
        </div>
      </div>
    </>
  );
};
