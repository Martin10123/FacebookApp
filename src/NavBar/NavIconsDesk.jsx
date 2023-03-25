import { photoUser } from "../assets";
import { MenuDesk } from "../MenuApp";
import { WindownChats } from "../MessagesApp";
import { WindownNotifications } from "../WindownNotifications/WindownNotifications";
import { AutoComplete } from "./helpers";
import { useNavbar } from "./hook/useNavbar";

import styles from "./navbar.module.css";

export const NavIconsDesk = () => {
  const {
    infoUserActive,
    onInputChange,
    onResetForm,
    onStartLogout,
    openAutoComplete,
    openMenuDesk,
    openWindownChat,
    openWindownNotifi,
    refAutoCom,
    refChat,
    refMenu,
    refNotifi,
    searchFriend,
    setOpenAutoComplete,
    setOpenMenuDesk,
    setOpenWindownChat,
    setOpenWindownNotifi,
    stylesIcons,
    users,
  } = useNavbar();

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
          <i className="fa-brands fa-facebook-messenger"></i>

          {openWindownChat && <WindownChats />}
        </div>
        <div
          className={styles.nav__icon}
          onClick={() => setOpenWindownNotifi(true)}
          ref={refNotifi}
          style={stylesIcons.openWindownNotifi}
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
            <img
              src={
                infoUserActive?.photoUrl ? infoUserActive?.photoUrl : photoUser
              }
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
