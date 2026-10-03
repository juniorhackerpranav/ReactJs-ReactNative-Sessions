import { configureStore } from "@reduxjs/toolkit"
import fruitsSlice from "./fruitsSlice";

export const store = configureStore({
    reducer: {
        fruit: fruitsSlice.reducer,
    }
});