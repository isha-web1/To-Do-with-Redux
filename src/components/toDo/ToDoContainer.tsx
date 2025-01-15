

const ToDoContainer = () => {
  return (
    <div>
      <div>
        <button>Add ToDo</button>
        <button>Filter</button>
      </div>
      <div className="bg-purple-500 w-full h-full rounded-xl p-5 space-y-3">
        {/* <div className="bg-white text-2xl font-bold flex p-5 justify-center items-center rounded-md">
            <p>There is no tusk pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default ToDoContainer;
