import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import axios from "axios";
import Box from "@mui/material/Box";

function MenuTabs() {
  const [data, setData] = useState([]);
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    const fetchDataCategory = async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlzR29vZ2xlIjpmYWxzZSwiaXNGYiI6ZmFsc2UsImlkIjo0ODc0LCJjb3VudHJ5Q29kZSI6IiIsInJvbGUiOiJ1c2VyIiwiZ3Vlc3RVc2VySWQiOiIzMmU1ZDEwMi00ZDNmLTQ1ZmUtOWFjYS1hYjVlYTJhNzc3MWMiLCJwbGF0Zm9ybSI6IldFQiIsInVwZGF0ZWRBdCI6IjIwMjItMDctMjlUMTA6MTU6MzAuNTg4WiIsImNyZWF0ZWRBdCI6IjIwMjItMDctMjlUMTA6MTU6MzAuNTg4WiIsInVzZXJUeXBlIjoiR1VFU1QifSwiaWF0IjoxNjU5MDg5NzMwfQ.gEIGKPpmipBSOzIZfRmlBikZodKp3usqTrZSNqztTRE";

      const requestBodyCategory = {
        restModule: "PickUp",
        uuid: "e9a92fa0-82af-479b-9450-07d7de46c26a",
      };

      try {
        const responseCategory = await axios.post(
          "https://qaconsumerapi.eatmeglobal.org/api/v1/restaurantDetails/getMenuItemsWebApp?countryCode=SG",
          requestBodyCategory,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        const responseDataCategory = responseCategory.data;
        setData(responseDataCategory);
        console.log(responseDataCategory);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataCategory();
  }, []);

  const filteredData = data.filter((item) => item.id !== 5913);

  return (
    <div>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {filteredData.map((item) => (
          <div key={item.id}>
            <p
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "noWrap",
                fontSize: "14px",
                fontFamily: "PlexSans",
                color: "#00B8A9",
                marginRight: "50px",
                cursor: "pointer",
              }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div> */}
      <TabContext value="menu-tabs">
        <Box sx={{ width: "100%" }}>
          <Tabs centered>
            {filteredData.map((item) => (
              <Tab
                key={item.id}
                label={item.title}
                style={{
                  textTransform: "none",

                  fontSize: "14px",
                  fontFamily: "PlexSans",
                  color: "#00B8A9",
                  marginRight: "50px",
                }}
              />
            ))}
          </Tabs>

          {filteredData.map((item) => (
            <TabPanel key={item.id}>
              <div>{item.title}</div>
            </TabPanel>
          ))}
        </Box>
      </TabContext>
    </div>
  );
}

export default MenuTabs;
