import {createSlice} from "@reduxjs/toolkit";


interface IInitialState {
  text: string
}

const initialState: IInitialState = {
  text: "Hello people"
}


export const indexSlice = createSlice({
  name: 'indexSlice',
  initialState,
  reducers: {}
})


export default indexSlice.reducer;