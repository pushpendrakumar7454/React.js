import React from "react";
import Section from "../pages/Section";
import Product from "../pages/Product";
import CategorySection from "./CategorySection";
import TopProducts from "./TopProducts";

const Main = () => {
  return (
    <>
      <Section />
      <Product />
      <CategorySection />
      <TopProducts />
    </>
  );
};

export default Main;