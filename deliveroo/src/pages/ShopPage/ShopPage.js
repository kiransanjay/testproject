import React, { useEffect, useState } from "react";
import NavBar from "../../components/Header/NavBar";
import Footer from "../../components/Footer/Footer";
import Tossed from "../../assets/images/Tossed.jpeg";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Divider } from "@mui/material";
import axios from "axios";
import StarIcon from "@material-ui/icons/Star";
import MenuTabs from "../../components/Header/MenuTabs";

function ShopPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataRestaurant = async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlzR29vZ2xlIjpmYWxzZSwiaXNGYiI6ZmFsc2UsImlkIjo0ODc0LCJjb3VudHJ5Q29kZSI6IiIsInJvbGUiOiJ1c2VyIiwiZ3Vlc3RVc2VySWQiOiIzMmU1ZDEwMi00ZDNmLTQ1ZmUtOWFjYS1hYjVlYTJhNzc3MWMiLCJwbGF0Zm9ybSI6IldFQiIsInVwZGF0ZWRBdCI6IjIwMjItMDctMjlUMTA6MTU6MzAuNTg4WiIsImNyZWF0ZWRBdCI6IjIwMjItMDctMjlUMTA6MTU6MzAuNTg4WiIsInVzZXJUeXBlIjoiR1VFU1QifSwiaWF0IjoxNjU5MDg5NzMwfQ.gEIGKPpmipBSOzIZfRmlBikZodKp3usqTrZSNqztTRE";

      const requestBodyRestaurant = {
        lat: "1.305119",
        long: "103.822847",
        restModule: "PickUp",
        uuid: "e9a92fa0-82af-479b-9450-07d7de46c26a",
      };

      try {
        const responseRestaurant = await axios.post(
          "https://qaconsumerapi.eatmeglobal.org/api/v1/restaurantDetails?countryCode=SG",
          requestBodyRestaurant,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        const responseDataRestaurant = responseRestaurant.data;
        setData(responseDataRestaurant);
        console.log(responseDataRestaurant);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataRestaurant();
  }, []);

  //   useEffect(() => {
  //     const fetchDataMenu = async () => {
  //       const token =
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlzR29vZ2xlIjpmYWxzZSwiaXNGYiI6ZmFsc2UsImlkIjo0ODc0LCJjb3VudHJ5Q29kZSI6IiIsInJvbGUiOiJ1c2VyIiwiZ3Vlc3RVc2VySWQiOiIzMmU1ZDEwMi00ZDNmLTQ1ZmUtOWFjYS1hYjVlYTJhNzc3MWMiLCJwbGF0Zm9ybSI6IldFQiIsInVwZGF0ZWRBdCI6IjIwMjItMDctMjlUMTA6MTU6MzAuNTg4WiIsImNyZWF0ZWRBdCI6IjIwMjItMDctMjlUMTA6MTU6MzAuNTg4WiIsInVzZXJUeXBlIjoiR1VFU1QifSwiaWF0IjoxNjU5MDg5NzMwfQ.gEIGKPpmipBSOzIZfRmlBikZodKp3usqTrZSNqztTRE";

  //       const requestBodyMenu = {
  //         restModule: "PickUp",
  //         uuid: "e9a92fa0-82af-479b-9450-07d7de46c26a",
  //       };

  //       try {
  //         const responseMenu = await axios.post(
  //           "https://qaconsumerapi.eatmeglobal.org/api/v1/restaurantDetails/getMenuV2?countryCode=SG",
  //           requestBodyMenu,
  //           {
  //             headers: {
  //               Authorization: token,
  //             },
  //           }
  //         );

  //         const responseDataMenu = responseMenu.data;
  //         setData(responseDataMenu);
  //         console.log(responseDataMenu);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchDataMenu();
  //   }, []);

  return (
    <>
      <NavBar />
      <Grid lg={12}>
        <Grid
          lg={10}
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img
            alt=""
            height="231.7px"
            width="411.93px"
            src={data.imagePath}
            style={{ marginLeft: "180px", marginTop: "30px" }}
          />

          <Grid direction="column">
            <Grid>
              <Typography
                style={{
                  display: "flex",
                  fontSize: "38px",
                  fontFamily: "PlexSans",
                  fontWeight: "bold",
                  color: "#000000",
                  marginLeft: "10px",
                  marginTop: "20px",
                  //marginBottom: "320px",
                }}
              >
                {data.name}
              </Typography>
            </Grid>

            <Grid>
              <Typography
                style={{
                  display: "flex",
                  fontSize: "16px",
                  fontFamily: "PlexSans",
                  color: "#000000",
                  marginLeft: "10px",
                  //marginTop: "-320px",
                  //marginBottom: "320px",
                }}
              >
                {data.address}
              </Typography>
            </Grid>
            <Grid>
              <Typography
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontSize: "16px",
                  fontFamily: "PlexSans",
                  color: "#000000",
                  marginLeft: "10px",
                  //marginTop: "-320px",
                  //marginBottom: "320px",
                }}
              ></Typography>
              <Typography
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontSize: "16px",
                  fontFamily: "PlexSans",
                  color: "#000000",
                  marginLeft: "10px",
                  marginTop: "5px",
                  //marginBottom: "320px",
                }}
              >
                <StarIcon style={{ fontSize: "18px", marginTop: "2px" }} />
                {data.rating && data.rating.ratingNumber} (
                {data.rating && data.rating.ratingCount} ratings) ·
                {data.distance} miles away · {data.couponBadge} delivery · £7.00
                minimum
              </Typography>
            </Grid>
          </Grid>
          <Grid>
            <Button
              //onClick={navigateLoginPage}
              variant="outlined"
              //startIcon={<HomeIcon />}
              style={{
                backgroundColor: "#ffffff",
                color: "#000000",
                marginLeft: "20px",
                marginTop: "30px",
                fontFamily: "PlexSans",
                fontSize: "17px",
                textTransform: "none",
              }}
            >
              Start group order
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Divider style={{ marginTop: "30px" }} />
      <MenuTabs />
      <Divider style={{ marginTop: "0px" }} />
      <Grid
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          style={{
            display: "flex",
            fontSize: "14px",
            fontFamily: "PlexSans",
            color: "#585C5C",
            marginLeft: "55px",
            marginTop: "10px",
            //marginBottom: "320px",
          }}
        >
          Adults need around 2000 kcal a day
        </Typography>
      </Grid>
      <Grid
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          style={{
            display: "flex",
            fontSize: "22px",
            fontFamily: "PlexSans",
            fontWeight: "bold",
            color: "#2E3333",
            marginLeft: "55px",
            marginTop: "10px",
            //marginBottom: "320px",
          }}
        >
          Mains
        </Typography>
      </Grid>
      <Footer />
    </>
  );
}

export default ShopPage;
