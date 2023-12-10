// components/Random.js
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { red } from "@mui/material/colors";
import { addToFavorites, removeFromFavorites } from "../actions/action";
import { fetchApiData } from "../utils/api";

const ExpandMore = ({ expand, onClick, ariaExpanded, ariaLabel }) => (
  <IconButton
    onClick={onClick}
    aria-expanded={ariaExpanded}
    aria-label={ariaLabel}
  >
    <ExpandMoreIcon expand={expand ? "true" : undefined} />
  </IconButton>
);


const Random = () => {
  const [expanded, setExpanded] = React.useState(false);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const [randomMeels,setRandomMeels]=useState([])
  const fetchRandomMeals = async () => {
    const data = await fetchApiData(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    if (data) {
      console.log("Random Meals Data:", data);
   setRandomMeels(data.meals)
    }
  };
  useEffect(()=>{
    fetchRandomMeals()
  },[])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = (idMeal) => {
    if (favorites.includes(idMeal)) {
      dispatch(removeFromFavorites(idMeal));
    } else {
      dispatch(addToFavorites(idMeal));
    }
  };

  const location = useLocation();
  const apiData = location.state?.apiData;

  if (randomMeels.length===0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-center items-center flex-col w-100 ">
        {randomMeels.map((ingredient) => (
          <Card key={ingredient.idMeal} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image={ingredient.strMealThumb}
              alt={ingredient.strMeal}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {ingredient.strInstructions.slice(0, 150)}...
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={() => handleFavoriteClick(ingredient.idMeal)}
              >
                <FavoriteIcon
                  style={{
                    color: favorites.includes(ingredient.idMeal)
                      ? red[500]
                      : "inherit",
                  }}
                />
              </IconButton>
              <button className="w-[150px] bg-sky-700 text-white h-[50px] m-[30px] rounded-lg">
                Place Order
              </button>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded ? "true" : undefined}
                aria-label="show more"
              />
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>{ingredient.strInstructions}</Typography>
              </CardContent>
            </Collapse>
          </Card>


        ))}

            <button
            onClick={fetchRandomMeals}
             className="w-[150px] bg-sky-700 text-white h-[50px] m-[30px] rounded-lg">
              Genrate
              </button>
      </div>
    </div>
  );
};

export default Random;
