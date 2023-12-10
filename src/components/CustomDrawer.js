import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const CustomDrawer = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box className="flex">
      <Checkbox
        id="drawer-toggle"
        className="relative sr-only peer"
        checked={drawerOpen}
        onChange={toggleDrawer}
      />
      <label
        htmlFor="drawer-toggle"
        className="absolute top-0 left-0 inline-block p-4 transition-all duration-500 bg-white rounded-lg peer-checked:rotate-180 peer-checked:left-64"
      >
        <MenuIcon fontSize="large" style={{ color: "black" }} />
      </label>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        className="transition-all duration-500 transform peer-checked:translate-x-0"
      >
        <Box className="w-64 h-full bg-white shadow-lg">
          <div className="px-6 py-4">
            <NavLink
              to="/"
              className="block p-[15px] pt-[100px] text-black"
              onClick={() => {
                toggleDrawer();
              }}
            >
              Home
            </NavLink>
            <NavLink
              // to="/category"
              className="block p-[15px] text-black"
              to="/category"
              onClick={() => {
                toggleDrawer();
              }}
            >
              Menu
            </NavLink>
            <NavLink
              to="/favorites"
              className="block p-[15px] text-black"
              onClick={() => {
               
                toggleDrawer();
              }}
            >
              Favorites
            </NavLink>
            <NavLink
               to="/random"
              className="block p-[15px] text-black"
              onClick={() => {
                toggleDrawer();
              }}
            >
              Random
            </NavLink>
          </div>
          <div className="absolute bottom-4 left-4 p-[15px]">
            <NavLink
              to="/about"
              className="block text-black"
              onClick={toggleDrawer}
            >
              About
            </NavLink>
          </div>
          {/* Render the MenuIcon inside the Drawer */}
          <div className="absolute top-4 right-4">
            <Checkbox
              id="drawer-toggle-inside"
              className="relative sr-only"
              checked={drawerOpen}
              onChange={toggleDrawer}
            />
            <label htmlFor="drawer-toggle-inside" className="p-2">
              <MenuIcon fontSize="large" style={{ color: "black" }} />
            </label>
          </div>
        </Box>
      </Drawer>
    </Box>
  );
};

export default CustomDrawer;
