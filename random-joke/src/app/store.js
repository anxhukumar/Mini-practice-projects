import {configureStore} from "@reduxjs/toolkit";
import jokeReducer from "../features/jokes/jokeSlice";

export const store = configureStore({
    reducer: {
        joke: jokeReducer
    }
});