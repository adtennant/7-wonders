import React from "react";
import { IScorecardResult } from "../state/ducks/scorecard/types";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";

interface IScorecardResultCategory {
  key: keyof IScorecardResult;
  label: string;
  backgroundColor: string;
}

const categories: IScorecardResultCategory[] = [
  {
    key: "military",
    label: "Military",
    backgroundColor: "#d72025"
  },
  {
    key: "money",
    label: "Money",
    backgroundColor: "#a98e6b"
  },
  { key: "debt", label: "Debt", backgroundColor: "#8e7d67" },
  {
    key: "wonder",
    label: "Wonder",
    backgroundColor: "#dfcc3f"
  },
  {
    key: "civic",
    label: "Civic",
    backgroundColor: "#2276cf"
  },
  {
    key: "commerce",
    label: "Commerce",
    backgroundColor: "#e5a53e"
  },
  {
    key: "science",
    label: "Science",
    backgroundColor: "#1a7b2f"
  },
  {
    key: "guilds",
    label: "Guilds",
    backgroundColor: "#942694"
  },
  {
    key: "leaders",
    label: "Leaders",
    backgroundColor: "#bcbcbc"
  },
  {
    key: "cities",
    label: "Cities",
    backgroundColor: "#545454"
  },
  {
    key: "babel",
    label: "Babel",
    backgroundColor: "#837300"
  },
  {
    key: "projects",
    label: "Projects",
    backgroundColor: "#9f3f2a"
  }
];

type Props = {
  results: IScorecardResult[];
};

const Scorecard: React.FC<Props> = ({ results }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="center" colSpan={categories.length}>
            Scores
          </TableCell>
          <TableCell align="center">Total</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {results
          .sort((a, b) => b.total - a.total)
          .map(result => (
            <TableRow key={result.id}>
              <TableCell component="th" scope="row">
                {result.name}
              </TableCell>
              {categories.map(category => (
                <TableCell
                  align="center"
                  style={{
                    backgroundColor: category.backgroundColor,
                    color: "white"
                  }}
                >
                  {String(result[category.key])}
                </TableCell>
              ))}
              <TableCell align="center">{result.total}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default Scorecard;
