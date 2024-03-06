
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { userTasks } from '../../redux/features/tasks/taskSlice';
import AssignedTask from './AssignedTask';
const MyTasks = () => {
  // const item = {
  //   id: 1,
  //   status: 'pending',
  //   title: 'Remove Button',
  //   description:
  //     'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
  //   date: '2023-08-28',
  //   assignedTo: 'Mir Hussain',
  //   priority: 'high',
  // };

  const { name: userName } = useSelector((state) => state.usersSlice)
  console.log(userName);

  const { tasks, userSpecificTasks } = useSelector((state) => state.taskSlice);
  console.log(userSpecificTasks);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userTasks(userName))
  }, [dispatch, userName, tasks])

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {

          userSpecificTasks?.map((item) =>
            <AssignedTask item={item} key={item?.id} />
          )

        }
      </div >
    </div >
  );
};

export default MyTasks;
