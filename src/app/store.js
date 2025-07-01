import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../routes/Product/productSlice"

export default configureStore({
    reducer: {
        product: productSlice
    }
})