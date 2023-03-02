import {configureStore} from "@reduxjs/toolkit"
import  typespeedSlice  from "./typespeedSlice"
export const store = configureStore({
    reducer:{
        typespeed: typespeedSlice,
    }
})