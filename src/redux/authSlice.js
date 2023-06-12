import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    token: ""
}

export const AuthSlice = createSlice({
    name: "dragme",
    initialState,
    reducers: {
        setUser:(state, action) => {
            state.user = action.payload
        },
        setToken:(state, action) => {
            state.token = action.payload
        },
        unSetUser:(state, action) => {
            state.token = action.payload
        }
    }
})

export const {setUser, unSetUser, setToken} = AuthSlice.actions;
export default AuthSlice.reducer;