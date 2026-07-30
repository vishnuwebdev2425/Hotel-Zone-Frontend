import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./Cart"

const appStore=configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default appStore;