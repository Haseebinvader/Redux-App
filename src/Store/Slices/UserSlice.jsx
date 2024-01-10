import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        },
        removeUser(state, action) {
            // state.pop(action.payload)
            state.splice(action.payload, 1)
        },
        deleteUsers(state, action) {
            return [];
        },
    },
    extraReducers(builder) {
        builder.addCase(userSlice.actions.deleteUsers, () => {
            return [];
        })
    }
})
console.log(userSlice.actions);
export default userSlice.reducer;
export const { addUser, removeUser, deleteUsers } = userSlice.actions