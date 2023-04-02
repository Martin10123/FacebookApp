import { Link } from "react-router-dom";

import styles from "../cardPost.module.css";

export const getTextPost = ({ post }) => {
  if (post?.listTagFriends?.length === 0) return post?.post;

  return (
    <>
      {post?.listTagFriends?.map((friend) => (
        <Link
          className={styles.post__tag_friends}
          key={friend.uidUser}
          to={`/${friend.username}`}
        >
          {friend.displayName.trim()}
          {", "}
        </Link>
      ))}

      {post?.post}
    </>
  );
};
