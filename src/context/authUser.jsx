import { createContext, useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth, firebaseDB } from "../services";
import { collection, onSnapshot } from "firebase/firestore";

export const AuthUserContext = createContext();

export const AuthUserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [friendsEachUsers, setFriendsEachUsers] = useState([]);
  const [userActive, setUserActive] = useState({});
  const [startLoading, setStartLoading] = useState(true);
  const [startLoadingOther, setStartLoadingOther] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        const { displayName, email, uid } = user;

        setUserActive({ email, uid, displayName });

        setIsLoggedIn(true);
        setStartLoading(false);
      } else {
        setIsLoggedIn(false);
        setStartLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    const unSuscribed = onSnapshot(collection(firebaseDB, "users"), (users) => {
      const arrayUsers = users.docs.map((doc) => {
        return {
          idDoc: doc.id,
          ...doc.data(),
        };
      });

      setUsers([...arrayUsers]);
    });

    return () => unSuscribed();
  }, []);

  useEffect(() => {
    const unSuscribed = onSnapshot(
      collection(firebaseDB, "friendsEachUsers"),
      (listUserFriends) => {
        const arrayFriendsEachUsers = listUserFriends.docs.map((doc) => {
          return {
            uidDocUser: doc.id,
            ...doc.data(),
          };
        });

        setFriendsEachUsers([...arrayFriendsEachUsers]);

        setStartLoadingOther(false);
      }
    );

    return () => unSuscribed();
  }, []);

  const searchUserByUsername = (username) => {
    return users?.find((user) => user.username === username);
  };

  const searchFriendListByUid = (uidUser) => {
    return friendsEachUsers?.find(
      (listFriends) => listFriends.uidDocUser === uidUser
    );
  };

  const infoUserActive = users?.find((user) => user.uid === userActive?.uid);
  const currentUserFriendsList = friendsEachUsers?.find(
    (listFriends) => listFriends.uidDocUser === userActive?.uid
  );

  const providerState = {
    friendsEachUsers,
    infoUserActive,
    isLoggedIn,
    searchFriendListByUid,
    searchUserByUsername,
    startLoading,
    startLoadingOther,
    userActive,
    users,
    currentUserFriendsList,
  };

  return (
    <AuthUserContext.Provider value={providerState}>
      {children}
    </AuthUserContext.Provider>
  );
};
