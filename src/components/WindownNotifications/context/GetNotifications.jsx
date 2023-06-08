import { collection, onSnapshot } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { firebaseDB } from "../../../services";

export const GetNotificationContext = createContext();

export const GetNotificationsProvider = ({ children }) => {
  const [getNotifications, setGetNotifications] = useState([]);

  useEffect(() => {
    const queryFire = collection(firebaseDB, "notifications");

    const unSuscribed = onSnapshot(queryFire, (notifications) => {
      const notifi = notifications.docs.map((doc) => {
        return {
          idDoc: doc.id,
          ...doc.data(),
        };
      });
      setGetNotifications([...notifi]);
    });

    return () => unSuscribed();
  }, []);

  return (
    <GetNotificationContext.Provider value={{ getNotifications }}>
      {children}
    </GetNotificationContext.Provider>
  );
};
