// in AddTask
import ToDoScreen from "./todo-app/src/Screens/ToDoScreen";

const AddTask=()=>{
    // return <p>This is AddTask</p>
    return (
        <>
        <h3 className="ui heading center">Add New Task</h3>
        <div className="ui form">
        <form>
        <div className="field">
        <label >Title</label>
        <input type="text" spellCheck="false" data-ms-editor="true" placeholder="task title" name="title"/>
        </div>
            <div className="field">
            <label>Description</label>
            <textarea rows="2" spellCheck="false" data-ms-editor="true" placeholder="task description" name="description"/>
            </div>
            <button className="ui primary button">Submit</button>
        </form>
        </div>
        </>
    )
}

export default AddTask;

// in ToDoScreen
<AddTask/>