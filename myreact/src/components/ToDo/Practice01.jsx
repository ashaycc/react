import React, { useState } from "react";

const Practice = () => {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState();

  return (
    <div>
      <h1>Practice todo:</h1>
      <form action="">
        <input type="text" name="" id="" />
        <button> Add Task</button>
      </form>
    </div>
  );
};

export default Practice;
