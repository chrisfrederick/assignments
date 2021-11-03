const Todo = (props)=>{
    const todoClasses = [];

    if(props.todo.complete){
    todoClasses.push("strikethrough");
    }

    return ( 
    <div>
        <input onChange={(e)=>{
            props.handleCheckToggle(props.i);
        }} checked={props.todo.complete} style={{marginRight:"10px"}} type="checkbox"/>

        <span className={todoClasses.join(" ")}>{props.todo.text}</span>

        <button onClick={(e)=>{
        props.handleToDoDelete(props.i)
    }} style={{marginLeft:"10px"}}>Delete</button>
  </div>)
}
export default Todo