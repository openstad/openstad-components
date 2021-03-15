import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../reducers";

export const fetchIdeas = createAsyncThunk(
  'ideas/fetchIdeas',
  async (userId, { getState }) => {
    console.log('fetch ideas async')
    const state = getState() as RootState
    const response = await fetch(`${ state.config.api }/site/${  state.config.siteId }/idea?includeVoteCount=1&includeArgsCount=1&includeUser=1`)

    return response.json()
  }
)
