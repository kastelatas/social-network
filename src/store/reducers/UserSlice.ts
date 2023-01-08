import IUser from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {login} from "./ActionCreators";

interface UserState {
  user: IUser;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  user: {
    id: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    age: 0,
    avatar:'',
    createdAt: '',
  },
  isLoading: false,
  error: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<IUser>) {
      state.isLoading = false;
      state.error = ''
      state.user = action.payload
      localStorage.setItem('token', 'userSUCCES')
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
    }
  },
})

export default userSlice.reducer;
