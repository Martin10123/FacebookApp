import { useContext, useState } from "react";

import { photoUser } from "../../../../assets";
import { AuthUserContext } from "../../../../context";
import { ButtonsReactions, CardLayout, CountReactions } from "../../layout";
import { getTextPost } from "../helper/getTextPost";
import { getTimeAgo } from "../../../../helpers";
import { ListImagesPost, SharePost } from "../../..";

import styles from "../cardPost.module.css";

export const CardSharePost = ({ post }) => {
  const { users, infoUserActive } = useContext(AuthUserContext);
  const [openSharePost, setOpenSharePost] = useState(false);

  const userCreatePost = users.find((user) => user?.uid === post?.uid);
  const userCreatePostShared = users.find(
    (user) => user?.uid === post?.postShared?.uid
  );

  return (
    <>
      <CardLayout
        createdDate={getTimeAgo(post?.date)}
        iconStyle="fa-solid fa-earth-americas"
        nameUser={userCreatePost?.displayName}
        photoUser={userCreatePost?.photoUrl || photoUser}
        textPost={getTextPost({ post })}
        usernameProfile={userCreatePost?.username}
      >
        <div className={styles.card_share__container}>
          <CardLayout
            createdDate={getTimeAgo(post?.postShared?.date)}
            iconStyle="fa-solid fa-earth-americas"
            isCardShare={true}
            nameUser={userCreatePostShared?.displayName}
            photoUser={userCreatePostShared?.photoUrl || photoUser}
            textPost={getTextPost({ post: post.postShared })}
            usernameProfile={userCreatePostShared?.username}
          >
            {post?.photosUrls?.length !== 0 && (
              <ListImagesPost post={post?.postShared} />
            )}
          </CardLayout>
        </div>

        <CountReactions post={post} />

        <ButtonsReactions
          post={post}
          infoUserActive={infoUserActive}
          setOpenSharePost={setOpenSharePost}
        />
      </CardLayout>

      {openSharePost && (
        <SharePost
          infoUserActive={infoUserActive}
          post={post}
          setOpenSharePost={setOpenSharePost}
        />
      )}
    </>
  );
};
