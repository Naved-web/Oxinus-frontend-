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
import ExpandMore from "@mui/icons-material/ExpandMore";
import { addToFavorites, removeFromFavorites } from "../actions/action";

const FavoriteCard = () => {
  const [expanded, setExpanded] = React.useState(false);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //    useEffect(()=>{

  //     },[])
  //  console.log(favorites)

  const handleFavoriteClick = (idMeal) => {
    if (favorites.some((item) => item.idMeal === idMeal.idMeal)) {
      dispatch(removeFromFavorites(idMeal));
    } else {
      dispatch(addToFavorites(idMeal));
    }
  };

  if (favorites.length === 0) {
    return <div>Sorry You do not have favorite meels</div>;
  }

  return (
    <div className="mt-[100px]">
      <div className="grid grid-cols-3 max-w-[1440px] w-full mx-auto">
        {favorites.map((ingredient) => (
          <Card
            key={ingredient.idMeal}
            sx={{ maxWidth: 345 }}
            className="p-[10px]"
          >
            <CardMedia
              component="img"
              height="194"
              image={ingredient.strMealThumb}
              alt={ingredient.strMeal}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {ingredient.strInstructions?.slice(0, 150)}...
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={() => handleFavoriteClick(ingredient.idMeal)}
              >
                <FavoriteIcon
                  style={{
                    color: favorites.some(
                      (item) => item.idMeal === ingredient.idMeal
                    )
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
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>{ingredient.strInstructions}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FavoriteCard;
