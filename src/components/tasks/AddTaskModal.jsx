import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from 'react-redux'
import { addTask } from "../../redux/features/Tasks/taskSlice";
const AddTaskModal = ({ isOpen, setIsOpen }) => {

    const { register, handleSubmit, reset } = useForm()

    const dispatch = useDispatch()

    const onCancel = () => {
        reset(),
            setIsOpen(false)
    }



    const onSubmit = (data) => {
        dispatch(addTask(data))
        onCancel()
    }

    return (
        <Modal
            isOpen={isOpen} setIsOpen={setIsOpen}
            title="Add Task"
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col mb-5">
                    <label className="mb-2 font-bold" htmlFor="title">Title </label>
                    <input
                        className="w-full rounded-md"
                        type="text" {...register('title', { require: true })} />
                </div>
                <div className="flex flex-col mb-5">
                    <label className="mb-2 font-bold" htmlFor="title">Description</label>
                    <textarea
                        className="w-full rounded-md"
                        type="text" {...register('description', { require: true })} />
                </div>
                <div className="flex flex-col mb-5">
                    <label className="mb-2 font-bold" htmlFor="title">Deadline</label>
                    <input
                        className="w-full rounded-md"
                        type="date" {...register('deadline', { require: true })} />
                </div>
                <div className="flex flex-col mb-5">
                    <label className="mb-2 font-bold" htmlFor="title">Assign to</label>
                    <select
                        className="w-full rounded-md"
                        type="date" {...register('assignedTo', { require: true })} >
                        <option value="Mahedi Hasan">Mahedi Hasan</option>
                        <option value="Doreamon">Doreamon</option>
                        <option value="Nobita">Nobita</option>
                        <option value="Shijuka">Shijuka</option>
                        <option value="Geyan">Geyan</option>
                    </select>
                </div>
                <div className="flex flex-col mb-5">
                    <label className="mb-2 font-bold" htmlFor="title">Priority</label>
                    <select
                        className="w-full rounded-md"
                        type="date" {...register('priority', { require: true })} >
                        <option value="low">low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div className="flex gap-3 justify-end text-white font-semibold">
                    <button onClick={onCancel} className="w-20 bg-red-500 hover:bg-red-900 px-2 py-1 rounded-lg" type="button">cancel</button>
                    <button className="w-20 bg-blue-500 hover:bg-blue-900 px-2 py-1 rounded-lg" type="submit">submit</button>
                </div>
            </form>

        </Modal>
    );
};

export default AddTaskModal;