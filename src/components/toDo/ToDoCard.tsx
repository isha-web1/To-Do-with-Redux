

const ToDoCard = () => {
  return (
    <div className="bg-white rounded-xl flex justify-between items-center p-5">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">To Do title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-5">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default ToDoCard;
