import { useContext } from "react";
import { AuthUserContext, GetUsers_MessagesContext } from "../../../context";
import { GetNotificationContext } from "../../WindownNotifications/context/GetNotifications";

export const useCountMessageNotifi = () => {
  const { getUsersMessages } = useContext(GetUsers_MessagesContext);
  const { getNotifications } = useContext(GetNotificationContext);
  const { infoUserActive } = useContext(AuthUserContext);

  const getMessageCount = () => {
    let messageCount = 0;

    const findMessagesUser = getUsersMessages
      .filter((userMessage) => userMessage.idDoc === infoUserActive?.uid)
      .map(({ idDoc, ...rest }) => rest);

    Object.entries(findMessagesUser[0] || {}).filter((cMessage) => {
      if (!cMessage[1].infoUser.isView) {
        messageCount++;
      }
    });

    return messageCount;
  };

  const getCountNotifications = () => {
    let notifiCount = 0;

    const findMessagesUser = getNotifications.find(
      (notifiFound) => notifiFound.idDoc === infoUserActive?.uid
    );

    Object.entries(findMessagesUser?.notifications || {}).filter((notifi) => {
      if (!notifi[1].view) {
        notifiCount++;
      }
    });

    return notifiCount;
  };

  return {
    getMessaCount: getMessageCount(),
    getNotifiCount: getCountNotifications(),
  };
};
