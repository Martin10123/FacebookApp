import { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import { CardComment } from "../CardComment/CardComment";
import { EditComment } from "../EditComment/EditComment";
import { firebaseDB } from "../../../services";
import { LayoutComment } from "../Layout/LayoutComment";
import { usePreventScroll } from "../../../hooks";
import { addPhotoToCloudinary } from "../../../helpers";

export const BoxComments = ({
  infoUserActive,
  post,
  setOpenCommentsPost,
  userCreatePost,
  users,
}) => {
  usePreventScroll();
  const [openUpdateComment, setOpenUpdateComment] = useState(false);
  const [inputComment, setInputComment] = useState("");
  const [startLoading, setStartLoading] = useState(false);
  const [startLoadingComments, setStartLoadingComments] = useState(true);
  const [getComments, setGetComments] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef();

  const onSubmitComment = async () => {
    if (inputComment.trim().length === 0 && !selectedImage) return;

    setStartLoading(true);

    let fileComment;

    if (selectedImage) {
      fileComment = await addPhotoToCloudinary(selectedImage);
    }

    try {
      await addDoc(collection(firebaseDB, "comments"), {
        comment: inputComment,
        date: new Date().getTime(),
        uidUser: infoUserActive.uid,
        idPost: post.idDoc,
        photoComment: fileComment || null,
      });

      setStartLoading(false);
      toast.success("Agregaste un nuevo comentario");
      setInputComment("");
      setSelectedImage("");
    } catch (error) {
      console.error(error);
      setStartLoading(false);
    }
  };

  const onFileInputchange = ({ target }) => {
    if (target.files.length === 0) return;

    setSelectedImage(target.files[0]);
  };

  useEffect(() => {
    const queryFire = query(
      collection(firebaseDB, "comments"),
      where("idPost", "==", post.idDoc)
    );

    const unSuscribed = onSnapshot(queryFire, (comments) => {
      const arrayComments = comments.docs.map((doc) => {
        return {
          idComment: doc.id,
          ...doc.data(),
        };
      });

      setGetComments([...arrayComments]);
      setStartLoadingComments(false);
    });

    return () => unSuscribed();
  }, []);

  return (
    <>
      <LayoutComment
        fileInputRef={fileInputRef}
        infoUserActive={infoUserActive}
        onchangeInput={setInputComment}
        onCloseComment={() => setOpenCommentsPost(false)}
        onFileInputchange={onFileInputchange}
        onSubmitFormButton={onSubmitComment}
        placeholderInput="Comentar..."
        post={post}
        selectedImage={selectedImage}
        showButtonReaction={true}
        showIconReactionsCount={true}
        startLoading={startLoading}
        titleModal={`Publicación de ${userCreatePost.displayName}`}
        valueInput={inputComment}
      >
        {startLoadingComments && (
          <div className="loading_box_dimension">
            <div className="spinner"></div>
          </div>
        )}

        {getComments.map((comment) => (
          <CardComment
            comment={comment}
            infoUserActive={infoUserActive}
            key={comment.idComment}
            users={users}
          />
        ))}

        {openUpdateComment && <EditComment />}
      </LayoutComment>
    </>
  );
};
