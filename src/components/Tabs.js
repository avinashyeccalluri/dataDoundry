import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import Table from "./Table";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container" id="tabs_container">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Drug Event" {...a11yProps(0)} />
            <Tab label="Signal Prioritization & Timelines" {...a11yProps(1)} />
            <Tab label="Risk Review - RBR" {...a11yProps(2)} />
            <Tab label="Potential Risks" {...a11yProps(3)} />
            <Tab label="Validated Risks" {...a11yProps(4)} />
            <Tab label="Signals" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Table />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Signal Prioritization & Timelines
        </TabPanel>
        <TabPanel value={value} index={2}>
          Risk Review - RBR
        </TabPanel>
        <TabPanel value={value} index={3}>
          Potential Risks
        </TabPanel>
        <TabPanel value={value} index={4}>
          Validated Risks
        </TabPanel>
        <TabPanel value={value} index={5}>
          Signals
        </TabPanel>
      </Box>
    </div>
  );
}
