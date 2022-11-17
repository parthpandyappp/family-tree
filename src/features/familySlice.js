import { familyData } from "../db";
import { v4 as uuid } from 'uuid';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected_folder: {},
    family_data: {},
    is_form: false,
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
        toggleForm: (state) => {
            state.is_form = !state.is_form
        },
        updateFamilyData: (state, action) => {
            const { form_data, selected_folder } = action.payload;
            const { id: itemId } = selected_folder;
            const deepMap = (items) => {
                items.map(item => {
                    if (item.id === itemId) {
                        item.items.push({ ...form_data, id: uuid() })
                    }
                    if (item.items.length) {
                        deepMap(item.items)
                    }
                    return item;
                })
            }
            state.family_data = {
                ...state.family_data, items: state.family_data.items.map(item => {
                    if (item.id === itemId) {
                        return { ...item, items: [...item.items, { ...form_data, id: uuid() }] }
                    }
                    if (item.items.length) {
                        deepMap(item.items)
                    }
                    return item;
                })
            }

        }
    }
})

export const { setFamilyData, setSelectedFolder, updateFamilyData, toggleForm } = familySlice.actions;
const familyReducer = familySlice.reducer
export { familyReducer };