import { useRef, useState } from "react";

export const useCardLayout = ({ userCreatePost, post, isCardShare }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [isNearHeight, setIsNearHeight] = useState(false);
  const ellipsisRef = useRef(null);
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

  const onButtonClick = () => {
    const element = ellipsisRef.current;
    const rect = element.getBoundingClientRect();
    const distanceToBottom = window.innerHeight - rect.bottom;
    const threshold = 0.25 * window.innerHeight; // 25% de la altura de la ventana
    const isNearBottom = distanceToBottom <= threshold;

    setIsNearHeight(isNearBottom);
    setOpenOptions(true);
  };

  return {
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
  };
};
