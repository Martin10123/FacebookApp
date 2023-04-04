import { CardComment } from "../CardComment/CardComment";
import { LayoutComment } from "../Layout/LayoutComment";
import { usePreventScroll } from "../../../hooks";
import { useBoxComments } from "./useBoxComments";

export const BoxComments = ({
  infoUserActive,
  post,
  setOpenCommentsPost,
  userCreatePost,
  users,
}) => {
  usePreventScroll();

  const {
    // atributos
    fileInputRef,
    getComments,
    inputComment,
    selectedImage,
    startLoading,
    startLoadingComments,

    // metodos
    onFileInputchange,
    onSubmitComment,
    setInputComment,
  } = useBoxComments({ infoUserActive, post });

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
      </LayoutComment>
    </>
  );
};
