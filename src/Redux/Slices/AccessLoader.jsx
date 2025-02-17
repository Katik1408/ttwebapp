import { createSlice } from "@reduxjs/toolkit";


export const accessLoaderSlice = createSlice({
   name: "AccessLoader",
   initialState: {
      value: false
   },
   reducers: {
      activeLoader: (state) => {
         state.value = true
      },
      deactiveLoader: (state) => {
         state.value = false
      }
   }
})

export const { activeLoader, deactiveLoader } = accessLoaderSlice.actions;
export default accessLoaderSlice.reducer;