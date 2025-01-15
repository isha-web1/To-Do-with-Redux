import { Button } from "../UI/button";
import ToDoCard from "./ToDoCard";


const ToDoContainer = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-xl font-semibold mb-3 ml-4">Add ToDo</Button>
        <button>Filter</button>
      </div>
      <div className="bg-purple-500 w-full h-full rounded-xl p-5 space-y-3">
        {/* <div className="bg-white text-2xl font-bold flex p-5 justify-center items-center rounded-md">
            <p>There is no tusk pending</p>
        </div> */}
        <ToDoCard/>
      </div>
    </div>
  );
};

export default ToDoContainer;
