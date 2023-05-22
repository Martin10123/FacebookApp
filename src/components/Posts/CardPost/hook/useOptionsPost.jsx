import { useState } from "react";
import { toast } from "react-hot-toast";
import {
  arrayRemove,
  arrayUnion,
  deleteField,
  doc,
  setDoc,
} from "firebase/firestore";

import { firebaseDB } from "../../../../services";
import { useCloseModal } from "../../../../hooks";
import { useDeletePostComments } from "../../hook/useDeleteAllByPC";

export const useOptionsPost = ({ post, infoUserActive, setOpenOptions }) => {
  const [openUpdatePost, setOpenUpdatePost] = useState(false);
  const [openSureDeletePost, setOpenSureDeletePost] = useState(false);
  const refClose = useCloseModal(() => setOpenOptions(false));

  const iCreatedThisPost = infoUserActive.uid === post.uid;
  const isSavedPost = infoUserActive?.savedPosts?.includes(post.idDoc);

  const { onDeleteAllPost } = useDeletePostComments({
    isPostOComment: "posts",
  });

  const onSavePost = async () => {
    try {
      await setDoc(
        doc(firebaseDB, "users", infoUserActive.uid),
        {
          savedPosts: isSavedPost
            ? arrayRemove(post.idDoc)
            : arrayUnion(post.idDoc),
        },
        { merge: true }
      );

      const docPathRef = doc(firebaseDB, "postsSaved", infoUserActive.uid);

      if (isSavedPost) {
        await setDoc(
          docPathRef,
          { [post.idDoc]: deleteField() },

          { merge: true }
        );
      } else {
        const savePhoto = post?.isShared
          ? post.postShared.photosUrls || []
          : post.photosUrls || [];

        await setDoc(
          docPathRef,
          {
            [post.idDoc]: {
              date: new Date().getTime(),
              photoPost: savePhoto || [],
              textPost: post?.post,
              therePhoto: savePhoto?.length !== 0 ? true : false,
              thereText: post?.post?.length !== 0 ? true : false,
              uidCreatePost: post?.uid,
              whoCreatePost: post?.displayName,
            },
          },
          { merge: true }
        );
      }

      toast.success(
        isSavedPost
          ? "Se borro esta publicación de la lista"
          : "Se guardo correctamente la publicación"
      );
    } catch (error) {
      console.error(error);
    }
  };

  const onDeletePosts = async () => {
    try {
      await onDeleteAllPost(post.idDoc);

      toast.success("Se borro correctamente la publicación");
    } catch (error) {
      console.error(error);
    }
  };

  const onCopyLinkPost = async () => {
    try {
      console.log(`/post/${post.idDoc}`);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    // Atributos
    iCreatedThisPost,
    isSavedPost,
    openSureDeletePost,
    openUpdatePost,
    refClose,

    // Metodos
    onCopyLinkPost,
    onDeletePosts,
    onSavePost,
    setOpenSureDeletePost,
    setOpenUpdatePost,
  };
};
