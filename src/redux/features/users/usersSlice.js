import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'Mahedi Hasan',
    email: 'mahedi205339@gmail.com',
    userTasks: [],
}

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {



    }
});
export const { helo } = usersSlice.actions;
export default usersSlice.reducer