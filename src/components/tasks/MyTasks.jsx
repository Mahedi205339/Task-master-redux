import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { userTask } from '../../redux/features/Tasks/taskSlice';
const MyTasks = () => {


  const { name: userName } = useSelector((state) => state.usersSlice)
  console.log(userName);

  const { tasks } = useSelector((state) => state.taskSlice);
  console.log(tasks);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userTask(userName))
  }, [dispatch, userName])

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {
          tasks.map(item => {

            <div
              key={item.id}
              className="bg-secondary/10 rounded-md p-3 flex justify-between"
            >
              <h1>{item.title}</h1>
              <div className="flex gap-3">
                <button className="grid place-content-center" title="Details">
                  <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
                </button>
                <button className="grid place-content-center" title="Done">
                  <CheckIcon className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
          })
        }

      </div>
    </div>
  );
};

export default MyTasks;
