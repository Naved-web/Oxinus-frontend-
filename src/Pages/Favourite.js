import React, { useEffect, useState } from "react";
import CustomDrawer from "../components/CustomDrawer";
import { fetchApiData } from "../utils/api";
import { useSelector } from "react-redux";
import FavoriteCard from "../components/FavoriteCard";
import { useLocation } from "react-router-dom";

const Favourite = () => {
 

  return (
    <div>
      <CustomDrawer />
      <h1 className="text-[50px] p-[50px]">Favourite Foods</h1>
     <FavoriteCard  />
    
    </div>
  );
};

export default Favourite;
