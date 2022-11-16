import { familyData } from "../db";
import { v4 as uuid } from 'uuid';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected_folder: "",
    family_data: {},
}


const familySlice = createSlice({
    name: "familydata",
    initialState,
    reducers: {
        setFamilyData: (state) => {
            state.family_data = familyData
        },
        setSelectedFolder: (state, action) => {
            state.selected_folder = action.payload
        },
        updateFamilyData: (state, action) => {
            const newItem = {
                id: uuid(),
                name: "Son 3",
                items: [],
            }
            const deepMap = (items, action) => {
                items.map(item => {
                    if (item.id === action.payload) {
                        item.items.push(newItem)
                    }
                    if (item.items.length) {
                        deepMap(item.items, action)
                    }
                    return item;
                })
            }
            state.family_data = {
                ...state.family_data, items: state.family_data.items.map(item => {
                    if (item.id === action.payload) {
                        return { ...item, items: [...item.items, newItem] }
                    }
                    if (item.items.length) {
                        deepMap(item.items, action)
                    }
                    return item;
                })
            }

        }
    }
})

export const { setFamilyData, setSelectedFolder, updateFamilyData } = familySlice.actions;
const familyReducer = familySlice.reducer
export { familyReducer };