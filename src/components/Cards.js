import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { useEffect, useState } from "react";
import { fetchApiData } from "../utils/api";
import { Spinner } from "@material-tailwind/react";

const Cards = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [categories,setCategories] = useState([]);
  const fetchData=async()=>{
    const data = await fetchApiData(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    if(data)
    setCategories(data.categories)
  }
  useEffect(()=>{
   fetchData()
  },[])
 

  // Check if apiData is available before using it
  if (categories.length===0) {
    return <div><Spinner /></div>; // Or any other loading indicator
  }

  const handleCardClick = async (item) => {
    try {
      // Your API call logic here
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${item.strCategory}`
      );
      const data = await response.json();
      console.log(data);

      // Store the API response in state

      // Use navigate to navigate to the new page and pass apiData as state
      navigate("/selectedcategory", { state: { apiData: data } });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="grid grid-cols-3 max-w-[1440px] w-full mx-auto mt-[40px]">
      {categories.map((item) => (
        <div
          key={item.idCategory}
          onClick={() => handleCardClick(item)}
          className="p-[20px]"
        >
          {/* Use a div or button to handle onClick, rather than Link */}
          <Card variant="outlined" sx={{ width: 320 }} id="Card">
            <CardOverflow>
              <AspectRatio ratio="2">
                <img
                  src={item.strCategoryThumb || "No image"}
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="title-md">
                {/* You can keep using Typography and Link as needed */}
                <span>{item.strCategory || "No Description"}</span>
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Cards;
