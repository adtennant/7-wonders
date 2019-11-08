import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Tab,
  Tabs,
  useTheme
} from "@material-ui/core";
import ResultsContainer from "./containers/resultsContainer";
import AddPlayerButtonContainer from "./containers/addPlayerButtonContainer";
import PlayerListContainer from "./containers/playerListContainer";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
import Scorecards from "./components/scorecards";

const tabs = [
  {
    label: "Players",
    children: (
      <>
        <PlayerListContainer />
        <AddPlayerButtonContainer />
      </>
    )
  },
  {
    label: "Scorecard",
    children: <Scorecards />
  },
  {
    label: "Results",
    children: <ResultsContainer />
  }
];

const App = () => {
  const theme = useTheme();

  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "scroll"
      }}
    >
      <AppBar position="static" color="default">
        <Toolbar>
          <ChangeHistoryIcon style={{ marginRight: theme.spacing(2) }} />
          <Typography variant="h6" color="inherit">
            7 Wonders Scorecard
          </Typography>
        </Toolbar>
      </AppBar>

      <AppBar position="static" color="default">
        <Tabs
          indicatorColor="primary"
          onChange={handleChange}
          value={tabIndex}
          variant="fullWidth"
        >
          {tabs.map(tab => (
            <Tab label={tab.label} />
          ))}
        </Tabs>
      </AppBar>

      <div style={{ flexGrow: 1, overflow: "scroll" }}>
        {tabs.map((tab, i) => (
          <Typography component="div" role="tabpanel" hidden={tabIndex !== i}>
            <Box p={2}>{tab.children}</Box>
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default App;
