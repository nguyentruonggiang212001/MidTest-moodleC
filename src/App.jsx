import HomePage from "./assets/pages/HomePage";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./assets/pages/NotFoundPage";
import ProductsTable from "./assets/pages/ProductsTable";
import { ProductsProvider } from "./assets/contexts/ProductsContext";
import Header from "./assets/pages/Header";
import LoginPage from "./assets/pages/LoginPage";

const App = () => {
  return (
    <>
      <Header />
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsTable />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ProductsProvider>
    </>
  );
};

export default App;
