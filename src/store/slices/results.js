import {createSlice} from '@reduxjs/toolkit';
import {setPlayers} from "./results.thunk";

const initialState = {
    isLoading: false,
    players: [],
    error: null,
    standoff: false
};

export const resultsSlice = createSlice({
    name: 'results',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(setPlayers.pending, state => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(setPlayers.fulfilled, (state, action) => {
            state.isLoading = false
            state.players = action.payload
            state.standoff = action.payload.every(item => item.score === 0)
        })
        builder.addCase(setPlayers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
});

export default resultsSlice.reducer;