import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [
        {
            id: 1,
            status: 'pending',
            title: 'Remove Button',
            description:
                'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
            date: '2023-08-28',
            assignedTo: 'Mahedi Hasan',
            priority: 'high',
        }
    ],
    userTasks: [],
}

const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {

        addTask: (state, { payload }) => {
            console.log(payload);

            if (state.tasks.length === 0) {
                state.tasks.push({ id: 1, status: 'pending', ...payload })
            } else {
                const lastElement = state.tasks.at(-1);
                state.tasks.push({
                    id: lastElement.id + 1,
                    status: 'pending',
                    ...payload
                })
            }
        },
        removeTask: (state, { payload }) => {
            state.tasks = state.tasks.filter((item) => item.id !== payload);
        },
        updateStatus: (state, { payload }) => {
            const target = state.tasks.find(item => item.id === payload.id);
            target.status = payload.status;
        },
        userTask: (state, { payload }) => {
            state.userTasks = state.tasks.filter(item => item?.assignedTo === payload);
        }

    }
});
export const { addTask, removeTask, updateStatus, userTask } = taskSlice.actions;
export default taskSlice.reducer