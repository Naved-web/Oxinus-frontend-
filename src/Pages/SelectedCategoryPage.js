import React from "react";
import NewCard from "../components/NewCard";
import CustomDrawer from "../components/CustomDrawer";

const SelectedCategoryPage = () => {
  return (
    <div>
      <h1 className="text-[50px] p-[50px]">Selected Meal</h1>
      <CustomDrawer />
      <NewCard />
    </div>
  );
};

export default SelectedCategoryPage;
