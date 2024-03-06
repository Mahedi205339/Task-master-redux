import {
    CheckIcon,
    DocumentMagnifyingGlassIcon,
  } from '@heroicons/react/24/outline';

const AssignedTask = ({item}) => {
    console.log(item);
    
    return (
        < div
            className="bg-secondary/10 text-black rounded-md p-3 flex justify-between"
        >

            < h1 > {item?.title}</h1>

            <div className="flex gap-3">
                <button className="grid place-content-center" title="Details">
                    <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
                </button>
                <button className="grid place-content-center" title="Done">
                    <CheckIcon className="w-5 h-5 text-primary" />
                </button>
            </div>
        </div>
    );
};

export default AssignedTask;