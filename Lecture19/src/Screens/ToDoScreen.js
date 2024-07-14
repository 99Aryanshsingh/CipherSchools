import { useState } from "react";
import Task from "../components/Task";
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
  const [taskList, setTaskList] = useState([]);
  // const[taskCount,setTaskCount]=useState(0);
  return (
    <div className="screen">
      <h1 className="ui heading center"> ToDo List </h1>
      <div>
        <button
          onClick={(e) => {
            setTaskList([
              ...taskList,
              {
                title: "Going to GYM",
                description: "GOing to GYM is good for health.",
                createdDate: new Date(),
              },
            ]);
            // setTaskCount(taskCount + 1);
          }}
          className="ui secondary button"
        >
          Add Task
        </button>
        <section>
        <div className="ui cards">
        {taskList.map((task,index)=> <Task task={task} key={index}/>
      )}
      </div>
      </section>
        {/* <p>The number of tasks are: {taskList.length}</p> */}
        {/* <p>The number of tasks are: {taskCount}</p> */}
      </div>
    </div>
  );
};

export default ToDoScreen;
