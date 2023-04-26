import { doc, setDoc } from "firebase/firestore";
import { useEffect, useRef } from "react";
import { firebaseDB } from "../../../../../services";

export const useCardMessages = ({
  imgDesk,
  infoUserActive,
  message,
  combinedUid,
  idMessage,
}) => {
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

      await setDoc(
        doc(firebaseDB, "usersChats", infoUserActive?.uid),
        {
          [usernameIs]: { ["infoUser"]: { isView: true } },
        },
        { merge: true }
      );
    };

    onIsView();

    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return {
    ref,
    isUserActive,

    // Styles
    contentInfoMessageIsLeftOrRight,
    imageDesk,
    infoMessage,
    messageIsLeftOrRight,
  };
};
