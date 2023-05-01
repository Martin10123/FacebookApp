import { useContext, useEffect, useRef, useState } from "react";
import { doc, setDoc } from "firebase/firestore";

import { firebaseDB } from "../../../../../services";
import { AuthUserContext } from "../../../../../context";

export const useCardMessages = ({
  imgDesk,
  message,
  combinedUid,
  idMessage,
  userMessage,
}) => {
  const [openOptions, setOpenOptions] = useState(false);
  const { infoUserActive, users } = useContext(AuthUserContext);
  const imageDesk = imgDesk ? "message__image_desk" : "";
  const isUserActive = message.uid === infoUserActive.uid;
  const ref = useRef();

  const infoMessage = isUserActive
    ? "message__me_user_active"
    : "message__me_user_other";

  const messageIsLeftOrRight = isUserActive
    ? "message__info_message_active"
    : "message__info_message_other";

  const contentInfoMessageIsLeftOrRight = isUserActive
    ? "message__message_active"
    : "message__message_user_other";

  const deleteForMyIncludesUserActive = message?.deleteForMy?.includes(
    infoUserActive.uid
  );

  const showUserWriteInGroup = users.find((user) => {
    if (
      userMessage?.usersFriends?.includes(user.uid) &&
      user.uid === message.uid
    ) {
      return user;
    }
  });

  useEffect(() => {
    const onIsView = async () => {
      if (infoUserActive.uid !== message.uid) {
        await setDoc(
          doc(firebaseDB, "messages", combinedUid),
          {
            [idMessage]: { isView: true },
          },
          { merge: true }
        );
      }

      const usernameIs =
        infoUserActive.uid === message.uid
          ? message.usernameOtherUser
          : message.username;

      const isGroup = userMessage?.isGroup ? message.idUniqGroup : usernameIs;

      await setDoc(
        doc(firebaseDB, "usersChats", infoUserActive?.uid),
        {
          [isGroup]: { ["infoUser"]: { isView: true } },
        },
        { merge: true }
      );
    };

    onIsView();

    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return {
    deleteForMyIncludesUserActive,
    infoUserActive,
    isUserActive,
    openOptions,
    ref,
    showUserWriteInGroup,

    // Styles
    contentInfoMessageIsLeftOrRight,
    imageDesk,
    infoMessage,
    messageIsLeftOrRight,
    setOpenOptions,
  };
};
