import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { GetPostsContext } from "../../../context";
import { CardPost, CardSharePost } from "..";
import { noFound } from "../../../assets";

import styles from "./showPostAlone.module.css";

export const ShowPostAlone = () => {
  const { post_id } = useParams();
  const navigate = useNavigate();

  const { getPosts } = useContext(GetPostsContext);

  const getPostByID = getPosts.find((post) => post.idDoc === post_id);

  if (!getPostByID) {
    return (
      <div className={styles.message_error_no_found}>
        <img src={noFound} alt="No found" />
        <p>
          No pudimos encontrar la publicación, puede que el usuario la haya
          eliminado
        </p>
      </div>
    );
  }

  return (
    <div className={styles.show_post_alone__container}>
      <div className={styles.show_post_alone__content}>
        <div className={styles.show_post__return}>
          <i
            className="fa-solid fa-arrow-left"
            onClick={() => navigate(-1)}
          ></i>
          <p>{getPostByID.displayName}</p>
        </div>

        <div key={getPostByID.idDoc}>
          {!getPostByID.isShared ? (
            <CardPost post={getPostByID} />
          ) : (
            <CardSharePost post={getPostByID} />
          )}
        </div>
      </div>
    </div>
  );
};
