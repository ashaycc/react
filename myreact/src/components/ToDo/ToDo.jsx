// import React, { useState } from "react";
// import './ToDo.css';

// const ToDo = () => {
//  const [task, setTask] = useState('');
//  const [newTask, setNewTask] = useState([]);

//  const handleChange = (e) =>
//  {
//     setTask(e.target.value);
//  }

//  const handleSubmit=(e)=>{
//   e.preventDefault();
//   if (task.trim() !== ''){
//     setNewTask([...newTask, task]);
//     setTask('');
//   }
//  }

//  const handleRemove= (index) =>{
//   const updateTask=[...newTask];
//   updateTask.splice(index,1);
//   setNewTask(updateTask);

//  }
// return(
//   <div class="container">
//     <h1>Practice 01</h1>
// <p>Update:worked the handleSubmit, button on click of remove</p> */
//     <form onSubmit={handleSubmit}>
//       <input type="text"
//         value={task} onChange={handleChange}
//       />
//       <button type="submit">Add Task</button>
//     </form>
//     <ul>
//       {newTask.map((task,index)=>(
//         <li key={index}>
//           <input type="checkbox"/>
//           <label>{task}</label>
//           <button onClick={()=>handleRemove(index)}>Remove task</button>
//           </li>
//       ))}
//     </ul>
//   </div>
// );
// };

// export default ToDo;

import React, { useState } from "react";
import './ToDo.css';

const ToDo = () => {

const [task,setTask] = useState('');
const [newTask, setNewTask] =useState([]);
const [isEditing, setIsEditing] = useState(false);
const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

const handleChange=(e)=>{
setTask(e.target.value);
}

const handleSubmit=(e)=>{
e.preventDefault();
if(task.trim() !== ''){
  if(isEditing){
    const updatedTask=[...newTask];
    updatedTask[currentTaskIndex]= task;
    setNewTask(updatedTask);
    setIsEditing(false);
    setCurrentTaskIndex(null);
  }
  else{
  setNewTask([...newTask,task]);
  }
  setTask('');
}
}
const handleRemove=(index)=>{
const updatedTask = [...newTask];
updatedTask.splice(index,1);
setNewTask(updatedTask);
if(isEditing && currentTaskIndex === index){
  setIsEditing(false);
  setCurrentTaskIndex(null);
  setTask('');
} 
}
const handleEdit = (index) => {
  setTask(newTask[index]);
  setIsEditing(true);
  setCurrentTaskIndex(index);
}

return(
<div class="container">
<h1>Practice 05</h1>
<p>Update: </p>
<form onSubmit={handleSubmit}>
<input type="text" 
  value={task}
  onChange={handleChange}
/>
<button type="submit">{isEditing ? 'Update task' : 'Add task'}</button>
</form>
<ul>
{newTask.map((task,index)=>(
  <li key={index}>
    <input type="checkbox" />
    <label>{task}</label>
    <button onClick={() => handleEdit(index)}>Edit</button>
    <button onClick={()=>handleRemove(index)}>Remove</button>
  </li>
))}
</ul>
</div>
);
};

export default ToDo;
