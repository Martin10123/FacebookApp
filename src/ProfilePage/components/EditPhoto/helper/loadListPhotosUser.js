import { listAll, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase/firebaseConfig";

export const loadListPhotosUser = async ({ username, typePhoto }) => {
  try {
    const listRef = ref(storage, `${typePhoto}/${username}`);
    const { items } = await listAll(listRef);

    const urlsAndRef = await Promise.all(
      items.map(async (itemRef) => {
        try {
          const url = await getDownloadURL(itemRef);
          return {
            url,
            ref: itemRef,
          };
        } catch (error) {
          console.error(error);
          return null;
        }
      })
    );

    return urlsAndRef.filter((data) => data !== null);
  } catch (error) {
    console.error(error);
    return [];
  }
};
