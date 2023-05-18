import {createSlice} from '@reduxjs/toolkit';
import {getRepos} from './popular.thunk';

const initialState = {
    selectedLanguage: 'All',
    isLoading: false,
    repos: [],
    error: null,
    myParam: 'All'
};

export const popularSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {
        setMyParam: (state, action) => {
            state.myParam = action.payload;
        },
        setSelectedLanguage: (state, action) => {
            state.selectedLanguage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRepos.pending, state => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(getRepos.fulfilled, (state, action) => {
            state.isLoading = false
            state.repos = action.payload
        })
        builder.addCase(getRepos.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
});

export const {
    setMyParam,
    setSelectedLanguage
} = popularSlice.actions;

export default popularSlice.reducer;