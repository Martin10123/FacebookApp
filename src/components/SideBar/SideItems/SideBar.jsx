import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthUserContext } from "../../../context";
import { CreatePost } from "../../Posts/CreatePost/page/CreatePost";
import { EventsBirthday } from "../../../modules";
import { photoUser } from "../../../assets";
import { whichBirthdayIsClose } from "../../../modules/EventsBirthday/helpers/whoBirthdayIsClose";

import styles from "./sideBar.module.css";

const dataWindownSideBar = [
  {
    name: "Amigos",
    icon: "fa-solid fa-user-group",
    color: "#1888ea",
    linkTo: "/friends",
  },
  {
    name: "Guardado",
    icon: "fa-solid fa-bookmark",
    color: "#b8479f",
    linkTo: "/saved",
  },
  {
    name: "Tienda",
    icon: "fa-solid fa-store",
    color: "#f1662c",
    linkTo: "/store",
  },
  {
    name: "Más recientes",
    icon: "fa-solid fa-newspaper",
    color: "#249fe3",
    linkTo: "/",
  },
];

export const SideBar = () => {
  const [openViewEvents, setOpenViewEvents] = useState(false);
  const [openCreatePost, setOpenCreatePost] = useState(false);
  const { infoUserActive, users } = useContext(AuthUserContext);
  const navigate = useNavigate();

  const goToProfileUser = (setCloseModal = () => {}) => {
    navigate(`/${infoUserActive?.username}`);
    setCloseModal(false);
  };

  const usersWhoBirthdayIsClose = whichBirthdayIsClose(users);

  return (
    <>
      <nav className={styles.sideBar__container}>
        <div className={styles.sideBar__content}>
          <div className={styles.sideBar__windown}>
            <div className={styles.sideBar__item}>
              <i className="fa-solid fa-house" style={{ color: "#0170eb" }}></i>
              <p>Inicio</p>
            </div>
            <Link
              to={`/${infoUserActive?.username}`}
              className={styles.sideBar__item}
            >
              <img
                className={styles.sideBar__item_img}
                src={infoUserActive?.photoUrl || photoUser}
                alt="Foto de perfil"
              />
              <p>{infoUserActive?.displayName}</p>
            </Link>
          </div>
          <div className={styles.sideBar__windown}>
            {dataWindownSideBar.map(({ name, icon, color, linkTo }) => (
              <Link to={linkTo} key={name} className={styles.sideBar__item}>
                <i className={icon} style={{ color }}></i>
                <p>{name}</p>
              </Link>
            ))}

            <div
              className={styles.sideBar__item}
              onClick={() => setOpenViewEvents(true)}
            >
              <i
                className="fa-solid fa-calendar-day"
                style={{ color: "#de3750" }}
              ></i>
              <p>Eventos</p>
            </div>

            <Link className={styles.sideBar__item} to="/infoPrivacity">
              <i className="fa-solid fa-gear" style={{ color: "#979797" }}></i>
              <p>Información y privacidad</p>
            </Link>

            <div
              className={styles.sideBar__item}
              onClick={() => setOpenCreatePost(true)}
            >
              <i
                className="fa-solid fa-circle-plus"
                style={{ color: "#000" }}
              ></i>
              <p>Crear publicación</p>
            </div>
          </div>
        </div>
      </nav>

      {openCreatePost && (
        <CreatePost
          goToProfileUser={goToProfileUser}
          infoUserActive={infoUserActive}
          setOpenCreatePost={setOpenCreatePost}
        />
      )}

      {openViewEvents && (
        <EventsBirthday
          setOpenBirthdays={setOpenViewEvents}
          usersWhoBirthdayIsClose={usersWhoBirthdayIsClose}
        />
      )}
    </>
  );
};
