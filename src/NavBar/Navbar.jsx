import { useState } from "react";
import { Link } from "react-router-dom";

import { ChatAppPage } from "../MessagesApp";
import { NavIconsDesk } from "./NavIconsDesk";
import { NavIconsMobile } from "./NavIconsMobile";
import { SearchFriends } from "../Friends";

import styles from "./navbar.module.css";

export const Navbar = () => {
  const [openChats, setOpenChats] = useState(false);
  const [openSearchFriends, setOpenSearchFriends] = useState(false);

  return (
    <nav className={styles.nav__container}>
      <div className={styles.nav__content}>
        <div className={styles.nav__title_icons}>
          <Link className={styles.nav__title_face} to="/">
            Facebook
          </Link>

          <div className={styles.nav__content_icons}>
            <div className={styles.nav__icon}>
              <i className="fa-solid fa-plus"></i>
            </div>
            <div
              className={styles.nav__icon}
              onClick={() => setOpenSearchFriends(true)}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            {openSearchFriends && (
              <SearchFriends setOpenSearchFriends={setOpenSearchFriends} />
            )}

            <div
              className={styles.nav__icon}
              onClick={() => setOpenChats(true)}
            >
              <i className="fa-brands fa-facebook-messenger"></i>
            </div>

            {openChats && <ChatAppPage setOpenChats={setOpenChats} />}
          </div>
        </div>

        <NavIconsDesk />

        <NavIconsMobile />
      </div>
    </nav>
  );
};
