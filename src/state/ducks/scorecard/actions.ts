import { createStandardAction } from "typesafe-actions";

export const addPlayer = createStandardAction("@@scorecard/ADD_PLAYER")<
  string
>();

export const editEntry = createStandardAction("@@scorecard/EDIT_ENTRY")<{
  id: string;
  key: string;
  value: number;
}>();
