// in ToDoScreen

import AddTask from "./todo-app/src/components/AddTask"

let addNewTask=(task)=>{
    setTaskList([...taskList,{...task,createdDate:new Date()}])
  }

// in AddTask

import { useState } from "react";
const AddTask=()=>{

    const [task,setTask]=useState({
        title:"",description:"",
    })

    let handleInputChange=(e)=>{
        // console.log(e.target.value);
        // console.log(e.target.name);
        setTask({
            ...task,[e.target.name]:e.target.value,
        })
    }
    let onFormSubmit=(e)=>{
        e.preventDefault();
        console.log(task);
    }


    // return <p>This is AddTask</p>
    return (
        <>
        <h3 className="ui heading center">Add New Task</h3>
        <div className="ui form">
        <form onSubmit={onFormSubmit}>
        <div className="field">
        <label >Title</label>
        <input type="text" spellCheck={false} data-ms-editor={true} placeholder="task title" name="title" onChange={handleInputChange}/>
        </div>
            <div className="field">
            <label>Description</label>
            <textarea rows="2" spellCheck={false} data-ms-editor={true} placeholder="task description" name="description" onChange={handleInputChange}/>
            </div>
            <button type="submit" className="ui primary button">Submit</button>
        </form>
        </div>
        </>
    )
}

export default AddTask;