// import React, { useState } from 'react'

// const NoteEditor = () => {

//     const [note,setNote] = useState('');
//     const [newNote ,setNewNote]= useState([]);
//     const [editing, setEditing] = useState(false);
//     const [currentNote, setCurrentNote] = useState(null);

//     const handleChange=(e)=>{
//         setNote(e.target.value);
//     }
//     const handleSubmit =(e)=>{
//         e.preventDefault();
//         if(note.trim() !== ''){
//             if(editing){
//                 const updatedNote = [...newNote];
//                 updatedNote[currentNote]=note;
//                 setNewNote(updatedNote);
//                 setEditing(false);
//                 setCurrentNote(null);
//             }
//             else{
//             setNewNote([...newNote,note]);
//             }
//             setNote('');
//         }
//     }
//     const handleRemove=(index)=>{
//         const updatedNote = [...newNote];
//         updatedNote.splice(index,1);
//         setNewNote(updatedNote);
//         if(editing && currentNote === index){
//             setEditing(false);
//             setCurrentNote(null);
//             setNote('');
//           } 
//     }
//     const handleEdit=(index)=>{
//         setNote(newNote[index]);
//         setEditing(true);
//         setCurrentNote(index);
//     }
//   return (
// <div>
//     <form onSubmit={handleSubmit}>
//       <textarea name=""
//       value={note}
//         onChange={handleChange}>
//       </textarea>
//       <button type="submit">{editing ? 'Update Task' : 'Add Task'}</button>
//     </form>
//     <ul>
//         {newNote.map((note,index)=>(
//             <li key={index}>
//                 <label>{note}</label>
//                 <button onClick={() => handleEdit(index)}>Edit</button>
//                 <button onClick={()=>{handleRemove(index)}}>Remove</button>
//             </li>
//         ))}
//     </ul>
// </div>
//   )
// }

// export default NoteEditor


import React, { useState } from 'react'

const NoteEditor = () => {
const [note, setNote] = useState('');
const [newNote , setNewNote] = useState([]);
const [editing,setEditing] = useState(false);
const [currentNote, setCurrentNote]=useState(null);

const handleChange=(e)=>{
setNote(e.target.value);
}
const handleSubmit=(e)=>{
e.preventDefault();

if(note.trim() !== ''){
if(editing){
    const updatedNote =[...newNote];
    updatedNote[currentNote]=note;
    setNewNote(updatedNote);
    setEditing(false);
    setCurrentNote(null);
}
else{
setNewNote([...newNote,note]);
}
setNote('');
}
}
const handleRemove=(index)=>{
const updatedNote=[...newNote];
updatedNote.splice(index,1);
setNewNote(updatedNote);
if(editing && currentNote === index){
setEditing(false);
setCurrentNote(null);
setNote('');

}
}
const handleEditing=(index)=>{
        setNote(newNote[index]);
        setEditing(true);
        setCurrentNote(index);
}
return (
<div>
<form onSubmit={handleSubmit}>
<textarea name="" value={note} onChange={handleChange}></textarea>
<button type="submit">{editing ? 'Update task' : 'Add Task'}</button>
</form>
<ul>
{newNote.map((note,index)=>(
<li key={index}>
    <label>{note}</label>
    <button onClick={()=>handleEditing(index)}>Edit Note</button>
    <button onClick={()=>handleRemove(index)}>Remove note</button>
</li>
))}
</ul>
</div>
)
}

export default NoteEditor