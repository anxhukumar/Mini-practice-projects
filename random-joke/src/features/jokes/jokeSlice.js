    import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
    import axios from "axios";

    const fetchJoke = createAsyncThunk("joke/fetchJoke", async () => {
        const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
        return response.data;
    })

    const initialState = {
        joke:{},
        loading:false,
        error: null
    }

    export const jokeSlice = createSlice({
        name: "joke",
        initialState,
        reducers:{},
        extraReducers:(builder) => {
            builder

                .addCase(fetchJoke.pending, (state) => {
                    state.loading = true
                    state.error  = null
                })
                .addCase(fetchJoke.fulfilled, (state, action) => {
                    state.loading = false
                    state.joke = action.payload
                    state.error = null
                })
                .addCase(fetchJoke.rejected, (state, action ) => {
                    state.loading = false
                    state.error = action.error.message || "Error in fetching data!"
                })
        }
    })

    export {fetchJoke};
    export default jokeSlice.reducer;