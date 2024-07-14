// import {Component} from "react";
import ToDoScreen from "./Screens/ToDoScreen";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import AddTask from "./components/AddTask";
import { useContext, useState } from "react";
import {TaskProvider} from "./context/TaskContext";

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
  // const[task,setTask]=useState([]);
  // return <ToDoScreen/>;
  // const[taskList,addNewTask]=useContext(TaskContext);

  // const router=createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<ToDoScreen taskList={taskList}/>,
  //   },
  //   {
  //     path:"/add-task",
  //     element:<AddTask onSubmit={addNewTask}/>,
  //   }
  // ])


  return (
  <TaskProvider>
    <RouterProvider router={router}/>
    </TaskProvider>);
}

export default App;