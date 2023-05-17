import React from "react";
import NavBar from "../../components/Header/NavBar";
import Footer from "../../components/Footer/Footer";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Divider } from "@mui/material";

function LoginPage() {
  return (
    <div>
      <NavBar />

      <Grid
        xs={6}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            display: "flex",
            fontSize: "25px",
            fontFamily: "PlexSans",
            fontWeight: "bold",
            color: "#000000",
            marginLeft: "-200px",
            marginTop: "60px",
            marginBottom: "20px",
          }}
        >
          Sign up or log in
        </Typography>
      </Grid>
      <Grid
        xs={6}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: "#4C69BA",
            color: "#FFFFFF",
            fontWeight: "bold",
            marginLeft: "0px",
            marginTop: "0px",
            fontFamily: "PlexSans",
            fontSize: "16px",
            textTransform: "none",
            width: "380px",
          }}
        >
          Continue with Facebook
        </Button>
      </Grid>
      <Grid
        xs={6}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          style={{
            backgroundColor: "#FFFFFF",
            color: "#000000",
            fontWeight: "bold",
            marginLeft: "0px",
            marginTop: "20px",
            fontFamily: "PlexSans",
            fontSize: "16px",
            textTransform: "none",
            width: "380px",
            borderColor: "#000000",
          }}
        >
          Continue with Google
        </Button>
      </Grid>
      <Grid
        xs={6}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Divider
          orientation="horizontal"
          style={{
            width: "380px",
            marginLeft: "0px",
            marginTop: "20px",
            fontFamily: "PlexSans",
            fontSize: "14px",
          }}
        >
          or
        </Divider>
      </Grid>
      <Grid
        xs={6}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: "#00CCBC",
            color: "#FFFFFF",
            fontWeight: "bold",
            marginLeft: "0px",
            marginTop: "20px",
            fontFamily: "PlexSans",
            fontSize: "16px",
            textTransform: "none",
            width: "380px",
          }}
        >
          Continue with email
        </Button>
      </Grid>
      <Grid
        xs={6}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            width: "380px",
            marginLeft: "0px",
            fontFamily: "PlexSans",
            fontSize: "14px",
            color: "#585C5C",
          }}
        >
          By continuing you agree to our T&Cs. Please also check out our Privacy
          Policy. We use your data to offer you a personalised experience and to
          better understand and improve our services. For more information see
          here.
        </p>
      </Grid>
      <Footer />
    </div>
  );
}

export default LoginPage;
