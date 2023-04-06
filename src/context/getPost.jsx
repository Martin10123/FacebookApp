import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { firebaseDB } from "../services";

export const GetPostsContext = createContext();

export const GetPostsProvider = ({ children }) => {
  const [getPosts, setGetPosts] = useState([]);
  const [startLoading, setStartLoading] = useState(true);

  useEffect(() => {
    const queryFire = query(
      collection(firebaseDB, "posts"),
      orderBy("date", "desc")
    );

    const unSuscribed = onSnapshot(queryFire, (posts) => {
      const arrayPosts = posts.docs.map((doc) => {
        return {
          idDoc: doc.id,
          ...doc.data(),
        };
      });
      setGetPosts([...arrayPosts]);
      setStartLoading(false);
    });

    return () => unSuscribed();
  }, []);

  const providerState = {
    getPosts,
    startLoading,
  };

  return (
    <GetPostsContext.Provider value={providerState}>
      {children}
    </GetPostsContext.Provider>
  );
};
