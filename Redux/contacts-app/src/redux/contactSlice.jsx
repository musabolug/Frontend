import {createSlice, createEntityAdapter} from "@reduxjs/toolkit"
 
export const contactAdaptor = createEntityAdapter();
const initialState = contactAdaptor.getInitialState();
export const contactSelectors = contactAdaptor.getSelectors((state)=> state.contacts)
const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: contactAdaptor.addOne,
        deleteContact: contactAdaptor.removeOne,
        removeAllContacts: contactAdaptor.removeAll,
    },
})
export const {addContact,deleteContact,removeAllContacts} = contactSlice.actions;
export default contactSlice.reducer;