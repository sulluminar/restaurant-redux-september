import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./restaurantSlice";



const store= configureStore({
    reducer: {
        resturantSlice: restaurantSlice
    }
})
export default store