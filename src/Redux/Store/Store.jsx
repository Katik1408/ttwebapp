import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from '../Slices/AccessLoader';
import enquiryReducer from "../Slices/AccessEnquiry";
import recuiterVerify from "../Slices/RecruiterVerify";
import cookieRetrive from "../Slices/CookieRetrive";

export const store = configureStore({
   reducer: {
      AccessLoader: loaderReducer,
      AccessEnquiry: enquiryReducer,
      RecruiterVerify: recuiterVerify,
      CookieRetrive: cookieRetrive
   }
})