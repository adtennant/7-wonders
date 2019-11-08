import React from "react";
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import ScorecardContainer from "../containers/scorecardContainer";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import coin from "./coin.png";
import gear from "./gear.png";
import compass from "./compass.png";
import tablet from "./tablet.png";
import asterisk from "./asterisk.png";

const CardIcon = ({ color }: { color: string }) => (
  <span
    style={{
      display: "inline-block",
      width: "16px",
      height: "24px",
      border: "2px solid black",
      borderRadius: "3px",
      backgroundColor: color
    }}
  ></span>
);

const panels = [
  {
    label: "Military",
    backgroundColor: "#d72025",
    children: (
      <ScorecardContainer
        fields={[
          {
            key: "military",
            label: <CardIcon color="#d72025" />
          }
        ]}
      />
    )
  },
  {
    label: "Money",
    backgroundColor: "#a98e6b",
    children: (
      <ScorecardContainer
        fields={[
          {
            key: "coins",
            label: <img alt="coins" width="24" height="24" src={coin} />
          }
        ]}
      />
    )
  },
  {
    label: "Debt",
    backgroundColor: "#8e7d67",
    children: <ScorecardContainer fields={[{ key: "debt", label: "Points" }]} />
  },
  {
    label: "Wonder",
    backgroundColor: "#dfcc3f",
    children: (
      <ScorecardContainer fields={[{ key: "wonder", label: "Points" }]} />
    )
  },
  {
    label: "Civic",
    backgroundColor: "#2276cf",
    children: (
      <ScorecardContainer
        fields={[{ key: "civic", label: <CardIcon color="#2276cf" /> }]}
      />
    )
  },
  {
    label: "Commerce",
    backgroundColor: "#e5a53e",
    children: (
      <ScorecardContainer
        fields={[
          {
            key: "commerce",
            label: <CardIcon color="#e5a53e" />
          }
        ]}
      />
    )
  },
  {
    label: "Science",
    backgroundColor: "#1a7b2f",
    children: (
      <ScorecardContainer
        fields={[
          {
            key: "gears",
            label: <img alt="gears" width="24" height="24" src={gear} />
          },
          {
            key: "compasses",
            label: <img alt="compasses" width="24" height="24" src={compass} />
          },
          {
            key: "tablets",
            label: <img alt="tablets" width="24" height="24" src={tablet} />
          },
          {
            key: "wildcards",
            label: <img alt="wildcards" width="24" height="24" src={asterisk} />
          }
        ]}
      />
    )
  },
  {
    label: "Guilds",
    backgroundColor: "#942694",
    children: (
      <ScorecardContainer
        fields={[{ key: "guilds", label: <CardIcon color="#942694" /> }]}
      />
    )
  },
  {
    label: "Leaders",
    backgroundColor: "#bcbcbc",
    children: (
      <ScorecardContainer
        fields={[{ key: "leaders", label: <CardIcon color="#bcbcbc" /> }]}
      />
    )
  },
  {
    label: "Cities",
    backgroundColor: "#545454",
    children: (
      <ScorecardContainer
        fields={[{ key: "cities", label: <CardIcon color="#545454" /> }]}
      />
    )
  },
  {
    label: "Babel",
    backgroundColor: "#837300",
    children: (
      <ScorecardContainer fields={[{ key: "babel", label: "Points" }]} />
    )
  },
  {
    label: "Projects",
    backgroundColor: "#9f3f2a",
    children: (
      <ScorecardContainer fields={[{ key: "projects", label: "Points" }]} />
    )
  }
];

const Scorecards = () => {
  const [expanded, setExpanded] = React.useState<string | undefined>(undefined);

  const handleChange = (panel: string) => (
    _: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : undefined);
  };

  return (
    <>
      {panels.map(panel => (
        <ExpansionPanel
          expanded={expanded === panel.label}
          onChange={handleChange(panel.label)}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon style={{ fill: "white" }} />}
            style={{ backgroundColor: panel.backgroundColor, color: "white" }}
          >
            <Typography>{panel.label}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{panel.children}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </>
  );
};

export default Scorecards;
