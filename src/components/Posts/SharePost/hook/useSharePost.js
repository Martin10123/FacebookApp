import { useState } from "react";
import { useProfile } from "../../../../modules/ProfilePage/hook";
import { useForm } from "../../../../hooks";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { firebaseDB } from "../../../../services";
import { toast } from "react-hot-toast";

export const useSharePost = ({ infoUserActive, post, setOpenSharePost }) => {
  const [openTagFriends, setOpenTagFriends] = useState(false);
  const [startLoading, setStartLoading] = useState(false);
  const [listTagFriends, setListTagFriends] = useState([]);
  const { friendsListCurrentUser } = useProfile();

  const { uid, displayName, photoUrl } = infoUserActive;
  const { privacity, updatePost, onInputChange } = useForm({
    privacity: "Publico",
    updatePost: "",
  });

  const onSubmitSharePost = async () => {
    setStartLoading(true);

    let newDataInPost;
    let newDataInPostShare;

    if (!post?.isShared) {
      const { reactions, howManyPeopleSharePost, ...newPost } = post;

      newDataInPost = newPost;
    } else {
      const { reactions, howManyPeopleSharePost, ...newPostShared } =
        post?.postShared;

      newDataInPostShare = newPostShared;
    }

    const dataToShare = post?.isShared
      ? { ...newDataInPostShare }
      : { ...newDataInPost };

    const dataUpdateAccountSharedPost = post?.isShared
      ? [...post.postShared?.howManyPeopleSharePost, uid]
      : [...post?.howManyPeopleSharePost, uid];

    try {
      await addDoc(collection(firebaseDB, "posts"), {
        date: new Date().getTime(),
        displayName,
        listTagFriends,
        post: updatePost,
        postShared: { ...dataToShare },
        postSharedIdDoc: post.idDoc,
        privacity,
        howManyPeopleSharePost: [],
        uid,
        isShared: true,
      });

      await updateDoc(doc(firebaseDB, "posts", post.idDoc), {
        howManyPeopleSharePost: dataUpdateAccountSharedPost,
      });

      toast.success("Compartiste esta publicación");
      setStartLoading(false);
      setOpenSharePost(false);
    } catch (error) {
      console.error(error);
      toast.error("Hubo un error al compartir esta publicación");
      setStartLoading(false);
    }
  };

  return {
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
  };
};
