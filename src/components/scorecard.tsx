import React from "react";
import { IScorecardEntry } from "../state/ducks/scorecard/types";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField
} from "@material-ui/core";

export interface IScorecardField {
  key: keyof IScorecardEntry;
  label: React.ReactNode;
}

type Props = {
  entries: IScorecardEntry[];
  fields: IScorecardField[];
  onChangeEntry: (id: string, key: string, value: number) => void;
};

const Scorecard: React.FC<Props> = ({ entries, fields, onChangeEntry }) => {
  return (
    <Table style={{ tableLayout: "fixed" }}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          {fields.map(field => (
            <TableCell key={field.key} align="center">
              {field.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {entries.map(entry => (
          <TableRow key={entry.id}>
            <TableCell component="th" scope="row">
              {entry.name}
            </TableCell>
            {fields.map(field => (
              <TableCell key={field.key} align="center">
                <TextField
                  defaultValue={0}
                  fullWidth
                  inputProps={{ style: { textAlign: "center" } }}
                  onChange={e => {
                    const parsed = parseInt(e.target.value, 10);
                    onChangeEntry(
                      entry.id,
                      field.key,
                      !isNaN(parsed) ? parsed : 0
                    );
                  }}
                  type="number"
                />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Scorecard;
