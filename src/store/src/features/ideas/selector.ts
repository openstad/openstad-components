import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../reducers";

const ideas = (state: RootState) => state.ideas

export const getIdeas = createSelector(
  [ideas],
  (ideas) => {
    return ideas;
  }
)

export const getVisibleIdeas = createSelector(
  [ideas],
  (ideas) => {
    // Todo: filter visible ideas
    return ideas;
  }
)

export const getListedIdeas = createSelector(
  [ideas],
  (ideas) => {
    // Todo: filter listed ideas
    return ideas;
  }
)
