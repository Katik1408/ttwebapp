import { createSlice } from "@reduxjs/toolkit";

export const accessEnquirySlice = createSlice({
   name: "AccessEnquiry",
   initialState: {
      value: false
   },
   reducers: {
      activeEnquiry: (state) => {
         state.value = true
      },
      deactiveEnquiry: (state) => {
         state.value = false
      }
   }
})

export const { activeEnquiry, deactiveEnquiry } = accessEnquirySlice.actions;
export default accessEnquirySlice.reducer;