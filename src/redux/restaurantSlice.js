import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// For calling APIs in redux/slice we use Thunk
// Thunk is a method provided by redux to make api calls
// API calls are asynchronous function, so thunk make use of, concept of Promise

// function to call API
export const fetchResturant = createAsyncThunk('restaurantList/fetchResturant',()=>{
    const result = axios.get('/restaurant.json').then(response=>response.data);
    return result;
});

const restaurantSlice= createSlice({
    name:"restaurantList",
    initialState:{
        loading:false, // pending
        allRestuarant:[], // resolve
        error:"", // reject
        searchResturant:[],
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchResturant.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(fetchResturant.fulfilled,(state,action)=>{
            state.loading = false
            state.allRestuarant = action.payload
            state.searchResturant = action.payload
            state.error = ""
        })
        builder.addCase(fetchResturant.rejected,(state,action)=>{
            state.loading = false;
            state.allRestuarant= [];
            state.error = action.error.message
        })
    },
    reducers:{
        search:(state, action)=>{
            state.allRestuarant.restaurants = 
            state.searchResturant.restaurants.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    }

})

export default restaurantSlice.reducer;
export const {search}= restaurantSlice.actions