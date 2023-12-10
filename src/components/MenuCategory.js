import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const fetchApiData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API fetching error:", error);
    return null;
  }
};

const MenuCategory = () => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("");
  const favorites = useSelector((state) => state.favorites);

  
  const handleMenuClick = async () => {
  //  await renderMenu();
    setSelectedButton("menu");
    navigate("/category" );
  };

  const handleFavoritesClick = async () => {
   //renderMyFavorite();
    setSelectedButton("favorites");
    navigate('/favorites')
  };

  const handleRandomClick = async () => {
 
    navigate("/random")
    setSelectedButton("random");
  };

  return (
    <div>
      <div>
        <div className="max-full flex justify-center items-center m-[20px] mt-[10%] ">
          <div className="m-[50px]">
            <Button
              variant="outlined"
              className={`w-[300px] ${
                selectedButton === "menu" ? "selected" : ""
              } `}
              id="menu"
              onClick={handleMenuClick}
            >
              Menu
            </Button>
          </div>
          <Button
            variant="outlined"
            className={`w-[300px] ${
              selectedButton === "favorites" ? "selected" : ""
            } `}
            id="favorites"
            onClick={handleFavoritesClick}
          >
            My Favorites
          </Button>
        </div>
        <Button
          variant="outlined"
          className={`w-[300px] ${
            selectedButton === "random" ? "selected" : ""
          }`}
          id="random"
          onClick={handleRandomClick}
        >
          Random Meals
        </Button>
      </div>

      
    </div>
  );
};

export default MenuCategory;
