import { createSlice } from "@reduxjs/toolkit";

const deleteCitizenFormUI = createSlice({
    name: 'deleteCitizenUI',
    initialState: {deleteCitizenIsVisible: false},
    reducers: {
        toggle(state) {
            state.deleteCitizenIsVisible = !state.deleteCitizenIsVisible
        }
    }
});
export const deleteCitizenFormUIActions = deleteCitizenFormUI.actions;
export default deleteCitizenFormUI;