import { useContext, useEffect, useMemo, useState } from "react";
import { getProductByAny } from "../helpers";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { firebaseDB } from "../../../services";
import { AuthUserContext } from "../../../context";

export const useMainStore = () => {
  const { users, infoUserActive } = useContext(AuthUserContext);

  const [openSideBar, setOpenSideBar] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    const docRef = query(
      collection(firebaseDB, "storeApp"),
      orderBy("name", "asc")
    );

    const unSuscribed = onSnapshot(docRef, (product) => {
      const productsColection = product.docs.map((doc) => {
        return {
          idDoc: doc.id,
          ...doc.data(),
        };
      });

      setProducts(productsColection);
      setLoadingProducts(false);
    });

    return () => unSuscribed();
  }, []);

  const productsFilter = useMemo(
    () => getProductByAny(products, searchProduct),
    [products, searchProduct]
  );

  return {
    // Atributos
    infoUserActive,
    loadingProducts,
    openSideBar,
    productsFilter,
    searchProduct,
    users,

    // Metodos
    setOpenSideBar,
    setSearchProduct,
  };
};
