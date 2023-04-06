import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthUserContext } from "../../../context";
import { CreatePost } from "../CreatePost/page/CreatePost";
import { photoUser } from "../../../assets";

import styles from "./formPost.module.css";

export const FormPost = () => {
  const { infoUserActive } = useContext(AuthUserContext);
  const [openCreatePost, setOpenCreatePost] = useState(false);
  const navigate = useNavigate();

  const goToProfileUser = (setCloseModal = () => {}) => {
    navigate(`/${infoUserActive?.username}`);
    setCloseModal(false);
  };

  return (
    <>
      <div className={styles.post__container}>
        <div className={styles.post__content}>
          <img
            alt="Foto de perfil"
            className={styles.post__info_user_active}
            onClick={() => goToProfileUser(() => {})}
            src={infoUserActive?.photoUrl || photoUser}
          />

          <div
            className={styles.post__title}
            onClick={() => setOpenCreatePost(true)}
          >
            <p>¿Que estas pensando?</p>
          </div>

          <i
            className="fa-solid fa-images"
            onClick={() => setOpenCreatePost(true)}
          ></i>
        </div>

        <div className={styles.post__content_options}>
          <div
            className={styles.post__option_item}
            onClick={() => setOpenCreatePost(true)}
          >
            <i className="fa-solid fa-images"></i>
            <p>Foto/Video</p>
          </div>
          <div
            className={styles.post__option_item}
            onClick={() => setOpenCreatePost(true)}
          >
            <i className="fa-solid fa-video"></i>
            <p>Videos en vivo</p>
          </div>
        </div>
      </div>

      {openCreatePost && (
        <CreatePost
          goToProfileUser={goToProfileUser}
          infoUserActive={infoUserActive}
          setOpenCreatePost={setOpenCreatePost}
        />
      )}
    </>
  );
};
