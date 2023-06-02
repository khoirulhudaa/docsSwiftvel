import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {}
}

export const AuthSlice = createSlice({
    name: "dragme",
    initialState,
    reducers: {
        setUser:(state, action) => {
            state.user = action.payload
        },
        unSetUser:(state, action) => {
            state.user = action.payload
        }
    }
})

export const {setUser, unSetUser} = AuthSlice.actions;
export default AuthSlice.reducer;