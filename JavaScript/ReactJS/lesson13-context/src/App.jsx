import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/Home";
import Products from "./pages/Products";
import { ProductProvider } from "./context/ProductContext";

const App = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;
