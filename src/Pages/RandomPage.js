import React from "react";
import CustomDrawer from "../components/CustomDrawer";

import Random from "../components/Random";

const RandomPage = () => {
  return (
    <div>
      <h1 className="text-[50px] p-[50px]">Random Meal</h1>
      <CustomDrawer />
      <Random />
    </div>
  );
};

export default RandomPage;
