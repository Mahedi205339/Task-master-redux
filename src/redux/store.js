import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './features/Tasks/taskSlice';
import usersSlice from './features/users/usersSlice';
const store = configureStore({
    reducer: {
        taskSlice: taskSlice,
        usersSlice: usersSlice,
    },
});
export default store;
