import { createSlice } from "@reduxjs/toolkit";

const fruitsSlice = createSlice({
    name: "fruit",

    initialState: ["apple", "mango"],

    reducers: {
        addFruit: (state, action) => {
            const initialArray = [...state, action.payload]
            return initialArray;
        },
        emptyFruitArray: () => {
            return []
        }
    }
});

export const { addFruit, emptyFruitArray } = fruitsSlice.actions;

export default fruitsSlice;