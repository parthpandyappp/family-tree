import { configureStore } from "@reduxjs/toolkit";
import { familyReducer } from "../features";


const store = configureStore({
    reducer: {
        familydata: familyReducer,
    }
})

export default store;