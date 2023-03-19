import { createSlice } from "@reduxjs/toolkit";

const createCitizenFormUI = createSlice({
    name: 'createCitizenUI',
    initialState: {createCitizenIsVisible: false},
    reducers: {
        toggle(state) {
            state.createCitizenIsVisible = !state.createCitizenIsVisible
        }
    }
});
export const createCitizenFormUIActions = createCitizenFormUI.actions;
export default createCitizenFormUI;