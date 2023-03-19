import { createSlice } from "@reduxjs/toolkit";

const updateCitizenFormUI = createSlice({
    name: 'updateCitizenUI',
    initialState: {updateCitizenIsVisible: false},
    reducers: {
        toggle(state) {
            state.updateCitizenIsVisible = !state.updateCitizenIsVisible
        }
    }
});
export const updateCitizenFormUIActions = updateCitizenFormUI.actions;
export default updateCitizenFormUI;