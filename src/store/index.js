import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from "redux-logger";
import popularReducer from './slices/popular';
import battleReducer from './slices/battle';
import resultsReducer from './slices/results';

const logger = createLogger({
    collapsed: true
});

const store = configureStore({
    reducer: {
        popular: popularReducer,
        battle: battleReducer,
        results: resultsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;