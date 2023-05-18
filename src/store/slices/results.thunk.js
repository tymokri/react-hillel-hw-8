import {createAsyncThunk} from "@reduxjs/toolkit";
import {goBattle} from "../../service/API";


export const setPlayers = createAsyncThunk(
    'results/setPlayers',
    async (players, {rejectWithValue}) => {
        try {
            const response = await goBattle(players);
            return response;
        } catch (error) {
            throw rejectWithValue(error.message);
        }
    }
);