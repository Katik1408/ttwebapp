import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

export const cookieRetriveSlice = createSlice({
   name: 'CookieRetrive',
   initialState: {
      value: document.cookie !== "technotutor=" ? (document.cookie.split("=")[0] === "technotutor" ? jwtDecode(document.cookie.split("=")[1]) : document.cookie) : ""
   },
   reducers: {
      decodeCookie: (state, action) => {
         console.log(action.payload)
         console.log(state.value)
         state.value = action.payload ? jwtDecode(action.payload) : action.payload
      }
   }
})

export const { decodeCookie } = cookieRetriveSlice.actions;
export default cookieRetriveSlice.reducer;