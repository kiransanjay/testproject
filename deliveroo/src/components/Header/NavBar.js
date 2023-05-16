import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Deliveroo-logo.png";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";
import { Divider } from "@mui/material";
import LoginPage from "../../pages/LoginPage/LoginPage";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from '@mui/icons-material/Menu';
import ShopPage from "../../pages/ShopPage/ShopPage";

const useStyles = makeStyles((theme) => ({
  stickyContainer: {
    position: "fixed",
    zIndex: 10,
    top: 43,
    left: 0,
    backgroundColor: "#ffffff",
  },
  link: {
    color: "blue",
    "&:hover": {
      color: "red",
    },
  },
}));

function NavBar() {
  const navigate = useNavigate();

  const navigateLoginPage = () => {
    navigate("/LoginPage");
  };

  const navigateShopPage = () => {
    navigate("/ShopPage");
  }

  
  return (
    <>
      <nav className="navbar">
        <div classname="navbar-container"></div>

        <img
          onClick={navigateLoginPage}
          src={logo}
          alt="logo"
          height="60px"
          width="120px"
          style={{ marginLeft: "180px" }}
        />

        <div>
          <Button
            onClick={navigateLoginPage}
            variant="outlined"
            startIcon={<HomeIcon />}
            style={{
              backgroundColor: "#ffffff",
              color: "#000000",
              marginLeft: "1010px",
              marginTop: "-95px",
              fontFamily: "PlexSans",
              fontSize: "17px",
              textTransform: "none",
            }}
          >
            Sign up or log in
          </Button>
          <Button
            onClick={navigateShopPage}
            variant="outlined"
            endIcon={<MenuIcon />}
            style={{
              backgroundColor: "#ffffff",
              color: "#000000",
              marginLeft: "1205px",
              marginTop: "-133px",
              fontFamily: "PlexSans",
              fontSize: "17px",
              textTransform: "none",
            }}
          >
            Menu
          </Button>
        </div>
        <Divider style={{ marginTop: "-40px" }} />
      </nav>
    </>
  );
}

export default NavBar;
