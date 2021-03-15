import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Idea, IdeaState } from "./types";
import { fetchIdeas } from "./middlewares";

const initialState = {
  ideas: [],
} as IdeaState

const ideasSlice = createSlice({
  name: 'ideas',
  initialState,
  reducers: {
    setIdeas (state: IdeaState, action: PayloadAction<Idea[]>) {
      state.ideas = action.payload
    },
    addIdea (state: IdeaState, action: PayloadAction<Idea>) {
      const idea = action.payload
      state.ideas.push(idea)
    },
    removeIdea (state: IdeaState, action: PayloadAction<number>) {
      state.ideas.splice(state.ideas.findIndex(idea => idea.id === action.payload), 1);
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchIdeas.fulfilled, (state: IdeaState, action: PayloadAction<Idea[]>) => {
      state.ideas = action.payload
    })
  }
})

export const {
  setIdeas,
  addIdea,
} = ideasSlice.actions

export default ideasSlice.reducer
