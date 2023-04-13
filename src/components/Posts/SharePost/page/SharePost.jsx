import { getTextNameUserAndFriendsTag } from "../../CardPost/helper";
import { photoUser } from "../../../../assets";
import { PhotoUser } from "../../../../modules";
import { ShareInItem } from "../components/ShareInItem";
import { TagFriends } from "../../CreatePost/components";
import { usePreventScroll } from "../../../../hooks";
import { useSharePost } from "../hook/useSharePost";

import styles from "../sharePost.module.css";

export const SharePost = ({ infoUserActive, post, setOpenSharePost }) => {
  usePreventScroll();

  const {
    // atributos
    friendsListCurrentUser,
    listTagFriends,
    openTagFriends,
    photoUrl,
    privacity,
    startLoading,
    updatePost,

    // metodos
    onInputChange,
    onSubmitSharePost,
    setListTagFriends,
    setOpenTagFriends,
  } = useSharePost({ infoUserActive, post, setOpenSharePost });

  return (
    <>
      <div className={styles.share__container}>
        <div
          className={styles.share__close_modal_share}
          style={{ display: startLoading ? "none" : "" }}
          onClick={() => setOpenSharePost(false)}
        ></div>
        <div className={styles.share__content}>
          <div className={styles.share__writte_post}>
            <div className={styles.share__content_photo_user}>
              <figure className={styles.share__photo_user}>
                <img
                  src={photoUrl || photoUser}
                  alt="Foto de perfil del usuario"
                />

                <figcaption className={styles.share__figcaption}>
                  {getTextNameUserAndFriendsTag({
                    infoUserActive,
                    listTagFriends,
                  })}

                  <select
                    className={styles.share__select_state}
                    name="privacity"
                    onChange={onInputChange}
                    value={privacity}
                  >
                    <option value="Publico">Publico</option>
                    <option value="Solo amigos">Solo amigos</option>
                    <option value="Solo yo">Solo yo</option>
                  </select>
                </figcaption>
              </figure>
              <div
                className={styles.share__content_tag_friends}
                onClick={() => setOpenTagFriends(true)}
              >
                <i className="fa-solid fa-users"></i>
              </div>
            </div>

            <div className={styles.share__content_textarea}>
              <textarea
                name="updatePost"
                onChange={onInputChange}
                placeholder="Haz un comentario..."
                value={updatePost}
              />
            </div>

            <div className={styles.share__btn_share}>
              <button disabled={startLoading} onClick={onSubmitSharePost}>
                {startLoading ? "Compartiendo..." : "Compartir ahora"}
              </button>
            </div>
          </div>

          <p className={styles.share__content_send_message}>
            Enviar por mensaje
          </p>

          <div className={styles.share__scroll_users}>
            {friendsListCurrentUser.map((user) => (
              <PhotoUser
                isActive={user.isActive}
                key={user.uid}
                nameUser={user.displayName}
                photoUrl={user.photoUrl}
                showName={true}
              />
            ))}
          </div>

          <p className={styles.share__content_send_message}>Compartir en </p>

          <ShareInItem />
        </div>
      </div>

      {openTagFriends && (
        <TagFriends
          listTagFriends={listTagFriends}
          setListTagFriends={setListTagFriends}
          setOpenTagFriends={setOpenTagFriends}
        />
      )}
    </>
  );
};
