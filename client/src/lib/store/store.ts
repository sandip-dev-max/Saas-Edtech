import { configureStore } from "@reduxjs/toolkit";
import authslice from "../store/auth/authSlice";

const store = configureStore({
    reducer: {
        auth: authslice,
        
    }
});
export default store;

export type AppDispatch =  typeof store.dispatch // useDispatch lai type dina chayenxa 
export type RootState = ReturnType<typeof store.getState> // useSelector lai type dina chayenxa
