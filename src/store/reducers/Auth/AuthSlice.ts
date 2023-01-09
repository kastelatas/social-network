import IUser from "../../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
  user: IUser;
  isLoading: boolean;
  error: string;
}

const initialState: AuthState = {
  user: {
    id: '',
    username: "",
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

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginFetching(state) {
      state.isLoading = true;
    },
    loginFetchingSuccess(state, action: PayloadAction<IUser>) {
      state.isLoading = false;
      state.error = ''
      state.user = action.payload
      const data = {
        username: action.payload.username,
        password: action.payload.password
      }
      localStorage.setItem('token', JSON.stringify(data))
    },
    loginFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload
    },

    signUpFetching(state) {
      state.isLoading = true;
    },
    signUpFetchingSuccess(state, action: PayloadAction<IUser>) {
      state.isLoading = false;
      state.error = ''
      state.user = action.payload
      const data = {
        username: action.payload.username,
        password: action.payload.password
      }
      localStorage.setItem('token', JSON.stringify(data))
    },
    signUpFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload
    },
    clearUser(state) {
      console.log(11)
      state.user = {
        id: '',
        username: "",
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        age: 0,
        avatar:'',
        createdAt: '',
      }
    }
  },
})

export default authSlice.reducer;
