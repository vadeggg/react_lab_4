import React from "react";
const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
   }
class TodoItem extends React.Component{

    // changeHandler = () => {
    //     console.log("clicked")
    // }
    
       
    render(){
        return(
            <li className="todo-item">
                
            <input type="checkbox" 
                    checked={this.props.todo.completed} 
                    onChange={()=>this.props.handleChangeProps(this.props.todo.id)}
                    />
            <span style={this.props.todo.completed ? completedStyle :null}>
                {this.props.todo.title}
             </span>
            <button onClick={()=>{ this.props.deleteHandlerProps(this.props.todo.id)}}>delete</button>
            </li>
        )
    }
}

export default TodoItem;