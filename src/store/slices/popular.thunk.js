import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchPopularRepos} from "../../service/API";

export const getRepos = createAsyncThunk(
    'popular/getRepos',
    async (selectedLanguage, {rejectWithValue}) => {
        try {
            const response = await fetchPopularRepos(selectedLanguage);
            return response;
        } catch (error) {
            throw rejectWithValue(error.message);
        }
    }
);