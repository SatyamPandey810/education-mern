import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: 0
    },
    reducers: {
        setUserDetails: (state, action) => {
            state.user = action.payload
        }
    }
})
export const { setUserDetails } = userSlice.actions

export default userSlice.reducer