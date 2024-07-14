
// // in AddTask
// import { useState } from "react";
// const AddTask=({onSubmit})=>{

import ToDoScreen from "./todo-app/src/Screens/ToDoScreen";

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
//         onSubmit(task);
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
// import { useState } from "react";
// import Task from "../components/Task";
// import AddTask from "../components/AddTask";
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
//   const [taskList, setTaskList] = useState([]);
//   let addNewTask=(task)=>{
//     setTaskList([...taskList,{...task,createdDate:new Date()}])
//   }

//   // const[taskCount,setTaskCount]=useState(0);
//   return (
//     <>
//     <div className="screen">
//       <h1 className="ui heading center"> ToDo List </h1>
//       <div>
//         <button
//           onClick={(e) => {
//             setTaskList([
//               ...taskList,
//               {
//                 title: "Going to GYM",
//                 description: "GOing to GYM is good for health.",
//                 createdDate: new Date(),
//               },
//             ]);
//             // setTaskCount(taskCount + 1);
//           }}
//           className="ui secondary button"
//         >
//           Add Task
//         </button>
//         <section>
//         <div className="ui cards">
//         {taskList.map((task,index)=> <Task task={task} key={index}/>
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


// in App.js

// import {Component} from "react";
import ToDoScreen from "./Screens/ToDoScreen";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import AddTask from "./components/AddTask";
import { useState } from "react";

// class App extends Component{
//   render(){
//     return <ToDoScreen />;
//   }
// }

const router=createBrowserRouter([
  {
    path:"/",
    element:<ToDoScreen/>,
  },
  {
    path:"/add-task",
    element:<AddTask/>,
  }
])
const App=()=>{
  const[task,setTask]=useState([]);
  // return <ToDoScreen/>;
  return <RouterProvider router={router}/>;
}

export default App;