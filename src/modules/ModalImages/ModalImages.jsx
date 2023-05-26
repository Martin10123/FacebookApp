import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ButtonsReactions,
  CardLayout,
  CountReactions,
} from "../../components/Posts/layout";
import { AuthUserContext, GetPostsContext } from "../../context";
import { ListImagesPost, SharePost } from "../../components";
import { BoxComments } from "../BoxComments";

import styles from "./modalImages.module.css";

export const ModalImagesPost = () => {
  const { users, infoUserActive } = useContext(AuthUserContext);
  const { getPosts } = useContext(GetPostsContext);
  const [showOnlyImage, setShowOnlyImage] = useState(false);
  const [openSharePost, setOpenSharePost] = useState(false);
  const [openCommentsPost, setOpenCommentsPost] = useState(false);

  const { post_id } = useParams();
  const navigate = useNavigate();
  const getPostSelect = getPosts.find((post) => post.idDoc === post_id);
  const userCreatePost = users.find((user) => user?.uid === getPostSelect?.uid);

  const hidden_info = showOnlyImage ? styles.modal_images__hidden : "";

  return (
    <>
      <section className={styles.modal_images__container}>
        <div className={styles.modal_images__content}>
          <i className="fa-solid fa-xmark" onClick={() => navigate(-1)}></i>

          <figure className={styles.modal_images__photo}>
            <div
              className={styles.modal_images__hidden_other_info}
              onClick={() => setShowOnlyImage(!showOnlyImage)}
            ></div>
            <div className={styles.modal_images__content_list_images}>
              {getPostSelect.photosUrls.length !== 0 && (
                <ListImagesPost
                  idPost={getPostSelect.idDoc}
                  listImages={getPostSelect?.photosUrls}
                  onHiddenCardPost={() => setShowOnlyImage(!showOnlyImage)}
                />
              )}
            </div>
          </figure>

          <div className={`${styles.modal_images__info_post} ${hidden_info}`}>
            <CardLayout
              infoUserActive={infoUserActive}
              post={getPostSelect}
              userCreatePost={userCreatePost}
              styleContainer={{ background: "transparent" }}
              styleCNameUser={{ color: "#fff" }}
            >
              <CountReactions post={getPostSelect} />

              <ButtonsReactions
                post={getPostSelect}
                infoUserActive={infoUserActive}
                setOpenCommentsPost={setOpenCommentsPost}
                setOpenSharePost={setOpenSharePost}
              />
            </CardLayout>
          </div>
        </div>
      </section>

      {openSharePost && (
        <SharePost
          infoUserActive={infoUserActive}
          post={getPostSelect}
          setOpenSharePost={setOpenSharePost}
        />
      )}

      {openCommentsPost && (
        <BoxComments
          infoUserActive={infoUserActive}
          post={getPostSelect}
          setOpenCommentsPost={setOpenCommentsPost}
          userCreatePost={userCreatePost}
          users={users}
        />
      )}
    </>
  );
};
