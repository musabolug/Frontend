import {createSlice} from "@reduxjs/toolkit"
import productsJSON from "../../products.json";
const data = productsJSON.products;
export const productsSlice = createSlice({
    name:"products",
    initialState: {
    items:data,
    budget:100000000000,
    initialMoney:100000000000,
    },
    reducers:{
        updateCount: (state,action)=>{
            const {count,id} = action.payload;
            const product =  state.items.find((product) => product.id === id);
            product.count = count;

            let price = 0;

            state.items.map((product) => {
                price += Number(product.count) * Number(product.productPrice);
            })
            state.budget = Number(state.initialMoney) - Number(price);
        }
    },
})

export const {updateCount}= productsSlice.actions;
export default productsSlice.reducer;