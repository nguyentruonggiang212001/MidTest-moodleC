import { createContext, useEffect, useReducer } from "react";

import instance from "../services";
import { ProductsReducer } from "./../reducer/ProductsReducer";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, { products: [] });

  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/products");
      console.log(data);
      dispatch({ type: "SET_PRODUCTS", payload: data });
    })();
  }, []);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};
