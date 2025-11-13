import { configureStore } from "@reduxjs/toolkit"
import maniReducer from './ManiSlice'
import productReducer from './ProductSlice'
export const store = configureStore({
    reducer: {
        mani: maniReducer,
        products:productReducer,
    }
})

