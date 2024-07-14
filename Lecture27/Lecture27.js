// // in TaskContext
// import { Children, createContext, useState } from "react";
// import{v4 as randomUUID} from "uuid";
// const TaskContext=createContext();
// const TASK_EDITABLE_FIELD_LIST=["title","description"];

// const TaskProvider=({children})=>{
//     const[taskList,setTaskList]=useState([]);
//     const addNewTask=(task)=>{
//         setTaskList([...taskList,{...task,createdDate:new Date(),taskId:randomUUID()}])
//     };
//     const deleteTask=(taskId)=>{
//         setTaskList(taskList.filter((task)=>task.taskId!==taskId));
//     }
//     const editTask=(task)=>{
//         let tempTaskList=[...taskList];
//         for (let t of tempTaskList){
//             if(t.taskId===task.taskId){
//                 TASK_EDITABLE_FIELD_LIST.forEach((field)=>(t[field]=task[field]))
//             }
//         }
//         setTaskList(taskList);
//     }



//     return(
//         <TaskContext.Provider value={{taskList,addNewTask,deleteTask,editTask}}>
//             {children}
//         </TaskContext.Provider>
//     )
// }

// export {TaskProvider};
// export default TaskContext;


// // in AddTask
// import { useContext, useState } from "react";
// import TaskContext from "../context/TaskContext";
// import { useNavigate } from "react-router-dom";
// const AddTask=()=>{

//     const {addNewTask}=useContext(TaskContext);
//     const navigate=useNavigate();

//     const [task,setTask]=useState({
//         title:"",description:"",
//     })

//     let handleInputChange=(e)=>{
//         // console.log(e.target.value);
//         // console.log(e.target.name);
//         setTask({
//             ...task,[e.target.name]:e.target.value,
//         })
//     }
//     let onFormSubmit=(e)=>{
//         e.preventDefault();
//         console.log(task);
//         addNewTask(task);
//         setTask({});
//         navigate("/");
//     }


//     // return <p>This is AddTask</p>
//     return (
//         <section className="screen">
//         <h3 className="ui heading center">Add New Task</h3>
//         <div className="ui form">
//         <form onSubmit={onFormSubmit}>
//         <div className="field">
//         <label >Title</label>
//         <input type="text" spellCheck={false} data-ms-editor={true} placeholder="task title" name="title" onChange={handleInputChange} value={task.title}/>
//         </div>
//             <div className="field">
//             <label>Description</label>
//             <textarea rows="2" spellCheck={false} data-ms-editor={true} placeholder="task description" name="description" onChange={handleInputChange} value={task.description}/>
//             </div>
//             <button type="submit" className="ui primary button">Submit</button>
//         </form>
//         </div>
//         </section>
//     )
// }

// export default AddTask;


// // in ToDoScreen
// // import { useState } from "react";
// import { useContext } from "react";
// import Task from "../components/Task";
// import AddTask from "../components/AddTask";
// import TaskContext from "../context/TaskContext";
// import { useNavigate } from "react-router-dom";
// // import {Component} from "react";

// // class ToDoScreen extends Component{
// //   state={
// //     taskCount:0,
// //   }
// //   render(){
// // return(
// //   <div className="screen">
// //   <h1 className="ui heading center"> ToDo List </h1>
// //   <div>
// //     <button onClick={(e)=>{
// //       this.setState({
// //         ...this.state,taskCount:this.state.taskCount+1,
// //       });
// //       console.log(this.state.taskCount);
// //       // this.taskCount++;
// //       // console.log(this.taskCount);
// //       // console.log("Add task button clicked");
// //     }} className="ui secondary button">Add Task</button>
// //     <p>The number of tasks are: {this.state.taskCount}</p>
// //   </div>
// //   </div>
// // )
// //   }
// // }

// const ToDoScreen = () => {
//   // const [taskList, setTaskList] = useState([]);
//   const {taskList} = useContext(TaskContext);
//   const navigate=useNavigate();
//   // let addNewTask=(task)=>{
//   //   setTaskList([...taskList,{...task,createdDate:new Date()}])
//   // }

//   // const[taskCount,setTaskCount]=useState(0);
//   return (
//     <>
//     <div className="screen">
//       <h1 className="ui heading center"> ToDo List </h1>
//       <div>
//         <button
//           onClick={(e) => {
//             // setTaskList([
//             //   ...taskList,
//             //   {
//             //     title: "Going to GYM",
//             //     description: "GOing to GYM is good for health.",
//             //     createdDate: new Date(),
//             //   },
//             // ]);
//             // setTaskCount(taskCount + 1);
//             navigate("/add-task");

//           }}
//           className="ui secondary button"
//         >
//           Add Task
//         </button>
//         <section>
//         <div className="ui cards">
//         {taskList.map((task)=> <Task task={task} key={task.taskId}/>
//       )}
//       </div>
//       </section>
//         {/* <p>The number of tasks are: {taskList.length}</p> */}
//         {/* <p>The number of tasks are: {taskCount}</p> */}
//       </div>
//       {/* <AddTask onSubmit={addNewTask}/> */}
//     </div>
    
//     </>
//   );
// };

// export default ToDoScreen;

// in Task
import TaskContext from "../context/TaskContext";
import { useContext, useState } from "react";
import { formatDate } from "../utils/DateUtils";

// const Task= (props) => {
const Task= ({task:incomingTask}) => {
  const {title,description,createdDate,taskId}=incomingTask;
    // console.log(props);
    const {deleteTask,editTask}=useContext(TaskContext);
    const [isEditing,setIsEditing]=useState(false);
    const[task,setTask]=useState(incomingTask);

    let handleInputChange=(e)=>{
      // console.log(e.target.value);
      // console.log(e.target.name);
      setTask({
          ...task,[e.target.name]:e.target.value,
      })
  }

    if(isEditing){
      return(
        <div className="card">
    <div className="content">
      <div className="ui form">
      {/* <div className="header">{title}</div> */}
      <div className="field">
        {/* <label >Title</label> */}
        <input type="text" spellCheck={false} data-ms-editor={true} placeholder="task title" name="title" onChange={handleInputChange} value={task.title}/></div>
        
      <div class="meta">
        {/* Created Date:  */}
        {formatDate(createdDate)}
      </div>
      {/* <div className="description">{description}</div> */}
      <div className="field">
            {/* <label>Description</label> */}
            <textarea rows="2" spellCheck={false} data-ms-editor={true} placeholder="task description" name="description" onChange={handleInputChange} value={task.description}/>
            </div>
            </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button" onClick={()=>{editTask(task);setIsEditing(false);}}>Save</div>
        <div className="ui basic red button" onClick={()=>setIsEditing(false)}>Cancel</div>
      </div>
    </div>
  </div>
    )
    }


    else{
    return(
        <div className="card">
    <div className="content">
      <div className="header">
        {/* Go to gym */}
        {title}
      </div>
      <div class="meta">
        {/* Created Date:  */}
        {formatDate(createdDate)}
      </div>
      <div className="description">
        {/* Going to gym makes muscles strong. */}
        {description}
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button" onClick={()=>setIsEditing(true)}>Edit</div>
        <div className="ui basic red button" onClick={()=>deleteTask(taskId)}>Delete</div>
      </div>
    </div>
  </div>
    )
  }
};


export default Task;