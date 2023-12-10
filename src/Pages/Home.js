import React from "react";

import CustomDrawer from "../components/CustomDrawer";
import MenuCategory from "../components/MenuCategory";

const Home = () => {
  return (
    <div>
      <h1 className="text-[50px] pt-[50px]">Home Page</h1>
      <CustomDrawer/>
      <MenuCategory />
    </div>
  );
};

export default Home;
