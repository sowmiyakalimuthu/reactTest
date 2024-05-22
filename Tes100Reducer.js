import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {products: [], error: '', detailProduct:[]};

const TestReducer = createSlice({
    name :"testReducer",
    initialState,
    reducers: {
        getApiResponse : (state, action) => {
           state.products=action.payload
           console.log(state.products)
    },
        getApiError : (state, action)=>{
        state.error=action.payload
    },
        getDetailProducts: (state, action)=> {
            state.detailProduct=action.payload
        }
    }
})

export default TestReducer.reducer;
export const {getProducts, getApiError, getApiResponse, getDetailProducts} = TestReducer.actions;
