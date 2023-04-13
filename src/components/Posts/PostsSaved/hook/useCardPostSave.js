import { useContext, useRef, useState } from "react";
import { useCloseModal } from "../../../../hooks";
import { photoUser } from "../../../../assets";
import { GetPostsContext } from "../../../../context";
import { useNavigate } from "react-router-dom";

export const useCardPostSave = ({ post, users }) => {
  const [isNearHeight, setIsNearHeight] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [openSharePost, setOpenSharePost] = useState(false);
  const { getPosts } = useContext(GetPostsContext);
  const navigate = useNavigate();
  const refOptions = useCloseModal(() => setOpenOptions(false));

  const getPostByID = getPosts.find(
    (postFind) => postFind.idDoc === post.idDoc
  );

  const ellipsisRef = useRef(null);

  const userCreatePost = users.find(
    (user) => user?.uid === post?.uidCreatePost
  );

  const thereText = post.thereText ? "- Publicación" : "";
  const therePhoto =
    post.photoPost.length !== 0
      ? `- ${post.photoPost.length} ${
          post.photoPost.length > 1 ? "fotos" : "foto"
        }`
      : "";

  const photoPostOUser = post.therePhoto
    ? post.photoPost[0]
    : userCreatePost.photoUrl
    ? userCreatePost.photoUrl
    : photoUser;

  const onOpenOptions = () => {
    const element = ellipsisRef.current;
    const rect = element.getBoundingClientRect();
    const distanceToBottom = window.innerHeight - rect.bottom;
    const threshold = 0.25 * window.innerHeight; // 25% de la altura de la ventana
    const isNearBottom = distanceToBottom <= threshold;

    setIsNearHeight(isNearBottom);
    setOpenOptions(true);
  };

  const onOpenSharePost = () => {
    setOpenSharePost(true);
    setOpenOptions(false);
  };

  const onNavigateShowPost = () => {
    navigate(`/${userCreatePost.displayName}/post/${post.idDoc}`);
  };

  return {
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
  };
};
