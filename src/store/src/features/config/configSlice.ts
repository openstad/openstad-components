import { createSlice } from '@reduxjs/toolkit'
import { ConfigState } from "./types";

const initialState = { api: {} } as ConfigState

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {}
})

export default configSlice.reducer
