import { createSlice } from "@reduxjs/toolkit";

const menuOpenSlice = createSlice({
    name: 'menuOpen',
    initialState: false,
    reducers: {
        OpenMenu(state, action) {
            return state = true
        },
        CloseMenu(state, action) {
            return state = false
        }
    }
})

export const { OpenMenu, CloseMenu } = menuOpenSlice.actions
export default menuOpenSlice.reducer