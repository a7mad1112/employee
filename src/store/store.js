import { configureStore } from "@reduxjs/toolkit";
import createCitizenFormUI from "./slices/createCitizenFormUI";
import updateCitizenFormUI from "./slices/updateCitizenFormUI";
import deleteCitizenFormUI from "./slices/deleteCitizenFormUI";

const store = configureStore({
  reducer: {
    createCitizenUI: createCitizenFormUI.reducer,
    updateCitizenUI: updateCitizenFormUI.reducer,
    deleteCitizenUI: deleteCitizenFormUI.reducer,
  }
})

export default store;