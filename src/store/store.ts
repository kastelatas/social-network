import {combineReducers, configureStore} from "@reduxjs/toolkit";
import indexReducer from './reducers/IndexSlice'

const rootReducer = combineReducers({
  indexReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => {
    //   getDefaultMiddleware.concat()
    // }
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']