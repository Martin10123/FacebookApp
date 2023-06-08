import { useState } from "react";
import { useProfile } from "../../../../modules/ProfilePage/hook";
import { useForm, useSaveNotifications } from "../../../../hooks";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { firebaseDB } from "../../../../services";
import { toast } from "react-hot-toast";

export const useSharePost = ({ infoUserActive, post, setOpenSharePost }) => {
  const [openTagFriends, setOpenTagFriends] = useState(false);
  const [startLoading, setStartLoading] = useState(false);
  const [listTagFriends, setListTagFriends] = useState([]);
  const { friendsListCurrentUser } = useProfile();
  const { savaNotification } = useSaveNotifications();

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
      const { reactions, ...newPost } = post;

      newDataInPost = newPost;
    } else {
      const { reactions, ...newPostShared } = post?.postShared;

      newDataInPostShare = newPostShared;
    }

    const dataToShare = post?.isShared
      ? { ...newDataInPostShare }
      : { ...newDataInPost };

    try {
      const dataPostShare = await addDoc(collection(firebaseDB, "posts"), {
        date: new Date().getTime(),
        displayName,
        listTagFriends,
        post: updatePost,
        postShared: { ...dataToShare },
        postSharedIdDoc: post.idDoc,
        privacity,
        howManyPeopleSharePost: 0,
        uid,
        isShared: true,
      });

      await updateDoc(doc(firebaseDB, "posts", post.idDoc), {
        howManyPeopleSharePost: Number(post.howManyPeopleSharePost) + 1,
      });

      toast.success("Compartiste esta publicación");
      setStartLoading(false);
      setOpenSharePost(false);

      await savaNotification({
        dataToSave: "",
        idToSaveDocument: dataPostShare.id,
        typeNotifi: "share",
        uidUserReceiveNotifi: post.uid,
      });
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
