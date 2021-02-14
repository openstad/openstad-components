import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import rootReducer, { RootState } from './src/reducers'
import { DeepPartial } from "redux";

const store = (preloadedState: DeepPartial<RootState>): EnhancedStore => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
}

export {
  store as default,
  store as OpenstadStore
};
