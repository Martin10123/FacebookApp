import { collection, onSnapshot } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { firebaseDB } from "../services";

export const GetUsers_MessagesContext = createContext();

export const GetUsers_MessagesProvider = ({ children }) => {
  const [getUsersMessages, setGetUsersMessages] = useState([]);
  const [getMessages, setGetMessages] = useState([]);

  useEffect(() => {
    const queryFire = collection(firebaseDB, "usersChats");

    const unSuscribed = onSnapshot(queryFire, (users) => {
      const usersMessages = users.docs.map((doc) => {
        return {
          idDoc: doc.id,
          ...doc.data(),
        };
      });
      setGetUsersMessages([...usersMessages]);
    });

    return () => unSuscribed();
  }, []);

  useEffect(() => {
    const queryFire = collection(firebaseDB, "messages");

    const unSuscribed = onSnapshot(queryFire, (messages) => {
      const arrayMessages = messages.docs.map((doc) => {
        return {
          idMessage: doc.id,
          ...doc.data(),
        };
      });

      setGetMessages([...arrayMessages]);
    });

    return () => unSuscribed();
  }, []);

  const providerState = {
    getUsersMessages,
    getMessages,
  };

  return (
    <GetUsers_MessagesContext.Provider value={providerState}>
      {children}
    </GetUsers_MessagesContext.Provider>
  );
};
