import { configureStore } from "@reduxjs/toolkit";
import menuOpenReducer from './menuReducer';

const reduxStore = configureStore({
    reducer: {
        menuOpen: menuOpenReducer,
    }
})

export default reduxStore