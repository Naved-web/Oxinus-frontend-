import { useLocation } from "react-router-dom";
import React from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../actions/action";

// Custom ExpandMore component
const ExpandMore = ({ onClick, ariaExpanded, ariaLabel }) => (
  <IconButton onClick={onClick} aria-expanded={ariaExpanded} aria-label={ariaLabel}>
    <ExpandMoreIcon />
  </IconButton>
);

export default function NewCard() {
  const [expanded, setExpanded] = React.useState(false);

  // Use Redux state and dispatch
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleFavoriteClick = (idMeal) => {
    if (favorites.some(item=>item.idMeal===idMeal.idMeal)) {
      dispatch(removeFromFavorites(idMeal));
    } else {
      dispatch(addToFavorites(idMeal));
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const location = useLocation();
  const apiData = location.state?.apiData;

  if (!apiData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-3 max-w-[1440px] w-full mx-auto p-[20px] mt-[40px]">
        {apiData.meals.map((ingredient, index) => (
          <Card
            key={ingredient.idMeal}
            sx={{ maxWidth: 345 }}
            className="p-[20px] m-[20px]"
          >
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
                onClick={() => handleFavoriteClick(ingredient)}
              >
                <FavoriteIcon
                  style={{
                    color: favorites.some(item=>item.idMeal===ingredient.idMeal)
                      ? red[500]
                      : "inherit",
                  }}
                />
              </IconButton>
              <button className="w-[150px] bg-sky-700 text-white h-[50px] m-[30px] rounded-lg">
                Place Order
              </button>

              <ExpandMore
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
      </div>
    </div>
  );
}
