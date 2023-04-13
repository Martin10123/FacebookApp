import { Link } from "react-router-dom";
import { OptionsPostSave } from "./OptionsPostSave";
import { getTimeAgo } from "../../../../helpers/dates";
import { useCardPostSave } from "../hook/useCardPostSave";
import { SharePost } from "../..";

import styles from "./components.module.css";

export const CardPostSave = ({ post, users, infoUserActive }) => {
  const {
    // Atributos
    ellipsisRef,
    getPostByID,
    isNearHeight,
    photoPostOUser,
    refOptions,
    therePhoto,
    thereText,
    userCreatePost,

    // Metodos
    onNavigateShowPost,
    onOpenOptions,
    onOpenSharePost,
    openOptions,
    openSharePost,
    setOpenSharePost,
  } = useCardPostSave({ post, users });

  return (
    <>
      <div className={styles.post_save__card_item}>
        <figure
          className={styles.post_save__photo_user_o_post}
          onClick={onNavigateShowPost}
        >
          <img src={photoPostOUser} alt="Foto de perfil de usuario" />
        </figure>

        <div
          className={styles.post_save__info_post_title}
          onClick={onNavigateShowPost}
        >
          <h4>{post.textPost || userCreatePost.displayName}</h4>
          <p>
            {thereText} {therePhoto}
          </p>

          <p className={styles.post_save__show_desk}>
            Se guardó desde la publicación de{" "}
            <Link to={`/${userCreatePost.username}`}>
              {userCreatePost.displayName}
            </Link>
          </p>
          <span>Guardado hace {getTimeAgo(post.date)}</span>
        </div>

        <span className={styles.post_save__ellipsis}>
          <i
            className="fa-solid fa-ellipsis"
            onClick={onOpenOptions}
            ref={ellipsisRef}
          ></i>

          {openOptions && (
            <OptionsPostSave
              infoUserActive={infoUserActive}
              isNearHeight={isNearHeight}
              onNavigateShowPost={onNavigateShowPost}
              onOpenSharePost={onOpenSharePost}
              post={post}
              refOptions={refOptions}
              userCreatePost={userCreatePost}
            />
          )}
        </span>
      </div>

      {openSharePost && (
        <SharePost
          infoUserActive={infoUserActive}
          post={getPostByID}
          setOpenSharePost={setOpenSharePost}
        />
      )}
    </>
  );
};
