import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    playerOneName: '',
    playerOneImage: null,
    playerTwoName: '',
    playerTwoImage: null,
};

export const battleSlice = createSlice({
    name: 'battle',
    initialState,
    reducers: {
        setPlayerData: (state, action) => {
            state[`${action.payload.id}Name`] = action.payload.value
            state[`${action.payload.id}Image`] = `https://github.com/${action.payload.value}.png?size=200`
        },
        resetPlayerData: (state, action) => {
            state[`${action.payload}Name`] = ''
            state[`${action.payload}Image`] = null
        }
    }
})

export const {
    setPlayerData,
    resetPlayerData
} = battleSlice.actions;

export default battleSlice.reducer;