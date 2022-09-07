import "./App.css";
import { Route, Routes } from "react-router";
import AppContext from "./context/AppContext";
import ListProduct from "./pages/product/list";
import React from "react";
import CreateProduct from "./pages/product/create/index";
import Header from "./pages/header/index";
import UpdateProduct from "./pages/product/update";
const globalState = [
  {
    name: "IP12",
    price: 100,
  },
  {
    name: "IP13",
    price: 100,
  },
];

function App() {
  return (
    <AppContext.Provider value={globalState}>
      <>
        <Header />
        <Routes>
          <Route path="home" element={<ListProduct />} />
          <Route path="products" element={<CreateProduct />} />
          <Route path="home/update/:id" element={<UpdateProduct />} />
        </Routes>
      </>
    </AppContext.Provider>
  );
}

export default App;
