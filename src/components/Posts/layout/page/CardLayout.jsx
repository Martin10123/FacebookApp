import { Link } from "react-router-dom";

import { getTextPost } from "../../CardPost/helper";
import { getTimeAgo } from "../../../../helpers";
import { OptionsPost } from "../../CardPost";
import { photoUser } from "../../../../assets";
import { useCardLayout } from "../hook/useCardLayout";

import styles from "./layout.module.css";

export const CardLayout = ({
  children,
  infoUserActive,
  isCardShare = false,
  post,
  userCreatePost,
}) => {
  const {
    // Atributos
    displayName,
    ellipsisRef,
    isNearHeight,
    openOptions,
    photoUrl,
    textPost,
    username,

    // Metodos
    onButtonClick,
    setIsNearHeight,
    setOpenOptions,
    showIconPrivacity,
  } = useCardLayout({ isCardShare, post, userCreatePost });

  return (
    <div className={styles.layout__container}>
      <div className={styles.layout__content_info_user}>
        <div className={styles.layout__name_date}>
          <Link to={`/${username}`}>
            <img src={photoUrl || photoUser} alt="Foto de perfil del usuario" />
          </Link>
          <span className={styles.layout__content_name_user}>
            <Link to={`/${username}`}>
              <p className={styles.layout__name}>{displayName}</p>
            </Link>
            <span className={styles.layout__date_post}>
              <p>
                {getTimeAgo(post.date)} - {showIconPrivacity()}
              </p>
            </span>
          </span>
        </div>

        {!isCardShare && (
          <i
            className="fa-solid fa-ellipsis"
            onClick={onButtonClick}
            ref={ellipsisRef}
          ></i>
        )}

        {!isCardShare && openOptions && (
          <OptionsPost
            displayNameUserCreatePost={displayName}
            infoUserActive={infoUserActive}
            isNearHeight={isNearHeight}
            post={post}
            setOpenOptions={setOpenOptions}
          />
        )}
      </div>

      {textPost.post && (
        <div className={styles.layout__desc_post}>
          <p>{getTextPost({ post: textPost }) || ""}</p>
        </div>
      )}

      {children}
    </div>
  );
};
