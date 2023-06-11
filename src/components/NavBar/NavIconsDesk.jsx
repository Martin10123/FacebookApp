import { AutoComplete } from "./helpers";
import { MenuDesk } from "../MenuApp";
import { photoUser } from "../../assets";
import { useNavbar, useCountMessageNotifi } from "./hook";
import { WindownChats } from "../../modules";
import { WindownNotifications } from "../WindownNotifications/WindownNotifications";

import styles from "./navbar.module.css";

export const NavIconsDesk = () => {
  const {
    // Atributos
    infoUserActive,
    openAutoComplete,
    openMenuDesk,
    openWindownChat,
    openWindownNotifi,
    refAutoCom,
    refChat,
    refMenu,
    refNotifi,
    searchFriend,
    stylesIcons,
    users,

    // Metodos
    onInputChange,
    onResetForm,
    onStartLogout,
    setOpenAutoComplete,
    setOpenMenuDesk,
    setOpenWindownChat,
    setOpenWindownNotifi,
  } = useNavbar();

  const { getMessaCount, getNotifiCount } = useCountMessageNotifi();

  return (
    <>
      <div
        className={styles.nav__search_friends}
        onClick={() => setOpenAutoComplete(true)}
        ref={refAutoCom}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          name="searchFriend"
          onChange={onInputChange}
          placeholder="Buscar amigos..."
          type="text"
          value={searchFriend}
        />

        {openAutoComplete && (
          <AutoComplete
            onResetForm={onResetForm}
            searchFriend={searchFriend}
            users={users}
          />
        )}
      </div>

      <div className={styles.nav__buttons_desk}>
        <div
          className={styles.nav__icon}
          onClick={() => setOpenWindownChat(true)}
          ref={refChat}
          style={stylesIcons.openWindownChat}
        >
          <span className={styles.nav__count_notifi_message}>
            <i className="fa-brands fa-facebook-messenger"></i>

            {getMessaCount !== 0 && (
              <p className={styles.nav__count_float}>{getMessaCount}</p>
            )}
          </span>

          {openWindownChat && <WindownChats />}
        </div>
        <div
          className={styles.nav__icon}
          onClick={() => setOpenWindownNotifi(true)}
          ref={refNotifi}
          style={stylesIcons.openWindownNotifi}
        >
          <span className={styles.nav__count_notifi_message}>
            <i className="fa-solid fa-bell"></i>

            {getNotifiCount !== 0 && (
              <p className={styles.nav__count_float}>{getNotifiCount}</p>
            )}
          </span>

          {openWindownNotifi && <WindownNotifications />}
        </div>

        <div
          ref={refMenu}
          className={styles.nav__user_profile}
          onClick={() => setOpenMenuDesk(true)}
        >
          <figure className={styles.nav__user_photo}>
            <img
              src={infoUserActive?.photoUrl || photoUser}
              alt="Foto de perfil del usuario"
            />
          </figure>

          <div className={styles.nav__icon_drow}>
            <i className="fa-solid fa-chevron-down"></i>
          </div>

          {openMenuDesk && (
            <MenuDesk
              infoUserActive={infoUserActive}
              onStartLogout={onStartLogout}
            />
          )}
        </div>
      </div>
    </>
  );
};
