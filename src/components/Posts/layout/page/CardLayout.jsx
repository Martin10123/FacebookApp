import { useState } from "react";
import { Link } from "react-router-dom";

import { getTextPost } from "../../CardPost/helper";
import { getTimeAgo } from "../../../../helpers";
import { OptionsPost } from "../../CardPost";
import { photoUser } from "../../../../assets";

import styles from "./layout.module.css";

export const CardLayout = ({
  children,
  infoUserActive,
  isCardShare = false,
  post,
  userCreatePost,
}) => {
  const [openOptions, setOpenOptions] = useState(false);
  const { displayName, photoUrl, username } = userCreatePost;

  const textPost = isCardShare ? post.postShared : post;

  const showIconPrivacity = () => {
    const isPublic = isCardShare ? post.postShared.privacity : post.privacity;
    const isOnlyFriends = isCardShare
      ? post.postShared.privacity
      : post.privacity;
    const isOnlyYou = isCardShare ? post.postShared.privacity : post.privacity;

    if (isPublic === "Publico") {
      return <i className="fa-solid fa-earth-americas"></i>;
    } else if (isOnlyFriends === "Solo amigos") {
      return <i className="fa-solid fa-users"></i>;
    } else if (isOnlyYou === "Solo yo") {
      return <i className="fa-solid fa-user"></i>;
    }
  };

  return (
    <div className={styles.layout__container}>
      <div className={styles.layout__content_info_user}>
        <div className={styles.layout__name_date}>
          <Link to={`/${username}`}>
            <img src={photoUrl || photoUser} alt="Foto de perfil del usuario" />
          </Link>
          <span className={styles.layout__content_name_user}>
            <p className={styles.layout__name}>{displayName}</p>
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
            onClick={() => setOpenOptions(!openOptions)}
          ></i>
        )}

        {!isCardShare && openOptions && (
          <OptionsPost
            post={post}
            setOpenOptions={setOpenOptions}
            infoUserActive={infoUserActive}
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
