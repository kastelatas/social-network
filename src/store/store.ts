import {combineReducers, configureStore} from "@reduxjs/toolkit";
import AuthSlice from "./reducers/Auth/AuthSlice";
import ChatsSlice from "./reducers/Chats/ChatsSlice";
import CommentsSlice from "./reducers/Comments/CommentsSlice";
import GroupsSlice from "./reducers/Groups/GroupsSlice";
import PostsSlice from "./reducers/Posts/PostsSlice";

const rootReducer = combineReducers({
  AuthSlice,
  ChatsSlice,
  CommentsSlice,
  GroupsSlice,
  PostsSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']