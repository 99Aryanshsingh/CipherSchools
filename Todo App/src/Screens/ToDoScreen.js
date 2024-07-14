// import { useState } from "react";
import { useContext } from "react";
import Task from "../components/Task";
import AddTask from "../components/AddTask";
import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
// import {Component} from "react";

// class ToDoScreen extends Component{
//   state={
//     taskCount:0,
//   }
//   render(){
// return(
//   <div className="screen">
//   <h1 className="ui heading center"> ToDo List </h1>
//   <div>
//     <button onClick={(e)=>{
//       this.setState({
//         ...this.state,taskCount:this.state.taskCount+1,
//       });
//       console.log(this.state.taskCount);
//       // this.taskCount++;
//       // console.log(this.taskCount);
//       // console.log("Add task button clicked");
//     }} className="ui secondary button">Add Task</button>
//     <p>The number of tasks are: {this.state.taskCount}</p>
//   </div>
//   </div>
// )
//   }
// }

const ToDoScreen = () => {
  // const [taskList, setTaskList] = useState([]);
  const {taskList} = useContext(TaskContext);
  const navigate=useNavigate();
  // let addNewTask=(task)=>{
  //   setTaskList([...taskList,{...task,createdDate:new Date()}])
  // }

  // const[taskCount,setTaskCount]=useState(0);
  return (
    <>
    <div className="screen">
      <h1 className="ui heading center"> ToDo List </h1>
      <div>
        <button
          onClick={(e) => {
            // setTaskList([
            //   ...taskList,
            //   {
            //     title: "Going to GYM",
            //     description: "GOing to GYM is good for health.",
            //     createdDate: new Date(),
            //   },
            // ]);
            // setTaskCount(taskCount + 1);
            navigate("/add-task");

          }}
          className="ui secondary button"
        >
          Add Task
        </button>
        <section>
        <div className="ui cards">
        {taskList.map((task)=> <Task task={task} key={task.taskId}/>
      )}
      </div>
      </section>
        {/* <p>The number of tasks are: {taskList.length}</p> */}
        {/* <p>The number of tasks are: {taskCount}</p> */}
      </div>
      {/* <AddTask onSubmit={addNewTask}/> */}
    </div>
    
    </>
  );
};

export default ToDoScreen;
