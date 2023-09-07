import { collection, onSnapshot } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { firebaseDB } from "../services";

export const GetPostsContext = createContext();

export const GetPostsProvider = ({ children }) => {
  const [getPosts, setGetPosts] = useState([]);
  const [startLoading, setStartLoading] = useState(true);

  useEffect(() => {
    const queryFire = collection(firebaseDB, "posts");

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
