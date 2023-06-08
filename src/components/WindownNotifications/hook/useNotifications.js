import { useContext } from "react";
import { AuthUserContext } from "../../../context";
import { GetNotificationContext } from "../context/GetNotifications";

export const useNotifications = () => {
  const { infoUserActive, users } = useContext(AuthUserContext);
  const { getNotifications } = useContext(GetNotificationContext);

  const updatedNotifications = getNotifications.find(
    (notifi) => notifi.idDoc === infoUserActive.uid
  );

  return { updatedNotifications, users };
};
