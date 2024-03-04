import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './features/Tasks/taskSlice';
const store = configureStore({
    reducer: {
        taskSlice: taskSlice,
    },
});
export default store;
