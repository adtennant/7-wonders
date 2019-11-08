import { IApplicationState } from "..";
import { IScorecardResult } from "./types";
import { createSelector } from "reselect";
import _ from "lodash";

export const getEntries = (state: IApplicationState) => state.scorecard.entries;

interface IScienceValues {
  gears: number;
  compasses: number;
  tablets: number;
  wildcards: number;
}

const calculateScience = ({ wildcards, ...values }: IScienceValues) => {
  return new Array<number>(wildcards)
    .fill(0) //[0, 1]
    .reduce(
      results => {
        return [
          ...results.flatMap(result => [
            { ...result, gears: result.gears + 1 },
            { ...result, compasses: result.compasses + 1 },
            { ...result, tablets: result.tablets + 1 }
          ])
        ];
      },
      [values]
    )
    .map(
      ({ gears, compasses, tablets }) =>
        gears * gears +
        compasses * compasses +
        tablets * tablets +
        Math.min(gears, compasses, tablets) * 7
    )
    .sort((a, b) => b - a)[0];
};

export const getResults = createSelector(
  getEntries,
  (entries): IScorecardResult[] =>
    entries
      .map(entry => ({
        ..._.pick(entry, [
          "id",
          "name",
          "military",
          "debt",
          "wonder",
          "civic",
          "commerce",
          "guilds",
          "leaders",
          "cities",
          "babel",
          "projects"
        ]),
        money: Math.floor(entry.coins / 3),
        science: calculateScience(entry)
      }))
      .map(entry => ({
        ...entry,
        total:
          entry.military +
          entry.money +
          entry.debt +
          entry.wonder +
          entry.civic +
          entry.commerce +
          entry.science +
          entry.guilds +
          entry.leaders +
          entry.cities +
          entry.babel +
          entry.projects
      }))
);
