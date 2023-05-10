import React from "react";
import NavBar from "../../components/Header/NavBar";
import Footer from "../../components/Footer/Footer";
import Tossed from "../../assets/images/Tossed.jpeg";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Divider } from "@mui/material";

function ShopPage() {
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
            src={Tossed}
            style={{ marginLeft: "180px", marginTop: "30px" }}
          />

          <Grid direction="column">
            <Grid>
              <Typography
                style={{
                  display: "flex",
                  fontSize: "40px",
                  fontFamily: "PlexSans",
                  fontWeight: "bold",
                  color: "#000000",
                  marginLeft: "10px",
                  marginTop: "20px",
                  //marginBottom: "320px",
                }}
              >
                Tossed - St Martin's Lane
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
                Chicken . Salads . Healthy
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
                4.7 Excellent(500+)·0.20 miles away·Opens at 11:00·£0.99
                delivery·£7.00 minimum
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
                //marginLeft: "1010px",
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
      <Divider 
      style={{ marginTop: "30px" }} 
      />

      <Footer />
    </>
  );
}

export default ShopPage;
