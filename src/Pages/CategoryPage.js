import React from "react";
import Cards from "../components/Cards";
import CustomDrawer from "../components/CustomDrawer";

const CategoryPage = () => {
  return (
    <div>
      <h1 className="text-[50px] p-[50px]">Food Category</h1>
      <CustomDrawer />
      <Cards />
    </div>
  );
};

export default CategoryPage;
