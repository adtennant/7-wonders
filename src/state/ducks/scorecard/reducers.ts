import { ActionType, createReducer } from "typesafe-actions";
import uuid from "uuid/v4";

import * as actions from "./actions";
import { IScorecardEntry } from "./types";

export interface IScorecardState {
  readonly entries: IScorecardEntry[];
}

export const initialState: IScorecardState = {
  entries: []
};

export type ScorecardAction = ActionType<typeof actions>;

export const scorecardReducer = createReducer<IScorecardState, ScorecardAction>(
  initialState
)
  .handleAction(actions.addPlayer, (state, action) => ({
    ...state,
    entries: [
      ...state.entries,
      {
        id: uuid(),
        name: action.payload,
        military: 0,
        coins: 0,
        debt: 0,
        wonder: 0,
        civic: 0,
        commerce: 0,
        gears: 0,
        compasses: 0,
        tablets: 0,
        wildcards: 0,
        guilds: 0,
        leaders: 0,
        cities: 0,
        babel: 0,
        projects: 0
      }
    ]
  }))
  .handleAction(actions.editEntry, (state, action) => {
    const { id, key, value } = action.payload;

    return {
      ...state,
      entries: state.entries.map(entry =>
        entry.id === id ? { ...entry, [key]: value } : entry
      )
    };
  });
