import { createSlice } from "@reduxjs/toolkit";

export const RecruiterVerifySlice = createSlice({
   name: "RecruiterVerify",
   initialState: {
      value: false
   },
   reducers: {
      isRecuiter: (state) => {
         state.value = true
      },
      isNotRecuiter: (state) => {
         state.value = false
      }
   }
})

export const { isRecuiter, isNotRecuiter } = RecruiterVerifySlice.actions;
export default RecruiterVerifySlice.reducer;