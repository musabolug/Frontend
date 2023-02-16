import {configureStore} from "@reduxjs/toolkit"
import noteSlice from "./note/noteSlice"
export const store = configureStore({
    reducer:{
        notes: noteSlice
    },
});