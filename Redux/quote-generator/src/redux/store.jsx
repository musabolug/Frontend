import { configureStore } from "@reduxjs/toolkit";
import quotesSlice from "./quotesSlice"
export const store = configureStore({
    reducer:{
        quotes : quotesSlice
    }
})